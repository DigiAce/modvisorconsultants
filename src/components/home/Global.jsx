const Global = () => {
  return (
    <div className="relative flex flex-col items-center mx-auto lg:flex-row-reverse lg:max-w-5xl lg:mt-12 xl:max-w-6xl mt-16 z-10">
      {/* Image Column */}
      <div className="w-full h-full lg:w-1/2 lg:h-auto">
        <img
          className="h-full w-full object-cover"
          src="/img/globe-bg.png"
          alt="Our Global Footprint"
        />
      </div>

      {/* Text Column */}
      <div className="max-w-lg bg-white md:max-w-2xl md:z-10 md:shadow-lg md:absolute md:top-0 md:mt-48 lg:w-3/5 lg:left-0 lg:mt-20 lg:ml-20 xl:mt-24 xl:ml-12">
        {/* Text Wrapper */}
        <div className="flex flex-col p-12 md:px-16">
          <h2 className="text-2xl font-medium uppercase text-textColor lg:text-4xl">
            Our Global Footprint
          </h2>
          <p className="mt-4">
            Our team brings expertise from around the world — serving clients in
            the United Kingdom, Australia, Singapore, India, the United States,
            the Middle East, and South Africa. This diverse experience allows us
            to adapt financial modelling solutions to specific market needs,
            helping businesses succeed no matter where they are located. With
            global insights and local expertise, we ensure your financial
            strategies are impactful and relevant worldwide.
          </p>
          <p className="mt-4">
            So, whether you&apos;re looking for a custom model build, an
            in-depth model review, or specialized training, we’ve got you
            covered. At ModVisor, you&apos;re always ahead of the game,
            delivering clear, precise models and insights that empower you to
            make confident, informed decisions.
          </p>
          {/* Button Container */}
        </div>
        {/* Close Text Wrapper */}
      </div>
    </div>
  );
};

export default Global;
