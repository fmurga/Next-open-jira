import { Button, Box, TextField } from "@mui/material";
import SaveOutlinedIcon from "@mui/icons-material/SaveOutlined";
import ClearIcon from "@mui/icons-material/Clear";
import AddIcon from "@mui/icons-material/AddCircleOutlineOutlined";
import { ChangeEvent, useState, useContext } from 'react';
import { EntriesContext } from '../../context/entries/EntriesContext';
import { UIContext } from '../../context/ui/UIContext';

export const NewEntry = () => {

  const {addNewEntry} = useContext(EntriesContext)
  const { setIsAddingEntry, isAddingEntry} = useContext(UIContext)

  const [inputValue, setInputValue] = useState("");
  const [textFieldTouched, setTextFieldTouched] = useState(false);

  const onSave = () => {
    if (inputValue.length === 0) return;
    addNewEntry(inputValue)
    setIsAddingEntry(false)
    setInputValue('')
    setTextFieldTouched(false)
  };

  const onTextFieldChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    e.preventDefault;
    setInputValue(e.target.value);
  };

  return (
    <Box sx={{ marginBottom: 2, paddingX: 2 }}>
      {isAddingEntry && (
        <>
          <TextField
            sx={{ marginTop: 2, marginBottom: 1 }}
            placeholder="Nueva Entrada"
            autoFocus
            multiline
            label="Nueva Entrada"
            helperText={
              inputValue.length <= 0 &&
              textFieldTouched &&
              "Ingrese una descripción"
            }
            fullWidth
            error={inputValue.length <= 0 && textFieldTouched}
            value={inputValue}
            onChange={onTextFieldChange}
            onBlur={() => setTextFieldTouched(true)}
          />
          <Box
            display="flex"
            justifyContent="space-between"
            paddingX={3}
            paddingY={1}
          >
            <Button
              variant="outlined"
              color="error"
              endIcon={<ClearIcon />}
              onClick={() => setIsAddingEntry(false)}
            >
              Cancelar
            </Button>
            <Button
              variant="outlined"
              color="secondary"
              endIcon={<SaveOutlinedIcon />}
              onClick={onSave}
            >
              Guardar
            </Button>
          </Box>
        </>
      )}

      <Button
        fullWidth
        startIcon={<AddIcon />}
        variant="outlined"
        onClick={() => setIsAddingEntry(true)}
      >
        Agregar Tarea
      </Button>
    </Box>
  );
};
