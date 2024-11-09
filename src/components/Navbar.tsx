// components/Navbar.tsx
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="bg-blue-600 text-white p-4 ">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-xl font-bold">MyWebsite</Link>
        <div className="space-x-4">
          <Link href="/" className="hover:text-blue-300">Home</Link>
          <Link href="/about" className="hover:text-blue-300">About</Link>
          <Link href="/services" className="hover:text-blue-300">Services</Link>
          <Link href="/contact" className="hover:text-blue-300">Contact</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
