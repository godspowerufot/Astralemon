import React from "react";

interface ModalProps {
  title: string;
  children: React.ReactNode;
  onClose: () => void;
  onAction: () => void;
  actionLabel: string;
}

const Modal= ({
  title,
  children,
  onClose,
  onAction,
  actionLabel,
}: ModalProps) => {
  return (
    <div className="fixed   inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-9 rounded-lg max-w-md w-full">
        <h2 className="text-xl font-semibold mb-4">{title}</h2>
        <div>{children}</div>
        <div className="mt-6 flex justify-end space-x-4">
          <button
            className="px-4 py-2 bg-gray-500 text-white rounded-md"
            onClick={onClose}
          >
            Cancel
          </button>
          <button
            className="px-4 py-2 bg-blue-600 text-white rounded-md"
            onClick={onAction}
          >
            {actionLabel}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
