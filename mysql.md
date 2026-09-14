## MySQL 常用命令速查

---

### 一、连接与退出

| 命令                              | 说明           |
| --------------------------------- | -------------- |
| `mysql -u root -p`                | 登录 MySQL     |
| `exit;` 或 `quit;`                | 退出 MySQL     |
| `mysql -u root -p -h 192.168.1.1` | 连接远程 MySQL |

---

### 二、数据库操作

| 命令                     | 说明               |
| ------------------------ | ------------------ |
| `SHOW DATABASES;`        | 查看所有数据库     |
| `CREATE DATABASE my_db;` | 创建数据库         |
| `DROP DATABASE my_db;`   | 删除数据库         |
| `USE my_db;`             | 切换到指定数据库   |
| `SELECT DATABASE();`     | 查看当前所在数据库 |

---

### 三、表操作

| 命令                                                | 说明                   |
| --------------------------------------------------- | ---------------------- |
| `SHOW TABLES;`                                      | 查看当前库所有表       |
| `DESC users;`                                       | 查看表结构             |
| `SHOW CREATE TABLE users;`                          | 查看建表语句           |
| `CREATE TABLE users (...);`                         | 创建表                 |
| `DROP TABLE users;`                                 | 删除表                 |
| `TRUNCATE TABLE users;`                             | 清空表数据（重置自增） |
| `ALTER TABLE users ADD COLUMN phone VARCHAR(20);`   | 添加列                 |
| `ALTER TABLE users DROP COLUMN phone;`              | 删除列                 |
| `ALTER TABLE users MODIFY COLUMN age TINYINT;`      | 修改列类型             |
| `ALTER TABLE users CHANGE COLUMN age user_age INT;` | 修改列名               |

---

### 四、数据操作（CRUD）

#### 增（INSERT）

| 命令                                                         | 说明     |
| ------------------------------------------------------------ | -------- |
| `INSERT INTO users (name, age) VALUES ('张三', 18);`         | 插入一条 |
| `INSERT INTO users (name, age) VALUES ('李四', 20), ('王五', 22);` | 插入多条 |

#### 查（SELECT）

| 命令                                         | 说明       |
| -------------------------------------------- | ---------- |
| `SELECT * FROM users;`                       | 查询所有   |
| `SELECT name, age FROM users;`               | 查询指定列 |
| `SELECT * FROM users WHERE age > 18;`        | 条件查询   |
| `SELECT * FROM users WHERE name LIKE '张%';` | 模糊查询   |
| `SELECT * FROM users ORDER BY age DESC;`     | 排序       |
| `SELECT * FROM users LIMIT 10 OFFSET 0;`     | 分页       |
| `SELECT DISTINCT age FROM users;`            | 去重       |

#### 改（UPDATE）

| 命令                                                     | 说明                     |
| -------------------------------------------------------- | ------------------------ |
| `UPDATE users SET age = 20 WHERE id = 1;`                | 修改数据（必须加 WHERE） |
| `UPDATE users SET age = 20, name = '李四' WHERE id = 1;` | 修改多列                 |

#### 删（DELETE）

| 命令                              | 说明                     |
| --------------------------------- | ------------------------ |
| `DELETE FROM users WHERE id = 1;` | 删除数据（必须加 WHERE） |
| `DELETE FROM users;`              | 删除所有数据（危险！）   |

---

### 五、聚合函数

| 命令                          | 说明     |
| ----------------------------- | -------- |
| `SELECT COUNT(*) FROM users;` | 统计行数 |
| `SELECT SUM(age) FROM users;` | 求和     |
| `SELECT AVG(age) FROM users;` | 平均值   |
| `SELECT MAX(age) FROM users;` | 最大值   |
| `SELECT MIN(age) FROM users;` | 最小值   |

---

### 六、分组与过滤

| 命令                                                         | 说明       |
| ------------------------------------------------------------ | ---------- |
| `SELECT age, COUNT(*) FROM users GROUP BY age;`              | 分组统计   |
| `SELECT age, COUNT(*) FROM users GROUP BY age HAVING COUNT(*) > 1;` | 分组后过滤 |

---

### 七、多表查询（JOIN）

| 命令                                                         | 说明   |
| ------------------------------------------------------------ | ------ |
| `SELECT * FROM users INNER JOIN orders ON users.id = orders.user_id;` | 内连接 |
| `SELECT * FROM users LEFT JOIN orders ON users.id = orders.user_id;` | 左连接 |
| `SELECT * FROM users RIGHT JOIN orders ON users.id = orders.user_id;` | 右连接 |

---

### 八、常用函数

| 命令                                     | 说明       |
| ---------------------------------------- | ---------- |
| `SELECT NOW();`                          | 当前时间   |
| `SELECT CURDATE();`                      | 当前日期   |
| `SELECT CONCAT(first, last) FROM users;` | 字符串拼接 |
| `SELECT UPPER(name) FROM users;`         | 转大写     |
| `SELECT LENGTH(name) FROM users;`        | 字符串长度 |
| `SELECT YEAR(created_at) FROM users;`    | 提取年份   |

---

### 九、用户与权限

| 命令                                                    | 说明     |
| ------------------------------------------------------- | -------- |
| `CREATE USER 'tom'@'localhost' IDENTIFIED BY '123456';` | 创建用户 |
| `GRANT ALL ON my_db.* TO 'tom'@'localhost';`            | 授权     |
| `REVOKE ALL ON my_db.* FROM 'tom'@'localhost';`         | 撤销权限 |
| `DROP USER 'tom'@'localhost';`                          | 删除用户 |
| `FLUSH PRIVILEGES;`                                     | 刷新权限 |

---

### 十、备份与恢复

| 命令                                      | 说明       |
| ----------------------------------------- | ---------- |
| `mysqldump -u root -p my_db > backup.sql` | 备份数据库 |
| `mysql -u root -p my_db < backup.sql`     | 恢复数据库 |

---

### 十一、总结

```text
增删改查（CRUD）：
INSERT  → 增
SELECT  → 查
UPDATE  → 改
DELETE  → 删

DDL 结构操作：
CREATE  → 创建
DROP    → 删除
ALTER   → 修改
SHOW    → 查看
DESC    → 查看结构

危险操作三件套：
UPDATE 和 DELETE 一定要加 WHERE！
```