const projects = [
{ title: "FakeBank - MERN Lab", desc: "Dummy banking app for ethical hacking labs." },
{ title: "Cloud Resume (AWS)", desc: "Resume hosted using S3 + CloudFront with CI/CD." },
{ title: "Raspberry Pi Surveillance", desc: "IoT camera + motion detection." },
];


export default function Projects() {
return (
<section id="projects" className="px-12 py-20 bg-gray-50">
<h2 className="text-3xl font-bold text-center mb-6">Projects</h2>
<div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
{projects.map((p) => (
<article key={p.title} className="bg-white p-6 rounded-xl shadow">
<h3 className="text-xl font-semibold">{p.title}</h3>
<p className="mt-3 text-gray-600">{p.desc}</p>
</article>
))}
</div>
</section>
);
}