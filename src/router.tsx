import {
  createBrowserRouter,
  Outlet,
  ScrollRestoration,
} from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import ShopPage from "./pages/ShopPage";
import Navbar from "./components/Navbar/Navbar";
import { useEffect } from "react";
import Lenis from "lenis";
import Footer from "./components/Footer";
import { useScroll, useTransform, motion } from "motion/react";

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
]);

function PageLayout() {
  // Lenis Smooth Scroll
  useEffect(() => {
    const lenis = new Lenis();

    function raf(time: any) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  return (
    <>
      <Navbar />
      <main className="lg:rounded-b-5xl xl:rounded-b-6xl relative z-1 min-h-dvh rounded-b-3xl bg-beige pt-12 text-black md:rounded-b-4xl lg:pt-14 max-w-dvw overflow-clip">
        <Outlet />
      </main>
      <Footer />
      <ProgressBar />
      <ScrollRestoration />
    </>
  );
}

function ProgressBar() {
  const { scrollYProgress } = useScroll();
  const width = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  return (
    <motion.div
      style={{ width }}
      className="fixed bottom-0 z-10 h-2 w-full bg-beige mix-blend-difference"
    />
  );
}
