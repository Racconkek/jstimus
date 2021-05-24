import React from "react";
import {useState} from "react";

import './Task.css';
import TaskForm from "./TaskForm/TaskForm.jsx";
import TaskResults from "./TaskResults/TaskResults.jsx";

export default function Task({task}) {

    const [results, setResults ] = useState(null);
    const [isLoading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const handleResults = ({results, isLoading, error}) => {
        setLoading(isLoading);
        setResults(results);
        setError(error);
        // console.log('Task ', results, isLoading, error);
    }

    return <div className={'Content'}>
        <h1 className={'FirstTitle'}>{task.taskFullName}</h1>
        <div className={'TaskDescription RegularText Block'}>{task.description}</div>
        <TaskForm taskName={task.taskName} taskFiles={task.taskFiles} onResults={handleResults}/>
        <TaskResults results={results} isLoading={isLoading} error={error}/>
    </div>
}
