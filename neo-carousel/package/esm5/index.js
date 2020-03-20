/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
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
var CustomHammerConfig = /** @class */ (function (_super) {
    tslib_1.__extends(CustomHammerConfig, _super);
    function CustomHammerConfig() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.overrides = (/** @type {?} */ ({
            'pinch': { enable: false },
            'rotate': { enable: false }
        }));
        return _this;
    }
    CustomHammerConfig.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */ CustomHammerConfig.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function CustomHammerConfig_Factory() { return new CustomHammerConfig(); }, token: CustomHammerConfig, providedIn: "root" });
    return CustomHammerConfig;
}(HammerGestureConfig));
export { CustomHammerConfig };
if (false) {
    /** @type {?} */
    CustomHammerConfig.prototype.overrides;
}
var NgxGalleryModule = /** @class */ (function () {
    function NgxGalleryModule() {
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
    return NgxGalleryModule;
}());
export { NgxGalleryModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZW8tY2Fyb3VzZWwvIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQXVCLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMxRSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLG1CQUFtQixFQUFFLHFCQUFxQixFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDdkYsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3ZELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUVyRCxPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSxvQ0FBb0MsQ0FBQztBQUMvRSxPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSxvQ0FBb0MsQ0FBQztBQUMvRSxPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSxxQ0FBcUMsQ0FBQztBQUNqRixPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUM3RSxPQUFPLEVBQUUsNkJBQTZCLEVBQUUsTUFBTSx3Q0FBd0MsQ0FBQztBQUN2RixPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSxxQ0FBcUMsQ0FBQztBQUNqRixPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQzs7QUFFbEUsb0NBQWMsNkJBQTZCLENBQUM7QUFDNUMsMENBQWMsb0NBQW9DLENBQUM7QUFDbkQseUNBQWMsbUNBQW1DLENBQUM7QUFDbEQsOENBQWMsd0NBQXdDLENBQUM7QUFDdkQsMkNBQWMscUNBQXFDLENBQUM7QUFDcEQsMENBQWMsb0NBQW9DLENBQUM7QUFDbkQsMkNBQWMscUNBQXFDLENBQUM7QUFDcEQsa0NBQWMsaUNBQWlDLENBQUM7QUFDaEQsZ0NBQWMsK0JBQStCLENBQUM7QUFDOUMsb0NBQWMsbUNBQW1DLENBQUM7QUFDbEQsd0NBQWMsa0NBQWtDLENBQUM7QUFDakQsb0NBQWMsb0NBQW9DLENBQUM7QUFDbkQsaUNBQWMsZ0NBQWdDLENBQUM7QUFDL0MsZ0NBQWMsK0JBQStCLENBQUM7QUFDOUMsdUNBQWMsdUNBQXVDLENBQUM7QUFDdEQsaUNBQWMsZ0NBQWdDLENBQUM7QUFFL0M7SUFHd0MsOENBQW1CO0lBSDNEO1FBQUEscUVBUUM7UUFKRyxlQUFTLEdBQUcsbUJBQUs7WUFDYixPQUFPLEVBQUUsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFO1lBQzFCLFFBQVEsRUFBRSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUU7U0FDOUIsRUFBQSxDQUFDOztLQUNMOztnQkFSQSxVQUFVLFNBQUM7b0JBQ1YsVUFBVSxFQUFFLE1BQU07aUJBQ25COzs7NkJBakNEO0NBdUNDLEFBUkQsQ0FHd0MsbUJBQW1CLEdBSzFEO1NBTFksa0JBQWtCOzs7SUFDM0IsdUNBR0U7O0FBR047SUFBQTtJQXNCK0IsQ0FBQzs7Z0JBdEIvQixRQUFRLFNBQUM7b0JBQ04sT0FBTyxFQUFFO3dCQUNMLFlBQVk7d0JBQ2xCLGFBQWE7d0JBQ1AsYUFBYTtxQkFDaEI7b0JBQ0QsWUFBWSxFQUFFO3dCQUNWLHlCQUF5Qjt3QkFDekIseUJBQXlCO3dCQUN6QiwwQkFBMEI7d0JBQzFCLHdCQUF3Qjt3QkFDeEIsNkJBQTZCO3dCQUM3QiwwQkFBMEI7d0JBQzFCLG1CQUFtQjtxQkFDdEI7b0JBQ0QsT0FBTyxFQUFFO3dCQUNMLG1CQUFtQjtxQkFDdEI7b0JBQ0QsU0FBUyxFQUFFO3dCQUNQLEVBQUUsT0FBTyxFQUFFLHFCQUFxQixFQUFFLFFBQVEsRUFBRSxrQkFBa0IsRUFBRTtxQkFDbkU7aUJBQ0o7O0lBQzhCLHVCQUFDO0NBQUEsQUF0QmhDLElBc0JnQztTQUFuQixnQkFBZ0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSwgTW9kdWxlV2l0aFByb3ZpZGVycywgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IEhhbW1lckdlc3R1cmVDb25maWcsIEhBTU1FUl9HRVNUVVJFX0NPTkZJRyB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xuaW1wb3J0IHsgTWF0SWNvbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2ljb24nO1xuaW1wb3J0IHsgT3ZlcmxheU1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9vdmVybGF5JztcblxuaW1wb3J0IHsgTmd4R2FsbGVyeUFjdGlvbkNvbXBvbmVudCB9IGZyb20gJy4vbGliL25neC1nYWxsZXJ5LWFjdGlvbi5jb21wb25lbnQnO1xuaW1wb3J0IHsgTmd4R2FsbGVyeUFycm93c0NvbXBvbmVudCB9IGZyb20gJy4vbGliL25neC1nYWxsZXJ5LWFycm93cy5jb21wb25lbnQnO1xuaW1wb3J0IHsgTmd4R2FsbGVyeUJ1bGxldHNDb21wb25lbnQgfSBmcm9tICcuL2xpYi9uZ3gtZ2FsbGVyeS1idWxsZXRzLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBOZ3hHYWxsZXJ5SW1hZ2VDb21wb25lbnQgfSBmcm9tICcuL2xpYi9uZ3gtZ2FsbGVyeS1pbWFnZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgTmd4R2FsbGVyeVRodW1ibmFpbHNDb21wb25lbnQgfSBmcm9tICcuL2xpYi9uZ3gtZ2FsbGVyeS10aHVtYm5haWxzLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBOZ3hHYWxsZXJ5UHJldmlld0NvbXBvbmVudCB9IGZyb20gJy4vbGliL25neC1nYWxsZXJ5LXByZXZpZXcuY29tcG9uZW50JztcbmltcG9ydCB7IE5neEdhbGxlcnlDb21wb25lbnQgfSBmcm9tICcuL2xpYi9uZ3gtZ2FsbGVyeS5jb21wb25lbnQnO1xuXG5leHBvcnQgKiBmcm9tICcuL2xpYi9uZ3gtZ2FsbGVyeS5jb21wb25lbnQnO1xuZXhwb3J0ICogZnJvbSAnLi9saWIvbmd4LWdhbGxlcnktYWN0aW9uLmNvbXBvbmVudCc7XG5leHBvcnQgKiBmcm9tICcuL2xpYi9uZ3gtZ2FsbGVyeS1pbWFnZS5jb21wb25lbnQnO1xuZXhwb3J0ICogZnJvbSAnLi9saWIvbmd4LWdhbGxlcnktdGh1bWJuYWlscy5jb21wb25lbnQnO1xuZXhwb3J0ICogZnJvbSAnLi9saWIvbmd4LWdhbGxlcnktcHJldmlldy5jb21wb25lbnQnO1xuZXhwb3J0ICogZnJvbSAnLi9saWIvbmd4LWdhbGxlcnktYXJyb3dzLmNvbXBvbmVudCc7XG5leHBvcnQgKiBmcm9tICcuL2xpYi9uZ3gtZ2FsbGVyeS1idWxsZXRzLmNvbXBvbmVudCc7XG5leHBvcnQgKiBmcm9tICcuL2xpYi9uZ3gtZ2FsbGVyeS1vcHRpb25zLm1vZGVsJztcbmV4cG9ydCAqIGZyb20gJy4vbGliL25neC1nYWxsZXJ5LWltYWdlLm1vZGVsJztcbmV4cG9ydCAqIGZyb20gJy4vbGliL25neC1nYWxsZXJ5LWFuaW1hdGlvbi5tb2RlbCc7XG5leHBvcnQgKiBmcm9tICcuL2xpYi9uZ3gtZ2FsbGVyeS1oZWxwZXIuc2VydmljZSc7XG5leHBvcnQgKiBmcm9tICcuL2xpYi9uZ3gtZ2FsbGVyeS1pbWFnZS1zaXplLm1vZGVsJztcbmV4cG9ydCAqIGZyb20gJy4vbGliL25neC1nYWxsZXJ5LWxheW91dC5tb2RlbCc7XG5leHBvcnQgKiBmcm9tICcuL2xpYi9uZ3gtZ2FsbGVyeS1vcmRlci5tb2RlbCc7XG5leHBvcnQgKiBmcm9tICcuL2xpYi9uZ3gtZ2FsbGVyeS1vcmRlcmVkLWltYWdlLm1vZGVsJztcbmV4cG9ydCAqIGZyb20gJy4vbGliL25neC1nYWxsZXJ5LWFjdGlvbi5tb2RlbCc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIEN1c3RvbUhhbW1lckNvbmZpZyBleHRlbmRzIEhhbW1lckdlc3R1cmVDb25maWcgIHtcbiAgICBvdmVycmlkZXMgPSA8YW55PntcbiAgICAgICAgJ3BpbmNoJzogeyBlbmFibGU6IGZhbHNlIH0sXG4gICAgICAgICdyb3RhdGUnOiB7IGVuYWJsZTogZmFsc2UgfVxuICAgIH07XG59XG5cbkBOZ01vZHVsZSh7XG4gICAgaW1wb3J0czogW1xuICAgICAgICBDb21tb25Nb2R1bGUsXG5cdFx0T3ZlcmxheU1vZHVsZSxcbiAgICAgICAgTWF0SWNvbk1vZHVsZVxuICAgIF0sXG4gICAgZGVjbGFyYXRpb25zOiBbXG4gICAgICAgIE5neEdhbGxlcnlBY3Rpb25Db21wb25lbnQsXG4gICAgICAgIE5neEdhbGxlcnlBcnJvd3NDb21wb25lbnQsXG4gICAgICAgIE5neEdhbGxlcnlCdWxsZXRzQ29tcG9uZW50LFxuICAgICAgICBOZ3hHYWxsZXJ5SW1hZ2VDb21wb25lbnQsXG4gICAgICAgIE5neEdhbGxlcnlUaHVtYm5haWxzQ29tcG9uZW50LFxuICAgICAgICBOZ3hHYWxsZXJ5UHJldmlld0NvbXBvbmVudCxcbiAgICAgICAgTmd4R2FsbGVyeUNvbXBvbmVudFxuICAgIF0sXG4gICAgZXhwb3J0czogW1xuICAgICAgICBOZ3hHYWxsZXJ5Q29tcG9uZW50XG4gICAgXSxcbiAgICBwcm92aWRlcnM6IFtcbiAgICAgICAgeyBwcm92aWRlOiBIQU1NRVJfR0VTVFVSRV9DT05GSUcsIHVzZUNsYXNzOiBDdXN0b21IYW1tZXJDb25maWcgfVxuICAgIF1cbn0pXG5leHBvcnQgY2xhc3MgTmd4R2FsbGVyeU1vZHVsZSB7fVxuIl19