import { Component, OnInit } from '@angular/core';

interface Image {
  text: String;
  url: String;
}

@Component({
  selector: 'pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css'],
})
export class PaginationComponent implements OnInit {
  images: Image[];
  currentPage: number = 0;
  pageDisplay: number[] = [0, 1, 2, 3, 4];

  constructor() {
    this.images = [
      {
        text: 'Magical Northen Lights',
        url:
          'https://images.unsplash.com/photo-1531366936337-7c912a4589a7?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bm9ydGhlcm4lMjBsaWdodHN8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      },
      {
        text: 'The Perfect Storm',
        url:
          'https://images.unsplash.com/photo-1524679166686-04237b4667b4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8c3Rvcm18ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      },
      {
        text: 'The Blizzard',
        url:
          'https://images.unsplash.com/photo-1553205041-4a98393b18bf?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGJsaXp6YXJkfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      },
      {
        text: 'The Ray of Hope',
        url:
          'https://images.unsplash.com/photo-1470115636492-6d2b56f9146d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8c3Vuc2hpbmV8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      },
      {
        text: 'Magical Northen Lights',
        url:
          'https://images.unsplash.com/photo-1531366936337-7c912a4589a7?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bm9ydGhlcm4lMjBsaWdodHN8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      },
      {
        text: 'The Perfect Storm',
        url:
          'https://images.unsplash.com/photo-1524679166686-04237b4667b4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8c3Rvcm18ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      },
      {
        text: 'The Blizzard',
        url:
          'https://images.unsplash.com/photo-1553205041-4a98393b18bf?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGJsaXp6YXJkfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      },
      {
        text: 'The Ray of Hope',
        url:
          'https://images.unsplash.com/photo-1470115636492-6d2b56f9146d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8c3Vuc2hpbmV8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      },
      {
        text: 'Magical Northen Lights',
        url:
          'https://images.unsplash.com/photo-1531366936337-7c912a4589a7?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bm9ydGhlcm4lMjBsaWdodHN8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      },
      {
        text: 'The Perfect Storm',
        url:
          'https://images.unsplash.com/photo-1524679166686-04237b4667b4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8c3Rvcm18ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      },
      {
        text: 'The Blizzard',
        url:
          'https://images.unsplash.com/photo-1553205041-4a98393b18bf?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGJsaXp6YXJkfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      },
      {
        text: 'The Ray of Hope',
        url:
          'https://images.unsplash.com/photo-1470115636492-6d2b56f9146d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8c3Vuc2hpbmV8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      },
      {
        text: 'Magical Northen Lights',
        url:
          'https://images.unsplash.com/photo-1531366936337-7c912a4589a7?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bm9ydGhlcm4lMjBsaWdodHN8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      },
      {
        text: 'The Perfect Storm',
        url:
          'https://images.unsplash.com/photo-1524679166686-04237b4667b4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8c3Rvcm18ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      },
      {
        text: 'The Blizzard',
        url:
          'https://images.unsplash.com/photo-1553205041-4a98393b18bf?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGJsaXp6YXJkfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      },
      {
        text: 'The Ray of Hope',
        url:
          'https://images.unsplash.com/photo-1470115636492-6d2b56f9146d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8c3Vuc2hpbmV8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      },
      {
        text: 'Magical Northen Lights',
        url:
          'https://images.unsplash.com/photo-1531366936337-7c912a4589a7?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bm9ydGhlcm4lMjBsaWdodHN8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      },
      {
        text: 'The Perfect Storm',
        url:
          'https://images.unsplash.com/photo-1524679166686-04237b4667b4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8c3Rvcm18ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      },
      {
        text: 'The Blizzard',
        url:
          'https://images.unsplash.com/photo-1553205041-4a98393b18bf?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGJsaXp6YXJkfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      },
      {
        text: 'The Ray of Hope',
        url:
          'https://images.unsplash.com/photo-1470115636492-6d2b56f9146d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8c3Vuc2hpbmV8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      },
    ];
  }

  ngOnInit(): void {}

  refreshPageDisplay(currentPage: number) {
    if (currentPage > this.pageDisplay[4]) {
      for (let i = 0; i < 5; i++) {
        this.pageDisplay[i] = currentPage;
        currentPage++;
      }
    } else if (currentPage < this.pageDisplay[0]) {
      for (let i = 4; i >= 0; i--) {
        this.pageDisplay[i] = currentPage;
        currentPage--;
      }
    }
  }
}
