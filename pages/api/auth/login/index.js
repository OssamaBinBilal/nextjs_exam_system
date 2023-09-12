const handler = (req, res) => {
  const { email, password } = req.body;
  if (email === "sheikhusamabilal@gmail.com" && password === "hellothere")
    res.send(true);
  res.send(false);
};

export default handler;
