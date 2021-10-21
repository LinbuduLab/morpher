import { PrimaryGeneratedColumn, Column, BaseEntity, Entity } from "typeorm";

export interface IUser {
    id: number;
    name: string;
}

@Entity()
export default class User extends BaseEntity implements IUser {
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    name: string;
}
