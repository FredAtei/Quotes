export class Quote {
  public showDescription: boolean;
  datePosted: string | number | Date;
  showInfo: boolean;
  constructor(public id: number, public name: string, public description: string, public completeDate: Date) {
    this.showDescription = false;
  }
}
