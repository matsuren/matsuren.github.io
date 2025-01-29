import React from "react";
export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="">
      <div className="container mx-auto">
        <div className="mb-4">
          <p className="text-center text-gray-600 dark:text-gray-400">© {currentYear} Ren Komatsu</p>
        </div>
      </div>
    </footer>
  );
}
