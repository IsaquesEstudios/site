import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  className?: string;
}

export default function Button({ className, children }: ButtonProps) {
  return (
    <button
      className={`bg-yellow-800 py-3 text-black-700 rounded-md font-medium text-xl transition hover:bg-yellow-900 ${className}`}
    >
      {children}
    </button>
  );
}
