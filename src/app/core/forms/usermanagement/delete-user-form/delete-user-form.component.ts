import { Component, OnInit } from '@angular/core';
import {AlertController} from "@ionic/angular";
import {UserManagementService} from "../../../services/userManagement/user-management.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-delete-user-form',
  templateUrl: './delete-user-form.component.html',
  styleUrls: ['./delete-user-form.component.scss'],
})
export class DeleteUserFormComponent implements OnInit {

  constructor(
    public alertCtrl: AlertController,
    private userManagementService: UserManagementService,
    private router: Router
  ) { }

  ngOnInit() {}

  async showAlertUserDelete() {
    const alert = await this.alertCtrl.create({
      header: 'Delete Account',
      subHeader: '',
      message: 'Are you sure you want to proceed?',
      buttons: [{
        text:'Cancel',
        role:'cancel'
      },{
        text:'Confirm',
        role:'confirm'
      }]
    });
    await alert.present();
    const result = await alert.onDidDismiss();
    if(result.role === 'confirm'){
      this.deleteUser();
    }
  }

  async showAlertUserDeleted() {
    const alert = await this.alertCtrl.create({
      header: 'Account has been deleted!',
      subHeader: '',
      buttons: ['Confirm']
    });
    await alert.present();
    const result = await alert.onDidDismiss();
    if(result.role === 'confirm'){
      this.deleteUser();
    }
  }

  deleteUser(){
    this.userManagementService.deleteUser().subscribe(response =>{
      if(response.status === 'User Deleted!'){
        console.log('User Deleted!');
        this.showAlertUserDeleted();
        this.router.navigate(['']);
      }
    });
  }
}
