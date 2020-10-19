import 'reflect-metadata'
import { createConnection } from 'typeorm'
import { User } from './entity/User'

createConnection().then(async connection => {
  let user = new User()
  user.name = 'thom yorke'
  user.email = 'ok.computer@radiohead.com'
  user.phone = 11999999999
  user.isActive = true

  await connection.manager.save(user)
  console.log('create user', user.id)
}).catch(error => console.log(error))
