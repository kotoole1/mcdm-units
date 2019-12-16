import {OverrideStyle} from '@/options/override';

export class UnitModel {
  public title: string = 'My New Unit';
  public ancestryId: string = 'HUMAN';
  public experienceId: string = 'REGULAR';
  public equipmentId: string = 'MEDIUM';
  public hasDomain: boolean = false;
  public domainId: string = 'FLYING';
  public unitTypeId: string = 'INFANTRY';

  public overrideStyle = OverrideStyle.NONE;
  public traitIds: string[] = [];
  public orderIds: string[] = [];

  public unitSizeId: string = '_1D6';

  public imageUrl: string = 'light-axemen.jpg';
  public imageScale: number = 120;
  public imageXPos: number = 50;
  public imageYPos: number = 50;

  constructor(public id: string) {}
}
