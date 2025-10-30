import type { CustomStandardSwitchProps } from "@/types";
import { Switch } from "../ui/switch";

// Custom standard switch
// 
const CustomStandardSwitch = ({ checked, onCheckedChange, className = "" }: CustomStandardSwitchProps) => {
  return (
    <div className={className}>
      <Switch
        className="
          h-5 w-9 shadow-sm shadow-slate-400 ring-1 ring-slate-500/10
          data-[state=checked]:[&>span]:translate-x-[calc(20px-2px)] cursor-pointer
          data-[state=checked]:bg-secondary data-[state=unchecked]:[&span]:bg-white data-[state=unchecked]:bg-slate-100
          [&>span]:bg-slate-200 [&>span]:shadow-sm [&>span]:shadow-slate-500
        "
        checked={checked}
        onCheckedChange={onCheckedChange}
      />
    </div>
  );
};

export default CustomStandardSwitch;
