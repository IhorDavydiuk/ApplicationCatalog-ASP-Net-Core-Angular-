import { Component,OnInit } from '@angular/core';
import { ApplicationService } from '../../service/application.service';

@Component({
    selector: 'editing-panel',
    templateUrl: './editing-panel.component.html',
})
export class EditingPanelComponent implements OnInit {
    nameCategory = '';
    valueApp: string;
    valueCat: string;
    dropdownValues: string[];
    constructor(private todoService: ApplicationService) {
        this.nameCategory = '';
        
    }
    ngOnInit() {
        this.todoService.getApplicatonCategory().then(result => {
            this.dropdownValues = result
        });
    }
    addNameCategory(nameCategory: string) {
        this.nameCategory = nameCategory;
    }
    addApplication(nameApp: string) {
        this.valueApp = '';
        this.todoService.createApplicaton(nameApp,this.nameCategory);
    }
    addCategory(nameCategory: string) {
        this.valueCat = '';
        this.todoService.createCategory(nameCategory);
    }
}