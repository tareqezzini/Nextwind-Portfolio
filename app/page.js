import Image from 'next/image';
import avatar from '../public/avatar.svg'
import {MdDarkMode} from 'react-icons/md'
export default function Home() {
  return (
          <section className='h-full'>
            <div className="container h-full mx-auto text-center flex flex-col items-center justify-center gap-4 mt-32">
                <h1 className='text-5xl mb-3 font-bold capitalize'>Welcome To my website</h1>
              <div className="image">
                <Image src={avatar} />
              </div>
                <p className='text-gray lg:w-4/5 mx-auto text-xl leading-7'>I'm an experienced web developer specializing in Laravel and Next.js. With a passion for clean code and captivating design, I create dynamic websites that deliver seamless user experiences. Let's collaborate and bring your web projects to life with cutting-edge solutions. Explore my portfolio and let's turn your ideas into reality!</p>
            </div>
          </section>
  )
}
