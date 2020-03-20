/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectorRef, Component, Input, Output, EventEmitter, ElementRef, HostListener, ViewChild, Renderer2 } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { NgxGalleryHelperService } from './ngx-gallery-helper.service';
export class NgxGalleryPreviewComponent {
    /**
     * @param {?} sanitization
     * @param {?} elementRef
     * @param {?} helperService
     * @param {?} renderer
     * @param {?} changeDetectorRef
     */
    constructor(sanitization, elementRef, helperService, renderer, changeDetectorRef) {
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
    ngOnInit() {
        if (this.arrows && this.arrowsAutoHide) {
            this.arrows = false;
        }
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        if (changes['swipe']) {
            this.helperService.manageSwipe(this.swipe, this.elementRef, 'preview', (/**
             * @return {?}
             */
            () => this.showNext()), (/**
             * @return {?}
             */
            () => this.showPrev()));
        }
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        if (this.keyDownListener) {
            this.keyDownListener();
        }
    }
    /**
     * @return {?}
     */
    onMouseEnter() {
        if (this.arrowsAutoHide && !this.arrows) {
            this.arrows = true;
        }
    }
    /**
     * @return {?}
     */
    onMouseLeave() {
        if (this.arrowsAutoHide && this.arrows) {
            this.arrows = false;
        }
    }
    /**
     * @param {?} e
     * @return {?}
     */
    onKeyDown(e) {
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
    }
    /**
     * @param {?} index
     * @return {?}
     */
    open(index) {
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
        (e) => this.onKeyDown(e)));
    }
    /**
     * @return {?}
     */
    close() {
        this.isOpen = false;
        this.closeFullscreen();
        this.onClose.emit();
        this.stopAutoPlay();
        if (this.keyDownListener) {
            this.keyDownListener();
        }
    }
    /**
     * @return {?}
     */
    imageMouseEnter() {
        if (this.autoPlay && this.autoPlayPauseOnHover) {
            this.stopAutoPlay();
        }
    }
    /**
     * @return {?}
     */
    imageMouseLeave() {
        if (this.autoPlay && this.autoPlayPauseOnHover) {
            this.startAutoPlay();
        }
    }
    /**
     * @return {?}
     */
    startAutoPlay() {
        if (this.autoPlay) {
            this.stopAutoPlay();
            this.timer = setTimeout((/**
             * @return {?}
             */
            () => {
                if (!this.showNext()) {
                    this.index = -1;
                    this.showNext();
                }
            }), this.autoPlayInterval);
        }
    }
    /**
     * @return {?}
     */
    stopAutoPlay() {
        if (this.timer) {
            clearTimeout(this.timer);
        }
    }
    /**
     * @param {?} index
     * @return {?}
     */
    showAtIndex(index) {
        this.index = index;
        this.show();
    }
    /**
     * @return {?}
     */
    showNext() {
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
    }
    /**
     * @return {?}
     */
    showPrev() {
        if (this.canShowPrev()) {
            this.index--;
            if (this.index < 0) {
                this.index = this.images.length - 1;
            }
            this.show();
        }
    }
    /**
     * @return {?}
     */
    canShowNext() {
        if (this.loading) {
            return false;
        }
        else if (this.images) {
            return this.infinityMove || this.index < this.images.length - 1 ? true : false;
        }
        else {
            return false;
        }
    }
    /**
     * @return {?}
     */
    canShowPrev() {
        if (this.loading) {
            return false;
        }
        else if (this.images) {
            return this.infinityMove || this.index > 0 ? true : false;
        }
        else {
            return false;
        }
    }
    /**
     * @return {?}
     */
    manageFullscreen() {
        if (this.fullscreen || this.forceFullscreen) {
            /** @type {?} */
            const doc = (/** @type {?} */ (document));
            if (!doc.fullscreenElement && !doc.mozFullScreenElement
                && !doc.webkitFullscreenElement && !doc.msFullscreenElement) {
                this.openFullscreen();
            }
            else {
                this.closeFullscreen();
            }
        }
    }
    /**
     * @param {?} image
     * @return {?}
     */
    getSafeUrl(image) {
        return image.substr(0, 10) === 'data:image' ?
            image : this.sanitization.bypassSecurityTrustUrl(image);
    }
    /**
     * @return {?}
     */
    zoomIn() {
        if (this.canZoomIn()) {
            this.zoomValue += this.zoomStep;
            if (this.zoomValue > this.zoomMax) {
                this.zoomValue = this.zoomMax;
            }
        }
    }
    /**
     * @return {?}
     */
    zoomOut() {
        if (this.canZoomOut()) {
            this.zoomValue -= this.zoomStep;
            if (this.zoomValue < this.zoomMin) {
                this.zoomValue = this.zoomMin;
            }
            if (this.zoomValue <= 1) {
                this.resetPosition();
            }
        }
    }
    /**
     * @return {?}
     */
    rotateLeft() {
        this.rotateValue -= 90;
    }
    /**
     * @return {?}
     */
    rotateRight() {
        this.rotateValue += 90;
    }
    /**
     * @return {?}
     */
    getTransform() {
        return this.sanitization.bypassSecurityTrustStyle('scale(' + this.zoomValue + ') rotate(' + this.rotateValue + 'deg)');
    }
    /**
     * @return {?}
     */
    canZoomIn() {
        return this.zoomValue < this.zoomMax ? true : false;
    }
    /**
     * @return {?}
     */
    canZoomOut() {
        return this.zoomValue > this.zoomMin ? true : false;
    }
    /**
     * @return {?}
     */
    canDragOnZoom() {
        return this.zoom && this.zoomValue > 1;
    }
    /**
     * @param {?} e
     * @return {?}
     */
    mouseDownHandler(e) {
        if (this.canDragOnZoom()) {
            this.initialX = this.getClientX(e);
            this.initialY = this.getClientY(e);
            this.initialLeft = this.positionLeft;
            this.initialTop = this.positionTop;
            this.isMove = true;
            e.preventDefault();
        }
    }
    /**
     * @param {?} e
     * @return {?}
     */
    mouseUpHandler(e) {
        this.isMove = false;
    }
    /**
     * @param {?} e
     * @return {?}
     */
    mouseMoveHandler(e) {
        if (this.isMove) {
            this.positionLeft = this.initialLeft + (this.getClientX(e) - this.initialX);
            this.positionTop = this.initialTop + (this.getClientY(e) - this.initialY);
        }
    }
    /**
     * @private
     * @param {?} e
     * @return {?}
     */
    getClientX(e) {
        return e.touches && e.touches.length ? e.touches[0].clientX : e.clientX;
    }
    /**
     * @private
     * @param {?} e
     * @return {?}
     */
    getClientY(e) {
        return e.touches && e.touches.length ? e.touches[0].clientY : e.clientY;
    }
    /**
     * @private
     * @return {?}
     */
    resetPosition() {
        if (this.zoom) {
            this.positionLeft = 0;
            this.positionTop = 0;
        }
    }
    /**
     * @private
     * @param {?} e
     * @return {?}
     */
    isKeyboardNext(e) {
        return e.keyCode === 39 ? true : false;
    }
    /**
     * @private
     * @param {?} e
     * @return {?}
     */
    isKeyboardPrev(e) {
        return e.keyCode === 37 ? true : false;
    }
    /**
     * @private
     * @param {?} e
     * @return {?}
     */
    isKeyboardEsc(e) {
        return e.keyCode === 27 ? true : false;
    }
    /**
     * @private
     * @return {?}
     */
    openFullscreen() {
        /** @type {?} */
        const element = (/** @type {?} */ (document.documentElement));
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
    }
    /**
     * @private
     * @return {?}
     */
    closeFullscreen() {
        if (this.isFullscreen()) {
            /** @type {?} */
            const doc = (/** @type {?} */ (document));
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
    }
    /**
     * @private
     * @return {?}
     */
    isFullscreen() {
        /** @type {?} */
        const doc = (/** @type {?} */ (document));
        return doc.fullscreenElement || doc.webkitFullscreenElement
            || doc.mozFullScreenElement || doc.msFullscreenElement;
    }
    /**
     * @private
     * @param {?=} first
     * @return {?}
     */
    show(first = false) {
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
            () => this._show()), 600);
        }
    }
    /**
     * @private
     * @return {?}
     */
    _show() {
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
        () => {
            if (this.isLoaded(this.previewImage.nativeElement)) {
                this.loading = false;
                this.startAutoPlay();
                this.changeDetectorRef.markForCheck();
            }
            else {
                setTimeout((/**
                 * @return {?}
                 */
                () => {
                    if (this.loading) {
                        this.showSpinner = true;
                        this.changeDetectorRef.markForCheck();
                    }
                }));
                this.previewImage.nativeElement.onload = (/**
                 * @return {?}
                 */
                () => {
                    this.loading = false;
                    this.showSpinner = false;
                    this.previewImage.nativeElement.onload = null;
                    this.startAutoPlay();
                    this.changeDetectorRef.markForCheck();
                });
            }
        }));
    }
    /**
     * @private
     * @param {?} img
     * @return {?}
     */
    isLoaded(img) {
        if (!img.complete) {
            return false;
        }
        if (typeof img.naturalWidth !== 'undefined' && img.naturalWidth === 0) {
            return false;
        }
        return true;
    }
}
NgxGalleryPreviewComponent.decorators = [
    { type: Component, args: [{
                selector: 'ngx-gallery-preview',
                template: `
        <ngx-gallery-arrows *ngIf="arrows" (onPrevClick)="showPrev()" (onNextClick)="showNext()" [prevDisabled]="!canShowPrev()" [nextDisabled]="!canShowNext()" [arrowPrevIcon]="arrowPrevIcon" [arrowNextIcon]="arrowNextIcon"></ngx-gallery-arrows>
        <div class="ngx-gallery-preview-top">
            <div class="ngx-gallery-preview-icons">
                <ngx-gallery-action *ngFor="let action of actions" [icon]="action.icon" [disabled]="action.disabled" [titleText]="action.titleText" (onClick)="action.onClick($event, index)"></ngx-gallery-action>
                <a *ngIf="download && src" [href]="src" class="ngx-gallery-icon" aria-hidden="true" download>

                  <mat-icon class="ngx-gallery-icon-content">{{ downloadIcon }}</mat-icon>
                </a>
                <ngx-gallery-action *ngIf="zoom" [icon]="zoomOutIcon" [disabled]="!canZoomOut()" (onClick)="zoomOut()"></ngx-gallery-action>
                <ngx-gallery-action *ngIf="zoom" [icon]="zoomInIcon" [disabled]="!canZoomIn()" (onClick)="zoomIn()"></ngx-gallery-action>
                <ngx-gallery-action *ngIf="rotate" [icon]="rotateLeftIcon" (onClick)="rotateLeft()"></ngx-gallery-action>
                <ngx-gallery-action *ngIf="rotate" [icon]="rotateRightIcon" (onClick)="rotateRight()"></ngx-gallery-action>
                <ngx-gallery-action *ngIf="fullscreen" [icon]="fullscreenIcon" (onClick)="manageFullscreen()"></ngx-gallery-action>
                <ngx-gallery-action [icon]="closeIcon" (onClick)="close()"></ngx-gallery-action>
            </div>
        </div>
        <div class="ngx-spinner-wrapper ngx-gallery-center" [class.ngx-gallery-active]="showSpinner">
          <mat-icon class="ngx-gallery-icon-content">{{ spinnerIcon }}</mat-icon>
        </div>
        <div class="ngx-gallery-preview-wrapper" (click)="closeOnClick && close()" (mouseup)="mouseUpHandler($event)" (mousemove)="mouseMoveHandler($event)" (touchend)="mouseUpHandler($event)" (touchmove)="mouseMoveHandler($event)">
            <div class="ngx-gallery-preview-img-wrapper">
                <img *ngIf="src" #previewImage class="ngx-gallery-preview-img ngx-gallery-center" [src]="src" (click)="$event.stopPropagation()" (mouseenter)="imageMouseEnter()" (mouseleave)="imageMouseLeave()" (mousedown)="mouseDownHandler($event)" (touchstart)="mouseDownHandler($event)" [class.ngx-gallery-active]="!loading" [class.animation]="animation" [class.ngx-gallery-grab]="canDragOnZoom()" [style.transform]="getTransform()" [style.left]="positionLeft + 'px'" [style.top]="positionTop + 'px'"/>
                <ngx-gallery-bullets *ngIf="bullets" [count]="images.length" [active]="index" (onChange)="showAtIndex($event)"></ngx-gallery-bullets>
            </div>
            <div class="ngx-gallery-preview-text" *ngIf="showDescription && description" [innerHTML]="description" (click)="$event.stopPropagation()"></div>
        </div>
    `,
                styles: [":host(.ngx-gallery-active){width:100%;height:100%;position:fixed;left:0;top:0;background:rgba(0,0,0,.7);z-index:10000;display:inline-block}:host{display:none}:host ::ng-deep .ngx-gallery-arrow{font-size:50px}:host ::ng-deep ngx-gallery-bullets{height:5%;align-items:center;padding:0}.ngx-gallery-preview-img{opacity:0;max-width:90%;max-height:90%;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;transition:transform .5s}.ngx-gallery-preview-img.animation{transition:opacity .5s linear,transform .5s}.ngx-gallery-preview-img.ngx-gallery-active{opacity:1}.ngx-gallery-preview-img.ngx-gallery-grab{cursor:grab;cursor:-webkit-grab}.ngx-gallery-icon.ngx-gallery-spinner{font-size:50px;left:0;display:inline-block}:host ::ng-deep .ngx-gallery-preview-top{position:absolute;width:100%;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}:host ::ng-deep .ngx-gallery-preview-icons{float:right}:host ::ng-deep .ngx-gallery-preview-icons .ngx-gallery-icon{position:relative;margin-right:10px;margin-top:10px;font-size:25px;cursor:pointer;text-decoration:none}:host ::ng-deep .ngx-gallery-preview-icons .ngx-gallery-icon.ngx-gallery-icon-disabled{cursor:default;opacity:.4}.ngx-spinner-wrapper{width:50px;height:50px;display:none}.ngx-spinner-wrapper.ngx-gallery-active{display:inline-block}.ngx-gallery-center{position:absolute;left:0;right:0;bottom:0;margin:auto;top:0}.ngx-gallery-preview-text{width:100%;background:rgba(0,0,0,.7);padding:10px;text-align:center;color:#fff;font-size:16px;flex:0 1 auto;z-index:10}.ngx-gallery-preview-wrapper{width:100%;height:100%;display:flex;flex-flow:column}.ngx-gallery-preview-img-wrapper{flex:1 1 auto;position:relative}"]
            }] }
];
/** @nocollapse */
NgxGalleryPreviewComponent.ctorParameters = () => [
    { type: DomSanitizer },
    { type: ElementRef },
    { type: NgxGalleryHelperService },
    { type: Renderer2 },
    { type: ChangeDetectorRef }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWdhbGxlcnktcHJldmlldy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZW8tY2Fyb3VzZWwvIiwic291cmNlcyI6WyJsaWIvbmd4LWdhbGxlcnktcHJldmlldy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQW9DLFVBQVUsRUFBRSxZQUFZLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM1SyxPQUFPLEVBQW1CLFlBQVksRUFBc0IsTUFBTSwyQkFBMkIsQ0FBQztBQUc5RixPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQWtDdkUsTUFBTSxPQUFPLDBCQUEwQjs7Ozs7Ozs7SUFpRW5DLFlBQW9CLFlBQTBCLEVBQVUsVUFBc0IsRUFDbEUsYUFBc0MsRUFBVSxRQUFtQixFQUNuRSxpQkFBb0M7UUFGNUIsaUJBQVksR0FBWixZQUFZLENBQWM7UUFBVSxlQUFVLEdBQVYsVUFBVSxDQUFZO1FBQ2xFLGtCQUFhLEdBQWIsYUFBYSxDQUF5QjtRQUFVLGFBQVEsR0FBUixRQUFRLENBQVc7UUFDbkUsc0JBQWlCLEdBQWpCLGlCQUFpQixDQUFtQjtRQTlEaEQsZ0JBQVcsR0FBRyxLQUFLLENBQUM7UUFDcEIsaUJBQVksR0FBRyxDQUFDLENBQUM7UUFDakIsZ0JBQVcsR0FBRyxDQUFDLENBQUM7UUFDaEIsY0FBUyxHQUFHLENBQUMsQ0FBQztRQUNkLFlBQU8sR0FBRyxLQUFLLENBQUM7UUFDaEIsZ0JBQVcsR0FBRyxDQUFDLENBQUM7UUFDaEIsVUFBSyxHQUFHLENBQUMsQ0FBQztRQXFDQSxXQUFNLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUM1QixZQUFPLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUM3QixtQkFBYyxHQUFHLElBQUksWUFBWSxF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Qjs7Ozs7SUFDMUUsbURBQThDOzs7OztJQUFFLDhDQUEyQjs7Ozs7SUFDM0UsdURBQTRDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0b3JSZWYsIENvbXBvbmVudCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBPbkluaXQsIE9uQ2hhbmdlcywgU2ltcGxlQ2hhbmdlcywgRWxlbWVudFJlZiwgSG9zdExpc3RlbmVyLCBWaWV3Q2hpbGQsIFJlbmRlcmVyMiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU2FmZVJlc291cmNlVXJsLCBEb21TYW5pdGl6ZXIsIFNhZmVVcmwsIFNhZmVTdHlsZSB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xuXG5pbXBvcnQgeyBOZ3hHYWxsZXJ5QWN0aW9uIH0gZnJvbSAnLi9uZ3gtZ2FsbGVyeS1hY3Rpb24ubW9kZWwnO1xuaW1wb3J0IHsgTmd4R2FsbGVyeUhlbHBlclNlcnZpY2UgfSBmcm9tICcuL25neC1nYWxsZXJ5LWhlbHBlci5zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICduZ3gtZ2FsbGVyeS1wcmV2aWV3JyxcbiAgICB0ZW1wbGF0ZTogYFxuICAgICAgICA8bmd4LWdhbGxlcnktYXJyb3dzICpuZ0lmPVwiYXJyb3dzXCIgKG9uUHJldkNsaWNrKT1cInNob3dQcmV2KClcIiAob25OZXh0Q2xpY2spPVwic2hvd05leHQoKVwiIFtwcmV2RGlzYWJsZWRdPVwiIWNhblNob3dQcmV2KClcIiBbbmV4dERpc2FibGVkXT1cIiFjYW5TaG93TmV4dCgpXCIgW2Fycm93UHJldkljb25dPVwiYXJyb3dQcmV2SWNvblwiIFthcnJvd05leHRJY29uXT1cImFycm93TmV4dEljb25cIj48L25neC1nYWxsZXJ5LWFycm93cz5cbiAgICAgICAgPGRpdiBjbGFzcz1cIm5neC1nYWxsZXJ5LXByZXZpZXctdG9wXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwibmd4LWdhbGxlcnktcHJldmlldy1pY29uc1wiPlxuICAgICAgICAgICAgICAgIDxuZ3gtZ2FsbGVyeS1hY3Rpb24gKm5nRm9yPVwibGV0IGFjdGlvbiBvZiBhY3Rpb25zXCIgW2ljb25dPVwiYWN0aW9uLmljb25cIiBbZGlzYWJsZWRdPVwiYWN0aW9uLmRpc2FibGVkXCIgW3RpdGxlVGV4dF09XCJhY3Rpb24udGl0bGVUZXh0XCIgKG9uQ2xpY2spPVwiYWN0aW9uLm9uQ2xpY2soJGV2ZW50LCBpbmRleClcIj48L25neC1nYWxsZXJ5LWFjdGlvbj5cbiAgICAgICAgICAgICAgICA8YSAqbmdJZj1cImRvd25sb2FkICYmIHNyY1wiIFtocmVmXT1cInNyY1wiIGNsYXNzPVwibmd4LWdhbGxlcnktaWNvblwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIGRvd25sb2FkPlxuXG4gICAgICAgICAgICAgICAgICA8bWF0LWljb24gY2xhc3M9XCJuZ3gtZ2FsbGVyeS1pY29uLWNvbnRlbnRcIj57eyBkb3dubG9hZEljb24gfX08L21hdC1pY29uPlxuICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICA8bmd4LWdhbGxlcnktYWN0aW9uICpuZ0lmPVwiem9vbVwiIFtpY29uXT1cInpvb21PdXRJY29uXCIgW2Rpc2FibGVkXT1cIiFjYW5ab29tT3V0KClcIiAob25DbGljayk9XCJ6b29tT3V0KClcIj48L25neC1nYWxsZXJ5LWFjdGlvbj5cbiAgICAgICAgICAgICAgICA8bmd4LWdhbGxlcnktYWN0aW9uICpuZ0lmPVwiem9vbVwiIFtpY29uXT1cInpvb21Jbkljb25cIiBbZGlzYWJsZWRdPVwiIWNhblpvb21JbigpXCIgKG9uQ2xpY2spPVwiem9vbUluKClcIj48L25neC1nYWxsZXJ5LWFjdGlvbj5cbiAgICAgICAgICAgICAgICA8bmd4LWdhbGxlcnktYWN0aW9uICpuZ0lmPVwicm90YXRlXCIgW2ljb25dPVwicm90YXRlTGVmdEljb25cIiAob25DbGljayk9XCJyb3RhdGVMZWZ0KClcIj48L25neC1nYWxsZXJ5LWFjdGlvbj5cbiAgICAgICAgICAgICAgICA8bmd4LWdhbGxlcnktYWN0aW9uICpuZ0lmPVwicm90YXRlXCIgW2ljb25dPVwicm90YXRlUmlnaHRJY29uXCIgKG9uQ2xpY2spPVwicm90YXRlUmlnaHQoKVwiPjwvbmd4LWdhbGxlcnktYWN0aW9uPlxuICAgICAgICAgICAgICAgIDxuZ3gtZ2FsbGVyeS1hY3Rpb24gKm5nSWY9XCJmdWxsc2NyZWVuXCIgW2ljb25dPVwiZnVsbHNjcmVlbkljb25cIiAob25DbGljayk9XCJtYW5hZ2VGdWxsc2NyZWVuKClcIj48L25neC1nYWxsZXJ5LWFjdGlvbj5cbiAgICAgICAgICAgICAgICA8bmd4LWdhbGxlcnktYWN0aW9uIFtpY29uXT1cImNsb3NlSWNvblwiIChvbkNsaWNrKT1cImNsb3NlKClcIj48L25neC1nYWxsZXJ5LWFjdGlvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cIm5neC1zcGlubmVyLXdyYXBwZXIgbmd4LWdhbGxlcnktY2VudGVyXCIgW2NsYXNzLm5neC1nYWxsZXJ5LWFjdGl2ZV09XCJzaG93U3Bpbm5lclwiPlxuICAgICAgICAgIDxtYXQtaWNvbiBjbGFzcz1cIm5neC1nYWxsZXJ5LWljb24tY29udGVudFwiPnt7IHNwaW5uZXJJY29uIH19PC9tYXQtaWNvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJuZ3gtZ2FsbGVyeS1wcmV2aWV3LXdyYXBwZXJcIiAoY2xpY2spPVwiY2xvc2VPbkNsaWNrICYmIGNsb3NlKClcIiAobW91c2V1cCk9XCJtb3VzZVVwSGFuZGxlcigkZXZlbnQpXCIgKG1vdXNlbW92ZSk9XCJtb3VzZU1vdmVIYW5kbGVyKCRldmVudClcIiAodG91Y2hlbmQpPVwibW91c2VVcEhhbmRsZXIoJGV2ZW50KVwiICh0b3VjaG1vdmUpPVwibW91c2VNb3ZlSGFuZGxlcigkZXZlbnQpXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwibmd4LWdhbGxlcnktcHJldmlldy1pbWctd3JhcHBlclwiPlxuICAgICAgICAgICAgICAgIDxpbWcgKm5nSWY9XCJzcmNcIiAjcHJldmlld0ltYWdlIGNsYXNzPVwibmd4LWdhbGxlcnktcHJldmlldy1pbWcgbmd4LWdhbGxlcnktY2VudGVyXCIgW3NyY109XCJzcmNcIiAoY2xpY2spPVwiJGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpXCIgKG1vdXNlZW50ZXIpPVwiaW1hZ2VNb3VzZUVudGVyKClcIiAobW91c2VsZWF2ZSk9XCJpbWFnZU1vdXNlTGVhdmUoKVwiIChtb3VzZWRvd24pPVwibW91c2VEb3duSGFuZGxlcigkZXZlbnQpXCIgKHRvdWNoc3RhcnQpPVwibW91c2VEb3duSGFuZGxlcigkZXZlbnQpXCIgW2NsYXNzLm5neC1nYWxsZXJ5LWFjdGl2ZV09XCIhbG9hZGluZ1wiIFtjbGFzcy5hbmltYXRpb25dPVwiYW5pbWF0aW9uXCIgW2NsYXNzLm5neC1nYWxsZXJ5LWdyYWJdPVwiY2FuRHJhZ09uWm9vbSgpXCIgW3N0eWxlLnRyYW5zZm9ybV09XCJnZXRUcmFuc2Zvcm0oKVwiIFtzdHlsZS5sZWZ0XT1cInBvc2l0aW9uTGVmdCArICdweCdcIiBbc3R5bGUudG9wXT1cInBvc2l0aW9uVG9wICsgJ3B4J1wiLz5cbiAgICAgICAgICAgICAgICA8bmd4LWdhbGxlcnktYnVsbGV0cyAqbmdJZj1cImJ1bGxldHNcIiBbY291bnRdPVwiaW1hZ2VzLmxlbmd0aFwiIFthY3RpdmVdPVwiaW5kZXhcIiAob25DaGFuZ2UpPVwic2hvd0F0SW5kZXgoJGV2ZW50KVwiPjwvbmd4LWdhbGxlcnktYnVsbGV0cz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm5neC1nYWxsZXJ5LXByZXZpZXctdGV4dFwiICpuZ0lmPVwic2hvd0Rlc2NyaXB0aW9uICYmIGRlc2NyaXB0aW9uXCIgW2lubmVySFRNTF09XCJkZXNjcmlwdGlvblwiIChjbGljayk9XCIkZXZlbnQuc3RvcFByb3BhZ2F0aW9uKClcIj48L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgYCxcbiAgICBzdHlsZVVybHM6IFsnLi9uZ3gtZ2FsbGVyeS1wcmV2aWV3LmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgTmd4R2FsbGVyeVByZXZpZXdDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uQ2hhbmdlcyB7XG5cbiAgICBzcmM6IFNhZmVVcmw7XG4gICAgc3JjSW5kZXg6IG51bWJlcjtcbiAgICBkZXNjcmlwdGlvbjogc3RyaW5nO1xuICAgIHNob3dTcGlubmVyID0gZmFsc2U7XG4gICAgcG9zaXRpb25MZWZ0ID0gMDtcbiAgICBwb3NpdGlvblRvcCA9IDA7XG4gICAgem9vbVZhbHVlID0gMTtcbiAgICBsb2FkaW5nID0gZmFsc2U7XG4gICAgcm90YXRlVmFsdWUgPSAwO1xuICAgIGluZGV4ID0gMDtcblxuICAgIEBJbnB1dCgpIGltYWdlczogc3RyaW5nW10gfCBTYWZlUmVzb3VyY2VVcmxbXTtcbiAgICBASW5wdXQoKSBkZXNjcmlwdGlvbnM6IHN0cmluZ1tdO1xuICAgIEBJbnB1dCgpIHNob3dEZXNjcmlwdGlvbjogYm9vbGVhbjtcbiAgICBASW5wdXQoKSBhcnJvd3M6IGJvb2xlYW47XG4gICAgQElucHV0KCkgYXJyb3dzQXV0b0hpZGU6IGJvb2xlYW47XG4gICAgQElucHV0KCkgc3dpcGU6IGJvb2xlYW47XG4gICAgQElucHV0KCkgZnVsbHNjcmVlbjogYm9vbGVhbjtcbiAgICBASW5wdXQoKSBmb3JjZUZ1bGxzY3JlZW46IGJvb2xlYW47XG4gICAgQElucHV0KCkgY2xvc2VPbkNsaWNrOiBib29sZWFuO1xuICAgIEBJbnB1dCgpIGNsb3NlT25Fc2M6IGJvb2xlYW47XG4gICAgQElucHV0KCkga2V5Ym9hcmROYXZpZ2F0aW9uOiBib29sZWFuO1xuICAgIEBJbnB1dCgpIGFycm93UHJldkljb246IHN0cmluZztcbiAgICBASW5wdXQoKSBhcnJvd05leHRJY29uOiBzdHJpbmc7XG4gICAgQElucHV0KCkgY2xvc2VJY29uOiBzdHJpbmc7XG4gICAgQElucHV0KCkgZnVsbHNjcmVlbkljb246IHN0cmluZztcbiAgICBASW5wdXQoKSBzcGlubmVySWNvbjogc3RyaW5nO1xuICAgIEBJbnB1dCgpIGF1dG9QbGF5OiBib29sZWFuO1xuICAgIEBJbnB1dCgpIGF1dG9QbGF5SW50ZXJ2YWw6IG51bWJlcjtcbiAgICBASW5wdXQoKSBhdXRvUGxheVBhdXNlT25Ib3ZlcjogYm9vbGVhbjtcbiAgICBASW5wdXQoKSBpbmZpbml0eU1vdmU6IGJvb2xlYW47XG4gICAgQElucHV0KCkgem9vbTogYm9vbGVhbjtcbiAgICBASW5wdXQoKSB6b29tU3RlcDogbnVtYmVyO1xuICAgIEBJbnB1dCgpIHpvb21NYXg6IG51bWJlcjtcbiAgICBASW5wdXQoKSB6b29tTWluOiBudW1iZXI7XG4gICAgQElucHV0KCkgem9vbUluSWNvbjogc3RyaW5nO1xuICAgIEBJbnB1dCgpIHpvb21PdXRJY29uOiBzdHJpbmc7XG4gICAgQElucHV0KCkgYW5pbWF0aW9uOiBib29sZWFuO1xuICAgIEBJbnB1dCgpIGFjdGlvbnM6IE5neEdhbGxlcnlBY3Rpb25bXTtcbiAgICBASW5wdXQoKSByb3RhdGU6IGJvb2xlYW47XG4gICAgQElucHV0KCkgcm90YXRlTGVmdEljb246IHN0cmluZztcbiAgICBASW5wdXQoKSByb3RhdGVSaWdodEljb246IHN0cmluZztcbiAgICBASW5wdXQoKSBkb3dubG9hZDogYm9vbGVhbjtcbiAgICBASW5wdXQoKSBkb3dubG9hZEljb246IHN0cmluZztcbiAgICBASW5wdXQoKSBidWxsZXRzOiBzdHJpbmc7XG5cbiAgICBAT3V0cHV0KCkgb25PcGVuID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICAgIEBPdXRwdXQoKSBvbkNsb3NlID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICAgIEBPdXRwdXQoKSBvbkFjdGl2ZUNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8bnVtYmVyPigpO1xuXG4gICAgLy8gQHRzLWlnbm9yZVxuICAgIEBWaWV3Q2hpbGQoJ3ByZXZpZXdJbWFnZScpIHByZXZpZXdJbWFnZTogRWxlbWVudFJlZjtcblxuICAgIHByaXZhdGUgaXNPcGVuID0gZmFsc2U7XG4gICAgcHJpdmF0ZSB0aW1lcjtcbiAgICBwcml2YXRlIGluaXRpYWxYID0gMDtcbiAgICBwcml2YXRlIGluaXRpYWxZID0gMDtcbiAgICBwcml2YXRlIGluaXRpYWxMZWZ0ID0gMDtcbiAgICBwcml2YXRlIGluaXRpYWxUb3AgPSAwO1xuICAgIHByaXZhdGUgaXNNb3ZlID0gZmFsc2U7XG5cbiAgICBwcml2YXRlIGtleURvd25MaXN0ZW5lcjogRnVuY3Rpb247XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHNhbml0aXphdGlvbjogRG9tU2FuaXRpemVyLCBwcml2YXRlIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXG4gICAgICAgIHByaXZhdGUgaGVscGVyU2VydmljZTogTmd4R2FsbGVyeUhlbHBlclNlcnZpY2UsIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMixcbiAgICAgICAgcHJpdmF0ZSBjaGFuZ2VEZXRlY3RvclJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYpIHt9XG5cbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMuYXJyb3dzICYmIHRoaXMuYXJyb3dzQXV0b0hpZGUpIHtcbiAgICAgICAgICAgIHRoaXMuYXJyb3dzID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XG4gICAgICAgIGlmIChjaGFuZ2VzWydzd2lwZSddKSB7XG4gICAgICAgICAgICB0aGlzLmhlbHBlclNlcnZpY2UubWFuYWdlU3dpcGUodGhpcy5zd2lwZSwgdGhpcy5lbGVtZW50UmVmLFxuICAgICAgICAgICAgJ3ByZXZpZXcnLCAoKSA9PiB0aGlzLnNob3dOZXh0KCksICgpID0+IHRoaXMuc2hvd1ByZXYoKSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBuZ09uRGVzdHJveSgpIHtcbiAgICAgICAgaWYgKHRoaXMua2V5RG93bkxpc3RlbmVyKSB7XG4gICAgICAgICAgICB0aGlzLmtleURvd25MaXN0ZW5lcigpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgQEhvc3RMaXN0ZW5lcignbW91c2VlbnRlcicpIG9uTW91c2VFbnRlcigpIHtcbiAgICAgICAgaWYgKHRoaXMuYXJyb3dzQXV0b0hpZGUgJiYgIXRoaXMuYXJyb3dzKSB7XG4gICAgICAgICAgICB0aGlzLmFycm93cyA9IHRydWU7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBASG9zdExpc3RlbmVyKCdtb3VzZWxlYXZlJykgb25Nb3VzZUxlYXZlKCkge1xuICAgICAgICBpZiAodGhpcy5hcnJvd3NBdXRvSGlkZSAmJiB0aGlzLmFycm93cykge1xuICAgICAgICAgICAgdGhpcy5hcnJvd3MgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG9uS2V5RG93bihlKSB7XG4gICAgICAgIGlmICh0aGlzLmlzT3Blbikge1xuICAgICAgICAgICAgaWYgKHRoaXMua2V5Ym9hcmROYXZpZ2F0aW9uKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuaXNLZXlib2FyZFByZXYoZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zaG93UHJldigpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5pc0tleWJvYXJkTmV4dChlKSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNob3dOZXh0KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHRoaXMuY2xvc2VPbkVzYyAmJiB0aGlzLmlzS2V5Ym9hcmRFc2MoZSkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNsb3NlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBvcGVuKGluZGV4OiBudW1iZXIpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5vbk9wZW4uZW1pdCgpO1xuXG4gICAgICAgIHRoaXMuaW5kZXggPSBpbmRleDtcbiAgICAgICAgdGhpcy5pc09wZW4gPSB0cnVlO1xuICAgICAgICB0aGlzLnNob3codHJ1ZSk7XG5cbiAgICAgICAgaWYgKHRoaXMuZm9yY2VGdWxsc2NyZWVuKSB7XG4gICAgICAgICAgICB0aGlzLm1hbmFnZUZ1bGxzY3JlZW4oKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMua2V5RG93bkxpc3RlbmVyID0gdGhpcy5yZW5kZXJlci5saXN0ZW4oXCJ3aW5kb3dcIiwgXCJrZXlkb3duXCIsIChlKSA9PiB0aGlzLm9uS2V5RG93bihlKSk7XG4gICAgfVxuXG4gICAgY2xvc2UoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuaXNPcGVuID0gZmFsc2U7XG4gICAgICAgIHRoaXMuY2xvc2VGdWxsc2NyZWVuKCk7XG4gICAgICAgIHRoaXMub25DbG9zZS5lbWl0KCk7XG5cbiAgICAgICAgdGhpcy5zdG9wQXV0b1BsYXkoKTtcblxuICAgICAgICBpZiAodGhpcy5rZXlEb3duTGlzdGVuZXIpIHtcbiAgICAgICAgICAgIHRoaXMua2V5RG93bkxpc3RlbmVyKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBpbWFnZU1vdXNlRW50ZXIoKTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLmF1dG9QbGF5ICYmIHRoaXMuYXV0b1BsYXlQYXVzZU9uSG92ZXIpIHtcbiAgICAgICAgICAgIHRoaXMuc3RvcEF1dG9QbGF5KCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBpbWFnZU1vdXNlTGVhdmUoKTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLmF1dG9QbGF5ICYmIHRoaXMuYXV0b1BsYXlQYXVzZU9uSG92ZXIpIHtcbiAgICAgICAgICAgIHRoaXMuc3RhcnRBdXRvUGxheSgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgc3RhcnRBdXRvUGxheSgpOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMuYXV0b1BsYXkpIHtcbiAgICAgICAgICAgIHRoaXMuc3RvcEF1dG9QbGF5KCk7XG5cbiAgICAgICAgICAgIHRoaXMudGltZXIgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoIXRoaXMuc2hvd05leHQoKSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmluZGV4ID0gLTE7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2hvd05leHQoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LCB0aGlzLmF1dG9QbGF5SW50ZXJ2YWwpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgc3RvcEF1dG9QbGF5KCk6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy50aW1lcikge1xuICAgICAgICAgICAgY2xlYXJUaW1lb3V0KHRoaXMudGltZXIpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgc2hvd0F0SW5kZXgoaW5kZXg6IG51bWJlcik6IHZvaWQge1xuICAgICAgICB0aGlzLmluZGV4ID0gaW5kZXg7XG4gICAgICAgIHRoaXMuc2hvdygpO1xuICAgIH1cblxuICAgIHNob3dOZXh0KCk6IGJvb2xlYW4ge1xuICAgICAgICBpZiAodGhpcy5jYW5TaG93TmV4dCgpKSB7XG4gICAgICAgICAgICB0aGlzLmluZGV4Kys7XG5cbiAgICAgICAgICAgIGlmICh0aGlzLmluZGV4ID09PSB0aGlzLmltYWdlcy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmluZGV4ID0gMDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpcy5zaG93KCk7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHNob3dQcmV2KCk6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5jYW5TaG93UHJldigpKSB7XG4gICAgICAgICAgICB0aGlzLmluZGV4LS07XG5cbiAgICAgICAgICAgIGlmICh0aGlzLmluZGV4IDwgMCkge1xuICAgICAgICAgICAgICAgIHRoaXMuaW5kZXggPSB0aGlzLmltYWdlcy5sZW5ndGggLSAxO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGlzLnNob3coKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNhblNob3dOZXh0KCk6IGJvb2xlYW4ge1xuICAgICAgICBpZiAodGhpcy5sb2FkaW5nKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5pbWFnZXMpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmluZmluaXR5TW92ZSB8fCB0aGlzLmluZGV4IDwgdGhpcy5pbWFnZXMubGVuZ3RoIC0gMSA/IHRydWUgOiBmYWxzZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNhblNob3dQcmV2KCk6IGJvb2xlYW4ge1xuICAgICAgICBpZiAodGhpcy5sb2FkaW5nKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5pbWFnZXMpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmluZmluaXR5TW92ZSB8fCB0aGlzLmluZGV4ID4gMCA/IHRydWUgOiBmYWxzZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG1hbmFnZUZ1bGxzY3JlZW4oKTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLmZ1bGxzY3JlZW4gfHwgdGhpcy5mb3JjZUZ1bGxzY3JlZW4pIHtcbiAgICAgICAgICAgIGNvbnN0IGRvYyA9IDxhbnk+ZG9jdW1lbnQ7XG5cbiAgICAgICAgICAgIGlmICghZG9jLmZ1bGxzY3JlZW5FbGVtZW50ICYmICFkb2MubW96RnVsbFNjcmVlbkVsZW1lbnRcbiAgICAgICAgICAgICAgICAmJiAhZG9jLndlYmtpdEZ1bGxzY3JlZW5FbGVtZW50ICYmICFkb2MubXNGdWxsc2NyZWVuRWxlbWVudCkge1xuICAgICAgICAgICAgICAgIHRoaXMub3BlbkZ1bGxzY3JlZW4oKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jbG9zZUZ1bGxzY3JlZW4oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGdldFNhZmVVcmwoaW1hZ2U6IHN0cmluZyk6IFNhZmVVcmwge1xuICAgICAgICByZXR1cm4gaW1hZ2Uuc3Vic3RyKDAsIDEwKSA9PT0gJ2RhdGE6aW1hZ2UnID9cbiAgICAgICAgICAgIGltYWdlIDogdGhpcy5zYW5pdGl6YXRpb24uYnlwYXNzU2VjdXJpdHlUcnVzdFVybChpbWFnZSk7XG4gICAgfVxuXG4gICAgem9vbUluKCk6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5jYW5ab29tSW4oKSkge1xuICAgICAgICAgICAgdGhpcy56b29tVmFsdWUgKz0gdGhpcy56b29tU3RlcDtcblxuICAgICAgICAgICAgaWYgKHRoaXMuem9vbVZhbHVlID4gdGhpcy56b29tTWF4KSB7XG4gICAgICAgICAgICAgICAgdGhpcy56b29tVmFsdWUgPSB0aGlzLnpvb21NYXg7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB6b29tT3V0KCk6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5jYW5ab29tT3V0KCkpIHtcbiAgICAgICAgICAgIHRoaXMuem9vbVZhbHVlIC09IHRoaXMuem9vbVN0ZXA7XG5cbiAgICAgICAgICAgIGlmICh0aGlzLnpvb21WYWx1ZSA8IHRoaXMuem9vbU1pbikge1xuICAgICAgICAgICAgICAgIHRoaXMuem9vbVZhbHVlID0gdGhpcy56b29tTWluO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAodGhpcy56b29tVmFsdWUgPD0gMSkge1xuICAgICAgICAgICAgICAgIHRoaXMucmVzZXRQb3NpdGlvbigpXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByb3RhdGVMZWZ0KCk6IHZvaWQge1xuICAgICAgICB0aGlzLnJvdGF0ZVZhbHVlIC09IDkwO1xuICAgIH1cblxuICAgIHJvdGF0ZVJpZ2h0KCk6IHZvaWQge1xuICAgICAgICB0aGlzLnJvdGF0ZVZhbHVlICs9IDkwO1xuICAgIH1cblxuICAgIGdldFRyYW5zZm9ybSgpOiBTYWZlU3R5bGUge1xuICAgICAgICByZXR1cm4gdGhpcy5zYW5pdGl6YXRpb24uYnlwYXNzU2VjdXJpdHlUcnVzdFN0eWxlKCdzY2FsZSgnICsgdGhpcy56b29tVmFsdWUgKyAnKSByb3RhdGUoJyArIHRoaXMucm90YXRlVmFsdWUgKyAnZGVnKScpO1xuICAgIH1cblxuICAgIGNhblpvb21JbigpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuem9vbVZhbHVlIDwgdGhpcy56b29tTWF4ID8gdHJ1ZSA6IGZhbHNlO1xuICAgIH1cblxuICAgIGNhblpvb21PdXQoKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0aGlzLnpvb21WYWx1ZSA+IHRoaXMuem9vbU1pbiA/IHRydWUgOiBmYWxzZTtcbiAgICB9XG5cbiAgICBjYW5EcmFnT25ab29tKCkge1xuICAgICAgICByZXR1cm4gdGhpcy56b29tICYmIHRoaXMuem9vbVZhbHVlID4gMTtcbiAgICB9XG5cbiAgICBtb3VzZURvd25IYW5kbGVyKGUpOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMuY2FuRHJhZ09uWm9vbSgpKSB7XG4gICAgICAgICAgICB0aGlzLmluaXRpYWxYID0gdGhpcy5nZXRDbGllbnRYKGUpO1xuICAgICAgICAgICAgdGhpcy5pbml0aWFsWSA9IHRoaXMuZ2V0Q2xpZW50WShlKTtcbiAgICAgICAgICAgIHRoaXMuaW5pdGlhbExlZnQgPSB0aGlzLnBvc2l0aW9uTGVmdDtcbiAgICAgICAgICAgIHRoaXMuaW5pdGlhbFRvcCA9IHRoaXMucG9zaXRpb25Ub3A7XG4gICAgICAgICAgICB0aGlzLmlzTW92ZSA9IHRydWU7XG5cbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG1vdXNlVXBIYW5kbGVyKGUpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5pc01vdmUgPSBmYWxzZTtcbiAgICB9XG5cbiAgICBtb3VzZU1vdmVIYW5kbGVyKGUpIHtcbiAgICAgICAgaWYgKHRoaXMuaXNNb3ZlKSB7XG4gICAgICAgICAgICB0aGlzLnBvc2l0aW9uTGVmdCA9IHRoaXMuaW5pdGlhbExlZnQgKyAodGhpcy5nZXRDbGllbnRYKGUpIC0gdGhpcy5pbml0aWFsWCk7XG4gICAgICAgICAgICB0aGlzLnBvc2l0aW9uVG9wID0gdGhpcy5pbml0aWFsVG9wICsgKHRoaXMuZ2V0Q2xpZW50WShlKSAtIHRoaXMuaW5pdGlhbFkpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBnZXRDbGllbnRYKGUpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gZS50b3VjaGVzICYmIGUudG91Y2hlcy5sZW5ndGggPyBlLnRvdWNoZXNbMF0uY2xpZW50WCA6IGUuY2xpZW50WDtcbiAgICB9XG5cbiAgICBwcml2YXRlIGdldENsaWVudFkoZSk6IG51bWJlciB7XG4gICAgICAgIHJldHVybiBlLnRvdWNoZXMgJiYgZS50b3VjaGVzLmxlbmd0aCA/IGUudG91Y2hlc1swXS5jbGllbnRZIDogZS5jbGllbnRZO1xuICAgIH1cblxuICAgIHByaXZhdGUgcmVzZXRQb3NpdGlvbigpIHtcbiAgICAgICAgaWYgKHRoaXMuem9vbSkge1xuICAgICAgICAgICAgdGhpcy5wb3NpdGlvbkxlZnQgPSAwO1xuICAgICAgICAgICAgdGhpcy5wb3NpdGlvblRvcCA9IDA7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIGlzS2V5Ym9hcmROZXh0KGUpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIGUua2V5Q29kZSA9PT0gMzkgPyB0cnVlIDogZmFsc2U7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBpc0tleWJvYXJkUHJldihlKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiBlLmtleUNvZGUgPT09IDM3ID8gdHJ1ZSA6IGZhbHNlO1xuICAgIH1cblxuICAgIHByaXZhdGUgaXNLZXlib2FyZEVzYyhlKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiBlLmtleUNvZGUgPT09IDI3ID8gdHJ1ZSA6IGZhbHNlO1xuICAgIH1cblxuICAgIHByaXZhdGUgb3BlbkZ1bGxzY3JlZW4oKTogdm9pZCB7XG4gICAgICAgIGNvbnN0IGVsZW1lbnQgPSA8YW55PmRvY3VtZW50LmRvY3VtZW50RWxlbWVudDtcblxuICAgICAgICBpZiAoZWxlbWVudC5yZXF1ZXN0RnVsbHNjcmVlbikge1xuICAgICAgICAgICAgZWxlbWVudC5yZXF1ZXN0RnVsbHNjcmVlbigpO1xuICAgICAgICB9IGVsc2UgaWYgKGVsZW1lbnQubXNSZXF1ZXN0RnVsbHNjcmVlbikge1xuICAgICAgICAgICAgZWxlbWVudC5tc1JlcXVlc3RGdWxsc2NyZWVuKCk7XG4gICAgICAgIH0gZWxzZSBpZiAoZWxlbWVudC5tb3pSZXF1ZXN0RnVsbFNjcmVlbikge1xuICAgICAgICAgICAgZWxlbWVudC5tb3pSZXF1ZXN0RnVsbFNjcmVlbigpO1xuICAgICAgICB9IGVsc2UgaWYgKGVsZW1lbnQud2Via2l0UmVxdWVzdEZ1bGxzY3JlZW4pIHtcbiAgICAgICAgICAgIGVsZW1lbnQud2Via2l0UmVxdWVzdEZ1bGxzY3JlZW4oKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgY2xvc2VGdWxsc2NyZWVuKCk6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5pc0Z1bGxzY3JlZW4oKSkge1xuICAgICAgICAgICAgY29uc3QgZG9jID0gPGFueT5kb2N1bWVudDtcblxuICAgICAgICAgICAgaWYgKGRvYy5leGl0RnVsbHNjcmVlbikge1xuICAgICAgICAgICAgICAgIGRvYy5leGl0RnVsbHNjcmVlbigpO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChkb2MubXNFeGl0RnVsbHNjcmVlbikge1xuICAgICAgICAgICAgICAgIGRvYy5tc0V4aXRGdWxsc2NyZWVuKCk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGRvYy5tb3pDYW5jZWxGdWxsU2NyZWVuKSB7XG4gICAgICAgICAgICAgICAgZG9jLm1vekNhbmNlbEZ1bGxTY3JlZW4oKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoZG9jLndlYmtpdEV4aXRGdWxsc2NyZWVuKSB7XG4gICAgICAgICAgICAgICAgZG9jLndlYmtpdEV4aXRGdWxsc2NyZWVuKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIGlzRnVsbHNjcmVlbigpIHtcbiAgICAgICAgY29uc3QgZG9jID0gPGFueT5kb2N1bWVudDtcblxuICAgICAgICByZXR1cm4gZG9jLmZ1bGxzY3JlZW5FbGVtZW50IHx8IGRvYy53ZWJraXRGdWxsc2NyZWVuRWxlbWVudFxuICAgICAgICAgICAgfHwgZG9jLm1vekZ1bGxTY3JlZW5FbGVtZW50IHx8IGRvYy5tc0Z1bGxzY3JlZW5FbGVtZW50O1xuICAgIH1cblxuXG5cbiAgICBwcml2YXRlIHNob3coZmlyc3QgPSBmYWxzZSkge1xuICAgICAgICB0aGlzLmxvYWRpbmcgPSB0cnVlO1xuICAgICAgICB0aGlzLnN0b3BBdXRvUGxheSgpO1xuXG4gICAgICAgIHRoaXMub25BY3RpdmVDaGFuZ2UuZW1pdCh0aGlzLmluZGV4KTtcblxuICAgICAgICBpZiAoZmlyc3QgfHwgIXRoaXMuYW5pbWF0aW9uKSB7XG4gICAgICAgICAgICB0aGlzLl9zaG93KCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHRoaXMuX3Nob3coKSwgNjAwKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgX3Nob3coKSB7XG4gICAgICAgIHRoaXMuem9vbVZhbHVlID0gMTtcbiAgICAgICAgdGhpcy5yb3RhdGVWYWx1ZSA9IDA7XG4gICAgICAgIHRoaXMucmVzZXRQb3NpdGlvbigpO1xuXG4gICAgICAgIHRoaXMuc3JjID0gdGhpcy5nZXRTYWZlVXJsKDxzdHJpbmc+dGhpcy5pbWFnZXNbdGhpcy5pbmRleF0pO1xuICAgICAgICB0aGlzLnNyY0luZGV4ID0gdGhpcy5pbmRleDtcbiAgICAgICAgdGhpcy5kZXNjcmlwdGlvbiA9IHRoaXMuZGVzY3JpcHRpb25zW3RoaXMuaW5kZXhdO1xuICAgICAgICB0aGlzLmNoYW5nZURldGVjdG9yUmVmLm1hcmtGb3JDaGVjaygpO1xuXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgaWYgKHRoaXMuaXNMb2FkZWQodGhpcy5wcmV2aWV3SW1hZ2UubmF0aXZlRWxlbWVudCkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmxvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXJ0QXV0b1BsYXkoKTtcbiAgICAgICAgICAgICAgICB0aGlzLmNoYW5nZURldGVjdG9yUmVmLm1hcmtGb3JDaGVjaygpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMubG9hZGluZykge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zaG93U3Bpbm5lciA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNoYW5nZURldGVjdG9yUmVmLm1hcmtGb3JDaGVjaygpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSlcblxuICAgICAgICAgICAgICAgIHRoaXMucHJldmlld0ltYWdlLm5hdGl2ZUVsZW1lbnQub25sb2FkID0gKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmxvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zaG93U3Bpbm5lciA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnByZXZpZXdJbWFnZS5uYXRpdmVFbGVtZW50Lm9ubG9hZCA9IG51bGw7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhcnRBdXRvUGxheSgpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNoYW5nZURldGVjdG9yUmVmLm1hcmtGb3JDaGVjaygpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBwcml2YXRlIGlzTG9hZGVkKGltZyk6IGJvb2xlYW4ge1xuICAgICAgICBpZiAoIWltZy5jb21wbGV0ZSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHR5cGVvZiBpbWcubmF0dXJhbFdpZHRoICE9PSAndW5kZWZpbmVkJyAmJiBpbWcubmF0dXJhbFdpZHRoID09PSAwKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG59XG4iXX0=