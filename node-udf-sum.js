#!/usr/bin/node

/* Example async UDF for clickhouse */
/* SUM two integers */

async function read(stream) {
   const chunks = [];
   for await (const chunk of stream) chunks.push(chunk);
   return Buffer.concat(chunks).toString('utf8');
}

async function init(){
  // Read full STDIN
  var input = await read(process.stdin);
  // Remove the last /n and split by /t
  const parsed = input.slice(0,-1).split('\t');
  // Perform any logic
  var sum = parseInt(parsed[0]) + parseInt(parsed[1])
  // Print results back to stdout
  console.log(sum);
}

init();