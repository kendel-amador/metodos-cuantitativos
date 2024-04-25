import React from "react";
import {
  Box,
  Grid,
  Typography,
  Card,
  CardContent,
  CardActionArea,
  TextField,
} from "@mui/material";

const generateCase = (caseNumber) => {
  return (
    <Grid item xs={12} sm={12} md={12} lg={4} xl={4} key={caseNumber}>
      <Card sx={{ bgcolor: "transparent", border: "1px solid #3E3E3E" }}>
        <CardActionArea>
          <CardContent>
            <Typography
              variant="h5"
              sx={{ mb: "15px", fontWeight: "bold", color: "#E3E3E3" }}
            >
              Escenario #{`${caseNumber}`}
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <Box sx={{ display: "flex", gap: "10px" }}>
                <TextField
                  id={`costo-inicial-caso-${caseNumber}`}
                  label="₡ Costo Inicial"
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
                  id={`porcentaje-costo-inicial-caso-${caseNumber}`}
                  label="%"
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
              <Box sx={{ display: "flex", gap: "10px" }}>
                <TextField
                  id={`costo-adicional-caso-${caseNumber}`}
                  label="₡ Costo Adicional"
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
                  id={`porcentaje-costo-adicional-caso-${caseNumber}`}
                  label="%"
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
              <TextField
                id={`duracion-caso-${caseNumber}`}
                label="Duracion"
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
                id={`estado-${caseNumber}`}
                label="Estado"
                value={
                  caseNumber === 1
                    ? "LEVE"
                    : caseNumber === 2
                    ? "MODERADO"
                    : caseNumber === 3
                    ? "GRAVE"
                    : ""
                }
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
          </CardContent>
        </CardActionArea>
      </Card>
    </Grid>
  );
};

export default generateCase;
