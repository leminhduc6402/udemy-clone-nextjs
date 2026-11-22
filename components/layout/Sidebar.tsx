import { menuItems } from "@/constants";
import Link from "next/link";
import ActiveLink from "../common/ActiveLink";
import { TMenuItem } from "@/types";

export default function Sidebar() {
  return (
    <div className="border-r border-r-gray-200 p-5">
      <Link href="/" className="mb-5 text-3xl font-bold">
        Educamy
      </Link>
      <ul>
        {menuItems.map((item, index) => (
          <MenuItem key={index} {...item} />
        ))}
      </ul>
    </div>
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
