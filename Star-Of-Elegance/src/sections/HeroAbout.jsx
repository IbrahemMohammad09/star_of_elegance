import './HeroAbout.css'
import photoabout from "../assets/image/About/photoabout.png"
import { Link } from 'react-router-dom';

export default function HeroAbout(){
    return<>
        <div className='flex items-center justify-center '>  
            <div className="flex Container-HeroAbout items-center justify-items-center flex-col-reverse gap-14 md:gap-36 pl-14 pr-8 md:pl-24 md:pr-16 text-black crimson md:flex-row mt-44 mb-32">
                <div className="flex flex-col gap-4 ">
                <p className=" font-normal text-4xl ">ABOUT US </p>
                <p className="font-light md:font-medium max-w-[550px]  py-6 text-4xl md:text-6xl  ">We help you turn your vision into reality.</p>
                <p className=" font-normal text-xl md:text-2xl max-w-lg mb-8 ">We are a team specialized in providing innovative and customized solutions for furniture design and related services. We believe that every piece of furniture tells a story, and we strive to combine high craftsmanship with modern designs to meet our clients' needs and bring their vision to life. Our vision is to turn every idea into reality, focusing on quality and excellence in every detail.</p>
                <Link to="/contactus">
                <button className="border border-5px border-[#B47F3D] w-60 py-2 px-10  md:w-80 md:py-4 md:px-20 text-[#B47F3D] font-medium text-3xl right-4 rounded-3xl roboto hover:bg-[#B47F3D] hover:text-white ">Contact us</button>
                </Link>
                </div>
                <div  className="">
                    <img src={photoabout} alt="photo" className=" w-full  max-w-[1024px] md:max-w-[800px] lg:max-w-[600px] xl:max-w-[500px] "/>
                </div>
            </div>
        </div>
    </>
}