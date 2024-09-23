import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import { temperatureUnit } from "../../Data/TemperatureUnit";
import { useState } from "react";
import DragHandleRoundedIcon from "@mui/icons-material/DragHandleRounded";

function TemperatureConverter() {
  const [inputValue, setInputValue] = useState("");
  const [outputValue, setOutputValue] = useState("");
  const [unit, setUnit] = useState("Celsius");

  const convertToFahrenheit = (c) => (c * 9) / 5 + 32;
  const convertToCelsius = (f) => ((f - 32) * 5) / 9;

  const handleInputChange = (event) => {
    const value = event.target.value;
    setInputValue(value);

    if (unit === "Celsius") {
      const fahrenheit = value
        ? convertToFahrenheit(parseFloat(value)).toFixed(2)
        : "";
      setOutputValue(fahrenheit);
    } else if (unit === "Fahrenheit") {
      const celsius = value
        ? convertToCelsius(parseFloat(value)).toFixed(2)
        : "";
      setOutputValue(celsius);
    }
  };

  const handleUnitChange = (event) => {
    const selectedUnit = event.target.value;
    setUnit(selectedUnit);
    setInputValue("");
    setOutputValue("");
  };

  return (
    <div className="temperature-converter">
      <TextField
        label={`Температура (${unit})`}
        variant="outlined"
        value={inputValue}
        onChange={handleInputChange}
      />

      <Box
        component="form"
        sx={{ "& > :not(style)": { m: 0, width: "8ch" } }}
        noValidate
        autoComplete="off"
      >
        <TextField
          select
          value={unit}
          onChange={handleUnitChange}
          variant="outlined"
        >
          {temperatureUnit.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
      </Box>
      <DragHandleRoundedIcon />
      <TextField
        label={`Температура (${unit === "Celsius" ? "℉" : "°C"})`}
        variant="outlined"
        value={outputValue}
        InputProps={{
          readOnly: true,
        }}
      />
    </div>
  );
}

export default TemperatureConverter;
