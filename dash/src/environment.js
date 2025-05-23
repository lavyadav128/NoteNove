// const server ="https://notes-szjj.onrender.com"

// export default server;


let IS_PROD = true;
const server = IS_PROD ?
    "https://notes-szjj.onrender.com":
    "http://localhost:3000"


export default server;