import { Component, OnInit } from '@angular/core';
import { ShoeService } from '../shoe.service';

@Component({
  selector: 'app-shoe-list',
  templateUrl: './shoe-list.component.html',
  styleUrls: ['./shoe-list.component.css']
})
export class ShoeListComponent implements OnInit {
  shoes: any[] = [];

  constructor(private shoeService: ShoeService) { }

  ngOnInit(): void {
    this.shoeService.getShoes().subscribe(data => {
      this.shoes = data;
    });
  }

  deleteShoe(id: number): void {
    this.shoeService.deleteShoe(id).subscribe(() => {
      this.shoes = this.shoes.filter(shoe => shoe.id !== id);
    });
  }
}
