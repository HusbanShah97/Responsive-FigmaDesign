import Image from 'next/image';
export default function Navbar() {
    
    return(

        <>
        <div className="w-[1440px] h-[4370px] bg-[#FFFFFF]">
                <header className="w-[1440px] h-[38px] bg-[#000000] flex ">
                    <div className=' w-[1440px] h-[38px] flex justify-center'>

                     <p className='w-[410px] h-[35px] font-normal p-[6px]'>Sign up and get 20% off to your first order. <span className='text-[#FFFFFF] font-medium '>Sign Up Now</span>  </p>

                    </div>

                    <div className='flex justify-end'>
                        <Image
                          
                            src={'/logos/Frame.png'}
                            alt='vector'
                            width={20}
                            height={20}
                            className='mr-20'
                             
                        />

                    </div>

                   

                </header> 
                
                {/* Navbar */}
                
                <nav className='w-[1440px] h-[100px] bg-white flex'>
                    <div className='w-[1240px] h-[48px] mt-9 mx-24 flex text-black'>
                        
                        <h1 className='w-[160px] h-[22px] font-extrabold'>SHOP.CO</h1>

                       <ul className='flex gap-6 font-medium'>
                        <li>Shop</li>
                        <li>On Sale</li>
                        <li>New Arrivals</li>
                        <li>Brands</li>
                        </ul>
                        
                        <input type="text" placeholder='Serach For Product' className='w-[577px] h-[30px] rounded-xl ml-16 bg-[#F0F0F0]' />
                        <div className='w-[62px] h-[24px] flex ml-10 gap-5'>
                           
                        <Image
                          
                          src={'/logos/Vector.png'}
                          alt='vector'
                          width={23}
                          height={20}
                          
                           
                            />
                            
                        <Image
                          
                          src={'/logos/Contact.png'}
                          alt='vector'
                          width={23}
                          height={20}
                          
                           
                      />


                        </div>

                   </div>
                   
                
                </nav>         

                {/* Main Content */}
                
                <div className='w-[1440px] h-[663px] bg-[#F2F0F1]'>
                    <p className='w-[577px] h-[173px] text-black text-[64px] leading-[64px] font-extrabold pt-[70px] ml-[100px]'>FIND CLOTHES THAT MATCHES YOUR STYLE</p>
                    <p className='w-[545px] h-[33px] text-black mt-32 ml-[100px]'>Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.</p>

                    <div className='w-[210px] h-[52px] bg-black rounded-[30px] ml-[100px] mt-12 pl-16 pt-3'>
                        <button type='button'>Shop Now</button>
                    </div>
                    
                    <div>
                        
                    </div>

                </div>
            





        </div>
        </>
    )
}