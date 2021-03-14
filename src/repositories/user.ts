import { Request, Response } from 'express'
import jwt from 'jsonwebtoken'
import userModel from '../models/user'

const ping = ((req:Request, res:Response):void => {
  res.status(200).send('pong')
})

const LOGIN = async (data) => {

  const token = jwt.sign({data}, 'secret')

  return token
}

const GETALL = async () => await userModel.find()

const GET_ONE_LOGIN = async (data) => {

  const user = {
    email: data.body.email,
    password: data.body.password,
  }

  const findUser = await userModel.findOne(user)

  return findUser
}

const CREATE = async (data: any) => {

  const user = new userModel({
    name: data.body.name,
    email: data.body.email,
    password: data.body.password,
    phone: data.body.phone,
    isActive: data.body.isActive
  })

  const saveUser = await userModel.create(user)
  saveUser.save()

  return saveUser
}

const UPDATE = async (id, data) => {

  const update = await userModel.findByIdAndUpdate(id, data)
  update.save()

  return update
}

const DELETE = async (id) =>  await userModel.findOneAndDelete({_id: id})


export {
  ping,
  LOGIN,
  CREATE,
  GETALL,
  GET_ONE_LOGIN,
  UPDATE,
  DELETE
}
