import { Component } from '@angular/core';
import { Publisher } from 'src/app/models/publisher.model';
import { PublishersService } from 'src/app/services/publishers.service';

@Component({
  selector: 'app-publishers-list',
  templateUrl: './publishers-list.component.html',
  styleUrls: ['./publishers-list.component.css'],
})
export class PublishersListComponent {
  publishers: Publisher[] = [];

  constructor(private publishersService: PublishersService) {}

  ngOnInit(): void {
    this.publishersService.getAllPublishers().subscribe({
      next: (publishers) => {
        this.publishers = publishers;
      },
      error: (res) => {
        console.log(res);
      },
    });
  }
}
