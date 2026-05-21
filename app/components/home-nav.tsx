"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navigation = [
  { name: "Home", href: "/" },
];

export function HomeNav() {
  const pathname = usePathname();

  if (pathname === "/") {
    return null;
  }

  return (
    <nav className="fixed top-6 left-1/2 z-50 -translate-x-1/2">
      <div className="flex flex-wrap items-center justify-center gap-4 rounded-full px-4 py-3 backdrop-blur-md">
        {navigation.map((item, index) => (
          <Link
            key={item.href}
            href={item.href}
            className={`rounded-full px-6 py-3 text-sm font-medium shadow-sm duration-300 ${
              index === 0
                ? "bg-[#8b6f5a] text-white hover:bg-[#6f5847]"
                : index === 1
                  ? "bg-[#b59882] text-white hover:bg-[#6f5847]"
                  : index === 2
                    ? "bg-[#c7ad99] text-white hover:bg-[#6f5847]"
                    : "border border-[#c7ad91] bg-[#fffaf3]/70 text-[#6f5847] hover:bg-[#ead8c0]"
            }`}
          >
            {item.name}
          </Link>
        ))}
      </div>
    </nav>
  );
}