import Image from "next/image";
import Link from "next/link";
import { GiHamburgerMenu } from "react-icons/gi";
import { Disclosure } from "@headlessui/react";

function SideNavbar() {
  return (
    <div>
      <Disclosure as="nav" defaultOpen="true">
        <Disclosure.Button className="absolute top-4 right-4 inline-flex items-center peer justify-center bg-white rounded-md p-2 text-gray-800 hover:bg-gray-900 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white group">
          <Image
            src="/icons/hmenu.svg"
            className="block h-6 w-6"
            aria-hidden="true"
            width="30"
            height="30"
            alt="menu"
          />
        </Disclosure.Button>
        <Disclosure.Panel>
          <div className="p-6 w-1/2 h-screen bg-white z-20 fixed top-0 -left-96 left-0 w-60  peer-focus:left-0 peer:transition ease-out delay-150 duration-200">
            <div className="flex flex-col justify-start item-center">
              <Link
                className=" flex content-center font-bold text-m cursor-pointer"
                href="/"
              >
                <div>
                  <Image src="/logo.svg" width="50" height="50" alt="logo" />
                </div>
                <div className="flex justify-center items-center flex-col">
                  <div>ETQAN</div>
                  <div className="text-blue-500"> Assessment Tool</div>
                </div>
              </Link>
              <div className=" my-4 border-b border-gray-100 pb-4">
                <div className="flex mb-2 justify-start items-center gap-4 pl-5 hover:bg-gray-900 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto">
                  <Image
                    src="/icons/dashboard.svg"
                    className="text-2xl text-gray-600 group-hover:bg-white "
                    width="25"
                    height="25"
                    alt="dashboard"
                  />
                  <h3 className="text-base text-gray-800 group-hover:text-white font-semibold ">
                    Dashboard
                  </h3>
                </div>
                <div className="flex  mb-2 justify-start items-center gap-4 pl-5 hover:bg-gray-900 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto">
                  <Image
                    src="/icons/profile.svg"
                    className="text-2xl text-gray-600 group-hover:bg-white "
                    width="25"
                    height="25"
                    alt="profile"
                  />
                  <h3 className="text-base text-gray-800 group-hover:text-white font-semibold ">
                    Profile
                  </h3>
                </div>
                <div className="flex  mb-2 justify-start items-center gap-4 pl-5 hover:bg-gray-900 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto">
                  <Image
                    src="/icons/comments.svg"
                    className="text-2xl text-gray-600 group-hover:bg-white "
                    width="25"
                    height="25"
                    alt="comments"
                  />
                  <h3 className="text-base text-gray-800 group-hover:text-white font-semibold ">
                    Comments
                  </h3>
                </div>
                <div className="flex  mb-2 justify-start items-center gap-4 pl-5 hover:bg-gray-900 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto">
                  <Image
                    src="/icons/analytics.svg"
                    className="text-2xl text-gray-600 group-hover:bg-white "
                    width="25"
                    height="25"
                    alt="analytics"
                  />
                  <Link
                    className="text-base text-gray-800 group-hover:text-white font-semibold "
                    href="/viewspecs"
                  >
                    Reports
                  </Link>
                </div>
                <div className="flex  mb-2 justify-start items-center gap-4 pl-5 hover:bg-gray-900 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto">
                  <Image
                    src="/icons/messages.svg"
                    className="text-2xl text-gray-600 group-hover:bg-white "
                    width="25"
                    height="25"
                    alt="messages"
                  />
                  <h3 className="text-base text-gray-800 group-hover:text-white font-semibold ">
                    Messages
                  </h3>
                </div>
                <div className="flex  mb-2 justify-start items-center gap-4 pl-5 hover:bg-gray-900 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto">
                  <Image
                    src="/icons/integration.svg"
                    className="text-2xl text-gray-600 group-hover:bg-white "
                    width="25"
                    height="25"
                    alt="integration"
                  />
                  <h3 className="text-base text-gray-800 group-hover:text-white font-semibold ">
                    Integration
                  </h3>
                </div>
              </div>
              {/* setting  */}
              <div className=" my-4 border-b border-gray-100 pb-4">
                <div className="flex mb-2 justify-start items-center gap-4 pl-5 hover:bg-gray-900 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto">
                  <Image
                    src="/icons/settings.svg"
                    className="text-2xl text-gray-600 group-hover:bg-white "
                    width="25"
                    height="25"
                    alt="settings"
                  />
                  <h3 className="text-base text-gray-800 group-hover:text-white font-semibold ">
                    Settings
                  </h3>
                </div>
                <div className="flex mb-2 justify-start items-center gap-4 pl-5 hover:bg-gray-900 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto">
                  <Image
                    src="/icons/more.svg"
                    className="text-2xl text-gray-600 group-hover:bg-white "
                    width="25"
                    height="25"
                    alt="more"
                  />
                  <h3 className="text-base text-gray-800 group-hover:text-white font-semibold ">
                    More
                  </h3>
                </div>
              </div>
              {/* logout */}
              <div className=" my-4">
                <div className="flex mb-2 justify-start items-center gap-4 pl-5 border border-gray-200  hover:bg-gray-900 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto">
                  <Image
                    src="/icons/logout.svg"
                    className="text-2xl text-gray-600 group-hover:bg-white "
                    width="25"
                    height="25"
                    alt="logout"
                  />
                  <h3 className="text-base text-gray-800 group-hover:text-white font-semibold ">
                    Logout
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </Disclosure.Panel>
      </Disclosure>
    </div>
  );
}

export default SideNavbar;
