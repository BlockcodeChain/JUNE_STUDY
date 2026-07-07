import { Element } from "react-scroll";
import { motion } from "motion/react";

const Home = () => {
  return (
    <Element name="home">
      <section className="relative min-h-screen overflow-hidden bg-[#091127]">

        {/* Glow */}
        <div className="absolute -left-32 top-20 h-96 w-96 rounded-full bg-cyan-500/20 blur-[150px]" />

        <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-blue-600/20 blur-[150px]" />

        <div className="mx-auto flex min-h-screen max-w-7xl items-center justify-between px-10">

          {/* LEFT */}

          <motion.div

            initial={{
              opacity:0,
              x:-100
            }}

            animate={{
              opacity:1,
              x:0
            }}

            transition={{
              duration:1
            }}

            className="w-1/2"
          >

            <p className="mb-5 text-xl tracking-[8px] text-cyan-400">
              HELLO 👋
            </p>

            <h1 className="text-7xl font-black leading-tight text-white">

              I'M

              <br />

              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500 bg-clip-text text-transparent">

                ISHI

              </span>

            </h1>

            <h2 className="mt-6 text-3xl font-semibold text-gray-300">

              Frontend Developer

            </h2>

            <p className="mt-8 max-w-xl text-lg leading-8 text-gray-400">

              I build beautiful, responsive and interactive web applications
              using React, Tailwind CSS and modern frontend technologies.

            </p>

            <div className="mt-10 flex gap-5">

              <motion.button

                whileHover={{
                  scale:1.08
                }}

                whileTap={{
                  scale:.95
                }}

                className="rounded-xl bg-cyan-500 px-8 py-4 font-semibold text-white shadow-[0_0_30px_#22d3ee]"
              >

                Hire Me

              </motion.button>

              <motion.button

                whileHover={{
                  scale:1.08
                }}

                whileTap={{
                  scale:.95
                }}

                className="rounded-xl border border-cyan-500 px-8 py-4 font-semibold text-cyan-400"

              >

                Download CV

              </motion.button>

            </div>

          </motion.div>

          {/* RIGHT */}

          <motion.div

            initial={{
              opacity:0,
              x:100
            }}

            animate={{
              opacity:1,
              x:0
            }}

            transition={{
              duration:1.2
            }}

            className="flex w-1/2 justify-center"

          >

            {/* Placeholder */}
            <div className="flex h-[450px] w-[450px] items-center justify-center rounded-full border border-cyan-500/30 bg-cyan-500/5 shadow-[0_0_80px_rgba(34,211,238,.3)]">

              <motion.div

                animate={{
                  scale:[1,1.1,1]
                }}

                transition={{
                  duration:2,
                  repeat:Infinity
                }}

                className="flex h-44 w-44 items-center justify-center rounded-full bg-gradient-to-r from-cyan-400 to-blue-600 text-5xl font-black text-white shadow-[0_0_60px_#22d3ee]"

              >

                MERN

              </motion.div>

            </div>

          </motion.div>

        </div>

      </section>
    </Element>
  );
};

export default Home;