import * as React from "react";
import { cn } from "@/lib/utils";

const Input = React.forwardRef<HTMLInputElement, React.ComponentProps<"input">>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "flex h-11 w-full rounded-xl border border-border bg-card px-4 py-2 text-sm text-foreground outline-none transition placeholder:text-foreground/40 focus:border-[#1d5d97] dark:focus:border-[#8ecbff] focus:ring-2 focus:ring-[#1d5d97]/20 dark:focus:ring-[#8ecbff]/20",
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Input.displayName = "Input";

export { Input };
