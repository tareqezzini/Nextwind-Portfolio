import Image from "next/image";
export default function portfolio()
{
     return (
          <section className="px-6">
               <div className="container h-full w-full md:w-4/5 mx-auto my-32">
                    <div>
                         <h1 className="text-center relative text-3xl md:text-5xl font-bold capitalize z-20">Portfolio</h1>
                         <p className="text-center  text-5xl md:text-6xl relative -top-10 text-gray-300 capitalize ">The Recent Of My Work</p>
                    </div>


                    <div className="flex flex-row items-start justify-center mt-4">
                         <span className="text-base md:text-xl font-bold capitalize cursor-pointer hover:text-red-600">All</span>
                         <span className="ml-4 md:ml-6 text-base md:text-xl font-bold capitalize cursor-pointer hover:text-red-600">back-end</span>
                         <span className="ml-4 md:ml-6 text-base md:text-xl font-bold capitalize cursor-pointer hover:text-red-600">front-end</span>
                         <span className="ml-4 md:ml-6 text-base md:text-xl font-bold capitalize cursor-pointer hover:text-red-600">Graphic Design</span>
                    </div>

                    <div className="mx-auto grid lg:grid-cols-2 xl:grid-cols-4 gap-5 mt-5">
                         <div className="relative shadow-md">
                              <Image className="w-full" src="/img/logo.png"  alt="logo" width={300 } height={300}  />
                              <div className="absolute bottom-0 p-4 bg-white ">
                                   <h2 className="text-xl font-bold capitalize ">logo design</h2>
                                   <p className="text-md">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint nihil excepturi aperiam, soluta dolor repellat ex quasi maxime totam non?</p>
                              </div>
                         </div>
                         <div className="relative shadow-md">
                              <Image className="w-full" src="/img/logo.png"  alt="logo" width={300 } height={300}  />
                              <div className="absolute bottom-0 p-4 bg-white">
                                   <h2 className="text-xl font-bold capitalize ">logo design</h2>
                                   <p className="text-md">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint nihil excepturi aperiam, soluta dolor repellat ex quasi maxime totam non?</p>
                              </div>
                         </div>
                         <div className="relative shadow-md">
                              <Image className="w-full" src="/img/logo.png"  alt="logo" width={300 } height={300}  />
                              <div className="absolute bottom-0 p-4 bg-white">
                                   <h2 className="text-xl font-bold capitalize ">logo design</h2>
                                   <p className="text-md">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint nihil excepturi aperiam, soluta dolor repellat ex quasi maxime totam non?</p>
                              </div>
                         </div>
                         <div className="relative shadow-md">
                              <Image className="w-full" src="/img/logo.png"  alt="logo" width={300 } height={300}  />
                              <div className="absolute bottom-0 p-4 bg-white">
                                   <h2 className="text-xl font-bold capitalize ">logo design</h2>
                                   <p className="text-md">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint nihil excepturi aperiam, soluta dolor repellat ex quasi maxime totam non?</p>
                              </div>
                         </div>
                         <div className="relative shadow-md">
                              <Image className="w-full" src="/img/logo.png"  alt="logo" width={300 } height={300}  />
                              <div className="absolute bottom-0 p-4 bg-white">
                                   <h2 className="text-xl font-bold capitalize ">logo design</h2>
                                   <p className="text-md">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint nihil excepturi aperiam, soluta dolor repellat ex quasi maxime totam non?</p>
                              </div>
                         </div>
                         <div className="relative shadow-md">
                              <Image className="w-full" src="/img/logo.png"  alt="logo" width={300 } height={300}  />
                              <div className="absolute bottom-0 p-4 bg-white">
                                   <h2 className="text-xl font-bold capitalize ">logo design</h2>
                                   <p className="text-md">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint nihil excepturi aperiam, soluta dolor repellat ex quasi maxime totam non?</p>
                              </div>
                         </div>
                         <div className="relative shadow-md">
                              <Image className="w-full" src="/img/logo.png"  alt="logo" width={300 } height={300}  />
                              <div className="absolute bottom-0 p-4 bg-white">
                                   <h2 className="text-xl font-bold capitalize ">logo design</h2>
                                   <p className="text-md">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint nihil excepturi aperiam, soluta dolor repellat ex quasi maxime totam non?</p>
                              </div>
                         </div>
                         <div className="relative shadow-md">
                              <Image className="w-full" src="/img/logo.png"  alt="logo" width={300 } height={300}  />
                              <div className="absolute bottom-0 p-4 bg-white">
                                   <h2 className="text-xl font-bold capitalize ">logo design</h2>
                                   <p className="text-md">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint nihil excepturi aperiam, soluta dolor repellat ex quasi maxime totam non?</p>
                              </div>
                         </div>
                    </div>
                    
               </div>
          </section>
     )
}