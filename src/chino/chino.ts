import {Component, View, Input, NgSwitch} from 'angular2/angular2'

@Component({
  selector: 'chino',
  templateUrl: 'chino/chino.html',
})
export class Chino {
  _choice: string
  @Input()
  set choice(s: string) {
    this._choice = s
  }
  get choice() {
    return this._choice
  }

  constructor() {
    setInterval(() => {console.log(this.choice)}, 300)
  }
}
