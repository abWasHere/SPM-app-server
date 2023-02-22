# Spm 'Sport pour meufs' app

## Description
This app was created during our Ironhack web dev training.


It was designed for women who wants to join a sport team and for clubs who want to promote their teams and events around women sport.


## Setup

This app has 2 repositories : [Api](https://github.com/abwashere/SPM-app-server),
[Front](https://github.com/abwashere/SPM-app-client).


```bash
git clone https://github.com/abwashere/SPM-app-server.git
```

Use npm to install packages.
```bash
cd SPM-app-server
npm install
```

#### Configure backend environmental variables

1) Create a **`.env`** file in repo's root folder

2) Set those variables:

PORT="your-server-port"

FRONTEND_URL="http://localhost:3000"

SESSION_SECRET="any-random-string"

*To be able to upload images on the Cloudinary platform:*

CLOUDINARY_NAME="your-cloudinary-name"

CLOUDINARY_KEY="your-cloudinary-key"

CLOUDINARY_SECRET="your-cloudinary-secret-string"

*Finally, to connect to the Spm database:*

MONGODB_URI="mongodb+srv://<your-username>:<your-password>@spmcluster0.pyxkf.mongodb.net/spmDB?retryWrites=true&w=majority"

## Available Scripts - server side

In the project directory, you can run:

#### `npm run seeds`

Generates fake data and saves them in the database.
This command has to be run at least one time before making any request.

#### `npm run dev`

Starts the development server.