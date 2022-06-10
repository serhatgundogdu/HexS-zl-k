import React from "react";

export const Layout = ({ children, header = true }) => {
  return (
    <div className="relative z-10 min-h-screen px-3 pb-8 overflow-hidden antialiased bg-gray-100 bg-primary-light">
      <div className="w-full h-full">
        {/* {header && <Header />} */}
        {children}
      </div>
    </div>
  );
};
