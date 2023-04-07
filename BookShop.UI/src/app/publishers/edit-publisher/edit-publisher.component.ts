import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Publisher } from 'src/app/models/publisher.model';
import { PublishersService } from 'src/app/services/publishers.service';

@Component({
  selector: 'app-edit-publisher',
  templateUrl: './edit-publisher.component.html',
  styleUrls: ['./edit-publisher.component.css'],
})
export class EditPublisherComponent {
  defaultPublisher: Publisher | undefined;

  constructor(
    private route: ActivatedRoute,
    private publishersService: PublishersService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe({
      next: (params) => {
        const activeId = params.get('id');
        if (activeId)
          this.publishersService.getSinglePublisher(+activeId).subscribe({
            next: (publisher: Publisher) => {
              this.defaultPublisher = publisher;
            },
          });
      },
    });
  }

  handleFormSubmit(editedPublisher: Publisher) {
    this.publishersService.editPublisher(editedPublisher).subscribe({
      next: () => {
        this.router.navigate(['/publishers']);
      },
    });
  }
}
