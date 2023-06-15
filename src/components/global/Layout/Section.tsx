import { ReactNode } from "react";

interface SectionProps{
  children: ReactNode;
  className?: string
}

export default function Section({children, className, ...rest}:SectionProps){

  return(
    <section className={`w-full h-full px-[5%] min-[1600px]:m-auto max-w-[1920px] ${className}`}>
      {children}
    </section>
  )
}