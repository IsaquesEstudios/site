import { ReactNode } from "react";

interface MainProps {
  children: ReactNode;
  className?: String;
}

export default function Main({ className, children }: MainProps) {
  return <main className={`bg-black-800 min-h-screen  max-w-[1920px] m-auto ${className}`}>{children}</main>;
}
