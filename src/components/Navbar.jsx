import { Link } from "react-router-dom";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/clerk-react";

function Navbar() {
  return (
    <nav className="bg-blue-600 text-white shadow-lg p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="font-bold text-xl">Skin Cancer Classification</div>
        <div className="flex space-x-6 items-center">
          <Link
            to="/"
            className="hover:text-blue-300 transition-colors duration-300"
          >
            Home
          </Link>
          <Link
            to="/info"
            className="hover:text-blue-300 transition-colors duration-300"
          >
            Info
          </Link>
          <Link
            to="/tools"
            className="hover:text-blue-300 transition-colors duration-300"
          >
            Tools
          </Link>
          <Link
            to="/our-solutions"
            className="hover:text-blue-300 transition-colors duration-300"
          >
            Our Solutions
          </Link>
          <Link
            to="/about-us"
            className="hover:text-blue-300 transition-colors duration-300"
          >
            About Us
          </Link>
          <div>
            <SignedOut>
              <SignInButton />
            </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
