import Link from "next/link";
import DownloadIcon from "../../components/Icons/downloadIcon";
import GithubIcon from "@/components/Icons/githubIcon";
import LinkedinIcon from "@/components/Icons/linkedinIcon";

const LandingPage = () => {
  return (
    <section
      id="home"
      className="bg-lime-50 pt-[25px] px-6 text-black h-screen min-h-[670px] max-w-[1000px] flex justify-center items-center overflow-y-hidden w-full bg-cover"
    >
      <div className="flex justify-center items-center">
        <div className="pr-20">
          <div className="text-4xl font-semibold">
            <p>I AM</p>
            <p>MARIA CATHERINE</p>
            <p>MORI</p>
          </div>
          <div className="flex gap-3 items-center pt-6">
            <Link href="" target="_blank">
              <GithubIcon className="h-6 w-6" />
            </Link>
            <Link href="" target="_blank">
              <LinkedinIcon className="h-6 w-6" />
            </Link>
            <button className="flex border rounded-full p-2">
              <DownloadIcon className="h-6 w-6" />
              Download CV
            </button>
          </div>
        </div>
        <div className="relative top-1/2">
          <div className="border absolute h-1/2 border-black -top-10 -right-10 w-1/2"></div>
          <div className="border absolute h-1/2 border-black -bottom-10 -left-10 w-1/2"></div>
          <img
            src="/images/profile_pic.jpg"
            alt="profile pic"
            width={400}
            height={400}
            className="relative z-10 border-black border"
          />
        </div>
      </div>
    </section>
  );
};

export default LandingPage;
