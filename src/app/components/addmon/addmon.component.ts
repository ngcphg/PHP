import { Component, VERSION } from '@angular/core';
import { AddmonService } from '../../services/addmon.services';
@Component({
  selector: 'app-addmon',
  templateUrl: './addmon.component.html',
  styleUrls: ['./addmon.component.css']
})
export class AddmonComponent {
  constructor(private addmonService: AddmonService){

  }
  Addmon(ProductName:string, Price:string, ProductDesc:string, Img:string){
    const formData:FormData = new FormData()
    formData.append('ProductName',ProductName);
    formData.append('Price',Price);
    formData.append('ProductDesc',ProductDesc);
    formData.append('Img',Img);
    this.addmonService.AddService(formData).subscribe
    (res=>{
        alert(res)
      },err=>{
        alert(err)
      }
    )
  }
}
