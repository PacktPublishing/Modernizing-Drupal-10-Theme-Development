import {PreviewAlert} from "components/preview-alert"
import {Header} from "./header";
import {Footer} from "./footer";
import {Breadcrumb} from "./breadcrumb";

export function Layout({children}) {
  return (
    <>
      <PreviewAlert/>
      <div className="dialog-off-canvas-main-canvas" data-off-canvas-main-canvas="">
        <Header />

        <div className="mx-10 mb-5 max-w-5xl lg:mx-auto">
          <Breadcrumb />

          <main role="main">
            <a id="main-content" tabIndex={-1}></a>

            <div className="gap-4 md:flex">
              <div className="min-w-0 flex-1">
                { children }
              </div>

            </div>
          </main>
        </div>

        <Footer />
      </div>
    </>
  )
}
