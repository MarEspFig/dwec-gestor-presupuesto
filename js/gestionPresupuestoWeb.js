export const mostrarDatoEnId = (idElemento, valor) => {
  let elementById = document.getElementById(idElemento);
  if (elementById) elementById.textContent = valor;
};

export const mostrarGastoWeb = (idElemento, gasto) => {
    let elementById = document.getElementById(idElemento);
    if (!elementById) return;

    let divGasto = document.createElement("div");
    divGasto.setAttribute("class", "gasto");

    let divGastoDescripcion = document.createElement("div");
    divGastoDescripcion.setAttribute("class", "gasto-descripcion");
    divGastoDescripcion.textContent = gasto.descripcion;

    let divGastoFecha = document.createElement("div");
    divGastoFecha.setAttribute("class", "gasto-fecha");
    divGastoFecha.textContent = gasto.fecha;

    let divGastoValor = document.createElement("div");
    divGastoValor.setAttribute("class", "gasto-valor");
    divGastoValor.textContent = gasto.valor;

    let divGastoEtiquetas = document.createElement("div");
    divGastoEtiquetas.setAttribute("class", "gasto-etiquetas");

    gasto.etiquetas.forEach((etiqueta) => {
        let spanEtiqueta = document.createElement("span");
        spanEtiqueta.setAttribute("class", "gasto-etiquetas-etiqueta");
        spanEtiqueta.textContent = etiqueta;
        divGastoEtiquetas.append(spanEtiqueta);
    });

    divGasto.append(divGastoDescripcion);
    divGasto.append(divGastoFecha);
    divGasto.append(divGastoValor);
    divGasto.append(divGastoEtiquetas)
    elementById.append(divGasto);
};

export const mostrarGastosAgrupadosWeb = (
  idElemento,
  agrup,
  agruparGastos,
) => {};
