import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Food } from '../../models/Food';

declare var $: any;

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  food: Food = {
    name: '',
    price: 0,
    meat: '',
    salsa: '',
    drink: false
  }
  order: Food[] = [];
  total = 0;
  foodTotal = 0;
  checkout = false;
  isValidCheckout = false;

  constructor(
    private router: Router
  ) { }


  ngOnInit() {
    // Resets the form on hide
    $('#myModal').on('hide.bs.modal', function () {
      $(this).find('form')[0].reset();
    });
  }


  onReset() {
    this.food.price = 0;
    this.food.drink = false;
    this.food.name = '';
    this.food.price = 0;
    this.food.meat = '';
    this.food.salsa= '';
  }

  setSalsa(value : string){
    this.food.salsa = value;
  }
  setMeat(value: string) {
    this.food.meat = value;
  }

  onSubmit(value: Food) {
    $('#myModal').modal('hide');
    this.order.push(Object.assign({}, this.food));
    this.total += this.foodTotal;
    this.isValidCheckout = true;
    this.onReset();
  }

  addDrink(bool: boolean) {
    if (this.food.drink === true && bool == false) {
      this.food.drink = false;
      this.foodTotal -= 1.25;
    } if (this.food.drink === false && bool == true) {
      this.food.drink = true;
      this.foodTotal += 1.25;
    }
  }

  onCheckout() {
    this.checkout = !this.checkout;
  }

 
}
