import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../_services/project.service';
import { Project } from '../_models/project';
import { AlertifyService } from '../_services/alertify.service';
import { UserService } from '../_services/user.service';
import { AuthService } from '../_services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  title = 'Coefficent-SPA';
  projects: Project[];
  showPage: boolean = true;
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

  giveme(){
    console.log(this.userInfo.userD);
    console.log(this.auth.getToken());
  }

  alertifyTest() {
    this.alertify.success("rewrew");
  }



}
