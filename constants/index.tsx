import { ExploreIcon, PlayIcon } from "@/components/icons";
import { TMenuItem } from "@/types";

export const menuItems: TMenuItem[] = [
  {
    url: "/",
    title: "Khu vực học tập",
    icon: <PlayIcon className="size-5" />,
  },
  {
    url: "/explore",
    title: "Khám phá",
    icon: <ExploreIcon className="size-5" />,
  },
];
