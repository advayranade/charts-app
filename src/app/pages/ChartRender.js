import {
  CartesianGrid,
  Line,
  LineChart,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { TrendingUp } from "lucide-react";

export function ChartRender({ chartData, xAxisTitle, yAxisTitle, chartTitle }) {
  const chartConfig = {
    desktop: {
      label: "Desktop",
      color: "hsl(var(--chart-1))",
    },
  };

  let oldChartJSX = (
    <Card className="mt-6">
      <CardHeader>
        <CardTitle>{chartTitle}</CardTitle>
        <CardDescription>
          {xAxisTitle} vs. {yAxisTitle}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <LineChart
            accessibilityLayer
            data={chartData}
            margin={{
              left: 12,
              right: 12,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey={xAxisTitle}
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Line
              dataKey={yAxisTitle}
              type="linear"
              stroke="var(--color-desktop)"
              strokeWidth={2}
              dot={true}
            />
          </LineChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
  let chartJSX = (
    <Card className="mt-6" style={{ width: "auto" }}>
      <CardHeader>
        <CardTitle>{chartTitle}</CardTitle>
        <CardDescription>
          {xAxisTitle} vs. {yAxisTitle}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <LineChart width={500} height={300} data={chartData}>
          <XAxis
            dataKey={xAxisTitle}
            tickLine={true}
            axisLine={true}
            tickMargin={8}
          />
          <YAxis tickLine={true} axisLine={true} tickMargin={8} />
          <Tooltip wrapperStyle={{ backgroundColor: "#ccc", color: "#000" }} />
          <CartesianGrid stroke="#ccc" vertical={false} />
          {/* <ChartTooltip
        cursor={false}
        content={<ChartTooltipContent hideLabel />}
      /> */}
          <Line type="monotone" dataKey={yAxisTitle} stroke="#6abeb4" />
        </LineChart>
      </CardContent>
    </Card>
  );

  return chartJSX;
}
