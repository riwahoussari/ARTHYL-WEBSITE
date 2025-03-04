export default function PageTitle({ children }: { children: string }) {
  return (
    <div className="flex h-80 items-center justify-center sm:h-[400px] relative z-0 bg-beige">
      {/* curve for design */}
      <div className="absolute top-0 left-0 z-0 h-160 w-full min-w-[600px] -translate-1/2 rounded-[100%] border-1 lg:aspect-3/2 lg:[height:unset] lg:max-h-[1200px] lg:min-h-[800px]" />
      {/* page title */}
      <h1 className="lg:text-9x text-5xl font-semibold text-white mix-blend-difference sm:text-8xl relative z-1">
        {children.toUpperCase()}
      </h1>
    </div>
  );
}
