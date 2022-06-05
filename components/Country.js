// handles the african countries

import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';


// thired party imports
 


const Country = ({ flag, name }) => {

  // TODO: add a flag image caorusel here

  //TODO: 
  return (
    
        <div className="flex w-full bg-quaternary-100 p-0 ">
          <div>
            <p className='items-center'>{name}</p>

            <Image src={flag} alt={name} width={100} height={50}/>
          </div>
        </div>
    );
}

export default Country;
