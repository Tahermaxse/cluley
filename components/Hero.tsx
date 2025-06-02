import React from "react";

const Hero = () => {
  return (
    <div className="relative py-32 sm:py-48 lg:py-60 select-none bg-gradient-to-t from-blue-100 to-blue-200">
      <div className="hidden lg:block">
        <div className="absolute inset-0 overflow-hidden contain-paint">
          <div className="absolute inset-[0.5rem] rounded-[12rem] bg-white/2 shadow-[0_0_40px_rgba(173,216,255,0.5)] blur-[4px]" />
          <div className="absolute inset-[3rem] rounded-[12rem] bg-white/2  shadow-[0_0_30px_rgba(173,216,255,0.4)] blur-[3px]" />
          <div className="absolute inset-[6rem] rounded-[12rem] bg-white/2 shadow-[0_0_20px_rgba(173,216,255,0.3)] blur-[2px]" />
          <div className="absolute inset-[10rem] rounded-[8rem] bg-white/2 shadow-[inset_0_0_30px_rgba(255,255,255,0.4)] blur-[1px]" />
        </div>
      </div>
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-1/2 transform -translate-y-1/2 overflow-hidden blur-3xl"
      >
        <div
          className="relative left-1/2 aspect-[1155/678] w-96 -translate-x-1/2 bg-gradient-to-tr from-blue-500 to-blue-600 opacity-30 sm:w-[36rem] md:w-[72rem]"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        />
      </div>
      <div className="relative text-center z-[1] mx-auto max-w-3xl lg:pb-16">
        <h1 className="text-4xl font-medium tracking-tight text-balance text-zinc-900 sm:text-7xl">
          Everything You Need. Before You Ask.
        </h1>
        <p className="mx-auto max-w-lg mt-5 text-lg/6 lg:text-xl/6 font-medium text-balance text-zinc-500">
          Cluely is an undetectable AI that sees your screen, hears your calls,
          and feeds you answers — in real time.
        </p>
        <div className="grid items-center justify-center gap-y-2.5 mt-10">
          <a
            className="flex group items-center gap-x-2 rounded-full bg-black px-7.5 py-3 text-md font-semibold text-white shadow-xs outline-none hover:-translate-y-0.5 transition hover:scale-[100.5%] hover:bg-black/90"
            href="https://github.com/cluely/releases/releases/latest/download/cluely.dmg"
          >
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth={0}
              viewBox="0 0 24 24"
              className="mb-0.5 group-hover:text-sky-50 transition"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M11.6734 7.22198C10.7974 7.22198 9.44138 6.22598 8.01338 6.26198C6.12938 6.28598 4.40138 7.35397 3.42938 9.04597C1.47338 12.442 2.92538 17.458 4.83338 20.218C5.76938 21.562 6.87338 23.074 8.33738 23.026C9.74138 22.966 10.2694 22.114 11.9734 22.114C13.6654 22.114 14.1454 23.026 15.6334 22.99C17.1454 22.966 18.1054 21.622 19.0294 20.266C20.0974 18.706 20.5414 17.194 20.5654 17.11C20.5294 17.098 17.6254 15.982 17.5894 12.622C17.5654 9.81397 19.8814 8.46998 19.9894 8.40998C18.6694 6.47798 16.6414 6.26198 15.9334 6.21398C14.0854 6.06998 12.5374 7.22198 11.6734 7.22198ZM14.7934 4.38998C15.5734 3.45398 16.0894 2.14598 15.9454 0.849976C14.8294 0.897976 13.4854 1.59398 12.6814 2.52998C11.9614 3.35798 11.3374 4.68998 11.5054 5.96198C12.7414 6.05798 14.0134 5.32598 14.7934 4.38998Z" />
            </svg>
            <span className="group-hover:text-sky-50 transition">
              Download for Mac
            </span>
          </a>
          <a
            className="text-sm/6 font-semibold text-zinc-900/60 hover:text-blue-600/80 underline"
            href="https://github.com/cluely/releases/releases/latest/download/cluely-setup.exe"
          >
            Download for windows
          </a>
        </div>
      </div>
      <div className="hidden z-[11] lg:block absolute -bottom-[11.5rem] left-1/2 transform -translate-x-1/2 z-[1] max-w-2xl pointer-events-none">
        <img
          alt="cluely-ui"
          className=""
          src="https://cluely.com/_next/static/media/frame.e956ee74.webp"
        />
      </div>
    </div>
  );
};

export default Hero;
