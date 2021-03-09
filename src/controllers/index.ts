import { Request, Response } from 'express'
import modelUser from '../model/index'
import jwt from 'jsonwebtoken'

class UserData {
  name: string;
  email: string;
  phone: number;
  isActive: boolean;
  password: string;
  
  constructor (name:string, email:string, phone:number, isActive:boolean, password:string) {
    this.name = name
    this.email = email
    this.phone = phone
    this.isActive = isActive
    this.password = password
  }
}

const ping = ((req:Request, res:Response):void => {
  res.status(200).send('pong')
})

const userLogin = (async (req:Request, res:Response):Promise<Response> => {
  try {
    const login = await modelUser.findOne({email: req.body.email, password: req.body.password})

    if (login !== null) {
      try {
        const token = jwt.sign({login}, 'secret')

        return res.status(200).json({ token: token })

      } catch (error) {
        return res.status(401).json({ message: 'Unable to sign in', error })
      }
    }

    return res.status(404).json({ message: 'User not found!' })

  } catch (error) {
    return res.status(500).json({ message: 'Internal Server Error' })
  }
})

const findAllUsers = (async(req:Request, res:Response):Promise<Response> => {
  try {
    const getAll = await modelUser.find()

    return res.json(getAll)

  } catch (error) {
    return res.status(500).json({ message: 'Internal Server Error' })
  }
})

const createUser = (async(req:Request, res:Response):Promise<Response> => {
  try {
    const user = new UserData(
      req.body.name,
      req.body.email,
      req.body.phone,
      req.body.isActive,
      req.body.password
    )

    const saveUser = await modelUser.create(user)
    saveUser.save()

    return res.status(201).json({message: `User ${user.name} created!`})

  } catch (error) {
    return res.status(500).json({ message: 'Internal Server Error' })
  }
})

const updateUser = (async(req:Request, res:Response):Promise<Response> => {
  try {

    const user = new UserData(
      req.body.name,
      req.body.email,
      req.body.phone,
      req.body.isActive,
      req.body.password
    )

    const update = await modelUser.findByIdAndUpdate(req.params.id, user)
    update.save()

    return res.json(update)

  } catch (error) {
    return res.status(500).json({ message: 'Internal Server Error' })
  }
})

const deleteUser = (async(req:Request, res:Response):Promise<Response> => {
  try {
    const deleteUser = await modelUser.findOneAndRemove({_id: req.params.id})

    deleteUser.save()

    return res.status(200).json({ message: `User ${req.params.id} was deleted!` })

  } catch (error) {
    return res.status(500).json({ message: 'Internal Server Error' })
  }
})

export {
  ping,
  userLogin,
  createUser,
  findAllUsers,
  updateUser,
  deleteUser
}
