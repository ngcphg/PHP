import { Component } from '@angular/core';

@Component({
  selector: 'app-statistic',
  templateUrl: './statistic.component.html',
  styleUrls: ['./statistic.component.css']
})
export class StatisticComponent {
  constructor(){}
  onClick(from:string, to:string){
        fetch('http://localhost:80/PHPapi/Statistic/Statistic.php?from='+from+'&to='+to+'')
        .then(response => response.json())
        .then(data => {
          interface Bill {
            BillNumber: string;
            ProductID: string;
            Quantity: string;
            Price: string;
            Date: string;
          }
          console.log('Data:', data);
          const tableBody = document.querySelector('#myTable tbody') as HTMLTableElement;
            if (tableBody) {
              data.forEach((bill:Bill) => {
                const row = tableBody.insertRow();
                row.insertCell().textContent = bill.BillNumber ? bill.BillNumber : '';
                row.insertCell().textContent = bill.ProductID ? bill.ProductID : '';
                row.insertCell().textContent = bill.Quantity ? bill.Quantity : '';
                row.insertCell().textContent = bill.Price ? bill.Price +' VND' : '';
                row.insertCell().textContent = bill.Date ? bill.Date : '';
              });
            }
        })
  }
}
