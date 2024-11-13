
import Navbar from "../component/navbar";
import Image from "next/image";
import bg from "../public/bg.jpeg"
import  pic from "../public/pic.png"

export default function Home() {
  return (
    <>
    <div>
       {/* <Navbar />  */}
   
  
    

      <br></br>
      <br></br>
      <br></br>
    <div >
   <Image alt="Mountains"
      src={bg}
      fill
      style={{
    opacity:0.1,
    
      }}
      />
  </div>

  <div className="flex justify-end " >
   <Image  className="bg-right"   alt="Mountains"
      src={pic}
      style={{
    height : 600,
    width :550,
    position:"absolute",
    margin : 100,
    padding : 1
  
    
      }}
      />
  </div> 
   
      <h2 className="font-bold  font-serif text-emerald-800 text-6xl hover:text-sky-800">GOVERNER  SINDH</h2>
      <h2 className="font-bold  font-serif text-orange-700 text-4xl hover:text-sky-800">Kamran Khan Tessori</h2>


      <h2 className=" text-6xl m-8 font-extrabold tracking-wide    font-serif text-sky-600 ">Certified Cloud<br></br> Applied Generative <br></br>AI Engineer (GenEng)</h2>
      <h2 className=" text-4xl m-8 font-extrabold tracking-wide  leading-relaxed font-serif text-sky-900 ">Earn up to $5,000 / month</h2>
    
    <button className="bg-sky-500  h-10 m-7 w-32 rounded-lg text-white text-bold 
    transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 ">APPLY NOW</button>

    

<br></br>
<br></br>
<br></br>
<br></br>
<br></br>
<br></br><br></br>
<br></br><br />


  

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
