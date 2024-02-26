import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent {

    @Input()
    product:{
      id:number,
      name:string,
      price:string,
      item_left:number,
      image:string,
      discount:number,
      is_in_inventory:boolean
    };
}
