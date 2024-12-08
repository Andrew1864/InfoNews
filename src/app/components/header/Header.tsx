import Link from "next/link";

const Header = () => {

    return (
        <header>
            <nav className=" bg-gradient-to-r from-indigo-500 via-purple-500  to-cyan-950  decoration-white border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800">
                <div className="flex flex-wrap text-white justify-around items-center mx-auto max-w-screen-xl">
                    <a href="#" className="flex items-center">
                        <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">InfoNews</span>
                    </a>
                    <div className="hidden justify-around items-center w-full lg:flex lg:w-auto lg:order-1" id="mobile-menu-2">
                        <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                            <Link className="block py-2 pr-4 pl-3 text-white rounded bg-blue-700 lg:bg-transparent lg:text-white lg:p-0 dark:text-white" aria-current="page"
                            href="/">
                                  Home
                            </Link>
                            <Link className="block py-2 pr-4 pl-3 text-white rounded bg-blue-700 lg:bg-transparent lg:text-white lg:p-0 dark:text-white" aria-current="page"
                            href="/trading">
                                  Трейдинг
                            </Link>
                            <li>
                                <a href="#" className="block py-2 pr-4 pl-3 text-white border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-blue-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">Биржа</a>
                            </li>
                            <li>
                                <a href="#" className="block py-2 pr-4 pl-3 text-white border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-blue-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">Новости</a>
                            </li>
                            <li>
                                <a href="#" className="block py-2 pr-4 pl-3 text-white border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-blue-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">Игро-новости</a>
                            </li>
                            <Link className="block py-2 pr-4 pl-3 text-white border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-blue-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
                            href='/weather'>
                                Погода
                            </Link>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    )

};

export default Header;