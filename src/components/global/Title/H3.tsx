import { ReactNode } from 'react'

type H3Type = {
  children: ReactNode,
  className?: string
}

export default function H3({ children, className }: H3Type) {

  return (
    <h3 className={`font-semibold text-2xl  mobile:text-xl ${className}`}>
      {children}
    </h3>
  )
}