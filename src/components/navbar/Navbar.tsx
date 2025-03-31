import { Link } from 'react-router-dom';
import Logo from '../../assets/Logo';
import useGlobalStore from '../../state/GlobalState';

const navLinks = [
  { name: 'Courses', route: '#courses' },
  { name: 'About', route: '#about' },
  { name: 'Testimonials', route: '#testimonials' },
  { name: 'Blog', route: '#blog' },
  { name: 'Contact', route: '#contact' },
];

export default function Navbar() {
  const { user } = useGlobalStore();

  const handleScroll = (route: string) => {
    const section = document.querySelector(route);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md transition-all duration-300 hover:bg-white/90">
      <div className="mx-auto max-w-7xl px-6 py-4 md:px-8 lg:px-12">
        <div className="relative flex items-center justify-between">
          {/* Logo */}
          <Link 
            to="/" 
            className="group relative z-10 flex items-center gap-2"
          >
            <div className="transition-transform duration-300 group-hover:scale-110">
              <Logo />
            </div>
            <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-gradient-to-r from-blue-600 to-orange-500 transition-all duration-300 group-hover:w-full"></span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-1 md:flex">
            {navLinks.map(({ name, route }) => (
              <button
                key={name}
                onClick={() => handleScroll(route)}
                className="group relative rounded-lg px-4 py-2 font-medium text-gray-700 transition-all duration-300 hover:text-blue-600"
              >
                {name}
                <span className="absolute bottom-0 left-1/2 h-0.5 w-0 -translate-x-1/2 bg-gradient-to-r from-blue-600 to-orange-500 transition-all duration-300 group-hover:w-3/4"></span>
              </button>
            ))}

            {user && (
              <div className="dropdown-end dropdown ml-4">
                <button
                  tabIndex={0}
                  className="group flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-50 to-orange-50 px-4 py-2 font-medium text-gray-800 transition-all duration-300 hover:from-blue-100 hover:to-orange-100"
                >
                  <span className="truncate max-w-[120px]">{user.name}</span>
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-r from-blue-600 to-orange-500 text-white transition-transform duration-300 group-hover:rotate-12">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="h-5 w-5"
                    >
                      <path
                        fillRule="evenodd"
                        d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                </button>
                <ul
                  tabIndex={0}
                  className="dropdown-content menu rounded-box mt-2 w-52 bg-white p-2 shadow-xl"
                >
                  <li>
                    <Link
                      to="/user"
                      className="rounded-lg text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                    >
                      Profile
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/logout"
                      className="rounded-lg text-gray-700 hover:bg-orange-50 hover:text-orange-600"
                    >
                      Logout
                    </Link>
                  </li>
                </ul>
              </div>
            )}
          </div>

          {/* Mobile Hamburger */}
          <label
            htmlFor="mobile-drawer"
            className="btn-ghost btn-circle btn relative z-10 md:hidden"
          >
            <div className="space-y-1.5">
              <span className="block h-0.5 w-6 bg-gray-700 transition-all duration-300"></span>
              <span className="block h-0.5 w-6 bg-gray-700 transition-all duration-300"></span>
              <span className="block h-0.5 w-6 bg-gray-700 transition-all duration-300"></span>
            </div>
          </label>
        </div>
      </div>

      {/* Mobile Drawer */}
      <MobileDrawer user={user} />
    </nav>
  );
}

function MobileDrawer({ user }: { user: any }) {
  const handleClose = () => {
    const checkBoxToggle = document.getElementById(
      'mobile-drawer'
    ) as HTMLInputElement;
    if (checkBoxToggle) checkBoxToggle.checked = false;
  };

  const handleScroll = (route: string) => {
    const section = document.querySelector(route);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      handleClose();
    }
  };

  return (
    <div className="drawer drawer-end z-50">
      <input id="mobile-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-side">
        <label
          htmlFor="mobile-drawer"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <div className="menu relative h-full w-80 space-y-2 bg-white p-6">
          {/* Close Button */}
          <button
            onClick={handleClose}
            className="btn-ghost btn-circle btn absolute right-2 top-2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          {/* Navigation Links */}
          <div className="mt-12 space-y-1">
            {navLinks.map(({ name, route }) => (
              <button
                key={name}
                onClick={() => handleScroll(route)}
                className="group flex w-full items-center rounded-lg px-4 py-3 text-lg font-medium text-gray-700 transition-all duration-300 hover:bg-blue-50 hover:text-blue-600"
              >
                {name}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="ml-auto h-5 w-5 opacity-0 transition-all duration-300 group-hover:opacity-100"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            ))}
          </div>

          {/* User Section */}
          {user && (
            <div className="mt-auto border-t border-gray-100 pt-4">
              <div className="flex items-center gap-3 px-4 py-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-r from-blue-600 to-orange-500 text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="h-5 w-5"
                  >
                    <path
                      fillRule="evenodd"
                      d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div>
                  <p className="font-medium text-gray-900">{user.name}</p>
                  <p className="text-sm text-gray-500">Student Account</p>
                </div>
              </div>

              <Link
                to="/user"
                className="flex items-center rounded-lg px-4 py-3 text-gray-700 transition-all duration-300 hover:bg-blue-50 hover:text-blue-600"
              >
                Profile
              </Link>
              <Link
                to="/logout"
                className="flex items-center rounded-lg px-4 py-3 text-gray-700 transition-all duration-300 hover:bg-orange-50 hover:text-orange-600"
              >
                Logout
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}