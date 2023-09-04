import { Component, Input } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent {

  validateForm!: UntypedFormGroup;

  constructor(private fb: UntypedFormBuilder, private router: Router, private route: ActivatedRoute,
    private userService: UserService) { }
  user!: User;


  async ngOnInit() {
    this.validateForm = this.fb.group({
      id: [null, [Validators.required]],
      email: [null, [Validators.required]],
      name: [null, [Validators.required]]
    });
    this.route.paramMap.subscribe(async (params: any) => {
      this.user = await this.userService.getUser(Number(params.get('id')));
      console.log('user fetched');
      this.validateForm.patchValue({
        id: this.user?.id,
        email: this.user?.email,
        name: this.user?.name,
      })
    });

  }

  async submitForm(): Promise<void> {
    if (this.validateForm.valid) {
      await this.userService.updateUser(this.user.id, this.validateForm.value)
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
}

