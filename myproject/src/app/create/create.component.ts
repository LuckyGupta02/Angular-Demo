import { Component } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { NzResizeObserverDirective } from 'ng-zorro-antd/cdk/resize-observer';
import { DetailComponent } from '../detail/detail.component';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { User } from '../user';


@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent {
  constructor(private fb: UntypedFormBuilder, private userService: UserService, private router: Router) { }

  validateForm!: UntypedFormGroup;
  id?: number;

  async submitForm(): Promise<void> {
    if (this.validateForm.valid) {
      this.userService.createUser(this.validateForm.value);
      this.router.navigate(['/users'])
    } else {
      Object.values(this.validateForm.controls).forEach(control => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({ onlySelf: true });
        }
      });
    }
  }
  
  ngOnInit(): void {   
    this.validateForm = this.fb.group({
      email: [null, [Validators.required]],
      name: [null, [Validators.required]]
    });
  };



}
