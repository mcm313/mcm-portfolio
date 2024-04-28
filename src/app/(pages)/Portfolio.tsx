const projects = [
  {
    name: "100 BUCKETLIST",
    skills: ["React", "Javascript", "CSS", "React Router", "MUI"],
    tag: "Personal",
    link: "https://one00-bucketlist.onrender.com",
    desc: "A website checklist that would help you in listing all your goals in life",
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
  },
  {
    name: "Expense Tracker",
    skills: ["React", "Typescript", "MUI"],
    tag: "Personal",
    link: "https://expense-tracker-h7ek.onrender.com",
    desc: "A website ledger for your own personal use. Also can convert from USD, Peso, Yen.",
  },
  {
    name: "MCM Portfolio",
    skills: ["React", "Javascript", "MUI", "React Router", "Framer Motion"],
    tag: "Personal",
    link: "https://mcm-portfolio.onrender.com",
    desc: "My first created portfolio website.",
  },
  {
    name: "ApexPoint",
    skills: ["NextJS", "Typescript", "Tailwind", "Framer Motion"],
    tag: "Codebility",
    link: "https://apexpointv2.vercel.app",
    desc: "ApexPoint is a client requested website which showcase the client’s company.",
  },
  {
    name: "Codebility",
    skills: ["NextJS", "Tailwind"],
    tag: "Codebility",
    link: "https://www.codebility.tech",
    desc: "The main website of the company",
  },
];

const Portfolio = () => {
  return (
    <section
      id="portfolio"
      className="bg-lime-50 pt-[25px] px-6 text-black md:h-96 h-min min-h-[670px] max-w-[1000px] flex justify-center items-center overflow-y-hidden w-full bg-cover"
    >
      <div className="flex flex-col w-full h-full p-6 items-center">
        <p className="text-4xl font-semibold">PORTFOLIO</p>
        <div className="flex md:flex-row flex-col w-full gap-4 h-full p-10">
          <div className="md:w-1/3 w-full flex flex-col gap-4">
            <button className="h-1/2 border border-black rounded-md p-2 flex flex-col md:justify-between">
              <p className="text-4xl font-extrabold">{projects[0].name}</p>
              <p className="text-xl font-medium md:text-end">
                {projects[0].tag}
              </p>
            </button>
            <button className="h-1/2 border border-black rounded-md p-2 flex flex-col md:justify-center">
              <p className="text-4xl font-extrabold md:text-end">
                {projects[1].name}
              </p>
              <p className="text-xl font-medium ">{projects[1].tag}</p>
            </button>
          </div>
          <div className="md:w-1/3 w-full flex flex-col gap-4">
            <button className="h-2/3 border border-black rounded-md p-2 flex flex-col md:justify-center md:items-center">
              <p className="text-4xl font-extrabold">{projects[5].name}</p>
              <p className="text-xl font-medium ">{projects[5].tag}</p>
            </button>
            <button className="h-1/3 border border-black rounded-md p-2 flex flex-col md:justify-end md:items-end">
              <p className="text-4xl font-extrabold">{projects[4].name}</p>
              <p className="text-xl font-medium">{projects[4].tag}</p>
            </button>
          </div>
          <div className="md:w-1/3 w-full flex flex-col gap-4">
            <button className="h-1/3 border border-black rounded-md p-2 flex flex-col md:items-center md:justify-end">
              <p className="text-4xl font-extrabold">{projects[2].name}</p>
              <p className="text-xl font-medium ">{projects[2].tag}</p>
            </button>
            <button className="h-2/3 border border-black rounded-md p-2 flex flex-col md:justify-center">
              <p className="text-4xl font-extrabold md:text-end">
                {projects[3].name}
              </p>
              <p className="text-xl font-medium ">{projects[3].tag}</p>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
