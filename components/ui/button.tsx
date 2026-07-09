import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl text-sm font-semibold transition-all duration-300 disabled:pointer-events-none disabled:opacity-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8ecbff]/60",
  {
    variants: {
      variant: {
        default:
          "bg-linear-to-r from-[#8ecbff] via-[#ffffff] to-[#ffe89a] text-[#12304f] shadow-[0_12px_40px_-18px_rgba(142,203,255,0.75)] hover:-translate-y-0.5 hover:shadow-[0_16px_44px_-18px_rgba(255,232,154,0.85)]",
        outline:
          "border border-[#b8d8f2] bg-white/70 text-[#12304f] hover:border-[#8ecbff] hover:text-[#1d5d97]",
        ghost: "text-[#d5e4ff] hover:bg-[#1a2a43]",
      },
      size: {
        default: "h-11 px-5",
        sm: "h-9 rounded-lg px-3",
        lg: "h-12 rounded-2xl px-6 text-base",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
