import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-4 text-center">
      <h1 className="text-8xl font-extrabold text-primary sm:text-9xl">404</h1>
      <h2 className="mt-4 text-2xl font-bold text-text-main sm:text-3xl">
        Không tìm thấy trang
      </h2>
      <p className="mt-2 max-w-md text-sm text-text-muted sm:text-base">
        Trang bạn đang tìm kiếm không tồn tại, đã bị dời đi hoặc đường dẫn không
        chính xác.
      </p>
      <Link
        href="/"
        className="mt-6 inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-primary-hover"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="size-4"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
          />
        </svg>
        Về trang chủ
      </Link>
    </div>
  );
}
