import { Button, Box, TextField } from "@mui/material";
import SaveOutlinedIcon from "@mui/icons-material/SaveOutlined";
import ClearIcon from "@mui/icons-material/Clear";
import AddIcon from "@mui/icons-material/AddCircleOutlineOutlined";

export const NewEntry = () => {
  return (
    <Box sx={{ marginBottom: 2, paddingX: 2 }}>
      <Button fullWidth startIcon={<AddIcon />} variant="outlined">
        Agregar Tarea
      </Button>
      <TextField
        sx={{ marginTop: 2, marginBottom: 1 }}
        placeholder="Nueva Entrada"
        autoFocus
        multiline
        label="Nueva Entrada"
        helperText="Ingrese un Valor"
        fullWidth
      />
      <Box
        display="flex"
        justifyContent="space-between"
        paddingX={3}
        paddingY={1}
      >
        <Button
          variant="outlined"
          color="secondary"
          endIcon={<SaveOutlinedIcon />}
        >
          Guardar
        </Button>
        <Button variant="outlined" color="error" endIcon={<ClearIcon />}>
          Cancelar
        </Button>
      </Box>
    </Box>
  );
};
