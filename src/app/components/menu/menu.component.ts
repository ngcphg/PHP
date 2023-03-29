import{Component, OnInit} from '@angular/core';

@Component({
  selector:'app-menu',
  templateUrl:'./menu.component.html',
  styleUrls:['./menu.component.css']
})


export class MenuComponent{
  constructor() {}

  onclick(){
    fetch('http://localhost:80/PHPapi/Product/GetProduct.php')
    .then(response => response.json())
    .then(data => {
      interface Product {
        ProductId: number;
        ProductName: string;
        Price: number;
        ProductDesc: string;
        Img: string;
      }
      console.log('Data:', data);
      const tableBody = document.querySelector('#myTable tbody') as HTMLTableElement;
        if (tableBody) {
          data.forEach((product:Product) => {
            const row = tableBody.insertRow();
            row.insertCell().textContent = product.ProductId ? product.ProductId.toString() : '';
            row.insertCell().textContent = product.ProductName ? product.ProductName : '';
            row.insertCell().textContent = product.Price ? product.Price.toString() +' VND' : '';
            row.insertCell().textContent = product.ProductDesc ? product.ProductDesc : '';
          });
        }
    })
  }
}
//Image
// const imgCell = row.insertCell();
        // const img = document.createElement('img');
        // img.src = product.Img;
        // imgCell.appendChild(img);
