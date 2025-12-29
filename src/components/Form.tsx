import { useState } from "react";

import FormInput from "./FormInput.tsx";
import { useFormContext } from "../context"; // <-- use context, not useForm

const Form = ({
  toggleDisplayResults,
}: {
  toggleDisplayResults: () => void;
}) => {
  const { state, dispatch } = useFormContext();
  const [errors, setErrors] = useState<{
    nbChargepoints: string;
    simulationInterval: string;
  }>({
    nbChargepoints: "",
    simulationInterval: "",
  });

  const handleBlur = (field: string) => {
    switch (field) {
      case "nbChargepoints":
        if (state.nbChargepoints <= 0) {
          setErrors((prev) => ({
            ...prev,
            nbChargepoints: "Please enter a valid number of chargepoints.",
          }));
        } else {
          setErrors((prev) => ({ ...prev, nbChargepoints: "" }));
        }
        break;
      case "simulationInterval":
        if (state.simulationInterval <= 0) {
          setErrors((prev) => ({
            ...prev,
            simulationInterval: "Please enter a valid simulation interval.",
          }));
        } else {
          setErrors((prev) => ({ ...prev, simulationInterval: "" }));
        }
        break;
      default:
        break;
    }
  };

  const resetForm = () => {
    dispatch({ type: "SET_NB_CHARGEPOINTS", payload: 0 });
    dispatch({ type: "SET_SATURATION", payload: 100 });
    dispatch({ type: "SET_CAR_CONSUMPTION", payload: 18 });
    dispatch({ type: "SET_CHARGING_POWER", payload: 11 });
    dispatch({ type: "SET_SIMULATION_INTERVAL", payload: 0 });
    setErrors({
      nbChargepoints: "",
      simulationInterval: "",
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    window.location.hash = "report";
    e.preventDefault();
    toggleDisplayResults();
  };

  const isDisabled =
    Object.values(errors).some((err) => err !== "") ||
    !state.nbChargepoints ||
    !state.simulationInterval;

  return (
    <>
      <section className="relative flex flex-col justify-center gap-14 bg-black px-4 py-20 md:flex-row">
        <div className="pointer-events-none absolute top-1/2 left-1/2 mb-10 size-140 -translate-x-1/2 -translate-y-1/2 rounded-full bg-green-500/35 blur-[200px]"></div>

        <div className="p-8 text-center md:flex md:flex-col md:justify-center md:text-left">
          <h1 className="mb-10 bg-linear-to-r from-white to-green-300 bg-clip-text text-3xl font-medium text-transparent md:text-5xl/15">
            Ready to install some new chargepoints for your parking space
          </h1>
          <p className="mx-auto max-w-86.25 text-sm/6 text-white md:mx-0">
            Run a simulation to see how many chargepoints you can fit in your
            parking space and get some useful insights.
          </p>
        </div>

        <div className="w-full rounded-xl border border-white/10 bg-[#00A63E]/0 p-8 backdrop-blur-sm">
          <form onSubmit={handleSubmit} className="grid gap-9 xl:grid-cols-2">
            <FormInput
              label="Number of chargepoints"
              name="nbCharpoints"
              value={state.nbChargepoints}
              placeholder="e.g: 4"
              error={errors.nbChargepoints}
              onChange={(e) =>
                dispatch({
                  type: "SET_NB_CHARGEPOINTS",
                  payload: parseFloat(e.target.value),
                })
              }
              onBlur={() => handleBlur("nbChargepoints")}
            />

            <div className="mb-8">
              <label
                className="mb-2 block text-start text-sm text-white"
                htmlFor="saturation"
              >
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
                  name="saturation"
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
              onChange={(e) =>
                dispatch({
                  type: "SET_CAR_CONSUMPTION",
                  payload: parseFloat(e.target.value),
                })
              }
            />

            <FormInput
              label=" Charging power per point (kW)"
              name="chargingPower"
              value={state.chargingPower}
              placeholder="e.g: 60"
              onChange={(e) =>
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
              onChange={(e) =>
                dispatch({
                  type: "SET_SIMULATION_INTERVAL",
                  payload: parseFloat(e.target.value),
                })
              }
              onBlur={() => handleBlur("simulationInterval")}
            />
            <div className="flex justify-between gap-3 xl:col-span-full">
              <button
                onClick={resetForm}
                type="reset"
                className="w-40 cursor-pointer rounded-full bg-red-600 py-3 text-sm text-white transition hover:bg-red-800 active:scale-95"
              >
                <p className="mb-0.5">Reset</p>
              </button>
              <button
                type="submit"
                disabled={isDisabled}
                className="w-40 cursor-pointer rounded-full bg-green-600 py-3 text-sm text-white transition hover:bg-green-800 active:scale-95 disabled:cursor-not-allowed disabled:bg-gray-400"
              >
                <p className="mb-0.5">Run Simulation</p>
              </button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default Form;
