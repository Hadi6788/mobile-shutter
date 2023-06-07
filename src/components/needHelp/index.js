import { FaComments } from 'react-icons/fa';
const NeedHelp = ()=>{
return(
    <>
    <div className="border border-[#9999994a]  px-[30px] pt-[30px] pb-[46px]">
            <h1 className="text-16px font-bold leading-[18px]">Still Need Help?</h1>
            <div className='flex justify-between  gap-2'>
               
               <FaComments className="w-6 h-6"/>
               <div className='flex flex-col'>
                <p> Chat with us</p>
                <p> 10am to 8pm pst</p>
               </div>
            </div>
    </div>
    
    </>
)
}
export default NeedHelp