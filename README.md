<img src="https://user-images.githubusercontent.com/1423657/147935343-598c7dfd-1412-4bad-9ac6-636994810443.png" width=220 >

# ClickHouse NodeJS UDF

### NodeJS Function
Create an executable NodeJS script
- read input from stdin
- split row values by tabs
- return some output

### ClickHouse UDF
Create a UDF Function to invoke your NodeJS script 
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