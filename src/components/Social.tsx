import type { ReactNode } from "react";
import Link from "next/link";

import { ArrowLineUpRight } from "phosphor-react";

interface SocialSectionProps {
  href: string;
  name: string;
  image?: ReactNode;
}

const Links: SocialSectionProps[] = [
  {
    href: "https://github.com/tomasaguiar/",
    name: "Github",
  },
  {
    href: "https://twitter.com/tomasaguiar0",
    name: "Twitter",
  },
  {
    href: "https://www.linkedin.com/in/tom%C3%A1s-aguiar-6690481ab/",
    name: "Linkedin",
  },
];

export function SocialSection() {
  const SocialSectionButton = (props: SocialSectionProps) => {
    return (
      <Link
        className="flex flex-row items-center space-x-2 rounded-md px-[10px] py-[5px] text-[#6747f5] transition-colors hover:bg-[#cec4c449] dark:text-[#8e71cd] hover:dark:bg-[#4a454549]"
        href={props.href}
        passHref
      >
        <span className="text-sm">{props.name}</span>
        <ArrowLineUpRight className="h-4 w-4 text-[#6747f5] dark:text-[#8e71cd]" />
      </Link>
    );
  };

  return (
    <div className="fade-in animation-delay-4 flex flex-row justify-between space-x-14 md:absolute md:right-20 md:bottom-20 2xl:right-60">
      {Links.map((link) => {
        return (
          <SocialSectionButton
            key={link.href}
            href={link.href}
            name={link.name}
          />
        );
      })}
    </div>
  );
}
