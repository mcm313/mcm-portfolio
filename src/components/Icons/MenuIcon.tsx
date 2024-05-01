import React, { FunctionComponent, SVGProps } from "react";

type TSVGElementProps = SVGProps<SVGSVGElement> & {
  className?: string;
};

const MenuIcon: FunctionComponent<TSVGElementProps> = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      strokeWidth="2"
      stroke="currentColor"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path stroke="none" d="M0 0h24v24H0z" />{" "}
      <line x1="4" y1="6" x2="20" y2="6" />{" "}
      <line x1="4" y1="12" x2="20" y2="12" />{" "}
      <line x1="4" y1="18" x2="20" y2="18" />
    </svg>
  );
};

export default MenuIcon;
