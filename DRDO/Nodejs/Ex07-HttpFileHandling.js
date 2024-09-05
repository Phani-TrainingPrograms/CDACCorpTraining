const http = require('http'); //For the http services
const fs = require('fs'); //For File IO operation. 
const parse = require("url").parse; //For handling GET feature
const qs = require("querystring");//For handling Post operations. 

const root  = __dirname;
const port = 1234;

function renderPage(fileName, res){
    const file = root + fileName;
    fs.createReadStream(file).pipe(res);
}
function processGet(res, inputs){
    const msg = `<h1>Registration successfull</h1><hr/><p>Welcome to Mr.${inputs.txtName}</p><p>UR Email Address is ${inputs.txtEmail}</p><p>The Work Location of UR's is ${inputs.txtLocation} `;
    res.end(msg);
}

function processPost(req, res){
    let inputs = "";
    //handle 2 events: data and end
    req.on("data", (result)=>{
        inputs = result.toString();
    })

    req.on('end', ()=>{
        const data = qs.parse(inputs);
        const msg = `<h1>Registration successfull using POST</h1><hr/><p>Welcome to Mr.${data.txtName}</p><p>UR Email Address is ${data.txtEmail}</p><p>The Work Location of UR's is ${data.txtLocation}</p>`;
    res.end(msg);
    })
}


function process(req, res){
    if(req.url == "/favicon.ico") return; 
    if(req.method == "POST"){
        processPost(req, res);
        return;
    }
    const inputs = parse(req.url, true).query;
    if(inputs.txtName != undefined){
        processGet(res, inputs)
        return;
    }
    switch (req.url) {
        case "/Register" : renderPage("/RegPage.html", res); break;
        case "/getDetails" : res.end("Page is processed"); break;       
        default: renderPage("/ErrorPage.html", res); break;
    }
}

http.createServer((req, res) =>{
    process(req, res)
}).listen(port);

