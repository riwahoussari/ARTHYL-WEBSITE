import { Link } from "react-router-dom"
import { PAGES, SOCIALS_LINKS } from "../utils/constants"
import ArrowSvg from "./ArrowSvg"
import { HoverLink1 } from "./HoverLink"
import { motion } from "motion/react"
import useMousePosition from "../utils/useMousePosition"
import { useRef, useState } from "react"

export default function Footer() {
  const { x, y } = useMousePosition()
  const footerRef = useRef<HTMLDivElement>(null)
  const [hover, setHover] = useState(false)

  return (
    <>
      <footer
        ref={footerRef}
        className="sticky bottom-0 z-0 flex h-dvh flex-col justify-between bg-black text-white overflow-hidden"
      >
        {/* cursor */}
        <motion.div
          className="absolute opacity-0 z-1  aspect-square w-6 items-center justify-center rounded-full bg-white mix-blend-difference lg:opacity-100 flex"
          animate={{
            top: y - (footerRef.current?.getBoundingClientRect().top || 0) || 0,
            left: x || 0,
            scale: hover ? 3 : 1,
            translate: hover ? "50px 50px" : "30px 30px",
          }}
          transition={{ type: "tween", ease: "backOut", duration: 0.5 }}
        >
          <ArrowSvg
            className="w-2 duration-200 ease-in-out"
            style={{ scale: hover ? 1 : 0 }}
          />
        </motion.div>

        {/* Button */}
        <FooterButton setHover={setHover} />

        {/* Links */}
        <div className="flex flex-wrap justify-stretch gap-x-20 gap-y-10 px-4 py-8 md:px-12">
          <FooterLinksGroup
            setHover={setHover}
            hover={hover}
            title="Menu"
            links={PAGES.map(({ name, link }) => ({
              text: name,
              to: link,
              tag: "Link",
            }))}
          />

          <FooterLinksGroup
            setHover={setHover}
            hover={hover}
            title="Socials"
            links={SOCIALS_LINKS.map(({ platform, url }) => ({
              text: platform,
              to: url,
              tag: "a",
              target: "_blank",
            }))}
          />

          <FooterLinksGroup
            setHover={setHover}
            hover={hover}
            title="Connect"
            links={[
              { text: "hello@arthyl.com", to: "", tag: "a" },
              { text: "+961 71 123 123", to: "", tag: "a" },
            ]}
          />
        </div>

        {/* Copyright */}
        <div className="flex w-full items-start justify-between border-t-1 border-white/50 px-4 py-4 text-xs font-light text-white/50 uppercase md:px-12 md:text-sm">
          <p>
            © 2025 ARTHYL <br />
            ALL RIGHTS RESERVED
          </p>
          <p>
            Design By <br />
            Riwa Houssari
          </p>
        </div>
      </footer>
    </>
  )
}

function FooterButton({
  setHover,
}: {
  setHover: React.Dispatch<React.SetStateAction<boolean>>
}) {
  return (
    <Link
      onMouseOver={() => setHover(true)}
      onMouseOut={() => setHover(false)}
      to="/contact"
      className="group flex w-full translate-y-2 items-stretch justify-between border-y-1 border-white font-semibold uppercase lg:translate-y-0"
    >
      {/* text */}
      <div className="flex w-full items-center justify-start pl-4 text-[min(128px,9vw)] md:pl-12">
        <div className="relative overflow-hidden">
          <p className="opacity-0">Let's Connect</p>
          <p className="absolute bottom-1/2 translate-y-1/2 duration-200 ease-in-out group-hover:bottom-[100%] group-hover:translate-y-0">
            Let's Connect
          </p>
          <p className="absolute top-[100%] duration-200 ease-in-out group-hover:top-1/2 group-hover:-translate-y-1/2">
            Let's Connect
          </p>
        </div>
      </div>

      {/* arrow */}
      <div className="flex aspect-square items-center justify-center border-l-1 border-white px-[5vw] py-8 mix-blend-difference duration-200 ease-in-out group-hover:bg-white">
        <ArrowSvg
          className="w-[min(120px,8vw)] duration-200 ease-in-out group-hover:invert"
          hexColor="#fff"
          strokeWidth={3}
        />
      </div>
    </Link>
  )
}

function FooterLinksGroup({
  title,
  links,
  setHover,
  hover,
}: {
  title: string
  links: { text: string; to: string; tag: "a" | "Link"; target?: string }[]
  hover: boolean
  setHover: React.Dispatch<React.SetStateAction<boolean>>
}) {
  return (
    <div className="grow-1">
      <p className="mb-4 border-b-1 border-white/50 pb-2 text-xl font-light text-white/70 lg:text-2xl xl:text-3xl">
        {title}
      </p>
      <div className="flex flex-col text-lg capitalize lg:text-xl xl:text-2xl">
        <FooterLink2 links={links} setHover={setHover} hover={hover} />
      </div>
    </div>
  )
}

function FooterLink2({
  links,
  setHover,
  hover,
}: {
  links: { text: string; to: string; tag: "a" | "Link"; target?: string }[]
  hover: boolean
  setHover: React.Dispatch<React.SetStateAction<boolean>>
}) {
  return (
    <>
      {links.map(({ text, to, tag, target }) => (
        <div
          key={text}
          className={`w-max py-2.5 ${
            hover && " md:opacity-20 "
          } duration-200 ease-in-out hover:opacity-100`}
          onMouseOver={() => setHover(true)}
          onMouseOut={() => setHover(false)}
        >
          {tag === "a" ? (
            <HoverLink1 tag="a" target={target ? target : "_self"} href={to}>
              {text}
            </HoverLink1>
          ) : (
            <HoverLink1 tag="Link" target={target ? target : "_self"} to={to}>
              {text}
            </HoverLink1>
          )}
        </div>
      ))}
    </>
  )
}
