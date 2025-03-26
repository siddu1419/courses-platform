import logo from '../assets/Exam-Trakker-Logo.jpg';

export default function Logo() {
  return (
    <img
      src={logo}
      alt="Logo"
      className="h-[64px] w-auto max-w-[200px] object-contain"
    />
  );
}
