import Link from "next/link";
import Image from "next/image";

export function Header() {
  return (
    <>
      <header className="space-y-10 p-6 md:p-10 lg:mx-auto relative bg-nord-6">
        <div className="max-w-5xl lg:mx-auto">
          <div className="flex max-w-screen-xl flex-wrap items-center justify-between">
            <Image
              className="mr-3 h-6 sm:h-9"
              src="/logo.svg"
              alt="Alps Trip"
              width={255}
              height={68}
            />
            <div className="lg:hidden order-last">
              <button className="navbar-open p-3 hover:text-nord-10">
                <svg className="block h-5 w-5 fill-current" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <title>Mobile menu</title>
                  <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
                </svg>
              </button>
            </div>
            <nav role="navigation" aria-labelledby="-menu"
                 className="block-menu navigation menu-- navbar-menu fixed items-center justify-between w-72 h-screen top-0 right-0 translate-x-full overflow-y-auto bg-nord-4 drop-shadow-md z-20 transition-transform duration-500 ease-in-out lg:static lg:flex lg:w-auto lg:h-auto lg:overflow-y-hidden lg:bg-transparent lg:drop-shadow-none lg:transition-none lg:transform-none">
              <div className="navbar-close border-b border-nord-10 p-1.5 lg:hidden hover:cursor-pointer">
                <svg className="h-8 w-8 text-nord-10" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2"
                     stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                  <path stroke="none" d="M0 0h24v24H0z"></path>
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </div>

              <h2 className="visually-hidden" id="-menu"></h2>

              <ul className="mt-4 flex flex-col font-medium lg:mt-0 lg:flex-row lg:space-x-8">
                <Link href={"/"}
                      className="block py-2 pr-4 pl-3 text-nord-3 hover:rounded-lg hover:bg-nord-6 hover:bg-opacity-40">
                  {`Home`}
                </Link>
              </ul>

            </nav>
          </div>
        </div>
      </header>
    </>
  )
}
