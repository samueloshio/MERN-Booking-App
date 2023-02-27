import dotenv from "dotenv";

dotenv.config()        // to initialize dotenv 


function port () {
    PORT: process.env.PORT || 5000
}


export default port