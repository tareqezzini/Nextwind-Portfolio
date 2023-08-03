import Image from "next/image"
export default function contact()
{
     return (
          <section className=" max-w-screen px-10">
               <div className="container h-full w-full lg:w-4/5 mx-auto  pt-32">
                    <div>
                         <h1 className="text-center relative text-3xl md:text-5xl font-bold capitalize z-20">Contact Us</h1>
                         <p className="text-center  text-5xl md:text-6xl relative -top-10 text-gray-200 capitalize ">Let's Get In Touch</p>
                    </div>
                    <div className="flex items-start justify-center mt-4">
                         <div className="w-1/2 hidden lg:block">
                              <Image src="/img/contact.svg" width="400" height="400" alt="contact image" />
                         </div>
                         <form className="w-full lg:w-1/2 flex flex-col gap-4">
                             <input className="w-full border shadow-md py-2 px-4" type="text" placeholder="Enter Your Name" /> 
                             <input className="w-full border shadow-md py-2 px-4" type="text" placeholder="Subject" /> 
                             <input className="w-full border shadow-md py-2 px-4" type="email" placeholder="Enter Your Email" /> 
                             <textarea className="w-full border shadow-md py-2 px-4" rows="10" placeholder="Your Message"> 
                              </textarea>
                         </form>
                    </div>
                    
               </div>
          </section>
     )
}