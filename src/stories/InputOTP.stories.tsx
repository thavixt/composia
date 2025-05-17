import type { Meta, StoryObj } from '@storybook/react';
import type { ComponentProps } from 'react';
import {
  InputOTP,
  InputOTPGroup,
  InputOTPPatterns,
  InputOTPSeparator,
  InputOTPSlot,
} from "@/components/ui/input-otp"
import { fn } from '@storybook/test';

const meta = {
  title: 'Stories/Input (one-time password)',
  component: InputOTP,
  tags: ['autodocs'],
  args: {
    maxLength: 6,
    autoFocus: true,
    children: undefined,
    onChange: fn(console.log),
    onComplete: fn(console.log),
    inputMode: 'numeric',
    // pattern: InputOTPPatterns.onlyChars,
    pattern: InputOTPPatterns.onlyDigits,
    // pattern: InputOTPPatterns.onlyDigitsAndChars,
  },
  render: function RenderInputOTPStory(args: ComponentProps<typeof InputOTP>) {
    return (
      // <InputOTP maxLength={args.maxLength} autoFocus={args.autoFocus}>
      // @ts-expect-error render prop missing
      <InputOTP {...args}>
        <InputOTPGroup>
          <InputOTPSlot index={0} />
          <InputOTPSlot index={1} />
          <InputOTPSlot index={2} />
        </InputOTPGroup>
        <InputOTPSeparator />
        <InputOTPGroup>
          <InputOTPSlot index={3} />
          <InputOTPSlot index={4} />
          <InputOTPSlot index={5} />
        </InputOTPGroup>
      </InputOTP>
    );
  },
} satisfies Meta<typeof InputOTP>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
