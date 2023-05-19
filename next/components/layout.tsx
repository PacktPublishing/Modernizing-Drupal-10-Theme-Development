import Link from "next/link"

import {PreviewAlert} from "components/preview-alert"

export function Layout({children}) {
  return (
    <>
      <PreviewAlert/>
      <header>
        <div className="max-w-5xl lg:mx-auto">
          <div className="flex max-w-screen-xl flex-wrap items-center justify-between">
            test
          </div>
        </div>
      </header>
      <div className="mx-10 mb-5 max-w-5xl lg:mx-auto">

        <main role="main">
          <a id="main-content"></a>

          <div className="gap-4 md:flex">
            <div className="min-w-0 flex-1">{ children }</div>

          </div>
        </main>
      </div>
      <footer className="bg-nord-6 p-4 sm:p-6">
        <div className="mx-auto max-w-5xl">
          <div className="md:flex md:justify-between">
            <div className="mb-6 md:mb-0">
              <span className="self-center whitespace-nowrap text-2xl font-semibold text-nord-1">Test</span>
            </div>
            <div className="grid grid-cols-2 gap-8"></div>
          </div>
          <hr className="my-6 border-nord-2 sm:mx-auto lg:my-8"/>
          <div className="sm:flex sm:items-center sm:justify-between">
            <span className="text-sm text-nord-3 sm:text-center"> </span>
            <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}
