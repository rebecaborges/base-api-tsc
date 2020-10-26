import {Column, Entity, ObjectID, ObjectIdColumn} from 'typeorm'

@Entity()
export class User {

  @ObjectIdColumn()
  id: ObjectID

  @Column('text')
  name: string

  @Column()
  email: string

  @Column("int")
  phone: number

  @Column()
  isActive: boolean
}
