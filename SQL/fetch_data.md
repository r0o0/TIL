# Fetch Data using SELECT 

__SQL__'s common convention is to write SQL statements in _UPPERCASE_ letters but it's __not necessary__. It's okay to write in all _lowercase_ letters.

### SELECT...FROM

__SELECT__ ... __FROM__ is used to __fetch data__ from a table

#### Syntax
```SQL
-- to retrieve all columns in the data_table_name table

-- in UPPERCASE
SELECT * FROM table_name

-- or in lowercase
select * from table_name

-- exactly the same thing
```
__Note:__ __Asterisks `*`__ is used as a shortcut for __"all columns"__


__Data table__

| ID        | CustomerName       | MarriageStatus  |
| --------- |:------------------:| ---------------:|
| 1         | Samantha Low       | Yes             |
| 2         | Catherine White    | No              |
| 3         | Sarah Coos         | Divorced        |


#### To select specific columns in a table

```SQL
-- no limit on retrieving specific columns
SELECT CutomerName, MarriageStatus FROM table_name

-- retrieves only CustomerName and MarriageStatus columns
```
### WHERE
Use __WHERE__ to __filter data__ from a table.

#### Syntax
```SQL
SELECT * FROM table_name
WHERE MarriageStatus = "No"

-- retrieves only data with that has MarriageStatus of "No"
```





