import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CartServiceService } from '../service/cart-service.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

  constructor(private cartService:CartServiceService){}


  counterOfCart : any

  ngOnInit(){
    this.cartService.getstateOfCart().subscribe((res:any)=>this.counterOfCart=res.counter)
  }



}
