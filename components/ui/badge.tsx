import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-2.5 py-1 text-xs font-medium transition-colors",
  {
    variants: {
      variant: {
          default: "border-[#bcdcff] bg-[#eef7ff] text-[#12304f] dark:border-[#213550] dark:bg-[#1e2f47]/50 dark:text-[#8ecbff]",
          cyan: "border-[#8ecbff]/50 bg-[#e8f5ff] text-[#1d5d97] dark:border-[#408ecf]/35 dark:bg-[#408ecf]/10 dark:text-[#8ecbff]",
          purple: "border-[#ffe89a]/70 bg-[#fff8da] text-[#8f6b00] dark:border-[#d6b533]/35 dark:bg-[#d6b533]/10 dark:text-[#ffe89a]",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return <div className={cn(badgeVariants({ variant }), className)} {...props} />;
}

export { Badge, badgeVariants };
