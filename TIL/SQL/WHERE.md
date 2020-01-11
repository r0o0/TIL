# Queries with limits using WHERE

__Data table: Movies__

|Id  | Title         | Director       | _Year  | Length_min |
| -- |:-------------:|:--------------:|:------:|:----------:|
|1	 | Toy Story   	 | John Lasseter  | 1995   | 81         |
|2	 | A Bug's Life	 | John Lasseter  | 1998	 | 95         |
|3	 | Toy Story 2	 | John Lasseter  | 1999	 | 93         |
|4	 | Monsters, Inc.| Pete Docter	  | 2001	 | 92         |
|5	 | Finding Nemo  | Andrew Stanton | 2003	 | 107        |

### WHERE
Use __WHERE__ to __filter data__ from a table by giving it a __condition__ that is __applied to each row__ of data to determine which row to retrieve.

#### Syntax
```SQL
SELECT * FROM Movies
WHERE _Year = "2003" -- condition
  AND Title like "Find%" -- another condition
  OR Director like "%Lasseter";
-- retrieves rows that has 
-- a string value of "2003" in column _Year
-- and a string value starting with "Find" in column Title
-- or a string value ending with "Lasseter" in column Director
```

#### Operator in SQL
1. _SQL_ uses the __standard numerical operators `=`, `!=`, `<`, `<=`, `>`, `>=`__.  
2. __BETWEEN...AND...__: number is within range of two values (inclusive)
  ```SQL
  SELECT * FROM Movies
  WHERE Id BETWEEN 2 AND 5
  -- will retrieve row with Id of 2, 3, 4, 5
  ```
3. NOT BETWEEN...AND...: number that is not within range of two values (inclusive
  ```SQL
  SELECT * FROM Movies
  WHERE Id BETWEEN 2 AND 5
  -- will retrieve row with Id of 1
  ```
4. IN (...): 	number that exists in a list
  ```SQL
    SELECT * FROM Movies
    WHERE Id IN (2, 3, 5)
    -- will retrieve row with Id of 2, 3, 5
  ```
5. NOT IN (...): number that does not exist in a list
  ```SQL
    SELECT * FROM Movies
    WHERE Id NOT IN (2, 3, 5)
    -- will retrieve row with Id of 1 and 4
  ```