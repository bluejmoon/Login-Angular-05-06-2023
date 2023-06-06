import { Component } from '@angular/core';
import { UserservicesService } from 'src/app/services/userservices.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {
  selectFile!:File;
  userProfile!:any;

  constructor(private UserService: UserservicesService){}

  getUser(){
    this.userProfile = this.UserService.getUser()
  }

  onFileSelected(event:any){
    this.selectFile = event.target.files[0];
  }
}
