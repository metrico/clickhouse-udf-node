# ClickHouse NodeJS UDF

### NodeJS Function
Create an executable NodeJS script
- read input from stdin
- split row values by tabs
- return some output

### ClickHouse UDF
Create a UDF Function to invoke your NodeJS script 

### Use UDF
```
SELECT test_node(11, 50)

Query id: f98a5f83-4e94-41d0-9d9f-78b37d3af152

┌─test_node(11, 50)─┐
│                61 │
└───────────────────┘

1 rows in set. Elapsed: 0.044 sec. 
```