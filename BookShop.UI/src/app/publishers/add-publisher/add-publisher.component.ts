import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Publisher } from 'src/app/models/publisher.model';
import { PublishersService } from 'src/app/services/publishers.service';

@Component({
  selector: 'app-add-publisher',
  templateUrl: './add-publisher.component.html',
  styleUrls: ['./add-publisher.component.css'],
})
export class AddPublisherComponent {
  constructor(
    private publishersService: PublishersService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  handleFormSubmit(publisher: Publisher) {
    this.publishersService.addPublisher(publisher).subscribe({
      next: () => {
        this.router.navigate(['publishers']);
      },
    });
  }
}
