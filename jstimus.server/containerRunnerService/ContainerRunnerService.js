const {spawn} = require('child_process');

class ContainerRunnerService {
    constructor(imageName, imageTag, imagePath) {
        this.imageName = imageName;
        this.imageTag = imageTag;
        this.imagePath = imagePath;
        this.result = '';
        this.error = '';
    }

    async buildAndRunContainer() {
        return new Promise((res, rej) => {
            const imageBuild = spawn(
                "docker",
                ["image", "build", "-t", this.imageName + ':' + this.imageTag, this.imagePath],
                { cwd: __dirname });

            imageBuild.on('error', (error) => {
                console.log(`image error: ${error.message}`);
                imageBuild.kill();
                rej(error.message);
            });

            imageBuild.stderr.on('data', (data) => {
                this.error += `${data}\n`;
            })

            imageBuild.on("close", async code => {
                console.log(`image built with code ${code}`);
                if (code !== 0) {
                    rej(this.error);
                    return;
                }
                try {
                    const run = await this.runContainer(this.imageName, this.imageTag);
                    res(this.result);
                } catch (err) {
                    rej(err);
                }
            });
        })
    }

    async runContainer(containerName, imageTag) {
        return new Promise((res, rej) => {
            const containerRun = spawn('docker', [
                'container', 'run',
                '-a', 'STDOUT',
                '--name', containerName,
                containerName + ':' + imageTag
            ], { cwd: __dirname });

            containerRun.stdout.on('data', (data) => {
                console.log(`container stdout: ${data}`);
                this.result += data + '\n';
            });

            containerRun.stderr.on('data', (data) => {
                // console.log(`container stderr: ${data}`);
                this.error += `${data}\n`;
            });

            // containerRun.on('error', (data) => {
            //     this.result += data + '\n';
            // })

            containerRun.on('close', async (code) => {
                console.log(`container closed with code ${code}`);
                try {
                    const removedContainer = await this.removeContainer(containerName);
                    const removedImage = await this.removeImage(containerName, imageTag);
                    res(true);
                } catch (err) {
                    rej(err);
                }
            });
        })
    }

    removeContainer(containerName) {
        return new Promise((res, rej) => {
            const containerRemove = spawn('docker', ['container', 'rm', containerName], { cwd: __dirname });
            containerRemove.stdout.on('data', (data) => {
                console.log(`container remove stdout: ${data}`);
            });

            containerRemove.on('close', (code) => {
                console.log(`container removed with code ${code}`);
                if (code !== 0) rej(code);
                res(true);
            });
        });
    }

    removeImage(imageName, imageTag) {
        return new Promise((res, rej) => {
            const imageRemove = spawn('docker', ['image', 'rm', imageName + ':' + imageTag], { cwd: __dirname });
            imageRemove.stdout.on('data', (data) => {
                console.log(`image remove stdout: ${data}`);
            });

            imageRemove.on('close', (code) => {
                console.log(`image removed with code ${code}`);
                if (code !== 0) rej(code);
                if(code === 0) res(true);
            });
        });
    }
}

module.exports = ContainerRunnerService;
