import { Component, OnInit } from '@angular/core';
import {ClassManagementService} from "../../../services/classManagement/class-management.service";

@Component({
  selector: 'app-classes-form',
  templateUrl: './classes-form.component.html',
  styleUrls: ['./classes-form.component.scss'],
})
export class ClassesFormComponent implements OnInit {
  classes: any;

  constructor(
    private classManagement: ClassManagementService
  ) {
    setInterval(()=> { this.loadClasses(); }, 60000);
  }

  ngOnInit() {
    this.loadClasses();
  }

  loadClasses(){
    this.classManagement.getUserClasses().subscribe(response =>{
      console.log(response);
      this.classes = response;
    });
  }
}
