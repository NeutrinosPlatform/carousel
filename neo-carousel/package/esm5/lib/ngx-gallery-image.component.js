/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter, HostListener, ElementRef } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { NgxGalleryHelperService } from './ngx-gallery-helper.service';
import { NgxGalleryAnimation } from './ngx-gallery-animation.model';
var NgxGalleryImageComponent = /** @class */ (function () {
    function NgxGalleryImageComponent(sanitization, elementRef, helperService) {
        this.sanitization = sanitization;
        this.elementRef = elementRef;
        this.helperService = helperService;
        this.onClick = new EventEmitter();
        this.onActiveChange = new EventEmitter();
        this.canChangeImage = true;
    }
    /**
     * @return {?}
     */
    NgxGalleryImageComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        if (this.arrows && this.arrowsAutoHide) {
            this.arrows = false;
        }
        if (this.autoPlay) {
            this.startAutoPlay();
        }
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    NgxGalleryImageComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        var _this = this;
        if (changes['swipe']) {
            this.helperService.manageSwipe(this.swipe, this.elementRef, 'image', (/**
             * @return {?}
             */
            function () { return _this.showNext(); }), (/**
             * @return {?}
             */
            function () { return _this.showPrev(); }));
        }
    };
    /**
     * @return {?}
     */
    NgxGalleryImageComponent.prototype.onMouseEnter = /**
     * @return {?}
     */
    function () {
        if (this.arrowsAutoHide && !this.arrows) {
            this.arrows = true;
        }
        if (this.autoPlay && this.autoPlayPauseOnHover) {
            this.stopAutoPlay();
        }
    };
    /**
     * @return {?}
     */
    NgxGalleryImageComponent.prototype.onMouseLeave = /**
     * @return {?}
     */
    function () {
        if (this.arrowsAutoHide && this.arrows) {
            this.arrows = false;
        }
        if (this.autoPlay && this.autoPlayPauseOnHover) {
            this.startAutoPlay();
        }
    };
    /**
     * @param {?} index
     * @return {?}
     */
    NgxGalleryImageComponent.prototype.reset = /**
     * @param {?} index
     * @return {?}
     */
    function (index) {
        this.selectedIndex = index;
    };
    /**
     * @return {?}
     */
    NgxGalleryImageComponent.prototype.getImages = /**
     * @return {?}
     */
    function () {
        if (!this.images) {
            return [];
        }
        if (this.lazyLoading) {
            /** @type {?} */
            var indexes_1 = [this.selectedIndex];
            /** @type {?} */
            var prevIndex = this.selectedIndex - 1;
            if (prevIndex === -1 && this.infinityMove) {
                indexes_1.push(this.images.length - 1);
            }
            else if (prevIndex >= 0) {
                indexes_1.push(prevIndex);
            }
            /** @type {?} */
            var nextIndex = this.selectedIndex + 1;
            if (nextIndex == this.images.length && this.infinityMove) {
                indexes_1.push(0);
            }
            else if (nextIndex < this.images.length) {
                indexes_1.push(nextIndex);
            }
            return this.images.filter((/**
             * @param {?} img
             * @param {?} i
             * @return {?}
             */
            function (img, i) { return indexes_1.indexOf(i) != -1; }));
        }
        else {
            return this.images;
        }
    };
    /**
     * @return {?}
     */
    NgxGalleryImageComponent.prototype.startAutoPlay = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.stopAutoPlay();
        this.timer = setInterval((/**
         * @return {?}
         */
        function () {
            if (!_this.showNext()) {
                _this.selectedIndex = -1;
                _this.showNext();
            }
        }), this.autoPlayInterval);
    };
    /**
     * @return {?}
     */
    NgxGalleryImageComponent.prototype.stopAutoPlay = /**
     * @return {?}
     */
    function () {
        if (this.timer) {
            clearInterval(this.timer);
        }
    };
    /**
     * @param {?} event
     * @param {?} index
     * @return {?}
     */
    NgxGalleryImageComponent.prototype.handleClick = /**
     * @param {?} event
     * @param {?} index
     * @return {?}
     */
    function (event, index) {
        if (this.clickable) {
            this.onClick.emit(index);
            event.stopPropagation();
            event.preventDefault();
        }
    };
    /**
     * @param {?} index
     * @return {?}
     */
    NgxGalleryImageComponent.prototype.show = /**
     * @param {?} index
     * @return {?}
     */
    function (index) {
        this.selectedIndex = index;
        this.onActiveChange.emit(this.selectedIndex);
        this.setChangeTimeout();
    };
    /**
     * @return {?}
     */
    NgxGalleryImageComponent.prototype.showNext = /**
     * @return {?}
     */
    function () {
        if (this.canShowNext() && this.canChangeImage) {
            this.selectedIndex++;
            if (this.selectedIndex === this.images.length) {
                this.selectedIndex = 0;
            }
            this.onActiveChange.emit(this.selectedIndex);
            this.setChangeTimeout();
            return true;
        }
        else {
            return false;
        }
    };
    /**
     * @return {?}
     */
    NgxGalleryImageComponent.prototype.showPrev = /**
     * @return {?}
     */
    function () {
        if (this.canShowPrev() && this.canChangeImage) {
            this.selectedIndex--;
            if (this.selectedIndex < 0) {
                this.selectedIndex = this.images.length - 1;
            }
            this.onActiveChange.emit(this.selectedIndex);
            this.setChangeTimeout();
        }
    };
    /**
     * @return {?}
     */
    NgxGalleryImageComponent.prototype.setChangeTimeout = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.canChangeImage = false;
        /** @type {?} */
        var timeout = 1000;
        if (this.animation === NgxGalleryAnimation.Slide
            || this.animation === NgxGalleryAnimation.Fade) {
            timeout = 500;
        }
        setTimeout((/**
         * @return {?}
         */
        function () {
            _this.canChangeImage = true;
        }), timeout);
    };
    /**
     * @return {?}
     */
    NgxGalleryImageComponent.prototype.canShowNext = /**
     * @return {?}
     */
    function () {
        if (this.images) {
            return this.infinityMove || this.selectedIndex < this.images.length - 1
                ? true : false;
        }
        else {
            return false;
        }
    };
    /**
     * @return {?}
     */
    NgxGalleryImageComponent.prototype.canShowPrev = /**
     * @return {?}
     */
    function () {
        if (this.images) {
            return this.infinityMove || this.selectedIndex > 0 ? true : false;
        }
        else {
            return false;
        }
    };
    /**
     * @param {?} image
     * @return {?}
     */
    NgxGalleryImageComponent.prototype.getSafeUrl = /**
     * @param {?} image
     * @return {?}
     */
    function (image) {
        return this.sanitization.bypassSecurityTrustStyle(this.helperService.getBackgroundUrl(image));
    };
    NgxGalleryImageComponent.decorators = [
        { type: Component, args: [{
                    selector: 'ngx-gallery-image',
                    template: "\n        <div class=\"ngx-gallery-image-wrapper ngx-gallery-animation-{{animation}} ngx-gallery-image-size-{{size}}\">\n            <div class=\"ngx-gallery-image\" *ngFor=\"let image of getImages(); let i = index;\" [ngClass]=\"{ 'ngx-gallery-active': selectedIndex == image.index, 'ngx-gallery-inactive-left': selectedIndex > image.index, 'ngx-gallery-inactive-right': selectedIndex < image.index, 'ngx-gallery-clickable': clickable }\" [style.background-image]=\"getSafeUrl(image.src)\" (click)=\"handleClick($event, image.index)\">\n                <div class=\"ngx-gallery-icons-wrapper\">\n                    <ngx-gallery-action *ngFor=\"let action of actions\" [icon]=\"action.icon\" [disabled]=\"action.disabled\" [titleText]=\"action.titleText\" (onClick)=\"action.onClick($event, image.index)\"></ngx-gallery-action>\n                </div>\n                <div class=\"ngx-gallery-image-text\" *ngIf=\"showDescription && descriptions[image.index]\" [innerHTML]=\"descriptions[image.index]\" (click)=\"$event.stopPropagation()\"></div>\n            </div>\n        </div>\n        <ngx-gallery-bullets *ngIf=\"bullets\" [count]=\"images.length\" [active]=\"selectedIndex\" (onChange)=\"show($event)\"></ngx-gallery-bullets>\n        <ngx-gallery-arrows class=\"ngx-gallery-image-size-{{size}}\" *ngIf=\"arrows\" (onPrevClick)=\"showPrev()\" (onNextClick)=\"showNext()\" [prevDisabled]=\"!canShowPrev()\" [nextDisabled]=\"!canShowNext()\" [arrowPrevIcon]=\"arrowPrevIcon\" [arrowNextIcon]=\"arrowNextIcon\"></ngx-gallery-arrows>\n    ",
                    styles: [":host{width:100%;display:inline-block;position:relative}.ngx-gallery-image-wrapper{width:100%;height:100%;position:absolute;left:0;top:0;overflow:hidden}.ngx-gallery-image{background-position:center;background-repeat:no-repeat;height:100%;width:100%;position:absolute;top:0}.ngx-gallery-image.ngx-gallery-active{z-index:1000}.ngx-gallery-image-size-cover .ngx-gallery-image{background-size:cover}.ngx-gallery-image-size-contain .ngx-gallery-image{background-size:contain}.ngx-gallery-animation-fade .ngx-gallery-image{left:0;opacity:0;transition:.5s ease-in-out}.ngx-gallery-animation-fade .ngx-gallery-image.ngx-gallery-active{opacity:1}.ngx-gallery-animation-slide .ngx-gallery-image{transition:.5s ease-in-out}.ngx-gallery-animation-slide .ngx-gallery-image.ngx-gallery-active{left:0}.ngx-gallery-animation-slide .ngx-gallery-image.ngx-gallery-inactive-left{left:-100%}.ngx-gallery-animation-slide .ngx-gallery-image.ngx-gallery-inactive-right{left:100%}.ngx-gallery-animation-rotate .ngx-gallery-image{transition:1s;transform:scale(3.5,3.5) rotate(90deg);left:0;opacity:0}.ngx-gallery-animation-rotate .ngx-gallery-image.ngx-gallery-active{transform:scale(1,1) rotate(0);opacity:1}.ngx-gallery-animation-zoom .ngx-gallery-image{transition:1s;transform:scale(2.5,2.5);left:0;opacity:0}.ngx-gallery-animation-zoom .ngx-gallery-image.ngx-gallery-active{transform:scale(1,1);opacity:1}.ngx-gallery-image-text{width:100%;background:rgba(0,0,0,.7);padding:10px;text-align:center;color:#fff;font-size:16px;position:absolute;bottom:0;z-index:10}"]
                }] }
    ];
    /** @nocollapse */
    NgxGalleryImageComponent.ctorParameters = function () { return [
        { type: DomSanitizer },
        { type: ElementRef },
        { type: NgxGalleryHelperService }
    ]; };
    NgxGalleryImageComponent.propDecorators = {
        images: [{ type: Input }],
        clickable: [{ type: Input }],
        selectedIndex: [{ type: Input }],
        arrows: [{ type: Input }],
        arrowsAutoHide: [{ type: Input }],
        swipe: [{ type: Input }],
        animation: [{ type: Input }],
        size: [{ type: Input }],
        arrowPrevIcon: [{ type: Input }],
        arrowNextIcon: [{ type: Input }],
        autoPlay: [{ type: Input }],
        autoPlayInterval: [{ type: Input }],
        autoPlayPauseOnHover: [{ type: Input }],
        infinityMove: [{ type: Input }],
        lazyLoading: [{ type: Input }],
        actions: [{ type: Input }],
        descriptions: [{ type: Input }],
        showDescription: [{ type: Input }],
        bullets: [{ type: Input }],
        onClick: [{ type: Output }],
        onActiveChange: [{ type: Output }],
        onMouseEnter: [{ type: HostListener, args: ['mouseenter',] }],
        onMouseLeave: [{ type: HostListener, args: ['mouseleave',] }]
    };
    return NgxGalleryImageComponent;
}());
export { NgxGalleryImageComponent };
if (false) {
    /** @type {?} */
    NgxGalleryImageComponent.prototype.images;
    /** @type {?} */
    NgxGalleryImageComponent.prototype.clickable;
    /** @type {?} */
    NgxGalleryImageComponent.prototype.selectedIndex;
    /** @type {?} */
    NgxGalleryImageComponent.prototype.arrows;
    /** @type {?} */
    NgxGalleryImageComponent.prototype.arrowsAutoHide;
    /** @type {?} */
    NgxGalleryImageComponent.prototype.swipe;
    /** @type {?} */
    NgxGalleryImageComponent.prototype.animation;
    /** @type {?} */
    NgxGalleryImageComponent.prototype.size;
    /** @type {?} */
    NgxGalleryImageComponent.prototype.arrowPrevIcon;
    /** @type {?} */
    NgxGalleryImageComponent.prototype.arrowNextIcon;
    /** @type {?} */
    NgxGalleryImageComponent.prototype.autoPlay;
    /** @type {?} */
    NgxGalleryImageComponent.prototype.autoPlayInterval;
    /** @type {?} */
    NgxGalleryImageComponent.prototype.autoPlayPauseOnHover;
    /** @type {?} */
    NgxGalleryImageComponent.prototype.infinityMove;
    /** @type {?} */
    NgxGalleryImageComponent.prototype.lazyLoading;
    /** @type {?} */
    NgxGalleryImageComponent.prototype.actions;
    /** @type {?} */
    NgxGalleryImageComponent.prototype.descriptions;
    /** @type {?} */
    NgxGalleryImageComponent.prototype.showDescription;
    /** @type {?} */
    NgxGalleryImageComponent.prototype.bullets;
    /** @type {?} */
    NgxGalleryImageComponent.prototype.onClick;
    /** @type {?} */
    NgxGalleryImageComponent.prototype.onActiveChange;
    /** @type {?} */
    NgxGalleryImageComponent.prototype.canChangeImage;
    /**
     * @type {?}
     * @private
     */
    NgxGalleryImageComponent.prototype.timer;
    /**
     * @type {?}
     * @private
     */
    NgxGalleryImageComponent.prototype.sanitization;
    /**
     * @type {?}
     * @private
     */
    NgxGalleryImageComponent.prototype.elementRef;
    /**
     * @type {?}
     * @private
     */
    NgxGalleryImageComponent.prototype.helperService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWdhbGxlcnktaW1hZ2UuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmVvLWNhcm91c2VsLyIsInNvdXJjZXMiOlsibGliL25neC1nYWxsZXJ5LWltYWdlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxZQUFZLEVBQUcsVUFBVSxFQUFvQyxNQUFNLGVBQWUsQ0FBQztBQUNwSSxPQUFPLEVBQUUsWUFBWSxFQUFhLE1BQU0sMkJBQTJCLENBQUM7QUFFcEUsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFFdkUsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFHcEU7SUE0Q0ksa0NBQW9CLFlBQTBCLEVBQ2xDLFVBQXNCLEVBQVUsYUFBc0M7UUFEOUQsaUJBQVksR0FBWixZQUFZLENBQWM7UUFDbEMsZUFBVSxHQUFWLFVBQVUsQ0FBWTtRQUFVLGtCQUFhLEdBQWIsYUFBYSxDQUF5QjtRQVJ4RSxZQUFPLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUM3QixtQkFBYyxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFFOUMsbUJBQWMsR0FBRyxJQUFJLENBQUM7SUFLK0QsQ0FBQzs7OztJQUV0RiwyQ0FBUTs7O0lBQVI7UUFDSSxJQUFJLElBQUksQ0FBQyxNQUFNLElBQUksSUFBSSxDQUFDLGNBQWMsRUFBRTtZQUNwQyxJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztTQUN2QjtRQUVELElBQUksSUFBSSxDQUFDLFFBQVEsRUFBRTtZQUNmLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztTQUN4QjtJQUNMLENBQUM7Ozs7O0lBRUQsOENBQVc7Ozs7SUFBWCxVQUFZLE9BQXNCO1FBQWxDLGlCQUlDO1FBSEcsSUFBSSxPQUFPLENBQUMsT0FBTyxDQUFDLEVBQUU7WUFD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LDRDQUEyQjs7SUFDM0Isb0RBQWtDOztJQUNsQyx3REFBdUM7O0lBQ3ZDLGdEQUErQjs7SUFDL0IsK0NBQThCOztJQUM5QiwyQ0FBcUM7O0lBQ3JDLGdEQUFnQzs7SUFDaEMsbURBQWtDOztJQUNsQywyQ0FBMEI7O0lBRTFCLDJDQUF1Qzs7SUFDdkMsa0RBQThDOztJQUU5QyxrREFBc0I7Ozs7O0lBRXRCLHlDQUFjOzs7OztJQUVGLGdEQUFrQzs7Ozs7SUFDMUMsOENBQThCOzs7OztJQUFFLGlEQUE4QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBIb3N0TGlzdGVuZXIsICBFbGVtZW50UmVmLCBPbkluaXQsIE9uQ2hhbmdlcywgU2ltcGxlQ2hhbmdlcyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRG9tU2FuaXRpemVyLCBTYWZlU3R5bGUgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcblxuaW1wb3J0IHsgTmd4R2FsbGVyeUhlbHBlclNlcnZpY2UgfSBmcm9tICcuL25neC1nYWxsZXJ5LWhlbHBlci5zZXJ2aWNlJztcbmltcG9ydCB7IE5neEdhbGxlcnlPcmRlcmVkSW1hZ2UgfSBmcm9tICcuL25neC1nYWxsZXJ5LW9yZGVyZWQtaW1hZ2UubW9kZWwnO1xuaW1wb3J0IHsgTmd4R2FsbGVyeUFuaW1hdGlvbiB9IGZyb20gJy4vbmd4LWdhbGxlcnktYW5pbWF0aW9uLm1vZGVsJztcbmltcG9ydCB7IE5neEdhbGxlcnlBY3Rpb24gfSBmcm9tICcuL25neC1nYWxsZXJ5LWFjdGlvbi5tb2RlbCc7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnbmd4LWdhbGxlcnktaW1hZ2UnLFxuICAgIHRlbXBsYXRlOiBgXG4gICAgICAgIDxkaXYgY2xhc3M9XCJuZ3gtZ2FsbGVyeS1pbWFnZS13cmFwcGVyIG5neC1nYWxsZXJ5LWFuaW1hdGlvbi17e2FuaW1hdGlvbn19IG5neC1nYWxsZXJ5LWltYWdlLXNpemUte3tzaXplfX1cIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJuZ3gtZ2FsbGVyeS1pbWFnZVwiICpuZ0Zvcj1cImxldCBpbWFnZSBvZiBnZXRJbWFnZXMoKTsgbGV0IGkgPSBpbmRleDtcIiBbbmdDbGFzc109XCJ7ICduZ3gtZ2FsbGVyeS1hY3RpdmUnOiBzZWxlY3RlZEluZGV4ID09IGltYWdlLmluZGV4LCAnbmd4LWdhbGxlcnktaW5hY3RpdmUtbGVmdCc6IHNlbGVjdGVkSW5kZXggPiBpbWFnZS5pbmRleCwgJ25neC1nYWxsZXJ5LWluYWN0aXZlLXJpZ2h0Jzogc2VsZWN0ZWRJbmRleCA8IGltYWdlLmluZGV4LCAnbmd4LWdhbGxlcnktY2xpY2thYmxlJzogY2xpY2thYmxlIH1cIiBbc3R5bGUuYmFja2dyb3VuZC1pbWFnZV09XCJnZXRTYWZlVXJsKGltYWdlLnNyYylcIiAoY2xpY2spPVwiaGFuZGxlQ2xpY2soJGV2ZW50LCBpbWFnZS5pbmRleClcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibmd4LWdhbGxlcnktaWNvbnMtd3JhcHBlclwiPlxuICAgICAgICAgICAgICAgICAgICA8bmd4LWdhbGxlcnktYWN0aW9uICpuZ0Zvcj1cImxldCBhY3Rpb24gb2YgYWN0aW9uc1wiIFtpY29uXT1cImFjdGlvbi5pY29uXCIgW2Rpc2FibGVkXT1cImFjdGlvbi5kaXNhYmxlZFwiIFt0aXRsZVRleHRdPVwiYWN0aW9uLnRpdGxlVGV4dFwiIChvbkNsaWNrKT1cImFjdGlvbi5vbkNsaWNrKCRldmVudCwgaW1hZ2UuaW5kZXgpXCI+PC9uZ3gtZ2FsbGVyeS1hY3Rpb24+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm5neC1nYWxsZXJ5LWltYWdlLXRleHRcIiAqbmdJZj1cInNob3dEZXNjcmlwdGlvbiAmJiBkZXNjcmlwdGlvbnNbaW1hZ2UuaW5kZXhdXCIgW2lubmVySFRNTF09XCJkZXNjcmlwdGlvbnNbaW1hZ2UuaW5kZXhdXCIgKGNsaWNrKT1cIiRldmVudC5zdG9wUHJvcGFnYXRpb24oKVwiPjwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8bmd4LWdhbGxlcnktYnVsbGV0cyAqbmdJZj1cImJ1bGxldHNcIiBbY291bnRdPVwiaW1hZ2VzLmxlbmd0aFwiIFthY3RpdmVdPVwic2VsZWN0ZWRJbmRleFwiIChvbkNoYW5nZSk9XCJzaG93KCRldmVudClcIj48L25neC1nYWxsZXJ5LWJ1bGxldHM+XG4gICAgICAgIDxuZ3gtZ2FsbGVyeS1hcnJvd3MgY2xhc3M9XCJuZ3gtZ2FsbGVyeS1pbWFnZS1zaXplLXt7c2l6ZX19XCIgKm5nSWY9XCJhcnJvd3NcIiAob25QcmV2Q2xpY2spPVwic2hvd1ByZXYoKVwiIChvbk5leHRDbGljayk9XCJzaG93TmV4dCgpXCIgW3ByZXZEaXNhYmxlZF09XCIhY2FuU2hvd1ByZXYoKVwiIFtuZXh0RGlzYWJsZWRdPVwiIWNhblNob3dOZXh0KClcIiBbYXJyb3dQcmV2SWNvbl09XCJhcnJvd1ByZXZJY29uXCIgW2Fycm93TmV4dEljb25dPVwiYXJyb3dOZXh0SWNvblwiPjwvbmd4LWdhbGxlcnktYXJyb3dzPlxuICAgIGAsXG4gICAgc3R5bGVVcmxzOiBbJy4vbmd4LWdhbGxlcnktaW1hZ2UuY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBOZ3hHYWxsZXJ5SW1hZ2VDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uQ2hhbmdlcyB7XG4gICAgQElucHV0KCkgaW1hZ2VzOiBOZ3hHYWxsZXJ5T3JkZXJlZEltYWdlW107XG4gICAgQElucHV0KCkgY2xpY2thYmxlOiBib29sZWFuO1xuICAgIEBJbnB1dCgpIHNlbGVjdGVkSW5kZXg6IG51bWJlcjtcbiAgICBASW5wdXQoKSBhcnJvd3M6IGJvb2xlYW47XG4gICAgQElucHV0KCkgYXJyb3dzQXV0b0hpZGU6IGJvb2xlYW47XG4gICAgQElucHV0KCkgc3dpcGU6IGJvb2xlYW47XG4gICAgQElucHV0KCkgYW5pbWF0aW9uOiBzdHJpbmc7XG4gICAgQElucHV0KCkgc2l6ZTogc3RyaW5nO1xuICAgIEBJbnB1dCgpIGFycm93UHJldkljb246IHN0cmluZztcbiAgICBASW5wdXQoKSBhcnJvd05leHRJY29uOiBzdHJpbmc7XG4gICAgQElucHV0KCkgYXV0b1BsYXk6IGJvb2xlYW47XG4gICAgQElucHV0KCkgYXV0b1BsYXlJbnRlcnZhbDogbnVtYmVyO1xuICAgIEBJbnB1dCgpIGF1dG9QbGF5UGF1c2VPbkhvdmVyOiBib29sZWFuO1xuICAgIEBJbnB1dCgpIGluZmluaXR5TW92ZTogYm9vbGVhbjtcbiAgICBASW5wdXQoKSBsYXp5TG9hZGluZzogYm9vbGVhbjtcbiAgICBASW5wdXQoKSBhY3Rpb25zOiBOZ3hHYWxsZXJ5QWN0aW9uW107XG4gICAgQElucHV0KCkgZGVzY3JpcHRpb25zOiBzdHJpbmdbXTtcbiAgICBASW5wdXQoKSBzaG93RGVzY3JpcHRpb246IGJvb2xlYW47XG4gICAgQElucHV0KCkgYnVsbGV0czogYm9vbGVhbjtcblxuICAgIEBPdXRwdXQoKSBvbkNsaWNrID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICAgIEBPdXRwdXQoKSBvbkFjdGl2ZUNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICAgIGNhbkNoYW5nZUltYWdlID0gdHJ1ZTtcblxuICAgIHByaXZhdGUgdGltZXI7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHNhbml0aXphdGlvbjogRG9tU2FuaXRpemVyLFxuICAgICAgICBwcml2YXRlIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsIHByaXZhdGUgaGVscGVyU2VydmljZTogTmd4R2FsbGVyeUhlbHBlclNlcnZpY2UpIHt9XG5cbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMuYXJyb3dzICYmIHRoaXMuYXJyb3dzQXV0b0hpZGUpIHtcbiAgICAgICAgICAgIHRoaXMuYXJyb3dzID0gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5hdXRvUGxheSkge1xuICAgICAgICAgICAgdGhpcy5zdGFydEF1dG9QbGF5KCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XG4gICAgICAgIGlmIChjaGFuZ2VzWydzd2lwZSddKSB7XG4gICAgICAgICAgICB0aGlzLmhlbHBlclNlcnZpY2UubWFuYWdlU3dpcGUodGhpcy5zd2lwZSwgdGhpcy5lbGVtZW50UmVmLCAnaW1hZ2UnLCAoKSA9PiB0aGlzLnNob3dOZXh0KCksICgpID0+IHRoaXMuc2hvd1ByZXYoKSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBASG9zdExpc3RlbmVyKCdtb3VzZWVudGVyJykgb25Nb3VzZUVudGVyKCkge1xuICAgICAgICBpZiAodGhpcy5hcnJvd3NBdXRvSGlkZSAmJiAhdGhpcy5hcnJvd3MpIHtcbiAgICAgICAgICAgIHRoaXMuYXJyb3dzID0gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLmF1dG9QbGF5ICYmIHRoaXMuYXV0b1BsYXlQYXVzZU9uSG92ZXIpIHtcbiAgICAgICAgICAgIHRoaXMuc3RvcEF1dG9QbGF5KCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBASG9zdExpc3RlbmVyKCdtb3VzZWxlYXZlJykgb25Nb3VzZUxlYXZlKCkge1xuICAgICAgICBpZiAodGhpcy5hcnJvd3NBdXRvSGlkZSAmJiB0aGlzLmFycm93cykge1xuICAgICAgICAgICAgdGhpcy5hcnJvd3MgPSBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLmF1dG9QbGF5ICYmIHRoaXMuYXV0b1BsYXlQYXVzZU9uSG92ZXIpIHtcbiAgICAgICAgICAgIHRoaXMuc3RhcnRBdXRvUGxheSgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmVzZXQoaW5kZXg6IG51bWJlcik6IHZvaWQge1xuICAgICAgICB0aGlzLnNlbGVjdGVkSW5kZXggPSBpbmRleDtcbiAgICB9XG5cbiAgICBnZXRJbWFnZXMoKTogTmd4R2FsbGVyeU9yZGVyZWRJbWFnZVtdIHtcbiAgICAgICAgaWYgKCF0aGlzLmltYWdlcykge1xuICAgICAgICAgICAgcmV0dXJuIFtdO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMubGF6eUxvYWRpbmcpIHtcbiAgICAgICAgICAgIGxldCBpbmRleGVzID0gW3RoaXMuc2VsZWN0ZWRJbmRleF07XG4gICAgICAgICAgICBsZXQgcHJldkluZGV4ID0gdGhpcy5zZWxlY3RlZEluZGV4IC0gMTtcblxuICAgICAgICAgICAgaWYgKHByZXZJbmRleCA9PT0gLTEgJiYgdGhpcy5pbmZpbml0eU1vdmUpIHtcbiAgICAgICAgICAgICAgICBpbmRleGVzLnB1c2godGhpcy5pbWFnZXMubGVuZ3RoIC0gMSlcbiAgICAgICAgICAgIH0gZWxzZSBpZiAocHJldkluZGV4ID49IDApIHtcbiAgICAgICAgICAgICAgICBpbmRleGVzLnB1c2gocHJldkluZGV4KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgbGV0IG5leHRJbmRleCA9IHRoaXMuc2VsZWN0ZWRJbmRleCArIDE7XG5cbiAgICAgICAgICAgIGlmIChuZXh0SW5kZXggPT0gdGhpcy5pbWFnZXMubGVuZ3RoICYmIHRoaXMuaW5maW5pdHlNb3ZlKSB7XG4gICAgICAgICAgICAgICAgaW5kZXhlcy5wdXNoKDApO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChuZXh0SW5kZXggPCB0aGlzLmltYWdlcy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICBpbmRleGVzLnB1c2gobmV4dEluZGV4KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuaW1hZ2VzLmZpbHRlcigoaW1nLCBpKSA9PiBpbmRleGVzLmluZGV4T2YoaSkgIT0gLTEpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuaW1hZ2VzO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgc3RhcnRBdXRvUGxheSgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5zdG9wQXV0b1BsYXkoKTtcblxuICAgICAgICB0aGlzLnRpbWVyID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgICAgICAgaWYgKCF0aGlzLnNob3dOZXh0KCkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdGVkSW5kZXggPSAtMTtcbiAgICAgICAgICAgICAgICB0aGlzLnNob3dOZXh0KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sIHRoaXMuYXV0b1BsYXlJbnRlcnZhbCk7XG4gICAgfVxuXG4gICAgc3RvcEF1dG9QbGF5KCkge1xuICAgICAgICBpZiAodGhpcy50aW1lcikge1xuICAgICAgICAgICAgY2xlYXJJbnRlcnZhbCh0aGlzLnRpbWVyKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGhhbmRsZUNsaWNrKGV2ZW50OiBFdmVudCwgaW5kZXg6IG51bWJlcik6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5jbGlja2FibGUpIHtcbiAgICAgICAgICAgIHRoaXMub25DbGljay5lbWl0KGluZGV4KTtcblxuICAgICAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgc2hvdyhpbmRleDogbnVtYmVyKSB7XG4gICAgICAgIHRoaXMuc2VsZWN0ZWRJbmRleCA9IGluZGV4O1xuICAgICAgICB0aGlzLm9uQWN0aXZlQ2hhbmdlLmVtaXQodGhpcy5zZWxlY3RlZEluZGV4KTtcbiAgICAgICAgdGhpcy5zZXRDaGFuZ2VUaW1lb3V0KCk7XG4gICAgfVxuXG4gICAgc2hvd05leHQoKTogYm9vbGVhbiB7XG4gICAgICAgIGlmICh0aGlzLmNhblNob3dOZXh0KCkgJiYgdGhpcy5jYW5DaGFuZ2VJbWFnZSkge1xuICAgICAgICAgICAgdGhpcy5zZWxlY3RlZEluZGV4Kys7XG5cbiAgICAgICAgICAgIGlmICh0aGlzLnNlbGVjdGVkSW5kZXggPT09IHRoaXMuaW1hZ2VzLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWRJbmRleCA9IDA7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMub25BY3RpdmVDaGFuZ2UuZW1pdCh0aGlzLnNlbGVjdGVkSW5kZXgpO1xuICAgICAgICAgICAgdGhpcy5zZXRDaGFuZ2VUaW1lb3V0KCk7XG5cbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgc2hvd1ByZXYoKTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLmNhblNob3dQcmV2KCkgJiYgdGhpcy5jYW5DaGFuZ2VJbWFnZSkge1xuICAgICAgICAgICAgdGhpcy5zZWxlY3RlZEluZGV4LS07XG5cbiAgICAgICAgICAgIGlmICh0aGlzLnNlbGVjdGVkSW5kZXggPCAwKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZWxlY3RlZEluZGV4ID0gdGhpcy5pbWFnZXMubGVuZ3RoIC0gMTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpcy5vbkFjdGl2ZUNoYW5nZS5lbWl0KHRoaXMuc2VsZWN0ZWRJbmRleCk7XG4gICAgICAgICAgICB0aGlzLnNldENoYW5nZVRpbWVvdXQoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHNldENoYW5nZVRpbWVvdXQoKSB7XG4gICAgICAgIHRoaXMuY2FuQ2hhbmdlSW1hZ2UgPSBmYWxzZTtcbiAgICAgICAgbGV0IHRpbWVvdXQgPSAxMDAwO1xuXG4gICAgICAgIGlmICh0aGlzLmFuaW1hdGlvbiA9PT0gTmd4R2FsbGVyeUFuaW1hdGlvbi5TbGlkZVxuICAgICAgICAgICAgfHwgdGhpcy5hbmltYXRpb24gPT09IE5neEdhbGxlcnlBbmltYXRpb24uRmFkZSkge1xuICAgICAgICAgICAgICAgIHRpbWVvdXQgPSA1MDA7XG4gICAgICAgIH1cblxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuY2FuQ2hhbmdlSW1hZ2UgPSB0cnVlO1xuICAgICAgICB9LCB0aW1lb3V0KTtcbiAgICB9XG5cbiAgICBjYW5TaG93TmV4dCgpOiBib29sZWFuIHtcbiAgICAgICAgaWYgKHRoaXMuaW1hZ2VzKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5pbmZpbml0eU1vdmUgfHwgdGhpcy5zZWxlY3RlZEluZGV4IDwgdGhpcy5pbWFnZXMubGVuZ3RoIC0gMVxuICAgICAgICAgICAgICAgID8gdHJ1ZSA6IGZhbHNlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY2FuU2hvd1ByZXYoKTogYm9vbGVhbiB7XG4gICAgICAgIGlmICh0aGlzLmltYWdlcykge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuaW5maW5pdHlNb3ZlIHx8IHRoaXMuc2VsZWN0ZWRJbmRleCA+IDAgPyB0cnVlIDogZmFsc2U7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBnZXRTYWZlVXJsKGltYWdlOiBzdHJpbmcpOiBTYWZlU3R5bGUge1xuICAgICAgICByZXR1cm4gdGhpcy5zYW5pdGl6YXRpb24uYnlwYXNzU2VjdXJpdHlUcnVzdFN0eWxlKHRoaXMuaGVscGVyU2VydmljZS5nZXRCYWNrZ3JvdW5kVXJsKGltYWdlKSk7XG4gICAgfVxufVxuIl19