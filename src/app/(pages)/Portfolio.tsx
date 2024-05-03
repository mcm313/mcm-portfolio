"use client";

import Image from "next/image";
import React from "react";
import HoverButton from "@/components/HoverButton";

const projects = [
  {
    name: "100 Bucketlist",
    skills: ["React", "Javascript", "CSS", "React Router", "MUI"],
    tag: "Personal",
    link: "https://one00-bucketlist.onrender.com",
    desc: "A website checklist that would help you in listing all your goals in life",
    src: "/images/100bucketlist.png",
  },
  {
    name: "BlackJack",
    skills: [
      "React",
      "Javascript",
      "CSS",
      "React Router",
      "MUI",
      "Framer Motion",
    ],
    tag: "Personal",
    link: "https://blackjack-2mzw.onrender.com",
    desc: "A simple website blackjack game to showcase my knowledge in front-end development.",
    src: "/images/blackjack.png",
  },
  {
    name: "Expense Tracker",
    skills: ["React", "Typescript", "MUI"],
    tag: "Personal",
    link: "https://expense-tracker-h7ek.onrender.com",
    desc: "A website ledger for your own personal use. Also can convert from USD, Peso, Yen.",
    src: "/images/100bucketlist.png",
  },
  {
    name: "MCM Portfolio",
    skills: ["React", "Javascript", "MUI", "React Router", "Framer Motion"],
    tag: "Personal",
    link: "https://mcm-portfolio.onrender.com",
    desc: "My first created portfolio website.",
    src: "/images/mcmport.png",
  },
  {
    name: "ApexPoint",
    skills: ["NextJS", "Typescript", "Tailwind", "Framer Motion"],
    tag: "Codebility",
    link: "https://apexpointv2.vercel.app",
    desc: "ApexPoint is a client requested website which showcase the client’s company.",
    src: "/images/apexpoint.png",
  },
  {
    name: "Codebility",
    skills: ["NextJS", "Tailwind"],
    tag: "Codebility",
    link: "https://www.codebility.tech",
    desc: "The main website of the company",
    src: "/images/codebility.png",
  },
];

const hoverContent = (src: string): React.ReactNode => (
  <div className="relative size-full bg-black">
    <Image
      src={src}
      alt="project pic"
      fill
      loading="eager"
      priority
      className="h-[400px] w-[400px] md:object-contain object-cover"
      sizes="(max-width: 600px) 100vw, (max-width: 1024px) 50vw, 400px"
    />
  </div>
);

const Portfolio: React.FC = () => {
  return (
    <section
      id="portfolio"
      className="bg-lime-50 text-navy-blue pt-[25px] px-6 md:h-96 h-min min-h-[670px] max-w-[1000px] flex justify-center items-center overflow-y-hidden w-full bg-cover"
    >
      <div className="flex flex-col w-full h-full p-6 items-center ">
        <p className="md:text-4xl text-2xl font-extrabold">PORTFOLIO</p>
        <div className="flex md:flex-row flex-col w-full gap-4 h-full p-10 text-lime-50">
          <div className="md:w-1/3 w-full flex flex-col gap-4 p-0">
            <HoverButton
              className="md:h-1/2 md:justify-between bg-bold-pink"
              defaultContent={
                <div className="p-2">
                  <p className="md:text-4xl text-2xl font-extrabold">
                    {projects[0].name}
                  </p>
                  <p className="md:text-xl text-md font-medium md:text-end">
                    {projects[0].tag}
                  </p>
                </div>
              }
              hoverContent={hoverContent(projects[0].src)}
              project={projects[0]}
            />
            <HoverButton
              className="md:h-1/2 md:justify-center bg-pale-yellow"
              defaultContent={
                <div className="p-2">
                  <p className="md:text-4xl text-2xl font-extrabold md:text-end">
                    {projects[1].name}
                  </p>
                  <p className="md:text-xl text-md font-medium ">
                    {projects[1].tag}
                  </p>
                </div>
              }
              hoverContent={hoverContent(projects[1].src)}
              project={projects[1]}
            />
          </div>
          <div className="md:w-1/3 w-full flex flex-col gap-4">
            <HoverButton
              className="md:h-2/3 md:justify-center md:items-center bg-navy-blue"
              defaultContent={
                <div className="p-2">
                  <p className="md:text-4xl text-2xl font-extrabold">
                    {projects[5].name}
                  </p>
                  <p className="md:text-xl text-md font-medium ">
                    {projects[5].tag}
                  </p>
                </div>
              }
              hoverContent={hoverContent(projects[5].src)}
              project={projects[5]}
            />
            <HoverButton
              className="md:h-1/3 md:justify-end md:items-end bg-light-pink"
              defaultContent={
                <div className="p-2">
                  <p className="md:text-4xl text-2xl font-extrabold">
                    {projects[4].name}
                  </p>
                  <p className="md:text-xl text-md font-medium">
                    {projects[4].tag}
                  </p>
                </div>
              }
              hoverContent={hoverContent(projects[4].src)}
              project={projects[4]}
            />
          </div>
          <div className="md:w-1/3 w-full flex flex-col gap-4">
            <HoverButton
              className="md:h-1/3 md:items-center md:justify-end bg-pale-yellow"
              defaultContent={
                <div className="p-2">
                  <p className="md:text-4xl text-2xl font-extrabold">
                    {projects[2].name}
                  </p>
                  <p className="md:text-xl text-md font-medium ">
                    {projects[2].tag}
                  </p>
                </div>
              }
              hoverContent={hoverContent(projects[2].src)}
              project={projects[2]}
            />
            <HoverButton
              className="md:h-2/3 md:justify-center bg-bold-pink"
              defaultContent={
                <div className="p-2">
                  <p className="md:text-4xl text-2xl font-extrabold md:text-end">
                    {projects[3].name}
                  </p>
                  <p className="md:text-xl text-md font-medium ">
                    {projects[3].tag}
                  </p>
                </div>
              }
              hoverContent={hoverContent(projects[3].src)}
              project={projects[3]}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
