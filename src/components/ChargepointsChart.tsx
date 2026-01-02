import { useState } from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from "recharts";
import { ChartTooltip } from "./ui/Tooltip";
import { ChartDropdown } from "./ui/Dropdown";

const ChargepointsChart = ({
  data,
  dropdownMenuOptions,
  title,
  description,
}: {
  data: any[];
  dropdownMenuOptions?: string[];
  title: string;
  description: string;
}) => {
  const [option, setOption] = useState(dropdownMenuOptions?.[0] || "");

  return (
    <div className="section-wrapper flex flex-col">
      <h2 className="text-start text-white">{title}</h2>
      <p className="mb-6 text-start text-[#87928c]">{description}</p>
      {dropdownMenuOptions && (
        <ChartDropdown
          options={dropdownMenuOptions}
          selected={option}
          onSelect={setOption}
        />
      )}

      <BarChart
        style={{
          width: "100%",
          maxWidth: "70vw",
          maxHeight: "70vh",
          margin: "0 auto",
          aspectRatio: 1.618,
        }}
        responsive
        data={
          dropdownMenuOptions
            ? data[dropdownMenuOptions.indexOf(option)].chargepoints
            : data[0].chargepoints
        }
        margin={{
          top: 20,
          right: 40,
          left: 0,
          bottom: 60,
        }}
      >
        <CartesianGrid strokeDasharray="3 3 " />
        <XAxis
          dataKey="chargepoint"
          label={{
            value: "Chargepoints",
            position: "bottom",
            offset: 45,
            textAnchor: "middle",
          }}
          tickMargin={30}
        />
        <YAxis
          dataKey="totalEnergyCharged"
          width="auto"
          label={{
            value: "Charging values (in kW)",
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
              valueLabel=" kW energy charged"
              active={false}
              payload={[]}
              coordinate={undefined}
              accessibilityLayer={false}
              activeIndex={undefined}
            />
          }
        />

        <Bar
          dataKey="totalEnergyCharged"
          fill="#21c45d"
          activeBar={{ fill: "#2d864d" }}
          radius={[10, 10, 0, 0]}
        />
      </BarChart>
    </div>
  );
};

export default ChargepointsChart;
