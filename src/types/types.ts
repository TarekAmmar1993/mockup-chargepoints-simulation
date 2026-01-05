import type { TooltipContentProps } from "recharts";

export type ChartTooltipProps = TooltipContentProps<string | number, string> & {
  valueLabel?: string;
};

export interface Chargepoint {
  id: string;
  count: number;
  power: number;
}
export interface State {
  chargepoints: Chargepoint[];
  saturation: number;
  carConsumption: number;
  simulationInterval: number;
}

export type Action =
  | { type: "SET_CHARGEPOINTS"; payload: Chargepoint[] }
  | { type: "SET_SATURATION"; payload: number }
  | { type: "SET_CAR_CONSUMPTION"; payload: number }
  | { type: "SET_SIMULATION_INTERVAL"; payload: number }
  | { type: "ADD_CHARGEPOINT"; payload: Chargepoint }
  | { type: "REMOVE_CHARGEPOINT"; payload: string }
  | {
      type: "UPDATE_CHARGEPOINT";
      payload: { id: string; field: "count" | "power"; value: number };
    }
  | { type: "RESET" };

export interface FormInputProps {
  label: string;
  name: string;
  type?: string;
  value: number | string;
  placeholder?: string;
  error?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: () => void;
}
export interface CardProps {
  topline: string;
  value: string | number;
  description?: string;
  icon: string;
}
export interface ButtonProps {
  text: string;
  type: "submit" | "reset" | "button";
  onClick?: () => void;
  disabled: boolean;
  iconUrl?: string;
}
export interface ChartDropdownProps {
  options: string[];
  selected: string;
  onSelect: (option: string) => void;
}

// Dummy data types for charts (will be deleted later)
interface dummyChargepoint {
  chargepoint: string;
  totalEnergyCharged: number;
}
interface ChargepointsByMonthData {
  month: string;
  chargepoints: dummyChargepoint[];
}
interface ChargepointsByDayData {
  day: string;
  chargepoints: dummyChargepoint[];
}
export type dummyData = ChargepointsByMonthData | ChargepointsByDayData;
