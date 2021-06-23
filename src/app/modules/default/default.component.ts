import { Component, OnInit } from '@angular/core';
import {ProductService} from "../../services/product.service";
import {PageEvent} from "@angular/material/paginator";

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.scss']
})
export class DefaultComponent implements OnInit {

  constructor(private productService: ProductService) { }

  resultArray:any[]=[];
  resultCount=0;
  resultPageSize=2;
  resultPageSizeOptions: number[]=[2,5,7,10];
  // @ts-ignore
  resultPageEvent: PageEvent;

  ngOnInit(): void {
    this.loadAllProducts(2,1);
  }

  private loadAllProducts(pagination: number, page: number) {
    this.productService.getAllProducts(pagination, page).subscribe(response=>{
      this.resultArray=response.dataSet;
      this.resultCount=response.count;
      console.log(response)
    }, error => {
      console.log(error)
    })
  }

  getServerData(event?: PageEvent): any {
    // @ts-ignore
    this.loadAllProducts(event?.pageSize, event?.pageIndex);
  }
}
