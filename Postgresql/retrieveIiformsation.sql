postgres=# \l

postgres=# \c kineteco

SELECT * FROM manufacturing.products;

SELECT COUNT (manufacturing.products.name) FROM manufacturing.products;

SELECT COUNT (name) FROM manufacturing.products;

Select count(manufacturing_cost) From manufacturing.products;

Select AVG (category_id) From manufacturing.products;  


SELECT name, manufacturing_cost
FROM manufacturing.products
WHERE category_id = 3
;

SELECT name, manufacturing_cost, category_id
FROM manufacturing.products
WHERE category_id < 3
; 
=> ERROR:  operator does not exist: money < integer
=> LINE 3: WHERE manufacturing_cost < 10

SELECT name, manufacturing_cost, category_id
FROM manufacturing.products
WHERE manufacturing_cost < '$10'
;


SELECT products.product_id,
	   products.name,
	   products.manufacturing_cost,
	   categories.name,
	   categories.market	   
FROM manufacturing.products JOIN manufacturing.categories
	on products.category_id = categories.category_id
;


SELECT products.product_id,
	   products.name ,
	   products.manufacturing_cost,
	   categories.name,
	   categories.market	   
FROM manufacturing.products JOIN manufacturing.categories
	on products.category_id = categories.category_id
WHERE market = 'industrial'
;

SELECT products.product_id,
	   products.name as product_name,
	   products.manufacturing_cost,
	   categories.name as category_name,
	   categories.market	   
FROM manufacturing.products JOIN manufacturing.categories
	on products.category_id = categories.category_id
WHERE market = 'industrial'
;

SELECT products.name	   	   
FROM manufacturing.products 
WHERE products.manufacturing_cost > '$5'	
;

// write a query that returns employees who work in the south bulding department
SELECT employees.first_name,
	   employees.last_name,
	   department.department_name
FROM human_resources.employees JOIN human_resources.department
	ON employees.department_id = department.department_id
WHERE department.bulding = 'South'
;