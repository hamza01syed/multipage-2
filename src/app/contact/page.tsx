// pages/contact.tsx
const Contact = () => {
    return (
      <div className="bg-gray-100 min-h-screen p-8">
        <div className="max-w-4xl mx-auto ">
          <h1 className="text-4xl font-bold text-center text-blue-600 mb-4">Contact Us</h1>
          <p className="text-lg text-gray-700 mb-8 text-center">
            Have questions or want to discuss a project? Fill out the form below, and we will get back to you soon.
          </p>
          <form className="bg-white p-8 rounded shadow-md max-w-lg mx-auto">
            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">Name</label>
              <input type="text" id="name" className="w-full p-2 border border-gray-300 rounded" placeholder="Your Name" />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">Email</label>
              <input type="email" id="email" className="w-full p-2 border border-gray-300 rounded" placeholder="Your Email" />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block text-gray-700 font-semibold mb-2">Message</label>
              <textarea id="message" className="w-full p-2 border border-gray-300 rounded" placeholder="Your Message" rows={4}></textarea>
            </div>
            <button type="submit" className="bg-teal-500 hover:bg-teal-400 text-white font-semibold px-6 py-3 rounded transition">
              Send Message
            </button>
          </form>
        </div>
      </div>
    )
  }
  
  export default Contact
  