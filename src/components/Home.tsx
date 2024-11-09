// pages/index.tsx
import Link from 'next/link';

const Home = () => {
  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <section className="flex items-center justify-center h-screen bg-blue-600 text-white text-center p-8">
        <div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Welcome to My Website</h1>
          <p className="text-lg md:text-xl mb-6">
            We provide top-notch digital solutions to elevate your business.
          </p>
          <Link href="/contact" className="bg-teal-500 hover:bg-teal-400 text-white font-semibold px-6 py-3 rounded transition">
            Get in Touch
          </Link>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 bg-gray-100 text-gray-800 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">About Us</h2>
          <p className="text-lg">
            Our team is dedicated to delivering innovative and effective digital solutions that meet our clients' unique needs. 
            We specialize in web development, digital marketing, and more to help you achieve your business goals.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 bg-white text-gray-800 text-center">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">Our Services</h2>
          <p className="text-lg mb-8">
            We offer a wide range of digital services to help you grow your business.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-100 p-8 rounded shadow-md">
              <h3 className="text-xl font-semibold mb-3">Web Development</h3>
              <p>We create responsive and modern websites to establish your online presence.</p>
            </div>
            <div className="bg-gray-100 p-8 rounded shadow-md">
              <h3 className="text-xl font-semibold mb-3">Digital Marketing</h3>
              <p>Our digital marketing services help you reach a wider audience effectively.</p>
            </div>
            <div className="bg-gray-100 p-8 rounded shadow-md">
              <h3 className="text-xl font-semibold mb-3">SEO Optimization</h3>
              <p>Boost your websites visibility on search engines with our SEO expertise.</p>
            </div>
          </div>
          
        </div>
        <div className="mt-10">
        <Link href="/services" className="bg-teal-500 hover:bg-teal-400 text-white font-semibold px-6 py-3 rounded transition">
            Details
          </Link>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-gray-100 text-gray-800 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
          <p className="text-lg mb-8">
            Have any questions? We'd love to hear from you. Get in touch with us today.
          </p>
          <Link href="/contact" className="bg-teal-500 hover:bg-teal-400 text-white font-semibold px-6 py-3 rounded transition">
            Contact Us
          </Link>
        </div>
      </section>
    </div>
  )
}

export default Home
