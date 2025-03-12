export const PAGES = [
  { name: "home", link: "/" },
  { name: "about", link: "/about" },
  { name: "contact", link: "/contact" },
  { name: "shop", link: "/shop" },
];

export const SOCIALS_LINKS = [
  { platform: "instagram", url: "https://instagram.com/iamarthyl" },
  { platform: "facebook", url: "https://instagram.com/iamarthyl" },
];

export const EASE_IN_OUT_CUBIC = [0.65, 0, 0.35, 1];

export type ShopItem = {
  title: string;
  totalStock: number;
  remainingStock: number;
  imageSrcUrl: string;
  secondImageSrcUrl: string;
};

export const SHOP_ITEMS: ShopItem[] = [
  {
    title: "Obsidian - Winged Horse",
    totalStock: 10,
    remainingStock: 9,
    imageSrcUrl: "/Obsidian-Horse.webp",
    secondImageSrcUrl: "/horse-dark-room.jpg",
  },
  {
    title: "Colorful Deer",
    totalStock: 7,
    remainingStock: 4,
    imageSrcUrl: "/deer-cropped.jpg",
    secondImageSrcUrl: "/deer-cropped.jpg",
  },
  // {
  //   title: "Another Art Piece",
  //   totalStock: 7,
  //   remainingStock: 4,
  //   imageSrcUrl: "/nothing.jpg",
  //   secondImageSrcUrl: "/nothing.jpg",
  // },
];

export type Coordinates = { x: number; y: number };

export const ABOUT_ME_PARAGRAPHS = [
  {
    title: "Who Am I?",
    text: "I am not your typical artist. I didn’t grow up surrounded by art, nor did I inherit a creative legacy. My journey was different—shaped by an entrepreneurial mindset and a deep passion for business. I’ve always been fascinated by the concepts of growth, perseverance, and the challenges that shape success.",
  },
  {
    title: "Why Art?",
    text: "This passion for business eventually led me to discover art—not as a traditional practice but as a way to express the core values of ambition and achievement. For me, art is more than colors or forms; it’s a visual language of resilience, triumph, and innovation.",
  },
  {
    title: "Who Is My Art For?",
    text: "Every piece I create is a reflection of the entrepreneurial journey, designed to inspire business owners, dreamers, and leaders who strive to overcome obstacles and build their visions. My work isn’t just about aesthetics; it’s about crafting stories that resonate with those who see success as a blend of hard work, creativity, and determination.",
  },
  {
    title: "What Is My Mission?",
    text: "Through my art, I aim to bridge the worlds of creativity and business, offering a perspective that celebrates ambition and the beauty of challenges. My work is a signature of growth, meant to inspire those who see themselves not just as spectators, but as achievers.",
  },
];

// home page
// hero
export const ROTATING_TEXT = {
  // text: "--------------------------------",
  text: "obsidian - obsidian - ",
  sold_number: 1,
  total_number: 10,
};

export const HORIZONTAL_SCROLL_IMAGES = [
  { special: false, src: "room1.jpg", width: "lg" },
  { special: false, src: "room2.jpg", width: "sm" },
  { special: false, src: "room3.jpg", width: "sm" },
  {
    special: true,
    front: "museum-front.png",
    back: "museum-back.jpg",
    horse: "horse-nobg.png",
  },
  { special: false, src: "room5.jpg", width: "sm" },
];


// import {
//   AnimationControls,
//   motion,
//   TargetAndTransition,
//   useScroll,
//   useTransform,
//   VariantLabels,
// } from "motion/react";
// import { HORIZONTAL_SCROLL_IMAGES, ROTATING_TEXT } from "../utils/constants";
// import Button from "../components/Button";
// import { Link } from "react-router-dom";
// import { useEffect, useRef, useState } from "react";

// const horseSectionText1 =
//   "The horse is a timeless symbol of strength, stability, and endurance. It represents the power to push forward, to overcome obstacles, and to stay grounded no matter the challenges ahead. Horses have long been associated with resilience and determination—qualities that define success in both life and business. This piece embodies that unwavering force, reminding us that true progress starts with a strong foundation.";
// const horseSectionText2 =
//   "Wings represent freedom, ambition, and limitless potential. They elevate the grounded power of the horse, allowing it to soar beyond limitations. Just as ambition lifts us beyond the ordinary, the wings symbolize the ability to break barriers, rise above challenges, and explore new heights. This fusion of strength and flight creates a powerful symbol of balance—staying rooted while daring to reach beyond. It’s a reminder that success is not just about stability, but also about the courage to take flight.";
// const horseSectionText3 =
//   "Obsidian represents mystery, strength, and transformation. Its deep black color symbolizes the unknown and the courage to face it. The obsidian winged horse embodies power and resilience, a guardian-like presence that stands firm through challenges. More than a color, black is a statement—of independence, ambition, and untapped potential waiting to rise.";

// export default function HomePage() {
//   return (
//     <>
//       {/* <HeroSection />
//       <AboutSection />
//       <StoryText /> */}
//       <Images />

//       <HorseSection />

//       {/* <div className="h-[50vh]" /> */}
//     </>
//   );
// }

// function HeroSection() {
//   return (
//     <section className="side-padding mx-auto max-w-[2000px]">
//       {/* headline - huge text */}
//       <div className="relative flex items-center justify-center">
//         <div className="relative mt-[min(260px,50vw)] md:mt-[20vw] lg:mt-[min(250px,12.5vw)] lg:w-[min(100%,2000px)]">
//           <h1 className="bg-white bg-clip-text text-center text-[min(17.5vw,18vw)] leading-[0.8] font-semibold text-transparent mix-blend-difference md:text-[max(110px,12vw)] lg:text-[min(200px,10vw)]">
//             A Timeless <br />
//             Mark For Growth <br className="hidden lg:block" />& Success
//           </h1>

//           <video
//             src="/winged-horse-video.mp4"
//             loop
//             muted
//             autoPlay
//             className="absolute bottom-[85%] left-0 -z-1 aspect-square w-[min(55vw,280px)] rounded-md object-cover md:bottom-[45%] md:aspect-3/4 md:w-[max(220px,25vw)] md:rounded-lg lg:bottom-[25%] lg:w-[min(400px,20vw)]"
//           />

//           <img
//             src="/winged-horse-hero.jpg"
//             className="bg-placeholder absolute top-[95%] right-0 -z-1 aspect-5/3 w-[min(60vw,300px)] rounded-md object-cover md:top-[75%] md:w-[max(264px,30vw)] md:rounded-lg lg:top-[66%] lg:w-[min(500px,25vw)]"
//           />
//         </div>
//       </div>

//       {/* rotating circular text + up next */}
//       <div className="mt-[min(230px,50vw)] flex items-end gap-4 sm:gap-5 md:mt-[10vw] md:gap-6 lg:mt-[min(125px,6vw)]">
//         {/* rotating circular text */}
//         <div className="relative flex aspect-square w-[120px] shrink-0 items-center justify-center text-lg sm:w-[134px] sm:text-xl md:w-[160px] md:text-2xl">
//           {/* fixed text in the middle */}
//           <div className="absolute flex aspect-square w-[60px] items-center justify-center text-center leading-[1] font-light sm:w-[67px] md:w-[80px]">
//             <p>
//               {ROTATING_TEXT.sold_number}/{ROTATING_TEXT.total_number} <br />
//               sold
//             </p>
//           </div>

//           {/* rotating text */}
//           <motion.div
//             className="absolute h-full w-full"
//             initial={{ rotate: 0 }}
//             animate={{ rotate: 360 }}
//             transition={{ ease: "linear", duration: 10, repeat: Infinity }}
//           >
//             <p>
//               {ROTATING_TEXT.text.split("").map((char, i) => (
//                 <span
//                   className="absolute left-1/2 inline-block w-3 origin-[0_60px] text-center font-semibold uppercase select-none sm:w-4 sm:origin-[0_67px] md:w-5 md:origin-[0_80px]"
//                   key={i}
//                   style={{
//                     transform: `rotate(${
//                       i * (360 / ROTATING_TEXT.text.length)
//                     }deg)`,
//                   }}
//                 >
//                   <span style={{ rotate: "8deg", display: "inline-block" }}>
//                     {char}
//                   </span>
//                 </span>
//               ))}
//             </p>
//           </motion.div>
//         </div>

//         {/* next up - cirrus - axiom */}
//         <div>
//           <p className="text-sm font-light opacity-80 md:text-base">
//             next up :
//           </p>
//           <div className="mt-1.5 flex flex-wrap gap-x-3 text-lg sm:text-xl md:text-2xl">
//             <p
//               className="flex text-white"
//               style={{ textShadow: "0 0 2px rgba(0,0,0,1)" }}
//             >
//               → CIRRUS
//             </p>
//             <p className="axiom-text flex">→ AXIOM</p>
//           </div>
//         </div>
//       </div>

//       {/* subheadline - paragraph */}
//       <div className="mt-40 w-[min(100%,390px)] text-lg sm:w-md sm:text-xl md:w-lg md:text-2xl lg:mt-50 xl:mt-60 xl:w-xl xl:text-3xl">
//         <p>
//           The First Plexiglass Artist in the Middle East, crafting a unique &
//           exclusive art piece for entrepreneurs and leaders.
//           <br />
//           <br />
//           With only a select few ever made, this piece serves as a reminder of
//           how far you’ve come and how far you’ll go.
//         </p>
//       </div>
//     </section>
//   );
// }

// function AboutSection() {
//   return (
//     <section className="side-padding mx-auto my-50 w-full max-w-[2000px] lg:my-60 xl:my-70">
//       <div className="relative flex flex-col gap-4">
//         <p className="bg-white bg-clip-text text-[12vw] leading-[1] font-semibold text-transparent uppercase mix-blend-difference lg:text-[min(200px,10vw)]">
//           meet arthyl
//         </p>
//         <div className="aspect-5/6 w-[min(360px,80%)] self-end overflow-hidden md:absolute md:top-1/2 md:-z-1 md:w-[min(700px,42%)] md:-translate-y-1/2">
//           <img
//             src="Arthyl-Ahmad.webp"
//             className="-translate-y-1/5 scale-110"
//             alt=""
//           />
//         </div>
//         <p className="w-[95%] opacity-70 sm:text-lg md:w-[53%] lg:text-2xl lg:leading-[1.4] xl:text-3xl">
//           I am not your typical artist. I didn’t grow up surrounded by art, nor
//           did I inherit a creative legacy. My journey was different—shaped by an
//           entrepreneurial mindset and a deep passion for business. I’ve always
//           been fascinated by the concepts of growth, perseverance, and the
//           challenges that shape success. This passion eventually led me to
//           discover art, not as a traditional practice but as a medium to express
//           the core values of ambition and achievement.
//         </p>
//         <Link
//           to="/about"
//           className="mt-2 w-max origin-center scale-120 md:mt-8 lg:mt-10 xl:mt-12"
//         >
//           <Button secondary={true} arrow={true} size="lg">
//             Read More
//           </Button>
//         </Link>
//       </div>
//     </section>
//   );
// }

// function StoryText() {
//   const sectionRef = useRef<HTMLDivElement>(null);
//   const { scrollYProgress: sectionYProgress } = useScroll({
//     target: sectionRef,
//     offset: ["start start", "end end"],
//   });

//   const [progress, setProgress] = useState(0);

//   useEffect(() => {
//     return sectionYProgress.on("change", (progress) => {
//       setProgress(progress);
//     });
//   }, [sectionYProgress]);

//   type AnimType =
//     | boolean
//     | AnimationControls
//     | TargetAndTransition
//     | VariantLabels
//     | undefined;

//   const text1Anim: AnimType =
//     (progress < 0.33 && { y: "0%", rotateX: "0deg", opacity: 1 }) ||
//     (progress >= 0.33 && { y: "-100%", rotateX: "90deg", opacity: 0 });

//   const text2Anim: AnimType =
//     (progress < 0.33 && { y: "100%", rotateX: "-90deg", opacity: 0 }) ||
//     (progress < 0.66 && { y: "0%", rotateX: "0deg", opacity: 1 }) ||
//     (progress < 1 && { y: "-100%", rotateX: "90deg", opacity: 0 });

//   const height = useTransform(sectionYProgress, [0.7, 1], ["50%", "0%"]);

//   return (
//     <div ref={sectionRef} className="bg-red-20 relative z-2 h-[300vh] w-full">
//       <div className="sticky top-0 flex h-dvh items-center">
//         {/* animating text */}
//         <div className="relative w-full overflow-hidden">
//           <motion.p
//             className="absolute w-full text-center text-[6vw] font-semibold capitalize lg:text-[min(100px,5vw)]"
//             animate={text1Anim}
//             transition={{ duration: 0.3, delay: 0.2, ease: "easeInOut" }}
//           >
//             There's a story
//           </motion.p>
//           <motion.p
//             className="absolute w-full text-center text-[6vw] font-semibold capitalize lg:text-[min(100px,5vw)]"
//             animate={text2Anim}
//             transition={{ duration: 0.3, delay: 0.2, ease: "easeInOut" }}
//           >
//             behind each horse
//           </motion.p>

//           {/* placeholder text */}
//           <p className="truncate text-[6vw] font-semibold capitalize opacity-0 lg:text-[min(100px,5vw)]">
//             There's a story behind each horse
//           </p>
//         </div>
//         {/* opening doors */}
//         <motion.div
//           className="absolute top-0 left-0 -z-1 h-1/2 w-full bg-beige"
//           style={{ height }}
//           transition={{ duration: 1, ease: "easeInOut" }}
//         />
//         <motion.div
//           className="absolute bottom-0 left-0 -z-1 h-1/2 w-full bg-beige"
//           style={{ height }}
//           transition={{ duration: 1, ease: "easeInOut" }}
//         />
//       </div>
//     </div>
//   );
// }

// function Images() {
//   const sectionRef = useRef<HTMLDivElement>(null);
//   const { scrollYProgress } = useScroll({
//     target: sectionRef,
//     offset: ["start start", "end end"],
//   });

//   // horizontal scroll
//   const scale = useTransform(scrollYProgress, [0, 0.26], [0.7, 1]);
//   const right = useTransform(scrollYProgress, [0.26, 0.75], ["100%", "0%"]);
//   const translateX = useTransform(
//     scrollYProgress,
//     [0.26, 0.75],
//     ["100%", "0%"]
//   );

//   // zoom in Transition

//   // code to change the statring width of the zoomInWidth useTransform
//   const breakpoints = [
//     { query: "(min-width: 1536px)", value: "45vw" }, // Large Screens
//     { query: "(min-width: 1024px)", value: "55vw" }, // Small Laptops
//     { query: "(min-width: 768px)", value: "70vw" }, // Tablets
//     { query: "(max-width: 768px)", value: "85vw" }, // Mobile (small)
//   ];
//   const getStartWidth = () => {
//     for (const bp of breakpoints) {
//       if (window.matchMedia(bp.query).matches) {
//         return bp.value;
//       }
//     }
//   };

//   const [startWidth, setStartWidth] = useState(getStartWidth);

//   useEffect(() => {
//     const mediaQueries = breakpoints.map((bp) => ({
//       query: window.matchMedia(bp.query),
//       value: bp.value,
//     }));

//     const handleChange = () => {
//       setStartWidth(getStartWidth());
//     };

//     mediaQueries.forEach((mq) =>
//       mq.query.addEventListener("change", handleChange)
//     );

//     return () => {
//       mediaQueries.forEach((mq) =>
//         mq.query.removeEventListener("change", handleChange)
//       );
//     };
//   }, []);

//   const zoomInWidth = useTransform(
//     scrollYProgress,
//     [0.75, 0.8],
//     [startWidth, "100vw"]
//   );

//   const zoomInHeight = useTransform(
//     scrollYProgress,
//     [0.75, 0.8],
//     ["60vh", "100vh"]
//   );
//   const zoomInBgScale = useTransform(scrollYProgress, [0.75, 1], [1, 4.8]);
//   const zoomInHorseScale = useTransform(scrollYProgress, [0.75, 1], [1, 3]);
//   const zoomInBgOpacity = useTransform(scrollYProgress, [0.75, 1], [1, 0]);

//   const imgContainerRef = useRef<HTMLDivElement>(null);

//   // immediately turn opacity to 0 at the end
//   const [isAtBottom, setIsAtBottom] = useState(false);

//   useEffect(() => {
//     const unsubscribe = scrollYProgress.on("change", (progress) => {
//       setIsAtBottom(progress >= 1); // True when at the bottom, false otherwise
//     });

//     return () => unsubscribe(); // Cleanup when component unmounts
//   }, [scrollYProgress]);

//   return (
//     <section
//       ref={sectionRef}
//       className="relative z-1 -mt-[170vh] h-[400vh] bg-black"
//       style={{ opacity: isAtBottom ? 0 : 1 }}
//     >
//       <div
//         ref={imgContainerRef}
//         className="sticky top-0 z-1 flex h-dvh items-center overflow-hidden"
//       >
//         <motion.div
//           className="relative mx-auto flex h-dvh w-[85vw] items-center md:w-[70vw] lg:w-[55vw] 2xl:w-[45vw]"
//           style={{ width: zoomInWidth }}
//         >
//           <motion.div
//             className="absolute origin-right"
//             style={{ right, translateX, scale }}
//           >
//             <div className="relative flex items-center gap-20">
//               {HORIZONTAL_SCROLL_IMAGES.map(
//                 ({ src, width, special, back, front, horse }, i) =>
//                   i !== HORIZONTAL_SCROLL_IMAGES.length - 1 ? (
//                     // img with zoom in transition to next section
//                     special ? (
//                       <motion.div
//                         key={i}
//                         className={`relative z-1 h-[60vh] w-[85vw] shrink-0 overflow-hidden bg-beige md:w-[70vw] lg:w-[55vw] 2xl:w-[45vw]`}
//                         style={{ height: zoomInHeight, width: zoomInWidth }}
//                       >
//                         <motion.img
//                           src={front}
//                           className="absolute right-1/2 bottom-1/2 z-1 h-full min-h-[60vh] w-full min-w-[140vw] translate-1/2 object-cover sm:min-w-[100vw] md:min-w-[80vw] lg:min-w-[60vw] 2xl:min-w-[45vw]"
//                           style={{ scale: zoomInBgScale }}
//                         />
//                         <motion.img
//                           src={back}
//                           className="absolute right-1/2 bottom-1/2 z-0 h-full min-h-[60vh] w-full min-w-[140vw] translate-1/2 object-cover sm:min-w-[100vw] md:min-w-[80vw] lg:min-w-[60vw] 2xl:min-w-[45vw]"
//                           style={{
//                             scale: zoomInBgScale,
//                             opacity: zoomInBgOpacity,
//                           }}
//                         />
//                         <motion.img
//                           src={horse}
//                           className="absolute right-1/2 bottom-1/2 z-2 min-h-[14vh] w-[33vw] max-w-[min(13.33vh,133px)] translate-1/2 overflow-visible object-cover sm:w-[23vw] md:w-[19vw] lg:w-[14vw] lg:max-w-none 2xl:w-[10vw]"
//                           style={{ scale: zoomInHorseScale }}
//                         />
//                       </motion.div>
//                     ) : (
//                       // normal img
//                       <div
//                         key={i}
//                         className={`flex shrink-0 items-center overflow-hidden ${
//                           width === "sm"
//                             ? "w-[min(480px,90vw)] sm:w-[70vw] md:w-[400px] lg:w-[450px] 2xl:w-[520px]"
//                             : "w-[100vw] sm:w-[90vw] md:w-[600px] lg:w-[700px] 2xl:w-[840px]"
//                         }`}
//                       >
//                         <img src={src} className="w-full object-contain" />
//                       </div>
//                     )
//                   ) : (
//                     // last img
//                     <div
//                       key={i}
//                       className={`absolute left-[100%] z-0 ms-20 flex shrink-0 items-center overflow-hidden ${
//                         width === "sm"
//                           ? "w-[min(480px,90vw)] sm:w-[70vw] md:w-[400px] lg:w-[450px] 2xl:w-[520px]"
//                           : "w-[100vw] sm:w-[90vw] md:w-[600px] lg:w-[700px] 2xl:w-[840px]"
//                       }`}
//                     >
//                       <img src={src} className="w-full object-contain" />
//                     </div>
//                   )
//               )}
//             </div>
//           </motion.div>
//         </motion.div>
//       </div>
//     </section>
//   );
// }

// function HorseSection() {
//   const sectionRef = useRef<HTMLDivElement>(null);
//   const { scrollYProgress } = useScroll({
//     target: sectionRef,
//     offset: ["start start", "end end"],
//   });

//   const [progress, setProgress] = useState(0);

//   useEffect(() => {
//     return scrollYProgress.on("change", (progress) => {
//       setProgress(progress);
//     });
//   }, [scrollYProgress]);

//   function getRanges() {
//     const vw = window.innerWidth;
//     if (vw >= 1560) {
//       return {
//         width: [0.3 * vw + "px", "650px"],
//         translateX: ["49%", "-20%"],
//         translateY: ["50%", "50%"],
//       };
//     } else if (vw >= 1280) {
//       return {
//         width: [0.42 * vw + "px", "530px"],
//         translateX: ["49%", "-15%"],
//         translateY: ["50%", "50%"],
//       };
//     } else if (vw >= 1024) {
//       return {
//         width: [0.42 * vw + "px", "450px"],
//         translateX: ["49%", "-10%"],
//         translateY: ["50%", "50%"],
//       };
//     } else if (vw >= 768) {
//       return {
//         width: [0.57 * vw + "px", "450px"],
//         translateX: ["49%", "49%"],
//         translateY: ["50%", "-10%"],
//       };
//     } else if (vw >= 640) {
//       return {
//         width: [0.69 * vw + "px", "400px"],
//         translateX: ["49%", "49%"],
//         translateY: ["50%", "-10%"],
//       };
//     } else {
//       return {
//         width: ["99vw", "90vw"],
//         translateX: ["49%", "49%"],
//         translateY: ["50%", "-10%"],
//       };
//     }
//   }
//   const [ranges, setRanges] = useState(getRanges());

//   useEffect(() => {
//     function updateRanges() {
//       setRanges(getRanges());
//     }
//     window.addEventListener("resize", updateRanges);
//     return () => window.removeEventListener("resize", updateRanges);
//   }, []);

//   // horse
//   const width = useTransform(scrollYProgress, [0, 0.33], ranges.width);
//   const translateX = useTransform(
//     scrollYProgress,
//     [0, 0.33],
//     ranges.translateX
//   );
//   const translateY = useTransform(
//     scrollYProgress,
//     [0, 0.33],
//     ranges.translateY
//   );

//   // w --- h --- y
//   const clipPath = useTransform(
//     scrollYProgress,
//     [0.4, 1],
//     ["rect(0px 8% 100% 0px)", "rect(0px 100% 100% 0px)"]
//   );

//   return (
//     <section
//       ref={sectionRef}
//       className="side-padding -mt-[100vh] h-[300vh] w-full"
//     >
//       <div className="sticky top-0 h-[100vh] overflow-hidden">
//         {/* horse wings */}
//         <motion.div
//           style={{ width, translateX, translateY }}
//           className="absolute right-1/2 bottom-1/2 min-h-[42vh] max-w-[min(45vh,400px)] object-cover lg:max-w-none"
//         >
//           <img src="horse-wings.png" className="w-full" />
//         </motion.div>
//         {/* horse body */}
//         <motion.div
//           style={{ width, translateX, translateY }}
//           className="absolute right-1/2 bottom-1/2 min-h-[42vh] max-w-[min(45vh,400px)] object-cover lg:max-w-none"
//         >
//           <img src="horse-body.png" className="w-full" />
//         </motion.div>

//         {/* text - 1 - */}
//         <motion.div
//           className="absolute bottom-[5%] left-1/2 flex min-h-[50vh] w-full max-w-[720px] -translate-x-1/2 flex-col items-center text-center backdrop-blur-sm sm:top-[45%] lg:top-1/2 lg:bottom-[unset] lg:w-1/2 lg:translate-x-0 lg:-translate-y-1/2 lg:items-start lg:text-start"
//           animate={
//             progress >= 0.33
//               ? {
//                   backgroundColor:
//                     "color-mix(in oklab, var(--color-beige) 20%, transparent)",
//                 }
//               : { backgroundColor: "transparent", backdropFilter: "none" }
//           }
//           transition={{ ease: "easeInOut", duration: 0.2, delay: 0.4 }}
//         >
//           {/* w -- h -- y */}
//           {/* grey */}
//           <div className="absolute flex w-[80%] items-center justify-between gap-4 overflow-y-hidden text-2xl font-semibold opacity-30 sm:gap-8 sm:text-3xl xl:text-4xl">
//             <motion.span
//               animate={{ translateY: progress >= 0.33 ? "0" : "100%" }}
//               transition={{ ease: "easeInOut", duration: 0.4 }}
//             >
//               W
//             </motion.span>
//             <motion.div
//               animate={{
//                 clipPath:
//                   progress >= 0.33
//                     ? "rect(0px 100% 100% 0px)"
//                     : "rect(0px 100% 100% 100%)",
//               }}
//               transition={{ ease: "easeInOut", duration: 0.3, delay: 0.2 }}
//               className="why-dashes h-[2px] w-full origin-center sm:h-[3px]"
//             />
//             <motion.span
//               animate={{ translateY: progress >= 0.33 ? "0" : "100%" }}
//               transition={{ ease: "easeInOut", duration: 0.4 }}
//             >
//               H
//             </motion.span>
//             <motion.div
//               animate={{
//                 clipPath:
//                   progress >= 0.33
//                     ? "rect(0px 100% 100% 0px)"
//                     : "rect(0px 0% 100% 0px)",
//               }}
//               transition={{ ease: "easeInOut", duration: 0.3, delay: 0.2 }}
//               className="why-dashes h-[2px] w-full origin-center sm:h-[3px]"
//             />
//             <motion.span
//               animate={{ translateY: progress >= 0.33 ? "0" : "100%" }}
//               transition={{ ease: "easeInOut", duration: 0.4 }}
//             >
//               Y
//             </motion.span>
//           </div>
//           {/* black */}
//           <motion.div
//             className="flex w-[80%] items-center justify-between gap-4 text-2xl font-medium sm:gap-8 sm:text-3xl xl:text-4xl"
//             style={{ clipPath: clipPath }}
//           >
//             <motion.span
//               animate={{ translateY: progress >= 0.33 ? "0" : "100%" }}
//               transition={{ ease: "easeInOut", duration: 0.4 }}
//             >
//               W
//             </motion.span>
//             <motion.div
//               animate={{
//                 clipPath:
//                   progress >= 0.33
//                     ? "rect(0px 100% 100% 0px)"
//                     : "rect(0px 100% 100% 100%)",
//               }}
//               transition={{ ease: "easeInOut", duration: 0.3, delay: 0.2 }}
//               className="why-dashes h-[2px] w-full origin-center sm:h-[3px]"
//             />
//             <motion.span
//               animate={{ translateY: progress >= 0.33 ? "0" : "100%" }}
//               transition={{ ease: "easeInOut", duration: 0.4 }}
//             >
//               H
//             </motion.span>
//             <motion.div
//               animate={{
//                 clipPath:
//                   progress >= 0.33
//                     ? "rect(0px 100% 100% 0px)"
//                     : "rect(0px 0% 100% 0px)",
//               }}
//               transition={{ ease: "easeInOut", duration: 0.3, delay: 0.2 }}
//               className="why-dashes h-[2px] w-full origin-center sm:h-[3px]"
//             />
//             <motion.span
//               animate={{ translateY: progress >= 0.33 ? "0" : "100%" }}
//               transition={{ ease: "easeInOut", duration: 0.4 }}
//             >
//               Y
//             </motion.span>
//           </motion.div>

//           {/* WHY HORSE */}
//           <div>
//             {/* title */}
//             <p className="origin-left overflow-y-hidden text-4xl leading-[1.4] font-semibold uppercase sm:text-5xl xl:text-6xl">
//               <motion.span
//                 animate={{
//                   translateY:
//                     progress >= 0.33 && progress < 0.66 ? "0" : "100%",
//                 }}
//                 transition={{ duration: 0.4, ease: "easeInOut" }}
//                 className="inline-block"
//               >
//                 horse?
//               </motion.span>
//             </p>

//             {/* text */}
//             <p className="mt-0 text-base leading-[1.4] opacity-70 sm:w-[95%] sm:text-lg md:text-xl lg:text-lg xl:mt-10 xl:text-xl">
//               {horseSectionText1.split(" ").map((word, i) => (
//                 <span key={i} className="inline-block overflow-y-hidden">
//                   <motion.span
//                     className="inline-block whitespace-pre"
//                     animate={{
//                       translateY:
//                         progress >= 0.33 && progress < 0.66 ? "0" : "100%",
//                     }}
//                     transition={{ duration: 0.4, ease: "easeInOut" }}
//                   >
//                     {word}{" "}
//                   </motion.span>
//                 </span>
//               ))}
//             </p>
//           </div>
//         </motion.div>

//         {/* text - 2 - */}
//         <div className="absolute bottom-[5%] left-1/2 flex min-h-[50vh] w-full max-w-[720px] -translate-x-1/2 flex-col items-center text-center sm:top-[45%] lg:top-1/2 lg:bottom-[unset] lg:w-1/2 lg:translate-x-0 lg:-translate-y-1/2 lg:items-start lg:text-start">
//           {/* WHY WINGS */}
//           <div>
//             {/* title */}
//             <p className="origin-left overflow-y-hidden text-4xl leading-[1.4] font-semibold uppercase sm:text-5xl xl:text-6xl">
//               <motion.span
//                 animate={{
//                   translateY: progress >= 0.66 && progress < 0.9 ? "0" : "100%",
//                 }}
//                 transition={{ duration: 0.4, ease: "easeInOut" }}
//                 className="inline-block"
//               >
//                 wings?
//               </motion.span>
//             </p>

//             {/* text */}
//             <p className="mt-0 text-base leading-[1.2] lg:leading-[1.4] opacity-70 sm:w-[95%] sm:text-lg md:text-xl lg:text-lg xl:mt-10 xl:text-xl">
//               {horseSectionText2.split(" ").map((word, i) => (
//                 <span key={i} className="inline-block overflow-y-hidden">
//                   <motion.span
//                     className="inline-block whitespace-pre"
//                     animate={{
//                       translateY:
//                         progress >= 0.66 && progress < 0.9 ? "0" : "100%",
//                     }}
//                     transition={{ duration: 0.4, ease: "easeInOut" }}
//                   >
//                     {word}{" "}
//                   </motion.span>
//                 </span>
//               ))}
//             </p>
//           </div>
//         </div>

//         {/* text - 3 - */}
//         <div className="absolute bottom-[5%] left-1/2 flex min-h-[50vh] w-full max-w-[720px] -translate-x-1/2 flex-col items-center text-center sm:top-[45%] lg:top-1/2 lg:bottom-[unset] lg:w-1/2 lg:translate-x-0 lg:-translate-y-1/2 lg:items-start lg:text-start">
//           {/* WHY WINGS */}
//           <div>
//             {/* title */}
//             <p className="origin-left overflow-y-hidden text-4xl leading-[1.4] font-semibold uppercase sm:text-5xl xl:text-6xl">
//               <motion.span
//                 animate={{
//                   translateY: progress >= 0.9 ? "0" : "100%",
//                 }}
//                 transition={{ duration: 0.4, ease: "easeInOut" }}
//                 className="inline-block"
//               >
//                 obsidian?
//               </motion.span>
//             </p>

//             {/* text */}
//             <p className="mt-0 text-base leading-[1.4] opacity-70 sm:w-[95%] sm:text-lg md:text-xl lg:text-lg xl:mt-10 xl:text-xl mb-8">
//               {horseSectionText3.split(" ").map((word, i) => (
//                 <span key={i} className="inline-block overflow-y-hidden">
//                   <motion.span
//                     className="inline-block whitespace-pre"
//                     animate={{
//                       translateY:
//                         progress >= 0.9  ? "0" : "100%",
//                     }}
//                     transition={{ duration: 0.4, ease: "easeInOut" }}
//                   >
//                     {word}{" "}
//                   </motion.span>
//                 </span>
//               ))}
//             </p>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }
