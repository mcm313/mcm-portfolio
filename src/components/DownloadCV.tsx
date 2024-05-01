"use client";

import DownloadIcon from "./Icons/downloadIcon";

const downloadCV = () => {
  const cvFilePath = "/CV.pdf";
  const link = document.createElement("a");
  link.href = cvFilePath;
  link.download = "mcmresume.pdf"; // Change the filename if needed
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

const DownloadCVButton: React.FC<{ className?: string }> = ({
  className = "",
}) => {
  return (
    <button
      onClick={() => downloadCV()}
      className="flex border rounded-full p-2 md:text-base text-xs"
    >
      <DownloadIcon className={`${className}`} />
      Download CV
    </button>
  );
};

export default DownloadCVButton;
