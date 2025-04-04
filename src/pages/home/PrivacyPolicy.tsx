export default function PrivacyPolicy() {
  return (
    <section id="privacy-policy" className="py-16 bg-gradient-to-b from-blue-50 to-blue-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header with gradient text */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-orange-500 bg-clip-text text-transparent mb-3">
            Privacy Policy
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-orange-400 to-blue-500 mx-auto rounded-full"></div>
        </div>

        {/* Policy content in card */}
        <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg border border-blue-200/50 p-8 max-w-4xl mx-auto">
          <div className="prose prose-blue max-w-none">
            <p className="text-gray-700 leading-relaxed">
              Welcome to EXAMTRAKKER! Your privacy is important to us. This Privacy Policy outlines how EXAMTRAKKER EDUTECH PRIVATE LIMITED ("EXAMTRAKKER," "we," "our," or "us") collects, uses, and protects your personal data when you use our platform, including our website and mobile application (collectively, the "Platform"). By using the Platform, you consent to the practices described in this Privacy Policy.
            </p>
            
            {/* Section with gradient border */}
            <div className="mt-8 pt-6 border-t border-blue-100">
              <h3 className="text-xl font-semibold text-gray-800 bg-gradient-to-r from-blue-600 to-orange-500 bg-clip-text text-transparent">
                1. Information We Collect
              </h3>
              <ul className="mt-3 space-y-2 pl-5 list-disc text-gray-700 marker:text-blue-400">
                <li><span className="font-medium text-gray-800">Personal Information:</span> Name, email address, phone number, billing details, and other details provided during account registration.</li>
                <li><span className="font-medium text-gray-800">Payment Information:</span> Payment details such as credit/debit card information, UPI ID, and net banking details for processing transactions.</li>
                <li><span className="font-medium text-gray-800">Usage Data:</span> Information on how you interact with our Platform, including accessed courses, MCQs attempted, blog interactions, and participation in forums.</li>
                <li><span className="font-medium text-gray-800">Device and Technical Data:</span> IP address, browser type, operating system, and technical logs to improve Platform performance and security.</li>
              </ul>
            </div>
            
            <div className="mt-8 pt-6 border-t border-blue-100">
              <h3 className="text-xl font-semibold text-gray-800 bg-gradient-to-r from-blue-600 to-orange-500 bg-clip-text text-transparent">
                2. How We Use Your Information
              </h3>
              <ul className="mt-3 space-y-2 pl-5 list-disc text-gray-700 marker:text-orange-400">
                <li>Process transactions and send payment confirmations</li>
                <li>Personalize user experience through learning analytics</li>
                <li>Communicate important updates, notifications, and promotional offers</li>
                <li>Enhance security measures and prevent unauthorized access</li>
                <li>Comply with legal and regulatory obligations</li>
              </ul>
            </div>
            
            <div className="mt-8 pt-6 border-t border-blue-100">
              <h3 className="text-xl font-semibold text-gray-800 bg-gradient-to-r from-blue-600 to-orange-500 bg-clip-text text-transparent">
                3. Data Sharing and Disclosure
              </h3>
              <p className="text-gray-700 mt-2">
                We do not sell or rent your personal data. However, we may share your information with:
              </p>
              <ul className="mt-2 space-y-2 pl-5 list-disc text-gray-700 marker:text-blue-400">
                <li><span className="font-medium text-gray-800">Payment Processors:</span> To securely process transactions</li>
                <li><span className="font-medium text-gray-800">Legal Authorities:</span> If required by law or to protect our rights and Platform security</li>
                <li><span className="font-medium text-gray-800">Service Providers:</span> To assist with analytics, customer support, or technical improvements</li>
              </ul>
            </div>
            
            {/* Additional sections with the same styling pattern */}
            {[4,5,6,7,8,9,10,11].map((section) => (
              <div key={section} className="mt-8 pt-6 border-t border-blue-100">
                <h3 className="text-xl font-semibold text-gray-800 bg-gradient-to-r from-blue-600 to-orange-500 bg-clip-text text-transparent">
                  {section === 4 && "4. Data Security"}
                  {section === 5 && "5. User Rights and Choices"}
                  {section === 6 && "6. Data Retention"}
                  {section === 7 && "7. Third-Party Links"}
                  {section === 8 && "8. Changes to This Policy"}
                  {section === 9 && "9. Governing Law"}
                  {section === 10 && "10. Return & Refund Policy"}
                  {section === 11 && "11. Contact Us"}
                </h3>
                <p className="text-gray-700 mt-3">
                  {section === 4 && "We implement appropriate security measures to protect your data from unauthorized access, alteration, or destruction. However, no online platform can guarantee absolute security."}
                  {section === 5 && (
                    <>
                      <ul className="mt-2 space-y-2 pl-5 list-disc text-gray-700 marker:text-orange-400">
                        <li>Access, update, or correct your personal information</li>
                        <li>Opt out of promotional emails by following the unsubscribe instructions in the emails</li>
                      </ul>
                    </>
                  )}
                  {section === 6 && "We retain user information as long as necessary for service delivery, legal compliance, or security purposes. Upon account deletion, we may retain some data for regulatory compliance or dispute resolution."}
                  {section === 7 && "Our Platform may contain links to third-party websites. We are not responsible for their privacy practices and encourage you to review their policies."}
                  {section === 8 && "EXAMTRAKKER reserves the right to modify this Privacy Policy at any time. Significant changes will be notified via email or in-app notifications. Continued use of the Platform after modifications constitutes acceptance of the updated policy."}
                  {section === 9 && "This Privacy Policy is governed by the laws of India. Any disputes shall be subject to the exclusive jurisdiction of courts in Hyderabad."}
                  {section === 10 && "If you wish to cancel a product or request a refund, please reach out to our support team via our support mail. Refunds are subject to our cancellation policy, and eligibility will be reviewed on a case-by-case basis."}
                  {section === 11 && "For any privacy-related concerns or requests, please reach out to our support team via our support mail."}
                </p>
              </div>
            ))}
            
            <div className="mt-10 pt-6 border-t border-blue-200">
              <p className="text-gray-700 font-medium">
                By using EXAMTRAKKER, you acknowledge that you have read, understood, and agreed to this Privacy Policy.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}