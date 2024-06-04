import { Column, DeleteDateColumn, Entity, ManyToOne } from 'typeorm';
import { Breed } from 'src/breeds/entities/breed.entity';
@Entity()
export class Cat {
  @Column({ primary: true, generated: true })
  id: number;

  @Column()
  name: string;

  @Column()
  age: number;

  @ManyToOne(() => Breed, (breed) => breed.id, { eager: true })
  breed: Breed;

  @DeleteDateColumn()
  deletedAt: Date;
}
