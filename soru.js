function Question(soruMetni, cevapSecenekleri, dogruCevap) {
  this.soruMetni = soruMetni;
  this.cevapSecenekleri = cevapSecenekleri;
  this.dogruCevap = dogruCevap;
  //   console.log(this);
}

Question.prototype.cevabıKontrolEt = function (cevap) {
  return cevap === this.dogruCevap;
};

let sorular = [
  new Question(
    "1-Hangisi bir JavaScript paket yönetim uygulamasıdır?",
    { a: "Node.js", b: "Angular", c: "Npm", d: "Nuget" },
    "c"
  ),
  new Question(
    "2-Hangisi frontend kapsamında değerlendirilmez?",
    { a: "CSS", b: "HTML", c: "SQL", d: "JavaScript" },
    "c"
  ),
  new Question(
    "3-Hangisi backend kapsamında değerlendirilir?",
    { a: "Node.js", b: "TypeScript", c: "Angular", d: "React" },
    "a"
  ),
  new Question(
    "4-Hangisi JavaScript programlama dilini kullanmaz?",
    { a: "React.js", b: "ASP.NET", c: "Vue.Js", d: "Angular" },
    "b"
  ),
];
