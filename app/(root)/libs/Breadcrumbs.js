"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import translations from "./translations";
import { useEffect, useState } from "react";
import Image from "next/image";

const Breadcrumbs = () => {
  const pathname = usePathname();
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient || !pathname) {
    return null; // Avoid rendering on the server
  }

  const generateBreadcrumbs = () => {
    const asPathWithoutQuery = pathname.split("?")[0];
    const asPathNestedRoutes = asPathWithoutQuery
      .split("/")
      .filter((v) => v.length > 0);

    const breadcrumbsArray = asPathNestedRoutes.map((subpath, idx) => {
      const href = "/" + asPathNestedRoutes.slice(0, idx + 1).join("/");
      const text = translations[subpath] || subpath; // Translate or use subpath directly
      return { href, text };
    });

    return [{ href: "/", text: translations.home }, ...breadcrumbsArray];
  };

  const breadcrumbs = generateBreadcrumbs();

  return (
    <nav
      aria-label="breadcrumb"
      className="main-nav container flex items-center gap-[10.12px] !bg-white !p-0 !pr-[10px]"
    >
      {breadcrumbs.map((element, index) => {
        return (
          <Link
            key={index}
            href={element.href}
            className="flex items-center gap-[10.12px]"
            style={{
              color: index == 0 && "#666464",
            }}
          >
            {element.text}{" "}
            {breadcrumbs.length <= index + 1 ? null : (
              <Image
                src={"/imgs/leftArrow.svg"}
                width={100}
                height={100}
                className="h-[7.48px] w-[3.74px]"
              />
            )}
          </Link>
        );
      })}
    </nav>
  );
};

export default Breadcrumbs;
