import { Component, OnInit } from '@angular/core';
import { ServicesService } from './services.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Service } from '../shared/service.model';
import { DataStorageService } from '../shared/data-storage.service';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['../app.component.css']
})
export class ServicesComponent implements OnInit {
  serviceForm: FormGroup;

  constructor(private servicesService:ServicesService,
    private route: ActivatedRoute,
    private router: Router,
    private datastorageService: DataStorageService
    ) { }

  ngOnInit() {
    
    this.initForm();

  }

  onSubmit() {   
    //   const newService= new Service(this.serviceForm.value['serviceType'],
    //   this.serviceForm.value['description'],
    //   this.serviceForm.value['imagePath'],
    //   );
    // //this.servicesService.addservice(this.serviceForm.value);
    // this.servicesService.addservice(newService);
    // this.datastorageService.addService(newService);
  }
  
  private initForm() {
    let serviceType = '';
    let imagePath = '';
    let description = '';

    


    this.serviceForm = new FormGroup({
      'serviceType' : new FormControl(serviceType ,Validators.required),
      'imagePath' : new FormControl(imagePath, Validators.required),
      'description' : new FormControl(description, Validators.required),
    });
  }

  onCancel() {
    this.router.navigate(['../'],{relativeTo: this.route});
  }

}
