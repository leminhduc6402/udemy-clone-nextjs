import { menuItems } from "@/constants";
import Link from "next/link";
import ActiveLink from "../common/ActiveLink";
import { TMenuItem } from "@/types";
import { Suspense } from "react";

export default function Sidebar() {
  return (
    <Suspense fallback={<div className="w-75" />}>
      <div className="border-r border-r-gray-200 px-4 py-2">
        <Link href="/" className="mb-5 text-3xl font-bold">
          Educamy
        </Link>
        <ul>
          {menuItems.map((item, index) => (
            <MenuItem key={index} {...item} />
          ))}
        </ul>
      </div>
    </Suspense>
  );
}

function MenuItem({ url, title, icon }: TMenuItem) {
  return (
    <li>
      <ActiveLink url={url}>
        {icon}
        {title}
      </ActiveLink>
    </li>
  );
}
