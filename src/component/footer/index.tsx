import React from "react";

export default function Footer() {
  return (
    <div>
      <footer className="fixed bottom-0 left-0 bg-gray-200 w-screen h-12">
        <div className="p-4 text-center text-neutral-700 light:text-neutral-200">
          © 2023 Copyright: <a className="text-neutral-800 light:text-neutral-400" href="https://tailwind-elements.com/"> Code Academy </a>
        </div>
      </footer>
    </div>
  );
}
