export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Got Questions? Let's Chat!
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're here to help you with any questions about our courses or programs
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-blue-600 mx-auto mt-6 rounded-full"></div>
        </div>

        {/* Contact Form */}
        <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100">
          <div className="p-8">
            <form className="space-y-6">
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Enter your name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Enter your email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
                    required
                  />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  placeholder="How can we help you?"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
                  required
                ></textarea>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-orange-500 to-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:from-orange-600 hover:to-blue-700 transition-all shadow-md"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
          
          <div className="h-1 bg-gradient-to-r from-orange-500 to-blue-600"></div>
        </div>

        {/* Contact Options - Larger Boxes */}
        <div className="max-w-4xl mx-auto mt-12 grid grid-cols-1 gap-8 sm:grid-cols-3">
          {/* Phone Option */}
          <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 text-center flex flex-col items-center h-full transition-transform hover:scale-[1.02]">
            <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-5">
              <svg className="w-8 h-8 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Call Us</h3>
            {/* <p className="text-gray-600 text-lg">+91 7036667776</p> */}
          </div>

          {/* Email Option - Now with proper text wrapping */}
          <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 text-center flex flex-col items-center h-full transition-transform hover:scale-[1.02]">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-5">
              <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Email Us</h3>
            <p className="text-gray-600 text-lg break-words px-2">dileep@examtrakker.com</p>
          </div>

          {/* Live Chat Option */}
          <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 text-center flex flex-col items-center h-full transition-transform hover:scale-[1.02]">
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-5">
              <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Live Chat</h3>
            <p className="text-gray-600 text-lg">Available 24/7</p>
          </div>
        </div>
      </div>
    </section>
  );
}