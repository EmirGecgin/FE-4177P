import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import uuid from "react-uuid";
import TaskBoard from "./components/TaskBoard";

export interface Task {
  id: string;
  title: string;
  description: string;
  status: string;
  assignee: string;
}

const taskData = [
  {
    title: "Taslak Hazırlama",
    description: "Proje için gerekli taslakları hazırla.",
    status: "To Do",
    assignee: "Emir Gecgin"
  },
  {
    title: "Kod İncelemesi",
    description: "Yeni kod değişikliklerini incele ve yorum yap.",
    status: "In Progress",
    assignee: "Ayşe Yılmaz"
  },
  {
    title: "Veri Tabanı Güncelleme",
    description: "Veri tabanındaki hatalı kayıtları düzelt.",
    status: "Done",
    assignee: "Ali Kaya"
  },
  {
    title: "Dokümantasyon Tamamlama",
    description: "Kullanıcı dokümantasyonunu tamamla.",
    status: "To Do",
    assignee: "Zeynep Çelik"
  },
  {
    title: "Tasarım Revizyonu",
    description: "Tasarım ekibinden gelen geri bildirimleri uygula.",
    status: "In Progress",
    assignee: "Mehmet Demir"
  },
  {
    title: "Sunum Hazırlığı",
    description: "Proje ilerleme sunumu için slaytları hazırla.",
    status: "Done",
    assignee: "Fatma Aksoy"
  }
];
const initialTask: Task[] = [];
taskData.forEach(task => {
  initialTask.push({ ...task, id: uuid() })
})


function App() {
  const [tasks, setTasks] = useState<Task[]>(initialTask)
  return (
    <>
      <Container>
        <h1 className="text-center my-4">Task Management App</h1>
        <TaskBoard tasks={tasks} setTasks={setTasks}>

        </TaskBoard>
      </Container>
    </>
  )
}

export default App
