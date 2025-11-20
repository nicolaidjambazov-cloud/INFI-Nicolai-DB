SELECT a.id AS Zahl, b.id
FROM numbers a
INNER JOIN numbers b ON a.id = b.id + 2
WHERE a.id BETWEEN 1000000 AND 2000000;
