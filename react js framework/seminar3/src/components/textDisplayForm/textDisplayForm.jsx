import { Card, CardContent, Typography } from "@mui/material";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useState } from "react";

function TextDisplayForm() {
  const [input, setInput] = useState("");
  const [text, setText] = useState("");

  const handleText = () => {
    setText(input);
    setInput("");
  };

  const enterClick = (event) => {
    if (event.key === "Enter") {
      handleText();
    }
  };

  return (
    <div>
      <TextField
        fullWidth
        label="Введите текст"
        id="fullWidth"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={enterClick}
      />
      <Button variant="contained" onClick={handleText}>
        Отобразить текст
      </Button>
      {text && (
        <Card>
          <CardContent>
            <Typography variant="h5">{text}</Typography>
          </CardContent>
        </Card>
      )}
    </div>
  );
}

export default TextDisplayForm;
