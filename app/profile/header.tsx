import Image from "next/image"

export default function Header() {
    return (
        <>
            <header>
                <nav className="z-10 border-gray-200 px-4 lg:px-10 py-2.5 bg-gray-800 w-full fixed flex">
                    <div className="flex row w-1/2">
                        <div className="flex">
                            <Image src='/assets/images/profile/user.png' width={60} height={60} alt="User Avatar" className="rounded-full" />
                        </div>
                        <div className="flex items-center pl-3">
                            <p className="text-3xl font-bold">Jhon Doe</p>
                        </div>
                    </div>
                    <div className="flex w-1/2 justify-end items-center">
                        <button type="button" className="text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-4 focus:ring-green-800 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 h-[40px]">Follow</button>
                    </div>
                </nav>
            </header>
        </>
    )
}