import Header from "../components/Header";
import Hero from "../components/Hero";
import About from "../components/About";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import "./globals.css";


export default function Page() {
return (
<main>
<Header />
<Hero />
<About />
<Projects />
<Contact />
</main>
);
}