import React, { useState } from "react";
import UploadArea from "./UploadArea";

const ModalUploadCSV = props => {
  const { uploadModalOpen, handleUploadClose } = props;
  const [csvResults, setCsvResults] = useState(null);

  return (
    <>
      <div
        className="flex flex-col space-y-5 bg-white w-full h-screen fixed top-0 left-0 z-40 overflow-y-scroll p-5"
        style={{ display: uploadModalOpen ? "block" : "none" }}
      >
        <div className="flex w-full space-x-3">
          <div className="flex-1">
            <UploadArea setCsvResults={setCsvResults} />
          </div>
          <div className="flex flex-col space-y-3">
            <button className="flex justify-start items-center space-x-3 p-3 bg-green-600 rounded-lg text-white">
              <svg
                className="h-6 w-6 text-white"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                {" "}
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />{" "}
                <polyline points="22 4 12 14.01 9 11.01" />
              </svg>
              <span>Confirm and Save</span>
            </button>
            <button
              className="flex justify-start items-center space-x-3 p-3 bg-gray-600 rounded-lg text-white"
              onClick={handleUploadClose}
            >
              <svg
                className="h-6 w-6 text-white"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                {" "}
                <circle cx="12" cy="12" r="10" />{" "}
                <line x1="15" y1="9" x2="9" y2="15" />{" "}
                <line x1="9" y1="9" x2="15" y2="15" />
              </svg>

              <span>Cancel and Discard</span>
            </button>
          </div>
        </div>
        {csvResults && (
          <>
            <hr />
            <div className="flex justify-start items-center w-full">
              <label className="border-l-2 border-gray-100 px-3">
                {csvResults.data.length - 2} total records
              </label>
              <label className="border-l-2 border-gray-100 px-3">
                {csvResults.errors.length} parsing errors
              </label>
            </div>
          </>
        )}
        <div className="w-full">
          {csvResults &&
            csvResults.data
              .splice(1, csvResults.data.length - 2)
              .map(d => (
                <input
                  key={Math.random()}
                  type="text"
                  className="w-full p-2 border-2 border-gray-100"
                  value={JSON.stringify(d)}
                  disabled
                />
              ))}
        </div>
      </div>
    </>
  );
};

export default ModalUploadCSV;
