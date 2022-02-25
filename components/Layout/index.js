import React from "react";
import { Seo } from "../SEO";

export const Layout = ({ seo, children }) => {
  return (
      <>
        <div className="relative">
          <Seo {...seo} />
          <main>{children}</main>
        </div>
      </>
  );
};
