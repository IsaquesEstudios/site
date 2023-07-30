import Link from "next/link";
import { ComponentProps, ReactNode } from "react";

type LinkType = {
  LinkString: string;
  className?: string;
  children?: ReactNode;
};

export default function NavItem({ LinkString, className, children }: LinkType) {
  return (
    // <li className="mobile:w-full tablet:px-10">
      <Link href={LinkString} className={`px-14  py-4 ${className} tablet:px-10 mobile:hover:bg-yellow-800 mobile:w-full`}>
        {children}
      </Link>
    // </li>
  );
}
