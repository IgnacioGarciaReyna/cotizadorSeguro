//Se utiliza un helper para usar
//El código del comentario queda mas ligero, menos cargado
//Las funciones se pueden utilizar en varios archivos si es necesario
//Código js tradicional


//Obtiene la diferencia de años
export function obtenerDiferenciaYear(year) {
  return new Date().getFullYear() - year;
}

//Calcula el toral a pagar según la marca
export function calcularMarca(marca) {
  let incremento;

  switch (marca) {
    case "europeo":
      incremento = 1.3;
      break;
    case "americano":
      incremento = 1.15;
      break;
    case "asiatico":
      incremento = 1.05;
      break;
    default:
      break;
  }

  return incremento;
}


//Calcula el tipo de seguro
export function obtenerPlan(plan) {
    return (plan === 'basico') ? 1.20 : 1.50;
}
