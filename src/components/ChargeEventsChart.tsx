import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";
import { chargeEvents } from "../data/chargeEvents";
import { useState } from "react";
import { ChartTooltip } from "./ui/Tooltip";
import { ChartDropdown } from "./ui/Dropdown";

const dropdownMenuOptions = ["year", "month", "week", "day"];

const ChargeEventsChart = () => {
  const [option, setOption] = useState(dropdownMenuOptions[0]);

  return (
    <div className="flex flex-col rounded-3xl bg-[#161d1acc] px-4 py-8 md:px-16">
      <h2 className="text-start text-white">Number of charging events</h2>
      <p className="mb-6 text-start text-[#87928c]">
        The number of charging events per year/month/week/day
      </p>

      <ChartDropdown
        options={dropdownMenuOptions}
        selected={option}
        onSelect={setOption}
      />

      <AreaChart
        style={{
          width: "100%",
          maxWidth: "70vw",
          maxHeight: "70vh",
          margin: "0 auto",
          aspectRatio: 1.618,
        }}
        responsive
        data={chargeEvents[dropdownMenuOptions.indexOf(option)].chargepoints}
        margin={{
          top: 20,
          right: 40,
          left: 0,
          bottom: 60,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis
          dataKey={option}
          interval={
            option === "day" ? 30 : option === "week" ? 5 : "preserveEnd"
          }
          angle={-45}
          label={{
            value: "Time",
            position: "bottom",
            offset: 45,
            textAnchor: "middle",
          }}
          tickMargin={30}
        />
        <YAxis
          width="auto"
          label={{
            value: "number of charging events",
            position: "insideLeft",
            angle: -90,
            textAnchor: "middle",
          }}
        />
        <Tooltip
          contentStyle={{
            backgroundColor: "hsl(150 8% 15% / 0.9)",
            borderRadius: "12px",
            backdropFilter: "blur(8px)",
            color: "white",
            border: "none",
          }}
          cursor={{ fill: "hsl(150 8% 15% / 0.5)" }}
          content={
            <ChartTooltip
              valueLabel="charging events"
              active={false}
              payload={[]}
              coordinate={undefined}
              accessibilityLayer={false}
              activeIndex={undefined}
            />
          }
        />
        <Area
          type="monotone"
          dataKey="nbChargeEvents"
          stroke="none"
          fill="#21c45d"
        />
      </AreaChart>
    </div>
  );
};

export default ChargeEventsChart;
