import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import Switch from "@mui/material/Switch";

export default function Nav() {
  const label = { inputProps: { "aria-label": "Switch demo" } };

  return (
    <div>
      <ButtonGroup variant="contained" aria-label="Basic button group">
        <Button>Главная</Button>
        <Button>Каталог</Button>
        <Button>Контакты</Button>
      </ButtonGroup>
      <Switch {...label} defaultChecked />
    </div>
  );
}
