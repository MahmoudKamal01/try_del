import React from "react";
import Link from "next/link";
function Footer() {
  return (
    <footer
      className="p-4 bg-white rounded-lg shadow md:px-6 md:py-8 dark:bg-gray-900"
      id="footer"
    >
      <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
        © 2022 . All Rights Reserved.
      </span>
    </footer>
  );
}

export default Footer;
