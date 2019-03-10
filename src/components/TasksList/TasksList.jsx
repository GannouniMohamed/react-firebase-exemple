import React from 'react'
import { Card } from 'semantic-ui-react'
import TaskItem from './TaskItem'

const TasksList = ({ data, isAdmin, onRemoveTasks, userUid, onRate }) => {

  return (
    <div>
      <Card.Group>
        {data &&
        data.map((item, index) => (
          <TaskItem {...item}
            index={index}
            key={index}
            isAdmin={isAdmin}
            onRemoveTasks={onRemoveTasks}
            onRate={onRate}
            userUid={userUid}
          />
        ))}
      </Card.Group>
    </div>)
};

export default TasksList
