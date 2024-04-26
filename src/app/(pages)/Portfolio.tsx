const Portfolio = () => {
  return (
    <section
      id="portfolio"
      className="bg-lime-50 pt-[25px] px-6 text-black h-screen min-h-[670px] max-w-[1000px] flex justify-center items-center overflow-y-hidden w-full bg-cover"
    >
      <div className="flex flex-col w-full h-full p-10 items-center">
        <p className="text-4xl font-semibold">PORTFOLIO</p>
        <div className="flex w-full gap-4 h-full p-10">
          <div className="w-1/3 flex flex-col gap-4">
            <div className="h-1/2 border border-black rounded-md p-2"></div>
            <div className="h-1/2 border border-black rounded-md p-2"></div>
          </div>
          <div className="w-1/3 flex flex-col gap-4">
            <div className="h-2/3 border border-black rounded-md p-2"></div>
            <div className="h-1/3 border border-black rounded-md p-2"></div>
          </div>
          <div className="w-1/3 flex flex-col gap-4">
            <div className="h-1/3 border border-black rounded-md p-2"></div>
            <div className="h-2/3 border border-black rounded-md p-2"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
