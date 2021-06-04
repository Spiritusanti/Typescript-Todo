import React, { Fragment } from "react";
import Card from '../Card/Card';
import { todos } from "../../pages/ToDoPage";

interface OutputProps {
    todosArray: todos[];
}

const OutputList: React.FC<OutputProps> = ({ todosArray }) => {
    return (
        <Fragment>
            {
                todosArray.map((todo: todos) => <Card key={todo.key} taskName={todo.taskName} taskDescription={todo.taskDescription} taskDate={todo.taskDate} />)
            }
        </Fragment>
    )
}

export default OutputList;