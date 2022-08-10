import Head from 'next/head';
import Image from 'next/image';
import Navbar from '../components/Navbar';

export default function Home() {
  return (
    <>
      <Navbar />
      <h1 className="text-5xl font-bold text-center text-teal-500">Buyang PL</h1>
    </>
  );
}
