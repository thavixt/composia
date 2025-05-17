import type { Meta, StoryObj } from '@storybook/react';
import type { ComponentProps } from 'react';
import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts"
import { ChartContainer, ChartTooltip, ChartTooltipContent, ChartLegend, ChartLegendContent, type ChartConfig } from "@/components/ui/chart"

const days = 10;
const numberFormatter = new Intl.NumberFormat("en-US", { style: "decimal", minimumFractionDigits: 0, maximumFractionDigits: 3 });

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "orange",
  },
  mobile: {
    label: "Mobile",
    color: "skyblue",
  },
  tablet: {
    label: "Tablet",
    color: "lightgreen",
  },
} satisfies ChartConfig

const chartData = [
  ...new Array(days).fill(0).map((_, i) => ({
    day: `${(i % days) + 1}`,
    mobile: (Math.round(Math.random() * 10e2 * 100)),
    desktop: (Math.round(Math.random() * 10e2 * 75)),
    tablet: (Math.round(Math.random() * 10e2 * 25)),
  })),
]

type StoryProps = ComponentProps<typeof ChartContainer> & {
  /**
   * <BarChart/>.data
   * @default []
   */
  barChartData: unknown[];
};

const meta = {
  title: 'Stories/Chart',
  component: ChartContainer,
  tags: ['autodocs'],
  //parameters: {
  //	docs: {
  //		description: {
  //			component: 'TODO'
  //		}
  //	}
  //},
  args: {
    className: "min-h-[200px] w-full",
    children: undefined,
  },
  render: (args: StoryProps) => {
    return (
      <div className="flex flex-col items-center justify-center">
        <div className="text-sm text-gray-500 mb-2 font-bold">
          Website visits by platform in the last {days} days
        </div>
        <ChartContainer config={args.config} className={args.className}>
          <BarChart data={args.barChartData}>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="day"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <YAxis
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              // tickFormatter={(value) => `${value}k`}
              tickFormatter={(value) => numberFormatter.format(value)}
            />
            <Bar dataKey="mobile" fill="var(--color-mobile)" radius={4} />
            <Bar dataKey="desktop" fill="var(--color-desktop)" radius={4} />
            <Bar dataKey="tablet" fill="var(--color-tablet)" radius={4} />
            <ChartTooltip content={<ChartTooltipContent labelFormatter={(label) => `Day ${label}`} />} />
            <ChartLegend content={<ChartLegendContent />} />
          </BarChart>
        </ChartContainer>
      </div>
    );
  },
} satisfies Meta<StoryProps>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    barChartData: chartData,
    config: chartConfig,
    // className: "min-h-[200px] w-full",
  },
};
