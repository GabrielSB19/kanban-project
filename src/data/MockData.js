import { v4 as uuidv4 } from "uuid";
const MockData = [
  {
    id: uuidv4(),
    title: "Por hacer",
    task: [
      {
        id: uuidv4(),
        title: "Tarea 1",
      },
      {
        id: uuidv4(),
        title: "Tarea 2",
      },
      {
        id: uuidv4(),
        title: "Tarea 3",
      },
    ],
  },
  {
    id: uuidv4(),
    title: "Progreso",
    task: [
      {
        id: uuidv4(),
        title: "Tarea 1",
      },
      {
        id: uuidv4(),
        title: "Tarea 2",
      },
      {
        id: uuidv4(),
        title: "Tarea 3",
      },
    ],
  },
  {
    id: uuidv4(),
    title: "Terminadas",
    task: [
      {
        id: uuidv4(),
        title: "Tarea 1",
      },
      {
        id: uuidv4(),
        title: "Tarea 2",
      },
      {
        id: uuidv4(),
        title: "Tarea 3",
      },
    ],
  },
];

export default MockData;
