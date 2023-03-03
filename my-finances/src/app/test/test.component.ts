import { Component } from '@angular/core';


@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent {
  myList = [
    {
      name: "Car wash",
      status: false,
      price: 15
    },
    {
      name: "Manicure",
      status: false,
      price: 25
    },
    {
      name: "Electricity",
      status: false,
      price: 280
    },
    {
      name: "New sneekers",
      status: false,
      price: 60

    }
  ]

  calculateTotal() {
    let totalPrice = 0
    this.myList.forEach(element => {
      if (element.status) {
        totalPrice = totalPrice + element.price
      }
    });
    return totalPrice

  }
}


