const notify = (req, res) => {
  console.log("manager notified");
  const { id } = req.params;

  console.log(id);
  res.status(200).json(" Test");
};

module.exports = {
  notify,
};
