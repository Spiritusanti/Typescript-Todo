import { todos } from '../../pages/ToDoPage'
import './Card.css'

const Card: React.FC<todos> = props => {
    return (
        <div className="card__content">
            <h1>task: {props.taskName}</h1>
            <div className="card__content-sub">
                <div className="notes">
                    <h3>Notes</h3>
                    <p>{props.taskDescription}</p>
                </div>
                <div className="date">
                    <h3>Deadline</h3>
                    <span>{props.taskDate}</span>
                </div>
            </div>
        </div>
    );
}

export default Card;