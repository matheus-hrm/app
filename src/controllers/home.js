exports.index = (req, res) => {
  res.send (`
    <form action="/" method="POST">
      <input type="text" name="name" />
      <input type="submit" value="Submit" />
    </form>
  `);
}

exports.add = (req, res) => {
  res.send ('o valor enviado é ${req.body.name}');
  
} 