# SELECT queries

__SQL__'s common convention is to write SQL statements in _UPPERCASE_ letters but it's __not necessary__. It's okay to write in all _lowercase_ letters.

### SELECT...FROM
 
__SELECT__ ... __FROM__ is used to __fetch data__ from a table specifically the __columns__ of a table.

#### Syntax
```SQL
-- to retrieve all columns in the data_table_name table

-- in UPPERCASE
SELECT * FROM table_name

-- or in lowercase
select * from table_name

-- exactly the same thing
``` 
__Note:__ __Asterisks `*`__ is used as a shortcut for __"all columns"__.

<br>

__Data table: Movies__

|Id  | Title         | Director       | _Year  | Length_min |
| -- |:-------------:|:--------------:|:------:|:----------:|
|1	 | Toy Story   	 | John Lasseter  | 1995   | 81         |
|2	 | A Bug's Life	 | John Lasseter  | 1998	 | 95         |
|3	 | Toy Story 2	 | John Lasseter  | 1999	 | 93         |
|4	 | Monsters, Inc.| Pete Docter	  | 2001	 | 92         |
|5	 | Finding Nemo  | Andrew Stanton | 2003	 | 107        |


#### To select specific columns in a table

```SQL
-- no limit on retrieving specific columns
SELECT Title, _Year, Length_minutes FROM Movies

-- retrieves only Title, _Year, and Length_min columns
```