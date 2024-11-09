// pages/services.tsx
const Services = () => {
    return (
      <div className="bg-white p-8">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl font-bold text-blue-600 mb-4">Our Services</h1>
          <p className="text-lg text-gray-700 mb-8">
            We offer a range of digital services to support your business growth and success.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-100 p-8 rounded shadow-md">
              <h3 className="text-xl font-semibold mb-3">Web Development</h3>
              <p>Creating responsive and engaging websites to establish your online presence effectively.</p>
            </div>
            <div className="bg-gray-100 p-8 rounded shadow-md">
              <h3 className="text-xl font-semibold mb-3">Digital Marketing</h3>
              <p>Expanding your reach through targeted digital marketing strategies that connect with your audience.</p>
            </div>
            <div className="bg-gray-100 p-8 rounded shadow-md">
              <h3 className="text-xl font-semibold mb-3">SEO Optimization</h3>
              <p>Boosting your websites search engine ranking with comprehensive SEO services.</p>
            </div>
            <div className="bg-gray-100 p-8 rounded shadow-md">
              <h3 className="text-xl font-semibold mb-3">Content Creation</h3>
              <p>Crafting high-quality content that resonates with your target audience.</p>
            </div>
            <div className="bg-gray-100 p-8 rounded shadow-md">
              <h3 className="text-xl font-semibold mb-3">Social Media Management</h3>
              <p>Building and managing your brands presence on popular social media platforms.</p>
            </div>
            <div className="bg-gray-100 p-8 rounded shadow-md">
              <h3 className="text-xl font-semibold mb-3">Consulting</h3>
              <p>Offering professional guidance and strategies for digital transformation.</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
  
  export default Services
  