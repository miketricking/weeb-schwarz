import { Component, OnInit, ViewEncapsulation, ChangeDetectionStrategy, Input } from '@angular/core';
import { setPullRateInterface } from 'src/app/services/pull-rates.service';

@Component({
  selector: 'pull-rate-info',
  templateUrl: './pull-rate-info.component.html',
  styleUrls: ['./pull-rate-info.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PullRateInfoComponent implements OnInit {

  @Input() set!: setPullRateInterface;

  constructor() { }

  ngOnInit(): void {
  }

}
