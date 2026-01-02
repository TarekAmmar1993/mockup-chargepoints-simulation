import { useState } from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from "recharts";
import { ChartTooltip } from "./ui/Tooltip";

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
  const [isOpen, setIsOpen] = useState(false);

  const handleSelect = (option: string) => {
    setOption(option);
    setIsOpen(false);
  };
  return (
    <div className="flex flex-col rounded-3xl bg-[#161d1acc] px-4 py-8 md:px-16">
      <h2 className="text-start text-white">{title}</h2>
      <p className="mb-6 text-start text-[#87928c]">{description}</p>
      {dropdownMenuOptions && (
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
                className="mt-1 max-h-50 w-full overflow-y-auto rounded border border-gray-300 bg-[#191f1aE6] py-2 text-white shadow-md backdrop-blur-sm"
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
