import { ReactNode } from "react"

interface IconText {
  children: ReactNode
  title?: string
  text: string
}

export function IconText({ children, title, text }: IconText) {

  return (
    <div className="flex flex-col justify-center items-center text-center w-4/5 m-auto">
      <div>
        {children}
      </div>
      {title && <h4 className="font-bold tracking-wide text-2xl text-yellow-800 mt-4">{title}</h4>}
      <p className="mt-2">{text}</p>
    </div>
  )
}