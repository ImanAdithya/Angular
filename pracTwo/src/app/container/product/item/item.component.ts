import {Component, Input} from '@angular/core';
import {Product} from "../../../model/product";

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent {

    @Input()
    product:Product;
}
