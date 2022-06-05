// handles the main content

import { React} from 'react'
import Typewriter from 'typewriter-effect'

const Main = () => {



    return(
        <>
            <div className="flex flex-col mb-5 md:flex-row lg:flex justify-between w-full">

                {/* left section  */}
                {/* small writings */}
                <div className="flex flex-col ml-5 mr-5 mb-auto mt-4 sm:ml-10 md:ml-40 lg:ml-40 sm:w-fit md:w-1/2">
                    
                    <div className="flex min-w-full mb-10 text-center md:mt-20">
                        <Typewriter onInit={(typewriter) => {
                            typewriter.typeString('Afrolingo')
                            .pauseFor(2500)
                            .deleteAll()
                            .typeString('Afrolingo')
                            .pauseFor(2500)
                            .deleteAll()
                            .typeString('Afrolingo')
                            .pauseFor(2500)
                            .deleteAll()
                            .start();
                        } } options={{
                            autoStart: true,
                            loop: true,
                            delay: 50,
                            deleteSpeed: 100,
                            }}

                        
                        />
                        <p className="text-md text-gray-100 text-fontbase">Learn African languages with
                            <span className="font-afrolingo text-2xl sm:text-3xl tracking-wide p-1">Afro Lingo</span>
                        </p>
                    </div>

                    {/* bigger writtings */}
                    <div className="flex flex-col w-full">
                        <p className="text-4xl font-basefont font-bold tracking-normal items-baseline">
                            Learn a language for free. <span className="pl-4">Forever.</span>
                        </p>

                        <p className="text-gray-100 text-fontbase pt-10">
                            &quot;Make it both cool and clever to know an African language.&quot; ~ 
                        </p>

                        <p className="pt-6 mr-2 leading-loose">If you know all the languages of the world and you don&quot;t know your mother tongue or the language of your culture, 
                            that is enslavement. But if you know your mother tongue or the language of 
                            your culture, and add all the other languages of the world to it, that is empowerment.
                        </p>

                        <p className="pt-6 leading-normal">
                        Learning another language is not only learning different words for the same things, but learning another way to think about things
                        </p>
                    </div>


                    <button className="sm:w-40 md:w-40 mt-10 p-2 rounded-tl-lg rounded-bl-lg rounded-tr-md rounded-br-md bg-secondary-100 cursor-pointer">
                        <a href="#" className="text-2xl font-fontbase">Get Started</a>
                    </button>

                </div>



                {/* right section  */}
                <div className="flex w-full md:flex md:w-1/2 lg:w-1/2">
                    <div className="flex bg-center h-96 w-full md:min-h-full bg-contain bg-no-repeat bg-afrolingo-bg-2">
                        <p className=""></p>
                    </div>
                </div>

                {/* <div className=" text-center sm:w-full">
                    <p className="">African Countries goes here </p>
                </div> */}

            </div>
        </>
      
        
    );
}


export default Main;