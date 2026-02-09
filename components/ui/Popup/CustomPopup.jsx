"use client";

import React, { useRef } from "react";

/* Close X Icon */
const CloseIcon = ({ size = 20 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    className="text-gray-500"
  >
    <path
      d="M18 6L6 18"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />
    <path
      d="M6 6L18 18"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
);

const CustomPopup = ({
  title,
  subTitle,
  popupBody,
  scrollClass = "",
  popupFooter,
  close,
  bgClass = "bg-white",
  size = "w-auto max-w-sm",
  position = "inset-0",
  bodyClass = "",
  hideHeaderBorder = false,
  disableBackdrop = false,
  dimension = "",
  footerSpacing = "",
  closeOnOutsideClick = false, // ✅ new prop
}) => {
  const popupRef = useRef(null);

  const handleOutsideClick = (e) => {
    if (!closeOnOutsideClick) return;
    if (popupRef.current && !popupRef.current.contains(e.target)) {
      close?.();
    }
  };

  return (
    <>
      <div
        className={`fixed z-50 inset-0 flex items-center justify-center ${position}`}
        onClick={handleOutsideClick}
      >
        <div ref={popupRef} className={`relative mx-auto rounded-md ${size} ${bgClass} ${dimension}`}>
          <button onClick={close} 
            aria-label="Close popup"
            className="absolute top-3 right-3 z-10 p-1 hover:bg-gray-100 rounded-md transition"
          >
            <CloseIcon />
          </button>

          <div className={`relative flex flex-col w-full ${bodyClass}`}>
            {(title || subTitle) && (
              <div
                className={`pt-4 pb-3 px-4 ${!hideHeaderBorder ? "border-b border-blueGray-200" : ""}`}
              >
                {title && (
                  <p className="text-[22px] font-semibold">{title}</p>
                )}
                {subTitle && (
                  <p className="text-[14px] text-gray-600">{subTitle}</p>
                )}
              </div>
            )}
            <div className={`relative flex-auto py-4 px-4 ${scrollClass}`}>
              {popupBody}
            </div>

            {/* Footer */}
            {popupFooter && (
              <div className={`bg-white w-full px-4 py-3 border-t ${footerSpacing}`}>
                {popupFooter}
              </div>
            )}
          </div>
        </div>
      </div>

      {!disableBackdrop && (
        <div className="fixed inset-0 z-40 bg-black opacity-25" />
      )}
    </>
  );
};

export default CustomPopup;
