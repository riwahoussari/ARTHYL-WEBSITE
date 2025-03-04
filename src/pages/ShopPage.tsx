import PageTitle from "../components/PageTitle";
import Button from "../components/Button";
import { SHOP_ITEMS, ShopItem } from "../utils/constants";
import useMousePosition from "../utils/useMousePosition";
import { motion, useMotionValueEvent, useScroll } from "motion/react";
import { useState } from "react";

const ODD_ITEMS = SHOP_ITEMS.map((item, i) => {
  if ((i + 1) % 2 === 1) return item;
}).filter((item) => item !== undefined);
const EVEN_ITEMS = SHOP_ITEMS.map((item, i) => {
  if ((i + 1) % 2 === 0) return item;
}).filter((item) => item !== undefined);

export default function ShopPage() {
  // const [layout, setLayout] = useState(2);

  return (
    <>
      {/* <button
        className="absolute top-20 left-10 z-2 rounded-full bg-black px-4 py-2 text-white hover:bg-white hover:text-black"
        onClick={() => setLayout((layout % 2) + 1)}
      >
        Switch Layout
      </button> */}
      {/* {layout === 1 && <Layout1 />}
      {layout === 2 && <Layout2 />} */}
      <Layout2 />
    </>
  );
}

function Layout2() {
  const { x, y } = useMousePosition();
  const { scrollY } = useScroll();
  const [scrollYValue, setScrollYValue] = useState(0);
  const [smImgSrc, setSmImgSrc] = useState<{
    src: string | undefined;
    hovering: boolean;
  }>({ src: undefined, hovering: false });

  useMotionValueEvent(scrollY, "change", () => {
    setScrollYValue(scrollY.get());
  });
  return (
    <>
      <PageTitle>Shop</PageTitle>

      {/* Cards Container */}

      <section className="side-padding flex flex-col items-stretch md:flex-row md:items-start md:justify-around md:gap-5">
        {/* column 1 */}
        <div>
          {ODD_ITEMS.map((item, i) => (
            <div
              key={i}
              className="mb-24 md:mb-0 md:h-[67.5vw] md:max-h-[1200px] md:min-h-[600px]"
            >
              <Card2
                imageSrcUrl={item.imageSrcUrl}
                secondImageSrcUrl={item.secondImageSrcUrl}
                title={item.title}
                remainingStock={item.remainingStock}
                totalStock={item.totalStock}
                setSmImgSrc={setSmImgSrc}
              />
            </div>
          ))}
        </div>

        {/* column 2 */}
        <div>
          <div className="md:h-[32vw] md:max-h-[70vh] md:w-1">
            {/* spacer */}
          </div>

          {EVEN_ITEMS.map((item, i) => (
            <div
              key={i}
              className="mb-24 md:mb-0 md:h-[67.5vw] md:max-h-[1200px] md:min-h-[600px]"
            >
              <Card2
                imageSrcUrl={item.imageSrcUrl}
                secondImageSrcUrl={item.secondImageSrcUrl}
                title={item.title}
                remainingStock={item.remainingStock}
                totalStock={item.totalStock}
                setSmImgSrc={setSmImgSrc}
              />
            </div>
          ))}
        </div>
      </section>

      {/* small image that follows cursor on hover */}
      <motion.div
        className={`absolute z-10 hidden aspect-square w-[10vw] min-w-[200px] origin-top-left translate-[24px] overflow-hidden rounded-md shadow-2xl shadow-black/50 lg:block`}
        animate={{
          top: (y | 0) + scrollYValue,
          left: x | 0,
          scale: smImgSrc.hovering ? 1 : 0,
        }}
        transition={{
          top: { type: "tween", ease: "backOut", duration: 0.5 },
          bottom: { type: "tween", ease: "backOut", duration: 0.5 },
          scale: { type: "tween", ease: "easeInOut", duration: 0.3 },
        }}
      >
        <img
          src={smImgSrc.src}
          className="aspect-square w-full object-cover object-center"
          alt=""
        />
      </motion.div>
    </>
  );
}

function Card2({
  title,
  totalStock,
  remainingStock,
  imageSrcUrl,
  secondImageSrcUrl,
  setSmImgSrc,
}: ShopItem & {
  setSmImgSrc: React.Dispatch<
    React.SetStateAction<{
      src: string | undefined;
      hovering: boolean;
    }>
  >;
}) {
  function onEnter() {
    setSmImgSrc({ src: secondImageSrcUrl, hovering: true });
  }
  function onLeave() {
    setSmImgSrc((prev) => ({ ...prev, hovering: false }));
  }
  return (
    <div className="group relative mx-auto w-full max-w-[400px] cursor-pointer space-y-3 md:mx-0 md:w-[45vw] md:max-w-[800px]">
      <div
        onMouseEnter={onEnter}
        onMouseLeave={onLeave}
        style={{ boxShadow: "0 0 20px #00000060" }}
        className="aspect-square w-full max-w-[400px] overflow-hidden rounded-xl bg-[conic-gradient(white_25%,theme(colors.gray.200)_25%_50%,white_50%_75%,theme(colors.gray.200)_75%)] bg-[size:50px_50px] md:w-[45vw] md:max-w-[800px]"
      >
        <img
          src={imageSrcUrl || undefined}
          alt={`Photo of ${title} artpiece.`}
          className="h-full w-full object-cover duration-200 ease-in-out group-hover:scale-110"
        />
      </div>

      <div className="flex flex-col items-start gap-2 xl:flex-row xl:items-end xl:justify-between xl:gap-6">
        <div>
          <p className="text-xl font-medium md:text-2xl lg:text-3xl">{title}</p>
          <p className="text-sm opacity-70 md:text-base lg:text-lg">
            {remainingStock}/{totalStock} Remaining
          </p>
        </div>
        <div className="shrink-0 xl:w-[272px]">
          <Button arrow={true} size="lg">
            Artify Your Space
          </Button>
        </div>
      </div>
    </div>
  );
}

// function Layout1() {
//   return (
//     <>
//       <PageTitle>Shop</PageTitle>
//       <section className="mx-auto flex min-h-dvh flex-col flex-wrap items-center gap-[100px] md:max-w-[1440px] md:flex-row md:items-start md:justify-center">
//         {SHOP_ITEMS.map((item, i) => (
//           <Card1
//             key={i}
//             imageSrcUrl={item.imageSrcUrl}
//             title={item.title}
//             remainingStock={item.remainingStock}
//             totalStock={item.totalStock}
//             secondImageSrcUrl=""
//           />
//         ))}
//       </section>
//     </>
//   );
// }

// function Card1({ title, totalStock, remainingStock, imageSrcUrl }: ShopItem) {
//   return (
//     <div className="group w-full max-w-[360px] cursor-pointer space-y-3 md:max-w-[400px]">
//       <div
//         style={{ boxShadow: "0 0 20px #00000060" }}
//         className="aspect-square w-full max-w-[360px] overflow-hidden rounded-xl bg-[conic-gradient(white_25%,theme(colors.gray.200)_25%_50%,white_50%_75%,theme(colors.gray.200)_75%)] bg-[size:50px_50px] md:max-w-[400px]"
//       >
//         <img
//           src={imageSrcUrl}
//           alt={`Photo of ${title} artpiece.`}
//           className="h-full w-full object-cover duration-200 ease-in-out group-hover:scale-110"
//         />
//       </div>

//       <div>
//         <p className="text-2xl font-medium md:text-3xl">{title}</p>
//         <p className="text-base opacity-70 md:text-lg">
//           {remainingStock}/{totalStock} Remaining
//         </p>
//       </div>
//       <Button arrow={true} size="lg">
//         Artify Your Space
//       </Button>
//     </div>
//   );
// }
