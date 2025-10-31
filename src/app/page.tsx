"use client";

import { PulsatingPrimaryButton } from "@/lib/components/Button";
import DottedScreen from "@/lib/components/DottedScreen";
import HeadShot from "@/lib/screens/home/HeadShot";
import ProjectCards from "@/lib/screens/home/ProjectCards";
import Socials from "@/lib/screens/home/Socials";
import Link from "next/link";

export default function Home() {
  return (
    <DottedScreen>
      <div className="flex flex-col my-12">
        <div className="flex flex-col gap-3 max-w-3xl mx-auto text-center">
          <h1 className="font-sans text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-b from-foreground to-foreground/60">
            Jeremiah Joseph
          </h1>
          <p className="font-mono text-sm sm:text-base text-foreground/70">
            Software Engineer & Tech Leader
          </p>
        </div>
        <div className="flex flex-col gap-8 my-12 justify-center">
          <Socials />
          <HeadShot />
          <div className="mx-auto">
            <Link href="/career">
              <PulsatingPrimaryButton showIcon>
                See Career Highlights
              </PulsatingPrimaryButton>
            </Link>
          </div>
        </div>
      </div>
      <div>
        <ProjectCards />
      </div>

      {/* <motion.ul
        animate={{ x: 100 }}
        transition={{ repeat: Infinity, duration: 5 }}
        className="w-48 h-48 bg-teal-500 "
      />

      <motion.button
        whileInView={{
          scale: [1, 1.5, 1],
          transition: { repeat: Infinity, duration: 5 },
        }}
        // transition={{ repeat: Infinity, duration: 5 }}
        className="w-48 h-48 bg-teal-500 "
      >
        preess mee
      </motion.button>
      <motion.div
        whileInView={{
          scale: [1, 1.5, 1],
          // transition: {
          //   type: "spring",
          //   duration: 2,
          //   repeat: Infinity,
          //   repeatDelay: 3,
          // },
        }}
        transition={{
          type: "spring",
          duration: 5,
          repeat: Infinity,
          repeatDelay: 3,
        }}
      >
        <PrimaryButtonLink>kjsdk</PrimaryButtonLink>
      </motion.div>

      <motion.button
        whileInView={{
          scale: [1, 1.5, 1],
          transition: { repeat: Infinity, duration: 5 },
        }}
        // whileInView={{
        //   scale: [1, 1.3, 1],
        //   transition: {
        //     type: "spring",
        //     duration: 2,
        //     // stiffness: 30,
        //     // damping: 1,
        //     repeat: Infinity,
        //     // repeatType: "reverse",
        //   },
        // }}
        // whileTap={{
        //   opacity: [1, 0.6, 0.8, 1],
        //   transition: { repeat: Infinity, duration: 5 },
        // }}
        // className={`group bg-black dark:bg-white text-white dark:text-black px-4 py-3 rounded-md flex align-baseline gap-x-2 ${extraClass}`}
      >
        dgsfhrdthd
      </motion.button> */}
    </DottedScreen>
  );
}

// export default function Home() {
//   return (
//     <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
//       <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
//         <Image
//           className="dark:invert"
//           src="/next.svg"
//           alt="Next.js logo"
//           width={180}
//           height={38}
//           priority
//         />
//         <ol className="list-inside list-decimal text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
//           <li className="mb-2">
//             Get started by editing{" "}
//             <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-semibold">
//               src/app/page.tsx
//             </code>
//             .
//           </li>
//           <li>Save and see your changes instantly.</li>
//         </ol>

//         <div className="flex gap-4 items-center flex-col sm:flex-row">
//           <a
//             className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
//             href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             <Image
//               className="dark:invert"
//               src="/vercel.svg"
//               alt="Vercel logomark"
//               width={20}
//               height={20}
//             />
//             Deploy now
//           </a>
//           <a
//             className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
//             href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Read our docs
//           </a>
//         </div>
//       </main>
//       <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
//         <a
//           className="flex items-center gap-2 hover:underline hover:underline-offset-4"
//           href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <Image
//             aria-hidden
//             src="/file.svg"
//             alt="File icon"
//             width={16}
//             height={16}
//           />
//           Learn
//         </a>
//         <a
//           className="flex items-center gap-2 hover:underline hover:underline-offset-4"
//           href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <Image
//             aria-hidden
//             src="/window.svg"
//             alt="Window icon"
//             width={16}
//             height={16}
//           />
//           Examples
//         </a>
//         <a
//           className="flex items-center gap-2 hover:underline hover:underline-offset-4"
//           href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <Image
//             aria-hidden
//             src="/globe.svg"
//             alt="Globe icon"
//             width={16}
//             height={16}
//           />
//           Go to nextjs.org →
//         </a>
//       </footer>
//     </div>
//   );
// }
