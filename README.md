<img src="https://user-images.githubusercontent.com/1423657/147935343-598c7dfd-1412-4bad-9ac6-636994810443.png" width=220 >

# ClickHouse NodeJS UDF
This basic example illustrates a simple `sum` NodeJS powered Clickhouse UDF function

##### ⏱️ Why
> Clickhouse is super fast and already has all the functions one could dream. What is this for?

This example is designed to understand the underlying formats and unleash imagination for integrators.

<br><br>

### NodeJS Function
Create an [executable NodeJS script](https://github.com/metrico/clickhouse-udf-node/blob/main/node-udf-sum.js)
- read input from stdin
- split row values by tabs
- return some output

> In our example we'll just accept two integers and sum them

### ClickHouse UDF
Configure a [UDF Function](https://github.com/metrico/clickhouse-udf-node/blob/main/node_function.xml) to invoke your script 
- use directory `/var/lib/clickhouse/user-scripts` to store user-scripts

### Use UDF
```
SELECT node_sum(10, 20)

Query id: f98a5f83-4e94-41d0-9d9f-78b37d3af152

┌─node_sum(10, 20)-─┐
│                30 │
└───────────────────┘

1 rows in set. Elapsed: 0.054 sec. 
```
