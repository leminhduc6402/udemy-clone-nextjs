import { menuItems } from "@/constants";
import Link from "next/link";
import { TMenuItem } from "@/types";
import { Suspense } from "react";
import { ActiveLink } from "../common";
import { UserButton } from "@clerk/nextjs";

export default function Sidebar() {
  return (
    <Suspense fallback={<div className="w-75" />}>
      <div className="flex flex-col border-r border-r-gray-200 bg-white px-4 py-2">
        <Link href="/" className="mb-5 text-3xl font-bold">
          Educamy
        </Link>
        <ul>
          {menuItems.map((item, index) => (
            <MenuItem key={index} {...item} />
          ))}
        </ul>
        <div className="mt-auto flex items-center justify-end">
          {" "}
          <UserButton />
        </div>
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
