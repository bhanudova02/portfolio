import About from "@/components/About";
import Experience from "@/components/Experience";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";

export default function Home() {
  return (
    <main>
      <Hero heading='Mr.Bhanu' message="" />
      <About />
      <Experience />
      <Projects />
    </main>
  );
}
