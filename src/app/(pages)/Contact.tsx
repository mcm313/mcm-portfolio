import EmailIcon from "@/components/Icons/EmailIcon";
import LinkedinIcon from "@/components/Icons/linkedinIcon";

const Contact = () => {
  return (
    <section
      id="contact"
      className="bg-lime-50 pt-[25px] px-6 text-black min-h-[360px] max-w-[1000px] flex justify-center items-center overflow-y-hidden w-full bg-cover"
    >
      <div className="flex flex-col items-center">
        <p className="md:text-4xl text-2xl font-semibold pb-6">CONTACT</p>
        <p className="md:text-lg text-sm font-semibold">
          Feel free to contact me!
        </p>
        <div className="flex md:flex-row flex-col items-center md:items-start gap-2 py-10">
          <div className="flex items-center md:w-1/2 w-full justify-center">
            <LinkedinIcon className="md:h-20 w-1/3 h-10" />
            <p className="md:text-lg text-sm font-semibold p-0 w-2/3">
              linkedin.com/in/maria-catherine-mori-1729b7227/
            </p>
          </div>
          <div className="flex items-center justify-center md:w-1/2 w-full">
            <EmailIcon className="md:h-20 w-1/3 h-10" />
            <p className="md:text-lg text-sm font-semibold w-2/3">
              mori.mcatherine@gmail.com
            </p>
          </div>
        </div>
        <p className="md:text-lg text-sm font-semibold">
          THANKS FOR YOUR PATIENCE
        </p>
      </div>
    </section>
  );
};

export default Contact;
