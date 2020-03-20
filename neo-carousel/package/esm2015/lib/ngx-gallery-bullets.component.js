/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter, } from '@angular/core';
export class NgxGalleryBulletsComponent {
    constructor() {
        this.active = 0;
        this.onChange = new EventEmitter();
    }
    /**
     * @return {?}
     */
    getBullets() {
        return Array(this.count);
    }
    /**
     * @param {?} event
     * @param {?} index
     * @return {?}
     */
    handleChange(event, index) {
        this.onChange.emit(index);
    }
}
NgxGalleryBulletsComponent.decorators = [
    { type: Component, args: [{
                selector: 'ngx-gallery-bullets',
                template: `
        <div class="ngx-gallery-bullet" *ngFor="let bullet of getBullets(); let i = index;" (click)="handleChange($event, i)" [ngClass]="{ 'ngx-gallery-active': i == active }"></div>
    `,
                styles: [":host{position:absolute;z-index:2000;display:inline-flex;left:50%;transform:translateX(-50%);bottom:0;padding:10px}.ngx-gallery-bullet{width:10px;height:10px;border-radius:50%;cursor:pointer;background:#fff}.ngx-gallery-bullet:not(:first-child){margin-left:5px}.ngx-gallery-bullet.ngx-gallery-active,.ngx-gallery-bullet:hover{background:#000}"]
            }] }
];
NgxGalleryBulletsComponent.propDecorators = {
    count: [{ type: Input }],
    active: [{ type: Input }],
    onChange: [{ type: Output }]
};
if (false) {
    /** @type {?} */
    NgxGalleryBulletsComponent.prototype.count;
    /** @type {?} */
    NgxGalleryBulletsComponent.prototype.active;
    /** @type {?} */
    NgxGalleryBulletsComponent.prototype.onChange;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWdhbGxlcnktYnVsbGV0cy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZW8tY2Fyb3VzZWwvIiwic291cmNlcyI6WyJsaWIvbmd4LWdhbGxlcnktYnVsbGV0cy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxZQUFZLEdBQUcsTUFBTSxlQUFlLENBQUM7QUFTeEUsTUFBTSxPQUFPLDBCQUEwQjtJQVB2QztRQVNhLFdBQU0sR0FBVyxDQUFDLENBQUM7UUFFbEIsYUFBUSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7SUFTNUMsQ0FBQzs7OztJQVBHLFVBQVU7UUFDTixPQUFPLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDN0IsQ0FBQzs7Ozs7O0lBRUQsWUFBWSxDQUFDLEtBQVksRUFBRSxLQUFhO1FBQ3BDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzlCLENBQUM7OztZQW5CSixTQUFTLFNBQUM7Z0JBQ1AsUUFBUSxFQUFFLHFCQUFxQjtnQkFDL0IsUUFBUSxFQUFFOztLQUVUOzthQUVKOzs7b0JBRUksS0FBSztxQkFDTCxLQUFLO3VCQUVMLE1BQU07Ozs7SUFIUCwyQ0FBdUI7O0lBQ3ZCLDRDQUE0Qjs7SUFFNUIsOENBQXdDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIsIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnbmd4LWdhbGxlcnktYnVsbGV0cycsXG4gICAgdGVtcGxhdGU6IGBcbiAgICAgICAgPGRpdiBjbGFzcz1cIm5neC1nYWxsZXJ5LWJ1bGxldFwiICpuZ0Zvcj1cImxldCBidWxsZXQgb2YgZ2V0QnVsbGV0cygpOyBsZXQgaSA9IGluZGV4O1wiIChjbGljayk9XCJoYW5kbGVDaGFuZ2UoJGV2ZW50LCBpKVwiIFtuZ0NsYXNzXT1cInsgJ25neC1nYWxsZXJ5LWFjdGl2ZSc6IGkgPT0gYWN0aXZlIH1cIj48L2Rpdj5cbiAgICBgLFxuICAgIHN0eWxlVXJsczogWycuL25neC1nYWxsZXJ5LWJ1bGxldHMuY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBOZ3hHYWxsZXJ5QnVsbGV0c0NvbXBvbmVudCB7XG4gICAgQElucHV0KCkgY291bnQ6IG51bWJlcjtcbiAgICBASW5wdXQoKSBhY3RpdmU6IG51bWJlciA9IDA7XG5cbiAgICBAT3V0cHV0KCkgb25DaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgICBnZXRCdWxsZXRzKCk6IG51bWJlcltdIHtcbiAgICAgICAgcmV0dXJuIEFycmF5KHRoaXMuY291bnQpO1xuICAgIH1cblxuICAgIGhhbmRsZUNoYW5nZShldmVudDogRXZlbnQsIGluZGV4OiBudW1iZXIpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5vbkNoYW5nZS5lbWl0KGluZGV4KTtcbiAgICB9XG59XG4iXX0=