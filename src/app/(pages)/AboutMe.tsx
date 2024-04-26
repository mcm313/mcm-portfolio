import FilledCircleIcon from "@/components/Icons/FilledCircleIcon";
import CircleIcon from "@/components/Icons/CircleIcon";

const AboutMe = () => {
  return (
    <section
      id="aboutme"
      className="bg-lime-50 pt-[25px] px-6 text-black h-screen min-h-[670px] max-w-[1000px] flex justify-center items-center overflow-y-hidden w-full bg-cover"
    >
      <div className="flex w-full gap-4 h-full p-10">
        <div className="w-1/3 flex flex-col gap-4">
          <div className="h-2/3 p-2">
            <p className="text-xl font-semibold">Personal Info</p>
            <p>First Name:</p>
            <p>Last Name:</p>
            <p>Address:</p>
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
        <div className="w-1/3 border border-black rounded-md p-2">
          <p className="text-xl font-semibold">Experience</p>
        </div>
        <div className="w-1/3 flex flex-col gap-4">
          <div className="h-2/6 border border-black rounded-md p-2">
            <p className="text-xl font-semibold">Strength</p>
          </div>
          <div className="h-3/6 border border-black rounded-md p-2">
            <p className="text-xl font-semibold">Education</p>
          </div>
          <div className="h-1/6 border border-black rounded-md p-2">
            <p className="text-xl font-semibold">Hobbies & Interest</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
