let presupuesto = 0;
let gastos = [];
let idGasto = 0;

function actualizarPresupuesto(newBudget) {
  if (typeof newBudget === "number" && newBudget > 0) {
    presupuesto = newBudget;
    return presupuesto;
  } else {
    console.error("El nuevo presupuesto no es válido");
    return -1;
  }
}

function mostrarPresupuesto() {
  return `Tu presupuesto actual es de ${presupuesto} €`;
}

function CrearGasto(descripcion, valor, fecha, ...etiquetas) {
  const timestamp = Date.parse(fecha);

  this.descripcion = descripcion;
  this.valor = typeof valor === "number" && valor >= 0 ? valor : 0;
  this.fecha = isNaN(timestamp) ? Date.now() : timestamp;
  this.etiquetas = etiquetas.length > 0 ? etiquetas : [];

  this.mostrarGastoCompleto = () => 
    `Gasto correspondiente a ${this.descripcion} con valor ${this.valor} €.\n` +
    `Fecha: ${new Date(this.fecha).toLocaleString()}\n` +
    `Etiquetas:\n` +
    `${this.etiquetas.map(e => `- ${e}`).join("\n")}\n`;
  this.actualizarDescripcion = (descripcion) =>
    (this.descripcion = descripcion);
  this.actualizarValor = function (valor) {
    if (typeof valor === "number" && valor > 0) this.valor = valor;
  };
  this.actualizarFecha = (fecha) => {
    this.fecha = !isNaN(Date.parse(fecha)) ? Date.parse(fecha) : this.fecha;
  };
  this.anyadirEtiquetas = (...etiquetas) => {
    this.etiquetas = [...new Set([...this.etiquetas, ...etiquetas])];
  };
  this.borrarEtiquetas = (...etiquetas) => {
    this.etiquetas = this.etiquetas.filter(e => !etiquetas.includes(e));
  }
}

function listarGastos() {
  return gastos;
}

function anyadirGasto(gastoObject) {
  gastoObject.id = idGasto++;
  gastos.push(gastoObject);
}

function borrarGasto(gastoId) {
  gastos = gastos.filter(gasto => gasto.id !== gastoId);
}

function calcularTotalGastos() {}
function calcularBalance() {}

// NO MODIFICAR A PARTIR DE AQUÍ: exportación de funciones y objetos creados para poder ejecutar los tests.
// Las funciones y objetos deben tener los nombres que se indican en el enunciado
// Si al obtener el código de una práctica se genera un conflicto, por favor incluye todo el código que aparece aquí debajo
export {
  mostrarPresupuesto,
  actualizarPresupuesto,
  CrearGasto,
  listarGastos,
  anyadirGasto,
  borrarGasto,
  calcularTotalGastos,
  calcularBalance,
};
