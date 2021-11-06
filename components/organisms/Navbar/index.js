import { useState } from "react";
import Link from "next/link";
import Container from "../Container";

export default function Navbar() {
  // State for drop down menu
  const dropdownList = [
    { text: "Internet", href: "/posts" },
    { text: "Books", href: "/posts" },
    { text: "Open Source", href: "/posts" },
  ];
  // state for dropdown
  const [dropdown, setDropdown] = useState(false);
  // state for off canvas menu
  const [offCanvas, setOffCanvas] = useState(false);
  // State for togle display search
  const [search, setSearch] = useState(false);
  return (
    <nav className="py-10">
      <Container>
        <div className="flex items-center">
          {/* bURGER MENU */}
          <div className="w-3/12 lg:hidden">
            <button onClick={() => setOffCanvas(!offCanvas)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
          {/* Brand & logo */}
          <div className="lg:w-2/12 w-6/12">
            <Link href="/">
              <a className="flex items-center justify-center lg:justify-start">
                <div className="w-10 h-10 bg-gray-500 rounded flex items-center justify-center mr-4 shadow-2xl">
                  Logo
                </div>
                Jabutech
              </a>
            </Link>
          </div>
          <div className="w-3/12 lg:hidden text-right">
            <button onClick={() => setSearch(!search)}>
              <svg
                className="inline-block"
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>
          </div>
          {/* Nav item */}
          <div
            className={`lg:w-7/12 w-full bg-gradient-to-b from-gray-600 to-gray-900 lg:bg-none lg:static fixed top-0 h-full lg:h-auto lg:p-10 p-10 transition-all duration-300 ${
              offCanvas ? "left-0" : " -left-full"
            }`}
          >
            <button
              className="absolute top-10 right-10 lg:hidden"
              onClick={() => setOffCanvas(false)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            <ul className="lg:space-x-10 flex lg:items-center flex-col lg:flex-row lg:space-y-0 space-y-4">
              <li>
                <Link href="/posts">
                  <a className="hover:underline">UI Design</a>
                </Link>
              </li>
              <li>
                <Link href="/posts">
                  <a className="hover:underline">Front-end</a>
                </Link>
              </li>
              <li>
                <Link href="/posts">
                  <a className="hover:underline">Back-end</a>
                </Link>
              </li>
              <li className="relative">
                <button
                  type="button"
                  className="hover:underline hover:cursor-pointer flex items-center"
                  onClick={() => setDropdown(!dropdown)}
                >
                  Lainnya
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 ml-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                {dropdown && (
                  <ul className="absolute w-[200px] bg-gray-800 rounded shadow-2xl mt-4">
                    {/* Loop drop down list dta */}
                    {dropdownList.map(({ text, href }) => (
                      <li
                        key={text}
                        className="border-b border-white/5 hover:bg-gray-700/60 last:border-0"
                      >
                        <Link href={href}>
                          <a className="flex py-3 px-6">{text}</a>
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            </ul>
          </div>
          {/* Search */}
          <div
            className={`lg:w-3/12 w-full lg:static absolute left-0 px-10 lg:px-10 transition-all duration-300 ${
              search ? "top-10" : "-top-40"
            }`}
          >
            <button
              className="absolute top-2 right-14 lg:hidden"
              onClick={() => setSearch(false)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            <input
              type="search"
              className="bg-gray-700 py-2 px-4 lg:rounded-full rounded-lg w-full bg-search"
              placeholder="Search..."
            />
          </div>
        </div>
      </Container>
    </nav>
  );
}
