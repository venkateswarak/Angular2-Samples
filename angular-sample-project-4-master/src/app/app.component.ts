import { Component } from '@angular/core';

@Component({
  selector: 'app-root',

   template: `

 <br><br><br>
 <div style="Background-color:#663366;padding:20px;color:#CC9966;height:250px">
 <p>Capitalize the Sentence <strong>{{ name | capitalize }}</strong>.</p>
</div>`,
})
export class AppComponent {
  name = 'afrOZ';
}