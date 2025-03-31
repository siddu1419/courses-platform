export default function About() {
  return (
    <section id="about" className="about-section py-20 bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-6 md:px-8 lg:px-12">
        <div className="max-w-4xl mx-auto">
          {/* Animated Title */}
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              <span className="relative inline-block">
                <span className="relative z-10">Hey, I'm Dileep Palavalasa</span>
                <span className="absolute bottom-0 left-0 w-full h-4 bg-gradient-to-r from-orange-200 to-blue-200 opacity-75 -z-0 transform -rotate-1"></span>
              </span>
            </h2>
            <p className="text-xl text-blue-600 font-medium">Making Physics Feel Like Play Since 2015</p>
            <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-blue-600 mx-auto mt-4 rounded-full"></div>
          </div>

          {/* Content with Visual Enhancements */}
          <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 space-y-6 mb-10">
            <p className="text-lg text-gray-700 leading-relaxed">
              I'm an IITian who's a bit obsessed with teaching Physics in a way that actually makes sense (and is fun, of course). I've helped hundreds of students get into IIT and other top colleges, but here's the thing—
              <span className="relative px-1">
                <span className="relative z-10">it's not just about the results.</span>
                <span className="absolute bottom-0 left-0 w-full h-3 bg-yellow-100 opacity-60 -z-0 transform -rotate-1"></span>
              </span>
              It's about making Physics feel easy, relatable, and exciting.
            </p>

            <div className="flex items-start space-x-4 p-4 bg-blue-50 rounded-lg border-l-4 border-blue-400">
              <div className="flex-shrink-0 mt-1 text-blue-600">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <p className="text-gray-700">
                Instead of drowning in endless theory, I use simulators and hands-on experiments to help you <span className="font-medium text-blue-600">experience Physics</span> rather than just memorize it. Trust me, you'll actually see how concepts work in real-time!
              </p>
            </div>

            <p className="text-lg text-gray-700 leading-relaxed">
              My goal is simple: I want you to <span className="font-medium text-orange-500">love learning Physics</span>, not dread it. We'll have fun, experiment, and maybe even laugh a little (or a lot) along the way. Whether you're preparing for JEE or NEET, I'm here to make sure you not only understand Physics but also enjoy the process.
            </p>

            <div className="p-4 bg-orange-50 rounded-lg border-l-4 border-orange-400">
              <p className="text-gray-700 italic">
                "So, if you're ready for something different—something a bit more fun and interactive—let's get started! 🙌"
              </p>
            </div>
          </div>

          {/* Enhanced Call-to-Action */}
          <div className="text-center">
            <a
              href="https://www.youtube.com/@dileep0667"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-500 text-white font-semibold rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
            >
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
              Check Out My YouTube Channel
            </a>
            <p className="mt-4 text-gray-500 text-sm">Join 10,000+ students who transformed their Physics learning</p>
          </div>
        </div>
      </div>
    </section>
  );
}