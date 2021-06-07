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
            studentName: '',
            isValidName: true,
            isValidFiles: true
        }
    }

    handleNameInput = (event) => {
        const nextName = event.target.value;
        const matched = nextName.match('^[a-z]*$');
        if (matched !== null && matched.index === 0) {
            this.setState({studentName: nextName});
        }
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
        let {studentName, files } = this.state;
        const hasAllFiles = files.every(e => e.codeFile !== '');
        const matched = studentName.match('^[a-z]+$');
        if (matched === null || matched.index !== 0) {
            this.setState({ isValidName: false });
            return;
        } else {
            this.setState({isValidName: true});
        }
        if (!hasAllFiles) {
            this.setState({isValidFiles: false});
            return;
        } else {
            this.setState({isValidFiles: true});
        }
        this.props.onResults({results: null, isLoading: true, error: null});
        DataService.sendFiles(this.props.taskName, studentName, files)
            .then((res) => {
                const results = JSON.parse(res);
                this.props.onResults({results: results, isLoading: false, error: null});
            })
            .catch((err) => {
                this.props.onResults({results: null, isLoading: false, error: err.response.data});
            })
    }

    render() {
        const {files, studentName, isValidName, isValidFiles} = this.state;
        return <div className={'TaskForm Block'}>
            <Form onSubmit={this.handleSubmit}>
                <Form.Group>
                    <Form.Control
                        className={!isValidName ? 'FormInput FormInputInvalid' : 'FormInput'}
                        onChange={this.handleNameInput}
                        placeholder={'Имя студента'}
                        value={studentName}
                    />
                </Form.Group>
                <Form.Group>
                    {files.map(e => {
                        return <Form.File className={!isValidFiles ? 'FormInput FormInputInvalid' : 'FormInput'} key={e.fileId} id={e.fileId} custom>
                            <Form.File.Input className={!isValidFiles ? 'FormInput FormInputInvalid' : 'FormInput'} onChange={this.handleFileInput} accept={'.js'}/>
                            <Form.File.Label className={!isValidFiles ? 'FormInput FormInputInvalid' : 'FormInput'} data-browse="Выбрать">
                                {e.fileName}
                            </Form.File.Label>
                        </Form.File>
                    })}
                </Form.Group>
                <Button className={'FormButton'} variant="outline-primary" type="submit">Отправить</Button>
            </Form>
        </div>
    }
}
