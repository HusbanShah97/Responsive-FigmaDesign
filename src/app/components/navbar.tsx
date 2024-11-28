import Image from 'next/image';
export default function Navbar() {
    
    return(

        <>
        <div className="w-[1440px] h-[4370px] bg-[#FFFFFF]">
                <header className="w-[1440px] h-[38px] bg-[#000000]">
                    <div className='flex justify-center'>

                     <p className='w-[351px] h-[91px] '>Sign up and get 20% off to your first order. <span className='text-[#FFFFFF] font-medium '>Sign Up Now</span>  </p>

                    </div>

                    <div>
                        <Image
                          
                            src={'/logos/Frame.png'}
                            alt='vector'
                            width={13.13}
                            height={13.13}
                             
                        />


                        
                    </div>

                </header>     
        </div>
        </>
    )
}