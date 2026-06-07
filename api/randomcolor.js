export default function handler(req, res) {
  const color =
    "#" + Math.floor(Math.random() * 16777215).toString(16).padStart(6, "0");

  res.status(200).json({
    color,
    timestamp: new Date().toISOString(),
    source: "https://interfaces.marco-schmidt.com/randomcolor"
  });
}
