import React from 'react'
import { Task } from '../types/task'
import { Draggable } from '@hello-pangea/dnd'
import { Card, CardBody } from 'react-bootstrap'
interface TaskCardProps {
    task: Task,
    index: number
}
function TaskCard({ task, index }: TaskCardProps) {
    return (
        <Draggable draggableId={task.id} index={index}>
            {(provided, snapshot) => (
                <Card ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    style={{
                        ...provided.draggableProps.style,
                        boxShadow: snapshot.isDragging ? "0 0 .4rem #666" : "none"
                    }}>
                    <CardBody>
                        <Card.Title>{task.title}</Card.Title>
                        <Card.Text>{task.description}</Card.Text>
                        <Card.Subtitle>Atanan: {task.assignee}</Card.Subtitle>
                    </CardBody>
                </Card>
            )}
        </Draggable>
    )
}
export default TaskCard