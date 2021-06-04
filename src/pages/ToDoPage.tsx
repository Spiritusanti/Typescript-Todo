import InputForm from "../components/InputForm/InputForm";
import { Fragment, useState } from 'react';
import OutputList from "../components/TodoOutput/OutputList";

export interface todos {
    key: string
    taskName: string;
    taskDescription: string;
    taskDate: string;
}



const ToDoPage: React.FunctionComponent = () => {
    const [todos, setTodos] = useState<todos[]>([]);

    const setTodosHandler = (todosData: todos) => {
        setTodos((prevState: todos[]) => {
            return [...prevState, todosData]
        })
    }

    return (
        <Fragment>
        <InputForm todosHandler={setTodosHandler} />
        <OutputList todosArray={todos} />
        </Fragment>
    );
}
export default ToDoPage;