import { useFormContext } from "../context";
import FormInput from "./ui/FormInput.tsx";
import Button from "./ui/Button.tsx";
import type { Chargepoint } from "../types/types";

export function ChargepointConfigInput() {
  const { state, dispatch } = useFormContext();

  const addChargepoint = () => {
    const newChargepoint: Chargepoint = {
      id: Date.now().toString(),
      count: 1,
      power: 11,
    };
    dispatch({ type: "ADD_CHARGEPOINT", payload: newChargepoint });
  };

  const removeChargepoint = (id: string) => {
    dispatch({ type: "REMOVE_CHARGEPOINT", payload: id });
  };

  const updateChargepoint = (
    id: string,
    field: "count" | "power",
    value: number,
  ) => {
    dispatch({
      type: "UPDATE_CHARGEPOINT",
      payload: { id, field, value: Math.max(1, value) },
    });
  };

  return (
    <div className="xl:col-span-2">
      <p className="input-label">Chargepoint Configuration</p>
      <div className="flex flex-col items-center space-y-4 rounded border border-white/10 bg-white/5 p-4">
        {state.chargepoints.length === 0 ? (
          <p className="text-center text-sm text-gray-400">
            No chargepoints added yet
          </p>
        ) : (
          <div className="flex flex-wrap justify-center gap-3">
            {state.chargepoints.map((chargepoint) => (
              <div
                key={chargepoint.id}
                className="relative flex w-fit items-end gap-3 rounded bg-white/5 p-4"
              >
                <FormInput
                  label="Count"
                  name={`count-${chargepoint.id}`}
                  value={chargepoint.count}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    updateChargepoint(
                      chargepoint.id,
                      "count",
                      Number(e.target.value),
                    )
                  }
                />
                <FormInput
                  label="Power (kW)"
                  name={`power-${chargepoint.id}`}
                  value={chargepoint.power}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    updateChargepoint(
                      chargepoint.id,
                      "power",
                      Number(e.target.value),
                    )
                  }
                />

                <button
                  type="button"
                  onClick={() => removeChargepoint(chargepoint.id)}
                  disabled={state.chargepoints.length === 1}
                  className="absolute -top-1.5 -right-1.5 cursor-pointer disabled:cursor-not-allowed"
                >
                  <div className="h-4 w-4 rounded-3xl bg-red-600">
                    <img src="icons/x.svg" alt="remove icon" />
                  </div>
                </button>
              </div>
            ))}
          </div>
        )}

        <Button
          text="+ Add Chargepoint"
          type="button"
          onClick={addChargepoint}
          disabled={false}
        />
      </div>
    </div>
  );
}
