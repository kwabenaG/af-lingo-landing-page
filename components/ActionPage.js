// handles the next section below it 

import Image from 'next/image'

const ActionPage = () => {



    return(
        <>
            <section className="flex bg-sub_color-100 pl-10 pr-10 pt-5">
                <div className="flex flex-col md:flex-row mb-4">
                    {/* <p className='text-blue-500'>page</p> */}
                    <Image src="/nyu.png" className=' text-gray-100' width={400} height={122} alt={'nyu'}/>
                    <Image src="/nyu.png" className=' ' width={400} height={122} alt={'sponsors'}/>
                    <Image src="/nyu.png" className=' ' width={400} height={122} alt={'sponsors'}/>
                    <Image src="/nyu.png" className='' width={400} height={122} alt={'sponsors'}/>
                </div>
            </section>
        
        
        
        
        </>
       
    );

}


export default ActionPage;
