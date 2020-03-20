/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule, Injectable } from '@angular/core';
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
import * as i0 from "@angular/core";
export { NgxGalleryComponent } from './lib/ngx-gallery.component';
export { NgxGalleryActionComponent } from './lib/ngx-gallery-action.component';
export { NgxGalleryImageComponent } from './lib/ngx-gallery-image.component';
export { NgxGalleryThumbnailsComponent } from './lib/ngx-gallery-thumbnails.component';
export { NgxGalleryPreviewComponent } from './lib/ngx-gallery-preview.component';
export { NgxGalleryArrowsComponent } from './lib/ngx-gallery-arrows.component';
export { NgxGalleryBulletsComponent } from './lib/ngx-gallery-bullets.component';
export { NgxGalleryOptions } from './lib/ngx-gallery-options.model';
export { NgxGalleryImage } from './lib/ngx-gallery-image.model';
export { NgxGalleryAnimation } from './lib/ngx-gallery-animation.model';
export { NgxGalleryHelperService } from './lib/ngx-gallery-helper.service';
export { NgxGalleryImageSize } from './lib/ngx-gallery-image-size.model';
export { NgxGalleryLayout } from './lib/ngx-gallery-layout.model';
export { NgxGalleryOrder } from './lib/ngx-gallery-order.model';
export { NgxGalleryOrderedImage } from './lib/ngx-gallery-ordered-image.model';
export { NgxGalleryAction } from './lib/ngx-gallery-action.model';
export class CustomHammerConfig extends HammerGestureConfig {
    constructor() {
        super(...arguments);
        this.overrides = (/** @type {?} */ ({
            'pinch': { enable: false },
            'rotate': { enable: false }
        }));
    }
}
CustomHammerConfig.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */ CustomHammerConfig.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function CustomHammerConfig_Factory() { return new CustomHammerConfig(); }, token: CustomHammerConfig, providedIn: "root" });
if (false) {
    /** @type {?} */
    CustomHammerConfig.prototype.overrides;
}
export class NgxGalleryModule {
}
NgxGalleryModule.decorators = [
    { type: NgModule, args: [{
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
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZW8tY2Fyb3VzZWwvIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFFBQVEsRUFBdUIsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzFFLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsbUJBQW1CLEVBQUUscUJBQXFCLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUN2RixPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDdkQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBRXJELE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLG9DQUFvQyxDQUFDO0FBQy9FLE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLG9DQUFvQyxDQUFDO0FBQy9FLE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLHFDQUFxQyxDQUFDO0FBQ2pGLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBQzdFLE9BQU8sRUFBRSw2QkFBNkIsRUFBRSxNQUFNLHdDQUF3QyxDQUFDO0FBQ3ZGLE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLHFDQUFxQyxDQUFDO0FBQ2pGLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLDZCQUE2QixDQUFDOztBQUVsRSxvQ0FBYyw2QkFBNkIsQ0FBQztBQUM1QywwQ0FBYyxvQ0FBb0MsQ0FBQztBQUNuRCx5Q0FBYyxtQ0FBbUMsQ0FBQztBQUNsRCw4Q0FBYyx3Q0FBd0MsQ0FBQztBQUN2RCwyQ0FBYyxxQ0FBcUMsQ0FBQztBQUNwRCwwQ0FBYyxvQ0FBb0MsQ0FBQztBQUNuRCwyQ0FBYyxxQ0FBcUMsQ0FBQztBQUNwRCxrQ0FBYyxpQ0FBaUMsQ0FBQztBQUNoRCxnQ0FBYywrQkFBK0IsQ0FBQztBQUM5QyxvQ0FBYyxtQ0FBbUMsQ0FBQztBQUNsRCx3Q0FBYyxrQ0FBa0MsQ0FBQztBQUNqRCxvQ0FBYyxvQ0FBb0MsQ0FBQztBQUNuRCxpQ0FBYyxnQ0FBZ0MsQ0FBQztBQUMvQyxnQ0FBYywrQkFBK0IsQ0FBQztBQUM5Qyx1Q0FBYyx1Q0FBdUMsQ0FBQztBQUN0RCxpQ0FBYyxnQ0FBZ0MsQ0FBQztBQUsvQyxNQUFNLE9BQU8sa0JBQW1CLFNBQVEsbUJBQW1CO0lBSDNEOztRQUlJLGNBQVMsR0FBRyxtQkFBSztZQUNiLE9BQU8sRUFBRSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUU7WUFDMUIsUUFBUSxFQUFFLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRTtTQUM5QixFQUFBLENBQUM7S0FDTDs7O1lBUkEsVUFBVSxTQUFDO2dCQUNWLFVBQVUsRUFBRSxNQUFNO2FBQ25COzs7OztJQUVHLHVDQUdFOztBQXlCTixNQUFNLE9BQU8sZ0JBQWdCOzs7WUF0QjVCLFFBQVEsU0FBQztnQkFDTixPQUFPLEVBQUU7b0JBQ0wsWUFBWTtvQkFDbEIsYUFBYTtvQkFDUCxhQUFhO2lCQUNoQjtnQkFDRCxZQUFZLEVBQUU7b0JBQ1YseUJBQXlCO29CQUN6Qix5QkFBeUI7b0JBQ3pCLDBCQUEwQjtvQkFDMUIsd0JBQXdCO29CQUN4Qiw2QkFBNkI7b0JBQzdCLDBCQUEwQjtvQkFDMUIsbUJBQW1CO2lCQUN0QjtnQkFDRCxPQUFPLEVBQUU7b0JBQ0wsbUJBQW1CO2lCQUN0QjtnQkFDRCxTQUFTLEVBQUU7b0JBQ1AsRUFBRSxPQUFPLEVBQUUscUJBQXFCLEVBQUUsUUFBUSxFQUFFLGtCQUFrQixFQUFFO2lCQUNuRTthQUNKIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUsIE1vZHVsZVdpdGhQcm92aWRlcnMsIEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBIYW1tZXJHZXN0dXJlQ29uZmlnLCBIQU1NRVJfR0VTVFVSRV9DT05GSUcgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcbmltcG9ydCB7IE1hdEljb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9pY29uJztcbmltcG9ydCB7IE92ZXJsYXlNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jZGsvb3ZlcmxheSc7XG5cbmltcG9ydCB7IE5neEdhbGxlcnlBY3Rpb25Db21wb25lbnQgfSBmcm9tICcuL2xpYi9uZ3gtZ2FsbGVyeS1hY3Rpb24uY29tcG9uZW50JztcbmltcG9ydCB7IE5neEdhbGxlcnlBcnJvd3NDb21wb25lbnQgfSBmcm9tICcuL2xpYi9uZ3gtZ2FsbGVyeS1hcnJvd3MuY29tcG9uZW50JztcbmltcG9ydCB7IE5neEdhbGxlcnlCdWxsZXRzQ29tcG9uZW50IH0gZnJvbSAnLi9saWIvbmd4LWdhbGxlcnktYnVsbGV0cy5jb21wb25lbnQnO1xuaW1wb3J0IHsgTmd4R2FsbGVyeUltYWdlQ29tcG9uZW50IH0gZnJvbSAnLi9saWIvbmd4LWdhbGxlcnktaW1hZ2UuY29tcG9uZW50JztcbmltcG9ydCB7IE5neEdhbGxlcnlUaHVtYm5haWxzQ29tcG9uZW50IH0gZnJvbSAnLi9saWIvbmd4LWdhbGxlcnktdGh1bWJuYWlscy5jb21wb25lbnQnO1xuaW1wb3J0IHsgTmd4R2FsbGVyeVByZXZpZXdDb21wb25lbnQgfSBmcm9tICcuL2xpYi9uZ3gtZ2FsbGVyeS1wcmV2aWV3LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBOZ3hHYWxsZXJ5Q29tcG9uZW50IH0gZnJvbSAnLi9saWIvbmd4LWdhbGxlcnkuY29tcG9uZW50JztcblxuZXhwb3J0ICogZnJvbSAnLi9saWIvbmd4LWdhbGxlcnkuY29tcG9uZW50JztcbmV4cG9ydCAqIGZyb20gJy4vbGliL25neC1nYWxsZXJ5LWFjdGlvbi5jb21wb25lbnQnO1xuZXhwb3J0ICogZnJvbSAnLi9saWIvbmd4LWdhbGxlcnktaW1hZ2UuY29tcG9uZW50JztcbmV4cG9ydCAqIGZyb20gJy4vbGliL25neC1nYWxsZXJ5LXRodW1ibmFpbHMuY29tcG9uZW50JztcbmV4cG9ydCAqIGZyb20gJy4vbGliL25neC1nYWxsZXJ5LXByZXZpZXcuY29tcG9uZW50JztcbmV4cG9ydCAqIGZyb20gJy4vbGliL25neC1nYWxsZXJ5LWFycm93cy5jb21wb25lbnQnO1xuZXhwb3J0ICogZnJvbSAnLi9saWIvbmd4LWdhbGxlcnktYnVsbGV0cy5jb21wb25lbnQnO1xuZXhwb3J0ICogZnJvbSAnLi9saWIvbmd4LWdhbGxlcnktb3B0aW9ucy5tb2RlbCc7XG5leHBvcnQgKiBmcm9tICcuL2xpYi9uZ3gtZ2FsbGVyeS1pbWFnZS5tb2RlbCc7XG5leHBvcnQgKiBmcm9tICcuL2xpYi9uZ3gtZ2FsbGVyeS1hbmltYXRpb24ubW9kZWwnO1xuZXhwb3J0ICogZnJvbSAnLi9saWIvbmd4LWdhbGxlcnktaGVscGVyLnNlcnZpY2UnO1xuZXhwb3J0ICogZnJvbSAnLi9saWIvbmd4LWdhbGxlcnktaW1hZ2Utc2l6ZS5tb2RlbCc7XG5leHBvcnQgKiBmcm9tICcuL2xpYi9uZ3gtZ2FsbGVyeS1sYXlvdXQubW9kZWwnO1xuZXhwb3J0ICogZnJvbSAnLi9saWIvbmd4LWdhbGxlcnktb3JkZXIubW9kZWwnO1xuZXhwb3J0ICogZnJvbSAnLi9saWIvbmd4LWdhbGxlcnktb3JkZXJlZC1pbWFnZS5tb2RlbCc7XG5leHBvcnQgKiBmcm9tICcuL2xpYi9uZ3gtZ2FsbGVyeS1hY3Rpb24ubW9kZWwnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBDdXN0b21IYW1tZXJDb25maWcgZXh0ZW5kcyBIYW1tZXJHZXN0dXJlQ29uZmlnICB7XG4gICAgb3ZlcnJpZGVzID0gPGFueT57XG4gICAgICAgICdwaW5jaCc6IHsgZW5hYmxlOiBmYWxzZSB9LFxuICAgICAgICAncm90YXRlJzogeyBlbmFibGU6IGZhbHNlIH1cbiAgICB9O1xufVxuXG5ATmdNb2R1bGUoe1xuICAgIGltcG9ydHM6IFtcbiAgICAgICAgQ29tbW9uTW9kdWxlLFxuXHRcdE92ZXJsYXlNb2R1bGUsXG4gICAgICAgIE1hdEljb25Nb2R1bGVcbiAgICBdLFxuICAgIGRlY2xhcmF0aW9uczogW1xuICAgICAgICBOZ3hHYWxsZXJ5QWN0aW9uQ29tcG9uZW50LFxuICAgICAgICBOZ3hHYWxsZXJ5QXJyb3dzQ29tcG9uZW50LFxuICAgICAgICBOZ3hHYWxsZXJ5QnVsbGV0c0NvbXBvbmVudCxcbiAgICAgICAgTmd4R2FsbGVyeUltYWdlQ29tcG9uZW50LFxuICAgICAgICBOZ3hHYWxsZXJ5VGh1bWJuYWlsc0NvbXBvbmVudCxcbiAgICAgICAgTmd4R2FsbGVyeVByZXZpZXdDb21wb25lbnQsXG4gICAgICAgIE5neEdhbGxlcnlDb21wb25lbnRcbiAgICBdLFxuICAgIGV4cG9ydHM6IFtcbiAgICAgICAgTmd4R2FsbGVyeUNvbXBvbmVudFxuICAgIF0sXG4gICAgcHJvdmlkZXJzOiBbXG4gICAgICAgIHsgcHJvdmlkZTogSEFNTUVSX0dFU1RVUkVfQ09ORklHLCB1c2VDbGFzczogQ3VzdG9tSGFtbWVyQ29uZmlnIH1cbiAgICBdXG59KVxuZXhwb3J0IGNsYXNzIE5neEdhbGxlcnlNb2R1bGUge31cbiJdfQ==