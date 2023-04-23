export class AnswerController {
    async create(req, res) {

    }
    async getAll(req, res) {
        const {id} = req.query
        if(id){
            res.json(id)

        } else {
            res.json('test')
        }

    }
}

