import React from "react";
import { Project as ProjectType } from "./Types";
import Image from "next/image";
import Link from "next/link";
import ExternalLink from "./Icons/ExternalLink";

interface ProjectProps {
  project: ProjectType;
}

const ProjectModal: React.FC<ProjectProps> = ({ project }) => {
  return (
    <div className="rounded-lg border-pale-yellow flex flex-col gap-2 border-double border-4 text-pretty md:p-4 p-1 px-0 w-full text-navy-blue">
      <h1 className="md:text-3xl text-xl w-full p-1 mb-0 rounded-full bg-light-yellow font-bold">
        {project.name}
      </h1>
      <p className="md:text-xl text-base font-semibold mb-1 p-1 pt-0">
        {project.tag}
      </p>
      <div className="flex md:gap-0.5 md:text-base text-xs p-1 font-medium">
        {project.skills.map((skill, index) => (
          <div key={index}>
            <div className="flex content-center justify-center">
              {skill}
              {index < project.skills.length - 1 && <p>/</p>}
            </div>
          </div>
        ))}
      </div>
      <p className="md:text-base text-xs p-1 pb-0">{project.desc}</p>
      <div className="relative md:w-96 md:h-64 h-44 w-full rounded-lg border-bold-pink border-4">
        <Image
          src={project.src}
          alt="project pic"
          fill
          loading="eager"
          priority
          className="h-[400px] w-[400px] object-cover"
          sizes="(max-width: 600px) 100vw, (max-width: 1024px) 50vw, 400px"
        />
      </div>
      <div className="flex justify-end">
        <Link
          className="relative md:bottom-2 md:right-2 bottom-0.5 right-0.5"
          href={project.link}
          target="_blank"
        >
          <ExternalLink className="md:h-8 md:w-8 w-6 h-6" />
        </Link>
      </div>
    </div>
  );
};

export default ProjectModal;
