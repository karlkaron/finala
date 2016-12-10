/**
 * NewsController
 *
 * @description :: Server-side logic for managing news
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
  create: function(req, res) {

    var params = {
      description: req.param('description'),
      content: req.param('content'),
      title: req.param('title'),
    }

    News.create(params).exec(function(err, news) {
      res.redirect('/news/watch/' + news.id);
      if (err) return res.send(500);
    });

  },
  update: function(req, res) {
    var Id = req.param('id');

    var elem = {
      description: req.param('description'),
      content: req.param('content'),
      title: req.param('title')
    };

    News.update(Id, elem).exec(function(err) {
      if (err) return res.send(500);
      res.redirect('/');
    });

  },
	delete: function (req, res) {
		var Id = req.param('id');
		News.destroy(Id).exec(function (err) {
			if (err) return res.send(500);
			res.redirect('/news');
		});
	}



};
