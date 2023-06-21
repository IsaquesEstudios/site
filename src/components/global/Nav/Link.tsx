import Link from "next/link";

interface LinkMenu {
  href: string;
  value: string;
  childToParent?:any
}

export default function LinkMenu({ href, value, childToParent }: LinkMenu) {
  
  return (
    <li className="px-2 mx-2">
      <Link href={href} className="text-lg" >
        {value}
      </Link>
    </li>
  );
}
