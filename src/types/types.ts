export type State = {
  nbChargepoints: number;
  saturation: number;
  carConsumption: number;
  chargingPower: number;
  simulationInterval: number;
};

export type Action =
  | { type: "SET_NB_CHARGEPOINTS"; payload: number }
  | { type: "SET_SATURATION"; payload: number }
  | { type: "SET_CAR_CONSUMPTION"; payload: number }
  | { type: "SET_CHARGING_POWER"; payload: number }
  | { type: "SET_SIMULATION_INTERVAL"; payload: number };

export type FormInputProps = {
  label: string;
  name: string;
  type?: string;
  value: number | string;
  placeholder?: string;
  error?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: () => void;
};
