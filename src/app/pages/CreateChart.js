"use client";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogSubtitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { TrendingUp } from "lucide-react";
import { CartesianGrid, Line, LineChart, XAxis } from "recharts";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useState } from "react";
import { ChartRender } from "./ChartRender";

export function CreateChart() {
  const [formData, setFormData] = useState({
    chartName: "",
    xAxisName: "",
    yAxisName: "",
    xVal1: "",
    xVal2: "",
    xVal3: "",
    xVal4: "",
    yVal1: "",
    yVal2: "",
    yVal3: "",
    yVal4: "",
  });

  const [dataSaved, setDataSaved] = useState(false);

  function saveValues(e) {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));

    // setFormData(formData[e.target.id], e.target.value);

    // setFormData(formData[e.target.id], e.target.value);

    console.log(formData);
  }

  window.chartData = [];
  let chartTitle;
  let chartJSX;
  let chartConfig = {};

  function releaseValues() {
    console.log("FORM DATA", formData);
    let xAxisTitle = formData.xAxisName;
    let yAxisTitle = formData.yAxisName;
    chartTitle = formData.chartTitle;

    delete formData.xAxisName;
    delete formData.yAxisName;
    delete formData.chartTitle;

    const formDataKeys = Object.keys(formData);

    for (let i = 1; i < formDataKeys.length / 2; i++) {
      const xValue = formData["xVal" + i.toString()];
      const yValue = formData["yVal" + i.toString()];

      window.chartData.push({
        [xAxisTitle]: xValue,
        [yAxisTitle]: parseInt(yValue),
      });
      // i++;
      chartConfig = {
        Month: {
          label: "Month",
          color: "#2563eb",
        },
        Sales: {
          label: "Sales",
          color: "#60a5fa",
        },
      };
    }

    setDataSaved(true);

    chartTitle = formData.chartTitle;
    console.log("CHART DATA", window.chartData);
    chartJSX = (
      <div>
        <h2 className="text-lg">{chartTitle}</h2>
        <ChartContainer config={chartConfig} width="100%" height="100%">
          <LineChart
            // accessibilityLayer
            data={window.chartData}
            // margin={{
            //   left: 12,
            //   right: 12,
            // }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              tickLine={true}
              axisLine={true}
              tickMargin={8}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Line
              dataKey="desktop"
              type="natural"
              stroke="var(--color-desktop)"
              strokeWidth={2}
              dot={true}
            />
          </LineChart>
        </ChartContainer>
      </div>
    );
  }

  return (
    <div>
      <AlertDialog>
        <AlertDialogTrigger asChild>
          <Button>Add chart data</Button>
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Create your chart</AlertDialogTitle>
            <AlertDialogDescription>
              <form>
                <Label htmlFor="name">Name of Chart</Label>
                <Input
                  name="name"
                  type="text"
                  id="chartName"
                  onChange={saveValues}
                  placeholder="Ex: Minecraft Sales 2013"
                />
                <p className="text-md mt-6 mb-2">
                  Enter your values below in the table. Include the names of the
                  x and y axes (limit of 8 values)
                </p>
                <Table className="">
                  <TableCaption>{chartTitle} values</TableCaption>
                  <TableHeader>
                    <TableRow>
                      <TableHead>
                        <Input
                          name="name"
                          id="xAxisName"
                          type="text"
                          placeholder="X-axis title"
                          onChange={saveValues}
                        />
                      </TableHead>
                      <TableHead>
                        <Input
                          name="name"
                          id="yAxisName"
                          type="text"
                          placeholder="Y-axis title"
                          onChange={saveValues}
                        />
                      </TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell className="">
                        <Input
                          name="name"
                          id="xVal1"
                          placeholder="Value"
                          onChange={saveValues}
                        />
                      </TableCell>
                      <TableCell>
                        <Input
                          name="name"
                          id="yVal1"
                          placeholder="Value"
                          onChange={saveValues}
                        />
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="">
                        <Input
                          name="name"
                          id="xVal2"
                          placeholder="Value"
                          onChange={saveValues}
                        />
                      </TableCell>
                      <TableCell>
                        <Input
                          name="name"
                          id="yVal2"
                          placeholder="Value"
                          onChange={saveValues}
                        />
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="">
                        <Input
                          name="name"
                          id="xVal3"
                          placeholder="Value"
                          onChange={saveValues}
                        />
                      </TableCell>
                      <TableCell>
                        <Input
                          name="name"
                          id="yVal3"
                          placeholder="Value"
                          onChange={saveValues}
                        />
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="">
                        <Input
                          name="name"
                          id="xVal4"
                          placeholder="Value"
                          onChange={saveValues}
                        />
                      </TableCell>
                      <TableCell>
                        <Input
                          name="name"
                          id="yVal4"
                          placeholder="Value"
                          onChange={saveValues}
                        />
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </form>
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction onClick={releaseValues}>
              Save data
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
      {dataSaved && <ChartRender chartData={window.chartData} />}
    </div>
  );
}
