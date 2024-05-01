import Image from "next/image";

const AboutMe = () => {
  return (
    <section
      id="aboutme"
      className="bg-lime-50 pt-[25px] px-6 text-black h-min min-h-[670px] max-w-[1000px] flex justify-center items-center overflow-y-hidden w-full bg-cover"
    >
      <div className="flex md:flex-row flex-col items-center justify-center gap-6 p-6">
        <div className="w-1/2 relative md:size-[400px] size-[200px] object-cover">
          <Image
            src="/images/about_me_pic.jpg"
            alt="about me pic"
            fill
            loading="eager"
            priority
            className="h-[400px] w-[400px] md:rounded-lg rounded-full object-cover"
            sizes="(max-width: 600px) 100vw, (max-width: 1024px) 50vw, 400px"
          />
        </div>

        <div className="md:w-1/2 z-10 w-full text-center">
          <p className="md:text-4xl text-2xl md:text-right font-semibold md:pb-16 pb-6">
            ABOUT ME
          </p>
          <p className="md:text-lg text-sm font-medium md:text-left">
            I am a front-end developer based in Tokyo, Japan. I am a
            career-shifter, from being a financial analyst to a web developer.
            Since moving to Japan, I have been having difficulties applying to
            financial companies due to the language barrier. The solution I have
            found is to study creating a website and be a front-end developer. I
            have studied for 2 months and created different kinds of personal
            projects to keep me on my toes. I am still continuously studying
            different languages to expand my opportunities. I am passionate
            about making any ideas a reality. I love to work in groups where
            everyone can voice their opinions.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
