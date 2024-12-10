import React from 'react'
import { Task } from '../types/task'
import { Droppable } from '@hello-pangea/dnd'
import { Col } from 'react-bootstrap'
import TaskCard from './TaskCard'
interface TaskColoumnProps {
    tasks: Task[],
    status: string
}
function TaskColoumn({ tasks, status }: TaskColoumnProps) {
    return (
        <Col>
            <h4 className='text-center'>{status}</h4>
            <Droppable droppableId={status}>
                {(provided, snapshot) => (
                    <div ref={provided.innerRef} {...provided.droppableProps}
                        style={{ minHeight: "500px", padding: "8px", background: snapshot.isDraggingOver ? "#e9ecef" : "#f8f9fa" }}>
                        {tasks.map((task, index) => (
                            <TaskCard key={task.id} task={task} index={index}></TaskCard>
                        ))}
                        {provided.placeholder}
                    </div>
                )}
            </Droppable>
        </Col>
    )
}

export default TaskColoumn