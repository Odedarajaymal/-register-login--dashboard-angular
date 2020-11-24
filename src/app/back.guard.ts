import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router,UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import{ProductService} from './product.service';

@Injectable({
  providedIn: 'root'
})
export class BackGuard implements CanActivate {
  constructor(private productService: ProductService,private router: Router){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
       if(this.productService.authenticate().token){
          this.router.navigate(['/product'])
          return false 
       }else {
        return true;
       }
  
  }
  
}
