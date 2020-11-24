import { Component, OnInit } from '@angular/core';
import {ProductService} from '../product.service'
import {Product} from '../product-interface';
import {AuthService} from '../auth.service'
import { Router } from '@angular/router';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
     productList: Product[]
     search = 'jk'
     error : {
       error: string
     }
  constructor(private productservice:ProductService,private authservice:AuthService,private router: Router) { }

  ngOnInit(): void {
     this.productservice.getProducts().subscribe((product) => {
        this.productList = product   
    },error =>{
      console.log(error)
    })
  }

}
