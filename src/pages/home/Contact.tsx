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
            <p className="text-gray-600 text-lg">+91 7093187776</p>
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
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-5">
          <svg
            className="w-8 h-8 text-green-600"
            viewBox="0 0 32 32"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M16.003 3C9.375 3 3.997 8.38 3.997 15.003a11.9 11.9 0 001.637 6.027L3 29l8.148-2.602a11.96 11.96 0 004.855 1.07h.003c6.628 0 12.006-5.38 12.006-12.004C28.01 8.38 22.63 3 16.003 3zm0 21.82a9.95 9.95 0 01-5.038-1.377l-.36-.21-4.84 1.547 1.562-4.71-.23-.375a9.945 9.945 0 01-1.542-5.193c0-5.516 4.486-10.002 10.01-10.002 5.525 0 10.01 4.486 10.01 10.002s-4.485 10.018-10.01 10.018zm5.547-7.56c-.305-.15-1.805-.89-2.086-.99-.28-.1-.485-.15-.69.15s-.79.99-.972 1.195c-.18.205-.36.23-.665.08-.305-.15-1.29-.475-2.457-1.513-.906-.805-1.52-1.795-1.7-2.1-.18-.305-.02-.47.135-.62.14-.14.305-.36.457-.54.15-.18.2-.305.305-.51.1-.205.05-.38-.025-.53-.075-.15-.69-1.665-.95-2.28-.25-.6-.5-.52-.69-.53l-.58-.01c-.205 0-.53.075-.807.38-.28.305-1.06 1.03-1.06 2.51s1.085 2.91 1.235 3.115c.15.205 2.14 3.27 5.185 4.585.725.31 1.29.495 1.73.63.725.23 1.385.2 1.905.12.58-.085 1.805-.74 2.06-1.455.255-.715.255-1.33.18-1.455-.075-.13-.28-.205-.585-.355z"/>
          </svg>
        </div>
        <h3 className="text-xl font-semibold text-gray-900 mb-3">WhatsApp</h3>
        <p className="text-gray-600 text-lg">Available 24/7</p>
      </div>

        </div>
      </div>
    </section>
  );
}