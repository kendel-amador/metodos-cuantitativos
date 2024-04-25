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

const UncertaintyCasesCard = (caseNumber) => {
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
                  id={`nombre-${caseNumber}`}
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
              <Box sx={{ display: "flex", gap: "10px" }}>
                <TextField
                  id={`favorable-caso-${caseNumber}`}
                  label="₡ Valor Favorable"
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
                  id={`no-favorable-caso-${caseNumber}`}
                  label="₡ Valor No Favorable"
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
            </Box>
          </CardContent>
        </CardActionArea>
      </Card>
    </Grid>
  );
};

export default UncertaintyCasesCard;
