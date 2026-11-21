import ExploreIcon from "@/components/icons/ExploreIcon";
import PlayIcon from "@/components/icons/PlayIcon";

export const menuItems: {
  url: string;
  title: string;
  icon?: React.ReactNode;
}[] = [
  {
    url: "#",
    title: "Khu vực học tập",
    icon: <PlayIcon className="size-5" />,
  },
  {
    url: "#",
    title: "Khám phá",
    icon: <ExploreIcon className="size-5" />,
  },
];
