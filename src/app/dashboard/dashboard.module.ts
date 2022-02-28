import {
	CUSTOM_ELEMENTS_SCHEMA,
	NgModule,
	NO_ERRORS_SCHEMA
} from "@angular/core";
import { CommonModule } from "@angular/common";
import {MatIconModule} from '@angular/material/icon';
import {MatBadgeModule} from '@angular/material/badge';
import {MatListModule} from '@angular/material/list';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { DashboardRoutingModule } from './dashboard-routing.module';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { SearchComponent } from './search/search.component';
import { ListComponent } from './list/list.component';
import { PriviewComponent } from './priview/priview.component';

@NgModule({
	declarations: [
		

    HeaderComponent,
         SidebarComponent,
         SidenavComponent,
         SearchComponent,
         ListComponent,
         PriviewComponent
  ],
	imports: [
		CommonModule,
		FormsModule,
		MatIconModule,
		MatBadgeModule,
		MatListModule,
		MatFormFieldModule,
		MatInputModule,
		ReactiveFormsModule,
		DashboardRoutingModule,
	],

	providers:[
	],

	schemas: [],
	exports: [
		HeaderComponent,
         SidebarComponent,
         SidenavComponent,
         SearchComponent,
         ListComponent,
		 PriviewComponent
	]
})
export class DashboardModule {}
