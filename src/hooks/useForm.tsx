import { useReducer } from "react";
import type { State, Action } from "../types/types";

const initialState: State = {
  nbChargepoints: 0,
  saturation: 100,
  carConsumption: 18,
  chargingPower: 11,
  simulationInterval: 0,
};

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case "SET_NB_CHARGEPOINTS":
      return { ...state, nbChargepoints: action.payload };
    case "SET_SATURATION":
      return { ...state, saturation: action.payload };
    case "SET_CAR_CONSUMPTION":
      return { ...state, carConsumption: action.payload };
    case "SET_CHARGING_POWER":
      return { ...state, chargingPower: action.payload };
    case "SET_SIMULATION_INTERVAL":
      return { ...state, simulationInterval: action.payload };
    default:
      return state;
  }
}

export function useForm() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return { state, dispatch };
}
