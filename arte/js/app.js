const topics = ["Colores y formas", "Arte en el Peru", "Musica", "Danza", "Dibujo"];

const bank = {
  "Colores y formas": [
    { t: "Que es un color primario?", o: ["Rojo, azul, amarillo", "Verde, naranja, morado", "Blanco, negro, gris", "Rosa, celeste, beige"], c: 0, e: "Los primarios no se mezclan." },
    { t: "Que color se obtiene con rojo + amarillo?", o: ["Naranja", "Morado", "Verde", "Cafe"], c: 0, e: "Rojo + amarillo = naranja." },
    { t: "Que color se obtiene con rojo + azul?", o: ["Morado", "Naranja", "Verde", "Cafe"], c: 0, e: "Rojo + azul = morado." },
    { t: "Que color se obtiene con azul + amarillo?", o: ["Verde", "Naranja", "Morado", "Cafe"], c: 0, e: "Azul + amarillo = verde." },
    { t: "Que forma tiene un balon?", o: ["Circular", "Cuadrada", "Triangular", "Rectangular"], c: 0, e: "El balon es circular." },
    { t: "Que forma tiene un libro?", o: ["Rectangular", "Circular", "Triangular", "Cuadrada"], c: 0, e: "El libro es rectangular." },
    { t: "Que es una pintura?", o: ["Obra de arte con colores", "Un juego", "Una tarea", "Una cancion"], c: 0, e: "La pintura usa colores." },
    { t: "Que es un dibujo?", o: ["Representacion visual con lineas", "Una pintura", "Una cancion", "Un juego"], c: 0, e: "El dibujo usa lineas." },
    { t: "Que es una escultura?", o: ["Forma tridimensional", "Una pintura", "Un dibujo", "Una cancion"], c: 0, e: "La escultura tiene volumen." },
    { t: "Que es una obra de arte?", o: ["Creacion que expresa belleza", "Un juego", "Una tarea", "Una cancion"], c: 0, e: "La obra de arte es creacion humana." },
    { t: "Que es el arte abstracto?", o: ["No representa objetos reales", "Representa la realidad", "Es un juego", "Es una tarea"], c: 0, e: "El abstracto no es figurativo." },
    { t: "Que es un paisaje?", o: ["Representacion de un lugar natural", "Retrato", "Naturaleza muerta", "Un juego"], c: 0, e: "El paisaje muestra la naturaleza." },
    { t: "Que es un retrato?", o: ["Representacion de una persona", "Paisaje", "Naturaleza muerta", "Un juego"], c: 0, e: "El retrato es de una persona." },
    { t: "Que es una composicion?", o: ["Organizacion de elementos", "Un juego", "Una tarea", "Una cancion"], c: 0, e: "La composicion organiza los elementos." },
    { t: "Que es el simetrismo?", o: ["Partes iguales en ambos lados", "Asimetria", "Caos", "Desorden"], c: 0, e: "La simetria es equilibrio visual." },
    { t: "Que es el contraste?", o: ["Diferencia entre colores", "Igualdad", "Uniformidad", "Un juego"], c: 0, e: "El contraste crea diferencias." },
    { t: "Que es el equilibrio visual?", o: ["Distribucion harmonica", "Desorden", "Caos", "Un juego"], c: 0, e: "El equilibrio es harmonia visual." },
    { t: "Que es el ritmo visual?", o: ["Repeticion de elementos", "Caos", "Desorden", "Un juego"], c: 0, e: "El ritmo visual crea movimiento." },
    { t: "Que es una forma geometrica?", o: ["Figura con medidas regulares", "Forma libre", "Mancha", "Linea"], c: 0, e: "Las formas geometricas tienen reglas." },
    { t: "Que es una forma organica?", o: ["Forma libre y natural", "Geometrica", "Regular", "Simetrica"], c: 0, e: "Las organicas son libres." }
  ],
  "Arte en el Peru": [
    { t: "Que es el arte colonial?", o: ["Arte de la epoca espanola", "Arte preinca", "Arte moderno", "Arte amazonico"], c: 0, e: "El arte colonial es de la Colonia." },
    { t: "Que es el arte popular?", o: ["Arte de la gente", "Arte oficial", "Arte extranjero", "Arte moderno"], c: 0, e: "El arte popular es de la gente comun." },
    { t: "Que es la ceramica moche?", o: ["Arte de vasijas antiguas", "Pintura moderna", "Escultura europea", "Musica"], c: 0, e: "Los moche hicieron ceramica." },
    { t: "Que es el retablo?", o: ["Cajita con figuras", "Pintura", "Escultura", "Musica"], c: 0, e: "El retablo es cajita con escenas." },
    { t: "Que es la orfebreria?", o: ["Trabajo con metales preciosos", "Pintura", "Dibujo", "Musica"], c: 0, e: "La orfebreria es trabajar metales." },
    { t: "Que es el tapiz?", o: ["Tela tejida decorativa", "Pintura", "Escultura", "Musica"], c: 0, e: "El tapiz es tejido artistico." },
    { t: "Que es el mantlete?", o: ["Tela con figuras", "Un juego", "Una cancion", "Una danza"], c: 0, e: "El mantlete es una tela decorada." },
    { t: "Que es la arquitectura inca?", o: ["Construcciones de piedra", "Construcciones de madera", "Construcciones de adobe", "Construcciones de metal"], c: 0, e: "Los incas construyeron con piedra." },
    { t: "Que es la puerta del sol?", o: ["Puerta inca en Tiahuanaco", "Puerta colonial", "Puerta moderna", "Puerta amazonica"], c: 0, e: "La puerta del sol es tiahuanaco." },
    { t: "Que es el arte contemporaneo peruano?", o: ["Arte actual del Peru", "Arte colonial", "Arte preinca", "Arte popular"], c: 0, e: "El contemporaneo es el arte actual." },
    { t: "Que es la mascarada?", o: ["Fiesta con mascaras", "Un juego", "Una cancion", "Una danza"], c: 0, e: "La mascarada usa mascaras." },
    { t: "Que es la conga?", o: ["Baile afroperuano", "Baile andino", "Baile amazonico", "Baile europeo"], c: 0, e: "La conga es baile afroperuano." },
    { t: "Que es la pintura de San Marcos?", o: ["Escuela de pintura colonial", "Escuela moderna", "Escuela preinca", "Escuela amazonica"], c: 0, e: "La escuela de San Marcos es colonial." },
    { t: "Que es la textiles andinos?", o: ["Tejidos con figuras", "Pinturas", "Esculturas", "Musica"], c: 0, e: "Los textiles andinos son tejidos." },
    { t: "Que es el bordado?", o: ["Decorar tela con hilo", "Pintar", "Dibujar", "Cantar"], c: 0, e: "El bordado es arte textil." },
    { t: "Que es la ceramica nazca?", o: ["Vasijas con colores vivos", "Ceramica moche", "Ceramica inca", "Ceramica moderna"], c: 0, e: "Los nazca hicieron ceramica colorida." },
    { t: "Que es el arte chimu?", o: ["Ceramica negra metalica", "Ceramica moche", "Ceramica inca", "Ceramica moderna"], c: 0, e: "Los chimu hicieron ceramica negra." },
    { t: "Que es la Wari?", o: ["Civilizacion que tejió textiles", "Civilizacion moche", "Civilizacion inca", "Civilizacion nazca"], c: 0, e: "Los Wari fueron grandes tejedores." },
    { t: "Que es el arte paracas?", o: ["Textiles bordados antiguos", "Pintura moderna", "Escultura", "Musica"], c: 0, e: "Paracas fue famoso por sus textiles." },
    { t: "Que es la musica criolla?", o: ["Musica de la costa peruana", "Musica andina", "Musica amazonica", "Musica europea"], c: 0, e: "La criolla es de la costa." }
  ],
  "Musica": [
    { t: "Que es el ritmo?", o: ["Organizacion del sonido en el tiempo", "Melodia", "Armonia", "Tempo"], c: 0, e: "El ritmo es el pulso de la musica." },
    { t: "Que es la melodia?", o: ["Sucesion de notas musicales", "Ritmo", "Armonia", "Tempo"], c: 0, e: "La melodia es la parte cantada." },
    { t: "Que es la armonia?", o: ["Notas que suenan juntas", "Ritmo", "Melodia", "Tempo"], c: 0, e: "La armonia combina notas." },
    { t: "Que es el tempo?", o: ["Velocidad de la musica", "Ritmo", "Melodia", "Armonia"], c: 0, e: "El tempo es la rapidez." },
    { t: "Que es un instrumento de viento?", o: ["Flauta, trompeta", "Guitarra", "Tambor", "Piano"], c: 0, e: "Los de viento usan aire." },
    { t: "Que es un instrumento de cuerda?", o: ["Guitarra, violin", "Flauta", "Tambor", "Piano"], c: 0, e: "Los de cuerda tienen cuerdas." },
    { t: "Que es un instrumento de percusion?", o: ["Tambor, bongo", "Guitarra", "Flauta", "Piano"], c: 0, e: "Los de percusion se golpean." },
    { t: "Que es un compas?", o: ["Unidad de medida del ritmo", "Nota", "Silencio", "Tempo"], c: 0, e: "El compas organiza el ritmo." },
    { t: "Que es una nota musical?", o: ["Sonido con altura determinada", "Ritmo", "Silencio", "Compas"], c: 0, e: "Las notas son sonidos." },
    { t: "Que es un silencio?", o: ["Ausencia de sonido", "Nota", "Compas", "Tempo"], c: 0, e: "El silencio es pausa musical." },
    { t: "Que es una escala?", o: ["Sucesion de notas ordenadas", "Ritmo", "Compas", "Tempo"], c: 0, e: "La escala es un conjunto de notas." },
    { t: "Que es un acorde?", o: ["Tres o mas notas juntas", "Una nota", "Un ritmo", "Un silencio"], c: 0, e: "El acorde combina varias notas." },
    { t: "Que es la tonada?", o: ["Melodia tipica de una region", "Ritmo", "Compas", "Tempo"], c: 0, e: "La tonada es musica regional." },
    { t: "Que es el huayno?", o: ["Musica andina tipica", "Musica costena", "Musica amazonica", "Musica europea"], c: 0, e: "El huayno es musica de la sierra." },
    { t: "Que es la marinera?", o: ["Musica y danza costena", "Musica andina", "Musica amazonica", "Musica europea"], c: 0, e: "La marinera es de la costa." },
    { t: "Que es la cumbia?", o: ["Musica tropical colombiana", "Musica andina", "Musica clasica", "Musica europea"], c: 0, e: "La cumbia es tropical." },
    { t: "Que es un coro?", o: ["Grupo de cantantes", "Solista", "Orquesta", "Banda"], c: 0, e: "El coro canta varios cantores." },
    { t: "Que es una orquesta?", o: ["Grupo de instrumentos", "Solista", "Coro", "Banda"], c: 0, e: "La orquesta toca muchos instrumentos." },
    { t: "Que es un solista?", o: ["Musico que toca solo", "Coro", "Orquesta", "Banda"], c: 0, e: "El solista toca individualmente." },
    { t: "Que es el color musical?", o: ["Timbre o cualidad del sonido", "Ritmo", "Melodia", "Armonia"], c: 0, e: "El color es el timbre del sonido." }
  ],
  "Danza": [
    { t: "Que es la marinera?", o: ["Danza costena con pañuelo", "Danza andina", "Danza amazonica", "Danza europea"], c: 0, e: "La marinera usa pañuelo." },
    { t: "Que es el huayno?", o: ["Danza andina tipica", "Danza costena", "Danza amazonica", "Danza europea"], c: 0, e: "El huayno es de la sierra." },
    { t: "Que es el festejo?", o: ["Danza afroperuana", "Danza andina", "Danza amazonica", "Danza costena"], c: 0, e: "El festejo es afroperuano." },
    { t: "Que es el vals criollo?", o: ["Danza costena con vals", "Danza andina", "Danza amazonica", "Danza europea"], c: 0, e: "El vals criollo es limeño." },
    { t: "Que es la scena?", o: ["Danza andina de fiesta", "Danza costena", "Danza amazonica", "Danza africana"], c: 0, e: "La scena es musica de fiesta." },
    { t: "Que es el mate de agua?", o: ["Danza afroperuana", "Danza andina", "Danza amazonica", "Danza costena"], c: 0, e: "El mate de agua es afroperuano." },
    { t: "Que es la zamacueca?", o: ["Danza precursora de la marinera", "Danza andina", "Danza amazonica", "Danza europea"], c: 0, e: "La zamacueca es antecesora de la marinera." },
    { t: "Que es la resbalosa?", o: ["Danza andina", "Danza costena", "Danza amazonica", "Danza africana"], c: 0, e: "La resbalosa es andina." },
    { t: "Que es el carnaval?", o: ["Fiesta con danza y musica", "Un juego", "Una tarea", "Un examen"], c: 0, e: "El carnaval celebra con danza." },
    { t: "Que es la diablada?", o: ["Danza con mascaras de diablo", "Danza andina", "Danza amazonica", "Danza costena"], c: 0, e: "La diablada usa mascaras." },
    { t: "Que es el widow?", o: ["Danza afroperuana", "Danza andina", "Danza amazonica", "Danza costena"], c: 0, e: "El widow es afroperuano." },
    { t: "Que es la Contradanza?", o: ["Danza afroperuana", "Danza andina", "Danza amazonica", "Danza costena"], c: 0, e: "La Contradanza es afroperuana." },
    { t: "Que es el panalivio?", o: ["Danza afroperuana", "Danza andina", "Danza amazonica", "Danza costena"], c: 0, e: "El panalivio es afroperuano." },
    { t: "Que es el yunza?", o: ["Danza andina de corte del arbol", "Danza costena", "Danza amazonica", "Danza africana"], c: 0, e: "El yunza es andina." },
    { t: "Que es el Cusqueñito?", o: ["Danza andina cusqueña", "Danza costena", "Danza amazonica", "Danza europea"], c: 0, e: "El Cusqueñito es de Cusco." },
    { t: "Que es el harawico?", o: ["Canto andino tipico", "Canto costeno", "Canto amazonico", "Canto europeo"], c: 0, e: "El harawico es canto andino." },
    { t: "Que es el huaylarsh?", o: ["Danza andina agricultora", "Danza costena", "Danza amazonica", "Danza africana"], c: 0, e: "El huaylarsh representa labores agricolas." },
    { t: "Que es la Wifala?", o: ["Danza andina con banderas", "Danza costena", "Danza amazonica", "Danza africana"], c: 0, e: "La Wifala usa banderas de colores." },
    { t: "Que es la danza de tijeras?", o: ["Danza andina con tijeras", "Danza costena", "Danza amazonica", "Danza africana"], c: 0, e: "La danza de tijeras es andina." },
    { t: "Que es el K'ashua?", o: ["Danza andina del solsticio", "Danza costena", "Danza amazonica", "Danza africana"], c: 0, e: "El K'ashua celebra el solsticio." }
  ],
  "Dibujo": [
    { t: "Que es una linea?", o: ["Marca continua entre dos puntos", "Punto", "Plano", "Volumen"], c: 0, e: "La linea conecta dos puntos." },
    { t: "Que es un punto?", o: ["Marca pequena e infinitesimal", "Linea", "Plano", "Volumen"], c: 0, e: "El punto es lo mas pequeno." },
    { t: "Que es una forma?", o: ["Figure delimitada por lineas", "Color", "Textura", "Tono"], c: 0, e: "La forma es la figura." },
    { t: "Que es un plano?", o: ["Superficie bidimensional", "Linea", "Volumen", "Punto"], c: 0, e: "El plano tiene largo y ancho." },
    { t: "Que es un volumen?", o: ["Forma tridimensional", "Plano", "Linea", "Punto"], c: 0, e: "El volumen tiene profundidad." },
    { t: "Que es el sombreado?", o: ["Tecnica para crear volumen con sombras", "Color", "Linea", "Punto"], c: 0, e: "El sombreado da sensacion de profundidad." },
    { t: "Que es el perspective?", o: ["Representacion de profundidad", "Color", "Linea", "Punto"], c: 0, e: "La perspective simula profundidad." },
    { t: "Que es una silueta?", o: ["Forma oscura de un objeto", "Color", "Textura", "Tono"], c: 0, e: "La silueta es la forma negra." },
    { t: "Que es un boceto?", o: ["Dibujo rapido y Preliminar", "Obra final", "Pintura", "Escultura"], c: 0, e: "El boceto es un dibujo previo." },
    { t: "Que es un trazo?", o: ["Marca de lapiz o pincel", "Color", "Forma", "Volumen"], c: 0, e: "El trazo es la marca que hacemos." },
    { t: "Que es un lápiz?", o: ["Herramienta para dibujar", "Pincel", "Pluma", "Brocha"], c: 0, e: "El lapiz sirve para dibujar." },
    { t: "Que es un papel?", o: ["Superficie para dibujar", "Lapiz", "Pincel", "Color"], c: 0, e: "El papel es donde dibujamos." },
    { t: "Que es una goma?", o: ["Herramienta para borrar", "Lapiz", "Papel", "Color"], c: 0, e: "La goma borra los trazos." },
    { t: "Que es un colores vivos?", o: ["Colores saturados e intensos", "Colores apagados", "Colores claros", "Colores oscuros"], c: 0, e: "Los colores vivos son intensos." },
    { t: "Que es un colores frios?", o: ["Azul, verde, morado", "Rojo, naranja, amarillo", "Negro, blanco, gris", "Rosa, celeste, beige"], c: 0, e: "Los frios son azul, verde, morado." },
    { t: "Que es un colores calientes?", o: ["Rojo, naranja, amarillo", "Azul, verde, morado", "Negro, blanco, gris", "Rosa, celeste, beige"], c: 0, e: "Los calientes son rojo, naranja, amarillo." },
    { t: "Que es un claro oscuro?", o: ["Transicion gradual de tonos", "Color", "Linea", "Punto"], c: 0, e: "El claro oscuro es degradado de tonos." },
    { t: "Que es una textura?", o: ["Superficie visual o tactil", "Color", "Linea", "Forma"], c: 0, e: "La textura es la calidad de la superficie." },
    { t: "Que es un predominio?", o: ["Elemento que domina la composicion", "Todos iguales", "Ninguno", "El fondo"], c: 0, e: "El predominio es el elemento principal." },
    { t: "Que es un fondo?", o: ["Parte posterior de la composicion", "Elemento principal", "Primera capa", "Centro"], c: 0, e: "El fondo es lo que esta atras." }
  ]
};

function gen(t) {
  const questions = bank[t] || bank["Colores y formas"];
  const bq = questions[rand(0, questions.length - 1)];
  return q("Arte", bq.t, bq.o, bq.c, bq.e);
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
