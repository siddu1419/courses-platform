import { Link } from "react-router-dom";

export default function PrivacyNotice() {
  return (
    <p className="text-sm text-gray-600 text-center my-4">
      We respect your privacy.{" "}
      <Link to="/privacy-policy" className="text-blue-600 underline">
        Read more
      </Link>
      .
    </p>
  );
}
