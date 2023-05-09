import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'
dotenv.config()
export function authMiddleware (req, res, next) {
   if (req.method === 'OPTIONS'){
      next()
   } 
   try {
      const token = req.headers.authorization.split(' ')[1]
      if(!token){
         return  res.status(401).json({message:"No authorization"})
      }
      const decoded = jwt.verify(token, process.env.SECRET_KEY)
      req.user = decoded
      next()
   } catch (error) {
      res.status(401).json({message:"No authorization"})
   }
}