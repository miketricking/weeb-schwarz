import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { first, map, startWith } from 'rxjs/operators';
import { PullRatesService } from './services/pull-rates.service';
import { setPullRateInterface } from './services/pull-rates.service';

export interface set {
  name: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent implements OnInit {
  title = 'weeb-schwarz';

  setSelector = new FormControl();
  options!: setPullRateInterface[];
  filteredOptions!: Observable<set[]>;

  ngOnInit() : void {
    this.filteredOptions = this.setSelector.valueChanges.pipe(
      startWith(''),
      map(value => {
        const name = typeof value === 'string' ? value : value?.name;
        return name ? this._filter(name as string) : this.options.slice();
      }),
    );
    this.pullRate.getPullRates()
    .pipe(
      first()).subscribe(pullRates => this.options = pullRates);
  }

  constructor(private pullRate: PullRatesService) {}

  displayFn(set: set): string {
    return set && set.name ? set.name : '';
  }

  private _filter(name: string): set[] {
    const filterValue = name.toLowerCase();

    return this.options.filter(option => option.name.toLowerCase().includes(filterValue));
  }
}
