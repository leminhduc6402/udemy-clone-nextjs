"use client";
import { TActiveLinkProps } from "@/types";
import Link from "next/link";
import { usePathname } from "next/navigation";

const ActiveLink = ({ url, children }: TActiveLinkProps) => {
  const pathname = usePathname();
  const isActive = url === pathname;
  return (
    <Link
      href={url}
      className={`my-1 flex items-center gap-2 rounded-md px-3 py-2 ${
        isActive
          ? "bg-primary svg-animate text-white"
          : "hover:text-primary hover:bg-primary/10"
      }`}
    >
      {children}
    </Link>
  );
};

export default ActiveLink;
