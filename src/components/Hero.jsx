const Hero = () => {
  return (
    <section className="bg-gray-50">
  <div
    className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center"
  >
    <div className="mx-auto max-w-xl text-center">
      <h1 className=" font-custom text-3xl font-bold sm:text-5xl">
        PATHWAY TO
        <strong className="font-custom font-extrabold text-[#fbe20c] sm:block ">
          LEARN
        </strong>
        DEVELOPMENT
      </h1>

      <p className="font-custom mt-4 sm:text-xl/relaxed">
        The only <strong>Development</strong> sheet that will be required for starting your
        development journey
      </p>

      <div className="mt-8 flex flex-wrap justify-center gap-4">
        <a
          className="block w-full bg-[#fbe20c] px-12 py-3 text-sm font-medium text-[#2a2a2a] border-2 border-black shadow focus:outline-none focus:ring sm:w-auto"
          href="/get-started"
        >
          GET NOTES
        </a>

        <a
          className="block w-full rounded px-12 py-3 text-sm font-medium  focus:outline-none focus:ring sm:w-auto"
          href="/about"
        >
         🚀 LEARN MORE
        </a>
      </div>
    </div>
  </div>
</section>
  )
}

export default Hero