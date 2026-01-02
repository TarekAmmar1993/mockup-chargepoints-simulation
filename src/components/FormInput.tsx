import type { FormInputProps } from "../types/types";

const FormInput = ({
  label,
  name,
  type = "number",
  value,
  placeholder,
  error,
  onChange,
  onBlur,
}: FormInputProps) => (
  <div>
    <label className="mb-2 block text-start text-sm text-white" htmlFor={name}>
      {label}
    </label>
    <input
      id={name}
      type={type}
      placeholder={placeholder}
      className={`w-full rounded-lg border bg-[#00A63E]/5 px-4 py-3 transition placeholder:text-sm focus:outline-none ${
        error
          ? "border-red-500 text-red-500"
          : "border-white/20 text-white/40 placeholder:text-white/40 focus:border-green-600"
      } `}
      value={value}
      onChange={onChange}
      onBlur={onBlur}
    />
    {error && <p className="mt-2 text-start text-sm text-red-500">{error}</p>}
  </div>
);

export default FormInput;
