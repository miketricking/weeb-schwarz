import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatAutocompleteTrigger } from '@angular/material/autocomplete';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { Observable } from 'rxjs';
import { first, map, startWith } from 'rxjs/operators';
import { PullRatesService } from './services/pull-rates.service';
import { setPullRateInterface } from './services/pull-rates.service';

export interface set {
  name: string;
}

const THUMBUP_ICON =
  `
  <svg xmlns="http://www.w3.org/2000/svg" width="25px" height="25px" preserveAspectRatio="xMidYMid meet" viewBox="0 0 25 25"><path d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6m9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8A1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5a5 5 0 0 1-5 5a5 5 0 0 1-5-5a5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3Z"/></svg>
`;

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

  @ViewChild(MatAutocompleteTrigger, { read: MatAutocompleteTrigger })
  inputAutoComplete!: MatAutocompleteTrigger;

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

  constructor(private pullRate: PullRatesService, iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
    iconRegistry.addSvgIconLiteral('thumbs-up', sanitizer.bypassSecurityTrustHtml(THUMBUP_ICON));
  }

  displayFn(set: set): string {
    return set && set.name ? set.name : '';
  }

  clearValues(event: Event): void {
    event.stopPropagation();
    this.setSelector.reset();
    this.inputAutoComplete.openPanel();
  }

  private _filter(name: string): set[] {
    const filterValue = name.toLowerCase();

    return this.options.filter(option => option.name.toLowerCase().includes(filterValue));
  }
}
