import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  searchText:string=''

  @Output()
  searchTextChanged:EventEmitter<string>=new EventEmitter<string>();

  OnSearchTextChanged() {
    this.searchTextChanged.emit(this.searchText);
  }

  //did not want when we use ngModel
  updateSearchText(input:HTMLInputElement) {
      //this.searchText=event.target.value;
    this.searchText=input.value;
    this.searchTextChanged.emit(this.searchText);
  }

}
