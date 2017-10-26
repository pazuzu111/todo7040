const Todonote = require('../models/Todonote');

const todonotesController = {};

todonotesController.index = (req, res) => {
    Todonote.findAll()
    .then(todonotes => {
        res.status(200).render('todonotes/todonotes-index', {
             todonotes,
        });
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
        todonote,
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({error: err});
    });
};

todonotesController.create = (req, res) => {
  Todonote.create({
    question: req.body.question,
    answer: req.body.answer,
    category: req.body.category,
    difficulty: req.body.difficulty,
  }).then(todonote => {
    res.redirect(`/todonotes/${todonote.id}`)
  })
  .catch(err => {
    console.log(err);
    res.status(500).json({error: err});
  });
};

todonotesController.edit = (req, res) => {
  Todonote.findById(req.params.id)
    .then(todonote => {
      res.status(200).render('todonotes/todonotes-edit', {
       todonote,
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({error: err});
    });
};

todonotesController.update = (req, res) => {
  Todonote.update({
    question: req.body.question,
    answer: req.body.answer,
    category: req.body.category,
    difficulty: req.body.difficulty,
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
