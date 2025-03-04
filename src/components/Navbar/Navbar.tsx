import { Link } from "react-router-dom";
import arthylSignaturePng from "../../assets/Arthyl-Signature.png";
import Button from "../Button";
import { useState } from "react";
import BurgerMenuSvg from "./BurgerMenuSvg";
import MobileNavMenu from "./MobileNavMenu";
import { EASE_IN_OUT_CUBIC, PAGES } from "../../utils/constants";
import { motion, useMotionValueEvent, useScroll } from "motion/react";
import HoverLink from "../HoverLink";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const [hideNav, setHideNav] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() || 0;

    if (latest > previous && latest > 50) {
      setHideNav(true); // Hide navbar when scrolling down
    } else {
      setHideNav(false); // Show navbar when scrolling up
    }
  });

  return (
    <motion.header
      className={
        "side-padding fixed top-0 z-10 flex w-full items-center justify-between border-b border-[rgba(0,0,0,0.2)] bg-beige/50 py-2 text-sm text-black lg:text-base " +
        (menuOpen ? "sm:backdrop-blur-md" : " backdrop-blur-md")
      }
      initial={{ y: 0 }}
      animate={{ y: hideNav && !menuOpen ? "-100%" : 0 }}
      transition={{ duration: 0.3, ease: EASE_IN_OUT_CUBIC }}
    >
      {/* LOGO */}
      <Link to="/">
        <img
          src={arthylSignaturePng}
          alt="Arthyl"
          className={
            "relative z-1 w-[25vw] max-w-30 lg:max-w-40 " +
            (menuOpen && "max-sm:invertt")
          }
        />
      </Link>

      {/* Pages Navigation Links */}
      <nav className="absolute top-0 bottom-0 left-1/2 hidden -translate-x-1/2 items-center gap-4 font-light uppercase sm:flex lg:gap-8">
        {PAGES.map((page, i) => {
          return (
            <HoverLink tag="Link" to={page.link} key={i}>
              {page.name}
            </HoverLink>
          );
        })}
      </nav>

      {/* Shop Page Link (cta) &  burger menu*/}
      <div
        className={
          "relative z-1 flex items-center gap-4 " +
          (menuOpen && " max-sm:invertt")
        }
      >
        <Link to="/shop" onClick={() => setMenuOpen(false)}>
          <Button arrow={false} size="sm">
            AQUIRE ARTPIECE
          </Button>
        </Link>

        <div
          className="w-7 sm:hidden"
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          <BurgerMenuSvg isOpen={menuOpen} />
        </div>
      </div>

      {/* Mobile Menu */}
      <MobileNavMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
    </motion.header>
  );
}

