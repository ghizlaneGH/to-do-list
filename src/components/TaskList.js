import React from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import TaskItem from "./TaskItem";
import "./TaskList.css";

function TaskList({ tasks, toggleComplete, deleteTask }) {
  // Création d'un objet de références pour chaque tâche
  const nodeRefs = React.useRef({});

  return (
    <TransitionGroup>
      {tasks.map((task) => {
        // Initialisation d'une référence pour chaque tâche
        if (!nodeRefs.current[task.id]) {
          nodeRefs.current[task.id] = React.createRef();
        }

        return (
          <CSSTransition
            key={task.id}
            nodeRef={nodeRefs.current[task.id]}
            timeout={300}
            classNames="task"
          >
            <div ref={nodeRefs.current[task.id]}>
              <TaskItem
                task={task}
                toggleComplete={toggleComplete}
                deleteTask={deleteTask}
              />
            </div>
          </CSSTransition>
        );
      })}
    </TransitionGroup>
  );
}

export default TaskList;
