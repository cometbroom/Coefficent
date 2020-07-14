import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../_services/project.service';
import { Project } from '../_models/project';
import { AlertifyService } from '../_services/alertify.service';
import { UserService } from '../_services/user.service';
import { AuthService } from '../_services/auth.service';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css']
})
export class StartComponent implements OnInit {

  projects: Project[];
  opacityV: number = 100;

  constructor (private projectService: ProjectService,
              private alertify: AlertifyService,
              private userInfo: UserService  ,
              private auth: AuthService          
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


}
