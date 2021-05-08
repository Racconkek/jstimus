import React from "react";
import {useState} from "react";

import TaskForm from "./TaskForm/TaskForm.jsx";
import TaskResults from "./TaskResults/TaskResults.jsx";

export default function RLE() {

    const [ results, setResults ] = useState(null);

    const handleResults = (results) => {
        setResults(results.data);
        console.log(results.data);
    }

    return <div className={'Content'}>
        <TaskForm taskName={'rle'} taskFiles={[
            { fileId: 'mainSolution', fileName: 'Решение'}
        ]} onResults={handleResults}/>
        {results ? <TaskResults results={results}/> : <div>Нет результатов</div>}
    </div>
}
