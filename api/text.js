export default function handler(req, res) {
  const messages = [
    { lang: "de", text: "Ich liebe dich" },
    { lang: "en", text: "I love you" },
    { lang: "fr", text: "Je t'aime" },
    { lang: "es", text: "Te quiero" },
    { lang: "it", text: "Ti amo" },
    { lang: "pt", text: "Eu te amo" },
    { lang: "nl", text: "Ik hou van jou" },
    { lang: "sv", text: "Jag älskar dig" },
  ];

  const random = messages[Math.floor(Math.random() * messages.length)];

  res.status(200).json({
    language: random.lang,
    message: random.text,
    timestamp: new Date().toISOString(),
    source: "https://interfaces.marco-schmidt.com/api/love"
  });
}
