# thebibleapp

##Deploy URL's
Frontend: https://thebiblefront.herokuapp.com <br>
Backend: https://thebibleapp.herokuapp.com/api

##GitHub URL's
Frontend: https://github.com/miarevalo10/thebiblefront <br>
Backend: https://github.com/jgmurillo10/thebibleapp

[![NPM Version][npm-image]][npm-url]

## Synopsis

This project is an web application designed for storage academic data organized by program and course at Universidad de los Andes

## Motivation

The main motivation of this web app is to centralize files from diferent program and courses.

## Installation

Windows:

```sh
git clone https://github.com/jgmurillo10/thebibleapp
cd thebibleapp
npm install
npm start
cd ../
git clone http://github.com/miarevalo10/thebiblefront
cd thebiblefront
npm install
npm start
```
runs at port 8080



## Tools
<br>
JavaScript<br>
NodeJS <br>
Express<br>
Amazon S3<br>
MongoDB<br>

## npm Packages
<br>
aws-sdk<br>
body-parser<br>
cookie-parser<br>
debug<br>
express<br>
mongodb<br>
mongoose<br>
morgan<br>
nodemon<br>


## MongoDB Reference

### Programs' collection
```json
[
   {
    "_id" : ObjectId("58b26301f36d281facb55fd6"),
    "description" : "description",
    "url" : "http://sistemas.uniandes.edu.co",
    "name" : "Ingeniería de Sistemas y Computación"
}
]
```
### Courses' collection
```json
[
  {
    "_id" : ObjectId("58bb8170af26e205d10464e4"),
    "name" : "Algoritmica y Programacion Orientada a Objetos I",
    "code" : "ISIS1207",
    "description" : "nfaisofaso",
    "url" : "https://uniandes.edu.co",
    "program_id" : ObjectId("58b26301f36d281facb55fd6")
}
]
```
### Files' collection
```json
[
{
    "_id" : ObjectId("58bca72254b30c2f1c7919f0"),
    "size" : "0.146759765625 MB",
    "course_id" : ObjectId("58bb8170af26e205d10464e4"),
    "name" : "GuiaDeTrabajo_n2_2014-2_honores.pdf",
    "drive_url" : "https://thebibleapp.s3.amazonaws.com/GuiaDeTrabajo_n2_2014-2_honores.pdf",
    "__v" : 0
}
]
```
### Resources' collection
```json
[
  {
    "_id" : ObjectId("58bb85d2af26e205d10464ee"),
    "course_id" : ObjectId("58bb8170af26e205d10464e4"),
    "name" : "Tutorial Java",
    "url" : "https://www.youtube.com/watch?v=coK4jM5wvko&list=PLU8oAlHdN5BktAXdEVCLUYzvDyqRQJ2lk",
    "description" : "Curso Java desde cero por el canal pildorasinformaticas"
}
]
```

## API Reference



##Programs

|HTTP Method   |  URI |  description |
|---|---|---|
| GET | /api/programs  | Get all the programs  |
| POST | /api/programs  | Post a program  |
| GET | /api/programs/:program_id | Get specific program by id  |
| DELETE | /api/programs/:program_id | Delete specific program by id  |


##Courses

|HTTP Method   |  URI |  description |
|---|---|---|
| GET | /api/programs/:program_id/courses  |  Get all the courses by program |
| POST | /api/programs/:program_id/courses  |  Post course by program |
| GET |  /api/programs/:program_id/courses/:course_id  | Get an specific course by ID  |
| DELETE |  /api/programs/:program_id/courses/:course_id  | Delete an specific course by ID  |

##Files

|HTTP Method   |  URI |  description |
|---|---|---|
| GET |/api/programs/:program_id/courses/:course_id/files  |  Get all the files |
| POST  |/api/upload    |  Add an specific file |

##Resources


|HTTP Method   |  URI |  description |
|---|---|---|
| GET |/api/programs/:program_id/courses/:course_id/resources/  |  Get all the resources |
| POST |/api/programs/:program_id/courses/:course_id/resources/    | Get an specific resource  |

## Meta

Juan Guillermo Murillo – [@juangmurillo2](https://twitter.com/juangmurillo2) – jg.murillo10@uniandes.edu.co <br>
Maria Isabel Arevalo – [@miarevalo10](https://twitter.com/miarevalo10) – mi.arevalo10@uniandes.edu.co

Distributed under the MIT license. See ``LICENSE`` for more information.

[https://github.com/jgmurillo10/thebibleapp](https://github.com/jgmurillo10/)

[npm-image]: https://img.shields.io/npm/v/datadog-metrics.svg?style=flat-square
[npm-url]: https://npmjs.org/package/datadog-metrics
[npm-downloads]: https://img.shields.io/npm/dm/datadog-metrics.svg?style=flat-square
