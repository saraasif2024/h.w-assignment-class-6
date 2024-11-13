import Link from "next/link";

export default function Navbar() {
  return (
  
    <div className="space-x-40 bg-sky-900 w-full  h-12 inline-flex">
      <h1
      className="text-white hover:text-orange-500 font-bold text-3xl m-2">
        TUTION FREE PROGRAM </h1>


  
    <Link
      href="/home"
      className="text-white hover:text-orange-500 font-bold text-2xl">
        Home </Link>

         <Link
       href="/about"
      className="text-white hover:text-orange-500 font-bold text-2xl">
         About </Link>
        
      

        <Link
          href="/contact"
          className="text-white hover:text-orange-500 font-bold text-2xl">
          Contact
        </Link>

        <Link
          href="/team"
          className="text-white hover:text-orange-500 font-bold text-2xl">
          Team
        </Link>

       

     </div>
      
  
 ) }