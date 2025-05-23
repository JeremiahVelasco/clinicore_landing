export default function Hero() {
    return (
      <div className="bg-[#071b1e]">
        <div className="relative isolate px-6 pt-14 lg:px-8">
          <div className="mx-auto max-w-3xl py-32 sm:py-48 lg:py-56">
            <div className="hidden sm:mb-8 sm:flex sm:justify-center">
              <div className="inline-block px-4 py-1 rounded-full bg-teal-800/30 backdrop-blur-sm border border-[#2F9BAE]">
                <p className="text-sm font-medium text-teal-300">Exciting things await</p>
              </div>
            </div>
            <div className="text-center">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight bg-gradient-to-r from-white to-[#2F9BAE] bg-clip-text text-transparent">
                Run Your Practice Effortlessly with AI on Your Side
              </h1>
              <p className="mt-8 text-lg font-medium text-pretty text-gray-200 sm:text-xl/8">
              Harness the power of AI in an affordable, all-in-one system designed to streamline, automate, and elevate your entire workflow.
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <a
                  href="#"
                  className="rounded-md bg-[#2F9BAE] px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-[#39b4ca] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Get started
                </a>
                <a href="#" className="text-sm/6 font-semibold text-white">
                  Learn more <span aria-hidden="true">→</span>
                </a>
              </div>
            </div>
          </div>
          <div
            aria-hidden="true"
            className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
          >
            <div className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#80D0C7] to-[#2F9BAE] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
                style={{clipPath: 'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)'}}
            />
          </div>
        </div>
      </div>
    )
  }