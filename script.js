    function changeImage() {
      var image = document.getElementById("bonfire");
      image.src = "https://media.discordapp.net/attachments/984099010484764673/1107272872969388142/Z_1.png?width=179&height=206";
      image.alt = "jizaaa";
    }

var phrases = [
    "Bonfire like sex, it's need but not much.",
    "Made by Manul & N3k0 with ❤",
    "Imagine the most comfortable guild with Bonfire.",
    "Lol!",
    "Python.",
    "Reload the page for the text to change!",
    "Lendory are cool!",
    "https://youtu.be/dQw4w9WgXcQ",
    "\"блять\" (c) Manul",
    "Hello World!",
    "у, я, hello, мир, манера крутит мир",
    "сломанный ублюдок, я родился в рефлексии",
    "аа манулы ахуенынйееый",
    "да",
    "кто такой Боря",
    "он вам не манул!",
    "чзх",
    "апните бота на мониторингах, прошу",
    "майним на мышках",
    "перезагрущи страницу, чтоб текст изменился",
    "я заебался.",
    "пашу на 4 работах нахуй",
    "Made in Belarus and Ukraine",
    "ХАХХАХАХААХАХХААХАХХАХА",
    "?",
    "я стал соплей!",
    "нас верефнули кста",
    "завтра v0.2.0",
    "кака макака эта неко кака макака",
    "а вы знали что бот фигня??",
    "я удалил бота 👿",
    "✔ верифиед сайт",
    "овн дискорд продукшон, маде ин чайник",
    "подайте денег на хост"
  ];

  function getRandomPhrase() {
    var randomIndex = Math.floor(Math.random() * phrases.length);
    return phrases[randomIndex];
  }

  var randomTextElement = document.getElementById("randomText");
  randomTextElement.innerText = getRandomPhrase();
        // крч да
