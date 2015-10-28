import {Component, NgClass} from 'angular2/angular2'
import {EventEmitter, Output} from 'angular2/angular2'
import {MyApp} from '../app/app'

@Component({
  selector: 'jyanken',
  templateUrl: 'jyanken/jyanken.html',
  styleUrls: ['jyanken/jyanken.css'],
  directives: [NgClass]
})
export class Jyanken {
  @Output() choose = new EventEmitter()
  private _refactoryTime = null

  jyan(item: string) {
    if (this._refactoryTime !== null) return
    this.choose.next(item)
    this._refactoryTime = setTimeout(() => {
      this.choose.next('ready')
      this._refactoryTime = null
    }, 2100)
  }
}
