import React, { FunctionComponent, SVGProps } from "react";

type TSVGElementProps = SVGProps<SVGSVGElement> & {
  className?: string;
};

const FilledCircleIcon: FunctionComponent<TSVGElementProps> = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 256 256"
      fill="currentColor"
      {...props}
    >
      <path d="M232,128A104,104,0,1,1,128,24,104.12041,104.12041,0,0,1,232,128Z" />
    </svg>
  );
};

export default FilledCircleIcon;
