// TODO: spells

export class ItemModel {
  public title: string = 'My New Unit';

  public imageUrl: string = 'https://i.pinimg.com/474x/e7/c6/05/e7c605dbff10da18b55694dbe1748596--the-wake-anglo-saxon.jpg';
  public imageScale: number = 120;
  public imageXPos: number = 50;
  public imageYPos: number = 50;

  constructor(public id: string,
              public owningArmyId: string) {}
}
