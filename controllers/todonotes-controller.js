const Todonote = require('../models/Todonote');

const todonotesController = {};

todonotesController.index = (req, res) => {
    Todonote.findAll()
    .then(todonotes => {
        res.status(200).render('todonotes/todonotes-index', {todonotes});
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({error: err});
    });
};

todonotesController.show = (req, res) => {
  Todonote.findById(req.params.id)
    .then(todonote => {
      res.status(200).render('todonotes/todonotes-show', {
        todonote
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({error: err});
    });
};

todonotesController.create = (req, res) => {
  Todonote.create({
    content: req.body.content,
    category: req.body.category,
  }).then(todonote => {
    res.redirect(`/todonotes`)
  })
  .catch(err => {
    console.log(err);
    res.status(500).json({error: err});
  });
};

todonotesController.edit = (req, res) => {
  Todonote.findById(req.params.id)
    .then(todonote => {
      res.status(200).render("todonotes/todonotes-edit", {todonote});
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({error: err});
    });
};

todonotesController.update = (req, res) => {
  Todonote.update({
    content: req.body.content,
    category: req.body.category,
  }, req.params.id)
    .then(todonote => {
      res.redirect(`/todonotes/${todonote.id}`)
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({error: err});
    });
};

todonotesController.delete = (req, res) => {
  Todonote.destroy(req.params.id)
    .then(() => {
      res.redirect('/todonotes');
    })
    .catch(err => {
      res.status(500).json({
        err,
      });
    });
};

module.exports = todonotesController;
