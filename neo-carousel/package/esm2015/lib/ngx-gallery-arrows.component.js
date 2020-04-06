/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter, } from '@angular/core';
export class NgxGalleryArrowsComponent {
    constructor() {
        this.onPrevClick = new EventEmitter();
        this.onNextClick = new EventEmitter();
    }
    /**
     * @return {?}
     */
    handlePrevClick() {
        this.onPrevClick.emit();
    }
    /**
     * @return {?}
     */
    handleNextClick() {
        this.onNextClick.emit();
    }
}
NgxGalleryArrowsComponent.decorators = [
    { type: Component, args: [{
                selector: 'ngx-gallery-arrows',
                template: `
        <div class="ngx-gallery-arrow-wrapper ngx-gallery-arrow-left">
            <div class="ngx-gallery-icon ngx-gallery-arrow" aria-hidden="true" (click)="handlePrevClick()" [class.ngx-gallery-disabled]="prevDisabled">
                <!--<i class="ngx-gallery-icon-content {{arrowPrevIcon}}"></i>-->
              <mat-icon class="ngx-gallery-icon-content">{{ arrowPrevIcon }}</mat-icon>
            </div>
        </div>
        <div class="ngx-gallery-arrow-wrapper ngx-gallery-arrow-right">
            <div class="ngx-gallery-icon ngx-gallery-arrow" aria-hidden="true" (click)="handleNextClick()" [class.ngx-gallery-disabled]="nextDisabled">
                <!--<i class="ngx-gallery-icon-content {{arrowNextIcon}}"></i>-->
              <mat-icon class="ngx-gallery-icon-content">{{ arrowNextIcon }}</mat-icon>
            </div>
        </div>
    `,
                styles: [".ngx-gallery-arrow-wrapper{position:absolute;height:100%;width:1px;display:table;z-index:2000;table-layout:fixed}.ngx-gallery-arrow-left{left:0}.ngx-gallery-arrow-right{right:0}.ngx-gallery-arrow{top:50%;transform:translateY(-50%);cursor:pointer}.ngx-gallery-arrow.ngx-gallery-disabled{opacity:.6;cursor:default}.ngx-gallery-arrow-left .ngx-gallery-arrow{left:10px}.ngx-gallery-arrow-right .ngx-gallery-arrow{right:10px}"]
            }] }
];
NgxGalleryArrowsComponent.propDecorators = {
    prevDisabled: [{ type: Input }],
    nextDisabled: [{ type: Input }],
    arrowPrevIcon: [{ type: Input }],
    arrowNextIcon: [{ type: Input }],
    onPrevClick: [{ type: Output }],
    onNextClick: [{ type: Output }]
};
if (false) {
    /** @type {?} */
    NgxGalleryArrowsComponent.prototype.prevDisabled;
    /** @type {?} */
    NgxGalleryArrowsComponent.prototype.nextDisabled;
    /** @type {?} */
    NgxGalleryArrowsComponent.prototype.arrowPrevIcon;
    /** @type {?} */
    NgxGalleryArrowsComponent.prototype.arrowNextIcon;
    /** @type {?} */
    NgxGalleryArrowsComponent.prototype.onPrevClick;
    /** @type {?} */
    NgxGalleryArrowsComponent.prototype.onNextClick;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWdhbGxlcnktYXJyb3dzLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25lby1jYXJvdXNlbC8iLCJzb3VyY2VzIjpbImxpYi9uZ3gtZ2FsbGVyeS1hcnJvd3MuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsWUFBWSxHQUFHLE1BQU0sZUFBZSxDQUFDO0FBb0J4RSxNQUFNLE9BQU8seUJBQXlCO0lBbEJ0QztRQXdCYyxnQkFBVyxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFDakMsZ0JBQVcsR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO0lBUy9DLENBQUM7Ozs7SUFQRyxlQUFlO1FBQ1gsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUM1QixDQUFDOzs7O0lBRUQsZUFBZTtRQUNYLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDNUIsQ0FBQzs7O1lBakNKLFNBQVMsU0FBQztnQkFDUCxRQUFRLEVBQUUsb0JBQW9CO2dCQUM5QixRQUFRLEVBQUU7Ozs7Ozs7Ozs7Ozs7S0FhVDs7YUFFSjs7OzJCQUVJLEtBQUs7MkJBQ0wsS0FBSzs0QkFDTCxLQUFLOzRCQUNMLEtBQUs7MEJBRUwsTUFBTTswQkFDTixNQUFNOzs7O0lBTlAsaURBQStCOztJQUMvQixpREFBK0I7O0lBQy9CLGtEQUErQjs7SUFDL0Isa0RBQStCOztJQUUvQixnREFBMkM7O0lBQzNDLGdEQUEyQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyLCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ25neC1nYWxsZXJ5LWFycm93cycsXG4gICAgdGVtcGxhdGU6IGBcbiAgICAgICAgPGRpdiBjbGFzcz1cIm5neC1nYWxsZXJ5LWFycm93LXdyYXBwZXIgbmd4LWdhbGxlcnktYXJyb3ctbGVmdFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm5neC1nYWxsZXJ5LWljb24gbmd4LWdhbGxlcnktYXJyb3dcIiBhcmlhLWhpZGRlbj1cInRydWVcIiAoY2xpY2spPVwiaGFuZGxlUHJldkNsaWNrKClcIiBbY2xhc3Mubmd4LWdhbGxlcnktZGlzYWJsZWRdPVwicHJldkRpc2FibGVkXCI+XG4gICAgICAgICAgICAgICAgPCEtLTxpIGNsYXNzPVwibmd4LWdhbGxlcnktaWNvbi1jb250ZW50IHt7YXJyb3dQcmV2SWNvbn19XCI+PC9pPi0tPlxuICAgICAgICAgICAgICA8bWF0LWljb24gY2xhc3M9XCJuZ3gtZ2FsbGVyeS1pY29uLWNvbnRlbnRcIj57eyBhcnJvd1ByZXZJY29uIH19PC9tYXQtaWNvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cIm5neC1nYWxsZXJ5LWFycm93LXdyYXBwZXIgbmd4LWdhbGxlcnktYXJyb3ctcmlnaHRcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJuZ3gtZ2FsbGVyeS1pY29uIG5neC1nYWxsZXJ5LWFycm93XCIgYXJpYS1oaWRkZW49XCJ0cnVlXCIgKGNsaWNrKT1cImhhbmRsZU5leHRDbGljaygpXCIgW2NsYXNzLm5neC1nYWxsZXJ5LWRpc2FibGVkXT1cIm5leHREaXNhYmxlZFwiPlxuICAgICAgICAgICAgICAgIDwhLS08aSBjbGFzcz1cIm5neC1nYWxsZXJ5LWljb24tY29udGVudCB7e2Fycm93TmV4dEljb259fVwiPjwvaT4tLT5cbiAgICAgICAgICAgICAgPG1hdC1pY29uIGNsYXNzPVwibmd4LWdhbGxlcnktaWNvbi1jb250ZW50XCI+e3sgYXJyb3dOZXh0SWNvbiB9fTwvbWF0LWljb24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgYCxcbiAgICBzdHlsZVVybHM6IFsnLi9uZ3gtZ2FsbGVyeS1hcnJvd3MuY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBOZ3hHYWxsZXJ5QXJyb3dzQ29tcG9uZW50IHtcbiAgICBASW5wdXQoKSBwcmV2RGlzYWJsZWQ6IGJvb2xlYW47XG4gICAgQElucHV0KCkgbmV4dERpc2FibGVkOiBib29sZWFuO1xuICAgIEBJbnB1dCgpIGFycm93UHJldkljb246IHN0cmluZztcbiAgICBASW5wdXQoKSBhcnJvd05leHRJY29uOiBzdHJpbmc7XG5cbiAgICBAT3V0cHV0KCkgb25QcmV2Q2xpY2sgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gICAgQE91dHB1dCgpIG9uTmV4dENsaWNrID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gICAgaGFuZGxlUHJldkNsaWNrKCk6IHZvaWQge1xuICAgICAgICB0aGlzLm9uUHJldkNsaWNrLmVtaXQoKTtcbiAgICB9XG5cbiAgICBoYW5kbGVOZXh0Q2xpY2soKTogdm9pZCB7XG4gICAgICAgIHRoaXMub25OZXh0Q2xpY2suZW1pdCgpO1xuICAgIH1cbn1cbiJdfQ==