import {
  ExploreIcon,
  LoginIcon,
  LogoutIcon,
  PlayIcon,
} from "@/components/icons";
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
  {
    url: "/sign-in",
    title: "Đăng nhập",
    icon: <LoginIcon className="size-5" />,
  },
  {
    url: "/sign-up",
    title: "Đăng ký",
    icon: <LogoutIcon className="size-5" />,
  },
];
