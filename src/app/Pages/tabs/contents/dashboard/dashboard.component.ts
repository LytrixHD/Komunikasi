import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import {ClassManagementService} from "../../../../core/services/classManagement/class-management.service";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  classes: any;

  constructor(
    private alertCtrl: AlertController,
    private classManagementService: ClassManagementService
  ) {
    setInterval(()=> { this.loadClasses(); }, 60000); //Executes function every 60s
  }

  ngOnInit() {
    this.loadClasses();
  }

  loadClasses(){
    this.classManagementService.getUserClasses().subscribe(response =>{
      console.log(response);
      this.classes = response;
    });
  }

  async addClassAlert() {
    const prompt = await this.alertCtrl.create({
      header: 'Create Group',
      message: 'Enter a name for your new Group!',
      inputs: [
        {
          name: 'className',
          type: 'text',
          placeholder: 'Group name'
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Save',
          handler: data => {
            this.classManagementService.createClass(data.className).subscribe(response =>{
            });
            this.loadClasses();
          }
        }
      ]
    });
    await prompt.present();
  }
}
