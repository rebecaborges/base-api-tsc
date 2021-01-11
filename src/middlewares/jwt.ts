import jwt from 'jsonwebtoken'
import { NextFunction, Request, Response } from 'express'

const tokenValidation = async(req:Request, res:Response, next:NextFunction):Promise<Response> => {
  try {
    const token = req.headers.authorization

    if (token !== undefined && token !== null) {
      const token = req.headers.authorization.split(' ')[1]

      jwt.verify(token, 'secret', (err) => {

        if (err) {
          err = {
            name: 'JsonWebTokenError',
            message: 'invalid token' || 'jwt malformed',
            inner: err
          }
          return res.status(401).json({ message: 'Invalid Token'})
        }
      })
    } else {
      return res.status(401).json({ message: 'Unauthorized'})
    }

    next()

  } catch (error) {
    console.log('ERROR JWT', error)
    return res.status(500).json('Internal Server Error')
  }
}

export default tokenValidation
