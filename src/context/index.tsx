import { createContext, type ReactNode, useContext } from "react";
import { useForm } from "../hooks/useForm";
import type { Action, State } from "../types/types";

type FormContextType = {
  state: State;
  dispatch: React.Dispatch<Action>;
};

const FormContext = createContext<FormContextType | undefined>(undefined);

const FormContextProvider = ({ children }: { children: ReactNode }) => {
  const { state, dispatch } = useForm();

  return (
    <FormContext.Provider value={{ state, dispatch }}>
      {children}
    </FormContext.Provider>
  );
};

const useFormContext = () => {
  const ctx = useContext(FormContext);
  if (!ctx)
    throw new Error("useFormContext must be used within FormContextProvider");
  return ctx;
};

export { FormContextProvider, useFormContext };
