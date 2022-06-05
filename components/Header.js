// handles the header and menu


import {useState, useEffect} from 'react';

//local imports
import Menu from './Menu';
// import {isServer} from './utils';


const Header = () => {


    // reset scroll height to 0
    useEffect (() => {
        if(history.scrollRestoration)
        {
            history.scrollRestoration = 'manual';
        }else {
            window.onbeforeunload = () => {
                window.scrollTo(0, 0);
            }
        }
    },[])


    // handles the mobile menu responsiveness
    useEffect(
        () => {
            const body = document.getElementsByTagName('body')[0]; // get the body tag
            const mobile_button = document.querySelector('.mobile_menu_button'); //mobile menu button
            const mobile_menu_button_close = document.querySelector('.mobile_menu_button_close'); // close button
            const menu_list = document.querySelector('.mobile_menu');
            
            const active_menu = () => mobile_button.addEventListener('click', (e) => { //
                e.preventDefault();
                menu_list.classList.toggle('-translate-x-full'); // toggles the menu
                mobile_menu_button_close.classList.toggle('hidden'); // toggles the close button
                mobile_button.classList.toggle('hidden'); // toggles the menu button
            });

            // close menu button
            const menu_close= () => mobile_menu_button_close.addEventListener('click', (e) => { //
                e.preventDefault();
                menu_list.classList.toggle('-translate-x-full'); // toggles the close button
                mobile_menu_button_close.classList.toggle('hidden'); // toggles the menu button
                mobile_button.classList.toggle('hidden');
            });
            
            active_menu()
            menu_close()

    },[]);


    return(

        <header className='sticky top-0 bg-tertiary-100  min-w-full z-50'> {/* sticky header */}

            <div className='flex justify-between items-center md:mt-5'>
                {/* logo goes here  */}
                <p className='cursor-pointer text-2xl font-semibold tracking-widest text-gray-200 px-2 py-2 font-basefont md:pl-32 lg:pl-32 z-50'>aflingo</p>

                {/* menu goes here */}
                <div className="flex flex-col absolute duration-100 ease-in-out pl-10 pt-[30rem] mt-10 space-y-5 min-h-screen w-full  z-20 -translate-x-full sm:hidden md:pl-30 md:min-h-fit md:items-center md:flex md:flex-row md:justify-evenly md:pl-96  md:space-y-0 md:space-x-10 md:mt-0 md:py-2 md:translate-x-0 lg:flex bg-tertiary-100 mobile_menu" id ="menu-list">
                    
                    <div className='flex flex-col md:flex-row md:static md:space-x-10 lg:space-x-10'>
                        <Menu href="/home" label = "Home" />
                        <Menu href="/about" label = "About" />
                        <Menu href="/home" label = "Blog" />
                        <Menu href="/about" label = "Forum" />
                    </div>
                   

                    <div className='flex flex-col md:flex-row md:static md:space-x-10 lg:space-x-10'>
                        <Menu href="/home" label = "Learn" />
                        <Menu href="/about" label = "Get Started" />
                    </div>
                </div>


                {/* mobile menu icon goes here */}
                <button className='flex px-2 py-2d sm:flex md:hidden lg:hidden z-30 mobile_menu_button'>
                    <svg xmlns="http://www.w3.org/2000/svg" className="text-gray-200 h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </button>

                {/* close button */}
                <button className='hidden px-2 py-2d sm:hidden md:hidden lg:hidden z-30 mobile_menu_button_close'>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
            </div>
        </header>
        
    );
}


export default Header;