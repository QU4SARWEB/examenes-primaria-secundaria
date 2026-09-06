const topics = ["Trabajo en equipo", "Valores", "Educacion financiera", "Emprendimiento", "Seguridad"];

const bank = {
  "Trabajo en equipo": [
    { t: "Que es el trabajo en equipo?", o: ["Trabajar juntos", "Trabajar solo", "Estudiar", "Descansar"], c: 0, e: "El trabajo en equipo es colaborar." },
    { t: "Cual es una cualidad del equipo?", o: ["Cooperacion", "Individualismo", "Egoismo", "Desunion"], c: 0, e: "La cooperacion es clave." },
    { t: "Que es un lider?", o: ["Quien guia al equipo", "Quien obedece", "Quien no trabaja", "Quien estudia"], c: 0, e: "El lider toma decisiones." },
    { t: "Que es la comunicacion en equipo?", o: ["Compartir ideas", "Callarse", "No escuchar", "Pelear"], c: 0, e: "La comunicacion es expresar y escuchar." },
    { t: "Que es un rol?", o: ["Funcion de cada uno", "Un juego", "Una tarea", "Un castigo"], c: 0, e: "El rol es la función de cada miembro." },
    { t: "Que es la confianza?", o: ["Creer en los demas", "Desconfiar", "Odiar", "Ignorar"], c: 0, e: "La confianza une al equipo." },
    { t: "Que es un objetivo comun?", o: ["Meta compartida", "Meta individual", "Un juego", "Un castigo"], c: 0, e: "Todos trabajan para la misma meta." },
    { t: "Que es el respeto en equipo?", o: ["Valorar a los demas", "Ignorar", "Pelear", "Mandar"], c: 0, e: "El respeto es escuchar y aceptar." },
    { t: "Que es la solidaridad?", o: ["Ayudarse mutuamente", "No ayudar", "Ser egoista", "Pelear"], c: 0, e: "La solidaridad es apoyar al compañero." },
    { t: "Que es un conflicto?", o: ["Desacuerdo entre miembros", "Un juego", "Una tarea", "Un logro"], c: 0, e: "El conflicto es un desacuerdo." },
    { t: "Como se resuelve un conflicto?", o: ["Dialogando", "Peleando", "Ignorando", "Huyendo"], c: 0, e: "El dialogo resuelve problemas." },
    { t: "Que es la empatia?", o: ["Sentir lo que el otro siente", "Odiar", "Ignorar", "Pelear"], c: 0, e: "La empatia es ponerse en el lugar del otro." },
    { t: "Que es una reunión de equipo?", o: ["Encuentro para planear", "Una fiesta", "Un examen", "Un juego"], c: 0, e: "La reunión coordina acciones." },
    { t: "Que es la delegacion?", o: ["Asignar tareas a otros", "Hacer todo solo", "No hacer nada", "Estudiar"], c: 0, e: "Delegar es repartir responsabilidades." },
    { t: "Que es la motivacion?", o: ["Impulso para trabajar", "Desanimarse", "Aburrirse", "Dormir"], c: 0, e: "La motivacion es el impulso interno." },
    { t: "Que es la responsabilidad compartida?", o: ["Todos cumplen su parte", "Solo uno trabaja", "Nadie trabaja", "Se descansa"], c: 0, e: "Todos contribuyen al resultado." },
    { t: "Que es un resultado colectivo?", o: ["Logro de todo el grupo", "Logro individual", "Un fracaso", "Un juego"], c: 0, e: "El resultado es de todos." },
    { t: "Que es la tolerancia?", o: ["Aceptar diferencias", "No aceptar nada", "Pelear", "Ignorar"], c: 0, e: "La tolerancia es respetar lo diferente." },
    { t: "Que es la creatividad en equipo?", o: ["Pensar juntos ideas nuevas", "Copiar", "No pensar", "Obedecer"], c: 0, e: "La creatividad aporta soluciones." },
    { t: "Que es la evaluacion del equipo?", o: ["Analizar el rendimiento", "Castigar", "Premiar", "Ignorar"], c: 0, e: "La evaluacion mejora el trabajo." }
  ],
  "Valores": [
    { t: "Que es la honestidad?", o: ["Decir la verdad", "Mentir", "Ocultar", "Robar"], c: 0, e: "La honestidad es ser veraz." },
    { t: "Que es la responsabilidad?", o: ["Cumplir deberes", "No hacer nada", "Jugar", "Dormir"], c: 0, e: "La responsabilidad es asumir consecuencias." },
    { t: "Que es el respeto?", o: ["Valorar a los demas", "Odiar", "Ignorar", "Pelear"], c: 0, e: "El respeto es tratar bien." },
    { t: "Que es la solidaridad?", o: ["Ayudar a otros", "No ayudar", "Ser egoista", "Pelear"], c: 0, e: "La solidaridad es ayudar desinteresadamente." },
    { t: "Que es la justicia?", o: ["Dar a cada uno lo suyo", "Castigar a todos", "Perdonar", "Obedecer"], c: 0, e: "La justicia es equidad." },
    { t: "Que es la libertad?", o: ["Poder decidir", "Obedecer", "No hablar", "No pensar"], c: 0, e: "La libertad es elegir." },
    { t: "Que es la igualdad?", o: ["Todos iguales ante la ley", "Que unos manden", "Que otros obedezcan", "Desigualdad"], c: 0, e: "Todos tienen los mismos derechos." },
    { t: "Que es la tolerancia?", o: ["Aceptar diferencias", "No aceptar nada", "Mandar", "Obedecer"], c: 0, e: "La tolerancia es respetar lo diferente." },
    { t: "Que es la empatia?", o: ["Sentir lo que el otro siente", "Odiar", "Ignorar", "Pelear"], c: 0, e: "La empatia es ponerse en el lugar del otro." },
    { t: "Que es la generosidad?", o: ["Dar sin esperar nada", "Egoista", "Avaro", "Cruel"], c: 0, e: "La generosidad es dar desinteresadamente." },
    { t: "Que es la humildad?", o: ["No creerse mejor", "Orgulloso", "Presumido", "Egoista"], c: 0, e: "La humildad es sencillez." },
    { t: "Que es la perseverancia?", o: ["No rendirse", "Rendirse", "Abandonar", "Dormir"], c: 0, e: "La perseverancia es seguir intentando." },
    { t: "Que es la gratitud?", o: ["Agradecer", "Olvidar", "Odiar", "Ignorar"], c: 0, e: "La gratitud es agradecer lo recibido." },
    { t: "Que es la puntualidad?", o: ["Llegar a tiempo", "Llegar tarde", "No llegar", "Dormir"], c: 0, e: "La puntualidad es respetar el tiempo." },
    { t: "Que es la disciplina?", o: ["Cumplir reglas", "No cumplir nada", "Jugar", "Descansar"], c: 0, e: "La disciplina es orden y constancia." },
    { t: "Que es la paciencia?", o: ["Esperar sin enojarse", "Enojarse", "Rendirse", "Huir"], c: 0, e: "La paciencia es esperar con calma." },
    { t: "Que es la amabilidad?", o: ["Ser bondadoso", "Ser mala persona", "Enojarse", "Pelear"], c: 0, e: "La amabilidad es tratar bien." },
    { t: "Que es el compromiso?", o: ["Asumir obligaciones", "No asumir nada", "Jugar", "Descansar"], c: 0, e: "El compromiso es cumplir lo prometido." },
    { t: "Que es la valentia?", o: ["Enfrentar el miedo", "Tener miedo", "Huir", "Esconderse"], c: 0, e: "La valentia es actuar pese al miedo." },
    { t: "Que es la dignidad?", o: ["Valor propio", "Verguenza", "Humillarse", "Obedecer"], c: 0, e: "La dignidad es el valor de cada persona." }
  ],
  "Educacion financiera": [
    { t: "Que es el dinero?", o: ["Medio de cambio", "Alimento", "Ropa", "Casa"], c: 0, e: "El dinero se usa para comprar." },
    { t: "Que es el ahorro?", o: ["Guardar dinero", "Gastar todo", "Pedir prestado", "Deber"], c: 0, e: "Ahorrar es guardar para el futuro." },
    { t: "Que es un ingreso?", o: ["Dinero que entra", "Dinero que sale", "Deuda", "Impuesto"], c: 0, e: "El ingreso es lo que ganas." },
    { t: "Que es un gasto?", o: ["Dinero que sale", "Dinero que entra", "Ahorro", "Inversion"], c: 0, e: "El gasto es lo que pagas." },
    { t: "Que es un presupuesto?", o: ["Plan de gastos e ingresos", "Deuda", "Ahorro", "Impuesto"], c: 0, e: "El presupuesto planifica el dinero." },
    { t: "Que es una deuda?", o: ["Dinero que debes", "Dinero que tienes", "Ahorro", "Ingreso"], c: 0, e: "La deuda es dinero prestado." },
    { t: "Que es un prestamo?", o: ["Dinero que te prestan", "Dinero que tienes", "Ahorro", "Ingreso"], c: 0, e: "El prestamo es dinero que debes devolver." },
    { t: "Que es un banco?", o: ["Institucion financiera", "Tienda", "Mercado", "Fabrica"], c: 0, e: "El banco guarda y presta dinero." },
    { t: "Que es el consumo?", o: ["Comprar productos", "Ahorrar", "Producir", "Exportar"], c: 0, e: "El consumo es adquirir bienes." },
    { t: "Que es la inversión?", o: ["Poner dinero para ganar mas", "Gastar todo", "Deber", "Ahorrar"], c: 0, e: "Invertir es hacer crecer el dinero." },
    { t: "Que es el valor nominal?", o: ["Precio escrito", "Precio real", "Descuento", "Impuesto"], c: 0, e: "El valor nominal es el precio visible." },
    { t: "Que es un descuento?", o: ["Bajada de precio", "Subida de precio", "Impuesto", "Ahorro"], c: 0, e: "El descuento baja el precio." },
    { t: "Que es el interes?", o: ["Costo del dinero prestado", "Descuento", "Impuesto", "Ahorro"], c: 0, e: "El interes es el costo de usar dinero ajeno." },
    { t: "Que es un impuesto?", o: ["Pago al estado", "Ganancia", "Ahorro", "Deuda"], c: 0, e: "El impuesto es obligatorio." },
    { t: "Que es la inflacion?", o: ["Subida de precios", "Bajada de precios", "Mas empleo", "Mas dinero"], c: 0, e: "La inflacion sube los precios." },
    { t: "Que es el comercio?", o: ["Compra y venta", "Produccion", "Ahorro", "Impuesto"], c: 0, e: "El comercio es intercambio de bienes." },
    { t: "Que es una empresa?", o: ["Organizacion que produce", "Casa", "Hospital", "Escuela"], c: 0, e: "La empresa produce bienes o servicios." },
    { t: "Que es el emprendimiento?", o: ["Crear un negocio", "Trabajar para otro", "Estudiar", "Descansar"], c: 0, e: "Emprender es iniciar algo nuevo." },
    { t: "Que es el empleo?", o: ["Trabajo remunerado", "Desempleo", "Estudio", "Descanso"], c: 0, e: "El empleo es tener trabajo." },
    { t: "Que es el desempleo?", o: ["No tener trabajo", "Tener trabajo", "Estudiar", "Jubilarse"], c: 0, e: "El desempleo es no encontrar trabajo." }
  ],
  "Emprendimiento": [
    { t: "Que es emprender?", o: ["Crear algo nuevo", "Copiar", "Obedecer", "Descansar"], c: 0, e: "Emprender es iniciar un proyecto." },
    { t: "Que es una idea de negocio?", o: ["Proyecto para generar ingresos", "Un juego", "Una tarea", "Un sueño"], c: 0, e: "La idea es la base del negocio." },
    { t: "Que es un mercado?", o: ["Lugar donde se vende", "Una escuela", "Un hospital", "Un parque"], c: 0, e: "El mercado es donde se comercia." },
    { t: "Que es un producto?", o: ["Bien que se vende", "Un servicio", "Un impuesto", "Una deuda"], c: 0, e: "El producto es tangible." },
    { t: "Que es un servicio?", o: ["Acción que se ofrece", "Un producto", "Un impuesto", "Una deuda"], c: 0, e: "El servicio es intangible." },
    { t: "Que es el marketing?", o: ["Estrategia para vender", "Produccion", "Ahorro", "Impuesto"], c: 0, e: "El marketing promociona el producto." },
    { t: "Que es un cliente?", o: ["Persona que compra", "Persona que vende", "Productor", "Impuesto"], c: 0, e: "El cliente adquiere el producto." },
    { t: "Que es un proveedor?", o: ["Quien suministra materiales", "Cliente", "Vendedor", "Impuesto"], c: 0, e: "El proveedor da los insumos." },
    { t: "Que es la competencia?", o: ["Otros que venden lo mismo", "Clientes", "Proveedores", "Impuestos"], c: 0, e: "La competencia son otros negocios similares." },
    { t: "Que es un plan de negocio?", o: ["Estrategia del emprendimiento", "Un juego", "Una tarea", "Un examen"], c: 0, e: "El plan organiza el negocio." },
    { t: "Que es el capital?", o: ["Dinero para invertir", "Deuda", "Impuesto", "Ahorro"], c: 0, e: "El capital es el dinero inicial." },
    { t: "Que es una ganancia?", o: ["Ingreso menos gastos", "Deuda", "Impuesto", "Ahorro"], c: 0, e: "La ganancia es la utilidad." },
    { t: "Que es una perdida?", o: ["Gasto mayor que ingreso", "Ganancia", "Ahorro", "Inversion"], c: 0, e: "La perdida es cuando se pierde dinero." },
    { t: "Que es la innovacion?", o: ["Crear algo mejor", "Copiar", "Obedecer", "Descansar"], c: 0, e: "La innovacion mejora lo existente." },
    { t: "Que es el riesgo?", o: ["Posibilidad de fallar", "Seguridad", "Ganancia", "Exito"], c: 0, e: "El riesgo es la incertidumbre." },
    { t: "Que es la creatividad?", o: ["Pensar ideas nuevas", "Copiar", "Obedecer", "Descansar"], c: 0, e: "La creatividad genera ideas originales." },
    { t: "Que es la motivacion?", o: ["Impulso para trabajar", "Desanimarse", "Aburrirse", "Dormir"], c: 0, e: "La motivacion es el impulso interno." },
    { t: "Que es el esfuerzo?", o: ["Trabajo constante", "Descanso", "Juego", "Dormir"], c: 0, e: "El esfuerzo es la dedicacion." },
    { t: "Que es el exito?", o: ["Lograr objetivos", "Fracasar", "Rendirse", "Dormir"], c: 0, e: "El exito es alcanzar metas." },
    { t: "Que es un fracaso?", o: ["No lograr objetivos", "Exito", "Ganancia", "Ahorro"], c: 0, e: "El fracaso es no alcanzar la meta." }
  ],
  "Seguridad": [
    { t: "Que es la seguridad?", o: ["Protegerse de peligros", "Descansar", "Jugar", "Estudiar"], c: 0, e: "La seguridad es evitar riesgos." },
    { t: "Que es un riesgo?", o: ["Peligro potencial", "Seguridad", "Ganancia", "Exito"], c: 0, e: "El riesgo es la posibilidad de un daño." },
    { t: "Que es un accidente?", o: ["Hecho no deseado que causa dano", "Un juego", "Una tarea", "Un logro"], c: 0, e: "El accidente es involuntario." },
    { t: "Que es la prevencion?", o: ["Evitar antes que pase", "Curar", "Ignorar", "Esconder"], c: 0, e: "La prevencion anticipa problemas." },
    { t: "Que es una emergencia?", o: ["Situacion que requiere ayuda inmediata", "Un juego", "Una fiesta", "Un examen"], c: 0, e: "La emergencia es urgente." },
    { t: "Que es un protocolo?", o: ["Pasos a seguir en emergencia", "Un juego", "Una tarea", "Un castigo"], c: 0, e: "El protocolo indica que hacer." },
    { t: "Que es la seguridad vial?", o: ["Reglas en la via", "Seguridad en casa", "Seguridad en la escuela", "Seguridad digital"], c: 0, e: "La vial es para transitar seguro." },
    { t: "Que es la seguridad digital?", o: ["Protegerse en internet", "Seguridad vial", "Seguridad en casa", "Seguridad en la escuela"], c: 0, e: "La digital es cuidar datos en línea." },
    { t: "Que es la seguridad en casa?", o: ["Cuidarse en el hogar", "Seguridad vial", "Seguridad digital", "Seguridad en la escuela"], c: 0, e: "La hogar es protegerse en la casa." },
    { t: "Que es la seguridad escolar?", o: ["Cuidarse en la escuela", "Seguridad vial", "Seguridad digital", "Seguridad en casa"], c: 0, e: "La escolar es protegerse en la escuela." },
    { t: "Que es un plan de evacuacion?", o: ["Ruta de salida en emergencia", "Un juego", "Una tarea", "Un examen"], c: 0, e: "El plan indica por donde salir." },
    { t: "Que es una senal de seguridad?", o: ["Aviso de peligro", "Una propaganda", "Un anuncio", "Un juego"], c: 0, e: "Las señales avisan riesgos." },
    { t: "Que es el号码 de emergencia?", o: ["105 (bomberos)", "911", "080", "116"], c: 0, e: "En Peru, 105 es bomberos." },
    { t: "Que es un primeros auxilios?", o: ["Ayuda inicial en emergencia", "Un juego", "Una tarea", "Un examen"], c: 0, e: "Los primeros auxilios son ayuda inmediata." },
    { t: "Que es un cinturon de seguridad?", o: ["Aparato que protege en el auto", "Un juguete", "Una ropa", "Un adorno"], c: 0, e: "El cinturon protege al viajar." },
    { t: "Que es una casco?", o: ["Proteccion para la cabeza", "Un sombrero", "Una gorra", "Un adorno"], c: 0, e: "El casco protege la cabeza." },
    { t: "Que es una alarma?", o: ["Aviso sonoro de peligro", "Un juego", "Una tarea", "Un adorno"], c: 0, e: "La alarma avisa de un peligro." },
    { t: "Que es un extintor?", o: ["Aparato para apagar fuego", "Un juego", "Una tarea", "Un adorno"], c: 0, e: "El extintor apaga incendios." },
    { t: "Que es un botiquin?", o: ["Kit de primeros auxilios", "Un juego", "Una tarea", "Un adorno"], c: 0, e: "El botiquin tiene remedios." },
    { t: "Que es la ruta de evacuacion?", o: ["Camino de salida en emergencia", "Un juego", "Una tarea", "Un examen"], c: 0, e: "La ruta es por donde se sale." }
  ]
};

function gen(t) {
  const questions = bank[t] || bank["Trabajo en equipo"];
  const bq = questions[rand(0, questions.length - 1)];
  return q("Educacion para el Trabajo", bq.t, bq.o, bq.c, bq.e);
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
