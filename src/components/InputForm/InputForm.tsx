import React, { FormEvent, Fragment, useRef } from "react";
import Button from "../Button/Button";
import { todos } from '../../pages/ToDoPage';

interface InputFormProps {
    todosHandler: (todosData: todos) => void;
}

const InputForm: React.FunctionComponent<InputFormProps> = ({ todosHandler }) => {
    const taskNameRef = useRef<HTMLInputElement>(null)
    const taskDescriptionRef = useRef<HTMLInputElement>(null)
    const taskDateRef =  useRef<HTMLInputElement>(null)

    const generateID = () => {
        return (
            `omega${Math.random()}`
        )
    }

    const submitHandler = (event: FormEvent) => {
        event.preventDefault();
        const todosData: todos = {
            key: generateID(),
            taskName: taskNameRef.current!.value,
            taskDescription: taskDescriptionRef.current!.value,
            taskDate: taskDateRef.current!.value
        };
        todosHandler(todosData);
        taskNameRef.current!.value = '';
        taskDescriptionRef.current!.value = '';
        taskDateRef.current!.value = '';
    }


    return (
        <Fragment>
            <form onSubmit={submitHandler}>
                <div>
                    <title>Task Name</title>
                    <input type="text" ref={taskNameRef}></input>
                    <title>Task Description</title>
                    <input type="textarea" ref={taskDescriptionRef} ></input>
                    <title>Deadline</title>
                    <input type="date" ref={taskDateRef}></input>
                </div>
                <Button text={'Submit'}/>
            </form>
        </Fragment>
    )
}

export default InputForm;