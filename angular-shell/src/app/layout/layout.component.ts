import { Component } from "@angular/core";
import { ProfileUserComponent } from "../profile-user/profile-user.component";

@Component({
  standalone: true,
  imports: [ProfileUserComponent],
  selector: "app-layout",
  template: `<app-profile-user></app-profile-user>`,
})
export class LayoutComponent {}
