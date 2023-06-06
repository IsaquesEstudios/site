import { BsCheckLg } from 'react-icons/bs'


interface CheckedListProps {
  text: string;
}

export default function CheckedList({ text }: CheckedListProps) {
  return (
    <li className='list-none flex items-center mb-2'><BsCheckLg className='text-yellow-900 mr-1' size='24' /> {text}</li>
  )
}