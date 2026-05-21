import Link from "next/link";

const navigation = [
  { name: "About Me", href: "/about_me" },
  { name: "Experience", href: "/experiences" },
  { name: "Projects", href: "/projects" },
  { name: "Contact Me", href: "/contact" },
];

export function BottomNav() {
  return (
    <nav className="fixed bottom-6 left-1/2 z-50 -translate-x-1/2">
      <div className="flex flex-wrap items-center justify-center gap-4 rounded-full bg-[#f7efe5]/70 px-4 py-3 shadow-sm backdrop-blur-md">
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