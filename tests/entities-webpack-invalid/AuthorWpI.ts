import { Collection, Entity, OneToMany, Property, PrimaryKey } from '../../lib';
import { BookWpI } from '.';

@Entity()
export class AuthorWpI {

  @PrimaryKey()
  id!: number;

  @Property()
  name!: string;

  @Property()
  email!: string;

  @Property()
  age?: number;

  @OneToMany({ mappedBy: 'author' })
  books = new Collection<BookWpI>(this);

}
