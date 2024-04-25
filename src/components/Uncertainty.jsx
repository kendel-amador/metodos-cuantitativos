import React, { useState } from "react";
import {
  Box,
  Grid,
  Typography,
  Container,
  Button,
  Card,
  TextField,
} from "@mui/material";
import UncertaintyCasesCard from "./UncertaintyCasesCard";
import { criteriosInsertidumbre } from "../logic/CriteriosInsertidumbre";
import UncertaintyTable from "./UncertaintyTable";

function Uncertainty() {
  const numberOfCases = 3;
  const cases = Array.from({ length: numberOfCases }, (_, i) => i + 1);
  const [datos, setDatos] = useState([]);
  const [criterios, setCriterios] = useState(false);
  const [resultados, setResultados] = useState(null);

  const limpiarCampos = () => {
    for (let i = 0; i < numberOfCases; i++) {
      const casoIndex = i + 1;

      document.getElementById(`nombre-${casoIndex}`).value = null;
      document.getElementById(`favorable-caso-${casoIndex}`).value = null;
      document.getElementById(`no-favorable-caso-${casoIndex}`).value = null;
    }
  };

  function porcentajeFavorable() {
    const porcentajeFavorable =
      document.getElementById(`porcentaje-favorable`).value;
    return porcentajeFavorable;
  }

  function porcentajeNoFavorable() {
    const porcentajeNoFavorable = document.getElementById(
      `porcentaje-no-favorable`
    ).value;
    return porcentajeNoFavorable;
  }

  function porcentajeRealismo() {
    const porcentajeRealismo =
      document.getElementById(`porcentaje-realismo`).value;
    return porcentajeRealismo;
  }

  const handleSave = () => {
    const newDatos = [];

    for (let i = 0; i < numberOfCases; i++) {
      const casoIndex = i + 1;

      const nombre = document.getElementById(`nombre-${casoIndex}`).value;
      const favorable = document.getElementById(
        `favorable-caso-${casoIndex}`
      ).value;

      const noFavorable = document.getElementById(
        `no-favorable-caso-${casoIndex}`
      ).value;

      newDatos.push({
        [nombre]: { favorable: favorable, no_favorable: noFavorable },
      });

      if ((i + 1) % 3 === 0) {
        setDatos((prevDatos) => [...prevDatos, ...newDatos]);

        newDatos.length = 0;
      }
    }

    limpiarCampos();
  };

  const handleGenerate = () => {
    const datosObj = datos.reduce((acc, item) => {
      const [key, value] = Object.entries(item)[0];
      acc[key] = value;
      return acc;
    }, {});

    const porcentajeFavorableValue = porcentajeFavorable();
    const porcentajeNoFavorableValue = porcentajeNoFavorable();
    const porcentajeRealismoValue = porcentajeRealismo();

    const resultadosGenerados = criteriosInsertidumbre(
      datosObj,
      parseFloat(porcentajeFavorableValue),
      parseFloat(porcentajeNoFavorableValue),
      parseFloat(porcentajeRealismoValue)
    );

    setResultados(resultadosGenerados);
    setCriterios(true);

    document.getElementById(`porcentaje-favorable`).value = null;
    document.getElementById(`porcentaje-no-favorable`).value = null;
    document.getElementById(`porcentaje-realismo`).value = null;
  };

  return (
    <Box>
      <Container>
        <Box sx={{ m: "5px 0" }}>
          <Typography
            variant="h5"
            sx={{
              m: "50px 0",
              fontWeight: "bold",
              fontSize: "30px",
              color: "#E3E3E3",
              textAlign: "center",
            }}
          >
            Criterios de Incertidumbre
          </Typography>
        </Box>
        <Card
          sx={{
            bgcolor: "transparent",
            border: "1px solid #3E3E3E",
            p: "20px",
          }}
        >
          <Box sx={{ display: "flex", gap: "15px" }}>
            <TextField
              id="porcentaje-realismo"
              label="% Porcentaje de Realismo"
              variant="outlined"
              size="small"
              color="secondary"
              sx={{
                border: "1px solid #3E3E3E",
                mb: "15px",
              }}
              InputLabelProps={{
                style: { color: "#E3E3E3", fontSize: "15px" },
              }}
              inputProps={{
                style: { color: "#E3E3E3" },
              }}
            />
            <TextField
              id={`porcentaje-favorable`}
              label="% Porcentaje Favorable"
              variant="outlined"
              size="small"
              color="secondary"
              sx={{
                border: "1px solid #3E3E3E",
                mb: "15px",
              }}
              InputLabelProps={{
                style: { color: "#E3E3E3", fontSize: "15px" },
              }}
              inputProps={{
                style: { color: "#E3E3E3" },
              }}
            />
            <TextField
              id={`porcentaje-no-favorable`}
              label="% Porcentaje no Favorable"
              variant="outlined"
              size="small"
              color="secondary"
              sx={{
                border: "1px solid #3E3E3E",
                mb: "15px",
              }}
              InputLabelProps={{
                style: { color: "#E3E3E3", fontSize: "15px" },
              }}
              inputProps={{
                style: { color: "#E3E3E3" },
              }}
            />
          </Box>

          <Grid container spacing={3}>
            {cases.map((caseNumber) => UncertaintyCasesCard(caseNumber))}
          </Grid>

          <Box
            sx={{
              textAlign: "center",
              m: "25px",
              display: "flex",
              justifyContent: "center",
              gap: "15px",
            }}
          >
            <Button
              variant="outlined"
              sx={{ border: "1px solid #3E3E3E", color: "#E3E3E3" }}
              onClick={handleSave}
            >
              GUARDAR
            </Button>
            <Button
              variant="outlined"
              sx={{ border: "1px solid #3E3E3E", color: "#E3E3E3" }}
              onClick={handleGenerate}
            >
              GENERAR
            </Button>
          </Box>

          {resultados && <UncertaintyTable data={resultados} />}
        </Card>
      </Container>
    </Box>
  );
}

export default Uncertainty;
