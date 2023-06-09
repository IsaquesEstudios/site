import Link from "next/link";
import { ReactNode } from "react";

type LiLinkProps = {
  href: string;
  className?: string;
  children: ReactNode;
};

export default function LiLink({
  children,
  className = "",
  href,
}: LiLinkProps) {
  return (
    <li className={` font-light${className}`}>
      <Link href={href}>{children}</Link>
    </li>
  );
}
