function calcularCostoTotal(
  costoInicial,
  costoAdicional,
  duracion,
  costoDiario
) {
  let costoTotal = costoInicial + (costoAdicional ? costoAdicional : 0);
  costoTotal += duracion * costoDiario;
  return costoTotal;
}

export function calcularCostos(datos, costoDiario) {
  const costosTotales = [];
  datos.forEach(
    ({ nombre, estado, costoInicial, costoAdicional, duracion }) => {
      const costoTotal = calcularCostoTotal(
        costoInicial,
        costoAdicional,
        duracion,
        costoDiario
      );
      costosTotales.push({ nombre, estado, costoTotal });
    }
  );

  return costosTotales;
}

export function segundaTabla(costosTotales) {
  const tabla = {
    OPTIMISTA: {},
    PESIMISTA: {},
    LAPLACE: {},
  };

  const agencias = {};
  costosTotales.forEach((item) => {
    if (!agencias[item.nombre]) {
      agencias[item.nombre] = [];
    }
    agencias[item.nombre].push(item.costoTotal);
  });

  console.log(agencias);

  Object.keys(agencias).forEach((nombre) => {
    const costosAgencia = agencias[nombre];

    const optimista = parseInt(Math.min(...costosAgencia), 10);

    const pesimista = parseInt(Math.max(...costosAgencia), 10);

    const laplace = parseInt(
      costosAgencia.reduce((total, costo) => total + costo, 0) /
        costosAgencia.length,
      10
    );

    tabla.OPTIMISTA[nombre] = optimista;
    tabla.PESIMISTA[nombre] = pesimista;
    tabla.LAPLACE[nombre] = laplace;
  });

  return tabla;
}
