import React, { ReactNode } from "react";

interface ModalProps {
  title: string;
  onClose: () => void;
  onSubmit?: () => void; // Make onSubmit optional
  children: ReactNode;
}

const Modal: React.FC<ModalProps> = ({
  title,
  onClose,
  onSubmit,
  children,
}) => {
  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    if (onSubmit) {
      onSubmit();
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg shadow-lg w-[70%] max-w-md p-6 relative">
        <button
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-800"
          onClick={onClose}
        >
          &times;
        </button>
        <h2 className="text-xl font-semibold mb-4">{title}</h2>
        <form onSubmit={onSubmit ? handleSubmit : undefined}>
          {children}
          {onSubmit && (
            <button
              type="submit"
              className="mt-4 bg-blue-600 text-white w-full py-2 rounded-md"
            >
              Submit
            </button>
          )}
        </form>
      </div>
    </div>
  );
};

export default Modal;
