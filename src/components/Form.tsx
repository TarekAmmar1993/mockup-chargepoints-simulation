import { useState } from "react";
import FormInput from "./ui/FormInput.tsx";
import { useFormContext } from "../context";
import Button from "./ui/Button.tsx";
import { ChargepointConfigInput } from "./ChargepointConfigInput.tsx";

const Form = ({
  setShowResults,
}: {
  setShowResults: (show: boolean) => void;
}) => {
  const { state, dispatch } = useFormContext();
  const [errors, setErrors] = useState<{
    simulationInterval: string;
  }>({
    simulationInterval: "",
  });

  const handleBlur = (field: string) => {
    switch (field) {
      case "simulationInterval":
        if (state.simulationInterval <= 0) {
          setErrors((prev) => ({
            ...prev,
            simulationInterval: "Simulation interval should be positive",
          }));
        } else if (!Number.isInteger(state.simulationInterval)) {
          setErrors((prev) => ({
            ...prev,
            simulationInterval: "Simulation interval should be an integer",
          }));
        } else {
          setErrors((prev) => ({ ...prev, simulationInterval: "" }));
        }
        break;
      default:
        break;
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    window.location.hash = "report";
    setShowResults(true);
  };

  const resetForm = () => {
    dispatch({ type: "RESET" });
    setErrors({
      simulationInterval: "",
    });
    window.history.replaceState(null, "", "/");
    setShowResults(false);
  };

  const isDisabled =
    Object.values(errors).some((err) => err !== "") ||
    state.chargepoints.length === 0 ||
    !state.simulationInterval;

  return (
    <section className="relative flex flex-col justify-center gap-14 bg-black px-4 py-20 md:flex-row">
      <div className="absolute top-1/2 left-1/2 mb-10 size-140 -translate-x-1/2 -translate-y-1/2 rounded-full bg-green-500/35 blur-[200px]"></div>

      <div className="flex-1 p-8 text-center md:flex md:flex-col md:text-left">
        <h1 className="mb-10 bg-linear-to-r from-white to-green-300 bg-clip-text text-3xl font-medium text-transparent md:text-5xl/15">
          Ready to install some new chargepoints for your parking space
        </h1>
        <p className="mx-auto max-w-86.25 text-sm/6 text-white md:mx-0">
          Run a simulation to see how many chargepoints you can fit in your
          parking space and get some useful insights.
        </p>
      </div>

      <div className="w-full rounded-xl border border-white/10 bg-[#00A63E]/0 p-8 backdrop-blur-sm md:flex-1">
        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 gap-9 xl:grid-cols-2"
        >
          <ChargepointConfigInput />

          <div className="mb-8">
            <label className="input-label" htmlFor="saturation">
              Saturation
            </label>
            <div className="relative pt-8">
              <div
                className="pointer-events-none absolute top-0 left-0 text-center"
                style={{
                  left: `calc(${((state.saturation - 20) / (200 - 20)) * 100}% - 20px)`,
                }}
              >
                <div className="rounded bg-green-500 px-2 py-1 text-sm font-bold whitespace-nowrap text-white">
                  {state.saturation}%
                </div>
              </div>
              <input
                id="saturation"
                type="range"
                min="20"
                max="200"
                value={state.saturation}
                onChange={(e) =>
                  dispatch({
                    type: "SET_SATURATION",
                    payload: parseFloat(e.target.value),
                  })
                }
                className="h-2 w-full cursor-pointer appearance-none rounded-lg bg-gray-200 accent-green-500"
              />
            </div>
          </div>

          <FormInput
            label="Car consumption (kWh)"
            name="carConsumption"
            value={state.carConsumption}
            placeholder="e.g: 60"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              dispatch({
                type: "SET_CAR_CONSUMPTION",
                payload: parseFloat(e.target.value),
              })
            }
          />

          <FormInput
            label="Charging power per point (kW)"
            name="chargingPower"
            value={state.chargingPower}
            placeholder="e.g: 60"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              dispatch({
                type: "SET_CHARGING_POWER",
                payload: parseFloat(e.target.value),
              })
            }
          />

          <FormInput
            label="Simulation interval (days)"
            name="simulationInterval"
            value={state.simulationInterval}
            placeholder="e.g: 60"
            error={errors.simulationInterval}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              dispatch({
                type: "SET_SIMULATION_INTERVAL",
                payload: parseFloat(e.target.value),
              })
            }
            onBlur={() => handleBlur("simulationInterval")}
          />

          <div className="flex items-center justify-between gap-3 md:col-span-full">
            <Button
              text="reset"
              type="reset"
              onClick={resetForm}
              disabled={
                state.chargepoints.length === 0 &&
                state.simulationInterval === 0
              }
              iconUrl={"icons/reset.svg"}
            />
            <Button
              text={"Run Simulation"}
              type={"submit"}
              disabled={isDisabled}
              iconUrl={"icons/run.svg"}
            />
          </div>
        </form>
      </div>
    </section>
  );
};

export default Form;
