import React from "react";
import {useState} from "react";

import TaskForm from "./TaskForm/TaskForm.jsx";
import TaskResults from "./TaskResults/TaskResults.jsx";

export default function RLE() {

    const [results, setResults ] = useState(null);
    const [isLoading, setLoading] = useState(false);

    const handleResults = ({results, isLoading}) => {
        setLoading(isLoading);
        setResults(results);
        console.log(results, isLoading);
    }

    return <div className={'Content'}>
        <h1 className={'FirstTitle'}>RLE</h1>
        <TaskForm taskName={'rle'} taskFiles={[
            { fileId: 'mainSolution', fileName: 'Файл с решением'}
        ]} onResults={handleResults}/>
        <TaskResults results={results} isLoading={isLoading}/>
    </div>
}
