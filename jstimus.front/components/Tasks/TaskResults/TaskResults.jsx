import React from "react";
import PropTypes from 'prop-types';

import './TaskResults.css';
import TaskResultItem from "./TaskResultItem.jsx";

export default class TaskResults extends React.Component {
    static propTypes = {
        results: PropTypes.object,
        isLoading: PropTypes.bool,
        error: PropTypes.string
    };

    render() {
        console.log(this.props.error);
        const { results, isLoading, error } = this.props;
        const testResults = results ? results.testResults[0] : null;
        return <div className={'Block'}>
            {error ? <span className={'Failed'}>{error}</span> : isLoading ? <span className={'FirstTitle'}>Загрузка результатов</span>  : !results ?
                <span className={'FirstTitle'}>Нет результатов</span> :
                <div>
                    <span className={'FirstTitle'}>Результаты:</span>
                    <div className={'TaskResultsForm'}>
                        <span className={'SecondTitle TaskResultsItem'}>Успех: <span className={results.success ? 'Passed' : 'Failed'}>{`${results.success}`}</span></span>
                        {!results.success && testResults.assertionResults.length === 0 && <div>
                            <span className={'SecondTitle TaskResultsItem'}>Сообщение об ошибке</span>
                            <div className={'TaskResultsItem'}>{testResults.message}</div>
                        </div>}
                        <span className={'SecondTitle TaskResultsItem'}>{`Время выполнения: ${testResults.endTime - testResults.startTime} ms`}</span>
                        {testResults.assertionResults.length !== 0 &&<div>
                            <span className={'SecondTitle TaskResultsItem'}>Тесты:</span>
                            <div className={'Assertions'}>
                                <span className={'ThirdTitle'}>Заголовок</span>
                                <span className={'ThirdTitle'}>Описание</span>
                                <span className={'ThirdTitle'}>Статус</span>
                                {!results.success && <span className={'ThirdTitle'}>Сообщение об ошибке</span>}
                            </div>
                            {testResults.assertionResults.map((item, index) => {
                                return <TaskResultItem key={item.fullName} item={item} status={results.success}/>
                            })}
                        </div>}
                    </div>
                </div>}
        </div>
    }
}
