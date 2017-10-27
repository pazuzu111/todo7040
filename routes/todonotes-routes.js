const express = require('express');
const todonotesRouter = express.Router();

const todonotesController = require('../controllers/todonotes-controller');

//the url that we want the index controller to render data to
todonotesRouter.get('/todonotes', todonotesController.index);

//maybe need?
todonotesRouter.get('/new', (req, res) => {
  res.render('./todonotes/todonotes-new');
});

todonotesRouter.post('/', todonotesController.create);

todonotesRouter.get('/:id', todonotesController.show);
todonotesRouter.get('/:id/edit', todonotesController.edit);
todonotesRouter.put('/:id', todonotesController.update);

todonotesRouter.delete('/:id', todonotesController.delete);

module.exports = todonotesRouter;
