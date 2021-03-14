import { Request, Response } from 'express'
import * as UserRepository from '../repositories/user'


const ping = ((req:Request, res:Response):void => {
  res.status(200).send('pong')
})

const userLogin = async (req:Request, res:Response):Promise<Response> => {
  try {
    const login = await UserRepository.GET_ONE_LOGIN(req)

    if (login) {

      const token = await UserRepository.LOGIN(login)

      return res.status(200).json({ token: token })
    } 
    return res.status(404).json({ message: 'User not found' })
  } catch (error) {
    console.log('ERROR', error)

    return res.status(500).json({ message: 'Internal Server Error' })
  }
}

const findAllUsers = async (req:Request, res:Response):Promise<Response> => {
  try {
    const getAll = await UserRepository.GETALL()

    return res.json(getAll)

  } catch (error) {
    return res.status(500).json({ message: 'Internal Server Error' })
  }
}

const createUser = async (req:Request, res:Response):Promise<Response> => {
  try {
    await UserRepository.CREATE(req)

    return res.status(201).json({message: `User ${req.body.name} created!`})

  } catch (error) {
    return res.status(500).json({ message: 'Internal Server Error' })
  }
}

const updateUser = async (req:Request, res:Response):Promise<Response> => {
  try {

    const user = {
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
      phone: req.body.phone,
      isActive: req.body.isActive
    }

    const update = await UserRepository.UPDATE(req.params.id, user)

    return res.json(update)

  } catch (error) {
    return res.status(500).json({ message: 'Internal Server Error' })
  }
}

const deleteUser = async (req:Request, res:Response):Promise<Response> => {
  try {
    await UserRepository.DELETE({_id: req.params.id})

    return res.status(200).json({ message: `User ${req.params.id} was deleted!` })

  } catch (error) {
    return res.status(500).json({ message: 'Internal Server Error' })
  }
}

export {
  ping,
  userLogin,
  createUser,
  findAllUsers,
  updateUser,
  deleteUser
}
