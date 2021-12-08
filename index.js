
import express from 'express';
import  bodyParser from'body-parser';
import crypto from 'crypto';
import http from 'http';
import fs from 'fs';
import path from 'path';
import m from 'mongoose';
import UserModel from './models/User.js';
const User = UserModel(m);

//body-parser – middleware для Express для работы с телом запроса;
//Node.js body parsing middleware.

//createReadStream, – функция из стандартного модуля fs.
//The function fs.createReadStream() allows you to open up a readable stream in a very simple manner
//crypto, http – стандартные модули node's

import appexp from './app.js';
const port= process.env.PORT || 5432;
console.log(path);
const app=appexp(express,bodyParser,fs,crypto,http,path,User,m);

app.listen(port, () => console.log(`Server listening on port ${port}`));
