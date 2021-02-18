-- write your code in PostgreSQL 9.4
SELECT inv_num, sum(price)
From invoice_items 
GROUP BY inv_num 
ORDER BY inv_num DESC