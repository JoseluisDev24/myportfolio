import SplitText from "@/components/text/SplitText";

export default function About() {

     const handleAnimationComplete = () => {
          console.log("All letters have animated!");
        };

    return (
      <div className="relative text-center">
        <div
          aria-hidden
          className="absolute -left-20 top-10 h-40 w-40 rounded-full bg-blue-500/10 blur-3xl md:-left-4 md:top-5 md:h-60 md:w-60 md:bg-blue-500/4"
        />
        <SplitText
          text="About Me"
          className="font-heading text-3xl sm:text-4xl md:text-5xl tracking-tight leading-tight text-gray-100 text-center drop-shadow-[0_2px_10px_rgba(59,130,246,0.30)] mt-16 mb-6"
          delay={110}
          duration={3}
          ease="power3.out"
          splitType="lines"
          from={{ opacity: 0, y: 40 }}
          to={{ opacity: 1, y: 0 }}
          threshold={0.1}
          rootMargin="-100px"
          textAlign="center"
          onLetterAnimationComplete={handleAnimationComplete}
        />
        <p className="mx-auto max-w-3xl rounded-lg border border-white/10 bg-white/5 p-6 text-gray-200 shadow-2xl backdrop-blur-md">
          Full-stack developer from Uruguay specializing in building web
          applications with JavaScript, React, and Next.js. I&apos;ve built
          everything from functional e-commerce sites to weather apps and task
          management tools. I&apos;m passionate about writing clean code, creating
          intuitive interfaces, and optimizing performance. Every project is an
          opportunity to learn and add real value. Ready to contribute to remote
          teams or freelance projects.
        </p>
      </div>
    );
    }