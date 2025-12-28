import { StatsCard } from "./StatsCard";
import ChargepointsChart from "./ChargepointsChart";
import { charepointsByMonth, charepointsByDay } from "../data/chargepoints";
import { months } from "../data/months";
import { days } from "../data/days";
import { stats } from "../data/stats";

const ResultsContent = () => {
  return (
    <>
      <div className="rounded-3xl bg-[#161d1acc] px-4 py-8 md:px-16">
        <h2 className="text-center text-white md:text-start">
          Simulation Parameters
        </h2>
        <div className="grid grid-cols-2 gap-x-6 gap-y-3 sm:grid-cols-3 lg:grid-cols-5">
          <div>
            <p className="text-muted-foreground text-lg text-[#87928c]">
              Chargepoints
            </p>
            <p className="text-foreground text-sm font-semibold text-green-500">
              33 units
            </p>
          </div>
          <div>
            <p className="text-muted-foreground text-lg text-[#87928c]">
              Saturation
            </p>
            <p className="text-foreground text-sm font-semibold text-green-500">
              33%
            </p>
          </div>
          <div>
            <p className="text-muted-foreground text-lg text-[#87928c]">
              Car Consumption
            </p>
            <p className="text-foreground text-sm font-semibold text-green-500">
              33 kWh
            </p>
          </div>
          <div>
            <p className="text-muted-foreground text-lg text-[#87928c]">
              Charging Power
            </p>
            <p className="text-foreground text-sm font-semibold text-green-500">
              33 kW
            </p>
          </div>
          <div>
            <p className="text-muted-foreground text-lg text-[#87928c]">
              Duration
            </p>
            <p className="text-foreground text-sm font-semibold text-green-500">
              33 days
            </p>
          </div>
        </div>
      </div>
      <ChargepointsChart
        data={charepointsByMonth}
        dropdownMenuOptions={months}
        title="Charging Values (in kW) per Chargepoint"
        description=" Total kW delivered by each Chargepoint"
      />
      <ChargepointsChart
        data={charepointsByDay}
        dropdownMenuOptions={days}
        title="An exemplary day"
        description="Total kW delivered by each Chargepoint by day"
      />

      <div className="grid justify-center gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {stats.map((stat, index) => (
          <StatsCard
            key={index}
            topline={stat.topline}
            value={stat.value}
            description={stat.description}
            icon={stat.icon}
          />
        ))}
      </div>
    </>
  );
};

export default ResultsContent;
