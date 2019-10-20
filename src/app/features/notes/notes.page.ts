import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.page.html',
  styleUrls: ['./notes.page.scss'],
})
export class NotesPage implements OnInit {

  action;
  private todo : FormGroup;

  ngOnInit() {
    this.action = this.route.snapshot.paramMap.get('action');
  }  

  constructor(private route: ActivatedRoute, private formBuilder: FormBuilder ) {
    this.todo = this.formBuilder.group({
      title: ['', Validators.required],
      description: [''],
    });
  }
  logForm(){
    console.log(this.todo.value)
  }

}
