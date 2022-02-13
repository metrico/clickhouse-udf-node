#!/usr/bin/node

/* Clickhouse UDF Function */
/* 

<functions>
    <function>
        <type>executable</type>
        <name>test_node_json</name>
        <return_type>String</return_type>
        <argument>
            <type>String</type>
        </argument>
        <format>TabSeparated</format>
        <command>node-udf-dns.js</command>
        <lifetime>1</lifetime>
    </function>
</functions>

SELECT test_node_json('qxip.net') AS test

Query id: 97425c14-d296-4db8-8c8e-e13ed7988ec3

┌─test──────────────────────────────────┐
│ address: "172.67.yyy.xx" family: IPv4 │
└───────────────────────────────────────┘

1 rows in set. Elapsed: 0.070 sec. 

*/

const dns = require('dns');
async function read(stream) {
   const chunks = [];
   for await (const chunk of stream) chunks.push(chunk);
   return Buffer.concat(chunks).toString('utf8');
}

(async function() {
  var input = await read(process.stdin);
  var parsed = input.trim().split('\t')[0];
  // perform a dns lookup
  dns.lookup(parsed, (err, address, family) => {
    console.log('address: %j family: IPv%s', address, family);
  });
})();
