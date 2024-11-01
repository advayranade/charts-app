import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Nav } from "./pages/nav";
import { CreateChart } from "./pages/CreateChart";
import { ChartDemo } from "./pages/ChartDemo";

export default function App() {
  return (
    <div className="preview min-h-[350px] w-full justify-center p-10 items-center">
      <Nav />
      <br />
      <CreateChart />
    </div>
  );
}
