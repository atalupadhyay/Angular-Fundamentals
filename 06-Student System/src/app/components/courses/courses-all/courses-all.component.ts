import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { CourseViewModel } from '../../../core/models/view-models/courses/course.view.model';

import { AuthService } from '../../../core/services/authentication/auth.service';
import { CourseService } from '../../../core/services/courses/course.service';
import { NotificationService } from '../../../core/services/notifications/notification.service';

@Component({
  selector: 'app-courses-all',
  templateUrl: './courses-all.component.html',
  styleUrls: ['./courses-all.component.css']
})
export class CoursesAllComponent implements OnInit {
  courses$: Observable<CourseViewModel[]>;

  constructor(
    private courseService: CourseService,
    private authService: AuthService,
    private notificationService: NotificationService
  ) {}

  ngOnInit() {
    this.courses$ = this.courseService.getAll(); // todo
  }

  // TODO pagination
}
