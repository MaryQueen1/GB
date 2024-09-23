import React, { useState, useEffect } from "react";
import {
  TextField,
  Button,
  List,
  ListItem,
  IconButton,
  Checkbox,
  Typography,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

const TodoList = () => {
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem("tasks");
    return savedTasks ? JSON.parse(savedTasks) : [];
  });
  const [taskInput, setTaskInput] = useState("");

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = () => {
    if (taskInput.trim() === "") return;
    const newTasks = [...tasks, { text: taskInput, completed: false }];
    setTasks(newTasks);
    setTaskInput("");
  };

  const removeTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  const toggleTaskCompletion = (index) => {
    const newTasks = tasks.map((task, i) =>
      i === index ? { ...task, completed: !task.completed } : task
    );
    setTasks(newTasks);
  };

  const enterClick = (e) => {
    if (e.key === "Enter") {
      addTask();
    }
  };

  return (
    <div className="todo-list">
      <TextField
        label="Новая задача"
        variant="standard"
        value={taskInput}
        onChange={(e) => setTaskInput(e.target.value)}
        onKeyDown={enterClick}
        sx={{ width: "1311px", borderTop: "1px solid grey;" }}
      />
      <Button
        variant="contained"
        color="primary"
        onClick={addTask}
        sx={{
          backgroundColor: "#3c8c52",
          fontWeight: "bold",
          padding: "12px",
          letterSpacing: ".2rem",
        }}
      >
        Добавить
      </Button>
      <List>
        {tasks.map((task, index) => (
          <ListItem
            key={index}
            style={{
              margin: "10px 0",
              border: "1px solid black",
              borderRadius: "5px",
              width: "100%", // обеспечьте ширину 100% для элементов списка
              display: "flex", // добавлено для гибридного размещения
              alignItems: "center", // центрировать элементы по вертикали
            }}
          >
            <Checkbox
              checked={task.completed}
              onChange={() => toggleTaskCompletion(index)}
            />
            <Typography
              style={{
                textDecoration: task.completed ? "line-through" : "none",
                flexGrow: 1,
                overflowWrap: "break-word",  // Позволяет переносить длинные слова
                wordWrap: "break-word",       // Поддержка для более старых браузеров
                whiteSpace: "normal",         // Разрешаем перенос текста
                maxWidth: "95%", 
              }}
            >
              {task.text}
            </Typography>
            <IconButton
              edge="end"
              aria-label="delete"
              onClick={() => removeTask(index)}
            >
              <DeleteIcon />
            </IconButton>
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default TodoList;
