import { ReactNode } from "react";

interface H4Props {
  className?: string;
  children: ReactNode;
}

export default function H4({ className, children }: H4Props) {
  return <h4 className={`font-medium text-2xl min-mobile:text-xl ${className}`}>{children}</h4>;
}
