import About from "@/components/About";
import Contact from "@/components/Contact";
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
      <Contact/>
    </main>
  );
}
