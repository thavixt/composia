import type { Meta, StoryObj } from '@storybook/react';
import { ThemeOverride, type ThemeVariableDictionary } from '@/components/ui/theme-override';
import { Button } from '@/components/ui/button';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Checkbox } from '@/components/ui/checkbox';

function ThemeVariableDictionaryComp(props: ThemeVariableDictionary) {
  return <div>{JSON.stringify(props)}</div>;
}

const meta = {
  title: 'Components/Theme override',
  component: ThemeOverride,
  subcomponents: {
    ThemeVariableDictionary: ThemeVariableDictionaryComp,
  },
  tags: ['autodocs'],
  args: {
    light: {},
    dark: {},
  },
  render: function Story(args) {
    const hasOverrides = Object.keys({ ...args.light, ...args.dark }).length > 0;
    return (
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-4">
          <Label>Default colors:</Label>
          <Showcase />
        </div>
        {hasOverrides ? (
          <>
            <hr />
            <div className="flex flex-col gap-4">
              <Label>
                Custom color overrides:
              </Label>
              <ThemeOverride {...args}>
                <Showcase />
              </ThemeOverride>
            </div>
          </>
        ) : null}
      </div>
    );
  }
} satisfies Meta<typeof ThemeOverride>;

export default meta;

type Story = StoryObj<typeof meta>;

export const CustomColorOverrides: Story = {
  args: {
    light: {
      'primary': '#33a',
      'accent': 'slategray',
      'destructive': '#bc2a0a',
      'secondary': '#ccf',
      'input': '#aaa',
    },
    dark: {
      'primary': '#bbf',
      'accent': 'gray',
      'destructive': '#f94720',
      'secondary': '#5a5a5a',
      'input': '#aaa',
    },
  }
};

const Showcase = () => {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex gap-2">
        <Button variant='secondary'>Secondary</Button>
        <Button variant='destructive'>Destructive</Button>
        <Button variant='outline'>Outline</Button>
        <Button variant='link'>Link</Button>
        <Button variant='ghost'>Ghost</Button>
        <Button variant='default'>Default</Button>
      </div>
      <RadioGroup defaultValue="option-one">
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="option-one" id="option-one" />
          <Label htmlFor="option-one">Option One</Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="option-two" id="option-two" />
          <Label htmlFor="option-two">Option Two</Label>
        </div>
      </RadioGroup>
      <Input placeholder="Input text placeholder" />
      <div className="flex space-x-2">
        <Checkbox id="checkbox" />
        <Label htmlFor="checkbox">Checkbox</Label>
      </div>
    </div>
  )
}
