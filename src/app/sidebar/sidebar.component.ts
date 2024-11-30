import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {
  constructor(private router:Router,private toastr:ToastrService){}

  lgOut(){
   sessionStorage.clear()
   this.router.navigateByUrl('')
   this.toastr.info("User Logged Out!!")
  }
}
