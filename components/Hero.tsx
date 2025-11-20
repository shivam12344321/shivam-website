export default function Hero() {
return (
<section className="grid grid-cols-1 md:grid-cols-2 items-center gap-10 px-12 py-16">
<div>
<h1 className="text-5xl font-extrabold">Shivam Kumar</h1>
<p className="text-xl text-gray-600 mt-2">Cloud Engineer • Ethical Hacker • Full‑Stack Dev</p>
<p className="mt-6 text-lg max-w-xl text-gray-700">
I build secure systems, cloud-native apps and ethical hacking labs for learning and enterprise.
</p>
<div className="mt-6">
<a href="#projects" className="inline-block px-5 py-3 bg-black text-white rounded-lg">View Projects ↓</a>
</div>
</div>


<div className="flex justify-center md:justify-end">
<div className="w-80 h-80 rounded-2xl shadow-2xl overflow-hidden">
<img src="/mnt/data/5f28ae9b-065a-4679-a958-c5ce14a3ed36.png" alt="Shivam" className="w-full h-full object-cover" />
</div>
</div>
</section>
);
}