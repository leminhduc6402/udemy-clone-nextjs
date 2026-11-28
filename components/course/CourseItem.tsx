import Image from "next/image";
import Link from "next/link";
import { ClockIcon, EyeIcon, StarIcon } from "../icons";

const CourseItem = () => {
  const courseInfo = [
    {
      title: "1000",
      icon: <EyeIcon className="size-4" />,
    },
    {
      title: "5",
      icon: <StarIcon className="size-4 text-yellow-400" />,
    },
    {
      title: "30h30p",
      icon: <ClockIcon className="size-4" />,
    },
  ];

  return (
    <div className="rounded-lg border border-gray-200 bg-white p-4">
      <Link href="#" className="relative block h-44">
        <Image
          src="https://images.unsplash.com/photo-1716881763995-097b7a68ea3d?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
          width={300}
          height={200}
          className="h-full w-full rounded object-cover"
          sizes="@media (min-width: 640px) 300px, 100vw"
          priority
        />
        <span className="absolute top-3 right-3 rounded-full bg-green-500 px-3 py-1 text-xs text-white">
          New
        </span>
      </Link>
      <div className="pt-4">
        <h3 className="mb-5 text-base font-semibold text-gray-900">
          Advanced React and Next.js
        </h3>
        <div className="mb-4 flex items-center gap-3 text-xs text-gray-500">
          {courseInfo.map((item, index) => (
            <div key={index} className="flex items-center justify-center gap-2">
              {item.icon} <span>{item.title}</span>
            </div>
          ))}
          <span className="text-primary ml-auto text-base font-bold">
            899.000
          </span>
        </div>
      </div>
      <Link
        href="#"
        className="bg-primary hover:bg-primary/80 mt-2 flex w-full items-center justify-center rounded py-3 font-semibold text-white"
      >
        Xem chi tiết
      </Link>
    </div>
  );
};

export default CourseItem;
