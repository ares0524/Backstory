import Image from "next/image";

type DrawerProps = {
    isOpen: boolean;
    setIsOpen: (isOpen: boolean) => void;
}

export default function Drawer({ isOpen, setIsOpen }: DrawerProps) {
  return (
    <main
      className={
        " fixed overflow-hidden z-10 bg-gray-900 bg-opacity-25 inset-0 transform ease-in-out " +
        (isOpen
          ? " transition-opacity opacity-100 duration-500 translate-x-0  "
          : " transition-all delay-500 opacity-0 translate-x-full  ")
      }
    >
      <section
        className={
          " w-screen max-w-lg right-0 absolute bg-[#2f2f2f] h-full shadow-xl delay-400 duration-500 ease-in-out transition-all transform  " +
          (isOpen ? " translate-x-0 " : " translate-x-full ")
        }
      >
        {/* <article className="relative w-screen max-w-lg pb-10 flex flex-col space-y-6 overflow-y-scroll h-full"> */}
          {/* <header className="p-4 font-bold text-lg">Header</header> */}
        {/* </article> */}
        <div className="py-5 px-5">
            <Image src='/assets/images/dashboard/1.png' alt="Sidebar Image" width={400} height={200} className="dashboard-slide-image m-auto mt-5" />
            <p className="text-2xl text-center mt-5 text-white">Lorem ipsum dolor sit amet</p>
            <p className="text-lg mt-5 text-white">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
        </div>
      </section>
      <section
        className=" w-screen h-full cursor-pointer "
        onClick={() => {
          setIsOpen(false);
        }}
      ></section>
    </main>
  );
}
