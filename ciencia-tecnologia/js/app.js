const topics = ["Ser vivo", "Cuerpo humano", "Materia", "Energia", "Planeta Tierra", "Cuidado del ambiente"];

const bank = {
  "Ser vivo": [
    { t: "Que es un ser vivo?", o: ["Organismo que crece", "Objeto inanimado", "Mineral", "Máquina"], c: 0, e: "Los seres vivos nacen, crecen y se reproducen." },
    { t: "Cual no es ser vivo?", o: ["La piedra", "El perro", "La planta", "El pez"], c: 0, e: "La piedra no tiene vida." },
    { t: "Que necesitan los seres vivos?", o: ["Alimento y agua", "Solo agua", "Solo aire", "Nada"], c: 0, e: "Necesitan agua y alimento para vivir." },
    { t: "Que son las plantas?", o: ["Seres vivos", "Objetos", "Animales", "Minerales"], c: 0, e: "Las plantas son seres vivos." },
    { t: "Que es la fotosintesis?", o: ["Proceso de las plantas", "Respirar", "Crecer", "Dormir"], c: 0, e: "Las plantas transforman la luz en alimento." },
    { t: "Cual es un animal vertebrado?", o: ["Perro", "Lombriz", "Mariposa", "Caracol"], c: 0, e: "El perro tiene columna vertebral." },
    { t: "Que es la respiracion?", o: ["Intercambio de gases", "Comer", "Dormir", "Crecer"], c: 0, e: "Respirar es tomar oxigeno y soltar CO2." },
    { t: "Que es un hibrido?", o: ["Cruce de dos razas", "Animal salvaje", "Planta seca", "Roca"], c: 0, e: "El hibrido es mezcla de dos variedades." },
    { t: "Que son los hongos?", o: ["Ser vivo sin clorofila", "Planta", "Animal", "Mineral"], c: 0, e: "Los hongos no tienen clorofila." },
    { t: "Que es la cadena alimenticia?", o: ["Sucesion de quién come a quién", "Cadena real", "Cadena de montaña", "Cadena de oro"], c: 0, e: "Muestra quién se alimenta de quién." },
    { t: "Que es un ecosistema?", o: ["Seres vivos + medio ambiente", "Solo animales", "Solo plantas", "Un bosque"], c: 0, e: "El ecosistema incluye todos los factores." },
    { t: "Que es la adaptacion?", o: ["Ajustarse al medio", "Morir", "Crecer", "Nacer"], c: 0, e: "Los seres vivos se adaptan al entorno." },
    { t: "Que es la reproduccion?", o: ["Generar nuevos seres", "Alimentarse", "Crecer", "Morir"], c: 0, e: "La reproduccion genera nuevos individuos." },
    { t: "Que es un mamifero?", o: ["Animal con pelo y leche", "Pez", "Ave", "Reptil"], c: 0, e: "Los mamíferos tienen pelo y dan leche." },
    { t: "Que es un reptil?", o: ["Animal de sangre fria con escamas", "Ave", "Mamifero", "Pez"], c: 0, e: "Los reptiles tienen escamas." },
    { t: "Que es una ave?", o: ["Animal con plumas y alas", "Pez", "Reptil", "Mamifero"], c: 0, e: "Las aves tienen plumas y vuelan." },
    { t: "Que es un pez?", o: ["Animal acuatico con branquias", "Ave", "Reptil", "Mamifero"], c: 0, e: "Los peces respiran por branquias." },
    { t: "Que es un anfibio?", o: ["Animal que vive en agua y tierra", "Pez", "Reptil", "Ave"], c: 0, e: "Los anfibios mudan de piel." },
    { t: "Que es un invertebrado?", o: ["Sin columna vertebral", "Con columna", "Con plumas", "Con escamas"], c: 0, e: "Los invertebrados no tienen columna." },
    { t: "Que es un arthropodo?", o: ["Animal con exoesqueleto", "Vertebrado", "Pez", "Ave"], c: 0, e: "Los insectos son arthropodos." }
  ],
  "Cuerpo humano": [
    { t: "Cuantos huesos tiene el cuerpo humano?", o: ["206", "100", "300", "150"], c: 0, e: "El adulto tiene 206 huesos." },
    { t: "Que órgano bombea la sangre?", o: ["Corazon", "Higado", "Riñon", "Pulmon"], c: 0, e: "El corazon es la bomba natural." },
    { t: "Que sistema respiramos?", o: ["Respiratorio", "Digestivo", "Nervioso", "Circulatorio"], c: 0, e: "El respiratorio lleva aire a los pulmones." },
    { t: "Que órgano filtra la sangre?", o: ["Riñon", "Corazon", "Higado", "Pulmon"], c: 0, e: "El riñon filtra la sangre." },
    { t: "Que sistema nos permite mover?", o: ["Locomotor", "Digestivo", "Respiratorio", "Nervioso"], c: 0, e: "El locomotor mueve el cuerpo." },
    { t: "Que es la digestión?", o: ["Proceso de absorber alimentos", "Respirar", "Dormir", "Correr"], c: 0, e: "La digestión descompone los alimentos." },
    { t: "Cuantos sentidos tenemos?", o: ["5", "3", "4", "6"], c: 0, e: "Vista, oido, tacto, gusto y olfato." },
    { t: "Que es el cerebro?", o: ["Centro de control del cuerpo", "Un musculo", "Un hueso", "Un órgano digestivo"], c: 0, e: "El cerebro controla todo el cuerpo." },
    { t: "Que es la sangre?", o: ["Liquido que transporta oxigeno", "Agua", "Comida", "Aire"], c: 0, e: "La sangre lleva oxigeno y nutrientes." },
    { t: "Que es un musculo?", o: ["Tejido que se contrae", "Hueso", "Nervio", "Piel"], c: 0, e: "Los músculos permiten el movimiento." },
    { t: "Que es la piel?", o: ["Organo de proteccion", "Hueso", "Musculo", "Nervio"], c: 0, e: "La piel cubre y protege el cuerpo." },
    { t: "Que es un nervio?", o: ["Transmite señales", "Contrae", "Protege", "Respira"], c: 0, e: "Los nervios llevan información al cerebro." },
    { t: "Que es el estomago?", o: ["Digiere alimentos", "Respira", "Bombea sangre", "Filtra"], c: 0, e: "El estómago digiere los alimentos." },
    { t: "Que es el higado?", o: ["Filtra toxinas", "Bombea sangre", "Respira", "Ve"], c: 0, e: "El higado limpia la sangre." },
    { t: "Que es un organo?", o: ["Conjunto de tejidos", "Tejido unico", "Célula", "Hueso"], c: 0, e: "Los órganos trabajan juntos." },
    { t: "Que es un tejido?", o: ["Grupo de células", "Un órgano", "Un hueso", "Un musculo"], c: 0, e: "Los tejidos forman los órganos." },
    { t: "Que es una célula?", o: ["Unidad basica del cuerpo", "Un órgano", "Un hueso", "Un musculo"], c: 0, e: "La célula es la unidad mas pequeña." },
    { t: "Que es el corazón?", o: ["Bomba que mueve sangre", "Cerebro", "Pulmon", "Estomago"], c: 0, e: "El corazón impulsa la sangre." },
    { t: "Que es el pulmon?", o: ["Organo respiratorio", "Corazon", "Riñon", "Estomago"], c: 0, e: "El pulmon toma oxigeno del aire." },
    { t: "Que es un diente?", o: ["Organo para masticar", "Hueso", "Musculo", "Nervio"], c: 0, e: "Los dientes mastican los alimentos." }
  ],
  "Materia": [
    { t: "Que es la materia?", o: ["Todo lo que tiene masa", "Solo agua", "Solo aire", "Solo tierra"], c: 0, e: "La materia ocupa espacio y tiene masa." },
    { t: "Cuantos estados de la materia hay?", o: ["3", "2", "4", "5"], c: 0, e: "Solido, liquido y gaseoso." },
    { t: "Que es un solido?", o: ["Materia con forma fija", "Fluido", "Gas", "Plasma"], c: 0, e: "El solido tiene forma propia." },
    { t: "Que es un liquido?", o: ["Toma forma del recipiente", "Tiene forma fija", "Es gas", "Es plasma"], c: 0, e: "El liquido fluye." },
    { t: "Que es un gas?", o: ["Se expande y llena todo", "Tiene forma fija", "Es liquido", "Es solido"], c: 0, e: "El gas no tiene forma fija." },
    { t: "Que es el agua en estado liquido?", o: ["Agua", "Hielo", "Vapor", "Nieve"], c: 0, e: "El agua liquida es la que bebemos." },
    { t: "Que es la evaporation?", o: ["Liquido a gas por calor", "Gas a liquido", "Solido a liquido", "Liquido a solido"], c: 0, e: "El agua se evapora con el calor." },
    { t: "Que es la condensacion?", o: ["Gas a liquido por frio", "Liquido a gas", "Solido a liquido", "Liquido a solido"], c: 0, e: "El vapor se convierte en agua." },
    { t: "Que es la solidificacion?", o: ["Liquido a solido por frio", "Solido a liquido", "Gas a liquido", "Liquido a gas"], c: 0, e: "El agua se congela en hielo." },
    { t: "Que es la fusion?", o: ["Solido a liquido por calor", "Liquido a gas", "Gas a liquido", "Liquido a solido"], c: 0, e: "El hielo se derrite." },
    { t: "Que es un objeto solido?", o: ["Tiene forma fija", "Fluye", "Se expande", "Es invisible"], c: 0, e: "Los solids mantienen su forma." },
    { t: "Que es un objeto liquido?", o: ["Toma forma del recipiente", "Tiene forma fija", "Se expande", "Es invisible"], c: 0, e: "Los liquids se adaptan al envase." },
    { t: "Que es un objeto gaseoso?", o: ["Se expande y llena todo", "Tiene forma fija", "Es liquido", "Es solido"], c: 0, e: "Los gases llenan cualquier espacio." },
    { t: "Que es una mezcla?", o: ["Combinacion de materiales", "Solo un material", "Un compuesto", "Un elemento"], c: 0, e: "La mezcla tiene varios componentes." },
    { t: "Que es una solucion?", o: ["Mezcla homogenea", "Mezcla heterogenea", "Solo un material", "Un gas"], c: 0, e: "La solucion se mezcla uniforme." },
    { t: "Que es un compuesto?", o: ["Sustancia de dos o mas elementos", "Un solo elemento", "Una mezcla", "Un gas"], c: 0, e: "El agua es un compuesto de H y O." },
    { t: "Que es un elemento quimico?", o: ["Sustancia pura que no se descompone", "Compuesto", "Mezcla", "Gas"], c: 0, e: "Los elementos no se dividen quimicamente." },
    { t: "Que es el oxigeno?", o: ["Elemento que respiramos", "Agua", "Tierra", "Fuego"], c: 0, e: "El oxigeno es esencial para vivir." },
    { t: "Que es el hidrogeno?", o: ["Elemento más ligero", "Agua", "Tierra", "Fuego"], c: 0, e: "El hidrogeno es el mas ligero." },
    { t: "Que es el carbono?", o: ["Elemento de la vida", "Agua", "Tierra", "Fuego"], c: 0, e: "El carbono forma parte de todos los seres vivos." }
  ],
  "Energia": [
    { t: "Que es la energia?", o: ["Capacidad de hacer trabajo", "Agua", "Tierra", "Fuego"], c: 0, e: "La energia mueve las cosas." },
    { t: "Que es la energia solar?", o: ["Energia del sol", "Energia del agua", "Energia del viento", "Energia nuclear"], c: 0, e: "El sol nos da energia." },
    { t: "Que es la energia electrica?", o: ["Energia de los electrones", "Energia del agua", "Energia del viento", "Energia nuclear"], c: 0, e: "La electricidad mueve aparatos." },
    { t: "Que es la energia quimica?", o: ["Energia de las reacciones quimicas", "Energia del sol", "Energia del agua", "Energia nuclear"], c: 0, e: "La quimica esta en las baterias." },
    { t: "Que es la energia cinetica?", o: ["Energia del movimiento", "Energia guardada", "Energia del sol", "Energia nuclear"], c: 0, e: "Un objeto en movimiento tiene energia cinetica." },
    { t: "Que es la energia potencial?", o: ["Energia almacenada por posicion", "Energia del movimiento", "Energia del sol", "Energia nuclear"], c: 0, e: "La potencial depende de la posición." },
    { t: "Que es la energia termica?", o: ["Energia del calor", "Energia del frio", "Energia del viento", "Energia nuclear"], c: 0, e: "El calor es energia termica." },
    { t: "Que es la energia sonora?", o: ["Energia de las vibraciones", "Energia de la luz", "Energia del sol", "Energia nuclear"], c: 0, e: "El sonido es vibracion de aire." },
    { t: "Que es la energia luminosa?", o: ["Energia de la luz", "Energia del sonido", "Energia del calor", "Energia nuclear"], c: 0, e: "La luz viaja en ondas." },
    { t: "Que es la energia nuclear?", o: ["Energia de los atomos", "Energia del sol", "Energia del agua", "Energia del viento"], c: 0, e: "La nuclear viene de los atomos." },
    { t: "Que es la energia eolica?", o: ["Energia del viento", "Energia del sol", "Energia del agua", "Energia nuclear"], c: 0, e: "Los molinos aprovechan el viento." },
    { t: "Que es la energia hidraulica?", o: ["Energia del agua", "Energia del viento", "Energia del sol", "Energia nuclear"], c: 0, e: "El agua en movimiento genera electricidad." },
    { t: "Que es la energia geotermica?", o: ["Energia del calor de la Tierra", "Energia del sol", "Energia del viento", "Energia nuclear"], c: 0, e: "El calor interno de la Tierra." },
    { t: "Que es un foco de energia?", o: ["Origen de la energia", "Destino de la energia", "Tipo de energia", "Un aparato"], c: 0, e: "El foco es la fuente de energia." },
    { t: "Que es la conservacion de energia?", o: ["No se crea ni se destruye", "Se crea", "Se destruye", "Desaparece"], c: 0, e: "La energia se transforma, no se pierde." },
    { t: "Que es un circuito electrico?", o: ["Camino de la electricidad", "Un aparato", "Un foco", "Un interruptor"], c: 0, e: "El circuito lleva la electricidad." },
    { t: "Que es un generador?", o: ["Aparato que produce electricidad", "Un foco", "Un interruptor", "Un cable"], c: 0, e: "El generador crea energia electrica." },
    { t: "Que es un motor?", o: ["Convierte electricidad en movimiento", "Un foco", "Un interruptor", "Un cable"], c: 0, e: "El motor usa electricidad para moverse." },
    { t: "Que es una bateria?", o: ["Almacena energia quimica", "Un foco", "Un interruptor", "Un cable"], c: 0, e: "La bateria guarda energia." },
    { t: "Que es un transformador?", o: ["Cambia voltaje electrico", "Un foco", "Un interruptor", "Un cable"], c: 0, e: "El transformador sube o baja el voltaje." }
  ],
  "Planeta Tierra": [
    { t: "Cuantos planetas hay en el sistema solar?", o: ["8", "7", "9", "10"], c: 0, e: "Mercurio a Neptuno." },
    { t: "Cual es el planeta mas cercano al sol?", o: ["Mercurio", "Venus", "Tierra", "Marte"], c: 0, e: "Mercurio es el primero." },
    { t: "Cual es nuestro planeta?", o: ["Tierra", "Marte", "Venus", "Jupiter"], c: 0, e: "Vivimos en la Tierra." },
    { t: "Cuantos satelites naturales tiene la Tierra?", o: ["1", "2", "3", "0"], c: 0, e: "La Luna." },
    { t: "Que es la atmosfera?", o: ["Capa de gases de la Tierra", "El agua", "La tierra", "El sol"], c: 0, e: "La atmosfera nos protege." },
    { t: "Que es el nucleo de la Tierra?", o: ["Centro caliente", "La corteza", "La atmosfera", "El agua"], c: 0, e: "El nucleo es la parte mas caliente." },
    { t: "Que es la corteza terrestre?", o: ["Capa solida exterior", "El nucleo", "La atmosfera", "El magma"], c: 0, e: "La corteza es donde vivimos." },
    { t: "Que es un volcan?", o: ["Abertura que expulsa lava", "Montaña", "Rio", "Lago"], c: 0, e: "El volcan expulsa materiales del interior." },
    { t: "Que es un terremoto?", o: ["Movimiento de la corteza", "Lluvia", "Viento", "Sol"], c: 0, e: "El terremoto sacude la tierra." },
    { t: "Que es una placa tectonica?", o: ["Fragmento de corteza que se mueve", "Volcan", "Montaña", "Rio"], c: 0, e: "Las placas se mueven y causan terremotos." },
    { t: "Que es el magma?", o: ["Roca fundida bajo tierra", "Agua", "Aire", "Tierra"], c: 0, e: "El magma esta bajo la corteza." },
    { t: "Que es la lava?", o: ["Magma en la superficie", "Agua", "Aire", "Tierra"], c: 0, e: "La lava sale del volcan." },
    { t: "Que es un meteorito?", o: ["Roca espacial que llega a la Tierra", "Estrella", "Planeta", "Cometa"], c: 0, e: "Los meteoritos caen del espacio." },
    { t: "Que es una estrella?", o: ["Astro que brilla por fusion", "Planeta", "Satélite", "Asteroides"], c: 0, e: "Las estrellas producen luz y calor." },
    { t: "Que es el sistema solar?", o: ["Sol + planetas que lo orbitan", "Solo el sol", "Solo los planetas", "Una galaxia"], c: 0, e: "El sistema solar tiene el Sol y los planetas." },
    { t: "Cual es el planeta mas grande?", o: ["Jupiter", "Saturno", "Tierra", "Marte"], c: 0, e: "Jupiter es el gigante gaseoso." },
    { t: "Que es una galaxia?", o: ["Conjunto de estrellas", "Planeta", "Sol", "Estrella"], c: 0, e: "Las galaxias tienen millones de estrellas." },
    { t: "Que es el Sol?", o: ["Estrella que nos da luz", "Planeta", "Luna", "Cometa"], c: 0, e: "El Sol es nuestra estrella." },
    { t: "Que es la Luna?", o: ["Satelite natural de la Tierra", "Planeta", "Estrella", "Sol"], c: 0, e: "La Luna orbita la Tierra." },
    { t: "Que es un exoplaneta?", o: ["Planeta fuera del sistema solar", "Planeta del sistema solar", "Estrella", "Satelite"], c: 0, e: "Los exoplanetas estan fuera de nuestro sistema." }
  ],
  "Cuidado del ambiente": [
    { t: "Que es la contaminacion?", o: ["Entrada de residuos al ambiente", "Limpiar", "Plantar", "Reciclar"], c: 0, e: "La contaminacion ensucia el aire, agua y tierra." },
    { t: "Que es el reciclaje?", o: ["Reusar materiales", "Tirar basura", "Contaminar", "Quemar"], c: 0, e: "El reciclaje transforma residuos en nuevos productos." },
    { t: "Que es la deforestacion?", o: ["Corte masivo de arboles", "Plantar", "Reciclar", "Limpiar"], c: 0, e: "La deforestacion destruye bosques." },
    { t: "Que es el calentamiento global?", o: ["Aumento de temperatura por gases", "Enfriamiento", "Lluvia", "Nieve"], c: 0, e: "Los gases de efecto invernadero calientan la Tierra." },
    { t: "Que es la energia renovable?", o: ["Energia que no se agota", "Petróleo", "Carbon", "Gas"], c: 0, e: "La solar, eolica e hidraulica son renovables." },
    { t: "Que es la basura organica?", o: ["Restos de comida", "Plastico", "Vidrio", "Metal"], c: 0, e: "La organica se descompone." },
    { t: "Que es la basura inorganica?", o: ["Plastico, vidrio, metal", "Restos de comida", "Papel", "Carton"], c: 0, e: "La inorganica tarda mucho en descomponerse." },
    { t: "Que es el agua potable?", o: ["Agua apta para beber", "Agua de mar", "Agua sucia", "Agua de lluvia"], c: 0, e: "El agua potable no tiene contaminantes." },
    { t: "Que es un ecosistema?", o: ["Seres vivos + medio ambiente", "Solo animales", "Solo plantas", "Un bosque"], c: 0, e: "El ecosistema incluye todos los factores." },
    { t: "Que es la biodiversidad?", o: ["Variedad de seres vivos", "Un solo tipo de planta", "Un solo animal", "Un bosque"], c: 0, e: "La biodiversidad es la variedad de vida." },
    { t: "Que es el agua residual?", o: ["Agua usada y contaminada", "Agua limpia", "Agua de lluvia", "Agua potable"], c: 0, e: "El agua residual necesita tratamiento." },
    { t: "Que es un parque ecológico?", o: ["Area protegida con flora y fauna", "Un zoológico", "Una escuela", "Un hospital"], c: 0, e: "Los parques ecológicos conservan la naturaleza." },
    { t: "Que es la huella ecologica?", o: ["Impacto humano en el ambiente", "Una huella de pie", "Una pisada", "Un camino"], c: 0, e: "Mide cuánto recurso usamos." },
    { t: "Que es la reducción de residuos?", o: ["Generar menos basura", "Generar mas basura", "Tirar basura", "Quemar basura"], c: 0, e: "Reducir es producir menos desechos." },
    { t: "Que es la reutilizacion?", o: ["Usar algo de nuevo", "Tirar", "Quemar", "Enterrar"], c: 0, e: "Reutilizar es dar nuevo uso a un objeto." },
    { t: "Que es un contaminante?", o: ["Sustancia que ensucia el ambiente", "Alimento", "Agua limpia", "Aire puro"], c: 0, e: "Los contaminantes dañan el ambiente." },
    { t: "Que es el smog?", o: ["Niebla de contaminantes", "Lluvia", "Nieve", "Viento"], c: 0, e: "El smog es contamination del aire." },
    { t: "Que es la capa de ozono?", o: ["Capa que nos protege del sol", "Capa de agua", "Capa de tierra", "Capa de aire"], c: 0, e: "La capa de ozono filtra los rayos UV." },
    { t: "Que es un vertedero?", o: ["Lugar donde se tira basura", "Parque", "Escuela", "Hospital"], c: 0, e: "Los vertederos acumulan residuos." },
    { t: "Que es la semilla?", o: ["Origen de una planta", "Fruta", "Flor", "Hoja"], c: 0, e: "De la semilla nace una planta nueva." }
  ]
};

function gen(t) {
  const questions = bank[t] || bank["Ser vivo"];
  const bq = questions[rand(0, questions.length - 1)];
  return q("Ciencia y Tecnologia", bq.t, bq.o, bq.c, bq.e);
}

function makeQuestions() {
  const t = document.getElementById("topic").value;
  const arr = [];
  for (let i = 0; i < 2000; i++) {
    const type = t === "all" ? topics[rand(0, topics.length - 1)] : t;
    arr.push(gen(type));
  }
  return arr;
}
