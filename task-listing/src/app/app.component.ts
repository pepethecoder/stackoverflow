import { Component, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { ITaskDetails } from './interfaces/task-details';
import { TaskService } from './services/task.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnChanges {
  currentDate: {};
  taskForm: FormGroup;
  taskArr: ITaskDetails[] = [];
  taskObj: ITaskDetails = {
    title: '',
    description: '',
    date: null
  };

  constructor(private taskSer: TaskService, private fb: FormBuilder) {
    this.currentDate = new Date().toISOString().substring(0, 10);
  }

  reset() {
    this.taskForm.reset();
    this.taskForm.get('date').patchValue(this.currentDate);
  }

  ngOnInit() {
    // this.taskForm = new FormGroup({
    //   'taskTitle': new FormControl('', Validators.required),
    //   'description': new FormControl('', Validators.required),
    //   'date': new FormControl(this.currentDate, Validators.required)
    // });

    this.taskForm = this.fb.group({
      taskTitle: ['', Validators.required],
      description: [''],
      date: [this.currentDate, Validators.required]
    });
    console.log(this.taskForm);
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log(changes);
  }
  onSubmit() {
    // this.taskObj.title = this.taskForm.get('taskTitle').value;
    // this.taskObj.description = this.taskForm.get('description').value;
    // this.taskObj.date = this.taskForm.get('date').value;

    this.taskObj.title = this.taskForm.value.taskTitle;
    this.taskObj.description = this.taskForm.value.description ? this.taskForm.value.description : 'N/A';
    this.taskObj.date = this.taskForm.value.date;
    console.log(this.taskObj);


    this.taskSer.setData(this.taskObj);
    console.log({ ...this.taskObj });
    this.taskArr = this.taskSer.getdata();
    console.log(this.taskArr);
  }

}
