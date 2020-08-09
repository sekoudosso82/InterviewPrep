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

// create index 
CREATE INDEX department_department_id_idx
    ON human_resources.department USING btree
    (department_id ASC NULLS LAST)
;

// add index to employe table

CREATE INDEX employees_employee_id_idx
    ON human_resources.employees USING btree
    (employee_id ASC NULLS LAST)
;

// add default value to a column

ALTER TABLE manufacturing.products
    ALTER COLUMN category_id SET DEFAULT 4;

// add constrain
ALTER TABLE manufacturing.categories
    ADD CONSTRAINT cxategories_market_check CHECK (market = 'domestic' OR market = 'industrial');

// add index to employee last_name column 
CREATE INDEX employees_last_name_id_idx
    ON human_resources.employees USING btree
    (first_name ASC NULLS LAST)
;

// add constrain to employee hire_date

ALTER TABLE human_resources.employees
    ADD CONSTRAINT employee_hire_date 
	CHECK (hire_date > '2020-01-01')
    NOT VALID;