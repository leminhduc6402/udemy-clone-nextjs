import {
  BookOpenIcon,
  CommentIcon,
  ExploreIcon,
  LoginIcon,
  LogoutIcon,
  OrderIcon,
  PlayIcon,
  UserGroupIcon,
} from "@/components/icons";
import { TMenuItem } from "@/types";

export const menuItems: TMenuItem[] = [
  {
    url: "/",
    title: "Khám phá",
    icon: <ExploreIcon className="size-5" />,
  },
  {
    url: "/study",
    title: "Khóa học của tôi",
    icon: <PlayIcon className="size-5" />,
  },
  {
    url: "/manage/courses",
    title: "Quản lý khóa học",
    icon: <BookOpenIcon className="size-5" />,
  },
  {
    url: "/manage/users",
    title: "Quản lý người dùng",
    icon: <UserGroupIcon className="size-5" />,
  },
  {
    url: "/manage/orders",
    title: "Quản lý đơn hàng",
    icon: <OrderIcon className="size-5" />,
  },
  {
    url: "/manage/comments",
    title: "Quản lý bình luận",
    icon: <CommentIcon className="size-5" />,
  },
];
