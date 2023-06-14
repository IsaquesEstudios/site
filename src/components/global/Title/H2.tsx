import { ReactNode } from "react"

interface H2Type {
  children: ReactNode
  id?: string
  className?: string
}

export default function H2({ id, className, children }: H2Type) {

  return (
    <h2 id={id} className={`text-4xl font-medium mb-2 mobile:text-2xl ${className}`}>{children}</h2>
  )
}