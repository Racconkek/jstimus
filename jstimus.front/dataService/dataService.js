import axios from "axios";

let baseUrl = window.location.protocol + '\/\/' +
    window.location.hostname + ':' + '3000';
    // window.location.port;

export default class DataService {

    static get baseUrl() { return baseUrl; }

    static async sendFiles(taskName, studentName, files) {
        const data = new FormData();
        for (let file of files) {
            // console.log(file.fileId, file.codeFile)
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
            console.error(error);
            return null;
        }
    }
}
