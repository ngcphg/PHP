import{Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Component({
  selector:'app-menu',
  templateUrl:'./menu.component.html',
  styleUrls:['./menu.component.css']
})


export class MenuComponent{
  constructor() {
    fetch('http://localhost:80/PHPapi/Product/GetProduct.php')
    .then(response => response.json())
    .then(data => {
      interface Product {
        ProductID: string;
        ProductName: string;
        Price: string;
        ProductDesc: string;
        Img: string;
      }
      const tableBody = document.querySelector('#myTable tbody') as HTMLTableElement;
        if (tableBody) {
          data.forEach((product:Product) => {
            const row = tableBody.insertRow();
            row.insertCell().textContent = product.ProductID ? product.ProductID : 'ko thay';
            row.insertCell().textContent = product.ProductName ? product.ProductName : 'ko thay';
            row.insertCell().textContent = product.Price ? product.Price +' VND' : 'ko thay';
            row.insertCell().textContent = product.ProductDesc ? product.ProductDesc : 'ko thay';
            row.insertCell().textContent = product.Img ? product.Img : 'ko thay';
            row.contentEditable = 'true';
            row.cells[0].contentEditable='false';
            //Edit button
            const ApplyBtn = document.createElement('button');
            ApplyBtn.textContent = 'Edit';
            ApplyBtn.addEventListener('click', () => {
              const formData:FormData = new FormData();
              formData.append('ProductID',product.ProductID);
              formData.append('ProductName',row.cells[1].textContent!);
              formData.append('Price',row.cells[2].textContent!);
              formData.append('ProductDesc',row.cells[3].textContent!);
              formData.append('Img',row.cells[4].textContent!);
              fetch('http://localhost:80/PHPapi/Product/EditProduct.php', {
                method: 'POST',
                body: formData
              })
              .then(res => res.json())
              .then(data => {
                console.log(formData.get('ProductDesc'));
                alert(data)
                location.reload();
              })
            });
            row.insertCell().appendChild(ApplyBtn);
            //Delete button
            const cancelBtn = document.createElement('button');
            cancelBtn.textContent = 'Delete';
            cancelBtn.addEventListener('click', () => {
              fetch('http://localhost:80/PHPapi/Product/DeleteProduct.php?ProductID='+product.ProductID+'')
              .then(res=>{
                alert('Delete OK!');
                location.reload();
              })
            });
            row.insertCell().appendChild(cancelBtn);
          });
        }
    })
  }
}
