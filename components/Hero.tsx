export default function Hero() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 items-center gap-16 px-12 py-24 max-w-7xl mx-auto">

      {/* LEFT TEXT */}
      <div>
        <div className="text-6xl font-bold leading-tight">
          Shivam Kumar
        </div>

        <p className="text-2xl text-gray-500 mt-3">
          Cloud Engineer & Ethical Hacker
        </p>

        <p className="mt-6 text-lg text-gray-600 max-w-lg">
          Building secure systems, cloud-native apps and ethical hacking labs for learning and enterprise.
        </p>

        <button className="mt-8 px-6 py-3 bg-black text-white rounded-xl text-lg shadow hover:scale-105 transition">
          View Projects ↓
        </button>

        <div className="flex space-x-4 mt-8">
          <a className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center">🐱‍💻</a>
          <a className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center">💼</a>
          <a className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center">📧</a>
        </div>
      </div>

      {/* RIGHT IMAGE */}
      <div className="flex justify-center md:justify-end">
        <div className="rounded-3xl shadow-xl p-2 bg-white">
          <img
            src="shivam.jpg"
            alt="Shivam"
            className="w-[380px] h-[380px] object-cover rounded-2xl"
          />
        </div>
      </div>

    </section>
  );
}
