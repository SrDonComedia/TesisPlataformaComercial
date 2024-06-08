import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbCollapseModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonsModule } from 'src/app/commons/commons.module';

import { UsersComponent } from './users.component';

import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatRippleModule } from '@angular/material/core';
import { MatTabsModule } from '@angular/material/tabs'
import { UsersRoutingModule } from './users-routing.module';

@NgModule({
    declarations: [UsersComponent],
    imports: [
        CommonModule,
        FormsModule,
        NgbModule,
        UsersRoutingModule,
        ReactiveFormsModule,
        CommonsModule,
        NgbCollapseModule,
        MatInputModule,
        MatIconModule,
        MatCardModule,
        MatButtonToggleModule,
        MatButtonModule,
        MatDividerModule,
        MatTooltipModule,
        MatExpansionModule,
        MatRippleModule,
        MatTabsModule
    ]
})
export class UsersModule { }

