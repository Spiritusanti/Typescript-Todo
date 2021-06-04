import { Fragment } from "react";
import { todos } from '../../pages/ToDoPage'

const Card: React.FC<todos> = props => {
    return (
        <Fragment>
            <div>{props.taskName}</div>
            <div>{props.taskDescription}</div>
            <div>{props.taskDate}</div>
        </Fragment>
    );
}

export default Card;