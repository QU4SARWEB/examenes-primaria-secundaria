const topics = ["Dios", "Jesus", "La Biblia", "Los sacramentos", "Los mandamientos", "Valores cristianos"];

const bank = {
  "Dios": [
    { t: "Quien creo el cielo y la tierra?", o: ["Dios", "Jesus", "Los hombres", "La naturaleza"], c: 0, e: "Dios es el creador del universo." },
    { t: "Que es la oracion?", o: ["Comunicacion con Dios", "Una cancion", "Un juego", "Una comida"], c: 0, e: "La oracion es hablar con Dios." },
    { t: "Que es la fe?", o: ["Creer en Dios sin ver", "Ver para creer", "No creer", "Dudar"], c: 0, e: "La fe es creer sin ver." },
    { t: "Que es la providencia?", o: ["Cuidado de Dios", "Un juego", "Una tarea", "Un castigo"], c: 0, e: "La providencia es el cuidado divino." },
    { t: "Que es la creacion?", o: ["Todo lo que Dios hizo", "Solo los animales", "Solo las plantas", "Solo los hombres"], c: 0, e: "La creacion es todo lo que existe." },
    { t: "Que es el amor de Dios?", o: ["Amor infinito y gratuito", "Amor condicional", "Amor que se compra", "Amor que se olvida"], c: 0, e: "El amor de Dios es incondicional." },
    { t: "Que es la gracia?", o: ["Regalo de Dios", "Un castigo", "Una prueba", "Un juego"], c: 0, e: "La gracia es un don gratuito de Dios." },
    { t: "Que es la Trinidad?", o: ["Dios Padre, Hijo y Espiritu Santo", "Tres dioses", "Tres personas humanas", "Tres angeles"], c: 0, e: "Un solo Dios en tres personas." },
    { t: "Que es el Espiritu Santo?", o: ["Tercera persona de la Trinidad", "Un angele", "Un profeta", "Un santo"], c: 0, e: "El Espiritu Santo es Dios que actua." },
    { t: "Que es un milagro?", o: ["Hecho sobrenatural de Dios", "Un juego", "Una tarea", "Un accidente"], c: 0, e: "El milagro es intervention divina." },
    { t: "Que es la voluntad de Dios?", o: ["Lo que Dios quiere para nosotros", "Lo que nosotros queremos", "Un juego", "Una tarea"], c: 0, e: "La voluntad de Dios es su plan." },
    { t: "Que es la misericordia?", o: ["Perdon de Dios", "Castigo", "Venganza", "Obligacion"], c: 0, e: "La misericordia es el perdon divino." },
    { t: "Que es la justicia divina?", o: ["Dios castiga el mal", "Dios premia el bien", "Dios no hace nada", "Dios juega"], c: 0, e: "La justicia divina premia y castiga." },
    { t: "Que es la esperanza?", o: ["Confianza en Dios", "Desesperanza", "Obligacion", "Castigo"], c: 0, e: "La esperanza es confiar en Dios." },
    { t: "Que es el pecado original?", o: ["Pecado de Adan y Eva", "Pecado nuestro", "Pecado de Jesus", "Pecado de los angeles"], c: 0, e: "El pecado de los primeros hombres." },
    { t: "Que es un angel?", o: ["Ser espiritual que sirve a Dios", "Un humano", "Un animal", "Un santo"], c: 0, e: "Los angeles son mensajeros de Dios." },
    { t: "Que es un santo?", o: ["Persona que vive con Dios", "Un dios", "Un profeta", "Un angele"], c: 0, e: "Los santos viven con Dios en el cielo." },
    { t: "Que es la Iglesia?", o: ["Comunidad de creyentes", "Un edificio", "Una escuela", "Un hospital"], c: 0, e: "La Iglesia es el pueblo de Dios." },
    { t: "Que es el bautismo?", o: ["Sacramento que limpia del pecado original", "Un baño", "Un juego", "Una comida"], c: 0, e: "El bautismo es el primer sacramento." },
    { t: "Que es la confirmacion?", o: ["Sacramento del Espiritu Santo", "Un examen", "Un juego", "Una tarea"], c: 0, e: "La confirmacion fortalece la fe." }
  ],
  "Jesus": [
    { t: "Quien es Jesus?", o: ["Hijo de Dios", "Un profeta", "Un rey", "Un santo"], c: 0, e: "Jesus es el Hijo de Dios." },
    { t: "Donde nacio Jesus?", o: ["Belén", "Jerusalen", "Nazaret", "Roma"], c: 0, e: "Jesus nacio en Belén." },
    { t: "Quien fue la madre de Jesus?", o: ["Maria", "Eva", "Sara", "Rut"], c: 0, e: "Maria es la madre de Jesus." },
    { t: "Quien fue el padre de Jesus?", o: ["Jose", "Pedro", "Juan", "Moises"], c: 0, e: "Jose fue el padre adoptivo." },
    { t: "Cuantos milagros hizo Jesus?", o: ["Muchos", "Uno", "Ninguno", "Dos"], c: 0, e: "Jesus hizo muchos milagros." },
    { t: "Que es la Eucaristia?", o: ["Cuerpo y sangre de Jesus", "Una comida", "Un juego", "Una tarea"], c: 0, e: "La Eucaristia es Jesus presente." },
    { t: "Que es la cruz?", o: ["Donde murio Jesus", "Un juego", "Una tarea", "Un adorno"], c: 0, e: "La cruz es el signo de la redencion." },
    { t: "Que es la resurreccion?", o: ["Jesus vuelve de la muerte", "Un juego", "Una tarea", "Un examen"], c: 0, e: "Jesus resucito al tercer dia." },
    { t: "Que es el Evangelio?", o: ["Palabra de Jesus", "Un libro", "Una cancion", "Un juego"], c: 0, e: "El Evangelio es la buena noticia." },
    { t: "Que es el Credo?", o: ["Profesion de fe", "Una cancion", "Un juego", "Una tarea"], c: 0, e: "El Credo resume la fe cristiana." },
    { t: "Que es el Padrenuestro?", o: ["Oracion que enseno Jesus", "Una cancion", "Un juego", "Una tarea"], c: 0, e: "Jesus enseno a orar asi." },
    { t: "Que es el Ave Maria?", o: ["Oracion a la Virgen Maria", "Una cancion", "Un juego", "Una tarea"], c: 0, e: "Es la oracion mas conocida." },
    { t: "Que es un sacramento?", o: ["Señal visible de gracia", "Un juego", "Una tarea", "Un examen"], c: 0, e: "Los sacramentos son signos de Dios." },
    { t: "Que es la confession?", o: ["Sacramento del perdon", "Un juego", "Una tarea", "Un examen"], c: 0, e: "La confession perdona los pecados." },
    { t: "Que es la comunión?", o: ["Recibir a Jesus en la Eucaristia", "Una comida", "Un juego", "Una tarea"], c: 0, e: "La comunion es recibir a Jesus." },
    { t: "Que es la misa?", o: ["Celebacion de la Eucaristia", "Una cancion", "Un juego", "Una tarea"], c: 0, e: "La misa es la celebracion principal." },
    { t: "Que es el agua bendita?", o: ["Agua bendecida por el sacerdote", "Agua normal", "Leche", "Jugo"], c: 0, e: "El agua bendita purifica." },
    { t: "Que es una vela?", o: ["Luz que representa a Jesus", "Un juego", "Una tarea", "Un adorno"], c: 0, e: "La vela simboliza la luz de Cristo." },
    { t: "Que es un rosario?", o: ["Oracion con cuentas", "Un juego", "Una tarea", "Un adorno"], c: 0, e: "El rosario es una oracion mariana." },
    { t: "Que es una peregrinacion?", o: ["Viaje a un lugar sagrado", "Un juego", "Una tarea", "Un examen"], c: 0, e: "La peregrinacion es ir a un santuario." }
  ],
  "La Biblia": [
    { t: "Que es la Biblia?", o: ["Palabra de Dios", "Un cuento", "Un juego", "Una tarea"], c: 0, e: "La Biblia es el libro sagrado." },
    { t: "Cuantos libros tiene la Biblia?", o: ["73", "50", "100", "20"], c: 0, e: "La Biblia tiene 73 libros." },
    { t: "Que es el Antiguo Testamento?", o: ["Parte antes de Jesus", "Parte de Jesus", "Un juego", "Una tarea"], c: 0, e: "El AT es la historia antes de Jesus." },
    { t: "Que es el Nuevo Testamento?", o: ["Parte de Jesus y la Iglesia", "Parte antes de Jesus", "Un juego", "Una tarea"], c: 0, e: "El NT relata la vida de Jesus." },
    { t: "Quienes escribieron la Biblia?", o: ["Hombres inspirados por Dios", "Dios directamente", "Los angeles", "Los santos"], c: 0, e: "Dios inspiró a los autores." },
    { t: "Que es el Génesis?", o: ["Primer libro de la Biblia", "Ultimo libro", "Un juego", "Una tarea"], c: 0, e: "El Génesis es el libro de la creacion." },
    { t: "Que es un salmo?", o: ["Cantico a Dios", "Una historia", "Un juego", "Una tarea"], c: 0, e: "Los salmos son cantos de alabanza." },
    { t: "Que es un evangelio?", o: ["Relato de la vida de Jesus", "Un juego", "Una tarea", "Un examen"], c: 0, e: "Hay cuatro evangelios." },
    { t: "Que es un parabola?", o: ["Enseñanza de Jesus con historia", "Un juego", "Una tarea", "Un examen"], c: 0, e: "Las parábolas enseñan verdades." },
    { t: "Que es un mandamiento?", o: ["Ley de Dios", "Un juego", "Una tarea", "Un examen"], c: 0, e: "Los mandamientos son leyes de Dios." },
    { t: "Cuantos mandamientos hay?", o: ["10", "5", "20", "7"], c: 0, e: "Hay 10 mandamientos." },
    { t: "Que es un profeta?", o: ["Hombre que habla por Dios", "Un rey", "Un santo", "Un angele"], c: 0, e: "Los profetas anuncian la palabra de Dios." },
    { t: "Que es un apóstol?", o: ["Discipulo de Jesus", "Un profeta", "Un santo", "Un angele"], c: 0, e: "Los apóstoles siguieron a Jesus." },
    { t: "Que es la misericordia?", o: ["Perdon de Dios", "Castigo", "Venganza", "Obligacion"], c: 0, e: "La misericordia es el perdon divino." },
    { t: "Que es la verdad?", o: ["Lo que Dios dice", "Mentira", "Un juego", "Una tarea"], c: 0, e: "La verdad es lo que Dios revela." },
    { t: "Que es la vida eterna?", o: ["Vivir con Dios para siempre", "Morir", "Un juego", "Una tarea"], c: 0, e: "La vida eterna es la meta del cristiano." },
    { t: "Que es el infierno?", o: ["Separacion eterna de Dios", "Un juego", "Una tarea", "Un castigo"], c: 0, e: "El infierno es la ausencia de Dios." },
    { t: "Que es el purgatorio?", o: ["Lugar de purificacion", "Un juego", "Una tarea", "Un castigo"], c: 0, e: "El purgatorio purifica antes del cielo." },
    { t: "Que es el cielo?", o: ["Lugar donde esta Dios", "Un juego", "Una tarea", "Un castigo"], c: 0, e: "El cielo es la union con Dios." },
    { t: "Que es la conversion?", o: ["Cambiar de vida para Dios", "Un juego", "Una tarea", "Un examen"], c: 0, e: "La conversion es volverse a Dios." }
  ],
  "Los sacramentos": [
    { t: "Cuantos sacramentos hay?", o: ["7", "5", "10", "12"], c: 0, e: "Hay 7 sacramentos." },
    { t: "Cual es el primer sacramento?", o: ["Bautismo", "Confirmacion", "Eucaristia", "Matrimonio"], c: 0, e: "El bautismo es el primero." },
    { t: "Que es la confirmacion?", o: ["Sacramento del Espiritu Santo", "Bautismo", "Eucaristia", "Matrimonio"], c: 0, e: "La confirmacion fortalece la fe." },
    { t: "Que es la Eucaristia?", o: ["Cuerpo y sangre de Jesus", "Bautismo", "Confirmacion", "Matrimonio"], c: 0, e: "La Eucaristia es Jesus presente." },
    { t: "Que es la penitencia?", o: ["Sacramento del perdon", "Bautismo", "Eucaristia", "Matrimonio"], c: 0, e: "La penitencia perdona los pecados." },
    { t: "Que es la unción de los enfermos?", o: ["Para enfermos y ancianos", "Bautismo", "Eucaristia", "Matrimonio"], c: 0, e: "Este sacramento da fuerza al enfermo." },
    { t: "Que es el orden sacerdotal?", o: ["Sacramento de los sacerdotes", "Bautismo", "Eucaristia", "Matrimonio"], c: 0, e: "El orden sacerdotal es para los que sirven." },
    { t: "Que es el matrimonio?", o: ["Unión de hombre y mujer ante Dios", "Bautismo", "Eucaristia", "Confirmacion"], c: 0, e: "El matrimonio es un sacramento de amor." },
    { t: "Quien administra el bautismo?", o: ["Un sacerdote o diacono", "Un medico", "Un maestro", "Un policia"], c: 0, e: "El bautismo lo administra un ministro." },
    { t: "Que se usa en el bautismo?", o: ["Agua", "Fuego", "Tierra", "Aire"], c: 0, e: "El agua simboliza la purificacion." },
    { t: "Que es el aceite?", o: ["Used en sacramentos", "Comida", "Bebida", "Juego"], c: 0, e: "El aceite santo se usa en sacramentos." },
    { t: "Que es el crisma?", o: ["Aceite perfumado para confirmacion", "Agua", "Vino", "Pan"], c: 0, e: "El crisma se usa en la confirmacion." },
    { t: "Que es la eucaristia?", o: ["Pan y vino que son Jesus", "Solo pan", "Solo vino", "Un juego"], c: 0, e: "El pan y vino se transforman." },
    { t: "Que es la misa?", o: ["Celebacion eucaristica", "Un juego", "Una tarea", "Una cancion"], c: 0, e: "La misa es la celebacion principal." },
    { t: "Que es un velatorio?", o: ["Velar a los muertos", "Una fiesta", "Un juego", "Una tarea"], c: 0, e: "El velatorio es orar por el difunto." },
    { t: "Que es una velacion?", o: ["Orar por los muertos", "Una fiesta", "Un juego", "Una tarea"], c: 0, e: "La velacion es acompañar al difunto." },
    { t: "Que es un funeral?", o: ["Misa por el difunto", "Una fiesta", "Un juego", "Una tarea"], c: 0, e: "El funeral es la misa de difuntos." },
    { t: "Que es un santuario?", o: ["Lugar sagrado", "Una escuela", "Un hospital", "Un parque"], c: 0, e: "El santuario es lugar de oracion." },
    { t: "Que es una parroquia?", o: ["Iglesia local", "Una escuela", "Un hospital", "Un parque"], c: 0, e: "La parroquia es la comunidad local." },
    { t: "Que es un obispo?", o: ["Lider de una diocesis", "Un sacerdote", "Un monje", "Un laico"], c: 0, e: "El obispo gobierna una diocesis." }
  ],
  "Los mandamientos": [
    { t: "Cuantos mandamientos hay?", o: ["10", "5", "20", "7"], c: 0, e: "Los 10 mandamientos." },
    { t: "Primer mandamiento?", o: ["Amar a Dios sobre todas las cosas", "No matar", "No robar", "No mentir"], c: 0, e: "El primero es amar a Dios." },
    { t: "Segundo mandamiento?", o: ["No tomar el nombre de Dios en vano", "No matar", "No robar", "No mentir"], c: 0, e: "No usar el nombre de Dios en vano." },
    { t: "Tercer mandamiento?", o: ["Santificar las fiestas", "No matar", "No robar", "No mentir"], c: 0, e: "Santificar el domingo y fiestas." },
    { t: "Cuarto mandamiento?", o: ["Honrar al padre y a la madre", "No matar", "No robar", "No mentir"], c: 0, e: "Honrar a los padres." },
    { t: "Quinto mandamiento?", o: ["No matar", "No robar", "No mentir", "No desear"], c: 0, e: "No matar es el quinto." },
    { t: "Sexto mandamiento?", o: ["No cometer adulterio", "No robar", "No mentir", "No desear"], c: 0, e: "No cometer adulterio." },
    { t: "Septimo mandamiento?", o: ["No robar", "No mentir", "No desear", "No matar"], c: 0, e: "No robar es el septimo." },
    { t: "Octavo mandamiento?", o: ["No mentir", "No desear", "No matar", "No robar"], c: 0, e: "No mentir es el octavo." },
    { t: "Noveno mandamiento?", o: ["No desear a la esposa del otro", "No matar", "No robar", "No mentir"], c: 0, e: "No desear a la ajena." },
    { t: "Decimo mandamiento?", o: ["No desear los bienes ajenos", "No matar", "No robar", "No mentir"], c: 0, e: "No desear bienes ajenos." },
    { t: "Que es el amor?", o: ["Mandamiento mas importante", "Un juego", "Una tarea", "Un castigo"], c: 0, e: "Amar es el mandamiento principal." },
    { t: "Que es amar a Dios?", o: ["Ponerlo sobre todas las cosas", "No creer", "Obedecer a otros", "No orar"], c: 0, e: "Amar a Dios es lo primero." },
    { t: "Que es amar al projimo?", o: ["Ayudar a los demas", "Odiar", "Ignorar", "Pelear"], c: 0, e: "Amar al projimo es ayudar." },
    { t: "Que es el perdon?", o: ["Dejar de guardar rencor", "Venganza", "Odiar", "Olvidar"], c: 0, e: "El perdon es dejar ir la ofensa." },
    { t: "Que es la caridad?", o: ["Amor en accion", "Odio", "Indiferencia", "Venganza"], c: 0, e: "La caridad es amor que se da." },
    { t: "Que es la justicia?", o: ["Dar a cada uno lo suyo", "Castigar", "Perdonar", "Obedecer"], c: 0, e: "La justicia es equidad." },
    { t: "Que es la honra?", o: ["Respetar a los demas", "Odiar", "Ignorar", "Pelear"], c: 0, e: "La honra es dar valor al otro." },
    { t: "Que es la obediencia?", o: ["Cumplir lo que manda Dios", "Desobedecer", "No creer", "No orar"], c: 0, e: "La obediencia es seguir la voluntad de Dios." },
    { t: "Que es la piedad?", o: ["Amor a Dios en actos", "Odia a Dios", "No creer", "No orar"], c: 0, e: "La piedad es adorar a Dios." }
  ],
  "Valores cristianos": [
    { t: "Que es la fe?", o: ["Creer en Dios sin ver", "Ver para creer", "No creer", "Dudar"], c: 0, e: "La fe es creer sin ver." },
    { t: "Que es la esperanza?", o: ["Confianza en Dios", "Desesperanza", "Obligacion", "Castigo"], c: 0, e: "La esperanza es confiar en Dios." },
    { t: "Que es la caridad?", o: ["Amor en accion", "Odio", "Indiferencia", "Venganza"], c: 0, e: "La caridad es amor que se da." },
    { t: "Que es el perdon?", o: ["Dejar de guardar rencor", "Venganza", "Odiar", "Olvidar"], c: 0, e: "El perdon es dejar ir la ofensa." },
    { t: "Que es la misericordia?", o: ["Perdon de Dios", "Castigo", "Venganza", "Obligacion"], c: 0, e: "La misericordia es el perdon divino." },
    { t: "Que es la humildad?", o: ["No creerse mejor", "Orgullo", "Presuncion", "Egoismo"], c: 0, e: "La humildad es sencillez." },
    { t: "Que es la paciencia?", o: ["Esperar sin enojarse", "Enojarse", "Rendirse", "Huir"], c: 0, e: "La paciencia es esperar con calma." },
    { t: "Que es la obediencia?", o: ["Cumplir lo que manda Dios", "Desobedecer", "No creer", "No orar"], c: 0, e: "La obediencia es seguir la voluntad de Dios." },
    { t: "Que es la piedad?", o: ["Amor a Dios en actos", "Odia a Dios", "No creer", "No orar"], c: 0, e: "La piedad es adorar a Dios." },
    { t: "Que es la solidaridad?", o: ["Ayudar a los demas", "No ayudar", "Ser egoista", "Pelear"], c: 0, e: "La solidaridad es ayudar desinteresadamente." },
    { t: "Que es la justicia?", o: ["Dar a cada uno lo suyo", "Castigar", "Perdonar", "Obedecer"], c: 0, e: "La justicia es equidad." },
    { t: "Que es la bondad?", o: ["Ser bueno con los demas", "Ser malo", "Odiar", "Ignorar"], c: 0, e: "La bondad es tratar bien." },
    { t: "Que es la alegria?", o: ["Sentir felicidad por Dios", "Tristeza", "Enojo", "Indiferencia"], c: 0, e: "La alegria es fruto del Espiritu Santo." },
    { t: "Que es la paz?", o: ["Armonia con Dios y los demas", "Guerra", "Conflicto", "Pelea"], c: 0, e: "La paz es convivir en armonia." },
    { t: "Que es la templanza?", o: ["Dominar los deseos", "Exceso", "Vicio", "Deseo"], c: 0, e: "La templanza es dominar los apetitos." },
    { t: "Que es la fortaleza?", o: ["Valor para hacer el bien", "Cobardia", "Miedo", "Debilidad"], c: 0, e: "La fortaleza es animo para el bien." },
    { t: "Que es la prudencia?", o: ["Usar la razon para decidir", "Imprudencia", "Locura", "Descuido"], c: 0, e: "La prudencia es buen juicio." },
    { t: "Que es la templanza?", o: ["Moderacion en el comer y beber", "Exceso", "Vicio", "Deseo"], c: 0, e: "La templanza es medida en todo." },
    { t: "Que es la generosidad?", o: ["Dar sin esperar nada", "Egoismo", "Avaricia", "Crueldad"], c: 0, e: "La generosidad es dar desinteresadamente." },
    { t: "Que es la gratitud?", o: ["Agradecer a Dios y a los demas", "Olvidar", "Odiar", "Ignorar"], c: 0, e: "La gratitud es agradecer lo recibido." }
  ]
};

function gen(t) {
  const questions = bank[t] || bank["Dios"];
  const bq = questions[rand(0, questions.length - 1)];
  return q("Educacion Religiosa", bq.t, bq.o, bq.c, bq.e);
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
