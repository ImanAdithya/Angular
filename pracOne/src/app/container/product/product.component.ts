import {Component, Input} from '@angular/core';

@Component({
  selector: 'product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {

  // title='POS SYSTEM';
  // author=''
  //
  // count=0;
  //
  // product={
  //   name:'iPhone',
  //   price:999,
  //   color:'Red',
  //   discount:5.7,
  //   inStock:3,
  //   image:'assets/iphone.jpeg'
  // }
  //
  // getDiscountPrice(){
  //   return  this.product.price-(this.product.price * this.product.discount/100)
  // }
  //
  //
  // onChangeAuthor(event:any) {
  //   this.author=event.target.value;
  // }
  //
  // incrementCartValue() {
  //   if (this.count< this.product.inStock){
  //     this.count++;
  //   }
  // }
  //
  // decrementCartValue() {
  //   if (this.count>0){
  //     this.count--;
  //   }
  //
  // }

  listOfString:string[]=["Mark","Steve","Iman","Ushan","Sathin"]

  products=[
    {
      id:1,
      name:'Iphone 13',
      price:'$400',
      item_left:3,
      image:'assets/iphone.jpeg',
      discount:10,
      is_in_inventory:true
    },
    {
      id:2,
      name:'Iphone 7',
      price:'$90',
      item_left:2,
      image:'assets/iphone.jpeg',
      discount:20,
      is_in_inventory:false
    },
    {
      id:3,
      name:'Iphone 8',
      price:'$100',
      item_left:0,
      image:'assets/iphone.jpeg',
      discount:0,
      is_in_inventory:true
    },
    {
      id:4,
      name:'Iphone 15',
      price:'$130',
      item_left:9,
      image:'assets/iphone.jpeg',
      discount:0,
      is_in_inventory:true
    },
  ];

  totalProductCount=this.products.length;
  totalProductInStock=this.products.filter(p=> p.is_in_inventory===true).length;
  totalProductOutStock=this.products.filter(p=>p.is_in_inventory==false).length;

  selectedFilterRadioBtn:string='all';

  @Input()
  searchText:string='';

  onFilterChange(value:string) {
    console.log(value);
    this.selectedFilterRadioBtn=value;
  }
}
