import { AssignmentService } from './assignmentService/assignment.service';
import { Assignment } from '../models/assignment.model';
import { Router } from '@angular/router';

import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-assignment',
  templateUrl: './assignment.component.html',
  styleUrls: ['./assignment.component.css']
})

export class AssignmentComponent {
  @Input() assignment: Assignment;

  constructor(private assignmentService: AssignmentService,
              private router: Router) { }

  onDelete() {
    this.assignmentService.removeAssignment(this.assignment)
    .subscribe(
    //result => console.log(result)
    );
  }
  onEdit() {
    //this.router.navigateByUrl('/editannouncement');
    //this.announcementService.addAnnouncementToEdit(this.announcement);
  }
  openAssignment() {
    // pass meta data to the assignmentQuestion list?
    this.assignmentService.setSelectedAssignment(this.assignment);
    this.router.navigate(['assignmentMenu', this.assignment.assignmentID]);
  }
  openStats(){
    this.router.navigate(['chartist', this.assignment.assignmentID]);
  }
}