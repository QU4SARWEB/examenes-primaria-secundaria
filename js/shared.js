// ── Shared Exam Logic ─────────────────────────

// ── PDF Export ────────────────────────────────
function exportPDF() {
  if (!questions.length) return alert("Primero genera un examen.");

  const { jsPDF } = window.jspdf;
  const doc = new jsPDF("p", "mm", "letter");
  const W = doc.internal.pageSize.getWidth();
  const H = doc.internal.pageSize.getHeight();
  const ML = 18, MR = 18, MT = 18;
  const CW = W - ML - MR;
  const letters = ["A", "B", "C", "D"];

  // Colores claros y limpios
  const C = {
    text: [30, 41, 59],        // Gris oscuro para texto principal
    sub: [100, 116, 139],      // Gris medio para secundario
    accent: [79, 70, 229],     // Indigo para acentos
    line: [209, 213, 219],     // Gris claro para lineas
    bg: [249, 250, 251],       // Gris muy claro para fondos
    green: [22, 163, 74],      // Verde para respuestas correctas
  };

  function drawHeader(num, total, title) {
    // Linea superior fina
    doc.setDrawColor(...C.accent);
    doc.setLineWidth(0.8);
    doc.line(ML, 12, W - MR, 12);

    doc.setFont("helvetica", "bold");
    doc.setFontSize(15);
    doc.setTextColor(...C.text);
    doc.text(title, ML, 20);

    doc.setFont("helvetica", "normal");
    doc.setFontSize(9);
    doc.setTextColor(...C.sub);
    doc.text(`6to Grado Primaria`, ML, 25);
    doc.text(`${num} / ${total}`, W - MR, 20, { align: "right" });
  }

  function drawFooter() {
    doc.setDrawColor(...C.line);
    doc.setLineWidth(0.2);
    doc.line(ML, H - 14, W - MR, H - 14);
    doc.setFontSize(7);
    doc.setTextColor(...C.sub);
    doc.text("Plataforma de Examenes 6to Grado", ML, H - 8);
    doc.text(new Date().toLocaleDateString("es-PE"), W - MR, H - 8, { align: "right" });
  }

  const totalPages = 3;
  let y;

  // ═══════════════════════════════════════════════
  // HOJA 1: PREGUNTAS (LECTURA)
  // ═══════════════════════════════════════════════
  drawHeader(1, totalPages, "EXAMEN");
  drawFooter();
  y = 34;

  doc.setFont("helvetica", "italic");
  doc.setFontSize(8);
  doc.setTextColor(...C.sub);
  doc.text("Lee cada pregunta y sus opciones. No marques en esta hoja.", ML, y);
  y += 8;

  const lineH = 4.5;
  const optH = 4.2;
  const gap = 8;

  const byTopic = {};
  questions.forEach((q, i) => {
    if (!byTopic[q.topic]) byTopic[q.topic] = [];
    byTopic[q.topic].push({ ...q, num: i + 1 });
  });

  for (const topic of Object.keys(byTopic)) {
    if (y > H - 50) {
      doc.addPage();
      drawHeader(doc.internal.getNumberOfPages(), totalPages, "EXAMEN (cont.)");
      drawFooter();
      y = 34;
    }

    // Etiqueta de tema - borde lateral
    doc.setDrawColor(...C.accent);
    doc.setLineWidth(0.8);
    doc.line(ML, y - 3, ML, y + 3);
    doc.setFont("helvetica", "bold");
    doc.setFontSize(8);
    doc.setTextColor(...C.accent);
    doc.text(topic.toUpperCase(), ML + 4, y);
    y += 8;

    for (const item of byTopic[topic]) {
      const qLines = doc.splitTextToSize(`${item.num}. ${item.text}`, CW - 4);
      const qH = qLines.length * lineH;
      const needed = qH + optH * 4 + gap + 4;

      if (y + needed > H - 22) {
        doc.addPage();
        drawHeader(doc.internal.getNumberOfPages(), totalPages, "EXAMEN (cont.)");
        drawFooter();
        y = 34;
      }

      // Pregunta
      doc.setFont("helvetica", "bold");
      doc.setFontSize(9.5);
      doc.setTextColor(...C.text);
      doc.text(qLines, ML + 4, y);
      y += qH + 2;

      // Opciones 2x2
      const colW = (CW - 8) / 2;
      for (let row = 0; row < 2; row++) {
        for (let col = 0; col < 2; col++) {
          const oi = row * 2 + col;
          if (oi >= item.opts.length) continue;
          const x = ML + 4 + col * (colW + 2);
          const oy = y + row * optH;

          doc.setFont("helvetica", "bold");
          doc.setFontSize(8);
          doc.setTextColor(...C.accent);
          doc.text(`${letters[oi]})`, x, oy);

          doc.setFont("helvetica", "normal");
          doc.setTextColor(...C.text);
          const oLines = doc.splitTextToSize(item.opts[oi], colW - 8);
          doc.text(oLines[0], x + 7, oy);
        }
      }
      y += optH * 2 + gap;

      // Linea separadora fina entre preguntas
      doc.setDrawColor(...C.line);
      doc.setLineWidth(0.15);
      doc.line(ML + 4, y - 5, W - MR - 4, y - 5);
    }
    y += 4;
  }

  // ═══════════════════════════════════════════════
  // HOJA 2: HOJA DE RESPUESTAS
  // ═══════════════════════════════════════════════
  doc.addPage();
  drawHeader(2, totalPages, "HOJA DE RESPUESTAS");
  drawFooter();
  y = 34;

  // Instruccion
  doc.setFillColor(254, 249, 195);
  doc.roundedRect(ML, y - 4, CW, 10, 2, 2, "F");
  doc.setFont("helvetica", "bold");
  doc.setFontSize(9);
  doc.setTextColor(146, 64, 14);
  doc.text("Marca con lapiz la casilla de tu respuesta correcta.", ML + 3, y + 1);
  y += 10;

  // Nombre y fecha
  doc.setFont("helvetica", "normal");
  doc.setFontSize(9);
  doc.setTextColor(...C.text);
  doc.text("Nombre:", ML, y);
  doc.line(ML + 18, y + 1, ML + 85, y + 1);
  doc.text("Fecha:", ML + 95, y);
  doc.line(ML + 110, y + 1, W - MR, y + 1);
  y += 14;

  // Tabla de respuestas
  const boxR = 2.3;
  const rowH = 8;
  const halfW = CW / 2;
  const perCol = Math.ceil(questions.length / 2);

  // Encabezados de columna
  doc.setDrawColor(...C.line);
  doc.setLineWidth(0.3);
  doc.line(ML, y - 3, W - MR, y - 3);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(8);
  doc.setTextColor(...C.sub);
  doc.text(`1 - ${perCol}`, ML + halfW / 2, y, { align: "center" });
  doc.text(`${perCol + 1} - ${questions.length}`, ML + halfW + halfW / 2, y, { align: "center" });
  doc.line(ML, y + 3, W - MR, y + 3);
  y += 8;

  for (let r = 0; r < perCol; r++) {
    if (y + rowH > H - 22) {
      doc.addPage();
      drawHeader(doc.internal.getNumberOfPages(), totalPages, "HOJA DE RESPUESTAS (cont.)");
      drawFooter();
      y = 34;
    }

    for (let col = 0; col < 2; col++) {
      const qi = col * perCol + r;
      if (qi >= questions.length) break;
      const xBase = ML + col * halfW;

      // Linea inferior de cada fila
      doc.setDrawColor(...C.line);
      doc.setLineWidth(0.15);
      doc.line(xBase + 2, y + rowH - 1, xBase + halfW - 2, y + rowH - 1);

      // Numero
      doc.setFont("helvetica", "bold");
      doc.setFontSize(9);
      doc.setTextColor(...C.text);
      doc.text(`${qi + 1}`, xBase + 3, y + 2.8);

      // Circulos para marcar
      for (let o = 0; o < 4; o++) {
        const cx = xBase + 16 + o * 14;

        doc.setDrawColor(...C.line);
        doc.setLineWidth(0.5);
        doc.circle(cx, y + 2.5, boxR, "S");

        // Letra DENTRO del circulo
        doc.setFont("helvetica", "bold");
        doc.setFontSize(6);
        doc.setTextColor(...C.sub);
        doc.text(letters[o], cx, y + 3.2, { align: "center" });
      }
    }
    y += rowH;
  }

  // ═══════════════════════════════════════════════
  // HOJA 3: CLAVE DE RESPUESTAS
  // ═══════════════════════════════════════════════
  doc.addPage();
  drawHeader(3, totalPages, "CLAVE DE RESPUESTAS");
  drawFooter();
  y = 34;

  doc.setFont("helvetica", "normal");
  doc.setFontSize(9);
  doc.setTextColor(...C.sub);
  doc.text("Respuestas correctas para verificar.", ML, y);
  y += 10;

  // Tabla 4 columnas
  const colW4 = CW / 4;
  const rowsPerCol = Math.ceil(questions.length / 4);

  // Linea superior
  doc.setDrawColor(...C.accent);
  doc.setLineWidth(0.5);
  doc.line(ML, y, W - MR, y);
  y += 6;

  for (let r = 0; r < rowsPerCol; r++) {
    for (let c = 0; c < 4; c++) {
      const qi = c * rowsPerCol + r;
      if (qi >= questions.length) break;
      const x = ML + c * colW4;
      const q = questions[qi];

      // Fondo alterno suave
      if (r % 2 === 0) {
        doc.setFillColor(...C.bg);
        doc.rect(x, y - 3.5, colW4, 5.5, "F");
      }

      doc.setFont("helvetica", "normal");
      doc.setFontSize(8);
      doc.setTextColor(...C.sub);
      doc.text(`${qi + 1}.`, x + 2, y);

      doc.setFont("helvetica", "bold");
      doc.setFontSize(10);
      doc.setTextColor(...C.green);
      doc.text(letters[q.correct], x + colW4 / 2, y, { align: "center" });
    }
    y += 5.5;
  }

  // Linea inferior
  doc.setDrawColor(...C.accent);
  doc.setLineWidth(0.5);
  doc.line(ML, y, W - MR, y);
  y += 12;

  // Resumen
  doc.setFont("helvetica", "bold");
  doc.setFontSize(10);
  doc.setTextColor(...C.text);
  doc.text("Resumen por Materia", ML, y);
  y += 8;

  const stats = {};
  questions.forEach((q) => {
    if (!stats[q.topic]) stats[q.topic] = 0;
    stats[q.topic]++;
  });

  doc.setFont("helvetica", "normal");
  doc.setFontSize(8.5);
  for (const [topic, count] of Object.entries(stats)) {
    doc.setTextColor(...C.text);
    doc.text(topic, ML + 4, y);
    doc.setTextColor(...C.sub);
    doc.text(`${count} preguntas`, W - MR - 25, y);
    y += 5;
  }

  y += 6;
  doc.setDrawColor(...C.line);
  doc.setLineWidth(0.2);
  doc.line(ML, y, W - MR, y);
  y += 5;
  doc.setFont("helvetica", "bold");
  doc.setFontSize(9);
  doc.setTextColor(...C.text);
  doc.text(`TOTAL: ${questions.length} preguntas`, ML, y);

  // Mostrar visor en vez de descargar directamente
  showPDFPreview(doc);
}

function showPDFPreview(doc) {
  const topicName = document.getElementById("topic")?.value || "Examen";
  const fileName = `Examen_6to_${topicName}_${new Date().toISOString().slice(0,10)}.pdf`;

  const pdfData = doc.output("datauristring");

  let modal = document.getElementById("pdfViewerModal");
  if (!modal) {
    modal = document.createElement("div");
    modal.id = "pdfViewerModal";
    modal.className = "pdf-modal";
    modal.innerHTML = `
      <div class="pdf-modal-box">
        <div class="pdf-modal-top">
          <h3><i data-lucide="file-text"></i> Vista previa del PDF</h3>
          <div class="pdf-modal-btns">
            <button class="pdf-btn-close" onclick="closePDFPreview()">
              <i data-lucide="x"></i> Cerrar
            </button>
            <button class="pdf-btn-dl" id="pdfDownloadBtn">
              <i data-lucide="download"></i> Descargar
            </button>
          </div>
        </div>
        <div class="pdf-modal-body">
          <iframe id="pdfPreviewFrame"></iframe>
        </div>
      </div>
    `;
    document.body.appendChild(modal);
  }

  document.getElementById("pdfPreviewFrame").src = pdfData;

  const dlBtn = document.getElementById("pdfDownloadBtn");
  dlBtn.onclick = function() {
    doc.save(fileName);
  };

  modal.classList.add("show");
  lucide.createIcons();
}

function closePDFPreview() {
  const modal = document.getElementById("pdfViewerModal");
  if (modal) modal.classList.remove("show");
}

document.addEventListener("click", function(e) {
  if (e.target.id === "pdfViewerModal") closePDFPreview();
});

document.addEventListener("keydown", function(e) {
  if (e.key === "Escape") closePDFPreview();
});

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

function makeOpts(correct, wrong1, wrong2, wrong3) {
  let opts = [String(correct), String(wrong1), String(wrong2), String(wrong3)];
  const seen = new Set();
  const unique = [];
  for (let i = 0; i < opts.length; i++) {
    if (!seen.has(opts[i])) {
      seen.add(opts[i]);
      unique.push(opts[i]);
    }
  }
  while (unique.length < 4) {
    let alt = rand(1, 50);
    while (seen.has(String(alt))) alt = rand(1, 50);
    unique.push(String(alt));
    seen.add(String(alt));
  }
  return unique;
}

function q(topic, text, opts, correctIdx, exp) {
  const items = opts.map((x, i) => ({ val: x, isCorrect: i === correctIdx }));
  const shuffled = shuffle(items);
  const newCorrectIdx = shuffled.findIndex(x => x.isCorrect);
  return { topic, text, opts: shuffled.map(x => x.val), correct: newCorrectIdx, exp };
}

// ── Exam State ────────────────────────────────
let questions = [], answers = [], idx = 0, timerId = null, remaining = 0;

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

let picking = false;

function render() {
  const x = questions[idx];
  document.getElementById("counter").innerHTML = `<span class="q-num">${idx+1}</span><span class="q-total">/ ${questions.length}</span>`;
  document.getElementById("question").textContent = x.text;

  document.getElementById("options").innerHTML = x.opts.map((o, i) => `
    <div class="option ${answers[idx]===i?"selected":""}" onclick="pick(${i})">
      <span class="option-letter">${String.fromCharCode(65+i)}</span>
      <span>${o}</span>
    </div>
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
  if (picking) return;
  picking = true;
  setTimeout(() => { picking = false; }, 150);
  answers[idx] = optIndex;
  if (idx === questions.length - 1) { render(); return; }
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
  else if (pct >= 70) msg = "Bien! Repasa los errores.";
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
      </div>`;
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
