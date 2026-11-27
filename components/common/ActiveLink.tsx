"use client";
import { TActiveLinkProps } from "@/types";
import Link from "next/link";
import { usePathname } from "next/navigation";

const ActiveLink = ({ url, children }: TActiveLinkProps) => {
  const pathname = usePathname();
  const isActive = url === "/" ? pathname === "/" : pathname.startsWith(url);

  return (
    <Link
      href={url}
      className={`my-1 flex items-center gap-2 rounded-md px-4 py-3 font-semibold transition-colors ${
        isActive
          ? "bg-primary/90 svg-animate text-white"
          : "hover:text-primary hover:bg-primary/10"
      }`}
    >
      {children}
    </Link>
  );
};

export default ActiveLink;
