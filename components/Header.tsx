export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white flex items-center justify-between px-8 py-6 shadow-sm">
      <div className="text-2xl font-bold">Shivam kumar</div>

      <nav className="space-x-6">
        <a href="#about" className="hover:underline">About</a>
        <a href="#projects" className="hover:underline">Projects</a>
        <a href="#contact" className="hover:underline">Contact</a>
      </nav>
    </header>
  );
}
