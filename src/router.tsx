import { createBrowserRouter, Outlet, ScrollRestoration } from "react-router-dom"
import HomePage from "./pages/HomePage"
import AboutPage from "./pages/AboutPage"
import ContactPage from "./pages/ContactPage"
import ShopPage from "./pages/ShopPage"
import Navbar from "./components/Navbar/Navbar"
import { useEffect } from "react"
import Lenis from "lenis"
import Footer from "./components/Footer"

export const router = createBrowserRouter([
  {
    element: <PageLayout />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/about", element: <AboutPage /> },
      { path: "/contact", element: <ContactPage /> },
      { path: "/shop", element: <ShopPage /> },
    ],
  },
])

function PageLayout() {
  // Lenis Smooth Scroll
  useEffect(() => {
    const lenis = new Lenis()

    function raf(time: any) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)
  }, [])

  return (
    <>
      <Navbar />
      <main className="bg-beige relative z-1 pt-12 text-black lg:pt-14 rounded-b-3xl md:rounded-b-4xl lg:rounded-b-5xl xl:rounded-b-6xl min-h-dvh">
        <Outlet />
      </main>
      <Footer />
      <ScrollRestoration/>
    </>
  )
}
