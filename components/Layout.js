// handles the basic layout of the page

import Head from 'next/head';
import Script from 'next/script';   




const Layout = ({title, description, keyword, children }) => {

    return(
        <div>
            <Head>
                <title>{title}</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <meta name="description" content={description} />
                <meta name="keyword" content={keyword} />
            </Head>


                <style>
                    @import url('https://fonts.googleapis.com/css2?family=Varela+Round&display=swap');
                    @import url('https://fonts.googleapis.com/css2?family=Kaushan+Script&family=Oleo+Script&display=swap');
                </style>

                {/* <Script src="https://unpkg.com/embla-carousel/embla-carousel.umd.js" strategy="LazyOnLoad" /> */}
                <Script src="https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js"  />
            

            <div className="">{children}</div>
        </div>
    );

}



// default props
Layout.defaultProps = {

    title: 'Af Lingo',
    description: 'Af Lingo is a platform for people to learn African languages',
    keyword: 'top notch aflingo learning platform, language learn app, african language, afrolingo',
    
}

export default Layout;