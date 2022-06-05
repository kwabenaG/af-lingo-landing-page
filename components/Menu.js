// handles the menu

import Link from 'next/link';


const Menu = ({ href, label }) => {

    return(
        <div className="flex flex-row text-gray-100">

            <Link href={href}>
                <div className="font-basefont cursor-pointer text-lg">
                    <p className=''>{label}</p>
                </div>
            </Link>

        </div>
        
    );
}

export default Menu;