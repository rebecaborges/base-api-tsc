import { Request, Response } from 'express'
import modelUser from '../model/index'

class UserData {
  name: string;
  email: string;
  phone: number;
  isActive: boolean;
  password: string;
  
  constructor (name: string, email: string, phone: number, isActive: boolean, password: string) {
    this.name = name
    this.email = email
    this.phone = phone
    this.isActive = isActive
    this.password = password
  }
}

const userLogin = (async (req: Request, res: Response):Promise<Response> => {
  try {
    const email = await modelUser.find()
    const password = await modelUser.find()

    if (email && password) {
      return res.status(200).json({ message: 'successfully logged in!!' })
    }
    console.log(email, password)
  } catch (error) {
    return res.status(500).json('Internal Server Error')
  }
})

const findAllUsers = (async(req: Request, res: Response):Promise<Response> => {
  try {
    const getAll = await modelUser.find()

    return res.json(getAll)
  }
  catch (error) {
    return res.status(500).json('Internal Server Error')
  }
})

const createUser = (async(req: Request, res: Response):Promise<Response> => {
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

    return res.json(saveUser)
  }
  catch (error) {
    return res.status(500).json('Internal Server Error')
  }
})

const updateUser = (async(req: Request, res: Response):Promise<Response> => {
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
  }
  catch (error) {
    return res.status(500).json('Internal Server Error')
  }
})

const deleteUser = (async(req: Request, res: Response):Promise<Response> => {
  try {
    const deleteUser = await modelUser.findOneAndRemove({_id: req.params.id})

    deleteUser.save()

    return res.json(`User ${req.params.id} was deleted!`)
  }
  catch (error) {
    return res.status(500).json('Internal Server Error')
  }
})

export {
  userLogin,
  createUser,
  findAllUsers,
  updateUser,
  deleteUser
}
