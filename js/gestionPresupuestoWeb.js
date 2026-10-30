export const mostrarDatoEnId = (idElemento, valor) => {
  let elementById = document.getElementById(idElemento);
  if (elementById) elementById.textContent = valor;
};

export const mostrarGastoWeb = (idElemento, gasto) => {};

export const mostrarGastosAgrupadosWeb = (
  idElemento,
  agrup,
  agruparGastos,
) => {};
