import { useReducer } from "react";
import type { State, Action, Chargepoint } from "../types/types";

const initialState: State = {
  chargepoints: [],
  saturation: 100,
  carConsumption: 18,
  chargingPower: 11,
  simulationInterval: 0,
};

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case "SET_CHARGEPOINTS":
      return { ...state, chargepoints: action.payload };
    case "ADD_CHARGEPOINT":
      return {
        ...state,
        chargepoints: [...state.chargepoints, action.payload],
      };
    case "REMOVE_CHARGEPOINT":
      return {
        ...state,
        chargepoints: state.chargepoints.filter(
          (chargepoint: Chargepoint) => chargepoint.id !== action.payload,
        ),
      };
    case "UPDATE_CHARGEPOINT":
      return {
        ...state,
        chargepoints: state.chargepoints.map((chargepoint: Chargepoint) =>
          chargepoint.id === action.payload.id
            ? { ...chargepoint, [action.payload.field]: action.payload.value }
            : chargepoint,
        ),
      };
    case "SET_SATURATION":
      return { ...state, saturation: action.payload };
    case "SET_CAR_CONSUMPTION":
      return { ...state, carConsumption: action.payload };
    case "SET_CHARGING_POWER":
      return { ...state, chargingPower: action.payload };
    case "SET_SIMULATION_INTERVAL":
      return { ...state, simulationInterval: action.payload };
    case "RESET":
      return initialState;
    default:
      return state;
  }
}

export function useForm() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return { state, dispatch };
}
