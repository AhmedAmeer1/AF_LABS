//Question 1 -----------------------
console.log('Hello World')

//Question 2 -------------------------
const os = require('os');
console.log('Architecture ' + os.arch());
console.log('CPUs ' + os.cpus().length);
console.log('OS ' + os.platform());

//Question 3 ---------------------------
const fs = require('fs')
const fileName = './test.txt';

fs.readFile(fileName, (err, data) => {
    if (err) {
        console.error(err);
    }
    
    console.log(data.toString());
});

const data = fs.readFileSync(fileName);
console.log(data.toString());

//Question 4 --------------------
const fileName2 = './test.txt';
const copyfileName = './test-copy.txt';

const readStream = fs.createReadStream(fileName2);
const writeStream = fs.createWriteStream(copyfileName);

readStream.pipe(writeStream);

readStream.on('data', data => {
    console.log(data.toString());
});

//Question 5 -----------------

/* const http = require('http');

http.createServer((req, res) => {
    res.setHeader('Content-Type', 'text/html');
    res.write('<h1>Hello World</h1>');
    res.end();
}).listen(3000); */

const http = require('http');
http.createServer((req, res) => {
    res.setHeader('Content-Type', 'text/html');
    switch (req.method) {
        case 'GET':
            res.write('<h1>Hello World</h1>');
            res.end();
        break;
        case 'POST':
            req.on('data', data => {
                res.write('<h1>Hello ' + data + '</h1>');
                res.end();
            });
            break;
            }
        }).listen(3000, (err) => {
            console.log('Server is listening to port 3000')
        });


//End of Lab sheet 
