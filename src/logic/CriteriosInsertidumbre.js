export function criteriosInsertidumbre(
  datos,
  porcentajeFavorable,
  porcentajeNoFavorable,
  porcentajeRealismo
) {
  var resultados = {};

  for (var opcion in datos) {
    var valor_favorable = parseFloat(datos[opcion].favorable);
    var valor_no_favorable = parseFloat(datos[opcion].no_favorable);

    porcentajeFavorable = parseFloat(porcentajeFavorable);
    porcentajeNoFavorable = parseFloat(porcentajeNoFavorable);
    porcentajeRealismo = parseFloat(porcentajeRealismo);

    if (porcentajeFavorable !== 0) {
      if (porcentajeFavorable > 1) {
        valor_favorable *= porcentajeFavorable;
      } else if (porcentajeFavorable < 1) {
        valor_favorable -= valor_favorable * porcentajeFavorable;
      }
    }

    if (porcentajeNoFavorable !== 0) {
      if (porcentajeNoFavorable > 1) {
        valor_no_favorable *= porcentajeNoFavorable;
      } else if (porcentajeNoFavorable < 1) {
        valor_no_favorable -= valor_no_favorable * porcentajeNoFavorable;
      }
    }

    var maximax_fila = Math.max(valor_favorable, valor_no_favorable);

    var maximin_fila = Math.min(valor_favorable, valor_no_favorable);

    var realismo =
      porcentajeRealismo * maximax_fila +
      (1 - porcentajeRealismo) * maximin_fila;

    var laplace = (valor_favorable + valor_no_favorable) / 2;

    resultados[opcion] = {
      FAVORABLE: valor_favorable,
      "NO FAVORABLE": valor_no_favorable,
      "MAXIMAX FILA": maximax_fila,
      "MAXIMIN FILA": maximin_fila,
      REALISMO: realismo,
      LAPLACE: laplace,
    };
  }

  var maxFavorableDespuesPorcentaje = Math.max(
    ...Object.values(resultados).map((item) => item["MAXIMAX FILA"])
  );
  var maxNoFavorableDespuesPorcentaje = Math.max(
    ...Object.values(resultados).map((item) => item["MAXIMIN FILA"])
  );

  for (var opcion in datos) {
    var arrepentimientoFavorable = maxFavorableDespuesPorcentaje;
    var arrepentimientoNoFavorable = maxNoFavorableDespuesPorcentaje;

    resultados[opcion]["ARREPENTIMIENTO FAVORABLE"] =
      arrepentimientoFavorable - resultados[opcion]["MAXIMAX FILA"];
    resultados[opcion]["ARREPENTIMIENTO NO FAVORABLE"] =
      arrepentimientoNoFavorable - resultados[opcion]["MAXIMIN FILA"];
  }

  return resultados;
}
