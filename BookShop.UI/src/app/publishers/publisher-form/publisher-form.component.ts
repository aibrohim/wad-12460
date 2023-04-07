import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Publisher } from 'src/app/models/publisher.model';
import { PublishersService } from 'src/app/services/publishers.service';

@Component({
  selector: 'app-publisher-form',
  templateUrl: './publisher-form.component.html',
  styleUrls: ['./publisher-form.component.css'],
})
export class PublisherFormComponent {
  @Input() title!: string;
  @Input() defaultPublisher?: Publisher;
  @Input() onSubmit!: (publisher: Publisher) => void;

  PublisherProps: Publisher = {
    id: 0,
    name: '',
  };

  constructor(
    private publishersService: PublishersService,
    private router: Router
  ) {}

  ngOnChanges() {
    if (this.defaultPublisher) this.PublisherProps = this.defaultPublisher;
  }

  handleFormSubmit() {
    this.onSubmit(this.PublisherProps);
  }
}
