import CopyrightIcon from "@/components/Icons/Copyright";

const Footer = () => {
  return (
    <section
      id="footer"
      className="bg-lime-50 pt-[25px] px-6 text-black flex justify-center items-center overflow-y-hidden w-full bg-cover"
    >
      <div className="flex w-full justify-end text-xs items-center gap-1">
        <p className="">Copyright</p>
        <CopyrightIcon className="h-3 w-3" />
        <p>MORIMC 2024</p>
      </div>
    </section>
  );
};

export default Footer;
