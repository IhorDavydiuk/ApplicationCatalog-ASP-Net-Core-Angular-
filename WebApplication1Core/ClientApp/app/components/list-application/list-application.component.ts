import { Component, OnInit } from '@angular/core';
import { ApplicationService } from '../../service/application.service';
import { Application } from '../../application';

@Component({
    selector: 'list-app',
    templateUrl: './list-application.component.html'
})
export class ListApplicationComponent implements OnInit {
    applications: Application[];
    dropdownValues: string[];
    constructor(private todoService: ApplicationService) {
        this.applications = [];
        this.dropdownValues = [];
    }
    ngOnInit() {
        this.todoService.getApplicaton().then(applications => this.applications = applications);
        this.todoService.getApplicatonCategory().then(result => {
            this.dropdownValues = result
        });
    };
    searchApplication(nameApp: string) {
        this.todoService.searchAppByName(nameApp).subscribe(result => {
            this.applications = result.json() as Application[];
        }, error => console.error(error));
    }
    searchCategory(nameCategory: any) {
        this.todoService.searchAppByCategory(nameCategory).subscribe(result => {
            this.applications = result.json() as Application[];
        })
    }
}

