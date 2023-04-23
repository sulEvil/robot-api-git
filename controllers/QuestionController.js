import {Question} from "../models/model.js";
import fs from 'fs';

// ./data/questions.txt
// console.log(fileContent); // содержимое файла

export class QuestionController {
    async create(req, res) {
        const {title} = req.query
        const {options} = req.query
        fs.readFile('./data/questions.txt', 'utf8', function(error, fileContent){
            if(error) throw error; // ошибка чтения файла, если есть
            let toWrite = fileContent + `${title}; ${options} \n `;
            fs.writeFile('./data/questions.txt', toWrite, function(error){
                if(error) throw error; // ошибка чтения файла, если есть
                console.log('Данные успешно записаны записать файл');
            });
        });
        return res.json(req.query)
    }
    async getAll(req, res) {
        let fileContent = fs.readFileSync('./data/questions.txt', 'utf8');
        return res.json(fileContent)
    }
}


