const allTopics = {
  matematica: ["Fracciones", "Conversiones", "Simplificacion", "Operaciones combinadas", "Media, mediana y moda", "Area del cuadrado", "Combinaciones", "Problemas de cantidad"],
  comunicacion: ["Comprension lectora", "Ortografia", "Gramatica", "Literatura", "Produccion de textos", "Significado de palabras", "Figuras retoricas"],
  personal: ["Historia del Peru", "Geografia del Peru", "Economia", "Civica", "Cultura peruana", "Organizacion social"],
  ciencia: ["Ser vivo", "Cuerpo humano", "Materia", "Energia", "Planeta Tierra", "Cuidado del ambiente"],
  ingles: ["Greetings", "Family", "Numbers", "Colors", "Daily routine", "Animals", "Weather", "Food"]
};

// ── Bancos de datos de cada materia ───────────
const bankMatematica = {
  "Fracciones": [
    { t: "Que tipo de fraccion es 3/5?", o: ["Propia", "Impropia", "Aparente", "Mixta"], c: 0, e: "El numerador es menor que el denominador." },
    { t: "Que tipo de fraccion es 7/4?", o: ["Impropia", "Propia", "Aparente", "Mixta"], c: 0, e: "El numerador es mayor que el denominador." },
    { t: "Que tipo de fraccion es 5/5?", o: ["Aparente", "Propia", "Impropia", "Mixta"], c: 0, e: "Numerador igual a denominador." },
    { t: "3/4 + 1/4 = ?", o: ["1", "4/8", "3/8", "1/2"], c: 0, e: "3+1 = 4, 4/4 = 1." },
    { t: "2/3 + 1/3 = ?", o: ["1", "3/6", "2/6", "1/3"], c: 0, e: "2+1 = 3, 3/3 = 1." },
    { t: "1/2 + 1/2 = ?", o: ["1", "2/4", "1/4", "2/2"], c: 0, e: "1+1 = 2, 2/2 = 1." },
    { t: "5/8 - 3/8 = ?", o: ["2/8", "5/3", "8/8", "3/5"], c: 0, e: "5-3 = 2." },
    { t: "7/10 - 2/10 = ?", o: ["5/10", "7/2", "10/10", "2/7"], c: 0, e: "7-2 = 5." },
    { t: "3/5 de 20 es:", o: ["12", "15", "10", "8"], c: 0, e: "3/5 x 20 = 60/5 = 12." },
    { t: "1/4 de 16 es:", o: ["4", "8", "16", "2"], c: 0, e: "16 / 4 = 4." },
    { t: "2/3 de 12 es:", o: ["8", "6", "4", "9"], c: 0, e: "12 x 2 / 3 = 8." },
    { t: "1/3 + 2/3 = ?", o: ["1", "3/6", "2/9", "1/6"], c: 0, e: "1+2 = 3, 3/3 = 1." },
    { t: "3/7 + 2/7 = ?", o: ["5/7", "7/7", "5/14", "3/14"], c: 0, e: "3+2 = 5." },
    { t: "4/9 - 1/9 = ?", o: ["3/9", "4/1", "9/9", "1/4"], c: 0, e: "4-1 = 3." },
    { t: "5/6 - 2/6 = ?", o: ["3/6", "5/2", "6/6", "2/5"], c: 0, e: "5-2 = 3." },
    { t: "1/5 + 3/5 = ?", o: ["4/5", "5/5", "4/10", "1/15"], c: 0, e: "1+3 = 4." },
    { t: "6/8 se simplifica a:", o: ["3/4", "6/4", "2/8", "8/6"], c: 0, e: "Divide entre 2." },
    { t: "4/10 se simplifica a:", o: ["2/5", "4/5", "10/4", "1/5"], c: 0, e: "Divide entre 2." },
    { t: "Que fraccion es mayor: 1/3 o 1/4?", o: ["1/3", "1/4", "Son iguales", "No se puede saber"], c: 0, e: "Menor denominador = mayor fraccion." },
    { t: "1/2 + 1/4 = ?", o: ["3/4", "2/6", "1/6", "2/4"], c: 0, e: "2/4 + 1/4 = 3/4." }
  ],
  "Conversiones": [
    { t: "Convierte 2 1/3 a fraccion impropia:", o: ["7/3", "2/3", "5/3", "6/3"], c: 0, e: "2x3 + 1 = 7." },
    { t: "Convierte 3 2/5 a fraccion impropia:", o: ["17/5", "3/5", "12/5", "15/5"], c: 0, e: "3x5 + 2 = 17." },
    { t: "Convierte 4 1/2 a fraccion impropia:", o: ["9/2", "4/2", "5/2", "8/2"], c: 0, e: "4x2 + 1 = 9." },
    { t: "Convierte 7/3 a numero mixto:", o: ["2 1/3", "3 1/3", "1 1/3", "2 2/3"], c: 0, e: "7 / 3 = 2 resto 1." },
    { t: "Convierte 11/4 a numero mixto:", o: ["2 3/4", "3 3/4", "1 3/4", "2 1/4"], c: 0, e: "11 / 4 = 2 resto 3." },
    { t: "Convierte 13/5 a numero mixto:", o: ["2 3/5", "3 3/5", "1 3/5", "2 2/5"], c: 0, e: "13 / 5 = 2 resto 3." },
    { t: "1 metro = ? centimetros:", o: ["100", "10", "1000", "50"], c: 0, e: "1 m = 100 cm." },
    { t: "1 kilogramo = ? gramos:", o: ["1000", "100", "10000", "500"], c: 0, e: "1 kg = 1000 g." },
    { t: "1 litro = ? mililitros:", o: ["1000", "100", "10000", "500"], c: 0, e: "1 L = 1000 mL." },
    { t: "1 hora = ? minutos:", o: ["60", "100", "30", "120"], c: 0, e: "1 h = 60 min." },
    { t: "Convierte 2.5 a fraccion:", o: ["5/2", "2/5", "25/10", "5/10"], c: 0, e: "2.5 = 25/10 = 5/2." },
    { t: "Convierte 3/4 a decimal:", o: ["0.75", "0.34", "0.43", "0.75"], c: 0, e: "3 / 4 = 0.75." },
    { t: "Convierte 0.25 a fraccion:", o: ["1/4", "25/100", "1/2", "1/5"], c: 0, e: "0.25 = 1/4." },
    { t: "Convierte 1/5 a decimal:", o: ["0.2", "0.5", "0.15", "0.51"], c: 0, e: "1 / 5 = 0.2." },
    { t: "Convierte 2/3 a decimal:", o: ["0.66...", "0.33...", "0.67", "0.34"], c: 0, e: "2 / 3 = 0.666..." },
    { t: "1/2 km = ? metros:", o: ["500", "100", "200", "1000"], c: 0, e: "1/2 de 1000 = 500." },
    { t: "3/4 kg = ? gramos:", o: ["750", "340", "300", "430"], c: 0, e: "3/4 de 1000 = 750." },
    { t: "1/10 de un metro = ? cm:", o: ["10", "1", "100", "5"], c: 0, e: "1/10 de 100 = 10." },
    { t: "Convierte 5/8 a decimal:", o: ["0.625", "0.85", "0.58", "0.68"], c: 0, e: "5 / 8 = 0.625." },
    { t: "Convierte 0.75 a porcentaje:", o: ["75%", "7.5%", "0.75%", "750%"], c: 0, e: "0.75 x 100 = 75%." }
  ],
  "Simplificacion": [
    { t: "Simplifica 4/8:", o: ["1/2", "2/4", "4/2", "8/4"], c: 0, e: "Divide entre 4." },
    { t: "Simplifica 6/9:", o: ["2/3", "3/2", "6/3", "9/6"], c: 0, e: "Divide entre 3." },
    { t: "Simplifica 10/15:", o: ["2/3", "5/3", "10/3", "15/10"], c: 0, e: "Divide entre 5." },
    { t: "Simplifica 12/18:", o: ["2/3", "6/9", "12/6", "18/12"], c: 0, e: "Divide entre 6." },
    { t: "Simplifica 8/12:", o: ["2/3", "4/6", "8/4", "12/8"], c: 0, e: "Divide entre 4." },
    { t: "Simplifica 14/21:", o: ["2/3", "7/3", "14/7", "21/14"], c: 0, e: "Divide entre 7." },
    { t: "Simplifica 16/24:", o: ["2/3", "8/12", "16/8", "24/16"], c: 0, e: "Divide entre 8." },
    { t: "Simplifica 20/25:", o: ["4/5", "5/4", "20/5", "25/20"], c: 0, e: "Divide entre 5." },
    { t: "Simplifica 18/27:", o: ["2/3", "6/9", "18/9", "27/18"], c: 0, e: "Divide entre 9." },
    { t: "Simplifica 24/36:", o: ["2/3", "12/18", "24/12", "36/24"], c: 0, e: "Divide entre 12." },
    { t: "Simplifica 15/20:", o: ["3/4", "5/4", "15/5", "20/15"], c: 0, e: "Divide entre 5." },
    { t: "Simplifica 21/28:", o: ["3/4", "7/4", "21/7", "28/21"], c: 0, e: "Divide entre 7." },
    { t: "Simplifica 9/12:", o: ["3/4", "3/3", "9/3", "12/9"], c: 0, e: "Divide entre 3." },
    { t: "Simplifica 25/30:", o: ["5/6", "25/5", "30/25", "6/5"], c: 0, e: "Divide entre 5." },
    { t: "Simplifica 27/36:", o: ["3/4", "9/12", "27/9", "36/27"], c: 0, e: "Divide entre 9." },
    { t: "Simplifica 30/45:", o: ["2/3", "10/15", "30/15", "45/30"], c: 0, e: "Divide entre 15." },
    { t: "Simplifica 32/48:", o: ["2/3", "16/24", "32/16", "48/32"], c: 0, e: "Divide entre 16." },
    { t: "Simplifica 35/42:", o: ["5/6", "7/6", "35/7", "42/35"], c: 0, e: "Divide entre 7." },
    { t: "Simplifica 40/60:", o: ["2/3", "20/30", "40/20", "60/40"], c: 0, e: "Divide entre 20." },
    { t: "Simplifica 45/50:", o: ["9/10", "45/5", "50/45", "10/9"], c: 0, e: "Divide entre 5." }
  ],
  "Operaciones combinadas": [
    { t: "3 + 2 x 4 = ?", o: ["11", "20", "24", "7"], c: 0, e: "Primero 2x4=8, luego 3+8=11." },
    { t: "5 + 3 x 2 = ?", o: ["11", "16", "10", "8"], c: 0, e: "Primero 3x2=6, luego 5+6=11." },
    { t: "2 x 4 + 3 = ?", o: ["11", "14", "20", "7"], c: 0, e: "Primero 2x4=8, luego 8+3=11." },
    { t: "6 + 2 x 3 = ?", o: ["12", "24", "18", "10"], c: 0, e: "Primero 2x3=6, luego 6+6=12." },
    { t: "4 x 3 - 2 = ?", o: ["10", "14", "8", "12"], c: 0, e: "Primero 4x3=12, luego 12-2=10." },
    { t: "8 - 2 x 3 = ?", o: ["2", "18", "12", "6"], c: 0, e: "Primero 2x3=6, luego 8-6=2." },
    { t: "10 - 3 x 2 = ?", o: ["4", "14", "6", "20"], c: 0, e: "Primero 3x2=6, luego 10-6=4." },
    { t: "2 x (3 + 4) = ?", o: ["14", "10", "11", "7"], c: 0, e: "Primero 3+4=7, luego 2x7=14." },
    { t: "(5 + 3) x 2 = ?", o: ["16", "11", "10", "13"], c: 0, e: "Primero 5+3=8, luego 8x2=16." },
    { t: "4 x (6 - 2) = ?", o: ["16", "24", "10", "8"], c: 0, e: "Primero 6-2=4, luego 4x4=16." },
    { t: "(8 - 3) x 4 = ?", o: ["20", "32", "12", "8"], c: 0, e: "Primero 8-3=5, luego 5x4=20." },
    { t: "12 / 3 + 2 = ?", o: ["6", "5", "4", "8"], c: 0, e: "Primero 12/3=4, luego 4+2=6." },
    { t: "15 / 5 - 1 = ?", o: ["2", "4", "3", "5"], c: 0, e: "Primero 15/5=3, luego 3-1=2." },
    { t: "20 / 4 + 3 = ?", o: ["8", "7", "5", "10"], c: 0, e: "Primero 20/4=5, luego 5+3=8." },
    { t: "2 x 3 x 4 = ?", o: ["24", "14", "9", "12"], c: 0, e: "2x3=6, 6x4=24." },
    { t: "5 + 5 / 5 = ?", o: ["6", "2", "10", "1"], c: 0, e: "Primero 5/5=1, luego 5+1=6." },
    { t: "8 - 8 / 4 = ?", o: ["6", "0", "4", "2"], c: 0, e: "Primero 8/4=2, luego 8-2=6." },
    { t: "3 x 3 + 3 / 3 = ?", o: ["10", "12", "4", "9"], c: 0, e: "3x3=9, 3/3=1, 9+1=10." },
    { t: "(10 - 2) / 4 = ?", o: ["2", "3", "4", "8"], c: 0, e: "Primero 10-2=8, luego 8/4=2." },
    { t: "2 x (5 + 5) / 4 = ?", o: ["5", "10", "25", "20"], c: 0, e: "(5+5)=10, 2x10=20, 20/4=5." }
  ],
  "Media, mediana y moda": [
    { t: "Media de 2, 4, 6, 8, 10:", o: ["6", "5", "4", "8"], c: 0, e: "(2+4+6+8+10)/5 = 6." },
    { t: "Media de 3, 5, 7, 9, 11:", o: ["7", "6", "8", "5"], c: 0, e: "(3+5+7+9+11)/5 = 7." },
    { t: "Media de 10, 20, 30, 40, 50:", o: ["30", "25", "35", "20"], c: 0, e: "(10+20+30+40+50)/5 = 30." },
    { t: "Mediana de 1, 3, 5, 7, 9:", o: ["5", "3", "7", "1"], c: 0, e: "El valor central es 5." },
    { t: "Mediana de 2, 4, 6, 8:", o: ["5", "4", "6", "3"], c: 0, e: "(4+6)/2 = 5." },
    { t: "Moda de 1, 2, 2, 3, 4:", o: ["2", "3", "1", "4"], c: 0, e: "El 2 se repite mas." },
    { t: "Moda de 5, 5, 5, 7, 8:", o: ["5", "7", "8", "6"], c: 0, e: "El 5 se repite 3 veces." },
    { t: "Media de 12, 18, 24:", o: ["18", "15", "21", "12"], c: 0, e: "(12+18+24)/3 = 18." },
    { t: "Mediana de 4, 8, 12, 16, 20:", o: ["12", "10", "14", "8"], c: 0, e: "El valor central es 12." },
    { t: "Moda de 3, 3, 5, 7, 7, 7:", o: ["7", "3", "5", "4"], c: 0, e: "El 7 se repite 3 veces." },
    { t: "Media de 100, 200, 300:", o: ["200", "150", "250", "100"], c: 0, e: "(100+200+300)/3 = 200." },
    { t: "Mediana de 5, 10, 15, 20:", o: ["12.5", "10", "15", "12"], c: 0, e: "(10+15)/2 = 12.5." },
    { t: "Moda de 1, 1, 1, 2, 3:", o: ["1", "2", "3", "1.5"], c: 0, e: "El 1 se repite 3 veces." },
    { t: "Media de 0, 10, 20, 30:", o: ["15", "10", "20", "25"], c: 0, e: "(0+10+20+30)/4 = 15." },
    { t: "Mediana de 1, 2, 3, 4, 5, 6:", o: ["3.5", "3", "4", "2.5"], c: 0, e: "(3+4)/2 = 3.5." },
    { t: "Moda de 8, 8, 9, 10, 10:", o: ["8 y 10", "8", "10", "9"], c: 0, e: "Hay dos modas." },
    { t: "Media de 5, 10, 15, 20, 25:", o: ["15", "10", "20", "12"], c: 0, e: "(5+10+15+20+25)/5 = 15." },
    { t: "Mediana de 3, 7, 11, 15, 19:", o: ["11", "10", "12", "7"], c: 0, e: "El valor central es 11." },
    { t: "Moda de 2, 4, 4, 6, 8:", o: ["4", "2", "6", "8"], c: 0, e: "El 4 se repite 2 veces." },
    { t: "Media de 25, 50, 75:", o: ["50", "40", "60", "25"], c: 0, e: "(25+50+75)/3 = 50." }
  ],
  "Area del cuadrado": [
    { t: "Area de cuadrado lado 3 cm:", o: ["9 cm2", "12 cm2", "6 cm2", "3 cm2"], c: 0, e: "3 x 3 = 9." },
    { t: "Area de cuadrado lado 5 cm:", o: ["25 cm2", "20 cm2", "10 cm2", "5 cm2"], c: 0, e: "5 x 5 = 25." },
    { t: "Area de cuadrado lado 7 cm:", o: ["49 cm2", "28 cm2", "14 cm2", "7 cm2"], c: 0, e: "7 x 7 = 49." },
    { t: "Area de cuadrado lado 10 cm:", o: ["100 cm2", "40 cm2", "20 cm2", "10 cm2"], c: 0, e: "10 x 10 = 100." },
    { t: "Area de cuadrado lado 4 cm:", o: ["16 cm2", "16 cm", "8 cm2", "4 cm2"], c: 0, e: "4 x 4 = 16." },
    { t: "Area de cuadrado lado 6 cm:", o: ["36 cm2", "24 cm2", "12 cm2", "6 cm2"], c: 0, e: "6 x 6 = 36." },
    { t: "Area de cuadrado lado 8 cm:", o: ["64 cm2", "32 cm2", "16 cm2", "8 cm2"], c: 0, e: "8 x 8 = 64." },
    { t: "Area de cuadrado lado 9 cm:", o: ["81 cm2", "36 cm2", "18 cm2", "9 cm2"], c: 0, e: "9 x 9 = 81." },
    { t: "Area de cuadrado lado 12 cm:", o: ["144 cm2", "48 cm2", "24 cm2", "12 cm2"], c: 0, e: "12 x 12 = 144." },
    { t: "Area de cuadrado lado 2 cm:", o: ["4 cm2", "8 cm2", "2 cm2", "6 cm2"], c: 0, e: "2 x 2 = 4." },
    { t: "Perimetro de cuadrado lado 5 cm:", o: ["20 cm", "25 cm", "10 cm", "15 cm"], c: 0, e: "5 x 4 = 20." },
    { t: "Perimetro de cuadrado lado 8 cm:", o: ["32 cm", "64 cm", "16 cm", "24 cm"], c: 0, e: "8 x 4 = 32." },
    { t: "Lado de cuadrado con area 36 cm2:", o: ["6 cm", "9 cm", "12 cm", "4 cm"], c: 0, e: "Raiz cuadrada de 36 = 6." },
    { t: "Lado de cuadrado con area 49 cm2:", o: ["7 cm", "49 cm", "14 cm", "8 cm"], c: 0, e: "Raiz cuadrada de 49 = 7." },
    { t: "Lado de cuadrado con perimetro 24 cm:", o: ["6 cm", "24 cm", "12 cm", "4 cm"], c: 0, e: "24 / 4 = 6." },
    { t: "Lado de cuadrado con perimetro 36 cm:", o: ["9 cm", "36 cm", "18 cm", "6 cm"], c: 0, e: "36 / 4 = 9." },
    { t: "Area de cuadrado lado 11 cm:", o: ["121 cm2", "44 cm2", "22 cm2", "11 cm2"], c: 0, e: "11 x 11 = 121." },
    { t: "Area de cuadrado lado 15 cm:", o: ["225 cm2", "60 cm2", "30 cm2", "15 cm2"], c: 0, e: "15 x 15 = 225." },
    { t: "Si el area es 64 cm2, el lado es:", o: ["8 cm", "64 cm", "16 cm", "4 cm"], c: 0, e: "Raiz cuadrada de 64 = 8." },
    { t: "Si el perimetro es 40 cm, el lado es:", o: ["10 cm", "40 cm", "20 cm", "5 cm"], c: 0, e: "40 / 4 = 10." }
  ],
  "Combinaciones": [
    { t: "3 polos y 4 pantalones. Combinaciones?", o: ["12", "7", "81", "34"], c: 0, e: "3 x 4 = 12." },
    { t: "2 camisas y 5 faldas. Combinaciones?", o: ["10", "7", "32", "25"], c: 0, e: "2 x 5 = 10." },
    { t: "4 zapatos y 3 sombreros. Combinaciones?", o: ["12", "7", "81", "43"], c: 0, e: "4 x 3 = 12." },
    { t: "5 colores y 2 formas. Combinaciones?", o: ["10", "7", "25", "52"], c: 0, e: "5 x 2 = 10." },
    { t: "6 alimentos y 4 bebidas. Combinaciones?", o: ["24", "10", "1296", "64"], c: 0, e: "6 x 4 = 24." },
    { t: "3 libros y 2 cuadernos. Combinaciones?", o: ["6", "5", "9", "32"], c: 0, e: "3 x 2 = 6." },
    { t: "7 deportes y 3 posturas. Combinaciones?", o: ["21", "10", "343", "73"], c: 0, e: "7 x 3 = 21." },
    { t: "4 clases y 5 horarios. Combinaciones?", o: ["20", "9", "1024", "45"], c: 0, e: "4 x 5 = 20." },
    { t: "2 lenguajes y 6 algoritmos. Combinaciones?", o: ["12", "8", "64", "26"], c: 0, e: "2 x 6 = 12." },
    { t: "8 ingredientes y 2 recetas. Combinaciones?", o: ["16", "10", "256", "82"], c: 0, e: "8 x 2 = 16." },
    { t: "3 entradas y 4 bebidas. Combinaciones?", o: ["12", "7", "81", "34"], c: 0, e: "3 x 4 = 12." },
    { t: "5 Flores y 3 macetas. Combinaciones?", o: ["15", "8", "125", "53"], c: 0, e: "5 x 3 = 15." },
    { t: "6 Herramientas y 2 trabajos. Combinaciones?", o: ["12", "8", "36", "62"], c: 0, e: "6 x 2 = 12." },
    { t: "4 Muebles y 3 habitaciones. Combinaciones?", o: ["12", "7", "64", "43"], c: 0, e: "4 x 3 = 12." },
    { t: "2 Portafolios y 5 carpetas. Combinaciones?", o: ["10", "7", "32", "25"], c: 0, e: "2 x 5 = 10." },
    { t: "9 Numeros y 2 signos. Combinaciones?", o: ["18", "11", "729", "92"], c: 0, e: "9 x 2 = 18." },
    { t: "3 Mesas y 6 sillas. Combinaciones?", o: ["18", "9", "729", "36"], c: 0, e: "3 x 6 = 18." },
    { t: "7 Videosjuegos y 4 controles. Combinaciones?", o: ["28", "11", "2401", "74"], c: 0, e: "7 x 4 = 28." },
    { t: "4 Camiones y 5 paquetes. Combinaciones?", o: ["20", "9", "1024", "45"], c: 0, e: "4 x 5 = 20." },
    { t: "5 Equipos y 2 entrenadores. Combinaciones?", o: ["10", "7", "3125", "52"], c: 0, e: "5 x 2 = 10." }
  ],
  "Problemas de cantidad": [
    { t: "Juan tiene 15 dulces y da 7. ¿Cuantos le quedan?", o: ["8", "22", "7", "15"], c: 0, e: "15 - 7 = 8." },
    { t: "Maria tiene 3 veces mas que Pedro (5). ¿Cuantos tiene Maria?", o: ["15", "8", "5", "20"], c: 0, e: "5 x 3 = 15." },
    { t: "Hay 24 alumnos y 6 mesas. ¿Cuantos por mesa?", o: ["4", "18", "30", "6"], c: 0, e: "24 / 6 = 4." },
    { t: "Una tienda tiene 50 productos y vende 18. ¿Cuantos quedan?", o: ["32", "68", "18", "50"], c: 0, e: "50 - 18 = 32." },
    { t: "Pedro tiene S/ 40 y compra algo de S/ 15. ¿Cuanto le queda?", o: ["S/ 25", "S/ 55", "S/ 15", "S/ 40"], c: 0, e: "40 - 15 = 25." },
    { t: "Ana compra 4 lapices a S/ 3. ¿Cuanto paga?", o: ["S/ 12", "S/ 7", "S/ 16", "S/ 43"], c: 0, e: "4 x 3 = 12." },
    { t: "Un grupo tiene 32 niños. Si salen 10, ¿cuantos quedan?", o: ["22", "42", "10", "32"], c: 0, e: "32 - 10 = 22." },
    { t: "Carlos tiene 5 veces mas libros que Luis (4). ¿Cuantos tiene Carlos?", o: ["20", "9", "4", "25"], c: 0, e: "4 x 5 = 20." },
    { t: "Hay 36 frutas en 4 canastas. ¿Cuantas por canasta?", o: ["9", "32", "40", "4"], c: 0, e: "36 / 4 = 9." },
    { t: "Rosa tiene S/ 100 y gasta S/ 37. ¿Cuanto le queda?", o: ["S/ 63", "S/ 137", "S/ 37", "S/ 100"], c: 0, e: "100 - 37 = 63." },
    { t: "Hay 45 alumnos en 5 grupos. ¿Cuantos por grupo?", o: ["9", "40", "50", "5"], c: 0, e: "45 / 5 = 9." },
    { t: "Tomas tiene 2 veces mas dulces que Ana (8). ¿Cuantos tiene Tomas?", o: ["16", "10", "8", "24"], c: 0, e: "8 x 2 = 16." },
    { t: "Una libreria tiene 200 libros y vende 75. ¿Cuantos quedan?", o: ["125", "275", "75", "200"], c: 0, e: "200 - 75 = 125." },
    { t: "Lucia compra 6 cuadernos a S/ 5. ¿Cuanto paga?", o: ["S/ 30", "S/ 11", "S/ 36", "S/ 65"], c: 0, e: "6 x 5 = 30." },
    { t: "Hay 48 alumnos y 8 grupos. ¿Cuantos por grupo?", o: ["6", "40", "56", "8"], c: 0, e: "48 / 8 = 6." },
    { t: "Pedro gana S/ 120 y gasta S/ 45. ¿Cuanto le queda?", o: ["S/ 75", "S/ 165", "S/ 45", "S/ 120"], c: 0, e: "120 - 45 = 75." },
    { t: "Hay 60 manzanas en 6 cajas. ¿Cuantas por caja?", o: ["10", "54", "66", "6"], c: 0, e: "60 / 6 = 10." },
    { t: "Maria tiene 3 veces mas vestidos que Lucia (7). ¿Cuantos tiene Maria?", o: ["21", "10", "7", "28"], c: 0, e: "7 x 3 = 21." },
    { t: "Un camion lleva 80 cajas y descargan 35. ¿Cuantas quedan?", o: ["45", "115", "35", "80"], c: 0, e: "80 - 35 = 45." },
    { t: "Carlos compra 8 naranjas a S/ 2. ¿Cuanto paga?", o: ["S/ 16", "S/ 10", "S/ 24", "S/ 82"], c: 0, e: "8 x 2 = 16." }
  ]
};

// ── Generadores de cada materia ───────────────
function genMatematica(t) {
  const questions = bankMatematica[t] || bankMatematica["Fracciones"];
  const bq = questions[rand(0, questions.length - 1)];
  return q("Matematica", bq.t, bq.o, bq.c, bq.e);
}

function genComunicacion(t) {
  const topics = ["Comprension lectora", "Ortografia", "Gramatica", "Literatura", "Produccion de textos", "Significado de palabras", "Figuras retoricas"];
  const bankC = {
    "Comprension lectora": [
      { t: "Maria gasta S/ 45 y gana S/ 200. ¿Cuanto le queda?", o: ["S/ 155", "S/ 145", "S/ 165", "S/ 135"], c: 0, e: "200 - 45 = 155." },
      { t: "El tren sale a las 8 y llega a las 11. ¿Cuanto dura?", o: ["3 horas", "2 horas", "4 horas", "5 horas"], c: 0, e: "11 - 8 = 3." },
      { t: "Las abejas polinizan. ¿Que benefician?", o: ["Al ecosistema", "Solo humanos", "Solo animales", "Los rios"], c: 0, e: "Las abejas ayudan a la polinizacion." },
      { t: "Juan tiene 12 manzanas y da 5 a Maria. ¿Cuantas le quedan?", o: ["7", "17", "5", "12"], c: 0, e: "12 - 5 = 7." },
      { t: "Una libreria tiene 150 libros y vende 40. ¿Cuantos quedan?", o: ["110", "190", "40", "150"], c: 0, e: "150 - 40 = 110." },
      { t: "Pedro compra 3 cuadernos a S/ 5. ¿Cuanto paga?", o: ["S/ 15", "S/ 8", "S/ 20", "S/ 12"], c: 0, e: "3 x 5 = 15." },
      { t: "Una canasta tiene 24 frutas. Si sacan 8, ¿cuantas quedan?", o: ["16", "32", "8", "24"], c: 0, e: "24 - 8 = 16." },
      { t: "Ana tiene S/ 50 y compra algo de S/ 18. ¿Cuanto le queda?", o: ["S/ 32", "S/ 68", "S/ 18", "S/ 50"], c: 0, e: "50 - 18 = 32." }
    ],
    "Ortografia": [
      { t: "Cual esta escrito correctamente?", o: ["Pais", "Pais", "Pais", "Paiz"], c: 0, e: "Pais lleva tilde." },
      { t: "Cual es la forma correcta?", o: ["Telefono", "Telefono", "Telefono", "Telefono"], c: 0, e: "Telefono es esdrujula." },
      { t: "Cual tiene tilde correcta?", o: ["Murcielago", "Murcielago", "Murcielago", "Murcielago"], c: 0, e: "Murcielago lleva tilde en e." },
      { t: "Cual esta bien escrito?", o: ["Cerveza", "Cerveza", "Cerveza", "Cerveza"], c: 0, e: "Cerveza es correcto." },
      { t: "Cual es correcta ortograficamente?", o: ["Herbicida", "Herbicida", "Herbicida", "Herbicida"], c: 0, e: "Herbicida lleva h y b." }
    ],
    "Gramatica": [
      { t: "Que tipo es: 'El gato duerme'?", o: ["Afirmativa", "Negativa", "Interrogativa", "Exclamativa"], c: 0, e: "Afirmacion simple." },
      { t: "Sujeto en 'Los niños juegan'?", o: ["Los niños", "Juegan", "En el parque", "El parque"], c: 0, e: "Los niños es quien realiza." },
      { t: "Que palabra es sustantivo?", o: ["Libro", "Correr", "Bonito", "Aqui"], c: 0, e: "Libro es nombre de cosa." },
      { t: "Verbo en 'Maria canta bien'?", o: ["Canta", "Maria", "Muy", "Bien"], c: 0, e: "Canta es la accion." },
      { t: "Que tipo es 'rapidamente'?", o: ["Adverbio", "Sustantivo", "Adjetivo", "Verbo"], c: 0, e: "Rapidamente modifica al verbo." }
    ],
    "Literatura": [
      { t: "Que es una fabula?", o: ["Cuento con animales", "Cuento real", "Poema", "Cancion"], c: 0, e: "Las fabulas usan animales." },
      { t: "Moraleja de 'La cigarra y la hormiga'?", o: ["Trabaja y preparate", "Diviertete siempre", "No ayudes", "Come mucho"], c: 0, e: "Trabajar hoy para mañana." },
      { t: "Que es un poema?", o: ["Texto en verso", "Texto en prosa", "Historia", "Noticia"], c: 0, e: "El poema usa versos." },
      { t: "Que es un cuento?", o: ["Narracion corta", "Poema corto", "Cancion", "Obra de teatro"], c: 0, e: "Historia breve." },
      { t: "Que es el narrador?", o: ["Quien cuenta la historia", "El personaje", "El lugar", "El final"], c: 0, e: "El narrador relata." }
    ],
    "Produccion de textos": [
      { t: "Que debe tener un texto narrativo?", o: ["Personajes y accion", "Solo datos", "Solo imagenes", "Numeros"], c: 0, e: "El narrativo cuenta historias." },
      { t: "Que tipo de texto es una noticia?", o: ["Informativo", "Narrativo", "Poetico", "Descriptivo"], c: 0, e: "La noticia informa." },
      { t: "Que es un parrafo?", o: ["Unidad de idea", "Una oracion", "Un libro", "Un titulo"], c: 0, e: "El parrafo agrupa ideas." },
      { t: "Que es la coherencia?", o: ["Que las ideas tengan sentido", "Que sea largo", "Que tenga imagenes", "Que sea bonito"], c: 0, e: "Coherencia = las ideas conectan." },
      { t: "Que es un texto descriptivo?", o: ["Describe personas o lugares", "Cuenta historias", "Da instrucciones", "Expresa opinion"], c: 0, e: "El descriptivo pinta con palabras." }
    ],
    "Significado de palabras": [
      { t: "Que significa 'gigante'?", o: ["Muy grande", "Muy pequeño", "Muy rapido", "Muy lento"], c: 0, e: "Gigante = tamaño enorme." },
      { t: "Que significa 'rapido'?", o: ["Veloz", "Lento", "Grande", "Pequeño"], c: 0, e: "Rapido = veloz." },
      { t: "Que significa 'oscuro'?", o: ["Sin luz", "Claro", "Brillante", "Luminoso"], c: 0, e: "Oscuro = sin claridad." },
      { t: "Que significa 'alegre'?", o: ["Contento", "Triste", "Enojado", "Cansado"], c: 0, e: "Alegre = de buen humor." },
      { t: "Que significa 'fragil'?", o: ["Se rompe facil", "Muy fuerte", "Resistente", "Duro"], c: 0, e: "Fragil = quebradizo." }
    ],
    "Figuras retoricas": [
      { t: "Que es una metafora?", o: ["Comparacion indirecta", "Comparacion directa", "Repetición", "Exageración"], c: 0, e: "Metafora = sin 'como'." },
      { t: "'Tienes corazon de piedra'. Que figura?", o: ["Metafora", "Simil", "Hipérbole", "Onomatopeya"], c: 0, e: "Se compara sin 'como'." },
      { t: "Que es un simile?", o: ["Comparacion con 'como'", "Sin 'como'", "Exageración", "Repetición"], c: 0, e: "Simile usa 'como'." },
      { t: "'Corrio como el viento'. Que figura?", o: ["Simil", "Metafora", "Hipérbole", "Personificación"], c: 0, e: "Se compara usando 'como'." },
      { t: "Que es una hipérbole?", o: ["Exageración", "Comparacion", "Repetición", "Pregunta"], c: 0, e: "Hipérbole exagera." }
    ]
  };
  const qs = bankC[t] || bankC["Comprension lectora"];
  const bq = qs[rand(0, qs.length - 1)];
  return q("Comunicacion", bq.t, bq.o, bq.c, bq.e);
}

function genPersonal(t) {
  const bankP = {
    "Historia del Peru": [
      { t: "En que año llegaron los españoles?", o: ["1532", "1492", "1500", "1600"], c: 0, e: "Pizarro llego en 1532." },
      { t: "Quien fue el ultimo inca?", o: ["Atahualpa", "Pachacutec", "Huascar", "Manco Inca"], c: 0, e: "Atahualpa fue el ultimo." },
      { t: "Que civilizacion construyo Machu Picchu?", o: ["Los incas", "Los moche", "Los nazca", "Los chimu"], c: 0, e: "Los incas la construyeron." },
      { t: "Capital del Tahuantinsuyo?", o: ["Cusco", "Lima", "Quito", "Bogota"], c: 0, e: "El Cusco fue la capital." },
      { t: "En que año se independizo el Peru?", o: ["1821", "1810", "1824", "1800"], c: 0, e: "28 de julio de 1821." },
      { t: "Quien proclamo la independencia?", o: ["San Martin", "Bolivar", "Pizarro", "O'Higgins"], c: 0, e: "Jose de San Martin." },
      { t: "Que es el Tahuantinsuyo?", o: ["Imperio inca", "Rio", "Montaña", "Lago"], c: 0, e: "Las cuatro regiones." },
      { t: "Quien fue Pachacutec?", o: ["Gran inca", "Conquistador", "Presidente", "Rey"], c: 0, e: "El gran expandidor." }
    ],
    "Geografia del Peru": [
      { t: "Cuantas regiones naturales tiene el Peru?", o: ["3", "2", "4", "5"], c: 0, e: "Costa, sierra y selva." },
      { t: "Rio mas largo del Peru?", o: ["Marañon", "Urubamba", "Amazonas", "Madre de Dios"], c: 0, e: "El Marañon es el mas largo." },
      { t: "Montaña mas alta?", o: ["Huascaran", "Misti", "Salcantay", "Ausangate"], c: 0, e: "6,768 msnm." },
      { t: "Departamento del Titicaca?", o: ["Puno", "Cusco", "Arequipa", "Moquegua"], c: 0, e: "El Titicaca esta en Puno." },
      { t: "Region mas lluviosa?", o: ["Selva", "Costa", "Sierra", "Puna"], c: 0, e: "La selva recibe mas lluvia." }
    ],
    "Economia": [
      { t: "Que es la inflacion?", o: ["Subida de precios", "Bajada de precios", "Mas empleo", "Mas dinero"], c: 0, e: "La inflacion sube precios." },
      { t: "Que es el PBI?", o: ["Producto Bruto Interno", "Pago Basico", "Poder del Banco", "Poblacion"], c: 0, e: "El PBI mide la riqueza." },
      { t: "Que es el comercio?", o: ["Compra y venta", "Produccion", "Ahorro", "Impuesto"], c: 0, e: "El comercio es intercambio." },
      { t: "Que es un impuesto?", o: ["Pago al estado", "Ganancia", "Ahorro", "Deuda"], c: 0, e: "El impuesto es obligatorio." },
      { t: "Que es la exportacion?", o: ["Vender al exterior", "Comprar del exterior", "Producir", "Guardar"], c: 0, e: "Exportar es vender a otros paises." }
    ],
    "Civica": [
      { t: "Que es la democracia?", o: ["Gobierno del pueblo", "Gobierno de uno", "Militar", "Religioso"], c: 0, e: "El pueblo elige representantes." },
      { t: "Que es un derecho?", o: ["Lo que nos corresponde", "Una obligacion", "Un castigo", "Una ley"], c: 0, e: "Los derechos son garantias." },
      { t: "Que es la constitucion?", o: ["Ley suprema", "Ley escolar", "Reglamento", "Norma"], c: 0, e: "La ley mas importante." },
      { t: "Que es el voto?", o: ["Elegir representantes", "Pagar impuestos", "Estudiar", "Trabajar"], c: 0, e: "El voto es elegir gobernantes." },
      { t: "Que es la libertad?", o: ["Poder decidir", "Obedecer", "No hablar", "No pensar"], c: 0, e: "La libertad es elegir." }
    ],
    "Cultura peruana": [
      { t: "Que es el Inti Raymi?", o: ["Fiesta del sol", "Fiesta de la luna", "Fiesta del agua", "Fiesta de la tierra"], c: 0, e: "La fiesta inca al sol." },
      { t: "Instrumento tipico del Peru?", o: ["Charango", "Guitarra", "Piano", "Violin"], c: 0, e: "El charango es andino." },
      { t: "Danza clasica del Peru?", o: ["Marinera", "Samba", "Tango", "Salsa"], c: 0, e: "La marinera es costeña." },
      { t: "Plato tipico del Peru?", o: ["Ceviche", "Paella", "Sushi", "Tacos"], c: 0, e: "El ceviche es de pescado." },
      { t: "Que celebrate el 28 de julio?", o: ["Fiestas patrias", "Navidad", "Año nuevo", "Dia del padre"], c: 0, e: "La independencia." }
    ],
    "Organizacion social": [
      { t: "Que es la familia?", o: ["Grupo de parentesco", "Grupo de amigos", "Grupo de trabajo", "Grupo escolar"], c: 0, e: "La familia es por lazos de sangre." },
      { t: "Que es la comunidad?", o: ["Grupo en un lugar", "Una escuela", "Un hospital", "Un mercado"], c: 0, e: "La comunidad vive en un mismo lugar." },
      { t: "Que es un lider?", o: ["Quien guia al grupo", "Quien obedece", "Quien trabaja", "Quien estudia"], c: 0, e: "El lider toma decisiones." },
      { t: "Que es una institucion?", o: ["Organizacion con fines", "Una casa", "Un parque", "Un rio"], c: 0, e: "Las instituciones tienen objetivos." },
      { t: "Que es la cooperacion?", o: ["Ayudarse mutuamente", "Competir", "Luchar", "Ignorar"], c: 0, e: "La cooperacion es trabajar juntos." }
    ]
  };
  const qs = bankP[t] || bankP["Historia del Peru"];
  const bq = qs[rand(0, qs.length - 1)];
  return q("Personal Social", bq.t, bq.o, bq.c, bq.e);
}

function genCiencia(t) {
  const bankCi = {
    "Ser vivo": [
      { t: "Que es un ser vivo?", o: ["Organismo que crece", "Objeto inanimado", "Mineral", "Maquina"], c: 0, e: "Los seres vivos nacen y crecen." },
      { t: "Cual no es ser vivo?", o: ["La piedra", "El perro", "La planta", "El pez"], c: 0, e: "La piedra no tiene vida." },
      { t: "Que necesitan los seres vivos?", o: ["Alimento y agua", "Solo agua", "Solo aire", "Nada"], c: 0, e: "Necesitan agua y alimento." },
      { t: "Que es la fotosintesis?", o: ["Proceso de las plantas", "Respirar", "Crecer", "Dormir"], c: 0, e: "Las plantas transforman luz en alimento." },
      { t: "Cual es un animal vertebrado?", o: ["Perro", "Lombriz", "Mariposa", "Caracol"], c: 0, e: "El perro tiene columna vertebral." }
    ],
    "Cuerpo humano": [
      { t: "Cuantos huesos tiene el cuerpo humano?", o: ["206", "100", "300", "150"], c: 0, e: "El adulto tiene 206 huesos." },
      { t: "Que organo bombea la sangre?", o: ["Corazon", "Higado", "Riñon", "Pulmon"], c: 0, e: "El corazon es la bomba natural." },
      { t: "Que sistema respiramos?", o: ["Respiratorio", "Digestivo", "Nervioso", "Circulatorio"], c: 0, e: "El respiratorio lleva aire." },
      { t: "Que organo filtra la sangre?", o: ["Riñon", "Corazon", "Higado", "Pulmon"], c: 0, e: "El riñon filtra la sangre." },
      { t: "Cuantos sentidos tenemos?", o: ["5", "3", "4", "6"], c: 0, e: "Vista, oido, tacto, gusto y olfato." }
    ],
    "Materia": [
      { t: "Que es la materia?", o: ["Todo lo que tiene masa", "Solo agua", "Solo aire", "Solo tierra"], c: 0, e: "La materia ocupa espacio." },
      { t: "Cuantos estados de la materia hay?", o: ["3", "2", "4", "5"], c: 0, e: "Solido, liquido y gaseoso." },
      { t: "Que es un solido?", o: ["Materia con forma fija", "Fluido", "Gas", "Plasma"], c: 0, e: "El solido tiene forma propia." },
      { t: "Que es un liquido?", o: ["Toma forma del recipiente", "Tiene forma fija", "Es gas", "Es plasma"], c: 0, e: "El liquido fluye." },
      { t: "Que es un gas?", o: ["Se expande y llena todo", "Tiene forma fija", "Es liquido", "Es solido"], c: 0, e: "El gas no tiene forma fija." }
    ],
    "Energia": [
      { t: "Que es la energia?", o: ["Capacidad de hacer trabajo", "Agua", "Tierra", "Fuego"], c: 0, e: "La energia mueve las cosas." },
      { t: "Que es la energia solar?", o: ["Energia del sol", "Energia del agua", "Energia del viento", "Nuclear"], c: 0, e: "El sol nos da energia." },
      { t: "Que es la energia electrica?", o: ["Energia de los electrones", "Energia del agua", "Energia del viento", "Nuclear"], c: 0, e: "La electricidad mueve aparatos." },
      { t: "Que es la energia cinetica?", o: ["Energia del movimiento", "Energia guardada", "Energia del sol", "Nuclear"], c: 0, e: "Un objeto en movimiento." },
      { t: "Que es la energia potencial?", o: ["Energia almacenada", "Energia del movimiento", "Energia del sol", "Nuclear"], c: 0, e: "La potencial depende de la posicion." }
    ],
    "Planeta Tierra": [
      { t: "Cuantos planetas hay en el sistema solar?", o: ["8", "7", "9", "10"], c: 0, e: "Mercurio a Neptuno." },
      { t: "Cual es el planeta mas cercano al sol?", o: ["Mercurio", "Venus", "Tierra", "Marte"], c: 0, e: "Mercurio es el primero." },
      { t: "Cual es nuestro planeta?", o: ["Tierra", "Marte", "Venus", "Jupiter"], c: 0, e: "Vivimos en la Tierra." },
      { t: "Que es un volcan?", o: ["Abertura que expulsa lava", "Montaña", "Rio", "Lago"], c: 0, e: "El volcan expulsa materiales." },
      { t: "Que es un terremoto?", o: ["Movimiento de la corteza", "Lluvia", "Viento", "Sol"], c: 0, e: "El terremoto sacude la tierra." }
    ],
    "Cuidado del ambiente": [
      { t: "Que es la contaminacion?", o: ["Entrada de residuos al ambiente", "Limpiar", "Plantar", "Reciclar"], c: 0, e: "La contaminacion ensucia." },
      { t: "Que es el reciclaje?", o: ["Reusar materiales", "Tirar basura", "Contaminar", "Quemar"], c: 0, e: "El reciclaje transforma residuos." },
      { t: "Que es la deforestacion?", o: ["Corte masivo de arboles", "Plantar", "Reciclar", "Limpiar"], c: 0, e: "La deforestacion destruye bosques." },
      { t: "Que es el agua potable?", o: ["Agua apta para beber", "Agua de mar", "Agua sucia", "Agua de lluvia"], c: 0, e: "El agua potable no tiene contaminantes." },
      { t: "Que es la energia renovable?", o: ["Energia que no se agota", "Petroleo", "Carbon", "Gas"], c: 0, e: "La solar, eolica e hidraulica." }
    ]
  };
  const qs = bankCi[t] || bankCi["Ser vivo"];
  const bq = qs[rand(0, qs.length - 1)];
  return q("Ciencia y Tecnologia", bq.t, bq.o, bq.c, bq.e);
}

function genIngles(t) {
  const bankI = {
    "Greetings": [
      { t: "How do you say 'Hola' in English?", o: ["Hello", "Goodbye", "Please", "Thanks"], c: 0, e: "Hello = Hola." },
      { t: "How do you say 'Adios' in English?", o: ["Goodbye", "Hello", "Please", "Thanks"], c: 0, e: "Goodbye = Adios." },
      { t: "How do you say 'Por favor' in English?", o: ["Please", "Thanks", "Hello", "Goodbye"], c: 0, e: "Please = Por favor." },
      { t: "How do you say 'Gracias' in English?", o: ["Thanks", "Please", "Hello", "Goodbye"], c: 0, e: "Thanks = Gracias." },
      { t: "How do you say 'Buenos dias' in English?", o: ["Good morning", "Good night", "Good afternoon", "Goodbye"], c: 0, e: "Good morning = Buenos dias." }
    ],
    "Family": [
      { t: "How do you say 'Madre' in English?", o: ["Mother", "Father", "Sister", "Brother"], c: 0, e: "Mother = Madre." },
      { t: "How do you say 'Padre' in English?", o: ["Father", "Mother", "Sister", "Brother"], c: 0, e: "Father = Padre." },
      { t: "How do you say 'Hermana' in English?", o: ["Sister", "Brother", "Mother", "Father"], c: 0, e: "Sister = Hermana." },
      { t: "How do you say 'Hermano' in English?", o: ["Brother", "Sister", "Mother", "Father"], c: 0, e: "Brother = Hermano." },
      { t: "How do you say 'Abuelo' in English?", o: ["Grandfather", "Grandmother", "Uncle", "Aunt"], c: 0, e: "Grandfather = Abuelo." }
    ],
    "Numbers": [
      { t: "How do you say '1' in English?", o: ["One", "Two", "Three", "Four"], c: 0, e: "One = 1." },
      { t: "How do you say '5' in English?", o: ["Five", "Four", "Six", "Seven"], c: 0, e: "Five = 5." },
      { t: "How do you say '10' in English?", o: ["Ten", "Eleven", "Twelve", "Nine"], c: 0, e: "Ten = 10." },
      { t: "How do you say '20' in English?", o: ["Twenty", "Thirty", "Forty", "Ten"], c: 0, e: "Twenty = 20." },
      { t: "How do you say '100' in English?", o: ["One hundred", "One thousand", "Ten", "Twenty"], c: 0, e: "One hundred = 100." }
    ],
    "Colors": [
      { t: "How do you say 'Rojo' in English?", o: ["Red", "Blue", "Green", "Yellow"], c: 0, e: "Red = Rojo." },
      { t: "How do you say 'Azul' in English?", o: ["Blue", "Red", "Green", "Yellow"], c: 0, e: "Blue = Azul." },
      { t: "How do you say 'Verde' in English?", o: ["Green", "Red", "Blue", "Yellow"], c: 0, e: "Green = Verde." },
      { t: "How do you say 'Amarillo' in English?", o: ["Yellow", "Red", "Blue", "Green"], c: 0, e: "Yellow = Amarillo." },
      { t: "How do you say 'Negro' in English?", o: ["Black", "White", "Brown", "Gray"], c: 0, e: "Black = Negro." }
    ],
    "Daily routine": [
      { t: "How do you say 'Despertarse' in English?", o: ["Wake up", "Sleep", "Eat", "Run"], c: 0, e: "Wake up = Despertarse." },
      { t: "How do you say 'Ducharse' in English?", o: ["Take a shower", "Brush teeth", "Comb hair", "Wash hands"], c: 0, e: "Take a shower = Ducharse." },
      { t: "How do you say 'Desayunar' in English?", o: ["Have breakfast", "Have lunch", "Have dinner", "Snack"], c: 0, e: "Have breakfast = Desayunar." },
      { t: "How do you say 'Dormir' in English?", o: ["Sleep", "Wake up", "Eat", "Run"], c: 0, e: "Sleep = Dormir." },
      { t: "How do you say 'Estudiar' in English?", o: ["Study", "Play", "Eat", "Sleep"], c: 0, e: "Study = Estudiar." }
    ],
    "Animals": [
      { t: "How do you say 'Perro' in English?", o: ["Dog", "Cat", "Bird", "Fish"], c: 0, e: "Dog = Perro." },
      { t: "How do you say 'Gato' in English?", o: ["Cat", "Dog", "Bird", "Fish"], c: 0, e: "Cat = Gato." },
      { t: "How do you say 'Caballo' in English?", o: ["Horse", "Cow", "Sheep", "Pig"], c: 0, e: "Horse = Caballo." },
      { t: "How do you say 'Vaca' in English?", o: ["Cow", "Horse", "Sheep", "Pig"], c: 0, e: "Cow = Vaca." },
      { t: "How do you say 'Conejo' in English?", o: ["Rabbit", "Mouse", "Cat", "Dog"], c: 0, e: "Rabbit = Conejo." }
    ],
    "Weather": [
      { t: "How do you say 'Lluvia' in English?", o: ["Rain", "Snow", "Wind", "Sun"], c: 0, e: "Rain = Lluvia." },
      { t: "How do you say 'Nieve' in English?", o: ["Snow", "Rain", "Wind", "Sun"], c: 0, e: "Snow = Nieve." },
      { t: "How do you say 'Viento' in English?", o: ["Wind", "Rain", "Snow", "Sun"], c: 0, e: "Wind = Viento." },
      { t: "How do you say 'Sol' in English?", o: ["Sun", "Moon", "Star", "Cloud"], c: 0, e: "Sun = Sol." },
      { t: "How do you say 'Calor' in English?", o: ["Hot", "Cold", "Warm", "Cool"], c: 0, e: "Hot = Calor." }
    ],
    "Food": [
      { t: "How do you say 'Pan' in English?", o: ["Bread", "Rice", "Pasta", "Meat"], c: 0, e: "Bread = Pan." },
      { t: "How do you say 'Leche' in English?", o: ["Milk", "Water", "Juice", "Coffee"], c: 0, e: "Milk = Leche." },
      { t: "How do you say 'Fruta' in English?", o: ["Fruit", "Vegetable", "Meat", "Bread"], c: 0, e: "Fruit = Fruta." },
      { t: "How do you say 'Carne' in English?", o: ["Meat", "Fish", "Chicken", "Egg"], c: 0, e: "Meat = Carne." },
      { t: "How do you say 'Manzana' in English?", o: ["Apple", "Banana", "Orange", "Grape"], c: 0, e: "Apple = Manzana." }
    ]
  };
  const qs = bankI[t] || bankI["Greetings"];
  const bq = qs[rand(0, qs.length - 1)];
  return q("Ingles", bq.t, bq.o, bq.c, bq.e);
}

// ── Main Generator ────────────────────────────
function gen(topic) {
  const materia = topic.split(":")[0];
  const tema = topic.split(":")[1] || "all";

  if (materia === "Matematica") return genMatematica(tema);
  if (materia === "Comunicacion") return genComunicacion(tema);
  if (materia === "Personal Social") return genPersonal(tema);
  if (materia === "Ciencia y Tecnologia") return genCiencia(tema);
  if (materia === "Ingles") return genIngles(tema);
  return genMatematica("Fracciones");
}

function makeQuestions() {
  const arr = [];
  const temasM = allTopics.matematica;
  const temasC = allTopics.comunicacion;
  const temasP = allTopics.personal;
  const temasCi = allTopics.ciencia;
  const temasI = allTopics.ingles;

  for (let i = 0; i < 20; i++) {
    arr.push(gen(`Matematica:${temasM[rand(0, temasM.length-1)]}`));
    arr.push(gen(`Comunicacion:${temasC[rand(0, temasC.length-1)]}`));
    arr.push(gen(`Personal Social:${temasP[rand(0, temasP.length-1)]}`));
    arr.push(gen(`Ciencia y Tecnologia:${temasCi[rand(0, temasCi.length-1)]}`));
    arr.push(gen(`Ingles:${temasI[rand(0, temasI.length-1)]}`));
  }

  return shuffle(arr);
}

function startExam() {
  const count = 100;
  questions = makeQuestions().slice(0, count);
  answers = Array(questions.length).fill(null);
  idx = 0;

  document.getElementById("setup").style.display = "none";
  document.getElementById("result").style.display = "none";
  document.getElementById("exam").style.display = "block";
  document.getElementById("finishBtn").style.display = "none";

  render();

  remaining = 60 * 60;
  clearInterval(timerId);
  timerId = setInterval(() => { remaining--; showTime(); if (remaining <= 0) finish(); }, 1000);
  showTime();
}
