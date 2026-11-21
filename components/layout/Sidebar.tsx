import { menuItems } from "@/constants";
import Link from "next/link";

export default function Sidebar() {
  return (
    <div className="p-5 border-r border-r-gray-200">
      <Link href="/" className="font-bold text-3xl mb-4">
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

function MenuItem({
  url,
  title,
  icon,
}: {
  url: string;
  title: string;
  icon?: React.ReactNode;
}) {
  return (
    <li>
      <Link
        href={url}
        className="p-3 rounded-md flex items-center gap-2 hover:text-primary hover:bg-primary/10 transition-all"
      >
        {" "}
        {icon}
        {title}
      </Link>
    </li>
  );
}
