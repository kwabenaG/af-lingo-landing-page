// handles the counter



const Counter = () => {


    return(
        <>
            <div className="flex flex-col mb-5 md:flex-row lg:flex justify-between w-full">
                <div className="flex p-0 justify-center md:w-2/6">
                <lottie-player src="https://assets2.lottiefiles.com/packages/lf20_pr1wd00z.json"  background="transparent"  speed="1"  style={{ width: 300, height: 300 }}  loop autoplay></lottie-player>
                </div>
                
                <div className="flex p-10 justify-center md:w-full">
                    <p>counter ounter ounter ounter ounter ounter ounter ounter ounter ounter ounter ounter</p>
                </div>
                
            </div>
        </>
    )

}

export default Counter;