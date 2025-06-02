import { Link } from 'react-router-dom';

const Navbar = () => (
    <nav className="flex items-center bg-gray-800 p-4 text-white flex justify-center space-x-6">
        <Link to="/" className="hover:text-blue-300">Home</Link>
        <Link to="/about" className="hover:text-blue-300">About</Link>
        <Link to="/crud-redux-toolkit" className="hover:text-blue-300">Crud Redux Toolkit</Link>
        <Link to="/debounce-autocomplate" className="hover:text-blue-300">Debounce Autocomplate</Link>
    </nav>
);

export default Navbar;
