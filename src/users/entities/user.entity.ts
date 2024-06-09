import { Column, DeleteDateColumn, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true, nullable: false })
  username: string;
  
  @Column()
  name: string;

  @Column({ unique: true, nullable: false })
  email: string;

  @Column()
  password: string;

  @Column()
  phone: number;

  @Column()
  birthday: Date;

  @Column()
  gender: string;

  //Status = Activo, En Espera, Inactivo
  @Column({default: 'En espera'})
  status: string;

  @Column()
  country: string;

  @Column()
  code_phone: string;

  @Column({default: 'weaver'})
  role: string;
  // @Column()
  // confirm_code: string;

  //   photo_user_id: number;
  @DeleteDateColumn()
  deletedAt: Date;
}
