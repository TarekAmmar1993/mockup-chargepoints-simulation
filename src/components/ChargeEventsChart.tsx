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

const dropdownMenuOptions = ["year", "month", "week", "day"];

const ChargeEventsChart = () => {
  const [option, setOption] = useState(dropdownMenuOptions[0]);
  const [isOpen, setIsOpen] = useState(false);

  const handleSelect = (option: string) => {
    setOption(option);
    setIsOpen(false);
  };
  return (
    <div className="flex flex-col rounded-3xl bg-[#161d1acc] px-4 py-8 md:px-16">
      <h2 className="text-start text-white">Number of charging events</h2>
      <p className="mb-6 text-start text-[#87928c]">
        The number of charging events per year/month/week/day
      </p>

      <div className="relative h-14">
        <div className="absolute top-0 right-0 z-10 flex w-44 flex-col text-sm">
          <button
            type="button"
            onMouseEnter={() => setIsOpen(true)}
            onClick={() => setIsOpen(!isOpen)}
            className="w-full cursor-pointer rounded bg-[#2d864d] px-4 py-2 pr-2 text-left text-white hover:bg-[#21c45d] focus:outline-none"
          >
            <span>{option}</span>
            <svg
              className={`float-right inline h-5 w-5 transition-transform duration-200 ${isOpen ? "rotate-0" : "-rotate-90"}`}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="white"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>

          {isOpen && (
            <ul
              onMouseLeave={() => setIsOpen(false)}
              className="mt-1 w-full rounded border border-gray-300 bg-[#191f1aE6] py-2 text-white shadow-md backdrop-blur-sm"
            >
              {dropdownMenuOptions.map((option: string) => (
                <li
                  key={option}
                  className="cursor-pointer px-4 py-2 hover:bg-green-500 hover:text-white"
                  onClick={() => handleSelect(option)}
                >
                  {option}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>

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
