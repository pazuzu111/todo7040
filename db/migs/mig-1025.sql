
\c todoapp

DROP TABLE IF EXISTS todonotes;

CREATE TABLE IF NOT EXISTS todonotes(
  id SERIAL PRIMARY KEY,
  content TEXT,
  category VARCHAR(255)
);
