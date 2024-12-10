import React from 'react'
import { Task } from '../App'
import { Container, Row } from 'react-bootstrap'
import { DragDropContext, DropResult } from '@hello-pangea/dnd'
import TaskColoumn from './TaskColoumn'
interface TaskBoardProps {
    tasks: Task[],
    setTasks: React.Dispatch<React.SetStateAction<Task[]>>
}
function TaskBoard({ tasks, setTasks }: TaskBoardProps) {
    const statues: Task["status"][] = ["To Do", "In Progress", "Done"]
    const onDragEnd = (result: DropResult) => {
        const { destination, source, draggableId } = result;
        if (!destination) return;
        if (destination.droppableId === source.droppableId && destination.index === source.index) return;
        const draggedTask = tasks.find(task => task.id === draggableId);
        const updatedTask: Task = {
            ...draggedTask,
            status: destination.droppableId as Task["status"],
        }
        const newTaskList = tasks.filter(task => task.id !== draggableId)
        const destinationTasks = newTaskList.filter(task => task.status === destination.droppableId)
        let insert = 0;
        if (destination.index === 0) {
            const firstTaskInDestination = newTaskList.find(task => task.status === destination.droppableId);
            if (firstTaskInDestination) {
                insert = newTaskList.indexOf(firstTaskInDestination)
            } else {
                insert = newTaskList.length;
            }
        } else {
            const previousTaskInDestination = destinationTasks[destination.index - 1]
            if (previousTaskInDestination) {
                insert = newTaskList.indexOf(previousTaskInDestination) + 1
            } else {
                insert = newTaskList.length
            }
        }
        newTaskList.splice(insert, 0, updatedTask);
        setTasks(newTaskList)
    }
    return (
        <DragDropContext onDragEnd={onDragEnd}>
            <Container>
                <Row>
                    {statues.map(status => (
                        <TaskColoumn key={status} status={status} tasks={tasks.filter(task => task.status === status)}>
                        </TaskColoumn>
                    ))}
                </Row>
            </Container>
        </DragDropContext>

    )
}

export default TaskBoard