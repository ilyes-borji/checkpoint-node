const net =require('net');
// console.log(net)
const moment =require('moment');

// console.log(moment)
const port =process.argv[2]
const server =net.createServer(socket=>{
const time = moment().format('YYYY-MM-DD HH:mm');
socket.write(time);
socket.end('\n');
})
server.listen(port)