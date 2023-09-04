import { Component } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../user';
import { UserComponent } from '../user/user.component';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, switchMap } from 'rxjs';
@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent {

  constructor(private userService: UserService,private route: ActivatedRoute, private router:Router ) { }
  user?: User;

  async ngOnInit() {
    this.route.paramMap.subscribe(async (params: any) => {
      this.user = await this.userService.getUser(Number(params.get('id')));
      console.log(this.user);
    });
  }

  updateUser(user: User){
    this.router.navigate([`/userUpdate/${user.id}`]);
  }
}
