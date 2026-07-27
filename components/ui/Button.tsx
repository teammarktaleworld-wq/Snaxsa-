import { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

type CommonProps = {
  variant?: "primary" | "secondary" | "outline" | "whatsapp" | "ghost";
  size?: "sm" | "md" | "lg";
  children: ReactNode;
  icon?: ReactNode;
};

type ButtonAsButton = CommonProps &
  ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined };

type ButtonAsAnchor = CommonProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & { href: string };

type ButtonProps = ButtonAsButton | ButtonAsAnchor;

export default function Button({
  variant = "primary",
  size = "md",
  children,
  icon,
  className,
  href,
  ...props
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center gap-2 font-semibold rounded-full transition-all duration-300 whitespace-nowrap";

  // const variants = {
  //   primary:
  //     "bg-royal-gradient text-white shadow-glow hover:shadow-[0_0_55px_-6px_rgba(107,16,46,0.6)] hover:-translate-y-0.5",
  //   secondary:
  //     "bg-white text-royal shadow-card border border-royal/10 hover:-translate-y-0.5 hover:shadow-lift",
  //   outline:
  //     "border-2 border-royal/20 text-royal bg-white/60 backdrop-blur-sm hover:border-coral hover:text-coral",
  //   ghost: "text-royal hover:text-coral",
  //   whatsapp:
  //     "bg-[#25D366] text-white shadow-card hover:-translate-y-0.5 hover:brightness-105",
  // };


  const variants = {
  primary:
    "bg-royal-gradient text-white shadow-glow hover:shadow-[0_0_55px_-6px_rgba(107,16,46,0.6)] hover:-translate-y-0.5",
  secondary:
    "bg-white text-royal shadow-card border border-royal/10 hover:-translate-y-0.5 hover:shadow-lift",
  outline:
    "border-2 border-royal/20 text-royal bg-white/60 backdrop-blur-sm hover:border-coral hover:text-coral",
  ghost: "text-royal hover:text-coral",
  whatsapp:
    "bg-whatsapp text-white shadow-card hover:-translate-y-0.5 hover:brightness-105",
};

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  if (href) {
    return (
      <a
        href={href}
        className={cn(base, variants[variant], sizes[size], className)}
        {...(props as AnchorHTMLAttributes<HTMLAnchorElement>)}
      >
        {icon}
        {children}
      </a>
    );
  }

  return (
    <button
      className={cn(base, variants[variant], sizes[size], className)}
      {...(props as ButtonHTMLAttributes<HTMLButtonElement>)}
    >
      {icon}
      {children}
    </button>
  );
}
