import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'dropdown',
    template: `
<div class="dropdown">
  <button class="btn btn-default dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
    {{valueCategory}}
    <span class="caret"></span>
  </button>
  <ul class="dropdown-menu" aria-labelledby="dropdownMenu1">
    <li *ngFor="let categoryName of listOfCategories" (click)="selectItem(categoryName)"><a href="javascript: void(0);">{{categoryName}}</a></li>
  </ul>
</div>    
  `
})
export class DropdownComponent {
    @Input()
    listOfCategories: string[];
    valueCategory: string = 'Select Category';
    @Output()
    select: EventEmitter<string>;

    constructor() {
        this.select = new EventEmitter<string>();
    }
    selectItem(value: string) {
        this.valueCategory = value;
        this.select.emit(value);

    }
}