# sqlite-typeorm-problem
Just some code to demonstrate a problem with typeorm and sqlite

# How to reproduce
Please execute the following steps:

* Checkout this code
```
git clone https://github.com/Tobias4872/sqlite-typeorm-problem.git
```
* Move into the directory:
```
cd sqlite-typeorm-problem
```
* Install packages
```
npm install
```
* Run
```
node index.js
```

# The problem

You will see an output similar to the following:

```
executing query: SELECT * FROM sqlite_master WHERE type = 'table' AND name IN ('zone', 'site', 'publisher', 'player_specification')
executing query: BEGIN TRANSACTION
executing query: CREATE TABLE "zone" ("id" integer NOT NULL PRIMARY KEY AUTOINCREMENT, "name" character varying(128) NOT NULL, "site" integer, "playerSpecification" integer)
executing query: CREATE TABLE "site" ("id" integer NOT NULL PRIMARY KEY AUTOINCREMENT, "name" character varying(128) NOT NULL, "publisher" integer)
executing query: CREATE TABLE "publisher" ("id" integer NOT NULL PRIMARY KEY AUTOINCREMENT, "name" character varying(128) NOT NULL)
executing query: CREATE TABLE "player_specification" ("id" integer NOT NULL PRIMARY KEY AUTOINCREMENT, "name" character varying(128) NOT NULL, "publisher" integer)
executing query: CREATE TABLE "temporary_zone" ("id" integer NOT NULL PRIMARY KEY AUTOINCREMENT, "name" character varying(128) NOT NULL, "site" integer, "playerSpecification" integer, FOREIGN KEY("site") REFERENCES "site"("id"), FOREIGN KEY("playerSpecification") REFERENCES "player_specification"("id") ON DELETE CASCADE)
executing query: CREATE TABLE "temporary_site" ("id" integer NOT NULL PRIMARY KEY AUTOINCREMENT, "name" character varying(128) NOT NULL, "publisher" integer, FOREIGN KEY("publisher") REFERENCES "publisher"("id"))
executing query: CREATE TABLE "temporary_player_specification" ("id" integer NOT NULL PRIMARY KEY AUTOINCREMENT, "name" character varying(128) NOT NULL, "publisher" integer, FOREIGN KEY("publisher") REFERENCES "publisher"("id"))
executing query: INSERT INTO "temporary_zone"("id", "name", "site", "playerSpecification") SELECT "id", "name", "site", "playerSpecification" FROM "zone"
executing query: INSERT INTO "temporary_site"("id", "name", "publisher") SELECT "id", "name", "publisher" FROM "site"
executing query: INSERT INTO "temporary_player_specification"("id", "name", "publisher") SELECT "id", "name", "publisher" FROM "player_specification"
executing query: DROP TABLE "zone"
executing query: DROP TABLE "site"
executing query: DROP TABLE "player_specification"
executing query: ALTER TABLE "temporary_zone" RENAME TO "zone"
executing query: ALTER TABLE "temporary_site" RENAME TO "site"
query failed: DROP TABLE "player_specification"
executing query: ROLLBACK
{ Error: SQLITE_ERROR: no such table: main.site
    at Error (native) errno: 1, code: 'SQLITE_ERROR' }
```
