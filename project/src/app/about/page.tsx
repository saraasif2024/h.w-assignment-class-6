import Navbar from "../component/navbar";
import Link from "next/link";

export default async function Apply() {
    await new Promise((resolve) => {
      setTimeout(resolve, 5000);
    });
    return (

    <>
    <div>
       
      {/* <Navbar /> */}
      <br></br>
      <br></br>
      <h2 className="text-sky-800  text-4xl  font-bold">ABOUT PAGE : </h2>
      <p className="text-2xl  text-white hover:text-slate-700 font-bold
      h-30 bg-gradient-to-r from-purple-500 to-pink-500
      ">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis nobis itaque minima, reprehenderit asperiores quisquam, neque accusamus mollitia placeat, qui deserunt recusandae ipsa autem quibusdam exercitationem! Unde quae cupiditate beatae!</p>
   <div>
  
   </div>
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
  
    </>
    
    ) 
}