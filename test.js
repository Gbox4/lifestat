const { readFileSync } = require('fs');
const { Client } = require('ssh2');

const conn = new Client();
conn.on('ready', () => {
  conn.exec('arp -a', (err, stream) => {
    if (err) throw err;
    stream.on('close', (code, signal) => {
      conn.end();
    }).on('data', (data) => {
      console.log('' + data);
    }).stderr.on('data', (data) => {
      console.log('STDERR: ' + data);
    });
  });
}).connect({
  host: '192.168.1.1',
  port: 22,
  username: 'root',
  privateKey: readFileSync('/home/gabe/.ssh/id_rsa.pem')
});
