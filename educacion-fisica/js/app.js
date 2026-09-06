const topics = ["Condicion fisica", "Deportes", "Juegos recreativos", "Salud y ejercicio", "Coordenacion motora"];

const bank = {
  "Condicion fisica": [
    { t: "Que es la resistencia?", o: ["Capacidad de aguantar esfuerzo", "Velocidad", "Fuerza", "Flexibilidad"], c: 0, e: "La resistencia es aguantar actividad prolongada." },
    { t: "Que es la velocidad?", o: ["Capacidad de ir rapido", "Resistencia", "Fuerza", "Flexibilidad"], c: 0, e: "La velocidad es rapidez de desplazamiento." },
    { t: "Que es la fuerza?", o: ["Capacidad de vencer resistencia", "Velocidad", "Resistencia", "Flexibilidad"], c: 0, e: "La fuerza es vencer resistencia." },
    { t: "Que es la flexibilidad?", o: ["Capacidad de mover articulaciones", "Velocidad", "Fuerza", "Resistencia"], c: 0, e: "La flexibilidad es moverse con amplitud." },
    { t: "Que es la coordinacion?", o: ["Habilidad de combinar movimientos", "Velocidad", "Fuerza", "Resistencia"], c: 0, e: "La coordinacion es combinar movimientos." },
    { t: "Que es el calentamiento?", o: ["Preparar el cuerpo antes de actividad", "Enfriamiento", "Descanso", "Lesion"], c: 0, e: "El calentamiento prepara los musculos." },
    { t: "Que es el enfriamiento?", o: ["Actividad suave al finalizar", "Calentamiento", "Descanso", "Lesion"], c: 0, e: "El enfriamiento relaja los musculos." },
    { t: "Que es un estiramiento?", o: ["Movimiento para flexibilizar musculos", "Carrera", "Salto", "Lanzamiento"], c: 0, e: "El estiramiento aumenta la flexibilidad." },
    { t: "Que es el pulso?", o: ["Latido del corazon", "Respiracion", "Temperatura", "Presion"], c: 0, e: "El pulso mide los latidos." },
    { t: "Que es la frecuencia cardiaca?", o: ["Latidos por minuto del corazon", "Respiracion por minuto", "Temperatura", "Presion"], c: 0, e: "La frecuencia cardiaca son latidos/min." },
    { t: "Que es el VO2 maximo?", o: ["Capacidad maxima de captar oxigeno", "Velocidad maxima", "Fuerza maxima", "Resistencia maxima"], c: 0, e: "El VO2 maximo mide la capacidad aerobica." },
    { t: "Que es un musculo?", o: ["Tejido que se contrae y relaja", "Hueso", "Nervio", "Piel"], c: 0, e: "Los musculos permiten el movimiento." },
    { t: "Que es un hueso?", o: ["Tejido rigido del esqueleto", "Musculo", "Nervio", "Piel"], c: 0, e: "Los huesos dan forma y proteccion." },
    { t: "Que es una articulacion?", o: ["Punto de union entre huesos", "Musculo", "Hueso", "Nervio"], c: 0, e: "Las articulaciones permiten el movimiento." },
    { t: "Que es una lesions?", o: ["Dano al tejido corporal", "Ejercicio", "Descanso", "Calentamiento"], c: 0, e: "Las lesiones son danos al cuerpo." },
    { t: "Que es la capacidad aerobica?", o: ["Actividad con oxigeno", "Actividad sin oxigeno", "Fuerza", "Velocidad"], c: 0, e: "La aerobica usa oxigeno para producir energia." },
    { t: "Que es la capacidad anaerobica?", o: ["Actividad sin oxigeno", "Actividad con oxigeno", "Fuerza", "Velocidad"], c: 0, e: "La anaerobica no usa oxigeno directamente." },
    { t: "Que es el abdomen fuerte?", o: ["Zona central del cuerpo firme", "Brazos fuertes", "Piernas fuertes", "Espalda fuerte"], c: 0, e: "Un abdomen fuerte protege la columna." },
    { t: "Que es la postura?", o: ["Posicion del cuerpo al estar de pie", "Movimiento", "Ejercicio", "Descanso"], c: 0, e: "La postura es la posicion corporal." },
    { t: "Que es un regimen de ejercicio?", o: ["Plan regular de actividad fisica", "Dieta", "Descanso", "Lesion"], c: 0, e: "El regimen es la rutina de ejercicio." }
  ],
  "Deportes": [
    { t: "Que es el futbol?", o: ["Deporte con pelota y porterias", "Basquet", "Volley", "Tenis"], c: 0, e: "El futbol se juega con los pies." },
    { t: "Que es el basquet?", o: ["Deporte con pelota y canasta", "Futbol", "Volley", "Tenis"], c: 0, e: "El basquet se juega con las manos." },
    { t: "Que es el volley?", o: ["Deporte con pelota y red alta", "Futbol", "Basquet", "Tenis"], c: 0, e: "El volley se juega con una red alta." },
    { t: "Que es el tenis?", o: ["Deporte con raqueta y pelota", "Futbol", "Basquet", "Volley"], c: 0, e: "El tenis usa raqueta." },
    { t: "Que es el atletismo?", o: ["Deporte de correr y saltar", "Futbol", "Basquet", "Natacion"], c: 0, e: "El atletismo incluye carreras." },
    { t: "Que es la natacion?", o: ["Deporte en el agua", "Futbol", "Basquet", "Atletismo"], c: 0, e: "La natacion se practica en agua." },
    { t: "Que es el voleibol?", o: ["Deporte con pelota y red", "Futbol", "Basquet", "Tenis"], c: 0, e: "El voleibol se juega con pelota." },
    { t: "Que es el badminton?", o: ["Deporte con raqueta y pluma", "Tenis", "Futbol", "Basquet"], c: 0, e: "El badminton usa una pluma." },
    { t: "Que es el hockey?", o: ["Deporte con stick y pelota", "Futbol", "Basquet", "Tenis"], c: 0, e: "El hockey usa un stick." },
    { t: "Que es el golf?", o: ["Deporte con palo y pelota", "Futbol", "Basquet", "Tenis"], c: 0, e: "El golf usa un palo para golpear." },
    { t: "Que es el rugby?", o: ["Deporte con pelota ovalada", "Futbol", "Basquet", "Volley"], c: 0, e: "El rugby usa pelota ovalada." },
    { t: "Que es el ajedrez?", o: ["Juego estrategico de tablero", "Deporte fisico", "Deporte acuatico", "Deporte de pelota"], c: 0, e: "El ajedrez es un juego mental." },
    { t: "Que es el box?", o: ["Deporte de combate con guantes", "Karate", "Judo", "Lucha"], c: 0, e: "El box usa guantes de combate." },
    { t: "Que es el karate?", o: ["Arte marcial japonesa", "Box", "Judo", "Lucha"], c: 0, e: "El karate es arte marcial japonesa." },
    { t: "Que es el judo?", o: ["Arte marcial de agarre", "Box", "Karate", "Lucha"], c: 0, e: "El judo es de agarre y proyeccion." },
    { t: "Que es la gimnasia?", o: ["Deporte de flexibilidad y fuerza", "Futbol", "Basquet", "Natacion"], c: 0, e: "La gimnasia usa flexibilidad." },
    { t: "Que es el ciclismo?", o: ["Deporte en bicicleta", "Atletismo", "Natacion", "Futbol"], c: 0, e: "El ciclismo se practica en bicicleta." },
    { t: "Que es el esqui?", o: ["Deporte sobre nieve", "Natacion", "Ciclismo", "Atletismo"], c: 0, e: "El esqui se practica en la nieve." },
    { t: "Que es el surf?", o: ["Deporte sobre olas", "Natacion", "Esqui", "Ciclismo"], c: 0, e: "El surf se practica en el mar." },
    { t: "Que es el patinaje?", o: ["Deporte con patines", "Esqui", "Ciclismo", "Natacion"], c: 0, e: "El patinaje usa patines para deslizarse." }
  ],
  "Juegos recreativos": [
    { t: "Que es un juego recreativo?", o: ["Actividad lúdica para disfrutar", "Examen", "Tarea", "Trabajo"], c: 0, e: "Los juegos recreativos son para divertirse." },
    { t: "Que es la papa caliente?", o: ["Juego de pasar objeto rapido", "Juego de cartas", "Juego de mesa", "Juego de pelota"], c: 0, e: "Papa caliente pasa un objeto." },
    { t: "Que es las escondidas?", o: ["Juego de esconderse y buscar", "Juego de pelota", "Juego de cartas", "Juego de mesa"], c: 0, e: "Escondidas es buscar a otros." },
    { t: "Que es el gato y el raton?", o: ["Juego de perseguir", "Juego de cartas", "Juego de mesa", "Juego de pelota"], c: 0, e: "El gato persigue al raton." },
    { t: "Que es la rayuela?", o: ["Juego de saltar en casillas", "Juego de pelota", "Juego de cartas", "Juego de mesa"], c: 0, e: "La rayuela usa casillas en el suelo." },
    { t: "Que es el kite?", o: ["Juego de volar cometa", "Juego de pelota", "Juego de cartas", "Juego de mesa"], c: 0, e: "El kite vuela una cometa." },
    { t: "Que es la soga?", o: ["Juego de saltar cuerda", "Juego de pelota", "Juego de cartas", "Juego de mesa"], c: 0, e: "La soga es saltar una cuerda." },
    { t: "Que es el Carmen Seco?", o: ["Juego de derrumbar cubos", "Juego de pelota", "Juego de cartas", "Juego de mesa"], c: 0, e: "Carmen Seco derriba cubos." },
    { t: "Que es la gallinita ciega?", o: ["Juego con los ojos vendados", "Juego de pelota", "Juego de cartas", "Juego de mesa"], c: 0, e: "La gallinita ciega no ve." },
    { t: "Que es el relevo?", o: ["Juego de pasar testigo rapido", "Juego de pelota", "Juego de cartas", "Juego de mesa"], c: 0, e: "El relevo pasa un testigo." },
    { t: "Que es el juego del aro?", o: ["Juego de girar aro con pie", "Juego de pelota", "Juego de cartas", "Juego de mesa"], c: 0, e: "El juego del aro usa un aro." },
    { t: "Que es la carrera de sacos?", o: ["Juego de saltar dentro de saco", "Juego de pelota", "Juego de cartas", "Juego de mesa"], c: 0, e: "La carrera de sacos usa sacos." },
    { t: "Que es el juego de la silla?", o: ["Juego de correr y sentarse", "Juego de pelota", "Juego de cartas", "Juego de mesa"], c: 0, e: "El juego de la silla busca sentarse." },
    { t: "Que es el juego del pañuelo?", o: ["Juego de robar pañuelo", "Juego de pelota", "Juego de cartas", "Juego de mesa"], c: 0, e: "El juego del pañuelo roba un pañuelo." },
    { t: "Que es la Дміtriyevka?", o: ["Juego de tirar piedra lejos", "Juego de pelota", "Juego de cartas", "Juego de mesa"], c: 0, e: "Se tira una piedra lo mas lejos posible." },
    { t: "Que es el juego del espejo?", o: ["Juego de imitar movimientos", "Juego de pelota", "Juego de cartas", "Juego de mesa"], c: 0, e: "El espejo imita al otro." },
    { t: "Que es la pista de obstaculos?", o: ["Recorrido con dificultades", "Juego de pelota", "Juego de cartas", "Juego de mesa"], c: 0, e: "La pista tiene obstaculos para superar." },
    { t: "Que es el juego del trencito?", o: ["Juego de formar fila y correr", "Juego de pelota", "Juego de cartas", "Juego de mesa"], c: 0, e: "El trencito forma fila." },
    { t: "Que es el juego del flipear?", o: ["Juego de lanzar y atrapar", "Juego de pelota", "Juego de cartas", "Juego de mesa"], c: 0, e: "El flipear lanza y atrapa." },
    { t: "Que es la carrera de cintas?", o: ["Juego de correr con cintas", "Juego de pelota", "Juego de cartas", "Juego de mesa"], c: 0, e: "La carrera de cintas usa cintas de colores." }
  ],
  "Salud y ejercicio": [
    { t: "Que es una dieta balanceada?", o: ["Alimentacion con todos los nutrientes", "Dieta para bajar de peso", "Dieta para subir de peso", "Dieta sin carne"], c: 0, e: "La dieta balanceada tiene todo." },
    { t: "Que es el ejercicio aerobico?", o: ["Actividad con oxigeno prolongada", "Actividad sin oxigeno", "Fuerza", "Velocidad"], c: 0, e: "El aerobico usa oxigeno." },
    { t: "Que es una buena hidratacion?", o: ["Beber suficiente agua", "No beber agua", "Beber solo jugo", "Beber gaseosa"], c: 0, e: "La hidratacion es beber agua." },
    { t: "Que es un BMI?", o: ["Indice de masa corporal", "Peso exacto", "Estatura exacta", "Porcentaje de grasa"], c: 0, e: "El IMC mide relacion peso/estatura." },
    { t: "Que es un sedentario?", o: ["Persona que no hace ejercicio", "Persona activa", "Deportista", "Atleta"], c: 0, e: "El sedentario no se mueve mucho." },
    { t: "Que es un calentamiento dinamico?", o: ["Movimientos activos antes de ejercicio", "Estiramiento estatico", "Descanso", "Enfriamiento"], c: 0, e: "El calentamiento dinamico activa." },
    { t: "Que es una buena postura?", o: ["Posicion correcta del cuerpo", "Mala posicion", "Caminar rapido", "Correr"], c: 0, e: "La buena postura protege la columna." },
    { t: "Que es una lesyon muscular?", o: ["Dano al musculo por esfuerzo", "Hueso roto", "Corte", "Moreton"], c: 0, e: "La lesion muscular es desgarro o estiron." },
    { t: "Que es la recuperacion deportiva?", o: ["Descanso despues de ejercicio", "Ejercicio intenso", "Dieta estricta", "Vitaminas"], c: 0, e: "La recuperacion es descansar." },
    { t: "Que es el sueño deportivo?", o: ["Descanso nocturno para recuperarse", "Siesta", "No dormir", "Dormir mucho"], c: 0, e: "El sueño nocturno es esencial." },
    { t: "Que es una fruta?", o: ["Alimento natural saludable", "Comida chatarra", "Bebida", "Postre"], c: 0, e: "Las frutas son saludables." },
    { t: "Que es un verdura?", o: ["Alimento vegetal nutritivo", "Fruta", "Carne", "Pan"], c: 0, e: "Las verduras son nutritivas." },
    { t: "Que es la proteina?", o: ["Nutriente para construir musculo", "Grasa", "Carbohidrato", "Vitamina"], c: 0, e: "La proteina construye musculo." },
    { t: "Que es un carbohidrato?", o: ["Nutriente de energia", "Proteina", "Grasa", "Vitamina"], c: 0, e: "Los carbohidratos dan energia." },
    { t: "Que es una grasa saludable?", o: ["Grasa buena para el cuerpo", "Grasa mala", "Chatarra", "Aceite viejo"], c: 0, e: "Las grasas saludables son buenas." },
    { t: "Que es una vitamina?", o: ["Nutriente para salud", "Proteina", "Carbohidrato", "Grasa"], c: 0, e: "Las vitaminas protegen la salud." },
    { t: "Que es el colesterol bueno?", o: ["HDL que limpia arterias", "LDL que obstruye", "Grasa mala", "Azucar"], c: 0, e: "El HDL es el colesterol bueno." },
    { t: "Que es un colesterol malo?", o: ["LDL que obstruye arterias", "HDL que limpia", "Proteina", "Vitamina"], c: 0, e: "El LDL es el colesterol malo." },
    { t: "Que es la presion arterial?", o: ["Fuerza de la sangre en arterias", "Pulso", "Respiracion", "Temperatura"], c: 0, e: "La presion arterial mide la fuerza." },
    { t: "Que es el azucar refinada?", o: ["Azucar procesada no saludable", "Fruta", "Verdura", "Proteina"], c: 0, e: "El azucar refinada es mala en exceso." }
  ],
  "Coordenacion motora": [
    { t: "Que es la coordinacion ojo-mano?", o: ["Trabajar vista y manos juntas", "Solo vista", "Solo manos", "Solo piernas"], c: 0, e: "La coordinacion ojo-mano une vista y accion." },
    { t: "Que es la coordinacion general?", o: ["Armonizar todo el cuerpo", "Solo piernas", "Solo brazos", "Solo cabeza"], c: 0, e: "La general coordina todo el cuerpo." },
    { t: "Que es la equilibrio?", o: ["Mantenerse sin caer", "Correr rapido", "Saltar alto", "Lanzar lejos"], c: 0, e: "El equilibrio es mantener la estabilidad." },
    { t: "Que es un giro?", o: ["Rotar el cuerpo sobre si mismo", "Saltar", "Correr", "Caminar"], c: 0, e: "El giro rota el cuerpo." },
    { t: "Que es un salto?", o: ["Elevar el cuerpo del suelo", "Caminar", "Correr", "Girar"], c: 0, e: "El salto eleva el cuerpo." },
    { t: "Que es un lanzamiento?", o: ["Impulsar un objeto con la mano", "Atrapar", "Correr", "Saltar"], c: 0, e: "El lanzamiento impulsa un objeto." },
    { t: "Que es un atrapar?", o: ["Coger un objeto en movimiento", "Lanzar", "Correr", "Saltar"], c: 0, e: "Atrapar es coger un objeto." },
    { t: "Que es una carrera?", o: ["Desplazarse rapido con las piernas", "Caminar", "Saltar", "Girar"], c: 0, e: "La carrera es correr." },
    { t: "Que es un gateo?", o: ["Desplazarse con manos y rodillas", "Caminar", "Correr", "Saltar"], c: 0, e: "El gateo usa manos y rodillas." },
    { t: "Que es un balanceo?", o: ["Moverse de un lado a otro", "Girar", "Saltar", "Caminar"], c: 0, e: "El balanceo va de un lado a otro." },
    { t: "Que es una voltereta?", o: ["Rotar el cuerpo hacia adelante", "Girar", "Saltar", "Correr"], c: 0, e: "La voltereta rota hacia adelante." },
    { t: "Que es un puente?", o: ["Posicion con arco del cuerpo", "Caminar", "Correr", "Saltar"], c: 0, e: "El puente arquea el cuerpo." },
    { t: "Que es un cuclillas?", o: ["Flexionar rodillas agachado", "Levantarse", "Saltar", "Correr"], c: 0, e: "Cuclillas flexiona las rodillas." },
    { t: "Que es un salto en longitud?", o: ["Saltar lo mas lejos posible", "Saltar alto", "Correr", "Girar"], c: 0, e: "El salto en longitud es de distancia." },
    { t: "Que es un salto en altura?", o: ["Saltar lo mas alto posible", "Saltar lejos", "Correr", "Girar"], c: 0, e: "El salto en altura es de altura." },
    { t: "Que es una marcha?", o: ["Caminar rapido y coordinado", "Correr", "Saltar", "Girar"], c: 0, e: "La marcha es caminar rapido." },
    { t: "Que es un rebote?", o: ["Botar un objeto contra el suelo", "Atrapar", "Lanzar", "Correr"], c: 0, e: "El rebote es botar un objeto." },
    { t: "Que es una cadencia?", o: ["Regularidad en el ritmo del movimiento", "Velocidad", "Fuerza", "Equilibrio"], c: 0, e: "La cadencia es el ritmo constante." },
    { t: "Que es un pivote?", o: ["Girar sobre un pie", "Saltar", "Correr", "Caminar"], c: 0, e: "El pivote gira sobre un pie." },
    { t: "Que es un desplazamiento lateral?", o: ["Moverse de lado a lado", "Correr hacia adelante", "Saltar", "Girar"], c: 0, e: "El desplazamiento lateral es de lado." }
  ]
};

function gen(t) {
  const questions = bank[t] || bank["Condicion fisica"];
  const bq = questions[rand(0, questions.length - 1)];
  return q("Educacion Fisica", bq.t, bq.o, bq.c, bq.e);
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
