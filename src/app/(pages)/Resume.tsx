import FilledCircleIcon from "@/components/Icons/FilledCircleIcon";
import CircleIcon from "@/components/Icons/CircleIcon";
import DownloadIcon from "../../components/Icons/downloadIcon";
import BookIcon from "@/components/Icons/BookIcon";
import GlassIcon from "@/components/Icons/glassIcon";
import TimeIcon from "@/components/Icons/TimeIcon";
import UserIcon from "@/components/Icons/UserIcon";
import GameIcon from "@/components/Icons/GameIcon";
import PlaneIcon from "@/components/Icons/PlaneIcon";
import MovieIcon from "@/components/Icons/MovieIcon";
import ClosedBookIcon from "@/components/Icons/ClosedBookIcon";

const personalDetails = [
  { tag: "First Name:", value: "Maria Catherine" },
  { tag: "Last Name:", value: "Mori" },
  { tag: "Address:", value: "Tokyo, Japan" },
  { tag: "Email:", value: "mori.mcatherine@gmail.com" },
  {
    tag: "LinkedIn:",
    value: "linkedin.com/in/maria-catherine-mori-1729b7227/",
  },
  { tag: "Github:", value: "github.com/mcm313" },
];

const experience = [
  {
    yearStart: "2024",
    yearEnd: "Ongoing",
    position: "Frontend Developer",
    company: "Codebility",
  },
  {
    yearStart: "2022",
    yearEnd: "Ongoing",
    position: "Cook",
    company: "McDonalds",
  },
  {
    yearStart: "2010",
    yearEnd: "2018",
    position: "Financial Analyst",
    company: "JPMorgan",
  },
];

const education = [
  {
    course: "Japanese Language Graduate",
    school: "Intercultural Institute of Japan",
  },
  {
    course: "Postgraduate Diploma in Computer Science",
    school: "De La Salle University",
  },
  {
    course: "B.S. Business Administration",
    school: "University of Santo Tomas",
  },
];

const Resume = () => {
  return (
    <section
      id="resume"
      className="bg-lime-50 pt-[25px] px-6 text-black md:h-96 h-min min-h-[670px] max-w-[1000px] flex justify-center items-center overflow-y-hidden w-full bg-cover"
    >
      <div className="flex flex-col md:flex-row  w-full gap-4 h-full p-6 text-pretty">
        <div className="md:w-1/3 w-full flex flex-col gap-4">
          <div className="h-2/3 p-2">
            <p className="text-xl font-semibold pb-3">Personal Info</p>
            <div className="pb-4">
              {personalDetails.map((details, index) => (
                <div key={index} className="flex gap-2">
                  <p>{details.tag}</p>
                  <p className="font-medium">{details.value}</p>
                </div>
              ))}
            </div>
            <div className="flex justify-end">
              <button className="flex border rounded-full p-2">
                <DownloadIcon className="h-6 w-6" />
                Download CV
              </button>
            </div>
          </div>
          <div className="h-1/3 border border-black rounded-md p-2">
            <p className="text-xl font-semibold pb-3">Language</p>
            <div className="px-2">
              <div className="flex items-center justify-between">
                <p>Filipino</p>
                <div className="flex">
                  <FilledCircleIcon className="h-4 w-4" />
                  <FilledCircleIcon className="h-4 w-4" />
                  <FilledCircleIcon className="h-4 w-4" />
                  <FilledCircleIcon className="h-4 w-4" />
                  <FilledCircleIcon className="h-4 w-4" />
                </div>
              </div>
              <div className="flex items-center justify-between">
                <p>English</p>
                <div className="flex">
                  <FilledCircleIcon className="h-4 w-4" />
                  <FilledCircleIcon className="h-4 w-4" />
                  <FilledCircleIcon className="h-4 w-4" />
                  <FilledCircleIcon className="h-4 w-4" />
                  <FilledCircleIcon className="h-4 w-4" />
                </div>
              </div>
              <div className="flex items-center justify-between">
                <p>Japanese</p>
                <div className="flex">
                  <FilledCircleIcon className="h-4 w-4" />
                  <FilledCircleIcon className="h-4 w-4" />
                  <FilledCircleIcon className="h-4 w-4" />
                  <CircleIcon className="h-4 w-4" />
                  <CircleIcon className="h-4 w-4" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="md:w-1/3 w-full border border-black rounded-md p-2">
          <p className="text-xl font-semibold pb-3">Experience</p>
          <div className="flex flex-col gap-1.5">
            {experience.map((exp, index) => (
              <div key={index} className="flex flex-col justify-center">
                <div className="flex gap-2">
                  <div className="flex flex-col w-1/4 items-center">
                    <div className="border flex flex-col justify-center h-16 w-16 text-xs rounded-full text-wrap gap-0.5 text-center">
                      {exp.yearEnd === "Ongoing" ? (
                        <p>
                          {exp.yearStart} to {exp.yearEnd}
                        </p>
                      ) : (
                        <>
                          <p>{exp.yearStart}</p>
                          <p>to</p>
                          <p>{exp.yearEnd}</p>
                        </>
                      )}
                    </div>
                  </div>
                  <div className="h-16 justify-center flex flex-col w-3/4">
                    <p className="font-medium text-lg">{exp.position}</p>
                    <p>{exp.company}</p>
                  </div>
                </div>
                {index < experience.length - 1 && (
                  <p className="text-center w-1/4 pt-1.5">|</p>
                )}
              </div>
            ))}
          </div>
        </div>
        <div className="md:w-1/3 w-full flex flex-col gap-4">
          <div className="h-2/6 border border-black rounded-md p-2">
            <p className="text-xl font-semibold pb-3">Strength</p>
            <div className="flex gap-1 items-center">
              <BookIcon className="h-4 w-4" />
              <p>Eager to learn new skills</p>
            </div>
            <div className="flex gap-1 items-center">
              <GlassIcon className="h-4 w-4" />
              <p>Detail-Oriented</p>
            </div>
            <div className="flex gap-1 items-center">
              <TimeIcon className="h-4 w-4" />
              <p>Time Management</p>
            </div>
            <div className="flex gap-1 items-center">
              <UserIcon className="h-4 w-4" />
              <p>Collaborative</p>
            </div>
          </div>
          <div className="h-3/6 border border-black rounded-md p-2">
            <p className="text-xl font-semibold pb-3">Education</p>
            <div className="flex flex-col gap-2">
              {education.map((educ, index) => (
                <div
                  key={index}
                  className="h-16 justify-center flex flex-col gap-0.5"
                >
                  <p className="font-medium">{educ.course}</p>
                  <p className="text-sm">{educ.school}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="h-1/6 border border-black rounded-md p-2">
            <p className="text-xl font-semibold pb-3">Hobbies & Interest</p>
            <div className="flex gap-2 items-center justify-center">
              <div className="flex flex-col gap-1 items-center">
                <GameIcon className="h-6 w-6 border border-black rounded-full p-0.5" />
                <p className="text-xs">Gaming</p>
              </div>
              <div className="flex flex-col gap-1 items-center">
                <PlaneIcon className="h-6 w-6 border border-black rounded-full p-0.5" />
                <p className="text-xs">Travelling</p>
              </div>
              <div className="flex flex-col gap-1 items-center">
                <MovieIcon className="h-6 w-6 border border-black rounded-full p-0.5" />
                <p className="text-xs">Movies</p>
              </div>
              <div className="flex flex-col gap-1 items-center">
                <ClosedBookIcon className="h-6 w-6 border border-black rounded-full p-0.5" />
                <p className="text-xs">Reading</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
