import { PacificDropdownType } from "@/types";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./select";

const PacificDropdownSelector = ({
  list,
  selectedValue,
  onValueChange,
  placeholderText,
}: {
  list: PacificDropdownType[]; // List of items
  selectedValue: string; // Currently selected value
  onValueChange: (value: string) => void; // Function to handle value change
  placeholderText?: string;
}) => {
  return (
    <Select
      value={selectedValue}
      onValueChange={(val) => onValueChange(val)} // Update the state on selection
    >
      <SelectTrigger className="bg-primary rounded-[8px] text-white">
        <SelectValue placeholder={selectedValue || placeholderText} />
      </SelectTrigger>
      <SelectContent className="w-fit">
        <SelectGroup>
          {list.map((item) => (
            <SelectItem key={item.id} value={item.value}>
              {item.name}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};

export default PacificDropdownSelector;
