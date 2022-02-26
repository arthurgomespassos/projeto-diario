exports.index = (req, res) => {
  res.render('register');
};

exports.register = (req, res) => {
  console.log(req.body);

  res.render('register');
};
