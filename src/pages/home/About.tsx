import React from 'react';

export default function About() {
  return (
    <section id="about" className="about-section py-20 bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-6 md:px-8 lg:px-12">
        <div className="max-w-4xl mx-auto text-center">
          {/* Title */}
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Hey, I’m Dileep Palavalasa – Your New Favorite Physics Teacher!
          </h2>

          {/* Content */}
          <div className="text-lg text-gray-700 space-y-6">
            <p>
              I’m Dileep Palavalasa, an IITian who’s a bit obsessed with teaching Physics in a way that actually makes sense (and is fun, of course). I’ve helped hundreds of students get into IIT and other top colleges, but here’s the thing—it’s not just about the results. It’s about making Physics feel easy, relatable, and exciting.
            </p>
            <p>
              Instead of drowning in endless theory, I use simulators and hands-on experiments to help you experience Physics rather than just memorize it. Trust me, you’ll actually see how concepts work in real-time, and it’s a lot cooler than it sounds!
            </p>
            <p>
              My goal is simple: I want you to love learning Physics, not dread it. We’ll have fun, experiment, and maybe even laugh a little (or a lot) along the way. Whether you’re preparing for JEE or NEET, I’m here to make sure you not only understand Physics but also enjoy the process.
            </p>
            <p>
              So, if you're ready for something different—something a bit more fun and interactive—let’s get started! 🙌
            </p>
          </div>

          {/* Call-to-Action Button */}
          <div className="mt-10">
                      <a
            href="https://www.youtube.com/@dileep0667"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-300"
            >
            Check Out My YouTube Channel
          </a>
          </div>
        </div>
      </div>
    </section>
  );
}