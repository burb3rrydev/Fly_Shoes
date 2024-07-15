import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ShoeService } from '../shoe.service';

@Component({
  selector: 'app-shoe-form',
  templateUrl: './shoe-form.component.html',
  styleUrls: ['./shoe-form.component.css']
})
export class ShoeFormComponent implements OnInit {
  shoe: any = {
    name: '',
    brand: '',
    price: 0,
    size: '',
    color: '',
    quantity: 0
  };
  isEdit = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private shoeService: ShoeService
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    console.log('Route ID:', id); // Debug statement

    if (id !== null) {
      const shoeId = +id;
      console.log('Parsed ID:', shoeId); // Debug statement

      if (!isNaN(shoeId)) {
        this.isEdit = true;
        this.shoeService.getShoe(shoeId).subscribe(data => {
          this.shoe = data;
        });
      } else {
        console.error('Invalid id:', id);
      }
    } else {
      console.error('No id parameter found.');
    }
  }

  onSubmit(): void {
    if (this.isEdit) {
      console.log('Updating shoe with ID:', this.shoe.id); // Debug statement
      this.shoeService.updateShoe(this.shoe.id, this.shoe).subscribe(() => {
        this.router.navigate(['/shoes']);
      });
    } else {
      console.log('Adding new shoe'); // Debug statement
      this.shoeService.addShoe(this.shoe).subscribe(() => {
        this.router.navigate(['/shoes']);
      });
    }
  }
}
