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

SELECT test_node_json('{"processed":false}') AS test

*/

async function read(stream) {
   const chunks = [];
   for await (const chunk of stream) chunks.push(chunk);
   return Buffer.concat(chunks).toString('utf8');
}

(async function() {
  var input = await read(process.stdin);
  var parsed = JSON.parse(input.trim());
  // do something with the JSON object
  parsed['processed'] = true;
  // return
  console.log(parsed);
})();
