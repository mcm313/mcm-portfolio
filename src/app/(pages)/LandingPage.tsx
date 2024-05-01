import Image from "next/image";
import Link from "next/link";
import GithubIcon from "@/components/Icons/githubIcon";
import LinkedinIcon from "@/components/Icons/linkedinIcon";
import DownloadCVButton from "@/components/DownloadCV";

const LandingPage = () => {
  return (
    <section
      id="home"
      className="bg-lime-50 pt-[25px] px-6 text-black h-screen min-h-[670px] max-w-[1000px] flex justify-center items-center overflow-y-hidden overflow-x-hidden w-full bg-cover"
    >
      <div className="flex flex-col md:flex-row justify-center items-center">
        <div className="pr-20 md:pb-0 pb-16">
          <div className="md:text-4xl text-2xl font-semibold">
            <p>I AM</p>
            <p>MARIA CATHERINE</p>
            <p>MORI</p>
          </div>
          <p className="md:text-2xl text-xl pt-2 font-semibold">
            I am Frontend Developer
          </p>
          <div className="flex gap-3 items-center pt-6">
            <Link href="https://github.com/mcm313" target="_blank">
              <GithubIcon className="md:h-6 md:w-6 h-4 w-4" />
            </Link>
            <Link
              href="https://www.linkedin.com/in/maria-catherine-mori-1729b7227/"
              target="_blank"
            >
              <LinkedinIcon className="md:h-6 md:w-6 h-4 w-4" />
            </Link>
            <DownloadCVButton className="md:h-6 md:w-6 h-4 w-4" />
          </div>
        </div>
        <div className="relative top-1/2">
          <div className="border absolute h-1/2 border-black rounded-lg -top-10 -right-10 w-1/2"></div>
          <div className="border absolute h-1/2 border-black rounded-lg -bottom-10 -left-10 w-1/2"></div>
          <div className="relative z-10 border-black border rounded-lg md:size-96 size-36 object-cover">
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
