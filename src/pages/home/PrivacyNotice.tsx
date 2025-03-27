import { Link } from "react-router-dom";

export default function PrivacyNotice() {
  return (
    <div className="text-sm text-gray-600 text-center my-4">
      <div className="mt-4">
        <p><strong>Contact Us</strong></p>
        <p>
          <strong>Support Email:</strong> 
          <a href="mailto:dileep@examtrakker.com" className="text-blue-600 underline ml-1">
            dileep@examtrakker.com
          </a> (For any query please reach out here)
        </p>
        <p>
          <strong>Phone Number:</strong> +91 70366 67776
        </p>
        <p>
          <strong>Address:</strong> DNO 1-536, Official Colony, Ponduru, Srikakulam, AP, 532168
        </p>
      </div>
      <div className="mt-3">
      <p>
        We respect your privacy. {" "}
        <Link to="/privacy-policy" className="text-blue-600 underline">
          Read more
        </Link>
        .
      </p>
      </div>
      
    </div>
  );
}