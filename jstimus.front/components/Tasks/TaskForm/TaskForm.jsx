import React from "react";
import PropTypes from 'prop-types';
import {Button, Form} from "react-bootstrap";

import DataService from "../../../dataService/dataService.js";

import './TaskForm.css';

export default class TaskForm extends React.Component {
    static propTypes = {
        taskName: PropTypes.string.isRequired,
        taskFiles: PropTypes.arrayOf(PropTypes.shape({
            fileName: PropTypes.string.isRequired,
            fileId: PropTypes.string.isRequired
        })),
        onResults: PropTypes.func.isRequired
    };

    constructor(props) {
        super(props);
        this.state = {
            files: this.props.taskFiles.map(e => {
                return {fileName: e.fileName, fileId: e.fileId, codeFile: ''}
            }),
            studentName: ''
        }
    }

    handleNameInput = (event) => {
        const nextName = event.target.value;
        this.setState({ studentName: nextName });
    }

    handleFileInput = (event) => {
        if (event.target.files.length < 1) {
           return;
        }
        event.preventDefault();
        const reader = new FileReader();
        const file = event.target.files[0];
        const name = event.target.files[0].name;
        const inputId = event.target.id;
        const prevFiles = this.state.files;
        reader.onload = (e) => {
            const nextFiles = prevFiles.map(e =>
                e.fileId === inputId?
                    { codeFile: file, fileName: name, fileId: inputId}:
                    e
            );
            this.setState({
                files: nextFiles
            });
        };
        reader.readAsText(file);
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const hasAllFiles = this.state.files.every(e => e.codeFile !== '')
        // console.log('submit ' + hasAllFiles);
        let {studentName, files } = this.state;
        DataService.sendFiles(this.props.taskName, studentName, files)
            .then((res) => {
                this.props.onResults(res);
            })
            .catch((err) => {
                console.log(err);
                this.props.onResults(null);
            })
    }

    render() {
        const inputs = this.state.files;
        return <div className={'TaskForm'}>
            <Form onSubmit={this.handleSubmit}>
                <Form.Group>
                    <Form.Label>Имя студента</Form.Label>
                    <Form.Control type={name} onChange={this.handleNameInput}/>
                </Form.Group>
                <Form.Group>
                    {inputs.map(e => {
                        return <Form.File key={e.fileId} id={e.fileId} custom>
                            <Form.File.Input onChange={this.handleFileInput} accept={'.js'}/>
                            <Form.File.Label data-browse="Выбрать">
                                {e.fileName}
                            </Form.File.Label>
                        </Form.File>
                    })}
                </Form.Group>
                <Button variant="outline-primary" type="submit">Отправить</Button>
            </Form>
        </div>
    }
}