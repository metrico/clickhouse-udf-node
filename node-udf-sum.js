#!/usr/bin/node

/* Example async UDF for clickhouse */
/* SUM two integers */

async function read(stream) {
   const chunks = [];
   for await (const chunk of stream) chunks.push(chunk);
   return Buffer.concat(chunks).toString('utf8');
}

async function init(){
  var input = await read(process.stdin);
  const parsed = input.slice(0,-1).split('\t');
  var sum = parseInt(parsed[0]) + parseInt(parsed[1])
  console.log(sum);
}

init();