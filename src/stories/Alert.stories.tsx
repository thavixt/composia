import type { Meta, StoryObj } from '@storybook/react';
import type { ComponentProps } from 'react';
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { AlertCircle } from "lucide-react"

const meta = {
  title: 'Components/Alert',
  component: Alert,
  subcomponents: {
    AlertDescription,
    AlertTitle,
  },
  tags: ['autodocs'],
  args: {
    //
  },
  render: (args: ComponentProps<typeof Alert>) => {
    return (
      <Alert {...args}>
        <AlertCircle className="h-4 w-4" />
        <AlertTitle>Heads up!</AlertTitle>
        <AlertDescription>
          This is an alert component. It can be used to display important messages or notifications to the user.
        </AlertDescription>
      </Alert>
    );
  },
} satisfies Meta<typeof Alert>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
