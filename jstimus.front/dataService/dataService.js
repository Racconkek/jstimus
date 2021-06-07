import axios from "axios";
import response_success from '../mocks/response_success.js';
import response_fail from "../mocks/response_fail.js";
import response_fail_name from "../mocks/response_fail_name.js";
import response_some_fail_some_success from '../mocks/response_some_fail_some_success.js';

let port = process.env.NODE_ENV === 'production' ? '80' : '3000';
let baseUrl = window.location.protocol + '\/\/' +
    window.location.hostname + ':' + port ;

export default class DataService {

    static get baseUrl() { return baseUrl; }

    static async sendFiles(taskName, studentName, files) {
        const data = new FormData();
        for (let file of files) {
            data.append(file.fileId, file.codeFile);
        }
        data.append('studentName', studentName);
        data.append('taskName', taskName);
        try {
            let res = await axios.post(
                baseUrl + `/checkTask/${taskName}`,
                data,
                {
                    headers: { 'Content-Type': 'multipart/form-data' }
                }
            );
            return res.data;
        } catch (error) {
            throw error;
        }
    }

    static async getTaskConfigs() {
        try {
            let res = await axios.get(baseUrl + '/configs');
            return res.data;
        } catch (error) {
            console.error(error);
            return null;
        }
    }

    static async sendFilesMockSuccess(taskName, studentName, files) {
        return new Promise(resolve =>
            setTimeout(() => resolve(JSON.stringify(response_success)), 1000))
    }

    static async sendFilesMockFail(taskName, studentName, files) {
        return new Promise(resolve =>
            setTimeout(() => resolve(JSON.stringify(response_fail)), 1000))
    }

    static async sendFilesMockFailName(taskName, studentName, files) {
        return new Promise(resolve =>
            setTimeout(() => resolve(JSON.stringify(response_fail_name)), 1000))
    }

    static async sendFilesMockSomeFailSomeSuccess(taskName, studentName, files) {
        return new Promise(resolve =>
            setTimeout(() => resolve(JSON.stringify(response_some_fail_some_success)), 1000))
    }
}
