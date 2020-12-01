-- UP
CREATE TABLE Person (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT,
    email TEXT
);

CREATE TABLE Vehicle (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    brand TEXT,
    model TEXT,
    ownerId INTEGER REFERENCES Person(id)
);

INSERT INTO Person (name, email) values ('Gegy', 'testingsqltest@sql.com');
INSERT INTO Person (name, email) values ('Bear', 'testingsqltestagain@sql.com');

INSERT INTO Vehicle (brand, model, ownerId) values ('BMW', 'i8', 1);
INSERT INTO Vehicle (brand, model, ownerId) values ('BMW', '320i', 1);
INSERT INTO Vehicle (brand, model, ownerId) values ('Mercedez Benz', 'c200', 2);

-- DOWN
DROP TABLE Person;
DROP TABLE Vehicle;