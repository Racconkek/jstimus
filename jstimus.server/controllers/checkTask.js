const formidable = require('formidable');
const path = require("path");
const fs = require("fs/promises");

const ContainerRunnerService = require('../containerRunnerService/ContainerRunnerService.js');

module.exports = async function checkTask(req, res) {

    const form = formidable.IncomingForm({multiples: true});
    let containerPath = undefined;
    try {
        const {fields, files} = await new Promise((resolve, reject) => {
            form.parse(req, (err, fields, files) => {
                if (err) {
                    reject(err);
                    return;
                }
                resolve({fields: fields, files: files});
            });
        });

        const time = new Date().getTime();
        const containerName = `container.${fields.taskName}.${fields.studentName}.${time}`
        containerPath = path.join(path.resolve(__dirname, '..', 'containers.temp'), containerName);

        const isCreated = await createTempContainerDir(files, containerPath, fields.taskName);
        if (!isCreated) {
            return res.status(500).send({messageerror: 'Cant create container from template'});
        }
        const imageName = containerName;
        const imageTag = `${containerName}_tag`;
        console.log('start creating container');
        const runner = new ContainerRunnerService(imageName, imageTag, containerPath);
        const result = await runner.buildAndRunContainer();
        console.log('RESULT', result);
        const isDeleted = await deleteTempContainerDir(containerPath);
        const data = result.split('\n')[4];
        res.json(data);
    } catch (err) {
        console.error(err);
        if (containerPath) {
            await deleteTempContainerDir(containerPath);
        }
        return res.status(500).send({messageerror: err.errors});
    }
}

async function createTempContainerDir(files, containerPath, taskName) {
    try {
        await fs.mkdir(containerPath, { recursive: false});
        const pathToTemplates = path.join(__dirname, '..', 'containers.templates', `container.template.${taskName}`)
        const templateFiles = await fs.readdir(pathToTemplates)
        for (let name of templateFiles) {
            if (name === 'node_modules') {
                continue;
            }
            await fs.copyFile(path.join(pathToTemplates, name), path.join(containerPath, name))
        }
    } catch (err) {
        throw err;
    }
    for (let key of Object.keys(files)) {
        const fileName = key + '.js';
        const pathToSave = path.join(containerPath , fileName);
        try {
            const rawData = await fs.readFile(files[key].path);
            await fs.writeFile(pathToSave, rawData);
        } catch (err) {
            throw err;
        }
    }

    return true;
}


async function deleteTempContainerDir(pathToDelete) {
    try {
        const templateFiles = await fs.readdir(pathToDelete)
        for (let name of templateFiles) {
            await fs.unlink(path.join(pathToDelete, name))
        }
        await fs.rmdir(pathToDelete);
    } catch (err) {
        throw err;
    }

    return true;
}
