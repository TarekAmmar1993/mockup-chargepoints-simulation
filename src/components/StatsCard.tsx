interface StatsCardProps {
  topline: string;
  value: string | number;
  description?: string;
  icon: string;
}
//import zap from "../assets/zap.svg";

export function StatsCard({
  topline,
  value,
  description,
  icon,
}: StatsCardProps) {
  return (
    <div className="flex cursor-pointer justify-between gap-6 rounded-3xl bg-[#161d1acc] p-7 first:col-span-full hover:bg-[#161d1aff]">
      <div className="flex flex-col items-start">
        <p className="text-start text-[#87928c]">{topline}</p>
        <h3 className="mb-0 text-4xl font-bold text-white">{value}</h3>
        {description && <p className="mt-1 text-[#87928c]">{description}</p>}
      </div>

      <div className="h-fit rounded-lg bg-green-950 p-2 opacity-90">
        <img
          src={`icons/${icon}.svg`}
          alt="card icon"
          className="max-w-none"
          height={24}
          width={24}
        />
      </div>
    </div>
  );
}
