const db = require('../db/config');

const Todonote = {};

Todonote.findAll = () => {
  return db.query('SELECT * FROM todonotes');
};

Todonote.findById = id => {
  return db.one(
    `SELECT * FROM todonotes
    WHERE id = $1`, [id] );
};

Todonote.create = todonote => {
  return db.one(
    `INSERT INTO todonotes
    (content, category)
    VALUES ($1, $2)
    RETURNING *`, [todonote.content, todonote.category]);
};

Todonote.update = (todonote, id) => {
  return db.one(
  `UPDATE todonotes SET
    content = $1,
    category = $2
    WHERE id = $3
    RETURNING *`, [todonote.content, todonote.category, id]);
};

Todonote.destroy = id => {
  return db.none(
    `DELETE FROM todonotes
    WHERE id = $1`, [id]);
};

module.exports = Todonote;
