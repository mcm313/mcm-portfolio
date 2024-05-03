"use client";

import React, { useState } from "react";
import ProjectModal from "./ProjectModal";
import Modal from "./Modal";
import { Project } from "./Types";

const HoverButton: React.FC<{
  defaultContent: JSX.Element;
  hoverContent: React.ReactNode;
  className?: string;
  project?: Project;
}> = ({ defaultContent, hoverContent, className = "", project }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const openModal = () => {
    setIsModalOpen(true);
    setIsHovered(true);
  };

  const closeModal = (event: any) => {
    event.stopPropagation();
    setIsModalOpen(false);
  };

  return (
    <div
      className={`h-32 border hover:cursor-pointer border-navy-blue rounded-md flex flex-col ${className}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={openModal}
    >
      {isHovered ? hoverContent : defaultContent}
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        {project && <ProjectModal project={project} />}
      </Modal>
    </div>
  );
};

export default HoverButton;
