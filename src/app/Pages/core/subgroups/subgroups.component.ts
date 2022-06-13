import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Location} from "@angular/common";

@Component({
  selector: 'app-subgroups',
  templateUrl: './subgroups.component.html',
  styleUrls: ['./subgroups.component.scss'],
})
export class SubgroupsComponent implements OnInit {
  public classId: number;
  public className: string;

  constructor(
    private route: ActivatedRoute,
    private location: Location
  ) {
    this.classId = Number(this.route.snapshot.paramMap.get('classId'));
    this.className = String(this.route.snapshot.paramMap.get(('className')));
  }

  ngOnInit() {}

  goBack(): void {
    this.location.back();
  }
}
