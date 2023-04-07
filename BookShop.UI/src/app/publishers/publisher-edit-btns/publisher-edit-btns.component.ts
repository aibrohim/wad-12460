import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PublishersService } from 'src/app/services/publishers.service';

@Component({
  selector: 'app-publisher-edit-btns',
  templateUrl: './publisher-edit-btns.component.html',
  styleUrls: ['./publisher-edit-btns.component.css'],
})
export class PublisherEditBtnsComponent {
  constructor(
    private route: ActivatedRoute,
    private publishersService: PublishersService,
    private router: Router
  ) {}

  handleDeleteClick() {
    this.route.paramMap.subscribe({
      next: (params) => {
        const publisherId = params.get('id');
        if (publisherId)
          this.publishersService.deletePublisher(+publisherId).subscribe({
            next: () => {
              this.router.navigate(['publishers']);
            },
          });
      },
    });
  }
}
