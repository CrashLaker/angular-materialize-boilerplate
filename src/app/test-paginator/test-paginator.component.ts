import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-paginator',
  templateUrl: './test-paginator.component.html',
  styleUrls: ['./test-paginator.component.css']
})
export class TestPaginatorComponent implements OnInit {

  constructor() { }

  public content = '---'
  public activePage = 1
  public totalPage = 20
  public pageList = []
  public math = Math

  ngOnInit(): void {
    this.getPage(1)
  }

  getPage(page=1) {
    this.activePage = page
    this.content = `
    Loading Page content page: 
    ${page}
    `
    this.pageList = [...Array(6)].map((d,i) => {
      return page-3+i
    }).filter(d => d > 0 && d <= this.totalPage)
  }

}
