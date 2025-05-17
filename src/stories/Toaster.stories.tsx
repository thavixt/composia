import type { ComponentProps } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { toast, Toaster } from '@/components/ui/toaster';
import { Button } from "@/components/ui/button"

interface PromiseToastResult {
  result: string;
  ms: number;
}

const meta = {
  title: 'Stories/Toaster',
  component: Toaster,
  tags: ['autodocs'],
  decorators: (Story) => (
    <div className='size-full px-4 py-12'>
      <Story />
    </div>
  ),
  args: {
    className: '',
    closeButton: false,
    dir: 'ltr',
    duration: 10_000,
    expand: true,
    position: 'bottom-right',
    richColors: true,
    toastOptions: {},
    visibleToasts: 5,
  },
  render: function RenderToasterStory(args: ComponentProps<typeof Toaster>) {
    return (
      <div className='flex flex-col gap-2 items-center justify-center'>
        <p>
          There is a <code>{`<Toast />`}</code> provider component, that should be included once in the component tree at the root of the app.
        </p>
        <Toaster {...args} />
        <div className="flex gap-4">
          <Button
            variant="ghost"
            onClick={() => toast("Something happened, I guess.")}
          >
            Create default toast
          </Button>
          <Button
            variant="ghost"
            onClick={() => toast("Something happened", {
              description: `at ${(new Date()).toLocaleString()}`,
            })}
          >
            Create toast with description
          </Button>
        </div>
        <div className="flex gap-2">
          <Button
            variant="outline"
            onClick={() => toast.success("Something great happened!")}
          >
            Create success toast
          </Button>
          <Button
            variant="outline"
            onClick={() => toast.info("This is a notice about your extended warranty.")}
          >
            Create info toast
          </Button>
          <Button
            variant="outline"
            onClick={() => toast.warning(
              "This toast contains crucial information that you should not miss!",
              {
                closeButton: true,
                duration: Infinity,
              },
            )}
          >
            Create warning toast
          </Button>
        </div>
        <div className="flex gap-2">
          <Button
            variant="destructive"
            onClick={() => toast.error(
              "This toast contains information about a critical failure.",
              {
                closeButton: true,
                description: "That really just happened, wow!",
                duration: Infinity,
              }
            )}
          >
            Create error toast
          </Button>
          <Button
            onClick={() => {
              const promise = () => new Promise<PromiseToastResult>((resolve, reject) => {
                const ms = Math.round(Math.random() * 2000) + 2000;
                setTimeout(() => {
                  if (Math.random() > 0.3) {
                    resolve({ result: 'That promise was fulfilled', ms });
                  } else {
                    reject({ result: 'Ooooops!', ms })
                  }
                }, ms);
              });

              toast.promise<PromiseToastResult>(promise, {
                closeButton: true,
                duration: Infinity,
                loading: "This toast will contain information... eventually.",
                success: (data) => {
                  return `${data.result} in ${data.ms}ms.`;
                },
                error: (data) => {
                  return `${data.result} - an error happened after ${data.ms}ms.`;
                },
              })
            }}
          >
            Create promise toast
          </Button>
          <Button
            onClick={() =>
              toast("Event has been created", {
                description: `starting at ${(new Date()).toLocaleString()}`,
                action: {
                  label: "Undo",
                  onClick: () => console.log("Undo"),
                },
              })
            }
          >
            Create toast with action
          </Button>
        </div>
      </div>
    );
  },
} satisfies Meta<typeof Toaster>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
