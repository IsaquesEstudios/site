import Image from "next/image";
import { ReactNode } from 'react'

interface DoubleColumns{
  children: ReactNode
  id?: string
}

export default function DoubleColumns({ children, id }: DoubleColumns) {

  return (
    <div className={`grid grid-cols-2 grid-rows-1 gap-x-14`} id={id}>
      {children}
    </div>  
  )
}