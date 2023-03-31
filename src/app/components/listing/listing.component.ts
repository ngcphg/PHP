import{Component, OnInit} from '@angular/core';

@Component({
  selector:'app-listing',
  templateUrl:'./listing.component.html',
  styleUrls:['./listing.component.css']
})

export class ListingComponent{
  constructor() {
    const queryParams = new URLSearchParams(window.location.search.substring(1));
    const table = queryParams.get("TableNo");
    fetch('http://localhost:80/PHPapi/Cart/GetCart.php?TableNo='+table)
    .then(response => response.json())
    .then(data => {
      interface Cart {
        TableNo: string;
        ProductName: string;
        Quantity: string;
        Price: string;
        Time:string;
      }
      const tableBody = document.querySelector('#myTable tbody') as HTMLTableElement;
        if (tableBody) {
          data.forEach((cart:Cart) => {
            const row = tableBody.insertRow();
            row.insertCell().textContent = cart.TableNo ? cart.TableNo : 'ko thay';
            row.insertCell().textContent = cart.ProductName ? cart.ProductName : 'ko thay';
            row.insertCell().textContent = cart.Quantity ? cart.Quantity : 'ko thay';
            row.insertCell().textContent = cart.Price ? cart.Price +' VND' : 'ko thay';
            row.insertCell().textContent = cart.Time ? cart.Time : 'ko thay';
            row.contentEditable = 'true';
            row.cells[0].contentEditable='false';
            row.cells[1].contentEditable='false';
            row.cells[3].contentEditable='false';
            row.cells[4].contentEditable='false';
            //Edit button
            const ApplyBtn = document.createElement('button');
            ApplyBtn.textContent = 'Edit';
            ApplyBtn.addEventListener('click', () => {
              const formData:FormData = new FormData();
              formData.append('TableNo',cart.TableNo);
              formData.append('ProductName',row.cells[1].textContent!);
              formData.append('Quantity',row.cells[2].textContent!);
              formData.append('Price',row.cells[3].textContent!);
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
              fetch('http://localhost:80/PHPapi/Product/DeleteProduct.php?ProductID='+cart.TableNo+'')
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
   onClick(){

   }
}
