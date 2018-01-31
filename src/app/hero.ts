export class Hero {
  private _id: number;
  name: string;

  constructor(id: number, name: string) {
    if (id <= 0) {
      throw new Error('Id is required and should be greater than 0.');
    }

    this._id = id;
    this.name = name;
  }

  get id(): number {
    return this._id;
  }
}