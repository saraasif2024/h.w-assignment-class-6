import Link from "next/link";
import Navbar from "../component/navbar";

export default function Contact() {
  return (
    <>
      {/* <Navbar /> */}
      <br></br>
      <h2 className="text-sky-800  text-4xl  font-bold text-center">Contact Page</h2>

<br></br>

      <div>
<div className="max-w-md mx-auto p-5 border rounded-lg shadow-md">
  <h2 className="text-2xl mb-4">Contact Us</h2>
  <form id="contact-form">
    <div className="mb-4">
      <label className="block mb-2 text-sm font-medium text-gray-700">Name</label>
      <input
        type="text"
        required
        className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
    <div className="mb-4">
      <label className="block mb-2 text-sm font-medium text-gray-700">Email</label>
      <input
        type="email"
        required
        className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
    <button
      type="submit"
      className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600" >
      SUBMIT
    </button>
  </form>
</div>


<br></br>
<br></br>
<br></br>
<br></br>
<br></br>
<br></br>
<br></br>
<br></br>
<br></br>
<br></br>
<br></br>
<br></br>
<br></br>
<br></br>
<br></br>
<br></br>
<br></br>
<br></br>





<div>
<footer className="bg-gray-800 text-white py-8">
    <div className="container mx-auto flex flex-col md:flex-row justify-between">
        <div className="mb-4 md:mb-0">
            <h3 className="text-lg font-bold">Computer Courses</h3>
            <p className="mt-2">Empowering you with the skills for the future.</p>
        </div>
        <div>
            <h4 className="text-md font-semibold">Quick Links</h4>
            <ul className="mt-2">
                <li><a href="./home" className="text-gray-400 hover:text-white">Home</a></li>
                <li><a href="./about" className="text-gray-400 hover:text-white">About Us</a></li>
                <li><a href="./contact" className
                ="text-gray-400 hover:text-white">Courses</a></li>
                <li><a href="./team" className="text-gray-400 hover:text-white">Team</a></li>
            </ul>
        </div>
        <div>
            <h4 className="text-md font-semibold">Contact Us</h4>
            <p className="mt-2">Email: info@computercourses.com</p>
            <p>Phone: +1 (234) 567-890</p>
        </div>
    </div>
    <div className="text-center mt-6">
        <p className="text-sm">&copy; 2024 Computer Courses. All Rights Reserved.</p>
    </div>
</footer>
</div>



      </div>
    </>
  );
}
