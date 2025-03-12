import {
  AnimationControls,
  motion,
  TargetAndTransition,
  useMotionValueEvent,
  useScroll,
  useTransform,
  VariantLabels,
} from "motion/react";
import { HORIZONTAL_SCROLL_IMAGES, ROTATING_TEXT } from "../utils/constants";
import Button from "../components/Button";
import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";

const horseSectionText1 =
  "The horse is a timeless symbol of strength, stability, and endurance. It represents the power to push forward, to overcome obstacles, and to stay grounded no matter the challenges ahead. Horses have long been associated with resilience and determination—qualities that define success in both life and business. This piece embodies that unwavering force, reminding us that true progress starts with a strong foundation.";
const horseSectionText2 =
  "Wings represent freedom, ambition, and limitless potential. They elevate the grounded power of the horse, allowing it to soar beyond limitations. Just as ambition lifts us beyond the ordinary, the wings symbolize the ability to break barriers, rise above challenges, and explore new heights. This fusion of strength and flight creates a powerful symbol of balance—staying rooted while daring to reach beyond. It’s a reminder that success is not just about stability, but also about the courage to take flight.";
const horseSectionText3 =
  "Obsidian represents mystery, strength, and transformation. Its deep black color symbolizes the unknown and the courage to face it. The obsidian winged horse embodies power and resilience, a guardian-like presence that stands firm through challenges. More than a color, black is a statement—of independence, ambition, and untapped potential waiting to rise.";

export default function HomePage() {
  const [bgColor, setBgColor] = useState("#f5f0ed");
  return (
    <>
      <HeroSection />
      <AboutSection />
      <StoryText />
      <Images />
      <HorseSection bgColor={bgColor} />
      <CTASection bgColor={bgColor} setBgColor={setBgColor} />
      <ProcessSection />
    </>
  );
}


function HeroSection() {
  return (
    <section className="side-padding mx-auto max-w-[2000px]">
      {/* headline - huge text */}
      <div className="relative flex items-center justify-center">
        <div className="relative mt-[min(260px,50vw)] md:mt-[20vw] lg:mt-[min(250px,12.5vw)] lg:w-[min(100%,2000px)]">
          <h1 className="bg-white bg-clip-text text-center text-[min(17.5vw,18vw)] leading-[0.8] font-semibold text-transparent mix-blend-difference md:text-[max(110px,12vw)] lg:text-[min(200px,10vw)]">
            A Timeless <br />
            Mark For Growth <br className="hidden lg:block" />& Success
          </h1>

          <video
            src="/winged-horse-video.mp4"
            loop
            muted
            // autoPlay
            className="absolute bottom-[85%] left-0 -z-1 aspect-square w-[min(55vw,280px)] rounded-md object-cover md:bottom-[45%] md:aspect-3/4 md:w-[max(220px,25vw)] md:rounded-lg lg:bottom-[25%] lg:w-[min(400px,20vw)]"
          />

          <img
            src="/winged-horse-hero.jpg"
            className="bg-placeholder absolute top-[95%] right-0 -z-1 aspect-5/3 w-[min(60vw,300px)] rounded-md object-cover md:top-[75%] md:w-[max(264px,30vw)] md:rounded-lg lg:top-[66%] lg:w-[min(500px,25vw)]"
          />
        </div>
      </div>

      {/* rotating circular text + up next */}
      <div className="mt-[min(230px,50vw)] flex items-end gap-4 sm:gap-5 md:mt-[10vw] md:gap-6 lg:mt-[min(125px,6vw)]">
        {/* rotating circular text */}
        <div className="relative flex aspect-square w-[120px] shrink-0 items-center justify-center text-lg sm:w-[134px] sm:text-xl md:w-[160px] md:text-2xl">
          {/* fixed text in the middle */}
          <div className="absolute flex aspect-square w-[60px] items-center justify-center text-center leading-[1] font-light sm:w-[67px] md:w-[80px]">
            <p>
              {ROTATING_TEXT.sold_number}/{ROTATING_TEXT.total_number} <br />
              sold
            </p>
          </div>

          {/* rotating text */}
          <motion.div
            className="absolute h-full w-full"
            initial={{ rotate: 0 }}
            animate={{ rotate: 360 }}
            transition={{ ease: "linear", duration: 10, repeat: Infinity }}
          >
            <p>
              {ROTATING_TEXT.text.split("").map((char, i) => (
                <span
                  className="absolute left-1/2 inline-block w-3 origin-[0_60px] text-center font-semibold uppercase select-none sm:w-4 sm:origin-[0_67px] md:w-5 md:origin-[0_80px]"
                  key={i}
                  style={{
                    transform: `rotate(${
                      i * (360 / ROTATING_TEXT.text.length)
                    }deg)`,
                  }}
                >
                  <span style={{ rotate: "8deg", display: "inline-block" }}>
                    {char}
                  </span>
                </span>
              ))}
            </p>
          </motion.div>
        </div>

        {/* next up - cirrus - axiom */}
        <div>
          <p className="text-sm font-light opacity-80 md:text-base">
            next up :
          </p>
          <div className="mt-1.5 flex flex-wrap gap-x-3 text-lg sm:text-xl md:text-2xl">
            <p
              className="flex text-white"
              style={{ textShadow: "0 0 2px rgba(0,0,0,1)" }}
            >
              → CIRRUS
            </p>
            <p className="axiom-text flex">→ AXIOM</p>
          </div>
        </div>
      </div>

      {/* subheadline - paragraph */}
      <div className="mt-40 w-[min(100%,390px)] text-lg sm:w-md sm:text-xl md:w-lg md:text-2xl lg:mt-50 xl:mt-60 xl:w-xl xl:text-3xl">
        <p>
          The First Plexiglass Artist in the Middle East, crafting a unique &
          exclusive art piece for entrepreneurs and leaders.
          <br />
          <br />
          With only a select few ever made, this piece serves as a reminder of
          how far you’ve come and how far you’ll go.
        </p>
      </div>
    </section>
  );
}

function AboutSection() {
  return (
    <section className="side-padding mx-auto my-50 w-full max-w-[2000px] lg:my-60 xl:my-70">
      <div className="relative flex flex-col gap-4">
        <p className="bg-white bg-clip-text text-[12vw] leading-[1] font-semibold text-transparent uppercase mix-blend-difference lg:text-[min(200px,10vw)]">
          meet arthyl
        </p>
        <div className="aspect-5/6 w-[min(360px,80%)] self-end overflow-hidden md:absolute md:top-1/2 md:-z-1 md:w-[min(700px,42%)] md:-translate-y-1/2">
          <img
            src="Arthyl-Ahmad.webp"
            className="-translate-y-1/5 scale-110"
            alt=""
          />
        </div>
        <p className="w-[95%] opacity-70 sm:text-lg md:w-[53%] lg:text-2xl lg:leading-[1.4] xl:text-3xl">
          I am not your typical artist. I didn’t grow up surrounded by art, nor
          did I inherit a creative legacy. My journey was different—shaped by an
          entrepreneurial mindset and a deep passion for business. I’ve always
          been fascinated by the concepts of growth, perseverance, and the
          challenges that shape success. This passion eventually led me to
          discover art, not as a traditional practice but as a medium to express
          the core values of ambition and achievement.
        </p>
        <Link
          to="/about"
          className="mt-2 w-max origin-center scale-120 md:mt-8 lg:mt-10 xl:mt-12"
        >
          <Button secondary={true} arrow={true} size="lg">
            Read More
          </Button>
        </Link>
      </div>
    </section>
  );
}

function StoryText() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress: sectionYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  const [progress, setProgress] = useState(0);

  useEffect(() => {
    return sectionYProgress.on("change", (progress) => {
      setProgress(progress);
    });
  }, [sectionYProgress]);

  type AnimType =
    | boolean
    | AnimationControls
    | TargetAndTransition
    | VariantLabels
    | undefined;

  const text1Anim: AnimType =
    (progress < 0.33 && { y: "0%", rotateX: "0deg", opacity: 1 }) ||
    (progress >= 0.33 && { y: "-100%", rotateX: "90deg", opacity: 0 });

  const text2Anim: AnimType =
    (progress < 0.33 && { y: "100%", rotateX: "-90deg", opacity: 0 }) ||
    (progress < 0.66 && { y: "0%", rotateX: "0deg", opacity: 1 }) ||
    (progress < 1 && { y: "-100%", rotateX: "90deg", opacity: 0 });

  const height = useTransform(sectionYProgress, [0.7, 1], ["50%", "0%"]);

  return (
    <div ref={sectionRef} className="bg-red-20 relative z-2 h-[200vh] w-full">
      <div className="sticky top-0 flex h-dvh items-center">
        {/* animating text */}
        <div className="relative w-full overflow-hidden">
          <motion.p
            className="absolute w-full text-center text-[6vw] font-semibold capitalize lg:text-[min(100px,5vw)]"
            animate={text1Anim}
            transition={{ duration: 0.3, delay: 0.2, ease: "easeInOut" }}
          >
            There's a story
          </motion.p>
          <motion.p
            className="absolute w-full text-center text-[6vw] font-semibold capitalize lg:text-[min(100px,5vw)]"
            animate={text2Anim}
            transition={{ duration: 0.3, delay: 0.2, ease: "easeInOut" }}
          >
            behind each horse
          </motion.p>

          {/* placeholder text */}
          <p className="truncate text-[6vw] font-semibold capitalize opacity-0 lg:text-[min(100px,5vw)]">
            There's a story behind each horse
          </p>
        </div>
        {/* opening doors */}
        <motion.div
          className="absolute top-0 left-0 -z-1 h-1/2 w-full bg-beige"
          style={{ height }}
          transition={{ duration: 1, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-0 left-0 -z-1 h-1/2 w-full bg-beige"
          style={{ height }}
          transition={{ duration: 1, ease: "easeInOut" }}
        />
      </div>
    </div>
  );
}

function Images() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  // horizontal scroll
  const scale = useTransform(scrollYProgress, [0, 0.26], [0.7, 1]);
  const right = useTransform(scrollYProgress, [0.26, 0.75], ["100%", "0%"]);
  const translateX = useTransform(
    scrollYProgress,
    [0.26, 0.75],
    ["100%", "0%"]
  );

  // zoom in Transition

  // code to change the statring width of the zoomInWidth useTransform
  const breakpoints = [
    { query: "(min-width: 1536px)", value: "45vw" }, // Large Screens
    { query: "(min-width: 1024px)", value: "55vw" }, // Small Laptops
    { query: "(min-width: 768px)", value: "70vw" }, // Tablets
    { query: "(max-width: 768px)", value: "85vw" }, // Mobile (small)
  ];
  const getStartWidth = () => {
    for (const bp of breakpoints) {
      if (window.matchMedia(bp.query).matches) {
        return bp.value;
      }
    }
  };

  const [startWidth, setStartWidth] = useState(getStartWidth);

  useEffect(() => {
    const mediaQueries = breakpoints.map((bp) => ({
      query: window.matchMedia(bp.query),
      value: bp.value,
    }));

    const handleChange = () => {
      setStartWidth(getStartWidth());
    };

    mediaQueries.forEach((mq) =>
      mq.query.addEventListener("change", handleChange)
    );

    return () => {
      mediaQueries.forEach((mq) =>
        mq.query.removeEventListener("change", handleChange)
      );
    };
  }, []);

  const zoomInWidth = useTransform(
    scrollYProgress,
    [0.75, 0.8],
    [startWidth, "100vw"]
  );

  const zoomInHeight = useTransform(
    scrollYProgress,
    [0.75, 0.8],
    ["60vh", "100vh"]
  );
  const zoomInBgScale = useTransform(scrollYProgress, [0.75, 1], [1, 4.8]);
  const zoomInHorseScale = useTransform(scrollYProgress, [0.75, 1], [1, 3]);
  const zoomInBgOpacity = useTransform(scrollYProgress, [0.75, 1], [1, 0]);

  const imgContainerRef = useRef<HTMLDivElement>(null);

  // immediately turn opacity to 0 at the end
  const [isAtBottom, setIsAtBottom] = useState(false);

  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (progress) => {
      setIsAtBottom(progress >= 1); // True when at the bottom, false otherwise
    });

    return () => unsubscribe(); // Cleanup when component unmounts
  }, [scrollYProgress]);

  return (
    <section
      ref={sectionRef}
      className="relative z-1 -mt-[170vh] h-[400vh] bg-black"
      style={{ opacity: isAtBottom ? 0 : 1 }}
    >
      <div
        ref={imgContainerRef}
        className="sticky top-0 z-1 flex h-dvh items-center overflow-hidden"
      >
        <motion.div
          className="relative mx-auto flex h-dvh w-[85vw] items-center md:w-[70vw] lg:w-[55vw] 2xl:w-[45vw]"
          style={{ width: zoomInWidth }}
        >
          <motion.div
            className="absolute origin-right"
            style={{ right, translateX, scale }}
          >
            <div className="relative flex items-center gap-20">
              {HORIZONTAL_SCROLL_IMAGES.map(
                ({ src, width, special, back, front, horse }, i) =>
                  i !== HORIZONTAL_SCROLL_IMAGES.length - 1 ? (
                    // img with zoom in transition to next section
                    special ? (
                      <motion.div
                        key={i}
                        className={`relative z-1 h-[60vh] w-[85vw] shrink-0 overflow-hidden bg-beige md:w-[70vw] lg:w-[55vw] 2xl:w-[45vw]`}
                        style={{ height: zoomInHeight, width: zoomInWidth }}
                      >
                        <motion.img
                          src={front}
                          className="absolute right-1/2 bottom-1/2 z-1 h-full min-h-[60vh] w-full min-w-[140vw] translate-1/2 object-cover sm:min-w-[100vw] md:min-w-[80vw] lg:min-w-[60vw] 2xl:min-w-[45vw]"
                          style={{ scale: zoomInBgScale }}
                        />
                        <motion.img
                          src={back}
                          className="absolute right-1/2 bottom-1/2 z-0 h-full min-h-[60vh] w-full min-w-[140vw] translate-1/2 object-cover sm:min-w-[100vw] md:min-w-[80vw] lg:min-w-[60vw] 2xl:min-w-[45vw]"
                          style={{
                            scale: zoomInBgScale,
                            opacity: zoomInBgOpacity,
                          }}
                        />
                        <motion.img
                          src={horse}
                          className="absolute overflow-visible right-1/2 bottom-1/2 z-2 min-h-[14vh] w-[33vw] max-w-[min(130.33vh,133px)] translate-1/2 object-cover sm:w-[23vw] md:w-[19vw] lg:w-[14vw] lg:max-w-none 2xl:w-[10vw]"
                          style={{ scale: zoomInHorseScale }}
                        />
                      </motion.div>
                    ) : (
                      // normal img
                      <div
                        key={i}
                        className={`flex shrink-0 items-center overflow-hidden ${
                          width === "sm"
                            ? "w-[min(480px,90vw)] sm:w-[70vw] md:w-[400px] lg:w-[450px] 2xl:w-[520px]"
                            : "w-[100vw] sm:w-[90vw] md:w-[600px] lg:w-[700px] 2xl:w-[840px]"
                        }`}
                      >
                        <img src={src} className="w-full object-contain" />
                      </div>
                    )
                  ) : (
                    // last img
                    <div
                      key={i}
                      className={`absolute left-[100%] z-0 ms-20 flex shrink-0 items-center overflow-hidden ${
                        width === "sm"
                          ? "w-[min(480px,90vw)] sm:w-[70vw] md:w-[400px] lg:w-[450px] 2xl:w-[520px]"
                          : "w-[100vw] sm:w-[90vw] md:w-[600px] lg:w-[700px] 2xl:w-[840px]"
                      }`}
                    >
                      <img src={src} className="w-full object-contain" />
                    </div>
                  )
              )}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

function HorseSection({ bgColor }: { bgColor: string }) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  const [progress, setProgress] = useState(0);

  useEffect(() => {
    return scrollYProgress.on("change", (progress) => {
      setProgress(progress);
    });
  }, [scrollYProgress]);

  function getRanges() {
    const vw = window.innerWidth;
    if (vw >= 1560) {
      return {
        width: [0.3 * vw + "px", "700px"],
        translateX: ["49%", "-15%"],
        translateY: ["50%", "50%"],
      };
    } else if (vw >= 1280) {
      return {
        width: [0.42 * vw + "px", "560px"],
        translateX: ["49%", "-10%"],
        translateY: ["50%", "50%"],
      };
    } else if (vw >= 1024) {
      return {
        width: [0.42 * vw + "px", "480px"],
        translateX: ["49%", "-7.5%"],
        translateY: ["50%", "50%"],
      };
    } else if (vw >= 768) {
      return {
        width: [0.57 * vw + "px", "450px"],
        translateX: ["49%", "49%"],
        translateY: ["50%", "-10%"],
      };
    } else if (vw >= 640) {
      return {
        width: [0.69 * vw + "px", "400px"],
        translateX: ["49%", "49%"],
        translateY: ["50%", "-10%"],
      };
    } else {
      return {
        width: ["99vw", "90vw"],
        translateX: ["49%", "49%"],
        translateY: ["50%", "-10%"],
      };
    }
  }
  const [ranges, setRanges] = useState(getRanges());

  useEffect(() => {
    function updateRanges() {
      setRanges(getRanges());
    }
    window.addEventListener("resize", updateRanges);
    return () => window.removeEventListener("resize", updateRanges);
  }, []);

  // horse
  const width = useTransform(scrollYProgress, [0, 0.33], ranges.width);
  const translateX = useTransform(
    scrollYProgress,
    [0, 0.33],
    ranges.translateX
  );
  const translateY = useTransform(
    scrollYProgress,
    [0, 0.33],
    ranges.translateY
  );
  const scale = useTransform(scrollYProgress, [0, 0.33], [1, 0.66]);

  // w --- h --- y
  const clipPath = useTransform(
    scrollYProgress,
    [0.4, 1],
    ["rect(0px 8% 100% 0px)", "rect(0px 100% 100% 0px)"]
  );

  const wingsAnim =
    (progress < 0.33 && { scale: 1, opacity: 1 }) ||
    (progress >= 0.33 && progress < 0.55 && { scale: 1, opacity: 0.5 }) ||
    (progress >= 0.55 && progress < 0.77 && { scale: 1.5, opacity: 1 }) ||
    (progress >= 0.77 && { scale: 1.25, opacity: 1 });

  const bodyAnim =
    (progress < 0.33 && { scale: 1, opacity: 1 }) ||
    (progress >= 0.33 && progress < 0.55 && { scale: 1.5, opacity: 1 }) ||
    (progress >= 0.55 && progress < 0.77 && { scale: 1, opacity: 0.5 }) ||
    (progress >= 0.77 && { scale: 1.25, opacity: 1 });

  return (
    <motion.section
      ref={sectionRef}
      className="side-padding -mt-[100vh] h-[300vh] w-full"
      animate={{ backgroundColor: bgColor }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
    >
      <div className="sticky top-0 h-[100vh] overflow-hidden">
        {/* horse wings */}
        <motion.div
          style={{ width, translateX, translateY, scale }}
          className="absolute right-1/2 bottom-1/2 min-h-[42vh] max-w-[min(45vh,400px)] object-cover lg:max-w-none"
        >
          <motion.img
            src="horse-wings.png"
            className="w-full"
            animate={wingsAnim}
            transition={{ ease: "easeInOut", duration: 0.6 }}
          />
        </motion.div>
        {/* horse body */}
        <motion.div
          style={{ width, translateX, translateY, scale }}
          className="absolute right-1/2 bottom-1/2 min-h-[42vh] max-w-[min(45vh,400px)] object-cover lg:max-w-none"
        >
          <motion.img
            src="horse-body.png"
            className="w-full"
            animate={bodyAnim}
            transition={{ ease: "easeInOut", duration: 0.6 }}
          />
        </motion.div>

        {/* text */}
        <motion.div
          className="absolute bottom-[5%] left-1/2 flex min-h-[50vh] w-full max-w-[500px] -translate-x-1/2 flex-col items-center text-center backdrop-blur-sm sm:max-w-[720px] lg:top-1/2 lg:bottom-[unset] lg:w-1/2 lg:translate-x-0 lg:-translate-y-1/2 lg:items-start lg:text-start"
          style={
            progress >= 0.33 
              ? {
                  backgroundColor:
                    "color-mix(in oklab, var(--color-beige) 20%, transparent",
                }
              : { backgroundColor: "transparent", backdropFilter: "none" }
          }
          transition={{ ease: "easeInOut", duration: 0, delay: 0.4 }}
        >
          {/* w -- h -- y */}
          {/* grey */}
          <div className="absolute flex w-[80%] items-center justify-between gap-4 overflow-y-hidden text-2xl font-semibold opacity-30 sm:gap-8 sm:text-3xl xl:text-4xl">
            <motion.span
              animate={{ translateY: progress >= 0.33 ? "0" : "100%" }}
              transition={{ ease: "easeInOut", duration: 0.4 }}
            >
              W
            </motion.span>
            <motion.div
              animate={{
                clipPath:
                  progress >= 0.33
                    ? "rect(0px 100% 100% 0px)"
                    : "rect(0px 100% 100% 100%)",
              }}
              transition={{ ease: "easeInOut", duration: 0.3, delay: 0.2 }}
              className="why-dashes h-[2px] w-full origin-center sm:h-[3px]"
            />
            <motion.span
              animate={{ translateY: progress >= 0.33 ? "0" : "100%" }}
              transition={{ ease: "easeInOut", duration: 0.4 }}
            >
              H
            </motion.span>
            <motion.div
              animate={{
                clipPath:
                  progress >= 0.33
                    ? "rect(0px 100% 100% 0px)"
                    : "rect(0px 0% 100% 0px)",
              }}
              transition={{ ease: "easeInOut", duration: 0.3, delay: 0.2 }}
              className="why-dashes h-[2px] w-full origin-center sm:h-[3px]"
            />
            <motion.span
              animate={{ translateY: progress >= 0.33 ? "0" : "100%" }}
              transition={{ ease: "easeInOut", duration: 0.4 }}
            >
              Y
            </motion.span>
          </div>
          {/* black */}
          <motion.div
            className="flex w-[80%] items-center justify-between gap-4 text-2xl font-medium sm:gap-8 sm:text-3xl xl:text-4xl"
            style={{ clipPath: clipPath }}
          >
            <motion.span
              animate={{ translateY: progress >= 0.33 ? "0" : "100%" }}
              transition={{ ease: "easeInOut", duration: 0.4 }}
            >
              W
            </motion.span>
            <motion.div
              animate={{
                clipPath:
                  progress >= 0.33
                    ? "rect(0px 100% 100% 0px)"
                    : "rect(0px 100% 100% 100%)",
              }}
              transition={{ ease: "easeInOut", duration: 0.3, delay: 0.2 }}
              className="why-dashes h-[2px] w-full origin-center sm:h-[3px]"
            />
            <motion.span
              animate={{ translateY: progress >= 0.33 ? "0" : "100%" }}
              transition={{ ease: "easeInOut", duration: 0.4 }}
            >
              H
            </motion.span>
            <motion.div
              animate={{
                clipPath:
                  progress >= 0.33
                    ? "rect(0px 100% 100% 0px)"
                    : "rect(0px 0% 100% 0px)",
              }}
              transition={{ ease: "easeInOut", duration: 0.3, delay: 0.2 }}
              className="why-dashes h-[2px] w-full origin-center sm:h-[3px]"
            />
            <motion.span
              animate={{ translateY: progress >= 0.33 ? "0" : "100%" }}
              transition={{ ease: "easeInOut", duration: 0.4 }}
            >
              Y
            </motion.span>
          </motion.div>

          {/* WHY HORSE */}
          <motion.div
            className="mt-3"
            transition={{ duration: 0, delay: 0.4 }}
            animate={{
              display: progress >= 0.33 && progress < 0.55 ? "unset" : "none",
            }}
          >
            {/* title */}
            <p className="origin-left overflow-y-hidden text-4xl leading-[1.4] font-semibold uppercase sm:text-5xl xl:text-6xl 2xl:text-7xl">
              <motion.span
                animate={{
                  translateY:
                    progress >= 0.33 && progress < 0.55 ? "0" : "100%",
                }}
                transition={{
                  duration: 0.4,
                  ease: "easeInOut",
                  delay: progress >= 0.33 && progress < 0.55 ? 0.4 : 0,
                }}
                className="inline-block"
              >
                horse?
              </motion.span>
            </p>

            {/* text */}
            <p className="mx-auto mt-0 text-base leading-[1.2] opacity-70 sm:w-[95%] sm:text-lg sm:leading-[1.4] md:text-xl lg:mx-0 lg:text-lg xl:mt-10 xl:text-xl 2xl:text-2xl 2xl:leading-[1.3]">
              {horseSectionText1.split(" ").map((word, i) => (
                <span key={i} className="inline-block overflow-y-hidden">
                  <motion.span
                    className="inline-block whitespace-pre"
                    animate={{
                      translateY:
                        progress >= 0.33 && progress < 0.55 ? "0" : "100%",
                    }}
                    transition={{
                      duration: 0.4,
                      ease: "easeInOut",
                      delay: progress >= 0.33 && progress < 0.55 ? 0.4 : 0,
                    }}
                  >
                    {word}{" "}
                  </motion.span>
                </span>
              ))}
            </p>
          </motion.div>
          {/* WHY WINGS */}
          <motion.div
            className="mt-3"
            transition={{ duration: 0, delay: 0.4 }}
            animate={{
              display: progress >= 0.55 && progress < 0.77 ? "unset" : "none",
            }}
          >
            {/* title */}
            <p className="origin-left overflow-y-hidden text-4xl leading-[1.4] font-semibold uppercase sm:text-5xl xl:text-6xl 2xl:text-7xl">
              <motion.span
                animate={{
                  translateY:
                    progress >= 0.55 && progress < 0.77 ? "0" : "100%",
                }}
                transition={{
                  duration: 0.4,
                  delay: progress >= 0.55 && progress < 0.77 ? 0.4 : 0,
                  ease: "easeInOut",
                }}
                className="inline-block"
              >
                wings?
              </motion.span>
            </p>

            {/* text */}
            <p className="mx-auto mt-0 text-base leading-[1.2] opacity-70 sm:w-[95%] sm:text-lg sm:leading-[1.4] md:text-xl lg:mx-0 lg:text-lg xl:mt-10 xl:text-xl 2xl:text-2xl 2xl:leading-[1.3]">
              {horseSectionText2.split(" ").map((word, i) => (
                <span key={i} className="inline-block overflow-y-hidden">
                  <motion.span
                    className="inline-block whitespace-pre"
                    animate={{
                      translateY:
                        progress >= 0.55 && progress < 0.77 ? "0" : "100%",
                    }}
                    transition={{
                      duration: 0.4,
                      delay: progress >= 0.55 && progress < 0.77 ? 0.4 : 0,
                      ease: "easeInOut",
                    }}
                  >
                    {word}{" "}
                  </motion.span>
                </span>
              ))}
            </p>
          </motion.div>
          {/* WHY OBSIDIAN */}
          <motion.div
            className="mt-3"
            transition={{ duration: 0, delay: 0.4 }}
            animate={{
              display: progress >= 0.77 ? "unset" : "none",
            }}
          >
            {/* title */}
            <p className="origin-left overflow-y-hidden text-4xl leading-[1.4] font-semibold uppercase sm:text-5xl xl:text-6xl 2xl:text-7xl">
              <motion.span
                animate={{ translateY: progress >= 0.77 ? "0" : "100%" }}
                transition={{
                  duration: 0.4,
                  delay: progress >= 0.77 ? 0.4 : 0,
                  ease: "easeInOut",
                }}
                className="inline-block"
              >
                obsidian?
              </motion.span>
            </p>

            {/* text */}
            <p className="mx-auto mt-0 text-base leading-[1.2] opacity-70 sm:w-[95%] sm:text-lg sm:leading-[1.4] md:text-xl lg:mx-0 lg:text-lg xl:mt-10 xl:text-xl 2xl:text-2xl 2xl:leading-[1.3]">
              {horseSectionText3.split(" ").map((word, i) => (
                <span key={i} className="inline-block overflow-y-hidden">
                  <motion.span
                    className="inline-block whitespace-pre"
                    animate={{ translateY: progress >= 0.77 ? "0" : "100%" }}
                    transition={{
                      duration: 0.4,
                      delay: progress >= 0.77 ? 0.4 : 0,
                      ease: "easeInOut",
                    }}
                  >
                    {word}{" "}
                  </motion.span>
                </span>
              ))}
            </p>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
}

function CTASection({
  bgColor,
  setBgColor,
}: {
  bgColor: string;
  setBgColor: React.Dispatch<React.SetStateAction<string>>;
}) {
  const sectionRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "start start"],
  });
  useMotionValueEvent(scrollYProgress, "change", () => {
    if (scrollYProgress.get() >= 0.9) {
      setBgColor("#000000");
    } else {
      setBgColor("#f5f0ed");
    }
  });

  const { scrollYProgress: leaveYProgress } = useScroll({
    target: sectionRef,
    offset: ["end end", "end start"],
  });
  const scaleX = useTransform(leaveYProgress, [0, 1], [1, 0.95]);

  return (
    <motion.section
      className="side-padding lg:rounded-b-5xl xl:rounded-b-6xl flex min-h-dvh items-end rounded-b-3xl md:rounded-b-4xl"
      animate={{ background: bgColor }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      style={{ scaleX }}
      ref={sectionRef}
    >
      <div className="mx-auto mb-14 flex w-[min(558px,100%)] flex-col items-start space-y-14 md:w-[666px] md:space-y-20 md:pb-10 lg:w-[845px] lg:pb-20 xl:w-[1000px] xl:space-y-24 xl:pb-30 2xl:w-[1150px]">
        <h2 className="bg-white bg-clip-text text-[min(72px,14vw)] leading-[1] font-semibold text-transparent capitalize mix-blend-difference md:text-[86px] lg:text-[100px] xl:text-[128px] 2xl:text-[145px]">
          For The <br /> Ambitious & Bold
        </h2>
        <div className="flex w-full flex-col items-start gap-8 xl:flex-row-reverse xl:items-end xl:justify-between">
          <p className="max-w-[620px] bg-white bg-clip-text text-lg text-transparent opacity-80 mix-blend-difference md:text-[22px] xl:text-2xl">
            Want a bespoke plexiglass masterpiece? <br />
            Whether it’s a personal project or a statement piece for your space,
            collaborate with Arthyl to create something truly one-of-a-kind.
          </p>
          <motion.div
            animate={{
              filter: bgColor === "#000000" ? "invert(100%)" : "none",
            }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            <Button arrow size="lg">
              Artify Your Space
            </Button>
          </motion.div>
        </div>
        {/* <div className="h-[1px] w-full bg-white opacity-0 mix-blend-difference lg:h-[2px]"></div> */}
      </div>
    </motion.section>
  );
}

function ProcessSection() {
  const imagesContainerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: imagesContainerRef,
    offset: ["start start", "end end"],
  });
  const [progress, setProgress] = useState("0%");
  const [translateValues, setTranslateValues] = useState([
    "0%",
    "-100%",
    "-100%",
  ]);
  useMotionValueEvent(scrollYProgress, "change", () => {
    if (scrollYProgress.get() >= 0.75) {
      setProgress("-66.66%");
      setTranslateValues(["-100%", "-100%", "0%"]);
    } else if (scrollYProgress.get() >= 0.25) {
      setProgress("-33.33%");
      setTranslateValues(["-100%", "0%", "100%"]);
    } else {
      setProgress("0%");
      setTranslateValues(["0%", "100%", "100%"]);
    }
  });

  return (
    <section className="side-padding 2xl-gap-x-20 mt-30 flex flex-col items-start justify-between pb-40 md:flex-row md:gap-x-8 lg:mt-40 lg:gap-x-12 xl:mt-60 xl:gap-x-16 2xl:mt-80">
      {/* text */}
      <div className="mx-auto flex  w-[min(100%,450px)] flex-col space-y-14 sm:w-[500px] md:sticky md:top-20 h-[unset] md:h-[60vw] md:w-[40%] lg:h-[50vw] lg:w-1/2">
        {/* title */}
        <p className="text-4xl font-medium md:ms-4">The Process</p>
        {/* counter */}
        <div className="hidden h-[19vw] items-start overflow-hidden text-center text-[22vw] leading-[0.8] font-semibold md:flex">
          <span>0</span>
          <motion.div
            className="inline-block"
            animate={{ translateY: progress }}
            transition={{ duration: 0.6, ease: "easeIn" }}
          >
            <span className="mb-20 block">1</span>
            <span className="mb-20 block">2</span>
            <span className="mb-20 block">3</span>
          </motion.div>
        </div>
        <div className="relative hidden text-[2vw] leading-[1.3] md:block">
          <p className="absolute top-0 mb-8">
            {"This is some text explaining step 1. This is some text explaining step 1."
              .split(" ")
              .map((word, i) => (
                <span key={i} className="inline-block overflow-hidden">
                  <motion.span
                    animate={{ translateY: translateValues[0] }}
                    transition={{ duration: 0.4, ease: "easeIn" }}
                    className="inline-block whitespace-pre"
                  >
                    {word}{" "}
                  </motion.span>
                </span>
              ))}
          </p>
          <p className="absolute top-0 mb-8 overflow-hidden">
            {"This is some text explaining step 2."
              .split(" ")
              .map((word, i) => (
                <span key={i} className="inline-block overflow-hidden">
                  <motion.span
                    animate={{ translateY: translateValues[1] }}
                    transition={{ duration: 0.4, ease: "easeIn" }}
                    className="inline-block whitespace-pre"
                  >
                    {word}{" "}
                  </motion.span>
                </span>
              ))}
          </p>
          <p className="absolute top-0 mb-8 overflow-hidden">
            {"This is some text explaining step 3. This is some text explaining step 3. This is some text explaining step 3."
              .split(" ")
              .map((word, i) => (
                <span key={i} className="inline-block overflow-hidden">
                  <motion.span
                    animate={{ translateY: translateValues[2] }}
                    transition={{ duration: 0.4, ease: "easeIn" }}
                    className="inline-block whitespace-pre"
                  >
                    {word}{" "}
                  </motion.span>
                </span>
              ))}
          </p>
        </div>
      </div>

      {/* images */}
      <div
        ref={imagesContainerRef}
        className="mx-auto flex w-[min(100%,450px)] shrink-0 flex-col gap-y-[15vw] sm:w-[500px] md:mx-0 md:w-[60%] md:gap-y-10 lg:w-1/2 lg:gap-y-14 xl:gap-y-20"
      >
        <div>
          <img
            src="/"
            alt=""
            className="bg-placeholder aspect-square w-full rounded-xl shadow-2xl xl:rounded-2xl"
          />
          <p className="my-3 text-lg leading-[1.2] sm:text-xl md:hidden">
            This is some text explaining step 1.
          </p>
        </div>
        <div>
          <img
            src="/"
            alt=""
            className="bg-placeholder aspect-square w-full rounded-xl shadow-2xl"
          />
          <p className="my-3 text-lg leading-[1.2] sm:text-xl md:hidden">
            This is some text explaining step 1.
          </p>
        </div>
        <div>
          <img
            src="/"
            alt=""
            className="bg-placeholder aspect-square w-full rounded-xl shadow-2xl"
          />
          <p className="my-3 text-lg leading-[1.2] sm:text-xl md:hidden">
            This is some text explaining step 1.
          </p>
        </div>
      </div>
    </section>
  );
}

// sticky
// function ProcessSection() {
//   const img2Ref = useRef<HTMLImageElement>(null);
//   const img3Ref = useRef<HTMLImageElement>(null);
//   const { scrollYProgress: img2Progress } = useScroll({
//     target: img2Ref,
//     offset: ["start end", "start 30%"],
//   });
//   const { scrollYProgress: img3Progress } = useScroll({
//     target: img3Ref,
//     offset: ["start end", "start 30%"],
//   });

//   const [progress2, setProgress2] = useState(0);
//   const [progress3, setProgress3] = useState(0);

//   useEffect(() => {
//     return img2Progress.on("change", (progress) => {
//       setProgress2(progress);
//     });
//   }, [img2Progress]);
//   useEffect(() => {
//     return img3Progress.on("change", (progress) => {
//       setProgress3(progress);
//     });
//   }, [img3Progress]);

//   const divTranslateAnim = (progress3 >= 1 && {
//     translateY: "-66%",
//   }) ||
//     (progress2 >= 1 && { translateY: "-33%" }) || {
//       translateY: "0%",
//     };

//   return (
//     <section className="side-padding">
//       <div className="mt-20 w-full px-20 flex mx-auto flex-col items-end gap-40">
//         <div className="sticky top-20 mb-40 flex w-full justify-between gap-10">
//           {/* text */}
//           <div className="w-[40%] space-y-6">
//             <p className="text-3xl font-medium">The Process</p>
//             <div className="flex h-32 items-start overflow-hidden text-center text-9xl font-semibold">
//               <span>0</span>
//               <motion.div
//                 className="inline-block"
//                 animate={divTranslateAnim}
//                 transition={{ duration: 0.3, ease: "easeInOut" }}
//               >
//                 <span className="block">1</span>
//                 <span className="block">2</span>
//                 <span className="block">3</span>
//               </motion.div>
//             </div>
//             <div className="flex h-8 space-y-8 items-start overflow-hidden text-center text-2xl font-regular opacity-75">
//               <motion.div
//                 className="inline-block"
//                 animate={divTranslateAnim}
//                 transition={{ duration: 0.3, ease: "easeInOut" }}
//               >
//                 <span className="block">This is some text explaining what happens in step 1</span>
//                 <span className="block">This is some text explaining what happens in step 2</span>
//                 <span className="block">This is some text explaining what happens in step 3</span>
//               </motion.div>
//             </div>
//           </div>
//           {/* first image */}
//           <img
//             src=""
//             alt=""
//             className="bg-placeholder aspect-square w-[calc(90vh-var(--spacing)*40)] shrink-0"
//           />
//         </div>
//         {/* rest of images */}
//         <img
//           ref={img2Ref}
//           src=""
//           alt=""
//           className="bg-placeholder sticky top-30 mb-30 aspect-square w-[calc(90vh-var(--spacing)*40)]"
//         />
//         <img
//           ref={img3Ref}
//           src=""
//           alt=""
//           className="bg-placeholder sticky top-40 mb-20 aspect-square w-[calc(90vh-var(--spacing)*40)]"
//         />
//       </div>
//     </section>
//   );
// }
