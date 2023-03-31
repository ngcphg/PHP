import { Component } from '@angular/core';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent {
  constructor(){
    fetch('http://localhost:80/PHPapi/Reservation/GetReserInfo.php')
    .then(res => res.json())
    .then(data=>{
      interface Reser{
        resID :string;
        name:string;
        email:string;
        phoneNumber:string;
        date:string;
        time:string;
        note:string;
        status:string;
        ByUser:string;
      }
      console.log('Data:', data);
      const tableBody = document.querySelector('#myTable tbody') as HTMLTableElement;
      if (tableBody) {
        data.forEach((reser:Reser) => {
          const row = tableBody.insertRow();
          row.insertCell().textContent = reser.resID ? reser.resID : 'ko thaays';
          row.insertCell().textContent = reser.name ? reser.name : 'ko thaays';
          row.insertCell().textContent = reser.email ? reser.email : 'ko thaays';
          row.insertCell().textContent = reser.phoneNumber ? reser.phoneNumber : 'ko thaays';
          row.insertCell().textContent = reser.date ? reser.date : 'ko thaays';
          row.insertCell().textContent = reser.time ? reser.time : 'ko thaays';
          row.insertCell().textContent = reser.note ? reser.note : 'ko thaays';
          row.insertCell().textContent = (reser.status == "1")? 'Applied' : 'Non-Applied';
          row.insertCell().textContent = reser.ByUser ? reser.ByUser : 'ko thaays';


        });
      }
    })
  }
}
