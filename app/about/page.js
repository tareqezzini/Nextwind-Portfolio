
export default function about()
{
     return (
          <section className="max-w-screen px-10">
               <div className="container h-full w-full md:w-4/5 mx-auto  pt-32">
                    <h1 className="text-center relative text-3xl md:text-5xl font-bold capitalize z-20">About Me</h1>
                    <p className="text-center mt-2 text-5xl md:text-6xl relative -top-10 text-gray-200 ">Know Me More</p>
                    <p className="text-center  mx-auto text-lg md:text-xl">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus cupiditate consequuntur obcaecati tenetur, reprehenderit excepturi quae fugit saepe magnam aliquam ratione mollitia quisquam minima laudantium quidem impedit veniam eum debitis et. Fugiat eius magnam voluptas alias quam, minus vero culpa repudiandae laboriosam facilis error iste nesciunt provident nisi praesentium quisquam consectetur quia, sint dolorum quibusdam asperiores libero minima eveniet. Repellat?.</p>
                   <div className="flex flex-row items-start justify-between flex-wrap">
                    <div className="w-1/2 lg:w-1/4 mt-10  border-l-2 border-red-700 pl-2">
                         <h2 className="font-bold text-xl">Name:</h2>
                         <p className="text-gray-700 ">Tareq Ez zini</p>
                    </div>
                    <div className="w-1/2 lg:w-1/4 mt-10  border-l-2 border-red-700 pl-2">
                         <h2 className="font-bold text-xl">Email:</h2>
                         <p className="text-gray-700 ">tareq.zini@gmail.com</p>
                    </div>
                    <div className="w-1/2 lg:w-1/4 mt-10  border-l-2 border-red-700 pl-2">
                         <h2 className="font-bold text-xl">Date Of Birth:</h2>
                         <p className="text-gray-700 ">05/07/1998</p>
                    </div>
                    <div className="w-1/2 lg:w-1/4 mt-10  border-l-2 border-red-700 pl-2">
                         <h2 className="font-bold text-xl">From:</h2>
                         <p className="text-gray-700 ">Morocco, Zagora</p>
                    </div>
                   </div>
               </div>
          </section>
     )
}