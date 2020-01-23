import {OverrideStyle} from '@/options/override';

export class UnitModel {
  public title: string = 'My New Unit';
  public ancestryId: string = 'HUMAN';
  public experienceId: string = 'REGULAR';
  public equipmentId: string = 'MEDIUM';
  public hasDomain: boolean = false;
  public domainId: string = 'FLYING';
  public unitTypeId: string = 'INFANTRY';

  public overrideStyle = OverrideStyle.NONE; // TODOK

  public traitIds: string[] = [];
  public orderIds: string[] = [];

  public unitSizeId: string = '_1D6';

  public imageUrl: string = 'https://i.pinimg.com/474x/e7/c6/05/e7c605dbff10da18b55694dbe1748596--the-wake-anglo-saxon.jpg';
  public imageScale: number = 120;
  public imageXPos: number = 50;
  public imageYPos: number = 50;

  public hideCost: boolean = false; // `true` overrides global setting to show cost
  public hasAttitude: boolean = false;
  public attitudeId: string = 'ALLIED';

  constructor(public id: string,
              public owningArmyId: string) {}
}
