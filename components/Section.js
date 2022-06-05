9//  handles the section 

import Image from 'next/image';
import Link from 'next/link';


const Section = () => {



    return(

        <section  id="#about" className="flex flex-col items-center justify-center bg-secondary-100 z-0 sm:flex-row md:flex-row lg:flex-row">
            <div className='flex flex-col md:flex-col items-center'>
                <div className='flex flex-col justify-center text-center mt-5'>
                    <h1 className='text-4xl font-bold tracking-widest font-basefont antialiased'>Afrolingo</h1>
                    <p className="">The modern way of learning african language</p>

                </div>
               
                <div className='flex items-center justify-start p-0 md:mt-10'>
                    <Link href="/google-play"><Image src="/download_icons/google-play.png" className=' cursor-pointer' width={550} height={350} /></Link>
                    
                    <Link href="/ios-store"><Image src="/download_icons/ios-store.png" className='cursor-pointer' width={600} height={200} /></Link>
                </div>

            </div>
            
            
            {/* sampe ui/ux */}
            <div className='mt-2 pl-20' >
                <Image src="/ux-sample/afro-ux-3.png" alt="sample-ux" className="pl-10" width={700} height={900} />
            </div>
        </section>


    );

}


export default Section;