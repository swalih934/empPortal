import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../../services/api.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
@Component({
  selector: 'app-editemp',
  templateUrl: './editemp.component.html',
  styleUrl: './editemp.component.css'
})
export class EditempComponent {
  eid:any=""
  employee:any={
    id:"",name:"",phone:"",department:""
  }
  constructor (private ac:ActivatedRoute,private api:ApiService,private toastr:ToastrService,private router:Router){
    this.ac.params.subscribe({
      next:(res:any)=>{
        this.eid=res.id
        console.log(this.eid)
        this.api.getEmployee(this.eid).subscribe({
          next:(res:any)=>{
            this.employee=res
            console.log(this.employee)

          },
          error:(err:any)=>{
            console.log(err)
          }
        })
      }
    })
  }

  handelEdit(){
    console.log(this.employee)
    this.api.editEmployee(this.eid,this.employee).subscribe({
      next:(re:any)=>{
this.toastr.success("Employee details updated")
this.router.navigateByUrl('/empmng')

      },
      error:(err:any)=>{
        console.log(err)
        this.toastr.error("something went wrong!!")
      }
    })
  }
}
