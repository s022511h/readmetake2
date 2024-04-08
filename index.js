// Directives
"use strict";
// Imports
import * as http from "http";
import * as colors from "colors";
// Constants
const port = 8080;
// Create server at 127.0.0.1:8080
http.createServer((req, res) =>
{
    /*** This is equal to response.write followed by response.end
     * * end only sends text, does not set "Content-Type" unless you explicitly do so
     * * send can respond with html, json etc
     * **/
    console.log(req.headers['user-agent']);
    switch(req.url)
    { 
        case "/comp50016":
            res.end("SSP");
            console.log("Module code route".green);
            break;
            case "/favicon.ico":
            console.log("Favicon request".green);
            break;
            default:
                res.end("Hello World");
                console.log("No route specified".red);
                break;
        }
}).listen(port);
console.log(`Server listening on ${port}`.yellow);