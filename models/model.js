import {db} from "../db.js";
import {DataTypes} from "sequelize";
export const test = 'test'
export const User = db.define('user', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    number: {type: DataTypes.STRING, unique: true},
    password: {type: DataTypes.STRING},
    role: {type: DataTypes.STRING, defaultValue: "USER"},
    name: {type: DataTypes.STRING},

})
export const Robot = db.define('robot', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING},
    desc: {type: DataTypes.STRING},
    deviceId: {type: DataTypes.STRING, unique: true},
    logo: {type: DataTypes.STRING},
    color: {type: DataTypes.STRING}
})
export const Review = db.define('review', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    question: {type: DataTypes.STRING},
    answer: {type: DataTypes.STRING},
    robotName: {type: DataTypes.STRING}
})
export const Question = db.define('question', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    text: {type: DataTypes.STRING},
})
export const Answer = db.define('answer', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    text: {type: DataTypes.STRING},
})

User.hasMany(Robot)
Robot.belongsTo(User)

Robot.hasMany(Review)
Review.belongsTo(Robot)

User.hasMany(Review)
Review.belongsTo(User)

Robot.hasMany(Question)
Question.belongsTo(Robot)

Question.hasMany(Answer)
Answer.belongsTo(Question)

