import Image from "next/image";

const AboutMe = () => {
  return (
    <section
      id="aboutme"
      className="bg-lime-50 pt-[25px] px-6 text-black h-min min-h-[670px] max-w-[1000px] flex justify-center items-center overflow-y-hidden w-full bg-cover"
    >
      <div className="flex items-center justify-center gap-6 p-6">
        <div className="w-1/2 relative rounded-lg size-[500px] object-cover">
          <Image
            src="/images/about_me_pic.jpg"
            alt="about me pic"
            fill
            loading="eager"
            priority
            className="h-[400px] w-[400px] rounded-lg object-cover"
          />
        </div>

        <div className="w-1/2">
          <p className="text-4xl text-right font-semibold pb-6">HELLO,</p>
          <p className="text-lg font-medium">
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
