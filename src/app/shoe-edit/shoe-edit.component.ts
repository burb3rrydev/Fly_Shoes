import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ShoeService } from '../shoe.service';

@Component({
  selector: 'app-shoe-edit',
  templateUrl: './shoe-edit.component.html',
  styleUrls: ['./shoe-edit.component.css']
})
export class ShoeEditComponent implements OnInit {
  shoe: any = {
    id: 0, // Initialize id here, or leave it as undefined if you want users to input
    name: '',
    brand: '',
    price: 0,
    size: '',
    color: '',
    quantity: 0
  };

  constructor(
    private router: Router,
    private shoeService: ShoeService
  ) { }

  ngOnInit(): void {
    // Optionally, you can initialize shoe data here based on a previous selection or default values
  }

  onSubmit(): void {
    if (this.shoe.id) {
      this.shoeService.updateShoe(this.shoe.id, this.shoe).subscribe(() => {
        this.router.navigate(['/shoes']);
      });
    } else {
      // Handle case where shoe.id is not defined or not valid
      console.error('Invalid shoe ID');
    }
  }
}
