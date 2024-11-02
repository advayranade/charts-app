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
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
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
  const [chartData, setChartData] = useState([]); // Step 1: State for chartData
  const [chartTitle, setChartTitle] = useState("");
  const [xAxisTitle, setXAxisTitle] = useState("");
  const [yAxisTitle, setYAxisTitle] = useState("");

  function saveValues(e) {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  }

  function releaseValues() {
    console.log("FORM DATA", formData);
    const newChartData = [];

    for (let i = 1; i <= 4; i++) {
      const xValue = formData[`xVal${i}`];
      const yValue = formData[`yVal${i}`];

      if (xValue && yValue) {
        debugger;
        newChartData.push({
          [formData.xAxisName]: xValue,
          [formData.yAxisName]: parseInt(yValue),
        });
      }
    }

    setChartData(newChartData);
    setXAxisTitle(formData.xAxisName);
    setYAxisTitle(formData.yAxisName);
    setChartTitle(formData.chartName);
    setDataSaved(true);
    console.log("CHART DATA", newChartData);
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
                <Table>
                  <TableCaption>{chartTitle} values</TableCaption>
                  <TableHeader>
                    <TableRow>
                      <TableHead>
                        <Input
                          id="xAxisName"
                          type="text"
                          placeholder="X-axis title"
                          onChange={saveValues}
                        />
                      </TableHead>
                      <TableHead>
                        <Input
                          id="yAxisName"
                          type="text"
                          placeholder="Y-axis title"
                          onChange={saveValues}
                        />
                      </TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {[...Array(4)].map((_, i) => (
                      <TableRow key={i}>
                        <TableCell>
                          <Input
                            id={`xVal${i + 1}`}
                            placeholder="Value"
                            onChange={saveValues}
                          />
                        </TableCell>
                        <TableCell>
                          <Input
                            id={`yVal${i + 1}`}
                            placeholder="Value"
                            onChange={saveValues}
                          />
                        </TableCell>
                      </TableRow>
                    ))}
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
      {dataSaved && (
        <ChartRender
          chartData={chartData}
          chartTitle={chartTitle}
          xAxisTitle={xAxisTitle}
          yAxisTitle={yAxisTitle}
        />
      )}
    </div>
  );
}
