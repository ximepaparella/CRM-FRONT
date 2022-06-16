import React from "react";

const Alert = ({ message }) => {
  return (
    <>
      <div
        className="relative w-full max-w-sm px-4 py-3 mx-auto text-center text-red-700 bg-red-100 border border-red-400 rounded "
        role="alert"
      >
        <span className="block sm:inline">{message}</span>
      </div>
    </>
  );
};

export default Alert;
