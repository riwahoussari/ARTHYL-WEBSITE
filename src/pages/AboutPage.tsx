import {
  motion,
  MotionValue,
  useInView,
  useScroll,
  useTransform,
} from "motion/react";
import PageTitle from "../components/PageTitle";
import { HTMLAttributes, useRef } from "react";
import { ABOUT_ME_PARAGRAPHS } from "../utils/constants";
import Frame4by5 from "../components/Frame4by5Svg";

export default function AboutPage() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start center", "end 0.9"],
  });
  const titleParallaxes = [
    [0, 0.25],
    [0.25, 0.5],
    [0.5, 0.75],
    [0.75, 1],
  ].map((range) =>
    useTransform(
      scrollYProgress,
      range,
      window.innerWidth > 768 ? [20, -30] : [15, -25]
    )
  );

  return (
    <>
      <PageTitle>ABOUT ME</PageTitle>
      <section
        ref={container}
        className=" lg:flex lg:items-start lg:justify-center lg:gap-[6vw] xl:gap-26 2xl:gap-40"
      >
        {/* img */}
        <div className="mx-auto w-[94vw] max-w-[500px] lg:sticky lg:top-0 lg:mx-0 lg:h-dvh lg:w-[min(380px,max(60vh,350px))] lg:pt-[calc(_(100vh-475px)/2_+30px)] xl:w-[400px] xl:pt-[calc(_(100vh-500px)/2_+24px)]">
          <div className="relative">
            <img
              className="aspect-4/5 w-full object-cover object-bottom"
              src="/Arthyl-Ahmad.webp"
              alt=""
            />
            <Frame4by5
              progress={scrollYProgress}
              className="absolute top-1/2 -right-6 -left-6 hidden -translate-y-1/2 lg:-right-4 lg:-left-4 lg:block xl:-right-5 xl:-left-5"
            />
          </div>
        </div>
        {/* text */}
        <div className="mx-auto w-[94vw] max-w-[500px] space-y-[300px] py-[150px] md:max-w-[600px] md:space-y-[400px] lg:mx-0 lg:max-w-[500px] lg:space-y-[80vh] lg:py-[40vh] lg:text-start xl:max-w-[600px] 2xl:max-w-[650px]">
          {ABOUT_ME_PARAGRAPHS.map(({ title, text }, i) => (
            <Paragraph
              key={i}
              parallax={titleParallaxes[i]}
              title={title}
              text={text}
            />
          ))}
        </div>
      </section>
    </>
  );
}

function Paragraph({
  title,
  text,
  parallax,
}: {
  title: string;
  text: string;
  parallax: MotionValue<number>;
}) {
  const divElement = useRef(null);
  let isInView = useInView(divElement, {
    once: true,
    margin: `${-window.innerHeight / 10}px`,
  });

  return (
    <div className="flex flex-col justify-center">
      <div ref={divElement}>
        <motion.div
          style={{ y: parallax }}
        >
          <Title isInView={isInView}>{title}</Title>
        </motion.div>
        <Text isInView={isInView}>{text}</Text>
      </div>
    </div>
  );
}

function Title({
  children,
  isInView,
}: {
  children: string;
  isInView: boolean;
} & HTMLAttributes<HTMLHeadingElement>) {
  return (
    <motion.h2 className="mb-2 text-[min(9vw,36px)] font-medium md:mb-5 md:text-4xl xl:mb-4 xl:text-4xl">
      {children.split("").map((letter, i) => {
        return (
          <motion.span
            key={i}
            className="inline-block origin-center whitespace-pre"
            initial={{ rotateX: 90, opacity: 0, y: "-10px" }}
            animate={isInView ? { rotateX: 0, opacity: 1, y: "0" } : {}}
            transition={{
              duration: 0.5,
              ease: "easeInOut",
              delay: i * (0.3 / children.length),
            }}
          >
            {letter}
          </motion.span>
        );
      })}
    </motion.h2>
  );
}

function Text({ children, isInView }: { children: string; isInView: boolean }) {
  const words = children.split(" ");

  return (
    <p className="flex flex-wrap gap-y-0 text-[min(6vw,26px)] opacity-80 md:gap-y-2 md:text-3xl lg:justify-start lg:text-[28px] xl:text-3xl">
      {words.map((word, i) => {
        return (
          <>
            <motion.span
              key={i}
              className="me-[min(2vw,9px)] md:me-3"
              initial={{ y: 60, opacity: 0.5 }}
              animate={isInView ? { y: 0, opacity: 1 } : {}}
              transition={{
                duration: 0.5,
                ease: "easeInOut",
                delay: i * (0.5 / words.length),
              }}
            >
              {word}
            </motion.span>
          </>
        );
      })}
    </p>
  );
}
