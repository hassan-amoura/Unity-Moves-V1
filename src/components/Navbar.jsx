import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

function Navbar() {
  return (
    <nav className="flex justify-between items-center p-4 bg-white shadow-md">
      <Link to="/">
        <img src={logo} alt="Logo" className="h-12" />
      </Link>
      <div className="space-x-6">
        <Link to="/" className="text-gray-700 hover:text-purple-600">Home</Link>
        <Link to="/about" className="text-gray-700 hover:text-purple-600">About</Link>
        <Link to="/classes" className="text-gray-700 hover:text-purple-600">Classes</Link>
        <Link to="/contact" className="text-gray-700 hover:text-purple-600">Contact</Link>
        <a href="https://bkscqu-kz.myshopify.com/" target="_blank" rel="noopener noreferrer" className="bg-purple-600 text-white px-4 py-2 rounded">Shop</a>
      </div>
    </nav>
  );
}

export default Navbar;