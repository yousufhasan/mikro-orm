import { BeforeCreate, Collection, PrimaryKey, Property } from '../../lib';
import { MetadataStorage } from '../../lib/metadata';
import { ReferenceType } from '../../lib/entity';

export abstract class BaseEntity2 {

  @PrimaryKey()
  id!: number;

  @Property({ persist: false })
  hookTest: boolean = false;

  protected constructor() {
    const meta = MetadataStorage.getMetadata(this.constructor.name);
    const props = meta.properties;

    Object.keys(props).forEach(prop => {
      if ([ReferenceType.ONE_TO_MANY, ReferenceType.MANY_TO_MANY].includes(props[prop].reference)) {
        (this as any)[prop] = new Collection(this);
      }
    });
  }

  @BeforeCreate()
  baseBeforeCreate() {
    this.hookTest = true;
  }

}
