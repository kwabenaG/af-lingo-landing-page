// handles the footer

import {useState, useEffect} from 'react';



const Footer = () => {
    

    //show arrow to page top when scrolling down ends
    useEffect(() => {
        const arrow_up = document.querySelector('.arrow_up');

        //scroll event ==> toggles the arrow up when scrolling down
        window.addEventListener('scroll', (e) => {
            e.preventDefault();
            // console.log(window.scrollY);
            if(window.scrollY > 120 && window.innerHeight > 1000)
            {
                arrow_up.classList.add('flex');

            }else if( window.scrollY == 0){

                arrow_up.classList.add('hidden');

            }else {
                arrow_up.classList.remove('hidden');
            }
        });

        //action to scroll to top
        arrow_up.addEventListener('click', (e) => {
            e.preventDefault();
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            })
        })
// 631

    },[])



    // current year 
    const date = new Date().getFullYear();

    return(
        <>
        <footer className="flex flex-col flex-wrap text-center w-full mt-10 md:pl-32 md:pr-32 md:text-left lg:text-left ">
            {/* footer script */}
            {/* <div className="flex flex-col justify-start">
                <p className="text-xl font-semibold tracking-wide">afrolingo</p>
         
            </div> */}

            {/* usefullinks */}
            <div className="flex flex-col md:flex-row pb-5 md:pb-2 justify-between w-full">
                <div className="flex flex-col mb-4 w-full md:mb-0 md:w-1/2 lg:w-1/3">
                    <h2 className="font-bold tracking-widest text-2xl font-basefont ">afrilingo</h2>
                    <ul className="space-y-2 text-sm font-italic" >
                        <li>learn african language with <span className='tracking-wide'>afrilingo</span></li>
                    </ul>
                </div>


                <div className="flex flex-col w-full pb-5 md:pb-2 md:w-1/2 lg:w-1/3 ">
                    <h2 className="font-bold tracking-widest">Useful links</h2>
                    <ul className="space-y-2 list-none">
                        <li>Home</li>
                        <li>Blog</li>
                        <li>Forum</li>
                    </ul>
                </div>

                <div className="flex flex-col w-full pb-5 md:pb-2 md:w-1/2 lg:w-1/3">
                    <h2 className="font-bold tracking-widest">Useful links</h2>
                    <ul className="space-y-2 list-none">
                        <li>Home</li>
                        <li>Blog</li>
                        <li>Forum</li>
                    </ul>
                </div>



                <div className="flex flex-col w-full md:w-1/2 lg:w-1/3">
                    <h2 className="font-bold tracking-widest">Download from iOS or Android</h2>
                    <ul className="space-y-2">
                        <li>Home</li>
                        <li>Blog</li>
                        <li>Forum</li>
                    </ul>
                </div>


            </div>

            {/* copywrite */}
            <div className="flex w-full justify-evenly ">
                <div className="flex md:w-5/6 md:justify-center items-baseline mt-4 mb-4">
                    <p className="text-center md:text-center lg:text-center">&copy; {date} <span className='tracking-widest'>Afrilingo.</span> All rights and reserved.</p>
                </div>


                {/* arrow top icon */}
                <div className="fixed pl-2 bottom-10 right-0 justify-end md:pl-2 z-30 mr-4">
                    <div className="hidden p-5 text-gray-100 bg-secondary-100 rounded-full duration-100 ease-in-out arrow_up">
                        <svg xmlns="http://www.w3.org/2000/svg" className=" h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M3.293 9.707a1 1 0 010-1.414l6-6a1 1 0 011.414 0l6 6a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L4.707 9.707a1 1 0 01-1.414 0z" clipRule="evenodd" />
                        </svg>
                    </div>
                </div>
            </div>

        </footer>
        </>
    );
}



export default Footer;