import {Sequelize} from "sequelize";
import dotenv from 'dotenv';
import { Pool } from "pg";
dotenv.config()

export const db = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
        dialect: 'postgres',
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
        pool: {
            max: 5,
            min: 0,
            idle: 300000,
            acquire: 300000
        }
    }
)
