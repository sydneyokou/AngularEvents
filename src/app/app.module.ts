import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";

import {
  EventsListComponent,
  EventThumbnailComponent,
  EventService,
  EventDetailsComponent,
  CreateEventComponent,
  EventRouteActivator
} from "./events/index";
import { EventsAppComponent } from "./events-app.component";
import { NavBarComponent } from "./nav/navbar.component";
import { ToastrService } from "./common/toastr.service";
import { appRoutes } from "./routes";
import { Error404Component } from "./errors/404.component";

export function checkDirtyState(component: CreateEventComponent) {
  if (component.isDirty) {
    return window.confirm(
      "You have not saved this event, do you really want to cancel ?"
    );
  } else {
    return true;
  }
}

@NgModule({
  imports: [BrowserModule, RouterModule.forRoot(appRoutes)],
  declarations: [
    EventsAppComponent,
    EventsListComponent,
    EventThumbnailComponent,
    NavBarComponent,
    EventDetailsComponent,
    CreateEventComponent,
    Error404Component
  ],
  providers: [
    EventService,
    ToastrService,
    EventRouteActivator,
    { provide: "canDeactivateCreateEvent", useValue: checkDirtyState }
  ],
  bootstrap: [EventsAppComponent]
})
export class AppModule {}
