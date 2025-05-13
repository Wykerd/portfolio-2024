export default function Home() {
  return (
    <div className="px-8 py-24 font-mono dark:text-white">
      <main className="max-w-2xl mx-auto flex flex-col gap-16">
        <section className="flex flex-col gap-4 sm:gap-6">
          <h1 className="font-bold text-3xl sm:text-5xl md:text-6xl flex flex-col gap-1">
            <span>Hey there,</span> <span>{"I'm "}<em>Daniel Wykerd.</em></span>
          </h1>
          <h2 className="text-base sm:text-lg">
            An engineer with a deep seated passion for all things computing. My passion drives me to constantly explore by building, and my projects are born directly from the ideas I can’t stop thinking about.
          </h2>
        </section>
        <section className="flex flex-col">
          <h2 className="font-bold text-xl sm:text-3xl">
            {"Projects I've Worked On"}
          </h2>
          <blockquote className="italic mb-6 mt-1 sm:text-base text-sm">
            {"\"It's fun to reinvent the wheel\""}
          </blockquote>
          <ul className="flex flex-col gap-2 sm:text-base text-sm">
            <li>
              <a href="https://onestopdomestic.co.za">
                One Stop Domestic
              </a>: {"A platform that connects domestic workers with potential employers. I'm the sole developer and designer on this project."}
            </li>
            <li>
              <a href="https://react-av.vercel.app">
                react-av
              </a>: Fully-featured, headless, hooks-based, and declarative media player framework for React.
            </li>
            <li>
              <a href="https://github.com/LuanRT/YouTube.js">
                YouTube.js
              </a>: {"A wrapper around YouTube's internal API. I've made numerous contributions to this project."}
            </li>
            <li className="text-gray-500 dark:text-gray-400">
              {"During the course of my studies, I've worked on a number of projects that involve the design and implementation of both hardware and software systems."}
            </li>
            <li className="text-gray-500 dark:text-gray-400">
              Feel free to visit my <a href="https://github.com/Wykerd">GitHub</a> to see more of my open source works.
            </li>
          </ul>
        </section>

        <section className="flex flex-col">
          <h2 className="font-bold text-xl sm:text-3xl">
            {"What I Enjoy Working With"}
          </h2>
          <blockquote className="italic mb-6 mt-1 sm:text-base text-sm">
            {"\"I like to think that I can work with anything, but here are a few technologies that I've enjoyed working with.\""}
          </blockquote>
          <p className="font-bold sm:text-lg text-base mb-0.5">
            Languages
          </p>
          <ul className="flex flex-row gap-x-8 flex-wrap mb-6 sm:text-base text-sm italic">
            <li>
              JavaScript/TypeScript
            </li>
            <li>
              C/C++
            </li>
            <li>
              Delphi/Pascal
            </li>
            <li>
              Python
            </li>
          </ul>
          <p className="font-bold sm:text-lg mb-0.5 text-base">
            Platforms and Frameworks
          </p>
          <ul className="flex flex-row gap-x-8 flex-wrap sm:text-base text-sm italic">
            <li>
              STM32
            </li>
            <li>
              Arduino/ESP32
            </li>
            <li>
              NGSpice
            </li>
            <li>
              PostgreSQL
            </li>
            <li>
              LangChain
            </li>
            <li>
              React
            </li>
            <li>
              Expo
            </li>
            <li>
              Next
            </li>
          </ul>
        </section>
      </main>
    </div>
  );
}
