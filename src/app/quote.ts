export class Quote {
  public showDescription: boolean;
  public upVote: number
  public downVote: number
  datePosted: string | number | Date;
  showInfo: boolean;
  constructor(public id: number, public name: string, public description: string, public completeDate: Date) {
    this.showDescription = false;
    this.downVote = 0
    this.upVote = 0
  }
}
