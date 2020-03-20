import { __spread, __extends } from 'tslib';
import { EventEmitter, Component, ChangeDetectionStrategy, Input, Output, Injectable, Renderer2, ɵɵdefineInjectable, ɵɵinject, ElementRef, HostListener, ChangeDetectorRef, ViewChild, HostBinding, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DomSanitizer, HammerGestureConfig, HAMMER_GESTURE_CONFIG } from '@angular/platform-browser';
import { MatIconModule } from '@angular/material/icon';
import { OverlayModule } from '@angular/cdk/overlay';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var NgxGalleryActionComponent = /** @class */ (function () {
    function NgxGalleryActionComponent() {
        this.disabled = false;
        this.titleText = '';
        this.onClick = new EventEmitter();
    }
    /**
     * @param {?} event
     * @return {?}
     */
    NgxGalleryActionComponent.prototype.handleClick = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (!this.disabled) {
            this.onClick.emit(event);
        }
        event.stopPropagation();
        event.preventDefault();
    };
    NgxGalleryActionComponent.decorators = [
        { type: Component, args: [{
                    selector: 'ngx-gallery-action',
                    template: "\n        <div class=\"ngx-gallery-icon\" [class.ngx-gallery-icon-disabled]=\"disabled\"\n            aria-hidden=\"true\"\n            title=\"{{ titleText }}\"\n            (click)=\"handleClick($event)\">\n                <!--<i class=\"ngx-gallery-icon-content {{ icon }}\"></i>-->\n          <mat-icon class=\"ngx-gallery-icon-content\">{{ icon }}</mat-icon>\n        </div>",
                    changeDetection: ChangeDetectionStrategy.OnPush
                }] }
    ];
    NgxGalleryActionComponent.propDecorators = {
        icon: [{ type: Input }],
        disabled: [{ type: Input }],
        titleText: [{ type: Input }],
        onClick: [{ type: Output }]
    };
    return NgxGalleryActionComponent;
}());
if (false) {
    /** @type {?} */
    NgxGalleryActionComponent.prototype.icon;
    /** @type {?} */
    NgxGalleryActionComponent.prototype.disabled;
    /** @type {?} */
    NgxGalleryActionComponent.prototype.titleText;
    /** @type {?} */
    NgxGalleryActionComponent.prototype.onClick;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var NgxGalleryBulletsComponent = /** @class */ (function () {
    function NgxGalleryBulletsComponent() {
        this.active = 0;
        this.onChange = new EventEmitter();
    }
    /**
     * @return {?}
     */
    NgxGalleryBulletsComponent.prototype.getBullets = /**
     * @return {?}
     */
    function () {
        return Array(this.count);
    };
    /**
     * @param {?} event
     * @param {?} index
     * @return {?}
     */
    NgxGalleryBulletsComponent.prototype.handleChange = /**
     * @param {?} event
     * @param {?} index
     * @return {?}
     */
    function (event, index) {
        this.onChange.emit(index);
    };
    NgxGalleryBulletsComponent.decorators = [
        { type: Component, args: [{
                    selector: 'ngx-gallery-bullets',
                    template: "\n        <div class=\"ngx-gallery-bullet\" *ngFor=\"let bullet of getBullets(); let i = index;\" (click)=\"handleChange($event, i)\" [ngClass]=\"{ 'ngx-gallery-active': i == active }\"></div>\n    ",
                    styles: [":host{position:absolute;z-index:2000;display:inline-flex;left:50%;transform:translateX(-50%);bottom:0;padding:10px}.ngx-gallery-bullet{width:10px;height:10px;border-radius:50%;cursor:pointer;background:#fff}.ngx-gallery-bullet:not(:first-child){margin-left:5px}.ngx-gallery-bullet.ngx-gallery-active,.ngx-gallery-bullet:hover{background:#000}"]
                }] }
    ];
    NgxGalleryBulletsComponent.propDecorators = {
        count: [{ type: Input }],
        active: [{ type: Input }],
        onChange: [{ type: Output }]
    };
    return NgxGalleryBulletsComponent;
}());
if (false) {
    /** @type {?} */
    NgxGalleryBulletsComponent.prototype.count;
    /** @type {?} */
    NgxGalleryBulletsComponent.prototype.active;
    /** @type {?} */
    NgxGalleryBulletsComponent.prototype.onChange;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var NgxGalleryHelperService = /** @class */ (function () {
    function NgxGalleryHelperService(renderer) {
        this.renderer = renderer;
        this.swipeHandlers = new Map();
    }
    /**
     * @param {?} status
     * @param {?} element
     * @param {?} id
     * @param {?} nextHandler
     * @param {?} prevHandler
     * @return {?}
     */
    NgxGalleryHelperService.prototype.manageSwipe = /**
     * @param {?} status
     * @param {?} element
     * @param {?} id
     * @param {?} nextHandler
     * @param {?} prevHandler
     * @return {?}
     */
    function (status, element, id, nextHandler, prevHandler) {
        /** @type {?} */
        var handlers = this.getSwipeHandlers(id);
        // swipeleft and swiperight are available only if hammerjs is included
        try {
            if (status && !handlers) {
                this.swipeHandlers.set(id, [
                    this.renderer.listen(element.nativeElement, 'swipeleft', (/**
                     * @return {?}
                     */
                    function () { return nextHandler(); })),
                    this.renderer.listen(element.nativeElement, 'swiperight', (/**
                     * @return {?}
                     */
                    function () { return prevHandler(); }))
                ]);
            }
            else if (!status && handlers) {
                handlers.map((/**
                 * @param {?} handler
                 * @return {?}
                 */
                function (handler) { return handler(); }));
                this.removeSwipeHandlers(id);
            }
        }
        catch (e) { }
    };
    /**
     * @param {?} url
     * @return {?}
     */
    NgxGalleryHelperService.prototype.validateUrl = /**
     * @param {?} url
     * @return {?}
     */
    function (url) {
        if (url.replace) {
            return url.replace(new RegExp(' ', 'g'), '%20')
                .replace(new RegExp('\'', 'g'), '%27');
        }
        else {
            return url;
        }
    };
    /**
     * @param {?} image
     * @return {?}
     */
    NgxGalleryHelperService.prototype.getBackgroundUrl = /**
     * @param {?} image
     * @return {?}
     */
    function (image) {
        return 'url(\'' + this.validateUrl(image) + '\')';
    };
    /**
     * @private
     * @param {?} id
     * @return {?}
     */
    NgxGalleryHelperService.prototype.getSwipeHandlers = /**
     * @private
     * @param {?} id
     * @return {?}
     */
    function (id) {
        return this.swipeHandlers.get(id);
    };
    /**
     * @private
     * @param {?} id
     * @return {?}
     */
    NgxGalleryHelperService.prototype.removeSwipeHandlers = /**
     * @private
     * @param {?} id
     * @return {?}
     */
    function (id) {
        this.swipeHandlers.delete(id);
    };
    NgxGalleryHelperService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    NgxGalleryHelperService.ctorParameters = function () { return [
        { type: Renderer2 }
    ]; };
    /** @nocollapse */ NgxGalleryHelperService.ngInjectableDef = ɵɵdefineInjectable({ factory: function NgxGalleryHelperService_Factory() { return new NgxGalleryHelperService(ɵɵinject(Renderer2)); }, token: NgxGalleryHelperService, providedIn: "root" });
    return NgxGalleryHelperService;
}());
if (false) {
    /**
     * @type {?}
     * @private
     */
    NgxGalleryHelperService.prototype.swipeHandlers;
    /**
     * @type {?}
     * @private
     */
    NgxGalleryHelperService.prototype.renderer;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var NgxGalleryAnimation = /** @class */ (function () {
    function NgxGalleryAnimation() {
    }
    NgxGalleryAnimation.Fade = 'fade';
    NgxGalleryAnimation.Slide = 'slide';
    NgxGalleryAnimation.Rotate = 'rotate';
    NgxGalleryAnimation.Zoom = 'zoom';
    return NgxGalleryAnimation;
}());
if (false) {
    /** @type {?} */
    NgxGalleryAnimation.Fade;
    /** @type {?} */
    NgxGalleryAnimation.Slide;
    /** @type {?} */
    NgxGalleryAnimation.Rotate;
    /** @type {?} */
    NgxGalleryAnimation.Zoom;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var NgxGalleryOrder = /** @class */ (function () {
    function NgxGalleryOrder() {
    }
    NgxGalleryOrder.Column = 1;
    NgxGalleryOrder.Row = 2;
    NgxGalleryOrder.Page = 3;
    return NgxGalleryOrder;
}());
if (false) {
    /** @type {?} */
    NgxGalleryOrder.Column;
    /** @type {?} */
    NgxGalleryOrder.Row;
    /** @type {?} */
    NgxGalleryOrder.Page;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var NgxGalleryThumbnailsComponent = /** @class */ (function () {
    function NgxGalleryThumbnailsComponent(sanitization, elementRef, helperService) {
        this.sanitization = sanitization;
        this.elementRef = elementRef;
        this.helperService = helperService;
        this.minStopIndex = 0;
        this.onActiveChange = new EventEmitter();
        this.index = 0;
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    NgxGalleryThumbnailsComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        var _this = this;
        if (changes['selectedIndex']) {
            this.validateIndex();
        }
        if (changes['swipe']) {
            this.helperService.manageSwipe(this.swipe, this.elementRef, 'thumbnails', (/**
             * @return {?}
             */
            function () { return _this.moveRight(); }), (/**
             * @return {?}
             */
            function () { return _this.moveLeft(); }));
        }
        if (this.images) {
            this.remainingCountValue = this.images.length - (this.rows * this.columns);
        }
    };
    /**
     * @return {?}
     */
    NgxGalleryThumbnailsComponent.prototype.onMouseEnter = /**
     * @return {?}
     */
    function () {
        this.mouseenter = true;
    };
    /**
     * @return {?}
     */
    NgxGalleryThumbnailsComponent.prototype.onMouseLeave = /**
     * @return {?}
     */
    function () {
        this.mouseenter = false;
    };
    /**
     * @param {?} index
     * @return {?}
     */
    NgxGalleryThumbnailsComponent.prototype.reset = /**
     * @param {?} index
     * @return {?}
     */
    function (index) {
        this.selectedIndex = index;
        this.setDefaultPosition();
        this.index = 0;
        this.validateIndex();
    };
    /**
     * @return {?}
     */
    NgxGalleryThumbnailsComponent.prototype.getImages = /**
     * @return {?}
     */
    function () {
        if (!this.images) {
            return [];
        }
        if (this.remainingCount) {
            return this.images.slice(0, this.rows * this.columns);
        }
        else if (this.lazyLoading && this.order != NgxGalleryOrder.Row) {
            /** @type {?} */
            var stopIndex = 0;
            if (this.order === NgxGalleryOrder.Column) {
                stopIndex = (this.index + this.columns + this.moveSize) * this.rows;
            }
            else if (this.order === NgxGalleryOrder.Page) {
                stopIndex = this.index + ((this.columns * this.rows) * 2);
            }
            if (stopIndex <= this.minStopIndex) {
                stopIndex = this.minStopIndex;
            }
            else {
                this.minStopIndex = stopIndex;
            }
            return this.images.slice(0, stopIndex);
        }
        else {
            return this.images;
        }
    };
    /**
     * @param {?} event
     * @param {?} index
     * @return {?}
     */
    NgxGalleryThumbnailsComponent.prototype.handleClick = /**
     * @param {?} event
     * @param {?} index
     * @return {?}
     */
    function (event, index) {
        if (!this.hasLink(index)) {
            this.selectedIndex = index;
            this.onActiveChange.emit(index);
            event.stopPropagation();
            event.preventDefault();
        }
    };
    /**
     * @param {?} index
     * @return {?}
     */
    NgxGalleryThumbnailsComponent.prototype.hasLink = /**
     * @param {?} index
     * @return {?}
     */
    function (index) {
        if (this.links && this.links.length && this.links[index])
            return true;
    };
    /**
     * @return {?}
     */
    NgxGalleryThumbnailsComponent.prototype.moveRight = /**
     * @return {?}
     */
    function () {
        if (this.canMoveRight()) {
            this.index += this.moveSize;
            /** @type {?} */
            var maxIndex = this.getMaxIndex() - this.columns;
            if (this.index > maxIndex) {
                this.index = maxIndex;
            }
            this.setThumbnailsPosition();
        }
    };
    /**
     * @return {?}
     */
    NgxGalleryThumbnailsComponent.prototype.moveLeft = /**
     * @return {?}
     */
    function () {
        if (this.canMoveLeft()) {
            this.index -= this.moveSize;
            if (this.index < 0) {
                this.index = 0;
            }
            this.setThumbnailsPosition();
        }
    };
    /**
     * @return {?}
     */
    NgxGalleryThumbnailsComponent.prototype.canMoveRight = /**
     * @return {?}
     */
    function () {
        return this.index + this.columns < this.getMaxIndex() ? true : false;
    };
    /**
     * @return {?}
     */
    NgxGalleryThumbnailsComponent.prototype.canMoveLeft = /**
     * @return {?}
     */
    function () {
        return this.index !== 0 ? true : false;
    };
    /**
     * @param {?} index
     * @return {?}
     */
    NgxGalleryThumbnailsComponent.prototype.getThumbnailLeft = /**
     * @param {?} index
     * @return {?}
     */
    function (index) {
        /** @type {?} */
        var calculatedIndex;
        if (this.order === NgxGalleryOrder.Column) {
            calculatedIndex = Math.floor(index / this.rows);
        }
        else if (this.order === NgxGalleryOrder.Page) {
            calculatedIndex = (index % this.columns) + (Math.floor(index / (this.rows * this.columns)) * this.columns);
        }
        else if (this.order == NgxGalleryOrder.Row && this.remainingCount) {
            calculatedIndex = index % this.columns;
        }
        else {
            calculatedIndex = index % Math.ceil(this.images.length / this.rows);
        }
        return this.getThumbnailPosition(calculatedIndex, this.columns);
    };
    /**
     * @param {?} index
     * @return {?}
     */
    NgxGalleryThumbnailsComponent.prototype.getThumbnailTop = /**
     * @param {?} index
     * @return {?}
     */
    function (index) {
        /** @type {?} */
        var calculatedIndex;
        if (this.order === NgxGalleryOrder.Column) {
            calculatedIndex = index % this.rows;
        }
        else if (this.order === NgxGalleryOrder.Page) {
            calculatedIndex = Math.floor(index / this.columns) - (Math.floor(index / (this.rows * this.columns)) * this.rows);
        }
        else if (this.order == NgxGalleryOrder.Row && this.remainingCount) {
            calculatedIndex = Math.floor(index / this.columns);
        }
        else {
            calculatedIndex = Math.floor(index / Math.ceil(this.images.length / this.rows));
        }
        return this.getThumbnailPosition(calculatedIndex, this.rows);
    };
    /**
     * @return {?}
     */
    NgxGalleryThumbnailsComponent.prototype.getThumbnailWidth = /**
     * @return {?}
     */
    function () {
        return this.getThumbnailDimension(this.columns);
    };
    /**
     * @return {?}
     */
    NgxGalleryThumbnailsComponent.prototype.getThumbnailHeight = /**
     * @return {?}
     */
    function () {
        return this.getThumbnailDimension(this.rows);
    };
    /**
     * @return {?}
     */
    NgxGalleryThumbnailsComponent.prototype.setThumbnailsPosition = /**
     * @return {?}
     */
    function () {
        this.thumbnailsLeft = -((100 / this.columns) * this.index) + '%';
        this.thumbnailsMarginLeft = -((this.margin - (((this.columns - 1)
            * this.margin) / this.columns)) * this.index) + 'px';
    };
    /**
     * @return {?}
     */
    NgxGalleryThumbnailsComponent.prototype.setDefaultPosition = /**
     * @return {?}
     */
    function () {
        this.thumbnailsLeft = '0px';
        this.thumbnailsMarginLeft = '0px';
    };
    /**
     * @return {?}
     */
    NgxGalleryThumbnailsComponent.prototype.canShowArrows = /**
     * @return {?}
     */
    function () {
        if (this.remainingCount) {
            return false;
        }
        else if (this.arrows && this.images && this.images.length > this.getVisibleCount()
            && (!this.arrowsAutoHide || this.mouseenter)) {
            return true;
        }
        else {
            return false;
        }
    };
    /**
     * @return {?}
     */
    NgxGalleryThumbnailsComponent.prototype.validateIndex = /**
     * @return {?}
     */
    function () {
        if (this.images) {
            /** @type {?} */
            var newIndex = void 0;
            if (this.order === NgxGalleryOrder.Column) {
                newIndex = Math.floor(this.selectedIndex / this.rows);
            }
            else {
                newIndex = this.selectedIndex % Math.ceil(this.images.length / this.rows);
            }
            if (this.remainingCount) {
                newIndex = 0;
            }
            if (newIndex < this.index || newIndex >= this.index + this.columns) {
                /** @type {?} */
                var maxIndex = this.getMaxIndex() - this.columns;
                this.index = newIndex > maxIndex ? maxIndex : newIndex;
                this.setThumbnailsPosition();
            }
        }
    };
    /**
     * @param {?} image
     * @return {?}
     */
    NgxGalleryThumbnailsComponent.prototype.getSafeUrl = /**
     * @param {?} image
     * @return {?}
     */
    function (image) {
        return this.sanitization.bypassSecurityTrustStyle(this.helperService.getBackgroundUrl(image));
    };
    /**
     * @private
     * @param {?} index
     * @param {?} count
     * @return {?}
     */
    NgxGalleryThumbnailsComponent.prototype.getThumbnailPosition = /**
     * @private
     * @param {?} index
     * @param {?} count
     * @return {?}
     */
    function (index, count) {
        return this.getSafeStyle('calc(' + ((100 / count) * index) + '% + '
            + ((this.margin - (((count - 1) * this.margin) / count)) * index) + 'px)');
    };
    /**
     * @private
     * @param {?} count
     * @return {?}
     */
    NgxGalleryThumbnailsComponent.prototype.getThumbnailDimension = /**
     * @private
     * @param {?} count
     * @return {?}
     */
    function (count) {
        if (this.margin !== 0) {
            return this.getSafeStyle('calc(' + (100 / count) + '% - '
                + (((count - 1) * this.margin) / count) + 'px)');
        }
        else {
            return this.getSafeStyle('calc(' + (100 / count) + '% + 1px)');
        }
    };
    /**
     * @private
     * @return {?}
     */
    NgxGalleryThumbnailsComponent.prototype.getMaxIndex = /**
     * @private
     * @return {?}
     */
    function () {
        if (this.order == NgxGalleryOrder.Page) {
            /** @type {?} */
            var maxIndex = (Math.floor(this.images.length / this.getVisibleCount()) * this.columns);
            if (this.images.length % this.getVisibleCount() > this.columns) {
                maxIndex += this.columns;
            }
            else {
                maxIndex += this.images.length % this.getVisibleCount();
            }
            return maxIndex;
        }
        else {
            return Math.ceil(this.images.length / this.rows);
        }
    };
    /**
     * @private
     * @return {?}
     */
    NgxGalleryThumbnailsComponent.prototype.getVisibleCount = /**
     * @private
     * @return {?}
     */
    function () {
        return this.columns * this.rows;
    };
    /**
     * @private
     * @param {?} value
     * @return {?}
     */
    NgxGalleryThumbnailsComponent.prototype.getSafeStyle = /**
     * @private
     * @param {?} value
     * @return {?}
     */
    function (value) {
        return this.sanitization.bypassSecurityTrustStyle(value);
    };
    NgxGalleryThumbnailsComponent.decorators = [
        { type: Component, args: [{
                    selector: 'ngx-gallery-thumbnails',
                    template: "\n    <div class=\"ngx-gallery-thumbnails-wrapper ngx-gallery-thumbnail-size-{{size}}\">\n        <div class=\"ngx-gallery-thumbnails\" [style.transform]=\"'translateX(' + thumbnailsLeft + ')'\" [style.marginLeft]=\"thumbnailsMarginLeft\">\n            <a [href]=\"hasLink(i) ? links[i] : '#'\" [target]=\"linkTarget\" class=\"ngx-gallery-thumbnail\" *ngFor=\"let image of getImages(); let i = index;\" [style.background-image]=\"getSafeUrl(image)\" (click)=\"handleClick($event, i)\" [style.width]=\"getThumbnailWidth()\" [style.height]=\"getThumbnailHeight()\" [style.left]=\"getThumbnailLeft(i)\" [style.top]=\"getThumbnailTop(i)\" [ngClass]=\"{ 'ngx-gallery-active': i == selectedIndex, 'ngx-gallery-clickable': clickable }\" [attr.aria-label]=\"labels[i]\">\n                <div class=\"ngx-gallery-icons-wrapper\">\n                    <ngx-gallery-action *ngFor=\"let action of actions\" [icon]=\"action.icon\" [disabled]=\"action.disabled\" [titleText]=\"action.titleText\" (onClick)=\"action.onClick($event, i)\"></ngx-gallery-action>\n                </div>\n                <div class=\"ngx-gallery-remaining-count-overlay\" *ngIf=\"remainingCount && remainingCountValue && (i == (rows * columns) - 1)\">\n                    <span class=\"ngx-gallery-remaining-count\">+{{remainingCountValue}}</span>\n                </div>\n            </a>\n        </div>\n    </div>\n    <ngx-gallery-arrows *ngIf=\"canShowArrows()\" (onPrevClick)=\"moveLeft()\" (onNextClick)=\"moveRight()\" [prevDisabled]=\"!canMoveLeft()\" [nextDisabled]=\"!canMoveRight()\" [arrowPrevIcon]=\"arrowPrevIcon\" [arrowNextIcon]=\"arrowNextIcon\"></ngx-gallery-arrows>\n    ",
                    styles: [":host{width:100%;display:inline-block;position:relative}.ngx-gallery-thumbnails-wrapper{width:100%;height:100%;position:absolute;overflow:hidden}.ngx-gallery-thumbnails{height:100%;width:100%;position:absolute;left:0;transform:translateX(0);transition:transform .5s ease-in-out;will-change:transform}.ngx-gallery-thumbnails .ngx-gallery-thumbnail{position:absolute;height:100%;background-position:center;background-repeat:no-repeat;text-decoration:none}.ngx-gallery-thumbnail-size-cover .ngx-gallery-thumbnails .ngx-gallery-thumbnail{background-size:cover}.ngx-gallery-thumbnail-size-contain .ngx-gallery-thumbnails .ngx-gallery-thumbnail{background-size:contain}.ngx-gallery-remaining-count-overlay{width:100%;height:100%;position:absolute;left:0;top:0;background-color:rgba(0,0,0,.4)}.ngx-gallery-remaining-count{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);color:#fff;font-size:30px}"]
                }] }
    ];
    /** @nocollapse */
    NgxGalleryThumbnailsComponent.ctorParameters = function () { return [
        { type: DomSanitizer },
        { type: ElementRef },
        { type: NgxGalleryHelperService }
    ]; };
    NgxGalleryThumbnailsComponent.propDecorators = {
        images: [{ type: Input }],
        links: [{ type: Input }],
        labels: [{ type: Input }],
        linkTarget: [{ type: Input }],
        columns: [{ type: Input }],
        rows: [{ type: Input }],
        arrows: [{ type: Input }],
        arrowsAutoHide: [{ type: Input }],
        margin: [{ type: Input }],
        selectedIndex: [{ type: Input }],
        clickable: [{ type: Input }],
        swipe: [{ type: Input }],
        size: [{ type: Input }],
        arrowPrevIcon: [{ type: Input }],
        arrowNextIcon: [{ type: Input }],
        moveSize: [{ type: Input }],
        order: [{ type: Input }],
        remainingCount: [{ type: Input }],
        lazyLoading: [{ type: Input }],
        actions: [{ type: Input }],
        onActiveChange: [{ type: Output }],
        onMouseEnter: [{ type: HostListener, args: ['mouseenter',] }],
        onMouseLeave: [{ type: HostListener, args: ['mouseleave',] }]
    };
    return NgxGalleryThumbnailsComponent;
}());
if (false) {
    /** @type {?} */
    NgxGalleryThumbnailsComponent.prototype.thumbnailsLeft;
    /** @type {?} */
    NgxGalleryThumbnailsComponent.prototype.thumbnailsMarginLeft;
    /** @type {?} */
    NgxGalleryThumbnailsComponent.prototype.mouseenter;
    /** @type {?} */
    NgxGalleryThumbnailsComponent.prototype.remainingCountValue;
    /** @type {?} */
    NgxGalleryThumbnailsComponent.prototype.minStopIndex;
    /** @type {?} */
    NgxGalleryThumbnailsComponent.prototype.images;
    /** @type {?} */
    NgxGalleryThumbnailsComponent.prototype.links;
    /** @type {?} */
    NgxGalleryThumbnailsComponent.prototype.labels;
    /** @type {?} */
    NgxGalleryThumbnailsComponent.prototype.linkTarget;
    /** @type {?} */
    NgxGalleryThumbnailsComponent.prototype.columns;
    /** @type {?} */
    NgxGalleryThumbnailsComponent.prototype.rows;
    /** @type {?} */
    NgxGalleryThumbnailsComponent.prototype.arrows;
    /** @type {?} */
    NgxGalleryThumbnailsComponent.prototype.arrowsAutoHide;
    /** @type {?} */
    NgxGalleryThumbnailsComponent.prototype.margin;
    /** @type {?} */
    NgxGalleryThumbnailsComponent.prototype.selectedIndex;
    /** @type {?} */
    NgxGalleryThumbnailsComponent.prototype.clickable;
    /** @type {?} */
    NgxGalleryThumbnailsComponent.prototype.swipe;
    /** @type {?} */
    NgxGalleryThumbnailsComponent.prototype.size;
    /** @type {?} */
    NgxGalleryThumbnailsComponent.prototype.arrowPrevIcon;
    /** @type {?} */
    NgxGalleryThumbnailsComponent.prototype.arrowNextIcon;
    /** @type {?} */
    NgxGalleryThumbnailsComponent.prototype.moveSize;
    /** @type {?} */
    NgxGalleryThumbnailsComponent.prototype.order;
    /** @type {?} */
    NgxGalleryThumbnailsComponent.prototype.remainingCount;
    /** @type {?} */
    NgxGalleryThumbnailsComponent.prototype.lazyLoading;
    /** @type {?} */
    NgxGalleryThumbnailsComponent.prototype.actions;
    /** @type {?} */
    NgxGalleryThumbnailsComponent.prototype.onActiveChange;
    /**
     * @type {?}
     * @private
     */
    NgxGalleryThumbnailsComponent.prototype.index;
    /**
     * @type {?}
     * @private
     */
    NgxGalleryThumbnailsComponent.prototype.sanitization;
    /**
     * @type {?}
     * @private
     */
    NgxGalleryThumbnailsComponent.prototype.elementRef;
    /**
     * @type {?}
     * @private
     */
    NgxGalleryThumbnailsComponent.prototype.helperService;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var NgxGalleryPreviewComponent = /** @class */ (function () {
    function NgxGalleryPreviewComponent(sanitization, elementRef, helperService, renderer, changeDetectorRef) {
        this.sanitization = sanitization;
        this.elementRef = elementRef;
        this.helperService = helperService;
        this.renderer = renderer;
        this.changeDetectorRef = changeDetectorRef;
        this.showSpinner = false;
        this.positionLeft = 0;
        this.positionTop = 0;
        this.zoomValue = 1;
        this.loading = false;
        this.rotateValue = 0;
        this.index = 0;
        this.onOpen = new EventEmitter();
        this.onClose = new EventEmitter();
        this.onActiveChange = new EventEmitter();
        this.isOpen = false;
        this.initialX = 0;
        this.initialY = 0;
        this.initialLeft = 0;
        this.initialTop = 0;
        this.isMove = false;
    }
    /**
     * @return {?}
     */
    NgxGalleryPreviewComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        if (this.arrows && this.arrowsAutoHide) {
            this.arrows = false;
        }
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    NgxGalleryPreviewComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        var _this = this;
        if (changes['swipe']) {
            this.helperService.manageSwipe(this.swipe, this.elementRef, 'preview', (/**
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
    NgxGalleryPreviewComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        if (this.keyDownListener) {
            this.keyDownListener();
        }
    };
    /**
     * @return {?}
     */
    NgxGalleryPreviewComponent.prototype.onMouseEnter = /**
     * @return {?}
     */
    function () {
        if (this.arrowsAutoHide && !this.arrows) {
            this.arrows = true;
        }
    };
    /**
     * @return {?}
     */
    NgxGalleryPreviewComponent.prototype.onMouseLeave = /**
     * @return {?}
     */
    function () {
        if (this.arrowsAutoHide && this.arrows) {
            this.arrows = false;
        }
    };
    /**
     * @param {?} e
     * @return {?}
     */
    NgxGalleryPreviewComponent.prototype.onKeyDown = /**
     * @param {?} e
     * @return {?}
     */
    function (e) {
        if (this.isOpen) {
            if (this.keyboardNavigation) {
                if (this.isKeyboardPrev(e)) {
                    this.showPrev();
                }
                else if (this.isKeyboardNext(e)) {
                    this.showNext();
                }
            }
            if (this.closeOnEsc && this.isKeyboardEsc(e)) {
                this.close();
            }
        }
    };
    /**
     * @param {?} index
     * @return {?}
     */
    NgxGalleryPreviewComponent.prototype.open = /**
     * @param {?} index
     * @return {?}
     */
    function (index) {
        var _this = this;
        this.onOpen.emit();
        this.index = index;
        this.isOpen = true;
        this.show(true);
        if (this.forceFullscreen) {
            this.manageFullscreen();
        }
        this.keyDownListener = this.renderer.listen("window", "keydown", (/**
         * @param {?} e
         * @return {?}
         */
        function (e) { return _this.onKeyDown(e); }));
    };
    /**
     * @return {?}
     */
    NgxGalleryPreviewComponent.prototype.close = /**
     * @return {?}
     */
    function () {
        this.isOpen = false;
        this.closeFullscreen();
        this.onClose.emit();
        this.stopAutoPlay();
        if (this.keyDownListener) {
            this.keyDownListener();
        }
    };
    /**
     * @return {?}
     */
    NgxGalleryPreviewComponent.prototype.imageMouseEnter = /**
     * @return {?}
     */
    function () {
        if (this.autoPlay && this.autoPlayPauseOnHover) {
            this.stopAutoPlay();
        }
    };
    /**
     * @return {?}
     */
    NgxGalleryPreviewComponent.prototype.imageMouseLeave = /**
     * @return {?}
     */
    function () {
        if (this.autoPlay && this.autoPlayPauseOnHover) {
            this.startAutoPlay();
        }
    };
    /**
     * @return {?}
     */
    NgxGalleryPreviewComponent.prototype.startAutoPlay = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (this.autoPlay) {
            this.stopAutoPlay();
            this.timer = setTimeout((/**
             * @return {?}
             */
            function () {
                if (!_this.showNext()) {
                    _this.index = -1;
                    _this.showNext();
                }
            }), this.autoPlayInterval);
        }
    };
    /**
     * @return {?}
     */
    NgxGalleryPreviewComponent.prototype.stopAutoPlay = /**
     * @return {?}
     */
    function () {
        if (this.timer) {
            clearTimeout(this.timer);
        }
    };
    /**
     * @param {?} index
     * @return {?}
     */
    NgxGalleryPreviewComponent.prototype.showAtIndex = /**
     * @param {?} index
     * @return {?}
     */
    function (index) {
        this.index = index;
        this.show();
    };
    /**
     * @return {?}
     */
    NgxGalleryPreviewComponent.prototype.showNext = /**
     * @return {?}
     */
    function () {
        if (this.canShowNext()) {
            this.index++;
            if (this.index === this.images.length) {
                this.index = 0;
            }
            this.show();
            return true;
        }
        else {
            return false;
        }
    };
    /**
     * @return {?}
     */
    NgxGalleryPreviewComponent.prototype.showPrev = /**
     * @return {?}
     */
    function () {
        if (this.canShowPrev()) {
            this.index--;
            if (this.index < 0) {
                this.index = this.images.length - 1;
            }
            this.show();
        }
    };
    /**
     * @return {?}
     */
    NgxGalleryPreviewComponent.prototype.canShowNext = /**
     * @return {?}
     */
    function () {
        if (this.loading) {
            return false;
        }
        else if (this.images) {
            return this.infinityMove || this.index < this.images.length - 1 ? true : false;
        }
        else {
            return false;
        }
    };
    /**
     * @return {?}
     */
    NgxGalleryPreviewComponent.prototype.canShowPrev = /**
     * @return {?}
     */
    function () {
        if (this.loading) {
            return false;
        }
        else if (this.images) {
            return this.infinityMove || this.index > 0 ? true : false;
        }
        else {
            return false;
        }
    };
    /**
     * @return {?}
     */
    NgxGalleryPreviewComponent.prototype.manageFullscreen = /**
     * @return {?}
     */
    function () {
        if (this.fullscreen || this.forceFullscreen) {
            /** @type {?} */
            var doc = (/** @type {?} */ (document));
            if (!doc.fullscreenElement && !doc.mozFullScreenElement
                && !doc.webkitFullscreenElement && !doc.msFullscreenElement) {
                this.openFullscreen();
            }
            else {
                this.closeFullscreen();
            }
        }
    };
    /**
     * @param {?} image
     * @return {?}
     */
    NgxGalleryPreviewComponent.prototype.getSafeUrl = /**
     * @param {?} image
     * @return {?}
     */
    function (image) {
        return image.substr(0, 10) === 'data:image' ?
            image : this.sanitization.bypassSecurityTrustUrl(image);
    };
    /**
     * @return {?}
     */
    NgxGalleryPreviewComponent.prototype.zoomIn = /**
     * @return {?}
     */
    function () {
        if (this.canZoomIn()) {
            this.zoomValue += this.zoomStep;
            if (this.zoomValue > this.zoomMax) {
                this.zoomValue = this.zoomMax;
            }
        }
    };
    /**
     * @return {?}
     */
    NgxGalleryPreviewComponent.prototype.zoomOut = /**
     * @return {?}
     */
    function () {
        if (this.canZoomOut()) {
            this.zoomValue -= this.zoomStep;
            if (this.zoomValue < this.zoomMin) {
                this.zoomValue = this.zoomMin;
            }
            if (this.zoomValue <= 1) {
                this.resetPosition();
            }
        }
    };
    /**
     * @return {?}
     */
    NgxGalleryPreviewComponent.prototype.rotateLeft = /**
     * @return {?}
     */
    function () {
        this.rotateValue -= 90;
    };
    /**
     * @return {?}
     */
    NgxGalleryPreviewComponent.prototype.rotateRight = /**
     * @return {?}
     */
    function () {
        this.rotateValue += 90;
    };
    /**
     * @return {?}
     */
    NgxGalleryPreviewComponent.prototype.getTransform = /**
     * @return {?}
     */
    function () {
        return this.sanitization.bypassSecurityTrustStyle('scale(' + this.zoomValue + ') rotate(' + this.rotateValue + 'deg)');
    };
    /**
     * @return {?}
     */
    NgxGalleryPreviewComponent.prototype.canZoomIn = /**
     * @return {?}
     */
    function () {
        return this.zoomValue < this.zoomMax ? true : false;
    };
    /**
     * @return {?}
     */
    NgxGalleryPreviewComponent.prototype.canZoomOut = /**
     * @return {?}
     */
    function () {
        return this.zoomValue > this.zoomMin ? true : false;
    };
    /**
     * @return {?}
     */
    NgxGalleryPreviewComponent.prototype.canDragOnZoom = /**
     * @return {?}
     */
    function () {
        return this.zoom && this.zoomValue > 1;
    };
    /**
     * @param {?} e
     * @return {?}
     */
    NgxGalleryPreviewComponent.prototype.mouseDownHandler = /**
     * @param {?} e
     * @return {?}
     */
    function (e) {
        if (this.canDragOnZoom()) {
            this.initialX = this.getClientX(e);
            this.initialY = this.getClientY(e);
            this.initialLeft = this.positionLeft;
            this.initialTop = this.positionTop;
            this.isMove = true;
            e.preventDefault();
        }
    };
    /**
     * @param {?} e
     * @return {?}
     */
    NgxGalleryPreviewComponent.prototype.mouseUpHandler = /**
     * @param {?} e
     * @return {?}
     */
    function (e) {
        this.isMove = false;
    };
    /**
     * @param {?} e
     * @return {?}
     */
    NgxGalleryPreviewComponent.prototype.mouseMoveHandler = /**
     * @param {?} e
     * @return {?}
     */
    function (e) {
        if (this.isMove) {
            this.positionLeft = this.initialLeft + (this.getClientX(e) - this.initialX);
            this.positionTop = this.initialTop + (this.getClientY(e) - this.initialY);
        }
    };
    /**
     * @private
     * @param {?} e
     * @return {?}
     */
    NgxGalleryPreviewComponent.prototype.getClientX = /**
     * @private
     * @param {?} e
     * @return {?}
     */
    function (e) {
        return e.touches && e.touches.length ? e.touches[0].clientX : e.clientX;
    };
    /**
     * @private
     * @param {?} e
     * @return {?}
     */
    NgxGalleryPreviewComponent.prototype.getClientY = /**
     * @private
     * @param {?} e
     * @return {?}
     */
    function (e) {
        return e.touches && e.touches.length ? e.touches[0].clientY : e.clientY;
    };
    /**
     * @private
     * @return {?}
     */
    NgxGalleryPreviewComponent.prototype.resetPosition = /**
     * @private
     * @return {?}
     */
    function () {
        if (this.zoom) {
            this.positionLeft = 0;
            this.positionTop = 0;
        }
    };
    /**
     * @private
     * @param {?} e
     * @return {?}
     */
    NgxGalleryPreviewComponent.prototype.isKeyboardNext = /**
     * @private
     * @param {?} e
     * @return {?}
     */
    function (e) {
        return e.keyCode === 39 ? true : false;
    };
    /**
     * @private
     * @param {?} e
     * @return {?}
     */
    NgxGalleryPreviewComponent.prototype.isKeyboardPrev = /**
     * @private
     * @param {?} e
     * @return {?}
     */
    function (e) {
        return e.keyCode === 37 ? true : false;
    };
    /**
     * @private
     * @param {?} e
     * @return {?}
     */
    NgxGalleryPreviewComponent.prototype.isKeyboardEsc = /**
     * @private
     * @param {?} e
     * @return {?}
     */
    function (e) {
        return e.keyCode === 27 ? true : false;
    };
    /**
     * @private
     * @return {?}
     */
    NgxGalleryPreviewComponent.prototype.openFullscreen = /**
     * @private
     * @return {?}
     */
    function () {
        /** @type {?} */
        var element = (/** @type {?} */ (document.documentElement));
        if (element.requestFullscreen) {
            element.requestFullscreen();
        }
        else if (element.msRequestFullscreen) {
            element.msRequestFullscreen();
        }
        else if (element.mozRequestFullScreen) {
            element.mozRequestFullScreen();
        }
        else if (element.webkitRequestFullscreen) {
            element.webkitRequestFullscreen();
        }
    };
    /**
     * @private
     * @return {?}
     */
    NgxGalleryPreviewComponent.prototype.closeFullscreen = /**
     * @private
     * @return {?}
     */
    function () {
        if (this.isFullscreen()) {
            /** @type {?} */
            var doc = (/** @type {?} */ (document));
            if (doc.exitFullscreen) {
                doc.exitFullscreen();
            }
            else if (doc.msExitFullscreen) {
                doc.msExitFullscreen();
            }
            else if (doc.mozCancelFullScreen) {
                doc.mozCancelFullScreen();
            }
            else if (doc.webkitExitFullscreen) {
                doc.webkitExitFullscreen();
            }
        }
    };
    /**
     * @private
     * @return {?}
     */
    NgxGalleryPreviewComponent.prototype.isFullscreen = /**
     * @private
     * @return {?}
     */
    function () {
        /** @type {?} */
        var doc = (/** @type {?} */ (document));
        return doc.fullscreenElement || doc.webkitFullscreenElement
            || doc.mozFullScreenElement || doc.msFullscreenElement;
    };
    /**
     * @private
     * @param {?=} first
     * @return {?}
     */
    NgxGalleryPreviewComponent.prototype.show = /**
     * @private
     * @param {?=} first
     * @return {?}
     */
    function (first) {
        var _this = this;
        if (first === void 0) { first = false; }
        this.loading = true;
        this.stopAutoPlay();
        this.onActiveChange.emit(this.index);
        if (first || !this.animation) {
            this._show();
        }
        else {
            setTimeout((/**
             * @return {?}
             */
            function () { return _this._show(); }), 600);
        }
    };
    /**
     * @private
     * @return {?}
     */
    NgxGalleryPreviewComponent.prototype._show = /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        this.zoomValue = 1;
        this.rotateValue = 0;
        this.resetPosition();
        this.src = this.getSafeUrl((/** @type {?} */ (this.images[this.index])));
        this.srcIndex = this.index;
        this.description = this.descriptions[this.index];
        this.changeDetectorRef.markForCheck();
        setTimeout((/**
         * @return {?}
         */
        function () {
            if (_this.isLoaded(_this.previewImage.nativeElement)) {
                _this.loading = false;
                _this.startAutoPlay();
                _this.changeDetectorRef.markForCheck();
            }
            else {
                setTimeout((/**
                 * @return {?}
                 */
                function () {
                    if (_this.loading) {
                        _this.showSpinner = true;
                        _this.changeDetectorRef.markForCheck();
                    }
                }));
                _this.previewImage.nativeElement.onload = (/**
                 * @return {?}
                 */
                function () {
                    _this.loading = false;
                    _this.showSpinner = false;
                    _this.previewImage.nativeElement.onload = null;
                    _this.startAutoPlay();
                    _this.changeDetectorRef.markForCheck();
                });
            }
        }));
    };
    /**
     * @private
     * @param {?} img
     * @return {?}
     */
    NgxGalleryPreviewComponent.prototype.isLoaded = /**
     * @private
     * @param {?} img
     * @return {?}
     */
    function (img) {
        if (!img.complete) {
            return false;
        }
        if (typeof img.naturalWidth !== 'undefined' && img.naturalWidth === 0) {
            return false;
        }
        return true;
    };
    NgxGalleryPreviewComponent.decorators = [
        { type: Component, args: [{
                    selector: 'ngx-gallery-preview',
                    template: "\n        <ngx-gallery-arrows *ngIf=\"arrows\" (onPrevClick)=\"showPrev()\" (onNextClick)=\"showNext()\" [prevDisabled]=\"!canShowPrev()\" [nextDisabled]=\"!canShowNext()\" [arrowPrevIcon]=\"arrowPrevIcon\" [arrowNextIcon]=\"arrowNextIcon\"></ngx-gallery-arrows>\n        <div class=\"ngx-gallery-preview-top\">\n            <div class=\"ngx-gallery-preview-icons\">\n                <ngx-gallery-action *ngFor=\"let action of actions\" [icon]=\"action.icon\" [disabled]=\"action.disabled\" [titleText]=\"action.titleText\" (onClick)=\"action.onClick($event, index)\"></ngx-gallery-action>\n                <a *ngIf=\"download && src\" [href]=\"src\" class=\"ngx-gallery-icon\" aria-hidden=\"true\" download>\n\n                  <mat-icon class=\"ngx-gallery-icon-content\">{{ downloadIcon }}</mat-icon>\n                </a>\n                <ngx-gallery-action *ngIf=\"zoom\" [icon]=\"zoomOutIcon\" [disabled]=\"!canZoomOut()\" (onClick)=\"zoomOut()\"></ngx-gallery-action>\n                <ngx-gallery-action *ngIf=\"zoom\" [icon]=\"zoomInIcon\" [disabled]=\"!canZoomIn()\" (onClick)=\"zoomIn()\"></ngx-gallery-action>\n                <ngx-gallery-action *ngIf=\"rotate\" [icon]=\"rotateLeftIcon\" (onClick)=\"rotateLeft()\"></ngx-gallery-action>\n                <ngx-gallery-action *ngIf=\"rotate\" [icon]=\"rotateRightIcon\" (onClick)=\"rotateRight()\"></ngx-gallery-action>\n                <ngx-gallery-action *ngIf=\"fullscreen\" [icon]=\"fullscreenIcon\" (onClick)=\"manageFullscreen()\"></ngx-gallery-action>\n                <ngx-gallery-action [icon]=\"closeIcon\" (onClick)=\"close()\"></ngx-gallery-action>\n            </div>\n        </div>\n        <div class=\"ngx-spinner-wrapper ngx-gallery-center\" [class.ngx-gallery-active]=\"showSpinner\">\n          <mat-icon class=\"ngx-gallery-icon-content\">{{ spinnerIcon }}</mat-icon>\n        </div>\n        <div class=\"ngx-gallery-preview-wrapper\" (click)=\"closeOnClick && close()\" (mouseup)=\"mouseUpHandler($event)\" (mousemove)=\"mouseMoveHandler($event)\" (touchend)=\"mouseUpHandler($event)\" (touchmove)=\"mouseMoveHandler($event)\">\n            <div class=\"ngx-gallery-preview-img-wrapper\">\n                <img *ngIf=\"src\" #previewImage class=\"ngx-gallery-preview-img ngx-gallery-center\" [src]=\"src\" (click)=\"$event.stopPropagation()\" (mouseenter)=\"imageMouseEnter()\" (mouseleave)=\"imageMouseLeave()\" (mousedown)=\"mouseDownHandler($event)\" (touchstart)=\"mouseDownHandler($event)\" [class.ngx-gallery-active]=\"!loading\" [class.animation]=\"animation\" [class.ngx-gallery-grab]=\"canDragOnZoom()\" [style.transform]=\"getTransform()\" [style.left]=\"positionLeft + 'px'\" [style.top]=\"positionTop + 'px'\"/>\n                <ngx-gallery-bullets *ngIf=\"bullets\" [count]=\"images.length\" [active]=\"index\" (onChange)=\"showAtIndex($event)\"></ngx-gallery-bullets>\n            </div>\n            <div class=\"ngx-gallery-preview-text\" *ngIf=\"showDescription && description\" [innerHTML]=\"description\" (click)=\"$event.stopPropagation()\"></div>\n        </div>\n    ",
                    styles: [":host(.ngx-gallery-active){width:100%;height:100%;position:fixed;left:0;top:0;background:rgba(0,0,0,.7);z-index:10000;display:inline-block}:host{display:none}:host ::ng-deep .ngx-gallery-arrow{font-size:50px}:host ::ng-deep ngx-gallery-bullets{height:5%;align-items:center;padding:0}.ngx-gallery-preview-img{opacity:0;max-width:90%;max-height:90%;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;transition:transform .5s}.ngx-gallery-preview-img.animation{transition:opacity .5s linear,transform .5s}.ngx-gallery-preview-img.ngx-gallery-active{opacity:1}.ngx-gallery-preview-img.ngx-gallery-grab{cursor:grab;cursor:-webkit-grab}.ngx-gallery-icon.ngx-gallery-spinner{font-size:50px;left:0;display:inline-block}:host ::ng-deep .ngx-gallery-preview-top{position:absolute;width:100%;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}:host ::ng-deep .ngx-gallery-preview-icons{float:right}:host ::ng-deep .ngx-gallery-preview-icons .ngx-gallery-icon{position:relative;margin-right:10px;margin-top:10px;font-size:25px;cursor:pointer;text-decoration:none}:host ::ng-deep .ngx-gallery-preview-icons .ngx-gallery-icon.ngx-gallery-icon-disabled{cursor:default;opacity:.4}.ngx-spinner-wrapper{width:50px;height:50px;display:none}.ngx-spinner-wrapper.ngx-gallery-active{display:inline-block}.ngx-gallery-center{position:absolute;left:0;right:0;bottom:0;margin:auto;top:0}.ngx-gallery-preview-text{width:100%;background:rgba(0,0,0,.7);padding:10px;text-align:center;color:#fff;font-size:16px;flex:0 1 auto;z-index:10}.ngx-gallery-preview-wrapper{width:100%;height:100%;display:flex;flex-flow:column}.ngx-gallery-preview-img-wrapper{flex:1 1 auto;position:relative}"]
                }] }
    ];
    /** @nocollapse */
    NgxGalleryPreviewComponent.ctorParameters = function () { return [
        { type: DomSanitizer },
        { type: ElementRef },
        { type: NgxGalleryHelperService },
        { type: Renderer2 },
        { type: ChangeDetectorRef }
    ]; };
    NgxGalleryPreviewComponent.propDecorators = {
        images: [{ type: Input }],
        descriptions: [{ type: Input }],
        showDescription: [{ type: Input }],
        arrows: [{ type: Input }],
        arrowsAutoHide: [{ type: Input }],
        swipe: [{ type: Input }],
        fullscreen: [{ type: Input }],
        forceFullscreen: [{ type: Input }],
        closeOnClick: [{ type: Input }],
        closeOnEsc: [{ type: Input }],
        keyboardNavigation: [{ type: Input }],
        arrowPrevIcon: [{ type: Input }],
        arrowNextIcon: [{ type: Input }],
        closeIcon: [{ type: Input }],
        fullscreenIcon: [{ type: Input }],
        spinnerIcon: [{ type: Input }],
        autoPlay: [{ type: Input }],
        autoPlayInterval: [{ type: Input }],
        autoPlayPauseOnHover: [{ type: Input }],
        infinityMove: [{ type: Input }],
        zoom: [{ type: Input }],
        zoomStep: [{ type: Input }],
        zoomMax: [{ type: Input }],
        zoomMin: [{ type: Input }],
        zoomInIcon: [{ type: Input }],
        zoomOutIcon: [{ type: Input }],
        animation: [{ type: Input }],
        actions: [{ type: Input }],
        rotate: [{ type: Input }],
        rotateLeftIcon: [{ type: Input }],
        rotateRightIcon: [{ type: Input }],
        download: [{ type: Input }],
        downloadIcon: [{ type: Input }],
        bullets: [{ type: Input }],
        onOpen: [{ type: Output }],
        onClose: [{ type: Output }],
        onActiveChange: [{ type: Output }],
        previewImage: [{ type: ViewChild, args: ['previewImage',] }],
        onMouseEnter: [{ type: HostListener, args: ['mouseenter',] }],
        onMouseLeave: [{ type: HostListener, args: ['mouseleave',] }]
    };
    return NgxGalleryPreviewComponent;
}());
if (false) {
    /** @type {?} */
    NgxGalleryPreviewComponent.prototype.src;
    /** @type {?} */
    NgxGalleryPreviewComponent.prototype.srcIndex;
    /** @type {?} */
    NgxGalleryPreviewComponent.prototype.description;
    /** @type {?} */
    NgxGalleryPreviewComponent.prototype.showSpinner;
    /** @type {?} */
    NgxGalleryPreviewComponent.prototype.positionLeft;
    /** @type {?} */
    NgxGalleryPreviewComponent.prototype.positionTop;
    /** @type {?} */
    NgxGalleryPreviewComponent.prototype.zoomValue;
    /** @type {?} */
    NgxGalleryPreviewComponent.prototype.loading;
    /** @type {?} */
    NgxGalleryPreviewComponent.prototype.rotateValue;
    /** @type {?} */
    NgxGalleryPreviewComponent.prototype.index;
    /** @type {?} */
    NgxGalleryPreviewComponent.prototype.images;
    /** @type {?} */
    NgxGalleryPreviewComponent.prototype.descriptions;
    /** @type {?} */
    NgxGalleryPreviewComponent.prototype.showDescription;
    /** @type {?} */
    NgxGalleryPreviewComponent.prototype.arrows;
    /** @type {?} */
    NgxGalleryPreviewComponent.prototype.arrowsAutoHide;
    /** @type {?} */
    NgxGalleryPreviewComponent.prototype.swipe;
    /** @type {?} */
    NgxGalleryPreviewComponent.prototype.fullscreen;
    /** @type {?} */
    NgxGalleryPreviewComponent.prototype.forceFullscreen;
    /** @type {?} */
    NgxGalleryPreviewComponent.prototype.closeOnClick;
    /** @type {?} */
    NgxGalleryPreviewComponent.prototype.closeOnEsc;
    /** @type {?} */
    NgxGalleryPreviewComponent.prototype.keyboardNavigation;
    /** @type {?} */
    NgxGalleryPreviewComponent.prototype.arrowPrevIcon;
    /** @type {?} */
    NgxGalleryPreviewComponent.prototype.arrowNextIcon;
    /** @type {?} */
    NgxGalleryPreviewComponent.prototype.closeIcon;
    /** @type {?} */
    NgxGalleryPreviewComponent.prototype.fullscreenIcon;
    /** @type {?} */
    NgxGalleryPreviewComponent.prototype.spinnerIcon;
    /** @type {?} */
    NgxGalleryPreviewComponent.prototype.autoPlay;
    /** @type {?} */
    NgxGalleryPreviewComponent.prototype.autoPlayInterval;
    /** @type {?} */
    NgxGalleryPreviewComponent.prototype.autoPlayPauseOnHover;
    /** @type {?} */
    NgxGalleryPreviewComponent.prototype.infinityMove;
    /** @type {?} */
    NgxGalleryPreviewComponent.prototype.zoom;
    /** @type {?} */
    NgxGalleryPreviewComponent.prototype.zoomStep;
    /** @type {?} */
    NgxGalleryPreviewComponent.prototype.zoomMax;
    /** @type {?} */
    NgxGalleryPreviewComponent.prototype.zoomMin;
    /** @type {?} */
    NgxGalleryPreviewComponent.prototype.zoomInIcon;
    /** @type {?} */
    NgxGalleryPreviewComponent.prototype.zoomOutIcon;
    /** @type {?} */
    NgxGalleryPreviewComponent.prototype.animation;
    /** @type {?} */
    NgxGalleryPreviewComponent.prototype.actions;
    /** @type {?} */
    NgxGalleryPreviewComponent.prototype.rotate;
    /** @type {?} */
    NgxGalleryPreviewComponent.prototype.rotateLeftIcon;
    /** @type {?} */
    NgxGalleryPreviewComponent.prototype.rotateRightIcon;
    /** @type {?} */
    NgxGalleryPreviewComponent.prototype.download;
    /** @type {?} */
    NgxGalleryPreviewComponent.prototype.downloadIcon;
    /** @type {?} */
    NgxGalleryPreviewComponent.prototype.bullets;
    /** @type {?} */
    NgxGalleryPreviewComponent.prototype.onOpen;
    /** @type {?} */
    NgxGalleryPreviewComponent.prototype.onClose;
    /** @type {?} */
    NgxGalleryPreviewComponent.prototype.onActiveChange;
    /** @type {?} */
    NgxGalleryPreviewComponent.prototype.previewImage;
    /**
     * @type {?}
     * @private
     */
    NgxGalleryPreviewComponent.prototype.isOpen;
    /**
     * @type {?}
     * @private
     */
    NgxGalleryPreviewComponent.prototype.timer;
    /**
     * @type {?}
     * @private
     */
    NgxGalleryPreviewComponent.prototype.initialX;
    /**
     * @type {?}
     * @private
     */
    NgxGalleryPreviewComponent.prototype.initialY;
    /**
     * @type {?}
     * @private
     */
    NgxGalleryPreviewComponent.prototype.initialLeft;
    /**
     * @type {?}
     * @private
     */
    NgxGalleryPreviewComponent.prototype.initialTop;
    /**
     * @type {?}
     * @private
     */
    NgxGalleryPreviewComponent.prototype.isMove;
    /**
     * @type {?}
     * @private
     */
    NgxGalleryPreviewComponent.prototype.keyDownListener;
    /**
     * @type {?}
     * @private
     */
    NgxGalleryPreviewComponent.prototype.sanitization;
    /**
     * @type {?}
     * @private
     */
    NgxGalleryPreviewComponent.prototype.elementRef;
    /**
     * @type {?}
     * @private
     */
    NgxGalleryPreviewComponent.prototype.helperService;
    /**
     * @type {?}
     * @private
     */
    NgxGalleryPreviewComponent.prototype.renderer;
    /**
     * @type {?}
     * @private
     */
    NgxGalleryPreviewComponent.prototype.changeDetectorRef;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var NgxGalleryImageSize = /** @class */ (function () {
    function NgxGalleryImageSize() {
    }
    NgxGalleryImageSize.Cover = 'cover';
    NgxGalleryImageSize.Contain = 'contain';
    return NgxGalleryImageSize;
}());
if (false) {
    /** @type {?} */
    NgxGalleryImageSize.Cover;
    /** @type {?} */
    NgxGalleryImageSize.Contain;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var NgxGalleryLayout = /** @class */ (function () {
    function NgxGalleryLayout() {
    }
    NgxGalleryLayout.ThumbnailsTop = 'thumbnails-top';
    NgxGalleryLayout.ThumbnailsBottom = 'thumbnails-bottom';
    return NgxGalleryLayout;
}());
if (false) {
    /** @type {?} */
    NgxGalleryLayout.ThumbnailsTop;
    /** @type {?} */
    NgxGalleryLayout.ThumbnailsBottom;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 */
function INgxGalleryAction() { }
if (false) {
    /** @type {?} */
    INgxGalleryAction.prototype.icon;
    /** @type {?|undefined} */
    INgxGalleryAction.prototype.disabled;
    /** @type {?|undefined} */
    INgxGalleryAction.prototype.titleText;
    /** @type {?} */
    INgxGalleryAction.prototype.onClick;
}
var NgxGalleryAction = /** @class */ (function () {
    function NgxGalleryAction(action) {
        this.icon = action.icon;
        this.disabled = action.disabled ? action.disabled : false;
        this.titleText = action.titleText ? action.titleText : '';
        this.onClick = action.onClick;
    }
    return NgxGalleryAction;
}());
if (false) {
    /** @type {?} */
    NgxGalleryAction.prototype.icon;
    /** @type {?} */
    NgxGalleryAction.prototype.disabled;
    /** @type {?} */
    NgxGalleryAction.prototype.titleText;
    /** @type {?} */
    NgxGalleryAction.prototype.onClick;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 */
function INgxGalleryOptions() { }
if (false) {
    /** @type {?|undefined} */
    INgxGalleryOptions.prototype.width;
    /** @type {?|undefined} */
    INgxGalleryOptions.prototype.height;
    /** @type {?|undefined} */
    INgxGalleryOptions.prototype.breakpoint;
    /** @type {?|undefined} */
    INgxGalleryOptions.prototype.fullWidth;
    /** @type {?|undefined} */
    INgxGalleryOptions.prototype.layout;
    /** @type {?|undefined} */
    INgxGalleryOptions.prototype.startIndex;
    /** @type {?|undefined} */
    INgxGalleryOptions.prototype.linkTarget;
    /** @type {?|undefined} */
    INgxGalleryOptions.prototype.lazyLoading;
    /** @type {?|undefined} */
    INgxGalleryOptions.prototype.image;
    /** @type {?|undefined} */
    INgxGalleryOptions.prototype.imagePercent;
    /** @type {?|undefined} */
    INgxGalleryOptions.prototype.imageArrows;
    /** @type {?|undefined} */
    INgxGalleryOptions.prototype.imageArrowsAutoHide;
    /** @type {?|undefined} */
    INgxGalleryOptions.prototype.imageSwipe;
    /** @type {?|undefined} */
    INgxGalleryOptions.prototype.imageAnimation;
    /** @type {?|undefined} */
    INgxGalleryOptions.prototype.imageSize;
    /** @type {?|undefined} */
    INgxGalleryOptions.prototype.imageAutoPlay;
    /** @type {?|undefined} */
    INgxGalleryOptions.prototype.imageAutoPlayInterval;
    /** @type {?|undefined} */
    INgxGalleryOptions.prototype.imageAutoPlayPauseOnHover;
    /** @type {?|undefined} */
    INgxGalleryOptions.prototype.imageInfinityMove;
    /** @type {?|undefined} */
    INgxGalleryOptions.prototype.imageActions;
    /** @type {?|undefined} */
    INgxGalleryOptions.prototype.imageDescription;
    /** @type {?|undefined} */
    INgxGalleryOptions.prototype.imageBullets;
    /** @type {?|undefined} */
    INgxGalleryOptions.prototype.thumbnails;
    /** @type {?|undefined} */
    INgxGalleryOptions.prototype.thumbnailsColumns;
    /** @type {?|undefined} */
    INgxGalleryOptions.prototype.thumbnailsRows;
    /** @type {?|undefined} */
    INgxGalleryOptions.prototype.thumbnailsPercent;
    /** @type {?|undefined} */
    INgxGalleryOptions.prototype.thumbnailsMargin;
    /** @type {?|undefined} */
    INgxGalleryOptions.prototype.thumbnailsArrows;
    /** @type {?|undefined} */
    INgxGalleryOptions.prototype.thumbnailsArrowsAutoHide;
    /** @type {?|undefined} */
    INgxGalleryOptions.prototype.thumbnailsSwipe;
    /** @type {?|undefined} */
    INgxGalleryOptions.prototype.thumbnailsMoveSize;
    /** @type {?|undefined} */
    INgxGalleryOptions.prototype.thumbnailsOrder;
    /** @type {?|undefined} */
    INgxGalleryOptions.prototype.thumbnailsRemainingCount;
    /** @type {?|undefined} */
    INgxGalleryOptions.prototype.thumbnailsAsLinks;
    /** @type {?|undefined} */
    INgxGalleryOptions.prototype.thumbnailsAutoHide;
    /** @type {?|undefined} */
    INgxGalleryOptions.prototype.thumbnailMargin;
    /** @type {?|undefined} */
    INgxGalleryOptions.prototype.thumbnailSize;
    /** @type {?|undefined} */
    INgxGalleryOptions.prototype.thumbnailActions;
    /** @type {?|undefined} */
    INgxGalleryOptions.prototype.preview;
    /** @type {?|undefined} */
    INgxGalleryOptions.prototype.previewDescription;
    /** @type {?|undefined} */
    INgxGalleryOptions.prototype.previewArrows;
    /** @type {?|undefined} */
    INgxGalleryOptions.prototype.previewArrowsAutoHide;
    /** @type {?|undefined} */
    INgxGalleryOptions.prototype.previewSwipe;
    /** @type {?|undefined} */
    INgxGalleryOptions.prototype.previewFullscreen;
    /** @type {?|undefined} */
    INgxGalleryOptions.prototype.previewForceFullscreen;
    /** @type {?|undefined} */
    INgxGalleryOptions.prototype.previewCloseOnClick;
    /** @type {?|undefined} */
    INgxGalleryOptions.prototype.previewCloseOnEsc;
    /** @type {?|undefined} */
    INgxGalleryOptions.prototype.previewKeyboardNavigation;
    /** @type {?|undefined} */
    INgxGalleryOptions.prototype.previewAnimation;
    /** @type {?|undefined} */
    INgxGalleryOptions.prototype.previewAutoPlay;
    /** @type {?|undefined} */
    INgxGalleryOptions.prototype.previewAutoPlayInterval;
    /** @type {?|undefined} */
    INgxGalleryOptions.prototype.previewAutoPlayPauseOnHover;
    /** @type {?|undefined} */
    INgxGalleryOptions.prototype.previewInfinityMove;
    /** @type {?|undefined} */
    INgxGalleryOptions.prototype.previewZoom;
    /** @type {?|undefined} */
    INgxGalleryOptions.prototype.previewZoomStep;
    /** @type {?|undefined} */
    INgxGalleryOptions.prototype.previewZoomMax;
    /** @type {?|undefined} */
    INgxGalleryOptions.prototype.previewZoomMin;
    /** @type {?|undefined} */
    INgxGalleryOptions.prototype.previewRotate;
    /** @type {?|undefined} */
    INgxGalleryOptions.prototype.previewDownload;
    /** @type {?|undefined} */
    INgxGalleryOptions.prototype.previewCustom;
    /** @type {?|undefined} */
    INgxGalleryOptions.prototype.previewBullets;
    /** @type {?|undefined} */
    INgxGalleryOptions.prototype.arrowPrevIcon;
    /** @type {?|undefined} */
    INgxGalleryOptions.prototype.arrowNextIcon;
    /** @type {?|undefined} */
    INgxGalleryOptions.prototype.closeIcon;
    /** @type {?|undefined} */
    INgxGalleryOptions.prototype.fullscreenIcon;
    /** @type {?|undefined} */
    INgxGalleryOptions.prototype.spinnerIcon;
    /** @type {?|undefined} */
    INgxGalleryOptions.prototype.zoomInIcon;
    /** @type {?|undefined} */
    INgxGalleryOptions.prototype.zoomOutIcon;
    /** @type {?|undefined} */
    INgxGalleryOptions.prototype.rotateLeftIcon;
    /** @type {?|undefined} */
    INgxGalleryOptions.prototype.rotateRightIcon;
    /** @type {?|undefined} */
    INgxGalleryOptions.prototype.downloadIcon;
    /** @type {?|undefined} */
    INgxGalleryOptions.prototype.previewPrevIconOption;
    /** @type {?|undefined} */
    INgxGalleryOptions.prototype.previewNextIconOption;
    /** @type {?|undefined} */
    INgxGalleryOptions.prototype.actions;
}
var NgxGalleryOptions = /** @class */ (function () {
    function NgxGalleryOptions(obj) {
        /** @type {?} */
        var preventDefaults = obj.breakpoint === undefined ? false : true;
        /**
         * @template T
         * @param {?} source
         * @param {?} defaultValue
         * @return {?}
         */
        function use(source, defaultValue) {
            return obj && (source !== undefined || preventDefaults) ? source : defaultValue;
        }
        this.breakpoint = use(obj.breakpoint, undefined);
        this.width = use(obj.width, '500px');
        this.height = use(obj.height, '400px');
        this.fullWidth = use(obj.fullWidth, false);
        this.layout = use(obj.layout, NgxGalleryLayout.ThumbnailsBottom);
        this.startIndex = use(obj.startIndex, 0);
        this.linkTarget = use(obj.linkTarget, '_blank');
        this.lazyLoading = use(obj.lazyLoading, true);
        this.image = use(obj.image, true);
        this.imagePercent = use(obj.imagePercent, 75);
        this.imageArrows = use(obj.imageArrows, true);
        this.imageArrowsAutoHide = use(obj.imageArrowsAutoHide, false);
        this.imageSwipe = use(obj.imageSwipe, false);
        this.imageAnimation = use(obj.imageAnimation, NgxGalleryAnimation.Fade);
        this.imageSize = use(obj.imageSize, NgxGalleryImageSize.Cover);
        this.imageAutoPlay = use(obj.imageAutoPlay, false);
        this.imageAutoPlayInterval = use(obj.imageAutoPlayInterval, 2000);
        this.imageAutoPlayPauseOnHover = use(obj.imageAutoPlayPauseOnHover, false);
        this.imageInfinityMove = use(obj.imageInfinityMove, false);
        if (obj && obj.imageActions && obj.imageActions.length) {
            obj.imageActions = obj.imageActions.map((/**
             * @param {?} action
             * @return {?}
             */
            function (action) { return new NgxGalleryAction(action); }));
        }
        this.imageActions = use(obj.imageActions, []);
        this.imageDescription = use(obj.imageDescription, false);
        this.imageBullets = use(obj.imageBullets, false);
        this.thumbnails = use(obj.thumbnails, true);
        this.thumbnailsColumns = use(obj.thumbnailsColumns, 4);
        this.thumbnailsRows = use(obj.thumbnailsRows, 1);
        this.thumbnailsPercent = use(obj.thumbnailsPercent, 25);
        this.thumbnailsMargin = use(obj.thumbnailsMargin, 10);
        this.thumbnailsArrows = use(obj.thumbnailsArrows, true);
        this.thumbnailsArrowsAutoHide = use(obj.thumbnailsArrowsAutoHide, false);
        this.thumbnailsSwipe = use(obj.thumbnailsSwipe, false);
        this.thumbnailsMoveSize = use(obj.thumbnailsMoveSize, 1);
        this.thumbnailsOrder = use(obj.thumbnailsOrder, NgxGalleryOrder.Column);
        this.thumbnailsRemainingCount = use(obj.thumbnailsRemainingCount, false);
        this.thumbnailsAsLinks = use(obj.thumbnailsAsLinks, false);
        this.thumbnailsAutoHide = use(obj.thumbnailsAutoHide, false);
        this.thumbnailMargin = use(obj.thumbnailMargin, 10);
        this.thumbnailSize = use(obj.thumbnailSize, NgxGalleryImageSize.Cover);
        if (obj && obj.thumbnailActions && obj.thumbnailActions.length) {
            obj.thumbnailActions = obj.thumbnailActions.map((/**
             * @param {?} action
             * @return {?}
             */
            function (action) { return new NgxGalleryAction(action); }));
        }
        this.thumbnailActions = use(obj.thumbnailActions, []);
        this.preview = use(obj.preview, true);
        this.previewDescription = use(obj.previewDescription, true);
        this.previewArrows = use(obj.previewArrows, true);
        this.previewArrowsAutoHide = use(obj.previewArrowsAutoHide, false);
        this.previewSwipe = use(obj.previewSwipe, false);
        this.previewFullscreen = use(obj.previewFullscreen, false);
        this.previewForceFullscreen = use(obj.previewForceFullscreen, false);
        this.previewCloseOnClick = use(obj.previewCloseOnClick, false);
        this.previewCloseOnEsc = use(obj.previewCloseOnEsc, false);
        this.previewKeyboardNavigation = use(obj.previewKeyboardNavigation, false);
        this.previewAnimation = use(obj.previewAnimation, true);
        this.previewAutoPlay = use(obj.previewAutoPlay, false);
        this.previewAutoPlayInterval = use(obj.previewAutoPlayInterval, 2000);
        this.previewAutoPlayPauseOnHover = use(obj.previewAutoPlayPauseOnHover, false);
        this.previewInfinityMove = use(obj.previewInfinityMove, false);
        this.previewZoom = use(obj.previewZoom, false);
        this.previewZoomStep = use(obj.previewZoomStep, 0.1);
        this.previewZoomMax = use(obj.previewZoomMax, 2);
        this.previewZoomMin = use(obj.previewZoomMin, 0.5);
        this.previewRotate = use(obj.previewRotate, false);
        this.previewDownload = use(obj.previewDownload, false);
        this.previewCustom = use(obj.previewCustom, undefined);
        this.previewBullets = use(obj.previewBullets, false);
        // this.arrowPrevIcon = use(obj.arrowPrevIcon, 'fa fa-arrow-circle-left');
        // this.arrowNextIcon = use(obj.arrowNextIcon, 'fa fa-arrow-circle-right');
        // this.closeIcon = use(obj.closeIcon, 'fa fa-times-circle');
        // this.fullscreenIcon = use(obj.fullscreenIcon, 'fa fa-arrows-alt');
        // this.spinnerIcon = use(obj.spinnerIcon, 'fa fa-spinner fa-pulse fa-3x fa-fw');
        // this.zoomInIcon = use(obj.zoomInIcon, 'fa fa-search-plus');
        // this.zoomOutIcon = use(obj.zoomOutIcon, 'fa fa-search-minus');
        // this.rotateLeftIcon = use(obj.rotateLeftIcon, 'fa fa-undo');
        // this.rotateRightIcon = use(obj.rotateRightIcon, 'fa fa-repeat');
        // this.downloadIcon = use(obj.downloadIcon, 'fa fa-arrow-circle-down');
        this.arrowPrevIcon = use(obj.arrowPrevIcon, 'arrow_back_ios');
        this.arrowNextIcon = use(obj.arrowNextIcon, 'arrow_forward_ios');
        this.closeIcon = use(obj.closeIcon, 'close');
        this.fullscreenIcon = use(obj.fullscreenIcon, 'fullscreen');
        this.spinnerIcon = use(obj.spinnerIcon, 'spinner');
        this.zoomInIcon = use(obj.zoomInIcon, 'zoom_in');
        this.zoomOutIcon = use(obj.zoomOutIcon, 'zoom_out');
        this.rotateLeftIcon = use(obj.rotateLeftIcon, 'rotate_left');
        this.rotateRightIcon = use(obj.rotateRightIcon, 'rotate_right');
        this.downloadIcon = use(obj.downloadIcon, 'cloud_download');
        this.previewPrevIconOption = use(obj.previewPrevIconOption, 'arrow_back_ios');
        this.previewNextIconOption = use(obj.previewNextIconOption, 'arrow_forward_ios');
        if (obj && obj.actions && obj.actions.length) {
            obj.actions = obj.actions.map((/**
             * @param {?} action
             * @return {?}
             */
            function (action) { return new NgxGalleryAction(action); }));
        }
        this.actions = use(obj.actions, []);
    }
    return NgxGalleryOptions;
}());
if (false) {
    /** @type {?} */
    NgxGalleryOptions.prototype.width;
    /** @type {?} */
    NgxGalleryOptions.prototype.height;
    /** @type {?} */
    NgxGalleryOptions.prototype.breakpoint;
    /** @type {?} */
    NgxGalleryOptions.prototype.fullWidth;
    /** @type {?} */
    NgxGalleryOptions.prototype.layout;
    /** @type {?} */
    NgxGalleryOptions.prototype.startIndex;
    /** @type {?} */
    NgxGalleryOptions.prototype.linkTarget;
    /** @type {?} */
    NgxGalleryOptions.prototype.lazyLoading;
    /** @type {?} */
    NgxGalleryOptions.prototype.image;
    /** @type {?} */
    NgxGalleryOptions.prototype.imagePercent;
    /** @type {?} */
    NgxGalleryOptions.prototype.imageArrows;
    /** @type {?} */
    NgxGalleryOptions.prototype.imageArrowsAutoHide;
    /** @type {?} */
    NgxGalleryOptions.prototype.imageSwipe;
    /** @type {?} */
    NgxGalleryOptions.prototype.imageAnimation;
    /** @type {?} */
    NgxGalleryOptions.prototype.imageSize;
    /** @type {?} */
    NgxGalleryOptions.prototype.imageAutoPlay;
    /** @type {?} */
    NgxGalleryOptions.prototype.imageAutoPlayInterval;
    /** @type {?} */
    NgxGalleryOptions.prototype.imageAutoPlayPauseOnHover;
    /** @type {?} */
    NgxGalleryOptions.prototype.imageInfinityMove;
    /** @type {?} */
    NgxGalleryOptions.prototype.imageActions;
    /** @type {?} */
    NgxGalleryOptions.prototype.imageDescription;
    /** @type {?} */
    NgxGalleryOptions.prototype.imageBullets;
    /** @type {?} */
    NgxGalleryOptions.prototype.thumbnails;
    /** @type {?} */
    NgxGalleryOptions.prototype.thumbnailsColumns;
    /** @type {?} */
    NgxGalleryOptions.prototype.thumbnailsRows;
    /** @type {?} */
    NgxGalleryOptions.prototype.thumbnailsPercent;
    /** @type {?} */
    NgxGalleryOptions.prototype.thumbnailsMargin;
    /** @type {?} */
    NgxGalleryOptions.prototype.thumbnailsArrows;
    /** @type {?} */
    NgxGalleryOptions.prototype.thumbnailsArrowsAutoHide;
    /** @type {?} */
    NgxGalleryOptions.prototype.thumbnailsSwipe;
    /** @type {?} */
    NgxGalleryOptions.prototype.thumbnailsMoveSize;
    /** @type {?} */
    NgxGalleryOptions.prototype.thumbnailsOrder;
    /** @type {?} */
    NgxGalleryOptions.prototype.thumbnailsRemainingCount;
    /** @type {?} */
    NgxGalleryOptions.prototype.thumbnailsAsLinks;
    /** @type {?} */
    NgxGalleryOptions.prototype.thumbnailsAutoHide;
    /** @type {?} */
    NgxGalleryOptions.prototype.thumbnailMargin;
    /** @type {?} */
    NgxGalleryOptions.prototype.thumbnailSize;
    /** @type {?} */
    NgxGalleryOptions.prototype.thumbnailActions;
    /** @type {?} */
    NgxGalleryOptions.prototype.preview;
    /** @type {?} */
    NgxGalleryOptions.prototype.previewDescription;
    /** @type {?} */
    NgxGalleryOptions.prototype.previewArrows;
    /** @type {?} */
    NgxGalleryOptions.prototype.previewArrowsAutoHide;
    /** @type {?} */
    NgxGalleryOptions.prototype.previewSwipe;
    /** @type {?} */
    NgxGalleryOptions.prototype.previewFullscreen;
    /** @type {?} */
    NgxGalleryOptions.prototype.previewForceFullscreen;
    /** @type {?} */
    NgxGalleryOptions.prototype.previewCloseOnClick;
    /** @type {?} */
    NgxGalleryOptions.prototype.previewCloseOnEsc;
    /** @type {?} */
    NgxGalleryOptions.prototype.previewKeyboardNavigation;
    /** @type {?} */
    NgxGalleryOptions.prototype.previewAnimation;
    /** @type {?} */
    NgxGalleryOptions.prototype.previewAutoPlay;
    /** @type {?} */
    NgxGalleryOptions.prototype.previewAutoPlayInterval;
    /** @type {?} */
    NgxGalleryOptions.prototype.previewAutoPlayPauseOnHover;
    /** @type {?} */
    NgxGalleryOptions.prototype.previewInfinityMove;
    /** @type {?} */
    NgxGalleryOptions.prototype.previewZoom;
    /** @type {?} */
    NgxGalleryOptions.prototype.previewZoomStep;
    /** @type {?} */
    NgxGalleryOptions.prototype.previewZoomMax;
    /** @type {?} */
    NgxGalleryOptions.prototype.previewZoomMin;
    /** @type {?} */
    NgxGalleryOptions.prototype.previewRotate;
    /** @type {?} */
    NgxGalleryOptions.prototype.previewDownload;
    /** @type {?} */
    NgxGalleryOptions.prototype.previewCustom;
    /** @type {?} */
    NgxGalleryOptions.prototype.previewBullets;
    /** @type {?} */
    NgxGalleryOptions.prototype.arrowPrevIcon;
    /** @type {?} */
    NgxGalleryOptions.prototype.arrowNextIcon;
    /** @type {?} */
    NgxGalleryOptions.prototype.closeIcon;
    /** @type {?} */
    NgxGalleryOptions.prototype.fullscreenIcon;
    /** @type {?} */
    NgxGalleryOptions.prototype.spinnerIcon;
    /** @type {?} */
    NgxGalleryOptions.prototype.zoomInIcon;
    /** @type {?} */
    NgxGalleryOptions.prototype.zoomOutIcon;
    /** @type {?} */
    NgxGalleryOptions.prototype.rotateLeftIcon;
    /** @type {?} */
    NgxGalleryOptions.prototype.rotateRightIcon;
    /** @type {?} */
    NgxGalleryOptions.prototype.downloadIcon;
    /** @type {?} */
    NgxGalleryOptions.prototype.previewPrevIconOption;
    /** @type {?} */
    NgxGalleryOptions.prototype.previewNextIconOption;
    /** @type {?} */
    NgxGalleryOptions.prototype.actions;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 */
function INgxGalleryOrderedImage() { }
if (false) {
    /** @type {?} */
    INgxGalleryOrderedImage.prototype.src;
    /** @type {?} */
    INgxGalleryOrderedImage.prototype.index;
}
var NgxGalleryOrderedImage = /** @class */ (function () {
    function NgxGalleryOrderedImage(obj) {
        this.src = obj.src;
        this.index = obj.index;
    }
    return NgxGalleryOrderedImage;
}());
if (false) {
    /** @type {?} */
    NgxGalleryOrderedImage.prototype.src;
    /** @type {?} */
    NgxGalleryOrderedImage.prototype.index;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var NgxGalleryComponent = /** @class */ (function () {
    function NgxGalleryComponent(myElement) {
        this.myElement = myElement;
        this.imagesReady = new EventEmitter();
        this.change = new EventEmitter();
        this.previewOpen = new EventEmitter();
        this.previewClose = new EventEmitter();
        this.previewChange = new EventEmitter();
        this.oldImagesLength = 0;
        this.selectedIndex = 0;
        this.breakpoint = undefined;
        this.prevBreakpoint = undefined;
    }
    /**
     * @return {?}
     */
    NgxGalleryComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var tempOptions = [{
                width: this.widthOption,
                height: this.heightOption,
                thumbnails: this.thumbnailsOption,
                thumbnailsColumns: this.thumbnailsColumnsOption,
                startIndex: this.startIndexOption,
                imageDescription: this.imageDescriptionOption,
                imageArrows: this.imageArrowsOption,
                thumbnailsArrows: this.thumbnailsArrowsOption,
                previewArrows: this.previewArrowsOption,
                imageSwipe: this.imageSwipeOption,
                thumbnailsSwipe: this.thumbnailsSwipeOption,
                previewSwipe: this.previewSwipeOption,
                imageAutoPlay: this.imageAutoPlayOption,
                imageAutoPlayInterval: this.imageAutoPlayIntervalOption,
                imageAutoPlayPauseOnHover: this.imageAutoPlayPauseOnHoverOption,
                imageInfinityMove: this.imageInfinityMoveOption,
                preview: this.previewOption,
                arrowPrevIcon: this.arrowPrevIconOption,
                arrowNextIcon: this.arrowNextIconOption,
                previewPrevIconOption: this.previewPrevIconOption,
                previewNextIconOption: this.previewNextIconOption
            }];
        // this.options = this.options.map((opt) => new NgxGalleryOptions(opt));
        this.options = tempOptions.map((/**
         * @param {?} opt
         * @return {?}
         */
        function (opt) { return new NgxGalleryOptions(opt); }));
        this.sortOptions();
        this.setBreakpoint();
        this.setOptions();
        this.checkFullWidth();
        if (this.currentOptions) {
            this.selectedIndex = (/** @type {?} */ (this.currentOptions.startIndex));
        }
    };
    /**
     * @return {?}
     */
    NgxGalleryComponent.prototype.ngDoCheck = /**
     * @return {?}
     */
    function () {
        if (this.images !== undefined && (this.images.length !== this.oldImagesLength)
            || (this.images !== this.oldImages)) {
            this.oldImagesLength = this.images.length;
            this.oldImages = this.images;
            this.setOptions();
            this.setImages();
            if (this.images && this.images.length) {
                this.imagesReady.emit();
            }
            if (this.image) {
                this.image.reset((/** @type {?} */ (this.currentOptions.startIndex)));
            }
            if (this.currentOptions.thumbnailsAutoHide && this.currentOptions.thumbnails
                && this.images.length <= 1) {
                this.currentOptions.thumbnails = false;
                this.currentOptions.imageArrows = false;
            }
            this.resetThumbnails();
        }
    };
    /**
     * @return {?}
     */
    NgxGalleryComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        this.checkFullWidth();
    };
    /**
     * @return {?}
     */
    NgxGalleryComponent.prototype.onResize = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.setBreakpoint();
        if (this.prevBreakpoint !== this.breakpoint) {
            this.setOptions();
            this.resetThumbnails();
        }
        if (this.currentOptions && this.currentOptions.fullWidth) {
            if (this.fullWidthTimeout) {
                clearTimeout(this.fullWidthTimeout);
            }
            this.fullWidthTimeout = setTimeout((/**
             * @return {?}
             */
            function () {
                _this.checkFullWidth();
            }), 200);
        }
    };
    /**
     * @return {?}
     */
    NgxGalleryComponent.prototype.getImageHeight = /**
     * @return {?}
     */
    function () {
        return (this.currentOptions && this.currentOptions.thumbnails) ?
            this.currentOptions.imagePercent + '%' : '100%';
    };
    /**
     * @return {?}
     */
    NgxGalleryComponent.prototype.getThumbnailsHeight = /**
     * @return {?}
     */
    function () {
        if (this.currentOptions && this.currentOptions.image) {
            return 'calc(' + this.currentOptions.thumbnailsPercent + '% - '
                + this.currentOptions.thumbnailsMargin + 'px)';
        }
        else {
            return '100%';
        }
    };
    /**
     * @return {?}
     */
    NgxGalleryComponent.prototype.getThumbnailsMarginTop = /**
     * @return {?}
     */
    function () {
        if (this.currentOptions && this.currentOptions.layout === NgxGalleryLayout.ThumbnailsBottom) {
            return this.currentOptions.thumbnailsMargin + 'px';
        }
        else {
            return '0px';
        }
    };
    /**
     * @return {?}
     */
    NgxGalleryComponent.prototype.getThumbnailsMarginBottom = /**
     * @return {?}
     */
    function () {
        if (this.currentOptions && this.currentOptions.layout === NgxGalleryLayout.ThumbnailsTop) {
            return this.currentOptions.thumbnailsMargin + 'px';
        }
        else {
            return '0px';
        }
    };
    /**
     * @param {?} index
     * @return {?}
     */
    NgxGalleryComponent.prototype.openPreview = /**
     * @param {?} index
     * @return {?}
     */
    function (index) {
        if (this.currentOptions.previewCustom) {
            this.currentOptions.previewCustom(index);
        }
        else {
            this.previewEnabled = true;
            this.preview.open(index);
        }
    };
    /**
     * @return {?}
     */
    NgxGalleryComponent.prototype.onPreviewOpen = /**
     * @return {?}
     */
    function () {
        this.previewOpen.emit();
        if (this.image && this.image.autoPlay) {
            this.image.stopAutoPlay();
        }
    };
    /**
     * @return {?}
     */
    NgxGalleryComponent.prototype.onPreviewClose = /**
     * @return {?}
     */
    function () {
        this.previewEnabled = false;
        this.previewClose.emit();
        if (this.image && this.image.autoPlay) {
            this.image.startAutoPlay();
        }
    };
    /**
     * @param {?} index
     * @return {?}
     */
    NgxGalleryComponent.prototype.selectFromImage = /**
     * @param {?} index
     * @return {?}
     */
    function (index) {
        this.select(index);
    };
    /**
     * @param {?} index
     * @return {?}
     */
    NgxGalleryComponent.prototype.selectFromThumbnails = /**
     * @param {?} index
     * @return {?}
     */
    function (index) {
        this.select(index);
        if (this.currentOptions && this.currentOptions.thumbnails && this.currentOptions.preview
            && (!this.currentOptions.image || this.currentOptions.thumbnailsRemainingCount)) {
            this.openPreview(this.selectedIndex);
        }
    };
    /**
     * @param {?} index
     * @return {?}
     */
    NgxGalleryComponent.prototype.show = /**
     * @param {?} index
     * @return {?}
     */
    function (index) {
        this.select(index);
    };
    /**
     * @return {?}
     */
    NgxGalleryComponent.prototype.showNext = /**
     * @return {?}
     */
    function () {
        this.image.showNext();
    };
    /**
     * @return {?}
     */
    NgxGalleryComponent.prototype.showPrev = /**
     * @return {?}
     */
    function () {
        this.image.showPrev();
    };
    /**
     * @return {?}
     */
    NgxGalleryComponent.prototype.canShowNext = /**
     * @return {?}
     */
    function () {
        if (this.images && this.currentOptions) {
            return (this.currentOptions.imageInfinityMove || this.selectedIndex < this.images.length - 1)
                ? true : false;
        }
        else {
            return false;
        }
    };
    /**
     * @return {?}
     */
    NgxGalleryComponent.prototype.canShowPrev = /**
     * @return {?}
     */
    function () {
        if (this.images && this.currentOptions) {
            return (this.currentOptions.imageInfinityMove || this.selectedIndex > 0) ? true : false;
        }
        else {
            return false;
        }
    };
    /**
     * @param {?} index
     * @return {?}
     */
    NgxGalleryComponent.prototype.previewSelect = /**
     * @param {?} index
     * @return {?}
     */
    function (index) {
        this.previewChange.emit({ index: index, image: this.images[index] });
    };
    /**
     * @return {?}
     */
    NgxGalleryComponent.prototype.moveThumbnailsRight = /**
     * @return {?}
     */
    function () {
        this.thubmnails.moveRight();
    };
    /**
     * @return {?}
     */
    NgxGalleryComponent.prototype.moveThumbnailsLeft = /**
     * @return {?}
     */
    function () {
        this.thubmnails.moveLeft();
    };
    /**
     * @return {?}
     */
    NgxGalleryComponent.prototype.canMoveThumbnailsRight = /**
     * @return {?}
     */
    function () {
        return this.thubmnails.canMoveRight();
    };
    /**
     * @return {?}
     */
    NgxGalleryComponent.prototype.canMoveThumbnailsLeft = /**
     * @return {?}
     */
    function () {
        return this.thubmnails.canMoveLeft();
    };
    /**
     * @private
     * @return {?}
     */
    NgxGalleryComponent.prototype.resetThumbnails = /**
     * @private
     * @return {?}
     */
    function () {
        if (this.thubmnails) {
            this.thubmnails.reset((/** @type {?} */ (this.currentOptions.startIndex)));
        }
    };
    /**
     * @private
     * @param {?} index
     * @return {?}
     */
    NgxGalleryComponent.prototype.select = /**
     * @private
     * @param {?} index
     * @return {?}
     */
    function (index) {
        this.selectedIndex = index;
        this.change.emit({
            index: index,
            image: this.images[index]
        });
    };
    /**
     * @private
     * @return {?}
     */
    NgxGalleryComponent.prototype.checkFullWidth = /**
     * @private
     * @return {?}
     */
    function () {
        if (this.currentOptions && this.currentOptions.fullWidth) {
            this.width = document.body.clientWidth + 'px';
            this.left = (-(document.body.clientWidth -
                this.myElement.nativeElement.parentNode.innerWidth) / 2) + 'px';
        }
    };
    /**
     * @private
     * @return {?}
     */
    NgxGalleryComponent.prototype.setImages = /**
     * @private
     * @return {?}
     */
    function () {
        this.smallImages = this.images.map((/**
         * @param {?} img
         * @return {?}
         */
        function (img) { return (/** @type {?} */ (img.small)); }));
        this.mediumImages = this.images.map((/**
         * @param {?} img
         * @param {?} i
         * @return {?}
         */
        function (img, i) { return new NgxGalleryOrderedImage({
            src: img.medium,
            index: i
        }); }));
        this.bigImages = this.images.map((/**
         * @param {?} img
         * @return {?}
         */
        function (img) { return (/** @type {?} */ (img.big)); }));
        this.descriptions = this.images.map((/**
         * @param {?} img
         * @return {?}
         */
        function (img) { return (/** @type {?} */ (img.description)); }));
        this.links = this.images.map((/**
         * @param {?} img
         * @return {?}
         */
        function (img) { return (/** @type {?} */ (img.url)); }));
        this.labels = this.images.map((/**
         * @param {?} img
         * @return {?}
         */
        function (img) { return (/** @type {?} */ (img.label)); }));
    };
    /**
     * @private
     * @return {?}
     */
    NgxGalleryComponent.prototype.setBreakpoint = /**
     * @private
     * @return {?}
     */
    function () {
        this.prevBreakpoint = this.breakpoint;
        /** @type {?} */
        var breakpoints;
        if (typeof window !== 'undefined') {
            breakpoints = this.options.filter((/**
             * @param {?} opt
             * @return {?}
             */
            function (opt) { return opt.breakpoint >= window.innerWidth; }))
                .map((/**
             * @param {?} opt
             * @return {?}
             */
            function (opt) { return opt.breakpoint; }));
        }
        if (breakpoints && breakpoints.length) {
            this.breakpoint = breakpoints.pop();
        }
        else {
            this.breakpoint = undefined;
        }
    };
    /**
     * @private
     * @return {?}
     */
    NgxGalleryComponent.prototype.sortOptions = /**
     * @private
     * @return {?}
     */
    function () {
        this.options = __spread(this.options.filter((/**
         * @param {?} a
         * @return {?}
         */
        function (a) { return a.breakpoint === undefined; })), this.options
            .filter((/**
         * @param {?} a
         * @return {?}
         */
        function (a) { return a.breakpoint !== undefined; }))
            .sort((/**
         * @param {?} a
         * @param {?} b
         * @return {?}
         */
        function (a, b) { return b.breakpoint - a.breakpoint; })));
    };
    /**
     * @private
     * @return {?}
     */
    NgxGalleryComponent.prototype.setOptions = /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        this.currentOptions = new NgxGalleryOptions({});
        this.options
            .filter((/**
         * @param {?} opt
         * @return {?}
         */
        function (opt) { return opt.breakpoint === undefined || opt.breakpoint >= _this.breakpoint; }))
            .map((/**
         * @param {?} opt
         * @return {?}
         */
        function (opt) { return _this.combineOptions(_this.currentOptions, opt); }));
        this.width = (/** @type {?} */ (this.currentOptions.width));
        this.height = (/** @type {?} */ (this.currentOptions.height));
    };
    /**
     * @private
     * @param {?} first
     * @param {?} second
     * @return {?}
     */
    NgxGalleryComponent.prototype.combineOptions = /**
     * @private
     * @param {?} first
     * @param {?} second
     * @return {?}
     */
    function (first, second) {
        Object.keys(second).map((/**
         * @param {?} val
         * @return {?}
         */
        function (val) { return first[val] = second[val] !== undefined ? second[val] : first[val]; }));
    };
    NgxGalleryComponent.decorators = [
        { type: Component, args: [{
                    selector: 'ngx-gallery',
                    template: "\n    <div class=\"ngx-gallery-layout {{currentOptions?.layout}}\">\n        <ngx-gallery-image *ngIf=\"currentOptions?.image\" [style.height]=\"getImageHeight()\" [images]=\"mediumImages\" [clickable]=\"currentOptions?.preview\" [selectedIndex]=\"selectedIndex\" [arrows]=\"currentOptions?.imageArrows\" [arrowsAutoHide]=\"currentOptions?.imageArrowsAutoHide\" [arrowPrevIcon]=\"currentOptions?.arrowPrevIcon\" [arrowNextIcon]=\"currentOptions?.arrowNextIcon\" [swipe]=\"currentOptions?.imageSwipe\" [animation]=\"currentOptions?.imageAnimation\" [size]=\"currentOptions?.imageSize\" [autoPlay]=\"currentOptions?.imageAutoPlay\" [autoPlayInterval]=\"currentOptions?.imageAutoPlayInterval\" [autoPlayPauseOnHover]=\"currentOptions?.imageAutoPlayPauseOnHover\" [infinityMove]=\"currentOptions?.imageInfinityMove\"  [lazyLoading]=\"currentOptions?.lazyLoading\" [actions]=\"currentOptions?.imageActions\" [descriptions]=\"descriptions\" [showDescription]=\"currentOptions?.imageDescription\" [bullets]=\"currentOptions?.imageBullets\" (onClick)=\"openPreview($event)\" (onActiveChange)=\"selectFromImage($event)\"></ngx-gallery-image>\n\n        <ngx-gallery-thumbnails *ngIf=\"currentOptions?.thumbnails\" [style.marginTop]=\"getThumbnailsMarginTop()\" [style.marginBottom]=\"getThumbnailsMarginBottom()\" [style.height]=\"getThumbnailsHeight()\" [images]=\"smallImages\" [links]=\"currentOptions?.thumbnailsAsLinks ? links : []\" [labels]=\"labels\" [linkTarget]=\"currentOptions?.linkTarget\" [selectedIndex]=\"selectedIndex\" [columns]=\"currentOptions?.thumbnailsColumns\" [rows]=\"currentOptions?.thumbnailsRows\" [margin]=\"currentOptions?.thumbnailMargin\" [arrows]=\"currentOptions?.thumbnailsArrows\" [arrowsAutoHide]=\"currentOptions?.thumbnailsArrowsAutoHide\" [arrowPrevIcon]=\"currentOptions?.arrowPrevIcon\" [arrowNextIcon]=\"currentOptions?.arrowNextIcon\" [clickable]=\"currentOptions?.image || currentOptions?.preview\" [swipe]=\"currentOptions?.thumbnailsSwipe\" [size]=\"currentOptions?.thumbnailSize\" [moveSize]=\"currentOptions?.thumbnailsMoveSize\" [order]=\"currentOptions?.thumbnailsOrder\" [remainingCount]=\"currentOptions?.thumbnailsRemainingCount\" [lazyLoading]=\"currentOptions?.lazyLoading\" [actions]=\"currentOptions?.thumbnailActions\"  (onActiveChange)=\"selectFromThumbnails($event)\"></ngx-gallery-thumbnails>\n\n        <ngx-gallery-preview [images]=\"bigImages\" [descriptions]=\"descriptions\" [arrowPrevIcon]=\"currentOptions?.previewPrevIconOption\" [arrowNextIcon]=\"currentOptions?.previewNextIconOption\" [closeIcon]=\"currentOptions?.closeIcon\" [fullscreenIcon]=\"currentOptions?.fullscreenIcon\" [spinnerIcon]=\"currentOptions?.spinnerIcon\" [arrows]=\"currentOptions?.previewArrows\" [arrowsAutoHide]=\"currentOptions?.previewArrowsAutoHide\" [swipe]=\"currentOptions?.previewSwipe\" [fullscreen]=\"currentOptions?.previewFullscreen\" [forceFullscreen]=\"currentOptions?.previewForceFullscreen\" [closeOnClick]=\"currentOptions?.previewCloseOnClick\" [closeOnEsc]=\"currentOptions?.previewCloseOnEsc\" [keyboardNavigation]=\"currentOptions?.previewKeyboardNavigation\" [animation]=\"currentOptions?.previewAnimation\" [autoPlay]=\"currentOptions?.previewAutoPlay\" [autoPlayInterval]=\"currentOptions?.previewAutoPlayInterval\" [autoPlayPauseOnHover]=\"currentOptions?.previewAutoPlayPauseOnHover\" [infinityMove]=\"currentOptions?.imageInfinityMove\" [zoom]=\"currentOptions?.previewZoom\" [zoomStep]=\"currentOptions?.previewZoomStep\" [zoomMax]=\"currentOptions?.previewZoomMax\" [zoomMin]=\"currentOptions?.previewZoomMin\" [zoomInIcon]=\"currentOptions?.zoomInIcon\" [zoomOutIcon]=\"currentOptions?.zoomOutIcon\" [actions]=\"currentOptions?.actions\" [rotate]=\"currentOptions?.previewRotate\" [rotateLeftIcon]=\"currentOptions?.rotateLeftIcon\" [rotateRightIcon]=\"currentOptions?.rotateRightIcon\" [download]=\"currentOptions?.previewDownload\" [downloadIcon]=\"currentOptions?.downloadIcon\" [bullets]=\"currentOptions?.previewBullets\" (onClose)=\"onPreviewClose()\" (onOpen)=\"onPreviewOpen()\" (onActiveChange)=\"previewSelect($event)\" [class.ngx-gallery-active]=\"previewEnabled\" [showDescription]=\"currentOptions?.imageDescription\"></ngx-gallery-preview>\n    </div>\n    ",
                    providers: [NgxGalleryHelperService],
                    styles: [":host{display:inline-block}:host>*{float:left}:host ::ng-deep *{box-sizing:border-box}:host ::ng-deep .ngx-gallery-icon{color:#fff;font-size:25px;position:absolute;z-index:2000;display:inline-block}:host ::ng-deep .ngx-gallery-icon .ngx-gallery-icon-content{display:block}:host ::ng-deep .ngx-gallery-clickable{cursor:pointer}:host ::ng-deep .ngx-gallery-icons-wrapper .ngx-gallery-icon{position:relative;margin-right:5px;margin-top:5px;font-size:20px;cursor:pointer}:host ::ng-deep .ngx-gallery-icons-wrapper{float:right}:host .ngx-gallery-layout{width:100%;height:100%;display:flex;flex-direction:column}:host .ngx-gallery-layout.thumbnails-top ngx-gallery-image{order:2}:host .ngx-gallery-layout.thumbnails-top ngx-gallery-thumbnails{order:1}:host .ngx-gallery-layout.thumbnails-bottom ngx-gallery-image{order:1}:host .ngx-gallery-layout.thumbnails-bottom ngx-gallery-thumbnails{order:2}"]
                }] }
    ];
    /** @nocollapse */
    NgxGalleryComponent.ctorParameters = function () { return [
        { type: ElementRef }
    ]; };
    NgxGalleryComponent.propDecorators = {
        options: [{ type: Input }],
        images: [{ type: Input }],
        imagesReady: [{ type: Output }],
        change: [{ type: Output }],
        previewOpen: [{ type: Output }],
        previewClose: [{ type: Output }],
        previewChange: [{ type: Output }],
        widthOption: [{ type: Input }],
        heightOption: [{ type: Input }],
        thumbnailsColumnsOption: [{ type: Input }],
        startIndexOption: [{ type: Input }],
        imageDescriptionOption: [{ type: Input }],
        imageArrowsOption: [{ type: Input }],
        thumbnailsArrowsOption: [{ type: Input }],
        previewArrowsOption: [{ type: Input }],
        imageSwipeOption: [{ type: Input }],
        thumbnailsSwipeOption: [{ type: Input }],
        previewSwipeOption: [{ type: Input }],
        imageAutoPlayOption: [{ type: Input }],
        imageAutoPlayIntervalOption: [{ type: Input }],
        imageAutoPlayPauseOnHoverOption: [{ type: Input }],
        imageInfinityMoveOption: [{ type: Input }],
        previewOption: [{ type: Input }],
        arrowPrevIconOption: [{ type: Input }],
        arrowNextIconOption: [{ type: Input }],
        previewPrevIconOption: [{ type: Input }],
        previewNextIconOption: [{ type: Input }],
        thumbnailsOption: [{ type: Input }],
        preview: [{ type: ViewChild, args: [NgxGalleryPreviewComponent,] }],
        image: [{ type: ViewChild, args: [NgxGalleryImageComponent,] }],
        thubmnails: [{ type: ViewChild, args: [NgxGalleryThumbnailsComponent,] }],
        width: [{ type: HostBinding, args: ['style.width',] }],
        height: [{ type: HostBinding, args: ['style.height',] }],
        left: [{ type: HostBinding, args: ['style.left',] }],
        onResize: [{ type: HostListener, args: ['window:resize',] }]
    };
    return NgxGalleryComponent;
}());
if (false) {
    /** @type {?} */
    NgxGalleryComponent.prototype.options;
    /** @type {?} */
    NgxGalleryComponent.prototype.images;
    /** @type {?} */
    NgxGalleryComponent.prototype.imagesReady;
    /** @type {?} */
    NgxGalleryComponent.prototype.change;
    /** @type {?} */
    NgxGalleryComponent.prototype.previewOpen;
    /** @type {?} */
    NgxGalleryComponent.prototype.previewClose;
    /** @type {?} */
    NgxGalleryComponent.prototype.previewChange;
    /** @type {?} */
    NgxGalleryComponent.prototype.widthOption;
    /** @type {?} */
    NgxGalleryComponent.prototype.heightOption;
    /** @type {?} */
    NgxGalleryComponent.prototype.thumbnailsColumnsOption;
    /** @type {?} */
    NgxGalleryComponent.prototype.startIndexOption;
    /** @type {?} */
    NgxGalleryComponent.prototype.imageDescriptionOption;
    /** @type {?} */
    NgxGalleryComponent.prototype.imageArrowsOption;
    /** @type {?} */
    NgxGalleryComponent.prototype.thumbnailsArrowsOption;
    /** @type {?} */
    NgxGalleryComponent.prototype.previewArrowsOption;
    /** @type {?} */
    NgxGalleryComponent.prototype.imageSwipeOption;
    /** @type {?} */
    NgxGalleryComponent.prototype.thumbnailsSwipeOption;
    /** @type {?} */
    NgxGalleryComponent.prototype.previewSwipeOption;
    /** @type {?} */
    NgxGalleryComponent.prototype.imageAutoPlayOption;
    /** @type {?} */
    NgxGalleryComponent.prototype.imageAutoPlayIntervalOption;
    /** @type {?} */
    NgxGalleryComponent.prototype.imageAutoPlayPauseOnHoverOption;
    /** @type {?} */
    NgxGalleryComponent.prototype.imageInfinityMoveOption;
    /** @type {?} */
    NgxGalleryComponent.prototype.previewOption;
    /** @type {?} */
    NgxGalleryComponent.prototype.arrowPrevIconOption;
    /** @type {?} */
    NgxGalleryComponent.prototype.arrowNextIconOption;
    /** @type {?} */
    NgxGalleryComponent.prototype.previewPrevIconOption;
    /** @type {?} */
    NgxGalleryComponent.prototype.previewNextIconOption;
    /** @type {?} */
    NgxGalleryComponent.prototype.thumbnailsOption;
    /** @type {?} */
    NgxGalleryComponent.prototype.smallImages;
    /** @type {?} */
    NgxGalleryComponent.prototype.mediumImages;
    /** @type {?} */
    NgxGalleryComponent.prototype.bigImages;
    /** @type {?} */
    NgxGalleryComponent.prototype.descriptions;
    /** @type {?} */
    NgxGalleryComponent.prototype.links;
    /** @type {?} */
    NgxGalleryComponent.prototype.labels;
    /** @type {?} */
    NgxGalleryComponent.prototype.oldImages;
    /** @type {?} */
    NgxGalleryComponent.prototype.oldImagesLength;
    /** @type {?} */
    NgxGalleryComponent.prototype.selectedIndex;
    /** @type {?} */
    NgxGalleryComponent.prototype.previewEnabled;
    /** @type {?} */
    NgxGalleryComponent.prototype.currentOptions;
    /**
     * @type {?}
     * @private
     */
    NgxGalleryComponent.prototype.breakpoint;
    /**
     * @type {?}
     * @private
     */
    NgxGalleryComponent.prototype.prevBreakpoint;
    /**
     * @type {?}
     * @private
     */
    NgxGalleryComponent.prototype.fullWidthTimeout;
    /** @type {?} */
    NgxGalleryComponent.prototype.preview;
    /** @type {?} */
    NgxGalleryComponent.prototype.image;
    /** @type {?} */
    NgxGalleryComponent.prototype.thubmnails;
    /** @type {?} */
    NgxGalleryComponent.prototype.width;
    /** @type {?} */
    NgxGalleryComponent.prototype.height;
    /** @type {?} */
    NgxGalleryComponent.prototype.left;
    /**
     * @type {?}
     * @private
     */
    NgxGalleryComponent.prototype.myElement;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 */
function INgxGalleryImage() { }
if (false) {
    /** @type {?|undefined} */
    INgxGalleryImage.prototype.small;
    /** @type {?|undefined} */
    INgxGalleryImage.prototype.medium;
    /** @type {?|undefined} */
    INgxGalleryImage.prototype.big;
    /** @type {?|undefined} */
    INgxGalleryImage.prototype.description;
    /** @type {?|undefined} */
    INgxGalleryImage.prototype.url;
    /** @type {?|undefined} */
    INgxGalleryImage.prototype.label;
}
var NgxGalleryImage = /** @class */ (function () {
    function NgxGalleryImage(obj) {
        this.small = obj.small;
        this.medium = obj.medium;
        this.big = obj.big;
        this.description = obj.description;
        this.url = obj.url;
        this.label = obj.label;
    }
    return NgxGalleryImage;
}());
if (false) {
    /** @type {?} */
    NgxGalleryImage.prototype.small;
    /** @type {?} */
    NgxGalleryImage.prototype.medium;
    /** @type {?} */
    NgxGalleryImage.prototype.big;
    /** @type {?} */
    NgxGalleryImage.prototype.description;
    /** @type {?} */
    NgxGalleryImage.prototype.url;
    /** @type {?} */
    NgxGalleryImage.prototype.label;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var CustomHammerConfig = /** @class */ (function (_super) {
    __extends(CustomHammerConfig, _super);
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
    /** @nocollapse */ CustomHammerConfig.ngInjectableDef = ɵɵdefineInjectable({ factory: function CustomHammerConfig_Factory() { return new CustomHammerConfig(); }, token: CustomHammerConfig, providedIn: "root" });
    return CustomHammerConfig;
}(HammerGestureConfig));
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { CustomHammerConfig, NgxGalleryAction, NgxGalleryActionComponent, NgxGalleryAnimation, NgxGalleryArrowsComponent, NgxGalleryBulletsComponent, NgxGalleryComponent, NgxGalleryHelperService, NgxGalleryImage, NgxGalleryImageComponent, NgxGalleryImageSize, NgxGalleryLayout, NgxGalleryModule, NgxGalleryOptions, NgxGalleryOrder, NgxGalleryOrderedImage, NgxGalleryPreviewComponent, NgxGalleryThumbnailsComponent };
//# sourceMappingURL=neo-carousel.js.map
