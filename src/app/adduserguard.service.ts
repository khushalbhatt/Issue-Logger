import { Injectable } from '@angular/core';
import { CanDeactivate } from '@angular/router';
import { RegistrationComponent } from './registration/registration.component';

@Injectable({
  providedIn: 'root'
})
export class AdduserguardService implements CanDeactivate<RegistrationComponent>{

  canDeactivate(component: RegistrationComponent):boolean {
    if(component.AddUser.dirty && !component.AddUser.submitted)
    {
    return confirm('Are you sure you want to leave ?');
    }
    return true;
  }
}
