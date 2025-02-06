import lineProject from '../assets/image/lineProject.svg'
import './TitleProject.css'
export default function TitleProject(){
    return<>
      <div className='flex  flex-col gap-3 items-center md:flex-row mt-28 mb-14 pl-6 container-title-project '>
         <p className='crimson font-semibold text-[40px] w-[290px] text-[#B47F3D]'>Projects We Are proud of</p>
         <img src={lineProject} alt='line' className='w-full max-w-[600px] mt-4'/>
      </div>
    
    </>
}