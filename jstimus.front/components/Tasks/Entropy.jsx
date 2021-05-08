import React from "react";

import TaskForm from "./TaskForm/TaskForm.jsx";

export default function Entropy() {
    return <div className={'Content'}>
        <TaskForm taskFiles={[
            { fileId: 'mainSolution', fileName: 'Решение'}
        ]}/>
    </div>
}
