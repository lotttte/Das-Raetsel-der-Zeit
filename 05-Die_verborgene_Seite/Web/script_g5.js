document.getElementById("checkButton").addEventListener("click", pruefen);

function pruefen() {
  let t = document.getElementById("eingabe").value;
  let key = [...t].map(c => c.charCodeAt(0)).reduce((a, b) => a + b, 0);

  let n = (((key * 1234) % 97) + (Math.sqrt(key * 9999) | 0)) ^ 42;
  let zahl = ((n * 7) % 10) + 1;

  if (t === "Ananas") {
    document.getElementById("ausgabe").textContent = "✅ Richtig! Die vorletzte Zahl lautet " + zahl;
  } else {
    document.getElementById("ausgabe").textContent = "❌ Falsch, bitte erneut versuchen. ";
  }
}
