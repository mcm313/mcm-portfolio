import React from "react";
import CloseIcon from "./Icons/CloseIcon";

interface ModalProps {
  isOpen: boolean;
  onClose: (event: any) => void;
  children?: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-95 z-50">
      <div className="bg-white h-min w-3/4 rounded-lg md:p-8 p-2">
        <div className="flex justify-end">
          <button
            className="relative md:-top-4 md:-right-4 -top-1 -right-1"
            onClick={onClose}
            aria-label="Close Modal"
          >
            <CloseIcon className="md:h-6 md:w-6 w-4 h-4" />
          </button>
        </div>
        {children}
      </div>
    </div>
  );
};

export default Modal;
