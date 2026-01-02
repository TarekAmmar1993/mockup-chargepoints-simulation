import { useState } from "react";
import type { ChartDropdownProps } from "../../types/types";

export function ChartDropdown({
  options,
  selected,
  onSelect,
}: ChartDropdownProps) {
  const [isOpen, setIsOpen] = useState(false);

  const handleSelect = (option: string) => {
    onSelect(option);
    setIsOpen(false);
  };

  return (
    <div className="relative h-14">
      <div className="absolute top-0 right-0 z-10 flex w-44 flex-col text-sm">
        <button
          type="button"
          onMouseEnter={() => setIsOpen(true)}
          onClick={() => setIsOpen(!isOpen)}
          className="w-full cursor-pointer rounded bg-[#2d864d] px-4 py-2 pr-2 text-left text-white hover:bg-[#21c45d] focus:outline-none"
        >
          <span>{selected}</span>
          <svg
            className={`float-right inline h-5 w-5 transition-transform duration-200 ${
              isOpen ? "rotate-0" : "-rotate-90"
            }`}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="white"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>

        {isOpen && (
          <ul
            onMouseLeave={() => setIsOpen(false)}
            className="mt-1 max-h-50 w-full overflow-y-auto rounded border border-gray-300 bg-[#191f1aE6] py-2 text-white shadow-md backdrop-blur-sm"
          >
            {options.map((option) => (
              <li
                key={option}
                className="cursor-pointer px-4 py-2 hover:bg-green-500 hover:text-white"
                onClick={() => handleSelect(option)}
              >
                {option}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
