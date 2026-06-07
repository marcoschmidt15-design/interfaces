export default function handler(req, res) {
  const number = Math.floor(Math.random() * 100) + 1;

  res.status(200).json({
    number,
    timestamp: new Date().toISOString(),
    source: "https://interfaces.marco-schmidt.com/randomnumber"
  });
}
