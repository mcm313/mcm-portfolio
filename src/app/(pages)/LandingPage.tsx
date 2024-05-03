import Image from "next/image";
import Link from "next/link";
import GithubIcon from "@/components/Icons/githubIcon";
import LinkedinIcon from "@/components/Icons/linkedinIcon";
import DownloadCVButton from "@/components/DownloadCV";

const LandingPage = () => {
  return (
    <section
      id="home"
      className="bg-light-green pt-[25px] px-6 text-navy-blue h-screen min-h-[670px] max-w-[1000px] flex justify-center items-center overflow-y-hidden overflow-x-hidden w-full bg-cover"
    >
      <div className="flex flex-col md:flex-row justify-center items-center">
        <div className="md:pr-20 md:pb-0 pb-16">
          <p className="md:text-4xl text-2xl font-extrabold">
            Frontend Developer
          </p>
          <div className="md:text-2xl text-xl pt-2 font-semibold text-pale-yellow">
            <p>MARIA CATHERINE</p>
            <p>MORI</p>
          </div>
          <div className="flex gap-3 items-center pt-6 text-bold-pink">
            <Link href="https://github.com/mcm313" target="_blank">
              <GithubIcon className="md:h-6 md:w-6 h-4 w-4" />
            </Link>
            <Link
              href="https://www.linkedin.com/in/maria-catherine-mori-1729b7227/"
              target="_blank"
            >
              <LinkedinIcon className="md:h-6 md:w-6 h-4 w-4" />
            </Link>
            <DownloadCVButton className="md:h-6 md:w-6 h-4 w-4 text-lime-50" />
          </div>
        </div>
        <div className="relative top-1/2">
          <div className="absolute h-1/2 bg-navy-blue rounded-lg -top-10 -right-10 w-1/2"></div>
          <div className="absolute h-1/2 bg-navy-blue rounded-lg -bottom-10 -left-10 w-1/2"></div>
          <div className="relative z-10 rounded-lg md:size-96 size-52 object-cover border border-lime-100">
            <Image
              src="/images/profile_pic.jpg"
              alt="profile pic"
              fill
              loading="eager"
              priority
              className="h-[400px] w-[400px] rounded-lg object-cover"
              sizes="(max-width: 600px) 100vw, (max-width: 1024px) 50vw, 400px"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default LandingPage;
