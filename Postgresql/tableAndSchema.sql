CREATE TABLE manufacturing.products
(
    product_id character varying(10) NOT NULL,
    name character varying(100) NOT NULL,
    power integer,
    manufacturing_cost money NOT NULL,
    category_id integer NOT NULL,
    PRIMARY KEY (product_id)
);

CREATE TABLE manufacturing.catgegorie
(
    "category-id" integer NOT NULL,
    name character varying(50) NOT NULL,
    market character varying(20) NOT NULL,
    PRIMARY KEY ("category-id")
);

SELECT * FROM manufacturing.products;

ALTER TABLE manufacturing.products
    ADD FOREIGN KEY (category_id)
    REFERENCES manufacturing.catgegorie ("category-id") MATCH SIMPLE
    ON UPDATE CASCADE
    ON DELETE NO ACTION;

    CREATE TABLE human_resources.employees
    (
        employee_id integer NOT NULL,
        first_name character varying(20) NOT NULL,
        last_name character varying(20) NOT NULL,
        hire_date date NOT NULL,
        PRIMARY KEY (employee_id)
    );

    CREATE TABLE human_resources.department
    (
        department_id integer NOT NULL,
        department_name character varying(20) NOT NULL,
        bulding character varying(20) NOT NULL,
        PRIMARY KEY (department_id)
    );

    ALTER TABLE human_resources.employees
    ADD COLUMN department_id integer;   
