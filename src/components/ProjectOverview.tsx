import { ArrowLineUpRight } from "phosphor-react";

interface ProjectOverviewProps {
  project: Project;
}

export interface Project {
  name: string;
  href: string;
  role: string;
  description: string;
}

export function ProjectOverview(props: ProjectOverviewProps) {
  return (
    <>
      <button className="flex h-[30px] flex-row items-center space-x-2 rounded-md px-2 text-sm text-[#6747f5]  hover:bg-[#cec4c449] dark:text-[#8e71cd] hover:dark:bg-[#4a454549]">
        <a
          href={props.project.href}
          className="text-[#6747f5] dark:text-[#8e71cd]"
        >
          {props.project.name}
        </a>
        <ArrowLineUpRight className="h-4 w-4 text-[#6747f5] dark:text-[#8e71cd]" />
      </button>
      <div className="mb-20 ml-2 mt-4 flex max-w-[350px] flex-col space-y-4">
        <p className="text-sm text-[#080808] dark:text-[#EEEEEE]">
          {props.project.role}
        </p>
        <p className="text-sm text-[#7A7A7A] dark:text-[#B8B8B8]">
          {props.project.description}
        </p>
      </div>
    </>
  );
}
