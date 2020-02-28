export class Ingredient {
  /* Instead of declaring the properties here we declaring
   them in the constructor with public so the are made automaticaly
   and are assigned with the value in the constructor*/
  constructor(public name:string, public amount: number) {
  }
}
