export function Contact() {
  return (
    <section id="contact" className="w-full bg-[#14110F] text-white py-20 px-6">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-['Impact',_sans-serif] tracking-wide font-normal mb-8 text-center">Let's Build Together</h2>
        <p className="text-gray-400 text-center mb-10">
          Have a project in mind? Reach out and let's make it happen.
        </p>

        {/* L'attributo action e method fanno tutto il lavoro. Non serve onSubmit. */}
        <form action="https://formspree.io/f/xaqpajqe" method="POST" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2">Name</label>
              <input
                type="text"
                id="name"
                name="name" // Fondamentale per Formspree: definisce il nome del campo
                required
                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all font-sans"
                placeholder="Carlos Soliz"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">Email</label>
              <input
                type="email"
                id="email"
                name="email" // Fondamentale per Formspree
                required
                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all font-sans"
                placeholder="carlos@example.com"
              />
            </div>
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2">Message</label>
            <textarea
              id="message"
              name="message" // Fondamentale per Formspree
              required
              rows="5"
              className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all font-sans resize-none"
              placeholder="Tell me about your project..."
            ></textarea>
          </div>
          
          <button
            type="submit"
            className="w-full md:w-auto px-8 py-3 bg-white text-[#14110F] font-bold rounded-lg hover:bg-gray-200 transition-colors flex justify-center items-center"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}