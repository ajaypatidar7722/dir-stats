# Dir Stats
A simple node.js application to list files and their attributes for a give local filesystem path.

I've kept folder structure and project setup very minimal. Also there are some key stuff missing like 
- API parameter validation (I generally use [joi](https://github.com/sideway/joi) for this)
- API Doc
- Unit tests

Below are the instructions to start the application.

## Prerequisite

- [Node.js](https://nodejs.org)
- [NPM](https://www.npmjs.com)
- [Docker](https://www.docker.com)

## Start the application

### With docker
- Clone the repo with `git clone https://github.com/ajaypatidar7722/dir-stats.git`

- Switch to directory by `cd dir-stats`

- Build docker image using `docker build .`

- Start docker container `docker run ${IMAGE_HASH}`

> Note: To start the server on a different port you can use env variable `PORT`

### Without docker

- Clone the repo with `git clone https://github.com/ajaypatidar7722/dir-stats.git`

- Switch to directory by `cd dir-stats`

- Install dependencies using `npm install | yarn`

- Start the server running `npm start | yarn start`

## Generate mock files

There is a script which can be used to generate 100000 txt files.

Use the script `npm run generateMockFiles | yarn generateMockFiles` to generate files with random name.

This will create a directory called `testDir` under `scratchpad` directory and will generate all the files with random names there. 