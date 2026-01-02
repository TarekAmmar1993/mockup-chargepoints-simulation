import { StatsCard } from "./StatsCard";
import ChargepointsChart from "./ChargepointsChart";
import { charepointsByMonth, charepointsByDay } from "../data/chargepoints";
import { months } from "../data/months";
import { stats } from "../data/stats";
import { useFormContext } from "../context";
import ChargeEventsChart from "./ChargeEventsChart";

const ResultsContent = () => {
  const { state } = useFormContext();

  return (
    <div className="flex flex-col gap-14">
      <div className="rounded-3xl bg-[#161d1acc] px-4 py-8 md:px-16">
        <h2 className="text-center text-white">Simulation Parameters</h2>
        <div className="grid grid-cols-2 gap-x-6 gap-y-3 sm:grid-cols-3 lg:grid-cols-5">
          <div className="flex flex-col justify-between">
            <p className="text-muted-foreground text-[#87928c] md:text-2xl">
              Chargepoints
            </p>
            <p className="text-foreground font-semibold text-green-500 md:text-xl">
              {state.nbChargepoints} units
            </p>
          </div>
          <div className="flex flex-col justify-between">
            <p className="text-muted-foreground text-[#87928c] md:text-2xl">
              Saturation
            </p>
            <p className="text-foreground font-semibold text-green-500 md:text-xl">
              {state.saturation}%
            </p>
          </div>
          <div className="flex flex-col justify-between">
            <p className="text-muted-foreground text-[#87928c] md:text-2xl">
              Car Consumption
            </p>
            <p className="text-foreground font-semibold text-green-500 md:text-xl">
              {state.carConsumption} kWh
            </p>
          </div>
          <div className="flex flex-col justify-between">
            <p className="text-muted-foreground text-[#87928c] md:text-2xl">
              Charging Power
            </p>
            <p className="text-foreground font-semibold text-green-500 md:text-xl">
              {state.chargingPower} kW
            </p>
          </div>
          <div className="flex flex-col justify-between">
            <p className="text-muted-foreground text-[#87928c] md:text-2xl">
              Duration
            </p>
            <p className="text-foreground font-semibold text-green-500 md:text-xl">
              {state.simulationInterval} days
            </p>
          </div>
        </div>
      </div>
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
      <ChargepointsChart
        data={charepointsByMonth}
        dropdownMenuOptions={months}
        title="Charging Values (in kW) per Chargepoint"
        description=" Total kW delivered by each Chargepoint in 2025"
      />
      <ChargepointsChart
        data={charepointsByDay}
        title="An exemplary day"
        description="Total kW delivered by each Chargepoint on Tuesday, 14th January 2025"
      />

      <ChargeEventsChart />
    </div>
  );
};

export default ResultsContent;
