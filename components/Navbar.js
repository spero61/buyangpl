import Link from 'next/link';
import Image from 'next/image';
import logo from '../public/logo.jpg';

export default function Navbar() {
  return (
    <nav className="bg-stone-50 border-gray-200 px-3 py-3 md:px-4 py-3 sticky">
      <div className="flex flex-wrap justify-between items-center">
        <span className="hover:cursor-pointer">
          <Link href="/">
            <a className="hover:opacity-75">
              <Image src={logo} width={70} height={70} alt="Blog Logo" />
            </a>
          </Link>
        </span>       
        {
          <Link href="#">
            <button
              type="button"
              className="text-stone-100 bg-teal-500 hover:bg-teal-700 rounded-full font-bold text-xs px-5 py-2.5 py-2 mx-1 md:text-sm md:px-7 md:py-2.5 md:mx-3"
            >
              Home
            </button>
          </Link>
        }
      </div>
    </nav>
  );
}
