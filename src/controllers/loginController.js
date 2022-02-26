exports.index = (req, res) => {
  res.render('login');
};

exports.login = (req, res) => {
  console.log(req.body);

  res.render('login');
};
