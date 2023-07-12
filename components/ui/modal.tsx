"use client";

import { Dialog } from "./dialog";

interface Modalprops {
  title: string;
  description: string;
  isOpen: boolean;
  onClose: () => void;
  children?: React.ReactNode;
}

export const Modal: React.FC<Modalprops> = ({
  title,
  description,
  isOpen,
  onClose,
  children,
}) => {
  const onChange = (open: boolean) => {
    if (!open) {
      onClose();
    }
  };

  return <Dialog open={isOpen} onOpenChange={onChange}></Dialog>;
};
