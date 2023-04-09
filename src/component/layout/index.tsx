import React, { ReactNode } from "react";
import Header from "../header";
import Footer from "../footer";

interface LayoutProps {
  children: ReactNode;
}
export default function Layout(props: any) {
   const { children } = props;
  return (
    <div>
      <div>
        <section className="bg-gray-50 light:bg-gray-900">
          <div className=" mx-auto md:h-screen lg:py-0">
            <Header />
            <div className="text-black">{children}</div>
            <Footer />
          </div>
        </section>
      </div>
    </div>
  );
}
