// handles the section link

import { getStaticPaths } from "next";

export default getStaticPaths = async (req, res)  => {

    res.status(200).json({data: 'hello all sections page'})
    


};