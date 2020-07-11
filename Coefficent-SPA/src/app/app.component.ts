import { Component, OnInit } from '@angular/core';
import { ProjectService } from './_services/project.service';
import { Project } from './_models/project';
import { AlertifyService } from './_services/alertify.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Coefficent-SPA';
  projects: Project[];

  constructor (private projectService: ProjectService,
              private alertify: AlertifyService            
  ) {

  }
  
  ngOnInit() {
    this.getProjects();
  }

  getProjects() {
    this.projectService.getProjects().subscribe((projects: Project[]) => {
      this.projects = projects;
    }, error => {
      this.alertify.error(error);
    });

  }

  alertifyTest() {
    this.alertify.success("rewrew");
  }


}
