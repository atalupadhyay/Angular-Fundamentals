export class CourseCreateModel {
  constructor(
    public name: string,
    public description: string,
    public startDate: Date,
    public endDate: Date,
    public trainerIds: Array<string>,
    public students?: Array<any>
  ) {}
}