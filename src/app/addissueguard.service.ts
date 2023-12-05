import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanDeactivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AddissueComponent } from './addissue/addissue.component';

@Injectable({
  providedIn: 'root'
})
export class AddissueguardService implements CanDeactivate<AddissueComponent>{

    canDeactivate(component: AddissueComponent):boolean {
    if(component.Addissue.dirty && !component.Addissue.submitted)
    {
    return confirm('Are you sure you want to leave ?');
    }
    return true;
  }
  

}
