import {Component, View, bootstrap} from 'angular2/angular2'

import {Jyanken} from '../jyanken/jyanken'
import {Chino} from '../chino/chino'

@Component({
  selector: 'my-app',
  templateUrl: 'app/app.html',
  directives: [Jyanken, Chino],
  styleUrls: ['app/app.css'],
})
export class MyApp {
  score = 0
  choice: string = 'ready'
  onChoose(item: string) {
    if (item === 'paper') this.score++
    this.choice = item
  }
}

bootstrap(MyApp)
