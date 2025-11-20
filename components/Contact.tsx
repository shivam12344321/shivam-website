export default function Contact() {
return (
<section id="contact" className="px-12 py-20">
<h2 className="text-3xl font-bold text-center">Get in Touch</h2>
<form className="max-w-3xl mx-auto mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
<input placeholder="Your name" className="border p-3 rounded" />
<input placeholder="Your email" className="border p-3 rounded" />
<textarea placeholder="Message" rows={5} className="border p-3 rounded md:col-span-2" />
<button className="md:col-span-2 px-6 py-3 bg-black text-white rounded">Send Message</button>
</form>
</section>
);
}