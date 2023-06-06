import { FiArrowRight } from 'react-icons/fi'
import H3 from '../Title/H3'


interface ListToCall {
  Title: string
  Paragraph: string
  ButtonText: string
  align?: "end" | "start" | "center",
  id?: string
  className?: string

}

export default function ListToCall({ Title, Paragraph, ButtonText,id, align, className, ...rest }: ListToCall) {

  return (
    <div id={id} className={`mt-8 flex flex-col items-start ${className}`}>
      <H3>{Title}</H3>
      <p className='mt-1'>{Paragraph}</p>
      <div className="flex items-center text-yellow-800 cursor-pointer mt-1">
        <p className='mr-2 duration-500 hover:mr-4'>{ButtonText}</p>
        <FiArrowRight color="yellow.900" />
      </div>
    </div>
  )
}