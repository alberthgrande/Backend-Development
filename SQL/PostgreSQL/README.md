# GENERATE SQL DATA WEBSITE

- LINK : [MOCKAROO](https://www.mockaroo.com/)

# IMPORT THE FILE FROM DOCKER

**_Windows Powershell_**

```
Get-Content "E:\Backend Developer\backend-development\SQL\PostgreSQL\orders.sql" |
docker exec -i local-postgres psql -U psqluser -d test

```

**_Git Bash_**

```
cat /e/Backend\ Developer/backend-development/SQL/PostgreSQL/orders.sql | docker exec -i localhost-postgres psql -U psqluser -d test
```

### SQL JOIN

```
SELECT
    users.first_name,
    orders.id AS order_id,
    products.product_name,
    order_items.quantity
FROM users
JOIN orders
    ON users.id = orders.user_id
JOIN order_items
    ON orders.id = order_items.order_id
JOIN products
    ON order_items.product_id = products.id
ORDER BY users.first_name ASC;
```
