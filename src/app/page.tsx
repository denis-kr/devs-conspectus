export default function Home() {
  //TODO understand all of the css and html used here
  //TODO make sure this page looks good on mobile

  return (
    <div className="mx-auto max-w-2xl">
      <div className="hidden sm:mb-8 sm:flex sm:justify-center">
        <div className="relative rounded-full px-3 py-1 text-sm/6 ring-1 ring-white/10 hover:ring-white/20">
          Announcing our next round of funding.{" "}
          {/* TODO prob will ask here to report issue in github I guess */}
          <a href="#" className="font-semibold text-heading">
            <span aria-hidden="true" className="absolute inset-0" />
            Read more <span aria-hidden="true">&rarr;</span>
          </a>
        </div>
      </div>
      <div className="text-center">
        <h1 className="text-5xl font-sans font-semibold tracking-tight text-balance text-heading sm:text-7xl">
          Conspectus for Software Engineers
        </h1>
        <p className="mt-8 text-lg font-medium text-pretty sm:text-xl/8">
          A collection of blogs about web development. These blogs can be used
          to refresh your knowledge, understand key concepts, prepare for
          interviews, and assist with daily coding tasks.
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          {/* //TODO change from a tag to Link */}
          <a
            href="#"
            className="rounded-md bg-[#219ebc] text-white px-3.5 py-2.5 text-sm font-semibold shadow-xs hover:bg-[#219ebc] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
          >
            View Blogs
          </a>
        </div>
      </div>
    </div>
  );
}
