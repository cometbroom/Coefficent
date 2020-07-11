import { Component, OnInit, Input } from '@angular/core';
import { Project } from '../_models/project';


@Component({
  selector: 'app-projectsbrowser',
  templateUrl: './projectsbrowser.component.html',
  styleUrls: ['./projectsbrowser.component.css']
})
export class ProjectsbrowserComponent implements OnInit {
  @Input()
  projects: Project[];

  constructor() { }

  ngOnInit() {
  }

}
