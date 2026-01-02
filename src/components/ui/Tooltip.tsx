import type { TooltipContentProps } from "recharts";

type ChartTooltipProps = TooltipContentProps<string | number, string> & {
  valueLabel?: string;
};

export const ChartTooltip = ({
  active,
  payload,
  label,
  valueLabel = "Value",
}: ChartTooltipProps) => {
  if (active && payload && payload.length) {
    return (
      <div
        className="rounded-lg p-4"
        style={{
          backgroundColor: "hsl(150 8% 15% / 0.9)",
          color: "white",
          backdropFilter: "blur(8px)",
        }}
      >
        <p className="mb-2 font-bold text-green-500">
          {}
          {label}
        </p>
        <p>{`${payload[0].value} ${valueLabel}`}</p>
      </div>
    );
  }
  return null;
};
