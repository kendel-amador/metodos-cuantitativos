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
import generateCase from "./CasesCard";
import { calcularCostos } from "../logic/EstadosNaturaleza";
import { segundaTabla } from "../logic/EstadosNaturaleza";
import NatureTable from "./NatureTable";
import NatureTableTwo from "./NatureTableTwo";

function Nature() {
  const numberOfCases = 3;
  const cases = Array.from({ length: numberOfCases }, (_, i) => i + 1);
  const [datos, setDatos] = useState([]);
  const [costosCalculados, setCostosCalculados] = useState(false); 


  const handleGenerate = () => {
    calcularCostos(datos, obtenerCosteDiario());
    segundaTabla(calcularCostos(datos, obtenerCosteDiario()));
    setCostosCalculados(true); 
  };
 
  function obtenerCosteDiario() {
    const costeDiario = document.getElementById("coste-diario").value;
    return costeDiario;
  }

  const limpiarCampos = () => {
    for (let i = 0; i < numberOfCases; i++) {
      const casoIndex = i + 1;
  
      document.getElementById(`costo-inicial-caso-${casoIndex}`).value = null;
      document.getElementById(`costo-adicional-caso-${casoIndex}`).value = null;
      document.getElementById(`duracion-caso-${casoIndex}`).value = null;
      document.getElementById(`nombre-1`).value = null;
      document.getElementById(`porcentaje-costo-inicial-caso-${casoIndex}`).value = null;
      document.getElementById(`porcentaje-costo-adicional-caso-${casoIndex}`).value = null;

    }
  };


  const handleSave = () => {
    const newDatos = [];

    for (let i = 0; i < numberOfCases; i++) {
      const casoIndex = i + 1;

      const costoInicial = document.getElementById(
        `costo-inicial-caso-${casoIndex}`
      ).value;
      const costoAdicional = document.getElementById(
        `costo-adicional-caso-${casoIndex}`
      ).value;
      const duracion = document.getElementById(
        `duracion-caso-${casoIndex}`
      ).value;

      const estado = document.getElementById(
        `estado-${casoIndex}`
      ).value;

      const nombre = document.getElementById(`nombre-1`).value;

      const porcentajeCostoInicial = document.getElementById(`porcentaje-costo-inicial-caso-${casoIndex}`).value;
      const porcentajeCostoAdicional = document.getElementById(`porcentaje-costo-adicional-caso-${casoIndex}`).value;

        let costoInicialFinal = parseInt(eval(costoInicial));
        if (porcentajeCostoInicial !== 0) {
          if (porcentajeCostoInicial > 1) {
            costoInicialFinal *= porcentajeCostoInicial; 
          } else if (porcentajeCostoInicial < 1) {
            costoInicialFinal -= (costoInicialFinal * porcentajeCostoInicial); 
            
          }
        }
  
        let costoAdicionalFinal = parseInt(eval(costoAdicional));
        console.log(costoAdicionalFinal)
        if (porcentajeCostoAdicional !== 0) {
          if (porcentajeCostoAdicional > 1) {
            costoAdicionalFinal *= porcentajeCostoAdicional; 
          } else if (porcentajeCostoAdicional < 1) {
            costoAdicionalFinal -= (costoAdicionalFinal * porcentajeCostoAdicional); 
     
          }
        }

      newDatos.push({
        nombre: nombre,
        estado: estado,
        costoInicial: costoInicialFinal,
        costoAdicional: costoAdicionalFinal,
        duracion: parseInt(duracion),
      });

          
      if ((i + 1) % 3 === 0) {
        setDatos((prevDatos) => [...prevDatos, ...newDatos]);

        newDatos.length = 0;
      }
    }

    limpiarCampos();
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
            Estados de la Naturaleza
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
              id="coste-diario"
              label="₡ Coste Diario"
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
              id="nombre-1"
              label="Nombre"
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
            {cases.map((caseNumber) => generateCase(caseNumber))}
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
          {costosCalculados && <NatureTable data={calcularCostos(datos, obtenerCosteDiario())} />}
          {costosCalculados && <NatureTableTwo data={segundaTabla(calcularCostos(datos, obtenerCosteDiario()))} />}
        </Card>
      </Container>
    </Box>
  );
}

export default Nature;
