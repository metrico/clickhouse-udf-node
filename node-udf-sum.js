#!/usr/bin/node
/* Example async UDF for clickhouse, chmod +x */

async function read(stream) {
   const chunks = [];
   for await (const chunk of stream) chunks.push(chunk);
   return Buffer.concat(chunks).toString('utf8');
}

/* SUM two integers */
(async function() {  
   // Read full STDIN
   var input = await read(process.stdin);
   // Trim and Split by /t
   const parsed = input.trim().split('\t');
   // Perform any logic
   var sum = parseInt(parsed[0]) + parseInt(parsed[1])
   // Print results back to stdout
   console.log(sum);
})();
