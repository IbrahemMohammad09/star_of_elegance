import React, { useState } from 'react';
import Star from "../../../assets/image/Dashboard/Rate/Star.svg"
import Icon from"../../../assets/image/Dashboard/Rate/Icon.svg"
import SideBar from '../SharedComponents/SideBar';
import right from "../../../assets/image/Dashboard/Rate/right.svg"
import starempty from "../../../assets/image/Dashboard/Rate/starempty.svg"
import left from "../../../assets/image/Dashboard/Rate/left.svg"
import { Link } from "react-router-dom";
const Rate = () => {
 const initialData = [
 { id: 1, name: 'Olivia Rhye', message: 'Text Message', rating: 5, isActive: true },
 { id: 2, name: 'Phoenix Baker', message: 'Text Message', rating: 4, isActive: true },
 { id: 3, name: 'Lana Steiner', message: 'Text Message', rating: 3, isActive: true },
 { id: 4, name: 'Demi Wilkinson', message: 'Text Message', rating: 2, isActive: true },
 { id: 5, name: 'Candice Wu', message: 'Text Message', rating: 1, isActive: true },
 { id: 6, name: 'Natali Craig', message: 'Text Message', rating: 5, isActive: true },
 { id: 7, name: 'Drew Cano', message: 'Text Message', rating: 2, isActive: true },
 { id: 8, name: 'Orlando Diggs', message: 'Text Message', rating: 4, isActive: true },
 { id: 9, name: 'Andi Lane', message: 'Text Message', rating: 3, isActive: false },
 { id: 10, name: 'Kate Morrison', message: 'Text Message', rating: 5, isActive: true },
 ];

 const [data, setData] = useState(initialData);
{/*حالة التفعيل*/}
 const ActiveStatus = (id) => {
 setData(prevData =>
 prevData.map(item =>
 item.id === id ? { ...item, isActive: !item.isActive } : item ) );
 };
{/*التقييم*/}
 const starImages = {
   filled: Star,
   empty: starempty,
 };

  return (
    <div className=" md:flex  gap-14">
      <SideBar/>
      <div className=' mb-28 md:w-full  pl-12 md:pl-0 mr-6 mt-11'>
        <p className='Poppins font-bold text-2xl'>Dashboard</p>
        <p className='Poppins font-semibold text-2xl my-6'>Rate</p>
     <div className="overflow-x-auto">
       <table className="min-w-full border-collapse bg-white">
         <thead>
           <tr className='bg-[#F9FAFB] border border-[#EAECF0]'>
             <th className="px-4 py-2 text-[#667085] inter font-medium text-xs text-left">Name</th>
             <th className="px-4 py-2 text-[#667085] inter font-medium text-xs text-left">Text Message</th>
             <th className="px-4 py-2 text-[#667085] inter font-medium text-xs text-center">Rate</th>
             <th className="px-4 py-2 text-[#667085] inter font-medium text-xs text-left"></th>
             <th className="px-4 py-2 text-[#667085] inter font-medium text-xs text-left"></th>
            </tr>
         </thead>
         <tbody>
            {data.map((item) => (
            <tr key={item.id} className="border-b">
            <td className="px-4 py-2 inter font-medium text-sm text-[#101828]">{item.name}</td>
            <td className="px-4 py-2 inter font-medium text-xs text-[#667085]">{item.message}</td>
            <td className="px-4 py-2  text-center">
            {[...Array(5)].map((_, index) => (
                 <img key={index} src={index < item.rating ? starImages.filled : starImages.empty} alt="star"  className="inline w-4" />
                 ))}
               </td>
               <td className="px-4 py-5  space-x-2">
                 <button><img className='w-4 cursor-pointer' src={Icon} alt="delete-icon" /></button>
               </td>
               <td className="px-4 py-2 cursor-pointer" onClick={() => ActiveStatus(item.id)}>
                 {item.isActive ? <button className=' inter font-medium text-[#667085]'>Active</button> : <button className=' inter font-medium text-[#667085]'>Inactive</button>}
                  </td>
                  </tr>
                ))}
        </tbody>
       </table>
       {/*ازرار التنقل بين الصفحات*/}
        <div className='flex justify-between mx-3 mt-6'>
            <div className='flex gap-1 py-2 rounded-lg border w-[114px] hover:bg-[#B47F3E] '>
                <img className=' pl-4' src={right} alt="right-arrow" />
                <Link to ="/" className='inter font-medium text-[#344054]'>Previous</Link>
           </div>
            <div className='flex gap-3.5'>
                 <Link to ="/" className='text-[#667085] inter font-medium text-base'>1</Link>
                 <Link to ="/" className='text-[#667085] inter font-medium text-base'>2</Link>
                 <Link to ="/" className='text-[#667085] inter font-medium text-base'>3</Link>
                 <Link to ="/" className='text-[#667085] inter font-medium text-base'>...</Link>
                 <Link to ="/" className='text-[#667085] inter font-medium text-base'>8</Link>
                 <Link to ="/" className='text-[#667085] inter font-medium text-base'>9</Link>
                 <Link to ="/" className='text-[#667085] inter font-medium text-base'>10</Link>
            </div>
            <div className='flex gap-1 py-2 rounded-lg border w-[114px] hover:bg-[#B47F3E] '>
                <Link to ="/" className='inter font-medium text-[#344054] pl-4'>Next</Link>
                <img  className='w-3' src={left} alt="left-arrow" />
           </div>
        </div>
       </div>
     </div>
</div>
);
};

export default Rate;