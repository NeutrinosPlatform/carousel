import { NgModule, ModuleWithProviders, Injectable } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HammerGestureConfig, HAMMER_GESTURE_CONFIG } from '@angular/platform-browser';
import { MatIconModule } from '@angular/material/icon';
import { OverlayModule } from '@angular/cdk/overlay';

import { NgxGalleryActionComponent } from './lib/ngx-gallery-action.component';
import { NgxGalleryArrowsComponent } from './lib/ngx-gallery-arrows.component';
import { NgxGalleryBulletsComponent } from './lib/ngx-gallery-bullets.component';
import { NgxGalleryImageComponent } from './lib/ngx-gallery-image.component';
import { NgxGalleryThumbnailsComponent } from './lib/ngx-gallery-thumbnails.component';
import { NgxGalleryPreviewComponent } from './lib/ngx-gallery-preview.component';
import { NgxGalleryComponent } from './lib/ngx-gallery.component';

export * from './lib/ngx-gallery.component';
export * from './lib/ngx-gallery-action.component';
export * from './lib/ngx-gallery-image.component';
export * from './lib/ngx-gallery-thumbnails.component';
export * from './lib/ngx-gallery-preview.component';
export * from './lib/ngx-gallery-arrows.component';
export * from './lib/ngx-gallery-bullets.component';
export * from './lib/ngx-gallery-options.model';
export * from './lib/ngx-gallery-image.model';
export * from './lib/ngx-gallery-animation.model';
export * from './lib/ngx-gallery-helper.service';
export * from './lib/ngx-gallery-image-size.model';
export * from './lib/ngx-gallery-layout.model';
export * from './lib/ngx-gallery-order.model';
export * from './lib/ngx-gallery-ordered-image.model';
export * from './lib/ngx-gallery-action.model';

@Injectable({
  providedIn: 'root'
})
export class CustomHammerConfig extends HammerGestureConfig  {
    overrides = <any>{
        'pinch': { enable: false },
        'rotate': { enable: false }
    };
}

@NgModule({
    imports: [
        CommonModule,
		OverlayModule,
        MatIconModule
    ],
    declarations: [
        NgxGalleryActionComponent,
        NgxGalleryArrowsComponent,
        NgxGalleryBulletsComponent,
        NgxGalleryImageComponent,
        NgxGalleryThumbnailsComponent,
        NgxGalleryPreviewComponent,
        NgxGalleryComponent
    ],
    exports: [
        NgxGalleryComponent
    ],
    providers: [
        { provide: HAMMER_GESTURE_CONFIG, useClass: CustomHammerConfig }
    ]
})
export class NgxGalleryModule {}
