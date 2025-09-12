"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

interface ActiveLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
}

export default function ActiveLink({
  href,
  children,
  className = "",
}: ActiveLinkProps) {
  const pathName = usePathname();

  const isActive =
    pathName === href || (href !== "/" && pathName.startsWith(href));

  return (
    <Link
      href={href}
      className={`relative px-2 py-1 text-lg transition-all duration-300 ease-in-out 
          ${className} 
          ${
            isActive
              ? "text-blue-500 font-semibold"
              : "text-gray-700 hover:text-green-600"
          }
        `}
    >
      {children}
      {/* Анимированная линия */}
      <span
        className={`absolute left-0 bottom-0 w-full h-0.5 bg-gradient-to-r from-green-400 to-green-600 
            transition-all duration-300 ease-in-out 
            ${
              isActive
                ? "opacity-100 scale-x-100"
                : "opacity-0 scale-x-0 hover:scale-x-100 hover:opacity-100"
            }
          `}
      ></span>
    </Link>
  );
}
