import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent {
  @Input() users:any = []
  @Output() userSelectChange = new EventEmitter<string>();

  constructor() { }

  onChange(value: any){
    this.userSelectChange.emit(value.target.value);
  }

}
