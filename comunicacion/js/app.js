const topics = ["Comprension lectora", "Ortografia", "Gramatica", "Literatura", "Produccion de textos", "Significado de palabras", "Figuras retoricas"];

const bank = {
  "Comprension lectora": [
    { t: "Maria gasta S/ 45 en comida y S/ 30 en transporte. Gana S/ 200. ¿Cuanto le queda?", o: ["S/ 125", "S/ 135", "S/ 115", "S/ 145"], c: 0, e: "200 - 45 - 30 = 125." },
    { t: "Un tren sale a las 8:00 y llega a las 11:30. ¿Cuanto dura?", o: ["3 horas y media", "3 horas", "4 horas", "2 horas y media"], c: 0, e: "De 8:00 a 11:30 son 3h 30min." },
    { t: "Pedro tiene 12 manzanas y da 5 a Maria. ¿Cuantas le quedan?", o: ["7", "17", "5", "12"], c: 0, e: "12 - 5 = 7." },
    { t: "Una libreria tiene 150 libros y vende 40. ¿Cuantos quedan?", o: ["110", "190", "40", "150"], c: 0, e: "150 - 40 = 110." },
    { t: "Lee: 'Las abejas polinizan las flores'. ¿Que benefician?", o: ["Al ecosistema", "Solo humanos", "Solo animales", "Los rios"], c: 0, e: "Las abejas ayudan a la polinizacion." },
    { t: "Juan compra 3 cuadernos a S/ 5 cada uno. ¿Cuanto paga?", o: ["S/ 15", "S/ 8", "S/ 20", "S/ 12"], c: 0, e: "3 x 5 = 15." },
    { t: "Una canasta tiene 24 frutas. Si sacan 8, ¿cuantas quedan?", o: ["16", "32", "8", "24"], c: 0, e: "24 - 8 = 16." },
    { t: "Lee: 'El perro ladra por las noches'. ¿Que problema causa?", o: ["No deja dormir", "Se pierde", "Tiene hambre", "Esta enfermo"], c: 0, e: "El ladrido interrumpe el descanso." },
    { t: "Ana tiene S/ 50 y compra algo de S/ 18. ¿Cuanto le queda?", o: ["S/ 32", "S/ 68", "S/ 18", "S/ 50"], c: 0, e: "50 - 18 = 32." },
    { t: "Un grupo tiene 28 niños. Si llegan 12 mas, ¿cuantos son?", o: ["40", "16", "28", "12"], c: 0, e: "28 + 12 = 40." },
    { t: "Carlos guarda S/ 100 y gasta S/ 35. ¿Cuanto le queda?", o: ["S/ 65", "S/ 135", "S/ 35", "S/ 100"], c: 0, e: "100 - 35 = 65." },
    { t: "Una tienda vende 45 camisas y 38 pantalones. ¿Cuantas prendas en total?", o: ["83", "7", "45", "38"], c: 0, e: "45 + 38 = 83." },
    { t: "Lee: 'La lluvia cae fuerte'. ¿Que consecuencia tiene?", o: ["Se inunda", "Hace calor", "Hay viento", "Nieva"], c: 0, e: "La lluvia fuerte puede causar inundaciones." },
    { t: "Lucia tiene el doble de dulces que Pedro (tiene 6). ¿Cuantos tiene Lucia?", o: ["12", "6", "18", "3"], c: 0, e: "6 x 2 = 12." },
    { t: "Un camion lleva 30 cajas y descargan 12. ¿Cuantas quedan?", o: ["18", "42", "12", "30"], c: 0, e: "30 - 12 = 18." },
    { t: "Lee: 'El sol brilla intensamente'. ¿Que sentimos?", o: ["Calor", "Frio", "Viento", "Lluvia"], c: 0, e: "El sol intenso produce calor." },
    { t: "Rosa compra 5 lapices a S/ 2 y 3 cuadernos a S/ 4. ¿Cuanto paga?", o: ["S/ 22", "S/ 20", "S/ 10", "S/ 12"], c: 0, e: "(5x2) + (3x4) = 10 + 12 = 22." },
    { t: "Una escuela tiene 6 aulas con 30 pupitres cada una. ¿Cuantos pupitres hay?", o: ["180", "36", "30", "6"], c: 0, e: "6 x 30 = 180." },
    { t: "Lee: 'Los peces viven en el agua'. ¿Donde viven?", o: ["En el agua", "En la tierra", "En el aire", "En la luna"], c: 0, e: "Los peces habitan en el agua." },
    { t: "Tomas tiene S/ 80 y gasta la mitad. ¿Cuanto gasta?", o: ["S/ 40", "S/ 80", "S/ 20", "S/ 60"], c: 0, e: "80 / 2 = 40." }
  ],
  "Ortografia": [
    { t: "Cual esta escrito correctamente?", o: ["Pais", "Pais", "Pais", "Paiz"], c: 0, e: "Pais lleva tilde por ser esdrujula." },
    { t: "Cual es la forma correcta?", o: ["Telefono", "Telefono", "Telefono", "Telefono"], c: 0, e: "Telefono es palabra esdrujula." },
    { t: "Cual tiene tilde correcta?", o: ["Murcielago", "Murcielago", "Murcielago", "Murcielago"], c: 0, e: "Murciélago lleva tilde en e." },
    { t: "Cual esta bien escrito?", o: ["Cerveza", "Cerveza", "Cerveza", "Cerveza"], c: 0, e: "Cerveza es la forma correcta." },
    { t: "Cual es correcta ortograficamente?", o: ["Herbicida", "Herbicida", "Herbicida", "Herbicida"], c: 0, e: "Herbicida lleva h y b." },
    { t: "Selecciona la forma correcta:", o: ["Exagerar", "Exagerar", "Exagerar", "Exagerar"], c: 0, e: "Exagerar lleva g antes de e." },
    { t: "Cual esta escrito correctamente?", o: ["Frecuencia", "Frecuencia", "Frecuencia", "Frecuencia"], c: 0, e: "Frecuencia lleva c antes de i." },
    { t: "Cual es correcta?", o: ["Habitacion", "Habitacion", "Habitacion", "Habitacion"], c: 0, e: "Habitacion lleva h." },
    { t: "Cual tiene tilde?", o: ["Centimetro", "Centimetro", "Centimetro", "Centimetro"], c: 0, e: "Centimetro es esdrujulo." },
    { t: "Cual esta bien escrito?", o: ["Verdad", "Verdad", "Verdad", "Verdad"], c: 0, e: "Verdad es la forma correcta." },
    { t: "Cual es correcta?", o: ["Magia", "Magia", "Magia", "Magia"], c: 0, e: "Magia lleva g antes de i." },
    { t: "Cual esta escrito correctamente?", o: ["Examen", "Examen", "Examen", "Examen"], c: 0, e: "Examen es correcto." },
    { t: "Cual tiene tilde correcta?", o: ["Facil", "Facil", "Facil", "Facil"], c: 0, e: "Facil lleva tilde por ser esdrujulo." },
    { t: "Cual es la forma correcta?", o: ["Analisis", "Analisis", "Analisis", "Analisis"], c: 0, e: "Analisis es correcto." },
    { t: "Cual esta bien escrito?", o: ["Caracter", "Caracter", "Caracter", "Caracter"], c: 0, e: "Caracter lleva tilde." },
    { t: "Cual es correcta?", o: ["Margarita", "Margarita", "Margarita", "Margarita"], c: 0, e: "Margarita es correcto." },
    { t: "Cual esta escrito correctamente?", o: ["Sentido", "Sentido", "Sentido", "Sentido"], c: 0, e: "Sentido es correcto." },
    { t: "Cual tiene tilde?", o: ["Util", "Util", "Util", "Util"], c: 0, e: "Util es esdrujulo." },
    { t: "Cual es correcta?", o: ["Regalo", "Regalo", "Regalo", "Regalo"], c: 0, e: "Regalo es correcto." },
    { t: "Cual esta bien escrito?", o: ["Palabra", "Palabra", "Palabra", "Palabra"], c: 0, e: "Palabra es correcto." }
  ],
  "Gramatica": [
    { t: "Que tipo de oracion es: 'El gato duerme'?", o: ["Afirmativa", "Negativa", "Interrogativa", "Exclamativa"], c: 0, e: "Expresa algo positivo." },
    { t: "Sujeto en 'Los niños juegan'?", o: ["Los niños", "Juegan", "En el parque", "El parque"], c: 0, e: "Los niños es quien realiza la accion." },
    { t: "Que palabra es un sustantivo?", o: ["Libro", "Correr", "Bonito", "Aqui"], c: 0, e: "Libro es nombre de cosa." },
    { t: "Verbo en 'Maria canta bien'?", o: ["Canta", "Maria", "Muy", "Bien"], c: 0, e: "Canta es la accion." },
    { t: "Que tipo es 'rapidamente'?", o: ["Adverbio", "Sustantivo", "Adjetivo", "Verbo"], c: 0, e: "Rapidamente modifica al verbo." },
    { t: "Antonimo de 'grande'?", o: ["Pequeño", "Gigante", "Enorme", "Amplio"], c: 0, e: "Pequeño es lo contrario." },
    { t: "Que es un sinónimo?", o: ["Palabra igual", "Palabra opuesta", "Palabra rara", "Palabra larga"], c: 0, e: "Sinónimo = igual significado." },
    { t: "Oracion correcta?", o: ["Yo tengo un libro", "Yo tengo un libro", "Yo teno un libro", "Yo tenge un libro"], c: 0, e: "El verbo es 'tengo'." },
    { t: "Sujeto en 'El perro ladra'?", o: ["El perro", "Ladra", "Fuerte", "Noche"], c: 0, e: "El perro es quien ladra." },
    { t: "Que tipo es 'No duermo'?", o: ["Negativa", "Afirmativa", "Interrogativa", "Exclamativa"], c: 0, e: "Niega algo con 'no'." },
    { t: "Adjetivo en 'La casa blanca'?", o: ["Blanca", "Casa", "La", "Es"], c: 0, e: "Blanca describe a casa." },
    { t: "Verbo en 'Nosotros comemos'?", o: ["Comemos", "Nosotros", "Los", "Platos"], c: 0, e: "Comemos es la accion." },
    { t: "Que tipo es '¿Donde vives?'", o: ["Interrogativa", "Afirmativa", "Negativa", "Exclamativa"], c: 0, e: "Hace una pregunta." },
    { t: "Sustantivo en 'La alegria'?", o: ["Alegria", "La", "Es", "Buena"], c: 0, e: "Alegria es un sentimiento." },
    { t: "Oracion correcta?", o: ["Ellos van al parque", "Ellos van al parque", "Ellos van al parque", "Ellos van al parque"], c: 0, e: "Oracion bien formada." },
    { t: "Que tipo es '¡Que bonito!'?", o: ["Exclamativa", "Afirmativa", "Negativa", "Interrogativa"], c: 0, e: "Expresa emocion." },
    { t: "Adverbio en 'Habla despacio'?", o: ["Despacio", "Habla", "El", "Niño"], c: 0, e: "Despacio modifica al verbo." },
    { t: "Sujeto en 'Llueve mucho'?", o: ["Llueve", "Mucho", "El cielo", "Agua"], c: 0, e: "Llueve es el sujeto." },
    { t: "Verbo en 'Escribimos cartas'?", o: ["Escribimos", "Cartas", "Las", "Nosotros"], c: 0, e: "Escribimos es la accion." },
    { t: "Que tipo es 'Corre rapido'?", o: ["Afirmativa", "Negativa", "Interrogativa", "Exclamativa"], c: 0, e: "Afirmacion simple." }
  ],
  "Literatura": [
    { t: "Que es una fabula?", o: ["Cuento con animales", "Cuento real", "Poema", "Cancion"], c: 0, e: "Las fabulas usan animales para enseñar." },
    { t: "Moraleja de 'La cigarra y la hormiga'?", o: ["Trabaja y preparate", "Diviertete siempre", "No ayudes", "Come mucho"], c: 0, e: "Trabajar hoy para mañana." },
    { t: "Que es un cuento?", o: ["Narracion corta", "Poema corto", "Cancion", "Obra de teatro"], c: 0, e: "Historia breve con principio y fin." },
    { t: "Que es un poema?", o: ["Texto en verso", "Texto en prosa", "Historia", "Noticia"], c: 0, e: "El poema usa versos." },
    { t: "Que es el narrador?", o: ["Quien cuenta la historia", "El personaje", "El lugar", "El final"], c: 0, e: "El narrador relata los hechos." },
    { t: "Que es un personaje?", o: ["Quien participa", "El lugar", "La epoca", "El tema"], c: 0, e: "El personaje vive la historia." },
    { t: "Que es el escenario?", o: ["Donde ocurre", "Quien actua", "Que pasa", "El final"], c: 0, e: "Lugar donde transcurre la accion." },
    { t: "Que es una leyenda?", o: ["Historia tradicional", "Cuento real", "Noticia", "Ciencia"], c: 0, e: "Las leyendas son relatos tradicionales." },
    { t: "Que es el protagonista?", o: ["Personaje principal", "Personaje secundario", "Narrador", "Escenario"], c: 0, e: "Es el personaje mas importante." },
    { t: "Que es el antagonista?", o: ["Personaje opuesto al heroе", "Personaje principal", "Narrador", "Escenario"], c: 0, e: "Es quien se opone al protagonista." },
    { t: "Que es el titulo?", o: ["Nombre de la obra", "Primera parte", "Ultima parte", "Personaje"], c: 0, e: "El titulo identifica la obra." },
    { t: "Que es un verso?", o: ["Linea de un poema", "Parrafo", "Capitulo", "Pagina"], c: 0, e: "El verso es una linea de poesia." },
    { t: "Que es una estrofa?", o: ["Grupo de versos", "Un verso", "Un capitulo", "Una oracion"], c: 0, e: "La estrofa agrupa versos." },
    { t: "Que es una creencia?", o: ["Lo que se cree", "Ciencia", "Verdad", "Mentira"], c: 0, e: "Las creencias son ideas populares." },
    { t: "Que es el desenlace?", o: ["Final de la historia", "Inicio", "Desarrollo", "Climax"], c: 0, e: "Es el fin de la trama." },
    { t: "Que es la trama?", o: ["Historia del cuento", "Personajes", "Escenario", "Titulo"], c: 0, e: "La trama son los hechos de la historia." },
    { t: "Que es el clima?", o: ["Ambiente de la obra", "Tiempo meteorologico", "Escenario", "Personaje"], c: 0, e: "El clima es la atmósfera del relato." },
    { t: "Que es un mito?", o: ["Historia de dioses", "Cuento real", "Noticia", "Ciencia"], c: 0, e: "Los mitos hablan de seres divinos." },
    { t: "Que es la ambientacion?", o: ["Lugar y tiempo de la obra", "Personaje", "Tema", "Final"], c: 0, e: "Ambientacion = donde y cuando ocurre." },
    { t: "Que es el tema?", o: ["De que trata la obra", "Quien escribe", "El final", "El lugar"], c: 0, e: "El tema es el asunto principal." }
  ],
  "Produccion de textos": [
    { t: "Que debe tener un texto narrativo?", o: ["Personajes y accion", "Solo datos", "Solo imagenes", "Numeros"], c: 0, e: "El texto narrativo cuenta historias." },
    { t: "Cual es caracteristica del texto informativo?", o: ["Dados reales", "Opinion personal", "Personajes ficticios", "Rimas"], c: 0, e: "Da datos verificables." },
    { t: "Que tipo de texto es una noticia?", o: ["Informativo", "Narrativo", "Poetico", "Descriptivo"], c: 0, e: "La noticia informa hechos reales." },
    { t: "Que es un parrafo?", o: ["Unidad de idea", "Una oracion", "Un libro", "Un titulo"], c: 0, e: "El parrafo agrupa ideas." },
    { t: "Que debemos hacer al redactar?", o: ["Revisar ortografia", "Escribir rapido", "No usar puntos", "Copiar"], c: 0, e: "Siempre revisar la ortografia." },
    { t: "Que es una idea principal?", o: ["Lo mas importante", "Un detalle", "La ultima frase", "Un ejemplo"], c: 0, e: "Es el tema central del texto." },
    { t: "Que es un texto descriptivo?", o: ["Describe personas o lugares", "Cuenta historias", "Da instrucciones", "Expresa opinion"], c: 0, e: "El texto descriptivo pinta con palabras." },
    { t: "Que es un texto argumentativo?", o: ["Da razones para convencer", "Cuenta historias", "Da instrucciones", "Describe"], c: 0, e: "El argumentativo busca convencer." },
    { t: "Que es una conclusion?", o: ["Idea final del texto", "Idea inicial", "Parrafo medio", "Titulo"], c: 0, e: "La conclusion cierra el texto." },
    { t: "Que es una oracion?", o: ["Conjunto de palabras con sentido", "Una palabra", "Un libro", "Una letra"], c: 0, e: "La oracion expresa una idea completa." },
    { t: "Que es el punto?", o: ["Signo para terminar oracion", "Signo de pregunta", " coma", "Dos puntos"], c: 0, e: "El punto cierra la oracion." },
    { t: "Que es una coma?", o: ["Pausa breve en el texto", "Pausa larga", "Fin de texto", "Inicio"], c: 0, e: "La coma marca una pausa." },
    { t: "Que es el contexto?", o: ["Todo lo que rodea el texto", "Solo el titulo", "Solo los personajes", "Solo el final"], c: 0, e: "El contexto incluye tiempo, lugar y circunstancias." },
    { t: "Que es un titulo?", o: ["Nombre del texto", "Primera idea", "Ultima idea", "Conclusion"], c: 0, e: "El titulo presenta el tema." },
    { t: "Que es una introduccion?", o: ["Parte inicial del texto", "Parte final", "Parte media", "Conclusion"], c: 0, e: "La introduccion presenta el tema." },
    { t: "Que es un texto expositivo?", o: ["Explica un tema", "Cuenta historias", "Convence", "Describe"], c: 0, e: "El expositivo explica información." },
    { t: "Que es un borrador?", o: ["Texto antes de la version final", "Texto final", "Libro impreso", "Noticia"], c: 0, e: "El borrador es un texto provisional." },
    { t: "Que es coherencia?", o: ["Que las ideas tengan sentido juntas", "Que sea largo", "Que tenga imagenes", "Que sea bonito"], c: 0, e: "Coherencia = las ideas conectan." },
    { t: "Que es cohesión?", o: ["Unir las ideas con conectores", "Separar parrafos", "Escribir bonito", "Usar colores"], c: 0, e: "Cohesion = usar conectores." },
    { t: "Que es un conectivo?", o: ["Palabra que une ideas", "Sustantivo", "Verbo", "Adjetivo"], c: 0, e: "Ejemplos: ademas, sin embargo, por lo tanto." }
  ],
  "Significado de palabras": [
    { t: "Que significa 'gigante'?", o: ["Muy grande", "Muy pequeño", "Muy rapido", "Muy lento"], c: 0, e: "Gigante = tamaño enorme." },
    { t: "Que significa 'rapido'?", o: ["Veloz", "Lento", "Grande", "Pequeño"], c: 0, e: "Rapido = veloz." },
    { t: "Que significa 'oscuro'?", o: ["Sin luz", "Claro", "Brillante", "Luminoso"], c: 0, e: "Oscuro = sin claridad." },
    { t: "Que significa 'alegre'?", o: ["Contento", "Triste", "Enojado", "Cansado"], c: 0, e: "Alegre = de buen humor." },
    { t: "Que significa 'enorme'?", o: ["Muy grande", "Diminuto", "Normal", "Mediano"], c: 0, e: "Enorme = de gran tamaño." },
    { t: "Que significa 'fragil'?", o: ["Se rompe facil", "Muy fuerte", "Resistente", "Duro"], c: 0, e: "Fragil = quebradizo." },
    { t: "Que significa 'silencioso'?", o: ["Sin ruido", "Ruidoso", "Fuerte", "Alto"], c: 0, e: "Silencioso = tranquilo." },
    { t: "Que significa 'antiguo'?", o: ["Muy viejo", "Muy nuevo", "Moderno", "Joven"], c: 0, e: "Antiguo = de mucho tiempo atras." },
    { t: "Que significa 'amable'?", o: ["Buena persona", "Mala persona", "Triste", "Enojado"], c: 0, e: "Amable = bondadoso." },
    { t: "Que significa 'claro'?", o: ["Con luz", "Oscuro", "Sin color", "Triste"], c: 0, e: "Claro = con luminosidad." },
    { t: "Que significa 'feliz'?", o: ["Contento", "Triste", "Enojado", "Cansado"], c: 0, e: "Feliz = siente alegria." },
    { t: "Que significa 'rapido'?", o: ["Veloz", "Lento", "Tranquilo", "Calmo"], c: 0, e: "Rapido = se mueve con velocidad." },
    { t: "Que significa 'valiente'?", o: ["Sin miedo", "Cobarde", "Asustado", "Tranquilo"], c: 0, e: "Valiente = que enfrenta el peligro." },
    { t: "Que significa 'sabio'?", o: ["Que sabe mucho", "Ignorante", "Tonto", "Joven"], c: 0, e: "Sabio = con mucho conocimiento." },
    { t: "Que significa 'generoso'?", o: ["Que da sin esperar", "Egoista", "Avaro", "Cruel"], c: 0, e: "Generoso = que comparte." },
    { t: "Que significa 'perezoso'?", o: ["Que no trabaja", "Trabajador", "Activo", "Rapido"], c: 0, e: "Perezoso = que evita el esfuerzo." },
    { t: "Que significa 'leal'?", o: ["Que nunca traiciona", "Que miente", "Que huye", "Que olvida"], c: 0, e: "Leal = fiel y constante." },
    { t: "Que significa 'humilde'?", o: ["No creerse mejor", "Orgulloso", "Presumido", "Egoista"], c: 0, e: "Humilde = sencillo." },
    { t: "Que significa 'justo'?", o: ["Que da igual a todos", "Injusto", "Malo", "Cruel"], c: 0, e: "Justo = que trata equitativamente." },
    { t: "Que significa 'tímido'?", o: ["Con verguenza", "Seguro", "Atrevido", "Tranquilo"], c: 0, e: "Tímido = que siente inseguridad social." }
  ],
  "Figuras retoricas": [
    { t: "Que es una metafora?", o: ["Comparacion indirecta", "Comparacion directa", "Repetición", "Exageración"], c: 0, e: "Metafora = sin 'como' ni 'parece'." },
    { t: "'Tienes corazon de piedra'. Que figura?", o: ["Metafora", "Simil", "Hipérbole", "Onomatopeya"], c: 0, e: "Se compara sin 'como'." },
    { t: "Que es un simile?", o: ["Comparacion con 'como'", "Sin 'como'", "Exageración", "Repetición"], c: 0, e: "Simile usa 'como' o 'parece'." },
    { t: "'Corrio como el viento'. Que figura?", o: ["Simil", "Metafora", "Hipérbole", "Personificación"], c: 0, e: "Se compara usando 'como'." },
    { t: "Que es una hipérbole?", o: ["Exageración", "Comparacion", "Repetición", "Pregunta"], c: 0, e: "Hipérbole exagera la realidad." },
    { t: "'Espero mil años'. Que figura?", o: ["Hipérbole", "Metafora", "Simil", "Onomatopeya"], c: 0, e: "Se exagera el tiempo." },
    { t: "Que es una personificación?", o: ["Dar cualidades humanas", "Comparar", "Exagerar", "Repetir"], c: 0, e: "Da cualidades humanas a lo no humano." },
    { t: "'El sol sonrie'. Que figura?", o: ["Personificación", "Metafora", "Hipérbole", "Simil"], c: 0, e: "El sol no puede sonreir." },
    { t: "Que es una onomatopeya?", o: ["Imita sonidos", "Exagera", "Compara", "Repite"], c: 0, e: "Ej: Miau, pium, croac." },
    { t: "'El gato dice miau'. Que figura?", o: ["Onomatopeya", "Metafora", "Hipérbole", "Simil"], c: 0, e: "Miau imita el sonido." },
    { t: "Que es la aliteracion?", o: ["Repetir sonidos", "Exagerar", "Comparar", "Describir"], c: 0, e: "Repetir consonantes o vocales." },
    { t: "'La luna luce luz'. Que figura?", o: ["Aliteracion", "Metafora", "Simil", "Hipérbole"], c: 0, e: "Se repite la 'l'." },
    { t: "Que es una interrogación retorica?", o: ["Pregunta sin esperar respuesta", "Pregunta con respuesta", "Exageración", "Comparación"], c: 0, e: "No busca respuesta, provoca reflexion." },
    { t: "'Que no te das cuenta?'. Que figura?", o: ["Interrogación retorica", "Metafora", "Simil", "Hipérbole"], c: 0, e: "Es una pregunta retorica." },
    { t: "Que es un antonomasia?", o: ["Usar palabra opuesta", "Usar sinónimo", "Exagerar", "Comparar"], c: 0, e: "Usar una palabra en lugar de su opuesta." },
    { t: "Que es una sinécdoque?", o: ["Parte por el todo", "Todo por la parte", "Comparar", "Exagerar"], c: 0, e: "Ej: 'Buenas manos' = persona habilidosa." },
    { t: "Que es una metonimia?", o: ["Nombre por relacion", "Comparar", "Exagerar", "Repetir"], c: 0, e: "Ej: 'Leer a Cervantes' = leer sus obras." },
    { t: "Que es una paradoja?", o: ["Contradiccion aparente", "Comparacion", "Exageración", "Repetición"], c: 0, e: "Afirmaciones opuestas que revelan verdad." },
    { t: "'El silencio habla'. Que figura?", o: ["Paradoja", "Metafora", "Simil", "Onomatopeya"], c: 0, e: "El silencio no puede hablar, pero comunica." },
    { t: "Que es un oxímoron?", o: ["Unir palabras opuestas", "Comparar", "Exagerar", "Repetir"], c: 0, e: "Ej: 'Oscura claridad'." }
  ]
};

function gen(t) {
  const questions = bank[t] || bank["Comprension lectora"];
  const bq = questions[rand(0, questions.length - 1)];
  return q("Comunicacion", bq.t, bq.o, bq.c, bq.e);
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
