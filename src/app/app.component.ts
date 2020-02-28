import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'recipes-shopping-list-angular-example';
  loadedFeature = 'recipe';

  onNavigate($event: string) {
    this.loadedFeature = $event;
  }
}
