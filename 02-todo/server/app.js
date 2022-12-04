const express = require("express");
const app = express();
const fs = require("fs/promises");

const PORT = 5000;

app
  .use(express.json())
  .use(express.urlencoded({ extended: false }))
  .use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "*");
    res.header("Access-Control-Allow-Method", "*");

    next();
  });

app.get("/task", async (req, res) => {
  try {
    const tasks = await fs.readFile("./tasks.json");
    res.send(JSON.parse(tasks));
  } catch (error) {
    res.status(500).send({ error });
  }
});

app.post("/task", async (req, res) => {
  try {
    const task = req.body;

    const listBuffer = await fs.readFile("./task.json"); //dataström
    const currentTasks = JSON.parse(listBuffer);
    let taskId = 1;
    if (currentTasks && currentTasks.length > 0) {
      taskId = currentTasks.reduce(
        (maxId, currentElement) =>
          currentElement.id > maxId ? currentElement.id : maxId,
        taskId
      );
    }

    const newTask = { id: taskId + 1, ...task };
    const newList = currentTasks ? [...currentTasks, newTask] : [newTask];
    console.log(newList);

    await fs.writeFile("./task.json", JSON.stringify(newList));
    res.send(newTask);
  } catch (error) {
    res.status(500).send({ error });
  }
});

app.delete("/task/:id", async (req, res) => {
  try {
    const id = req.params.id;
    listBuffer = await fs.readFile("./task.json"); //läser filen
    const currentTasks = JSON.parse(listBuffer);
    if (currentTasks.length > 0) {
      console.log(currentTasks.filter((task) => task.id != id));
      await fs.writeFile(
        "./task.json",
        JSON.stringify(currentTasks.filter((task) => task.id != id))
      );
      res.send({ message: `Uppgift med id ${id} togs bort` });
    } else {
      res.status(404).send({ error: "Ingen uppgift att ta bort" });
    }
  } catch (error) {
    res.status(500).send({ error: error.stack });
  }
});

app.listen(PORT, () => console.log("Server running on http://localhost:5000"));
