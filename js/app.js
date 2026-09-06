let questions = [], answers = [], idx = 0, timerId = null, remaining = 0;

const topics = [
  "Fracciones", "Conversiones", "Simplificacion", "Operaciones combinadas",
  "Media, mediana y moda", "Area del cuadrado", "Combinaciones", "Problemas de cantidad"
];

// ── Helpers ───────────────────────────────────
function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function rand(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Genera opciones unicas para una pregunta
function makeOpts(correct, wrong1, wrong2, wrong3) {
  let opts = [String(correct), String(wrong1), String(wrong2), String(wrong3)];
  // Si hay duplicados, reemplazar con alternativas
  const seen = new Set();
  const unique = [];
  for (let i = 0; i < opts.length; i++) {
    if (!seen.has(opts[i])) {
      seen.add(opts[i]);
      unique.push(opts[i]);
    }
  }
  // Completar hasta 4 opciones unicas
  while (unique.length < 4) {
    let alt = rand(1, 50);
    while (seen.has(String(alt))) alt = rand(1, 50);
    unique.push(String(alt));
    seen.add(String(alt));
  }
  return unique;
}

function q(topic, text, opts, correctIdx, exp) {
  // Barajar manteniendo el indice de la correcta
  const items = opts.map((x, i) => ({ val: x, isCorrect: i === correctIdx }));
  const shuffled = shuffle(items);
  const newCorrectIdx = shuffled.findIndex(x => x.isCorrect);
  return {
    topic,
    text,
    opts: shuffled.map(x => x.val),
    correct: newCorrectIdx,
    exp
  };
}

// ── Generator ─────────────────────────────────
function gen(t) {
  // FRACCIONES
  if (t === "Fracciones") {
    const a = rand(1, 9), b = rand(a + 1, 12);
    return q(t, `Que tipo de fraccion es ${a}/${b}?`,
      ["Propia", "Impropia", "Aparente", "Mixta"], 0,
      "El numerador es menor que el denominador.");
  }

  // CONVERSIONES
  if (t === "Conversiones") {
    if (Math.random() < .5) {
      const n = rand(1, 8), d = rand(n + 1, 9), w = rand(1, 5);
      const correct = w * d + n;
      const opts = makeOpts(`${correct}/${d}`, `${w+n}/${d}`, `${w*d-n}/${d}`, `${w*d}/${d}`);
      return q(t, `Convierte ${w} ${n}/${d} a fraccion impropia.`, opts, 0,
        "Multiplica el entero por el denominador y suma el numerador.");
    }
    const d = rand(2, 8), w = rand(2, 6), n = rand(1, d-1);
    const opts = makeOpts(`${w} ${n}/${d}`, `${w+1} ${n}/${d}`, `${w} ${d}/${n}`, `${n} ${w}/${d}`);
    return q(t, `Convierte ${w*d+n}/${d} a numero mixto.`, opts, 0,
      "El cociente es el entero y el residuo es el numerador.");
  }

  // SIMPLIFICACION
  if (t === "Simplificacion") {
    const d = rand(2, 9), k = rand(2, 5), n = rand(1, 8);
    const correct = `${n}/${d}`;
    const wrong1 = `${n*k}/${d*k}`;
    const wrong2 = `${n*k}/${d}`;
    const wrong3 = `${n}/${d*k}`;
    const opts = makeOpts(correct, wrong1, wrong2, wrong3);
    return q(t, `Simplifica ${n*k}/${d*k}.`, opts, 0,
      "Divide numerador y denominador por su factor comun.");
  }

  // OPERACIONES COMBINADAS
  if (t === "Operaciones combinadas") {
    let a, b, c, correct, wrong1, wrong2, wrong3;
    do {
      a = rand(2, 12); b = rand(2, 9); c = rand(2, 6);
      correct = a + b * c;
      wrong1 = (a + b) * c;
      wrong2 = a + b + c;
      wrong3 = a * b + c;
    } while (new Set([correct, wrong1, wrong2, wrong3]).size < 4);
    const opts = makeOpts(correct, wrong1, wrong2, wrong3);
    return q(t, `Resuelve: ${a} + ${b} x ${c}`, opts, 0,
      "Primero multiplicacion, luego suma.");
  }

  // MEDIA, MEDIANA Y MODA
  if (t === "Media, mediana y moda") {
    const pick = rand(0, 2);

    // MEDIA
    if (pick === 0) {
      let vals, media, sorted, mediana, maximo, minimo;
      do {
        vals = Array.from({length:5}, () => rand(1,9));
        const sum = vals.reduce((s,v)=>s+v,0);
        media = sum / 5;
        sorted = [...vals].sort((x,y)=>x-y);
        mediana = sorted[2];
        maximo = Math.max(...vals);
        minimo = Math.min(...vals);
      } while (
        media % 1 === 0 ||
        new Set(vals).size < 5 ||
        media === mediana ||
        media === maximo ||
        media === minimo
      );
      const mediaStr = media.toFixed(1);
      const opts = makeOpts(mediaStr, String(mediana), String(maximo), String(minimo));
      return q(t, `Halla la media de: ${vals.join(", ")}.`, opts, 0,
        "Suma todos los datos y divide entre la cantidad.");
    }

    // MEDIANA
    if (pick === 1) {
      let vals, sorted, mediana, maximo, minimo, other;
      do {
        vals = Array.from({length:5}, () => rand(1,9));
        sorted = [...vals].sort((x,y)=>x-y);
        mediana = sorted[2];
        maximo = Math.max(...vals);
        minimo = Math.min(...vals);
        other = rand(1, 20);
      } while (
        new Set([mediana, maximo, minimo, other]).size < 4 ||
        mediana === maximo ||
        mediana === minimo
      );
      const opts = makeOpts(mediana, maximo, minimo, other);
      return q(t, `Halla la mediana de: ${vals.join(", ")}.`, opts, 0,
        "Ordena los datos y toma el valor central.");
    }

    // MODA
    const m = rand(2, 8);
    let o1, o2, o3;
    do {
      o1 = rand(1, 9);
      o2 = rand(1, 9);
      o3 = rand(1, 9);
    } while (new Set([m, o1, o2, o3]).size < 4);
    const opts = makeOpts(m, o1, o2, o3);
    return q(t, `Halla la moda de: ${[m,m,o1,o2,o3].join(", ")}.`, opts, 0,
      "La moda es el dato que mas se repite.");
  }

  // AREA DEL CUADRADO
  if (t === "Area del cuadrado") {
    let l, area, perimetro, suma, otro;
    do {
      l = rand(2, 15);
      area = l * l;
      perimetro = 4 * l;
      suma = l + l;
      otro = rand(1, 50);
    } while (new Set([area, perimetro, suma, otro]).size < 4);
    const opts = makeOpts(`${area} cm2`, `${perimetro} cm2`, `${suma} cm2`, `${otro} cm2`);
    return q(t, `Un cuadrado tiene lado de ${l} cm. Cual es su area?`, opts, 0,
      "Area = lado x lado.");
  }

  // COMBINACIONES
  if (t === "Combinaciones") {
    let a, b, correct, suma, potencia, suma1;
    do {
      a = rand(2, 5);
      b = rand(2, 6);
      correct = a * b;
      suma = a + b;
      potencia = a ** b;
      suma1 = a + b + 1;
    } while (new Set([correct, suma, potencia, suma1]).size < 4);
    const opts = makeOpts(correct, suma, potencia, suma1);
    return q(t, `Tienes ${a} polos y ${b} pantalones. Cuantas combinaciones?`, opts, 0,
      "Multiplica: polos x pantalones.");
  }

  // PROBLEMAS DE CANTIDAD
  const price = rand(5, 20), qty = rand(2, 6);
  const total = price * qty;
  const suma = price + qty;
  const mas = total + price;
  const menos = total - qty;
  const opts = makeOpts(total, suma, mas, menos);
  return q(t, `${qty} paquetes a S/ ${price} c/u. Total?`, opts, 0,
    "Multiplica precio por cantidad.");
}

function makeQuestions() {
  const t = document.getElementById("topic").value;
  const arr = [];
  for (let i = 0; i < 2000; i++) {
    const type = t === "all" ? topics[rand(0, topics.length-1)] : t;
    arr.push(gen(type));
  }
  return arr;
}

// ── Exam ──────────────────────────────────────
function startExam() {
  const count = +document.getElementById("amount").value;
  questions = makeQuestions().slice(0, count);
  answers = Array(questions.length).fill(null);
  idx = 0;

  document.getElementById("setup").style.display = "none";
  document.getElementById("result").style.display = "none";
  document.getElementById("exam").style.display = "block";
  document.getElementById("finishBtn").style.display = "none";

  render();

  const mins = +document.getElementById("time").value;
  if (mins) {
    remaining = mins * 60;
    clearInterval(timerId);
    timerId = setInterval(() => { remaining--; showTime(); if (remaining <= 0) finish(); }, 1000);
    showTime();
  } else {
    document.getElementById("timer").querySelector("span").textContent = "Sin limite";
  }
}

function showTime() {
  const m = Math.floor(remaining / 60);
  const s = String(remaining % 60).padStart(2, "0");
  document.getElementById("timer").querySelector("span").textContent = `${m}:${s}`;
}

function render() {
  const x = questions[idx];

  document.getElementById("counter").innerHTML = `<span class="q-num">${idx+1}</span><span class="q-total">/ ${questions.length}</span>`;
  document.getElementById("question").textContent = x.text;

  document.getElementById("options").innerHTML = x.opts.map((o, i) => `
    <label class="option ${answers[idx]===i?"selected":""}" onclick="pick(${i})">
      <input type="radio" name="ans" ${answers[idx]===i?"checked":""}>
      <span class="option-letter">${String.fromCharCode(65+i)}</span>
      <span>${o}</span>
    </label>
  `).join("");

  const pct = Math.round((idx+1) / questions.length * 100);
  document.getElementById("bar").style.width = pct + "%";
  document.getElementById("progressPct").textContent = pct + "%";

  const answered = answers.filter(a => a !== null).length;
  document.getElementById("answeredText").textContent = `${answered} de ${questions.length} respondidas`;

  if (answered === questions.length) {
    document.getElementById("finishBtn").style.display = "inline-flex";
  }
}

function pick(optIndex) {
  answers[idx] = optIndex;
  if (idx === questions.length - 1) {
    render();
    return;
  }
  idx++;
  render();
}

function finish() {
  clearInterval(timerId);

  const score = answers.reduce((s, a, i) => s + (a === questions[i].correct ? 1 : 0), 0);
  const pct = Math.round(score / questions.length * 100);

  document.getElementById("exam").style.display = "none";
  document.getElementById("result").style.display = "block";

  document.getElementById("score").textContent = `${score}/${questions.length}`;
  document.getElementById("scorePct").textContent = `${pct}%`;

  let msg;
  if (pct >= 90) msg = "Excelente! Muy bien preparada.";
  else if (pct >= 70) msg = "Bien! Repasa los errores para mejorar.";
  else msg = "Hay que repasar algunos temas.";
  document.getElementById("resultText").textContent = msg;

  const letters = ["A", "B", "C", "D"];
  document.getElementById("review").innerHTML = questions.map((x, i) => {
    const ok = answers[i] === x.correct;
    return `
      <div class="review-item ${ok?"ok":"no"}">
        <b>${i+1}. ${x.text}</b>
        <div class="answer-line">
          <i data-lucide="${ok?"check-circle":"x-circle"}" style="color:${ok?"var(--green)":"var(--red)"}"></i>
          <span>Tu respuesta: <strong>${letters[answers[i]]}) ${x.opts[answers[i]]}</strong></span>
        </div>
        ${!ok ? `<div class="answer-line"><i data-lucide="check-circle" style="color:var(--green)"></i><span>Correcta: <strong>${letters[x.correct]}) ${x.opts[x.correct]}</strong></span></div>` : ""}
        <div class="explanation"><i data-lucide="lightbulb"></i> ${x.exp}</div>
      </div>
    `;
  }).join("");

  lucide.createIcons();
}

function showSetup() {
  clearInterval(timerId);
  document.getElementById("exam").style.display = "none";
  document.getElementById("result").style.display = "none";
  document.getElementById("setup").style.display = "block";
}

document.addEventListener("DOMContentLoaded", () => lucide.createIcons());
