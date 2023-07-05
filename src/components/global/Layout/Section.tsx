import { ReactNode } from "react";

interface SectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
}

export default function Section({
  children,
  className,
  id,
  ...rest
}: SectionProps) {
  return (
    <section
      id={id}
      className={`w-full h-full px-[5%] min-[1600px]:m-auto max-w-[1920px] ${className}`}
    >
      {children}
    </section>
  );
}
