/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter, } from '@angular/core';
var NgxGalleryArrowsComponent = /** @class */ (function () {
    function NgxGalleryArrowsComponent() {
        this.onPrevClick = new EventEmitter();
        this.onNextClick = new EventEmitter();
    }
    /**
     * @return {?}
     */
    NgxGalleryArrowsComponent.prototype.handlePrevClick = /**
     * @return {?}
     */
    function () {
        this.onPrevClick.emit();
    };
    /**
     * @return {?}
     */
    NgxGalleryArrowsComponent.prototype.handleNextClick = /**
     * @return {?}
     */
    function () {
        this.onNextClick.emit();
    };
    NgxGalleryArrowsComponent.decorators = [
        { type: Component, args: [{
                    selector: 'ngx-gallery-arrows',
                    template: "\n        <div class=\"ngx-gallery-arrow-wrapper ngx-gallery-arrow-left\">\n            <div class=\"ngx-gallery-icon ngx-gallery-arrow\" aria-hidden=\"true\" (click)=\"handlePrevClick()\" [class.ngx-gallery-disabled]=\"prevDisabled\">\n                <!--<i class=\"ngx-gallery-icon-content {{arrowPrevIcon}}\"></i>-->\n              <mat-icon class=\"ngx-gallery-icon-content\">{{ arrowPrevIcon }}</mat-icon>\n            </div>\n        </div>\n        <div class=\"ngx-gallery-arrow-wrapper ngx-gallery-arrow-right\">\n            <div class=\"ngx-gallery-icon ngx-gallery-arrow\" aria-hidden=\"true\" (click)=\"handleNextClick()\" [class.ngx-gallery-disabled]=\"nextDisabled\">\n                <!--<i class=\"ngx-gallery-icon-content {{arrowNextIcon}}\"></i>-->\n              <mat-icon class=\"ngx-gallery-icon-content\">{{ arrowNextIcon }}</mat-icon>\n            </div>\n        </div>\n    ",
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
    return NgxGalleryArrowsComponent;
}());
export { NgxGalleryArrowsComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWdhbGxlcnktYXJyb3dzLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25lby1jYXJvdXNlbC8iLCJzb3VyY2VzIjpbImxpYi9uZ3gtZ2FsbGVyeS1hcnJvd3MuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsWUFBWSxHQUFHLE1BQU0sZUFBZSxDQUFDO0FBRXhFO0lBQUE7UUF3QmMsZ0JBQVcsR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBQ2pDLGdCQUFXLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztJQVMvQyxDQUFDOzs7O0lBUEcsbURBQWU7OztJQUFmO1FBQ0ksSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUM1QixDQUFDOzs7O0lBRUQsbURBQWU7OztJQUFmO1FBQ0ksSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUM1QixDQUFDOztnQkFqQ0osU0FBUyxTQUFDO29CQUNQLFFBQVEsRUFBRSxvQkFBb0I7b0JBQzlCLFFBQVEsRUFBRSx1NEJBYVQ7O2lCQUVKOzs7K0JBRUksS0FBSzsrQkFDTCxLQUFLO2dDQUNMLEtBQUs7Z0NBQ0wsS0FBSzs4QkFFTCxNQUFNOzhCQUNOLE1BQU07O0lBU1gsZ0NBQUM7Q0FBQSxBQWxDRCxJQWtDQztTQWhCWSx5QkFBeUI7OztJQUNsQyxpREFBK0I7O0lBQy9CLGlEQUErQjs7SUFDL0Isa0RBQStCOztJQUMvQixrREFBK0I7O0lBRS9CLGdEQUEyQzs7SUFDM0MsZ0RBQTJDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIsIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnbmd4LWdhbGxlcnktYXJyb3dzJyxcbiAgICB0ZW1wbGF0ZTogYFxuICAgICAgICA8ZGl2IGNsYXNzPVwibmd4LWdhbGxlcnktYXJyb3ctd3JhcHBlciBuZ3gtZ2FsbGVyeS1hcnJvdy1sZWZ0XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwibmd4LWdhbGxlcnktaWNvbiBuZ3gtZ2FsbGVyeS1hcnJvd1wiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIChjbGljayk9XCJoYW5kbGVQcmV2Q2xpY2soKVwiIFtjbGFzcy5uZ3gtZ2FsbGVyeS1kaXNhYmxlZF09XCJwcmV2RGlzYWJsZWRcIj5cbiAgICAgICAgICAgICAgICA8IS0tPGkgY2xhc3M9XCJuZ3gtZ2FsbGVyeS1pY29uLWNvbnRlbnQge3thcnJvd1ByZXZJY29ufX1cIj48L2k+LS0+XG4gICAgICAgICAgICAgIDxtYXQtaWNvbiBjbGFzcz1cIm5neC1nYWxsZXJ5LWljb24tY29udGVudFwiPnt7IGFycm93UHJldkljb24gfX08L21hdC1pY29uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwibmd4LWdhbGxlcnktYXJyb3ctd3JhcHBlciBuZ3gtZ2FsbGVyeS1hcnJvdy1yaWdodFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm5neC1nYWxsZXJ5LWljb24gbmd4LWdhbGxlcnktYXJyb3dcIiBhcmlhLWhpZGRlbj1cInRydWVcIiAoY2xpY2spPVwiaGFuZGxlTmV4dENsaWNrKClcIiBbY2xhc3Mubmd4LWdhbGxlcnktZGlzYWJsZWRdPVwibmV4dERpc2FibGVkXCI+XG4gICAgICAgICAgICAgICAgPCEtLTxpIGNsYXNzPVwibmd4LWdhbGxlcnktaWNvbi1jb250ZW50IHt7YXJyb3dOZXh0SWNvbn19XCI+PC9pPi0tPlxuICAgICAgICAgICAgICA8bWF0LWljb24gY2xhc3M9XCJuZ3gtZ2FsbGVyeS1pY29uLWNvbnRlbnRcIj57eyBhcnJvd05leHRJY29uIH19PC9tYXQtaWNvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICBgLFxuICAgIHN0eWxlVXJsczogWycuL25neC1nYWxsZXJ5LWFycm93cy5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIE5neEdhbGxlcnlBcnJvd3NDb21wb25lbnQge1xuICAgIEBJbnB1dCgpIHByZXZEaXNhYmxlZDogYm9vbGVhbjtcbiAgICBASW5wdXQoKSBuZXh0RGlzYWJsZWQ6IGJvb2xlYW47XG4gICAgQElucHV0KCkgYXJyb3dQcmV2SWNvbjogc3RyaW5nO1xuICAgIEBJbnB1dCgpIGFycm93TmV4dEljb246IHN0cmluZztcblxuICAgIEBPdXRwdXQoKSBvblByZXZDbGljayA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgICBAT3V0cHV0KCkgb25OZXh0Q2xpY2sgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgICBoYW5kbGVQcmV2Q2xpY2soKTogdm9pZCB7XG4gICAgICAgIHRoaXMub25QcmV2Q2xpY2suZW1pdCgpO1xuICAgIH1cblxuICAgIGhhbmRsZU5leHRDbGljaygpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5vbk5leHRDbGljay5lbWl0KCk7XG4gICAgfVxufVxuIl19