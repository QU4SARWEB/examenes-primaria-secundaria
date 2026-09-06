const topics = ["Historia del Peru", "Geografia del Peru", "Economia", "Civica", "Cultura peruana", "Organizacion social"];

const bank = {
  "Historia del Peru": [
    { t: "En que año llegaron los españoles?", o: ["1532", "1492", "1500", "1600"], c: 0, e: "Pizarro llego en 1532." },
    { t: "Quien fue el ultimo inca?", o: ["Atahualpa", "Pachacutec", "Huascar", "Manco Inca"], c: 0, e: "Atahualpa fue el ultimo emperador." },
    { t: "Que civilizacion construyo Machu Picchu?", o: ["Los incas", "Los moche", "Los nazca", "Los chimu"], c: 0, e: "Los incas la construyeron." },
    { t: "Capital del Tahuantinsuyo?", o: ["Cusco", "Lima", "Quito", "Bogota"], c: 0, e: "El Cusco fue la capital." },
    { t: "Que cultura hizo las lineas de Nazca?", o: ["Los nazca", "Los incas", "Los moche", "Los chimu"], c: 0, e: "La cultura nazca las hizo." },
    { t: "En que año se independizo el Peru?", o: ["1821", "1810", "1824", "1800"], c: 0, e: "28 de julio de 1821." },
    { t: "Quien proclamo la independencia?", o: ["San Martin", "Bolivar", "Pizarro", "O'Higgins"], c: 0, e: "Jose de San Martin." },
    { t: "Que es el Tahuantinsuyo?", o: ["Imperio inca", "Rio", "Montaña", "Lago"], c: 0, e: "Las cuatro regiones del imperio." },
    { t: "Que es la Colonia?", o: ["Epoca española", "Epoca inca", "Epoca preinca", "Epoca moderna"], c: 0, e: "Periodo de dominacion española." },
    { t: "Quien fue Pachacutec?", o: ["Gran inca", "Conquistador", "Presidente", "Rey español"], c: 0, e: "El gran expandidor del imperio." },
    { t: "Que es la wara wara?", o: ["Clase noble inca", "Clase popular", "Sacerdote", "Guerrero"], c: 0, e: "La nobleza inca." },
    { t: "Que es el Quinto Real?", o: ["Impuesto español", "Moneda inca", "Tipo de cultivo", "Escuela"], c: 0, e: "Impuesto que cobraba España." },
    { t: "Que es el Cuzco?", o: ["Ciudad imperial", "Rio", "Montaña", "Lago"], c: 0, e: "La capital del imperio inca." },
    { t: "Que es la resistencia?", o: ["Lucha contra opresion", "Rendirse", "Huir", "Dormir"], c: 0, e: "Resistir es luchar contra la dominacion." },
    { t: "Que es la Republica?", o: ["Gobierno del pueblo", "Monarquia", "Dictadura", "Colonial"], c: 0, e: "La republica es gobierno democratico." },
    { t: "Que es el Virreinato?", o: ["Gobierno español en America", "Gobierno inca", "Gobierno griego", "Gobierno romano"], c: 0, e: "España goberno desde un virrey." },
    { t: "Que es la Batalla de Ayacucho?", o: ["Ultima batalla por independencia", "Primera batalla", "Batalla naval", "Batalla aerea"], c: 0, e: "Se sello la independencia en 1824." },
    { t: "Quien fue Tupac Amaru II?", o: ["Lider de rebelion", "Conquistador", "Presidente", "Poeta"], c: 0, e: "Lider de la rebelion contra España." },
    { t: "Que es la cultura moche?", o: ["Cultura costeña antigua", "Cultura andina", "Cultura amazónica", "Cultura moderna"], c: 0, e: "Los moche vivieron en la costa norte." },
    { t: "Que es el Chincha?", o: ["Cultura preinca", "Ciudad moderna", "Rio", "Montaña"], c: 0, e: "Los chincha fueron una cultura costeña." }
  ],
  "Geografia del Peru": [
    { t: "Cuantas regiones naturales tiene el Peru?", o: ["3", "2", "4", "5"], c: 0, e: "Costa, sierra y selva." },
    { t: "Rio mas largo del Peru?", o: ["Marañon", "Urubamba", "Amazonas", "Madre de Dios"], c: 0, e: "El Marañon es el mas largo." },
    { t: "Montaña mas alta?", o: ["Huascaran", "Misti", "Salcantay", "Ausangate"], c: 0, e: "6,768 msnm." },
    { t: "Departamento del Titicaca?", o: ["Puno", "Cusco", "Arequipa", "Moquegua"], c: 0, e: "El Titicaca esta en Puno." },
    { t: "Region mas lluviosa?", o: ["Selva", "Costa", "Sierra", "Puna"], c: 0, e: "La selva recibe mas lluvia." },
    { t: "Desierto costeño del Peru?", o: ["Sechura", "Atacama", "Sonora", "Sahara"], c: 0, e: "El desierto de Sechura." },
    { t: "Cuantos departamentos tiene?", o: ["25", "24", "26", "30"], c: 0, e: "25 departamentos." },
    { t: "Capital del Peru?", o: ["Lima", "Cusco", "Arequipa", "Trujillo"], c: 0, e: "Lima es la capital." },
    { t: "Que es la sierra?", o: ["Region montañosa", "Region costeña", "Region amazónica", "Region desértica"], c: 0, e: "La sierra tiene montañas." },
    { t: "Que es la costa?", o: ["Region costera", "Region montañosa", "Region selvatica", "Region desértica"], c: 0, e: "La costa esta junto al mar." },
    { t: "Que es la selva?", o: ["Region amazónica", "Region costera", "Region montañosa", "Region desértica"], c: 0, e: "La selva tiene bosques tropicales." },
    { t: "Rio Amazonas nace en?", o: ["Peru", "Brasil", "Colombia", "Bolivia"], c: 0, e: "El Amazonas nace en Peru." },
    { t: "Que es el altiplano?", o: ["Meseta alta", "Valle bajo", "Costa", "Selva"], c: 0, e: "El altiplano es una meseta elevada." },
    { t: "Lago mas grande del Peru?", o: ["Titicaca", "Junin", "Lauricocha", "Chiclayo"], c: 0, e: "El Titicaca es el mas grande." },
    { t: "Que es una cuenca?", o: ["Area de drenaje de un rio", "Montaña", "Valle", "Costa"], c: 0, e: "La cuenca es el area que drena un rio." },
    { t: "Isla mas grande del Peru?", o: ["San Lorenzo", "Palomino", "Cavinzas", "Fronton"], c: 0, e: "Isla San Lorenzo." },
    { t: "Que es un glaciar?", o: ["Masa de hielo", "Rio seco", "Montaña sin nieve", "Lago helado"], c: 0, e: "Los glaciares son masas de hielo." },
    { t: "Cordillera principal del Peru?", o: ["Andes", "Alpes", "Himalaya", "Rocky"], c: 0, e: "Los Andes son la cordillera principal." },
    { t: "Que es un valle?", o: ["Depresion entre montañas", "Montaña alta", "Costa", "Selva"], c: 0, e: "El valle es tierra baja entre montañas." },
    { t: "Desierto mas extenso del mundo?", o: ["Sahara", "Atacama", "Gobi", "Sonora"], c: 0, e: "El Sahara es el mas extenso." }
  ],
  "Economia": [
    { t: "Que es la inflacion?", o: ["Subida de precios", "Bajada de precios", "Mas empleo", "Mas dinero"], c: 0, e: "La inflacion sube los precios." },
    { t: "Que es el PBI?", o: ["Producto Bruto Interno", "Pago Basico Individual", "Poder del Banco", "Poblacion Barrial"], c: 0, e: "El PBI mide la riqueza del pais." },
    { t: "Que es el comercio?", o: ["Compra y venta", "Produccion", "Ahorro", "Impuesto"], c: 0, e: "El comercio es intercambio de bienes." },
    { t: "Que es un impuesto?", o: ["Pago al estado", "Ganancia", "Ahorro", "Deuda"], c: 0, e: "El impuesto es obligatorio." },
    { t: "Que es el turismo?", o: ["Viajar por gusto", "Viajar por trabajo", "Mudarse", "Exportar"], c: 0, e: "El turismo es viajar para conocer." },
    { t: "Que es la exportacion?", o: ["Vender al exterior", "Comprar del exterior", "Producir", "Guardar"], c: 0, e: "Exportar es vender a otros paises." },
    { t: "Que es la importacion?", o: ["Comprar del exterior", "Vender al exterior", "Producir", "Aorrar"], c: 0, e: "Importar es comprar de otros paises." },
    { t: "Que es un mercado?", o: ["Lugar de compra y venta", "Banco", "Hospital", "Escuela"], c: 0, e: "El mercado es donde se comercia." },
    { t: "Que es el dinero?", o: ["Medio de cambio", "Alimento", "Ropa", "Casa"], c: 0, e: "El dinero se usa para comprar." },
    { t: "Que es el ahorro?", o: ["Guardar dinero", "Gastar todo", "Pedir prestado", "Deber"], c: 0, e: "Ahorrar es guardar para el futuro." },
    { t: "Que es un salario?", o: ["Pago por trabajar", "Impuesto", "Deuda", "Prestamo"], c: 0, e: "El salario es lo que ganas." },
    { t: "Que es una empresa?", o: ["Organizacion que produce", "Casa", "Hospital", "Escuela"], c: 0, e: "La empresa produce bienes o servicios." },
    { t: "Que es un banco?", o: ["Institucion financiera", "Tienda", "Mercado", "Fabrica"], c: 0, e: "El banco guarda y presta dinero." },
    { t: "Que es la pobreza?", o: ["Falta de recursos", "Exceso de dinero", "Trabajo", "Estudio"], c: 0, e: "La pobreza es carecer de lo basico." },
    { t: "Que es el desarrollo?", o: ["Mejora economica y social", "Empobrecimiento", "Estancamiento", "Crisis"], c: 0, e: "El desarrollo es progreso." },
    { t: "Que es la oferta?", o: ["Cantidad disponible", "Demanda", "Precio", "Calidad"], c: 0, e: "La oferta es lo que hay para vender." },
    { t: "Que es la demanda?", o: ["Lo que se quiere comprar", "Lo que hay", "El precio", "La calidad"], c: 0, e: "La demanda es lo que la gente quiere." },
    { t: "Que es el empleo?", o: ["Trabajo remunerado", "Desempleo", "Estudio", "Descanso"], c: 0, e: "El empleo es tener trabajo." },
    { t: "Que es el desempleo?", o: ["No tener trabajo", "Tener trabajo", "Estudiar", "Jubilarse"], c: 0, e: "El desempleo es no encontrar trabajo." },
    { t: "Que es la inflacion?", o: ["Aumento sostenido de precios", "Bajada de precios", "Estabilidad", "Deflacion"], c: 0, e: "La inflacion sube precios continuamente." }
  ],
  "Civica": [
    { t: "Que es la democracia?", o: ["Gobierno del pueblo", "Gobierno de uno", "Gobierno militar", "Gobierno religioso"], c: 0, e: "El pueblo elige representantes." },
    { t: "Simbolo patrio del Peru?", o: ["Escudo nacional", "La bandera", "El himno", "Todos"], c: 0, e: "Los tres son simbolos patrios." },
    { t: "Que es un derecho?", o: ["Lo que nos corresponde", "Una obligacion", "Un castigo", "Una ley"], c: 0, e: "Los derechos son garantias." },
    { t: "Que es una obligacion?", o: ["Deber que cumplir", "Derecho a elegir", "Libertad", "Privilegio"], c: 0, e: "Las obligaciones son deberes." },
    { t: "Que es el voto?", o: ["Elegir representantes", "Pagar impuestos", "Estudiar", "Trabajar"], c: 0, e: "El voto es elegir gobernantes." },
    { t: "Que es la constitucion?", o: ["Ley suprema", "Ley escolar", "Reglamento", "Norma"], c: 0, e: "La ley mas importante del pais." },
    { t: "Que es la libertad?", o: ["Poder decidir", "Obedecer", "No hablar", "No pensar"], c: 0, e: "La libertad es elegir." },
    { t: "Que es la igualdad?", o: ["Todos iguales ante la ley", "Que unos manden", "Que otros obedezcan", "Desigualdad"], c: 0, e: "Todos tienen los mismos derechos." },
    { t: "Que es la justicia?", o: ["Dar a cada uno lo suyo", "Castigar a todos", "Perdonar", "Obedecer"], c: 0, e: "La justicia es equidad." },
    { t: "Que es un ciudadano?", o: ["Persona con derechos y deberes", "Niño", "Animal", "Extranjero"], c: 0, e: "El ciudadano participa en la sociedad." },
    { t: "Que es un representante?", o: ["Quien gobierna por otros", "Quien obedece", "Quien no trabaja", "Quien estudia"], c: 0, e: "El representante gobierna por el pueblo." },
    { t: "Que es el orden?", o: ["Organizacion y normas", "Caos", "Desorden", "Ruido"], c: 0, e: "El orden es respetar las normas." },
    { t: "Que es la paz?", o: ["Armonia sin violencia", "Guerra", "Conflicto", "Pelea"], c: 0, e: "La paz es convivir en armonia." },
    { t: "Que es la politica?", o: ["Actividad de gobernar", "Deporte", "Estudio", "Trabajo"], c: 0, e: "La politica es la actividad publica." },
    { t: "Que es un partido politico?", o: ["Grupo que busca gobernar", "Club deportivo", "Escuela", "Iglesia"], c: 0, e: "Los partidos buscan el poder politico." },
    { t: "Que es la obligacion de estudiar?", o: ["Deber del niño", "Derecho del niño", "Obligacion del Estado", "Obligacion del padre"], c: 0, e: "Estudiar es un deber y un derecho." },
    { t: "Que es el respeto?", o: ["Valorar a los demas", "Odiar", "Ignorar", "Pelear"], c: 0, e: "El respeto es tratar bien a los demas." },
    { t: "Que es la tolerancia?", o: ["Aceptar diferencias", "No aceptar nada", "Mandar", "Obedecer"], c: 0, e: "La tolerancia es respetar lo diferente." },
    { t: "Que es la responsabilidad?", o: ["Cumplir con deberes", "No hacer nada", "Jugar", "Descansar"], c: 0, e: "La responsabilidad es asumir consecuencias." },
    { t: "Que es la solidaridad?", o: ["Ayudar a otros", "No ayudar", "Ser egoista", "Guardar todo"], c: 0, e: "La solidaridad es ayudar desinteresadamente." }
  ],
  "Cultura peruana": [
    { t: "Que es el Inti Raymi?", o: ["Fiesta del sol", "Fiesta de la luna", "Fiesta del agua", "Fiesta de la tierra"], c: 0, e: "La fiesta inca al sol." },
    { t: "Instrumento tipico del Peru?", o: ["Charango", "Guitarra", "Piano", "Violin"], c: 0, e: "El charango es andino." },
    { t: "Danza clasica del Peru?", o: ["Marinera", "Samba", "Tango", "Salsa"], c: 0, e: "La marinera es costeña." },
    { t: "Plato tipico del Peru?", o: ["Ceviche", "Paella", "Sushi", "Tacos"], c: 0, e: "El ceviche es de pescado con limon." },
    { t: "Que celebrate el 28 de julio?", o: ["Fiestas patrias", "Navidad", "Año nuevo", "Dia del padre"], c: 0, e: "La independencia del Peru." },
    { t: "Que es el Quechua?", o: ["Idioma inca", "Idioma español", "Idioma ingles", "Idioma frances"], c: 0, e: "La lengua de los incas." },
    { t: "Que es el Aymara?", o: ["Idioma andino", "Idioma amazónico", "Idioma español", "Idioma ingles"], c: 0, e: "Otro idioma originario." },
    { t: "Que es la cumbia peruana?", o: ["Musica criolla", "Musica andina", "Musica amazónica", "Musica clásica"], c: 0, e: "La cumbia es musica popular." },
    { t: "Que es el festejo?", o: ["Danza afroperuana", "Danza andina", "Danza amazónica", "Danza costeña"], c: 0, e: "El festejo es danza afroperuana." },
    { t: "Que es la huayno?", o: ["Danza andina", "Danza costeña", "Danza amazónica", "Danza africana"], c: 0, e: "El huayno es musica de la sierra." },
    { t: "Que es la scena?", o: ["Danza andina", "Danza costeña", "Danza amazónica", "Danza africana"], c: 0, e: "La scena es musica de fiesta." },
    { t: "Que es el vals criollo?", o: ["Musica de la costa", "Musica de la sierra", "Musica de la selva", "Musica extranjera"], c: 0, e: "El vals criollo es limeño." },
    { t: "Que es la comida criolla?", o: ["Cocina limeña", "Cocina andina", "Cocina amazónica", "Cocina extranjera"], c: 0, e: "La comida criolla es de Lima." },
    { t: "Que es el mate de coca?", o: ["Bebida andina", "Cafe", "Té", "Jugo"], c: 0, e: "El mate de coca es tipico de los Andes." },
    { t: "Que es la piscuna?", o: ["Plato andino", "Plato costeño", "Plato amazónico", "Postre"], c: 0, e: "La piscuna es un plato de quinua." },
    { t: "Que es el tumbet?", o: ["Plato arequipeño", "Plato limeño", "Plato cusqueño", "Plato trujillano"], c: 0, e: "El tumbet es de Arequipa." },
    { t: "Que es el rocoto relleno?", o: ["Plato arequipeño", "Plato limeño", "Plato cusqueño", "Plato cajamarquino"], c: 0, e: "El rocoto relleno es tipico de Arequipa." },
    { t: "Que es el juane?", o: ["Plato amazónico", "Plato costeño", "Plato andino", "Postre"], c: 0, e: "El juane es de la selva." },
    { t: "Que es la tacu tacu?", o: ["Plato criollo", "Plato andino", "Plato amazónico", "Postre"], c: 0, e: "La tacu tacu es de arroz y frijoles." },
    { t: "Que es la pachamanca?", o: ["Plato andino al horno de tierra", "Plato costeño", "Plato amazónico", "Postre"], c: 0, e: "La pachamanca se cocina bajo tierra." }
  ],
  "Organizacion social": [
    { t: "Que es la familia?", o: ["Grupo de parentesco", "Grupo de amigos", "Grupo de trabajo", "Grupo escolar"], c: 0, e: "La familia es por lazos de sangre." },
    { t: "Que es la comunidad?", o: ["Grupo en un lugar", "Una escuela", "Un hospital", "Un mercado"], c: 0, e: "La comunidad vive en un mismo lugar." },
    { t: "Que es un lider?", o: ["Quien guia al grupo", "Quien obedece", "Quien trabaja", "Quien estudia"], c: 0, e: "El lider toma decisiones." },
    { t: "Que es la organizacion?", o: ["Forma de trabajar juntos", "Trabajar solo", "Estudiar", "Descansar"], c: 0, e: "La organizacion coordina esfuerzos." },
    { t: "Que es una institucion?", o: ["Organizacion con fines", "Una casa", "Un parque", "Un rio"], c: 0, e: "Las instituciones tienen objetivos." },
    { t: "Que es el desarrollo?", o: ["Mejorar calidad de vida", "Construir", "Destruir", "Viajar"], c: 0, e: "El desarrollo es crecimiento." },
    { t: "Que es el Estado?", o: ["Organizacion politica", "Una empresa", "Un banco", "Una tienda"], c: 0, e: "El Estado organiza la sociedad." },
    { t: "Que es una ONG?", o: ["Organizacion sin fines de lucro", "Empresa", "Banco", "Gobierno"], c: 0, e: "Las ONG ayudan sin buscar ganancia." },
    { t: "Que es la sociedad?", o: ["Grupo organizado", "Naturaleza", "Animales", "Plantas"], c: 0, e: "La sociedad es el grupo humano organizado." },
    { t: "Que es una asociacion?", o: ["Grupo de personas con un fin", "Una empresa", "Un banco", "Una escuela"], c: 0, e: "Las asociaciones tienen objetivos comunes." },
    { t: "Que es la cooperacion?", o: ["Ayudarse mutuamente", "Competir", "Luchar", "Ignorar"], c: 0, e: "La cooperacion es trabajar juntos." },
    { t: "Que es el gobierno?", o: ["Quien administra el Estado", "Una empresa", "Un banco", "Una tienda"], c: 0, e: "El gobierno administra los asuntos publicos." },
    { t: "Que es la autoridad?", o: ["Quien tiene poder legitimo", "Quien obedece", "Quien no trabaja", "Quien estudia"], c: 0, e: "La autoridad tiene poder reconocido." },
    { t: "Que es una norma?", o: ["Regla para convivir", "Un juego", "Una ley", "Un castigo"], c: 0, e: "Las normas regulan la convivencia." },
    { t: "Que es una ley?", o: ["Norma obligatoria", "Sugerencia", "Pedido", "Deseo"], c: 0, e: "La ley es obligatoria para todos." },
    { t: "Que es el presupuesto?", o: ["Plan de gastos e ingresos", "Deuda", "Ahorro", "Impuesto"], c: 0, e: "El presupuesto planifica el dinero." },
    { t: "Que es la descentralizacion?", o: ["Delegar poder a regiones", "Concentrar poder", "Eliminar gobierno", "Crear impuestos"], c: 0, e: "La descentralizacion reparte poder." },
    { t: "Que es un municipio?", o: ["Gobierno local", "Gobierno central", "Gobierno regional", "Banco"], c: 0, e: "El municipio gobierna un distrito o ciudad." },
    { t: "Que es la participacion ciudadana?", o: ["Involucrarse en lo publico", "No hacer nada", "Obedecer", "Callarse"], c: 0, e: "El ciudadano participa en decisiones." },
    { t: "Que es la transparencia?", o: ["Que el gobierno sea abierto", "Que sea secreto", "Que oculte", "Que mienta"], c: 0, e: "La transparencia es信息公开." }
  ]
};

function gen(t) {
  const questions = bank[t] || bank["Historia del Peru"];
  const bq = questions[rand(0, questions.length - 1)];
  return q("Personal Social", bq.t, bq.o, bq.c, bq.e);
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
