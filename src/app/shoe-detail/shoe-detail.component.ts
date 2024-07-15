// shoe-detail.component.ts
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ShoeService } from '../shoe.service';

@Component({
  selector: 'app-shoe-detail',
  templateUrl: './shoe-detail.component.html',
  styleUrls: ['./shoe-detail.component.css']
})
export class ShoeDetailComponent implements OnInit {
  shoe: any;

  constructor(
    private route: ActivatedRoute,
    private shoeService: ShoeService
  ) { }

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id')!;
    this.shoeService.getShoe(id).subscribe(data => {
      this.shoe = data;
    });
  }
}
