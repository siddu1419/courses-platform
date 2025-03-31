import { Link } from "react-router-dom";

export default function PrivacyNotice() {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8 max-w-2xl mx-auto my-8">
      <div className="space-y-6">
        {/* Contact Header */}
        <div className="text-center space-y-2">
          <h3 className="text-xl font-semibold text-gray-800">Contact Information</h3>
          <p className="text-gray-500 text-sm">Feel free to reach out to us</p>
          <div className="w-20 h-0.5 bg-gradient-to-r from-orange-500 to-blue-600 mx-auto"></div>
        </div>

        {/* Contact Details */}
        <div className="space-y-5">
          <div className="flex items-start space-x-4">
            <div className="mt-0.5 p-1.5 bg-blue-50 rounded-lg">
              <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <div>
              <p className="text-sm font-medium text-gray-500 mb-1">Our Location</p>
              <p className="text-gray-700 leading-relaxed">DNO 1-536, Official Colony, Ponduru, Srikakulam, AP, 532168</p>
            </div>
          </div>
        </div>

        {/* Privacy Policy Link */}
        <div className="pt-5 border-t border-gray-100 text-center">
          <p className="text-sm text-gray-600">
            We respect your privacy.{" "}
            <Link 
              to="/privacy-policy" 
              className="text-blue-600 hover:text-blue-700 transition-colors font-medium"
            >
              Read our privacy policy
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}