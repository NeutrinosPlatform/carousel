/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, HostListener, ViewChild, HostBinding, ElementRef, Output, EventEmitter } from '@angular/core';
import { NgxGalleryPreviewComponent } from './ngx-gallery-preview.component';
import { NgxGalleryImageComponent } from './ngx-gallery-image.component';
import { NgxGalleryThumbnailsComponent } from './ngx-gallery-thumbnails.component';
import { NgxGalleryHelperService } from './ngx-gallery-helper.service';
import { NgxGalleryOptions } from './ngx-gallery-options.model';
import { NgxGalleryLayout } from './ngx-gallery-layout.model';
import { NgxGalleryOrderedImage } from './ngx-gallery-ordered-image.model';
export class NgxGalleryComponent {
    /**
     * @param {?} myElement
     */
    constructor(myElement) {
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
    ngOnInit() {
        /** @type {?} */
        const tempOptions = [{
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
        (opt) => new NgxGalleryOptions(opt)));
        this.sortOptions();
        this.setBreakpoint();
        this.setOptions();
        this.checkFullWidth();
        if (this.currentOptions) {
            this.selectedIndex = (/** @type {?} */ (this.currentOptions.startIndex));
        }
    }
    /**
     * @return {?}
     */
    ngDoCheck() {
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
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        this.checkFullWidth();
    }
    /**
     * @return {?}
     */
    onResize() {
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
            () => {
                this.checkFullWidth();
            }), 200);
        }
    }
    /**
     * @return {?}
     */
    getImageHeight() {
        return (this.currentOptions && this.currentOptions.thumbnails) ?
            this.currentOptions.imagePercent + '%' : '100%';
    }
    /**
     * @return {?}
     */
    getThumbnailsHeight() {
        if (this.currentOptions && this.currentOptions.image) {
            return 'calc(' + this.currentOptions.thumbnailsPercent + '% - '
                + this.currentOptions.thumbnailsMargin + 'px)';
        }
        else {
            return '100%';
        }
    }
    /**
     * @return {?}
     */
    getThumbnailsMarginTop() {
        if (this.currentOptions && this.currentOptions.layout === NgxGalleryLayout.ThumbnailsBottom) {
            return this.currentOptions.thumbnailsMargin + 'px';
        }
        else {
            return '0px';
        }
    }
    /**
     * @return {?}
     */
    getThumbnailsMarginBottom() {
        if (this.currentOptions && this.currentOptions.layout === NgxGalleryLayout.ThumbnailsTop) {
            return this.currentOptions.thumbnailsMargin + 'px';
        }
        else {
            return '0px';
        }
    }
    /**
     * @param {?} index
     * @return {?}
     */
    openPreview(index) {
        if (this.currentOptions.previewCustom) {
            this.currentOptions.previewCustom(index);
        }
        else {
            this.previewEnabled = true;
            this.preview.open(index);
        }
    }
    /**
     * @return {?}
     */
    onPreviewOpen() {
        this.previewOpen.emit();
        if (this.image && this.image.autoPlay) {
            this.image.stopAutoPlay();
        }
    }
    /**
     * @return {?}
     */
    onPreviewClose() {
        this.previewEnabled = false;
        this.previewClose.emit();
        if (this.image && this.image.autoPlay) {
            this.image.startAutoPlay();
        }
    }
    /**
     * @param {?} index
     * @return {?}
     */
    selectFromImage(index) {
        this.select(index);
    }
    /**
     * @param {?} index
     * @return {?}
     */
    selectFromThumbnails(index) {
        this.select(index);
        if (this.currentOptions && this.currentOptions.thumbnails && this.currentOptions.preview
            && (!this.currentOptions.image || this.currentOptions.thumbnailsRemainingCount)) {
            this.openPreview(this.selectedIndex);
        }
    }
    /**
     * @param {?} index
     * @return {?}
     */
    show(index) {
        this.select(index);
    }
    /**
     * @return {?}
     */
    showNext() {
        this.image.showNext();
    }
    /**
     * @return {?}
     */
    showPrev() {
        this.image.showPrev();
    }
    /**
     * @return {?}
     */
    canShowNext() {
        if (this.images && this.currentOptions) {
            return (this.currentOptions.imageInfinityMove || this.selectedIndex < this.images.length - 1)
                ? true : false;
        }
        else {
            return false;
        }
    }
    /**
     * @return {?}
     */
    canShowPrev() {
        if (this.images && this.currentOptions) {
            return (this.currentOptions.imageInfinityMove || this.selectedIndex > 0) ? true : false;
        }
        else {
            return false;
        }
    }
    /**
     * @param {?} index
     * @return {?}
     */
    previewSelect(index) {
        this.previewChange.emit({ index, image: this.images[index] });
    }
    /**
     * @return {?}
     */
    moveThumbnailsRight() {
        this.thubmnails.moveRight();
    }
    /**
     * @return {?}
     */
    moveThumbnailsLeft() {
        this.thubmnails.moveLeft();
    }
    /**
     * @return {?}
     */
    canMoveThumbnailsRight() {
        return this.thubmnails.canMoveRight();
    }
    /**
     * @return {?}
     */
    canMoveThumbnailsLeft() {
        return this.thubmnails.canMoveLeft();
    }
    /**
     * @private
     * @return {?}
     */
    resetThumbnails() {
        if (this.thubmnails) {
            this.thubmnails.reset((/** @type {?} */ (this.currentOptions.startIndex)));
        }
    }
    /**
     * @private
     * @param {?} index
     * @return {?}
     */
    select(index) {
        this.selectedIndex = index;
        this.change.emit({
            index,
            image: this.images[index]
        });
    }
    /**
     * @private
     * @return {?}
     */
    checkFullWidth() {
        if (this.currentOptions && this.currentOptions.fullWidth) {
            this.width = document.body.clientWidth + 'px';
            this.left = (-(document.body.clientWidth -
                this.myElement.nativeElement.parentNode.innerWidth) / 2) + 'px';
        }
    }
    /**
     * @private
     * @return {?}
     */
    setImages() {
        this.smallImages = this.images.map((/**
         * @param {?} img
         * @return {?}
         */
        (img) => (/** @type {?} */ (img.small))));
        this.mediumImages = this.images.map((/**
         * @param {?} img
         * @param {?} i
         * @return {?}
         */
        (img, i) => new NgxGalleryOrderedImage({
            src: img.medium,
            index: i
        })));
        this.bigImages = this.images.map((/**
         * @param {?} img
         * @return {?}
         */
        (img) => (/** @type {?} */ (img.big))));
        this.descriptions = this.images.map((/**
         * @param {?} img
         * @return {?}
         */
        (img) => (/** @type {?} */ (img.description))));
        this.links = this.images.map((/**
         * @param {?} img
         * @return {?}
         */
        (img) => (/** @type {?} */ (img.url))));
        this.labels = this.images.map((/**
         * @param {?} img
         * @return {?}
         */
        (img) => (/** @type {?} */ (img.label))));
    }
    /**
     * @private
     * @return {?}
     */
    setBreakpoint() {
        this.prevBreakpoint = this.breakpoint;
        /** @type {?} */
        let breakpoints;
        if (typeof window !== 'undefined') {
            breakpoints = this.options.filter((/**
             * @param {?} opt
             * @return {?}
             */
            (opt) => opt.breakpoint >= window.innerWidth))
                .map((/**
             * @param {?} opt
             * @return {?}
             */
            (opt) => opt.breakpoint));
        }
        if (breakpoints && breakpoints.length) {
            this.breakpoint = breakpoints.pop();
        }
        else {
            this.breakpoint = undefined;
        }
    }
    /**
     * @private
     * @return {?}
     */
    sortOptions() {
        this.options = [
            ...this.options.filter((/**
             * @param {?} a
             * @return {?}
             */
            (a) => a.breakpoint === undefined)),
            ...this.options
                .filter((/**
             * @param {?} a
             * @return {?}
             */
            (a) => a.breakpoint !== undefined))
                .sort((/**
             * @param {?} a
             * @param {?} b
             * @return {?}
             */
            (a, b) => b.breakpoint - a.breakpoint))
        ];
    }
    /**
     * @private
     * @return {?}
     */
    setOptions() {
        this.currentOptions = new NgxGalleryOptions({});
        this.options
            .filter((/**
         * @param {?} opt
         * @return {?}
         */
        (opt) => opt.breakpoint === undefined || opt.breakpoint >= this.breakpoint))
            .map((/**
         * @param {?} opt
         * @return {?}
         */
        (opt) => this.combineOptions(this.currentOptions, opt)));
        this.width = (/** @type {?} */ (this.currentOptions.width));
        this.height = (/** @type {?} */ (this.currentOptions.height));
    }
    /**
     * @private
     * @param {?} first
     * @param {?} second
     * @return {?}
     */
    combineOptions(first, second) {
        Object.keys(second).map((/**
         * @param {?} val
         * @return {?}
         */
        (val) => first[val] = second[val] !== undefined ? second[val] : first[val]));
    }
}
NgxGalleryComponent.decorators = [
    { type: Component, args: [{
                selector: 'ngx-gallery',
                template: `
    <div class="ngx-gallery-layout {{currentOptions?.layout}}">
        <ngx-gallery-image *ngIf="currentOptions?.image" [style.height]="getImageHeight()" [images]="mediumImages" [clickable]="currentOptions?.preview" [selectedIndex]="selectedIndex" [arrows]="currentOptions?.imageArrows" [arrowsAutoHide]="currentOptions?.imageArrowsAutoHide" [arrowPrevIcon]="currentOptions?.arrowPrevIcon" [arrowNextIcon]="currentOptions?.arrowNextIcon" [swipe]="currentOptions?.imageSwipe" [animation]="currentOptions?.imageAnimation" [size]="currentOptions?.imageSize" [autoPlay]="currentOptions?.imageAutoPlay" [autoPlayInterval]="currentOptions?.imageAutoPlayInterval" [autoPlayPauseOnHover]="currentOptions?.imageAutoPlayPauseOnHover" [infinityMove]="currentOptions?.imageInfinityMove"  [lazyLoading]="currentOptions?.lazyLoading" [actions]="currentOptions?.imageActions" [descriptions]="descriptions" [showDescription]="currentOptions?.imageDescription" [bullets]="currentOptions?.imageBullets" (onClick)="openPreview($event)" (onActiveChange)="selectFromImage($event)"></ngx-gallery-image>

        <ngx-gallery-thumbnails *ngIf="currentOptions?.thumbnails" [style.marginTop]="getThumbnailsMarginTop()" [style.marginBottom]="getThumbnailsMarginBottom()" [style.height]="getThumbnailsHeight()" [images]="smallImages" [links]="currentOptions?.thumbnailsAsLinks ? links : []" [labels]="labels" [linkTarget]="currentOptions?.linkTarget" [selectedIndex]="selectedIndex" [columns]="currentOptions?.thumbnailsColumns" [rows]="currentOptions?.thumbnailsRows" [margin]="currentOptions?.thumbnailMargin" [arrows]="currentOptions?.thumbnailsArrows" [arrowsAutoHide]="currentOptions?.thumbnailsArrowsAutoHide" [arrowPrevIcon]="currentOptions?.arrowPrevIcon" [arrowNextIcon]="currentOptions?.arrowNextIcon" [clickable]="currentOptions?.image || currentOptions?.preview" [swipe]="currentOptions?.thumbnailsSwipe" [size]="currentOptions?.thumbnailSize" [moveSize]="currentOptions?.thumbnailsMoveSize" [order]="currentOptions?.thumbnailsOrder" [remainingCount]="currentOptions?.thumbnailsRemainingCount" [lazyLoading]="currentOptions?.lazyLoading" [actions]="currentOptions?.thumbnailActions"  (onActiveChange)="selectFromThumbnails($event)"></ngx-gallery-thumbnails>

        <ngx-gallery-preview [images]="bigImages" [descriptions]="descriptions" [arrowPrevIcon]="currentOptions?.previewPrevIconOption" [arrowNextIcon]="currentOptions?.previewNextIconOption" [closeIcon]="currentOptions?.closeIcon" [fullscreenIcon]="currentOptions?.fullscreenIcon" [spinnerIcon]="currentOptions?.spinnerIcon" [arrows]="currentOptions?.previewArrows" [arrowsAutoHide]="currentOptions?.previewArrowsAutoHide" [swipe]="currentOptions?.previewSwipe" [fullscreen]="currentOptions?.previewFullscreen" [forceFullscreen]="currentOptions?.previewForceFullscreen" [closeOnClick]="currentOptions?.previewCloseOnClick" [closeOnEsc]="currentOptions?.previewCloseOnEsc" [keyboardNavigation]="currentOptions?.previewKeyboardNavigation" [animation]="currentOptions?.previewAnimation" [autoPlay]="currentOptions?.previewAutoPlay" [autoPlayInterval]="currentOptions?.previewAutoPlayInterval" [autoPlayPauseOnHover]="currentOptions?.previewAutoPlayPauseOnHover" [infinityMove]="currentOptions?.imageInfinityMove" [zoom]="currentOptions?.previewZoom" [zoomStep]="currentOptions?.previewZoomStep" [zoomMax]="currentOptions?.previewZoomMax" [zoomMin]="currentOptions?.previewZoomMin" [zoomInIcon]="currentOptions?.zoomInIcon" [zoomOutIcon]="currentOptions?.zoomOutIcon" [actions]="currentOptions?.actions" [rotate]="currentOptions?.previewRotate" [rotateLeftIcon]="currentOptions?.rotateLeftIcon" [rotateRightIcon]="currentOptions?.rotateRightIcon" [download]="currentOptions?.previewDownload" [downloadIcon]="currentOptions?.downloadIcon" [bullets]="currentOptions?.previewBullets" (onClose)="onPreviewClose()" (onOpen)="onPreviewOpen()" (onActiveChange)="previewSelect($event)" [class.ngx-gallery-active]="previewEnabled" [showDescription]="currentOptions?.imageDescription"></ngx-gallery-preview>
    </div>
    `,
                providers: [NgxGalleryHelperService],
                styles: [":host{display:inline-block}:host>*{float:left}:host ::ng-deep *{box-sizing:border-box}:host ::ng-deep .ngx-gallery-icon{color:#fff;font-size:25px;position:absolute;z-index:2000;display:inline-block}:host ::ng-deep .ngx-gallery-icon .ngx-gallery-icon-content{display:block}:host ::ng-deep .ngx-gallery-clickable{cursor:pointer}:host ::ng-deep .ngx-gallery-icons-wrapper .ngx-gallery-icon{position:relative;margin-right:5px;margin-top:5px;font-size:20px;cursor:pointer}:host ::ng-deep .ngx-gallery-icons-wrapper{float:right}:host .ngx-gallery-layout{width:100%;height:100%;display:flex;flex-direction:column}:host .ngx-gallery-layout.thumbnails-top ngx-gallery-image{order:2}:host .ngx-gallery-layout.thumbnails-top ngx-gallery-thumbnails{order:1}:host .ngx-gallery-layout.thumbnails-bottom ngx-gallery-image{order:1}:host .ngx-gallery-layout.thumbnails-bottom ngx-gallery-thumbnails{order:2}"]
            }] }
];
/** @nocollapse */
NgxGalleryComponent.ctorParameters = () => [
    { type: ElementRef }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWdhbGxlcnkuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmVvLWNhcm91c2VsLyIsInNvdXJjZXMiOlsibGliL25neC1nYWxsZXJ5LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsWUFBWSxFQUFFLFNBQVMsRUFDOUMsV0FBVyxFQUFXLFVBQVUsRUFBaUIsTUFBTSxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUdqRyxPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQUM3RSxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUN6RSxPQUFPLEVBQUUsNkJBQTZCLEVBQUUsTUFBTSxvQ0FBb0MsQ0FBQztBQUNuRixPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUV2RSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUVoRSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUM5RCxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQWdCM0UsTUFBTSxPQUFPLG1CQUFtQjs7OztJQThENUIsWUFBb0IsU0FBcUI7UUFBckIsY0FBUyxHQUFULFNBQVMsQ0FBWTtRQTFEL0IsZ0JBQVcsR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBQ2pDLFdBQU0sR0FBRyxJQUFJLFlBQVksRUFBOEMsQ0FBQztRQUN4RSxnQkFBVyxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFDakMsaUJBQVksR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBQ2xDLGtCQUFhLEdBQUcsSUFBSSxZQUFZLEVBQThDLENBQUM7UUFnQ3pGLG9CQUFlLEdBQUcsQ0FBQyxDQUFDO1FBRXBCLGtCQUFhLEdBQUcsQ0FBQyxDQUFDO1FBS1YsZUFB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SUFDbEYsMENBQTJDOztJQUMzQywyQ0FBNEM7O0lBQzVDLDRDQUF5Rjs7SUFFekYsMENBQTZCOztJQUM3QiwyQ0FBOEI7O0lBQzlCLHNEQUF5Qzs7SUFDekMsK0NBQWtDOztJQUNsQyxxREFBeUM7O0lBQ3pDLGdEQUFvQzs7SUFDcEMscURBQXlDOztJQUN6QyxrREFBc0M7O0lBQ3RDLCtDQUFtQzs7SUFDbkMsb0RBQXdDOztJQUN4QyxpREFBcUM7O0lBQ3JDLGtEQUFzQzs7SUFDdEMsMERBQTZDOztJQUM3Qyw4REFBa0Q7O0lBQ2xELHNEQUEwQzs7SUFDMUMsNENBQWdDOztJQUNoQyxrREFBcUM7O0lBQ3JDLGtEQUFxQzs7SUFDckMsb0RBQXVDOztJQUN2QyxvREFBdUM7O0lBQ3ZDLCtDQUFtQzs7SUFFckMsMENBQTBDOztJQUN4QywyQ0FBdUM7O0lBQ3ZDLHdDQUF3Qzs7SUFDeEMsMkNBQXVCOztJQUN2QixvQ0FBZ0I7O0lBQ2hCLHFDQUFpQjs7SUFFakIsd0NBQTZCOztJQUM3Qiw4Q0FBb0I7O0lBRXBCLDRDQUFrQjs7SUFDbEIsNkNBQXdCOztJQUV4Qiw2Q0FBa0M7Ozs7O0lBRWxDLHlDQUFtRDs7Ozs7SUFDbkQsNkNBQXVEOzs7OztJQUN2RCwrQ0FBOEI7O0lBRzlCLHNDQUEyRTs7SUFFM0Usb0NBQXFFOztJQUVyRSx5Q0FBb0Y7O0lBRXBGLG9DQUEwQzs7SUFDMUMscUNBQTRDOztJQUM1QyxtQ0FBd0M7Ozs7O0lBRTVCLHdDQUE2QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIEhvc3RMaXN0ZW5lciwgVmlld0NoaWxkLCBPbkluaXQsXG4gICAgSG9zdEJpbmRpbmcsIERvQ2hlY2ssIEVsZW1lbnRSZWYsIEFmdGVyVmlld0luaXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTYWZlUmVzb3VyY2VVcmwgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcblxuaW1wb3J0IHsgTmd4R2FsbGVyeVByZXZpZXdDb21wb25lbnQgfSBmcm9tICcuL25neC1nYWxsZXJ5LXByZXZpZXcuY29tcG9uZW50JztcbmltcG9ydCB7IE5neEdhbGxlcnlJbWFnZUNvbXBvbmVudCB9IGZyb20gJy4vbmd4LWdhbGxlcnktaW1hZ2UuY29tcG9uZW50JztcbmltcG9ydCB7IE5neEdhbGxlcnlUaHVtYm5haWxzQ29tcG9uZW50IH0gZnJvbSAnLi9uZ3gtZ2FsbGVyeS10aHVtYm5haWxzLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBOZ3hHYWxsZXJ5SGVscGVyU2VydmljZSB9IGZyb20gJy4vbmd4LWdhbGxlcnktaGVscGVyLnNlcnZpY2UnO1xuXG5pbXBvcnQgeyBOZ3hHYWxsZXJ5T3B0aW9ucyB9IGZyb20gJy4vbmd4LWdhbGxlcnktb3B0aW9ucy5tb2RlbCc7XG5pbXBvcnQgeyBOZ3hHYWxsZXJ5SW1hZ2UgfSBmcm9tICcuL25neC1nYWxsZXJ5LWltYWdlLm1vZGVsJztcbmltcG9ydCB7IE5neEdhbGxlcnlMYXlvdXQgfSBmcm9tICcuL25neC1nYWxsZXJ5LWxheW91dC5tb2RlbCc7XG5pbXBvcnQgeyBOZ3hHYWxsZXJ5T3JkZXJlZEltYWdlIH0gZnJvbSAnLi9uZ3gtZ2FsbGVyeS1vcmRlcmVkLWltYWdlLm1vZGVsJztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICduZ3gtZ2FsbGVyeScsXG4gICAgdGVtcGxhdGU6IGBcbiAgICA8ZGl2IGNsYXNzPVwibmd4LWdhbGxlcnktbGF5b3V0IHt7Y3VycmVudE9wdGlvbnM/LmxheW91dH19XCI+XG4gICAgICAgIDxuZ3gtZ2FsbGVyeS1pbWFnZSAqbmdJZj1cImN1cnJlbnRPcHRpb25zPy5pbWFnZVwiIFtzdHlsZS5oZWlnaHRdPVwiZ2V0SW1hZ2VIZWlnaHQoKVwiIFtpbWFnZXNdPVwibWVkaXVtSW1hZ2VzXCIgW2NsaWNrYWJsZV09XCJjdXJyZW50T3B0aW9ucz8ucHJldmlld1wiIFtzZWxlY3RlZEluZGV4XT1cInNlbGVjdGVkSW5kZXhcIiBbYXJyb3dzXT1cImN1cnJlbnRPcHRpb25zPy5pbWFnZUFycm93c1wiIFthcnJvd3NBdXRvSGlkZV09XCJjdXJyZW50T3B0aW9ucz8uaW1hZ2VBcnJvd3NBdXRvSGlkZVwiIFthcnJvd1ByZXZJY29uXT1cImN1cnJlbnRPcHRpb25zPy5hcnJvd1ByZXZJY29uXCIgW2Fycm93TmV4dEljb25dPVwiY3VycmVudE9wdGlvbnM/LmFycm93TmV4dEljb25cIiBbc3dpcGVdPVwiY3VycmVudE9wdGlvbnM/LmltYWdlU3dpcGVcIiBbYW5pbWF0aW9uXT1cImN1cnJlbnRPcHRpb25zPy5pbWFnZUFuaW1hdGlvblwiIFtzaXplXT1cImN1cnJlbnRPcHRpb25zPy5pbWFnZVNpemVcIiBbYXV0b1BsYXldPVwiY3VycmVudE9wdGlvbnM/LmltYWdlQXV0b1BsYXlcIiBbYXV0b1BsYXlJbnRlcnZhbF09XCJjdXJyZW50T3B0aW9ucz8uaW1hZ2VBdXRvUGxheUludGVydmFsXCIgW2F1dG9QbGF5UGF1c2VPbkhvdmVyXT1cImN1cnJlbnRPcHRpb25zPy5pbWFnZUF1dG9QbGF5UGF1c2VPbkhvdmVyXCIgW2luZmluaXR5TW92ZV09XCJjdXJyZW50T3B0aW9ucz8uaW1hZ2VJbmZpbml0eU1vdmVcIiAgW2xhenlMb2FkaW5nXT1cImN1cnJlbnRPcHRpb25zPy5sYXp5TG9hZGluZ1wiIFthY3Rpb25zXT1cImN1cnJlbnRPcHRpb25zPy5pbWFnZUFjdGlvbnNcIiBbZGVzY3JpcHRpb25zXT1cImRlc2NyaXB0aW9uc1wiIFtzaG93RGVzY3JpcHRpb25dPVwiY3VycmVudE9wdGlvbnM/LmltYWdlRGVzY3JpcHRpb25cIiBbYnVsbGV0c109XCJjdXJyZW50T3B0aW9ucz8uaW1hZ2VCdWxsZXRzXCIgKG9uQ2xpY2spPVwib3BlblByZXZpZXcoJGV2ZW50KVwiIChvbkFjdGl2ZUNoYW5nZSk9XCJzZWxlY3RGcm9tSW1hZ2UoJGV2ZW50KVwiPjwvbmd4LWdhbGxlcnktaW1hZ2U+XG5cbiAgICAgICAgPG5neC1nYWxsZXJ5LXRodW1ibmFpbHMgKm5nSWY9XCJjdXJyZW50T3B0aW9ucz8udGh1bWJuYWlsc1wiIFtzdHlsZS5tYXJnaW5Ub3BdPVwiZ2V0VGh1bWJuYWlsc01hcmdpblRvcCgpXCIgW3N0eWxlLm1hcmdpbkJvdHRvbV09XCJnZXRUaHVtYm5haWxzTWFyZ2luQm90dG9tKClcIiBbc3R5bGUuaGVpZ2h0XT1cImdldFRodW1ibmFpbHNIZWlnaHQoKVwiIFtpbWFnZXNdPVwic21hbGxJbWFnZXNcIiBbbGlua3NdPVwiY3VycmVudE9wdGlvbnM/LnRodW1ibmFpbHNBc0xpbmtzID8gbGlua3MgOiBbXVwiIFtsYWJlbHNdPVwibGFiZWxzXCIgW2xpbmtUYXJnZXRdPVwiY3VycmVudE9wdGlvbnM/LmxpbmtUYXJnZXRcIiBbc2VsZWN0ZWRJbmRleF09XCJzZWxlY3RlZEluZGV4XCIgW2NvbHVtbnNdPVwiY3VycmVudE9wdGlvbnM/LnRodW1ibmFpbHNDb2x1bW5zXCIgW3Jvd3NdPVwiY3VycmVudE9wdGlvbnM/LnRodW1ibmFpbHNSb3dzXCIgW21hcmdpbl09XCJjdXJyZW50T3B0aW9ucz8udGh1bWJuYWlsTWFyZ2luXCIgW2Fycm93c109XCJjdXJyZW50T3B0aW9ucz8udGh1bWJuYWlsc0Fycm93c1wiIFthcnJvd3NBdXRvSGlkZV09XCJjdXJyZW50T3B0aW9ucz8udGh1bWJuYWlsc0Fycm93c0F1dG9IaWRlXCIgW2Fycm93UHJldkljb25dPVwiY3VycmVudE9wdGlvbnM/LmFycm93UHJldkljb25cIiBbYXJyb3dOZXh0SWNvbl09XCJjdXJyZW50T3B0aW9ucz8uYXJyb3dOZXh0SWNvblwiIFtjbGlja2FibGVdPVwiY3VycmVudE9wdGlvbnM/LmltYWdlIHx8IGN1cnJlbnRPcHRpb25zPy5wcmV2aWV3XCIgW3N3aXBlXT1cImN1cnJlbnRPcHRpb25zPy50aHVtYm5haWxzU3dpcGVcIiBbc2l6ZV09XCJjdXJyZW50T3B0aW9ucz8udGh1bWJuYWlsU2l6ZVwiIFttb3ZlU2l6ZV09XCJjdXJyZW50T3B0aW9ucz8udGh1bWJuYWlsc01vdmVTaXplXCIgW29yZGVyXT1cImN1cnJlbnRPcHRpb25zPy50aHVtYm5haWxzT3JkZXJcIiBbcmVtYWluaW5nQ291bnRdPVwiY3VycmVudE9wdGlvbnM/LnRodW1ibmFpbHNSZW1haW5pbmdDb3VudFwiIFtsYXp5TG9hZGluZ109XCJjdXJyZW50T3B0aW9ucz8ubGF6eUxvYWRpbmdcIiBbYWN0aW9uc109XCJjdXJyZW50T3B0aW9ucz8udGh1bWJuYWlsQWN0aW9uc1wiICAob25BY3RpdmVDaGFuZ2UpPVwic2VsZWN0RnJvbVRodW1ibmFpbHMoJGV2ZW50KVwiPjwvbmd4LWdhbGxlcnktdGh1bWJuYWlscz5cblxuICAgICAgICA8bmd4LWdhbGxlcnktcHJldmlldyBbaW1hZ2VzXT1cImJpZ0ltYWdlc1wiIFtkZXNjcmlwdGlvbnNdPVwiZGVzY3JpcHRpb25zXCIgW2Fycm93UHJldkljb25dPVwiY3VycmVudE9wdGlvbnM/LnByZXZpZXdQcmV2SWNvbk9wdGlvblwiIFthcnJvd05leHRJY29uXT1cImN1cnJlbnRPcHRpb25zPy5wcmV2aWV3TmV4dEljb25PcHRpb25cIiBbY2xvc2VJY29uXT1cImN1cnJlbnRPcHRpb25zPy5jbG9zZUljb25cIiBbZnVsbHNjcmVlbkljb25dPVwiY3VycmVudE9wdGlvbnM/LmZ1bGxzY3JlZW5JY29uXCIgW3NwaW5uZXJJY29uXT1cImN1cnJlbnRPcHRpb25zPy5zcGlubmVySWNvblwiIFthcnJvd3NdPVwiY3VycmVudE9wdGlvbnM/LnByZXZpZXdBcnJvd3NcIiBbYXJyb3dzQXV0b0hpZGVdPVwiY3VycmVudE9wdGlvbnM/LnByZXZpZXdBcnJvd3NBdXRvSGlkZVwiIFtzd2lwZV09XCJjdXJyZW50T3B0aW9ucz8ucHJldmlld1N3aXBlXCIgW2Z1bGxzY3JlZW5dPVwiY3VycmVudE9wdGlvbnM/LnByZXZpZXdGdWxsc2NyZWVuXCIgW2ZvcmNlRnVsbHNjcmVlbl09XCJjdXJyZW50T3B0aW9ucz8ucHJldmlld0ZvcmNlRnVsbHNjcmVlblwiIFtjbG9zZU9uQ2xpY2tdPVwiY3VycmVudE9wdGlvbnM/LnByZXZpZXdDbG9zZU9uQ2xpY2tcIiBbY2xvc2VPbkVzY109XCJjdXJyZW50T3B0aW9ucz8ucHJldmlld0Nsb3NlT25Fc2NcIiBba2V5Ym9hcmROYXZpZ2F0aW9uXT1cImN1cnJlbnRPcHRpb25zPy5wcmV2aWV3S2V5Ym9hcmROYXZpZ2F0aW9uXCIgW2FuaW1hdGlvbl09XCJjdXJyZW50T3B0aW9ucz8ucHJldmlld0FuaW1hdGlvblwiIFthdXRvUGxheV09XCJjdXJyZW50T3B0aW9ucz8ucHJldmlld0F1dG9QbGF5XCIgW2F1dG9QbGF5SW50ZXJ2YWxdPVwiY3VycmVudE9wdGlvbnM/LnByZXZpZXdBdXRvUGxheUludGVydmFsXCIgW2F1dG9QbGF5UGF1c2VPbkhvdmVyXT1cImN1cnJlbnRPcHRpb25zPy5wcmV2aWV3QXV0b1BsYXlQYXVzZU9uSG92ZXJcIiBbaW5maW5pdHlNb3ZlXT1cImN1cnJlbnRPcHRpb25zPy5pbWFnZUluZmluaXR5TW92ZVwiIFt6b29tXT1cImN1cnJlbnRPcHRpb25zPy5wcmV2aWV3Wm9vbVwiIFt6b29tU3RlcF09XCJjdXJyZW50T3B0aW9ucz8ucHJldmlld1pvb21TdGVwXCIgW3pvb21NYXhdPVwiY3VycmVudE9wdGlvbnM/LnByZXZpZXdab29tTWF4XCIgW3pvb21NaW5dPVwiY3VycmVudE9wdGlvbnM/LnByZXZpZXdab29tTWluXCIgW3pvb21Jbkljb25dPVwiY3VycmVudE9wdGlvbnM/Lnpvb21Jbkljb25cIiBbem9vbU91dEljb25dPVwiY3VycmVudE9wdGlvbnM/Lnpvb21PdXRJY29uXCIgW2FjdGlvbnNdPVwiY3VycmVudE9wdGlvbnM/LmFjdGlvbnNcIiBbcm90YXRlXT1cImN1cnJlbnRPcHRpb25zPy5wcmV2aWV3Um90YXRlXCIgW3JvdGF0ZUxlZnRJY29uXT1cImN1cnJlbnRPcHRpb25zPy5yb3RhdGVMZWZ0SWNvblwiIFtyb3RhdGVSaWdodEljb25dPVwiY3VycmVudE9wdGlvbnM/LnJvdGF0ZVJpZ2h0SWNvblwiIFtkb3dubG9hZF09XCJjdXJyZW50T3B0aW9ucz8ucHJldmlld0Rvd25sb2FkXCIgW2Rvd25sb2FkSWNvbl09XCJjdXJyZW50T3B0aW9ucz8uZG93bmxvYWRJY29uXCIgW2J1bGxldHNdPVwiY3VycmVudE9wdGlvbnM/LnByZXZpZXdCdWxsZXRzXCIgKG9uQ2xvc2UpPVwib25QcmV2aWV3Q2xvc2UoKVwiIChvbk9wZW4pPVwib25QcmV2aWV3T3BlbigpXCIgKG9uQWN0aXZlQ2hhbmdlKT1cInByZXZpZXdTZWxlY3QoJGV2ZW50KVwiIFtjbGFzcy5uZ3gtZ2FsbGVyeS1hY3RpdmVdPVwicHJldmlld0VuYWJsZWRcIiBbc2hvd0Rlc2NyaXB0aW9uXT1cImN1cnJlbnRPcHRpb25zPy5pbWFnZURlc2NyaXB0aW9uXCI+PC9uZ3gtZ2FsbGVyeS1wcmV2aWV3PlxuICAgIDwvZGl2PlxuICAgIGAsXG4gICAgc3R5bGVVcmxzOiBbJy4vbmd4LWdhbGxlcnkuY29tcG9uZW50LnNjc3MnXSxcbiAgICBwcm92aWRlcnM6IFtOZ3hHYWxsZXJ5SGVscGVyU2VydmljZV1cbn0pXG5leHBvcnQgY2xhc3MgTmd4R2FsbGVyeUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgRG9DaGVjaywgQWZ0ZXJWaWV3SW5pdCAgIHtcbiAgICBASW5wdXQoKSBvcHRpb25zOiBOZ3hHYWxsZXJ5T3B0aW9uc1tdO1xuICAgIEBJbnB1dCgpIGltYWdlczogTmd4R2FsbGVyeUltYWdlW107XG5cbiAgICBAT3V0cHV0KCkgaW1hZ2VzUmVhZHkgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gICAgQE91dHB1dCgpIGNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8eyBpbmRleDogbnVtYmVyOyBpbWFnZTogTmd4R2FsbGVyeUltYWdlOyB9PigpO1xuICAgIEBPdXRwdXQoKSBwcmV2aWV3T3BlbiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgICBAT3V0cHV0KCkgcHJldmlld0Nsb3NlID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICAgIEBPdXRwdXQoKSBwcmV2aWV3Q2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjx7IGluZGV4OiBudW1iZXI7IGltYWdlOiBOZ3hHYWxsZXJ5SW1hZ2U7IH0+KCk7XG5cbiAgICBASW5wdXQoKSB3aWR0aE9wdGlvbjogc3RyaW5nO1xuICAgIEBJbnB1dCgpIGhlaWdodE9wdGlvbjogc3RyaW5nO1xuICAgIEBJbnB1dCgpIHRodW1ibmFpbHNDb2x1bW5zT3B0aW9uOiBudW1iZXI7XG4gICAgQElucHV0KCkgc3RhcnRJbmRleE9wdGlvbjogbnVtYmVyO1xuICAgIEBJbnB1dCgpIGltYWdlRGVzY3JpcHRpb25PcHRpb246IGJvb2xlYW47XG4gICAgQElucHV0KCkgaW1hZ2VBcnJvd3NPcHRpb246IGJvb2xlYW47XG4gICAgQElucHV0KCkgdGh1bWJuYWlsc0Fycm93c09wdGlvbjogYm9vbGVhbjtcbiAgICBASW5wdXQoKSBwcmV2aWV3QXJyb3dzT3B0aW9uOiBib29sZWFuO1xuICAgIEBJbnB1dCgpIGltYWdlU3dpcGVPcHRpb246IGJvb2xlYW47XG4gICAgQElucHV0KCkgdGh1bWJuYWlsc1N3aXBlT3B0aW9uOiBib29sZWFuO1xuICAgIEBJbnB1dCgpIHByZXZpZXdTd2lwZU9wdGlvbjogYm9vbGVhbjtcbiAgICBASW5wdXQoKSBpbWFnZUF1dG9QbGF5T3B0aW9uOiBib29sZWFuO1xuICAgIEBJbnB1dCgpIGltYWdlQXV0b1BsYXlJbnRlcnZhbE9wdGlvbjogbnVtYmVyO1xuICAgIEBJbnB1dCgpIGltYWdlQXV0b1BsYXlQYXVzZU9uSG92ZXJPcHRpb246IGJvb2xlYW47XG4gICAgQElucHV0KCkgaW1hZ2VJbmZpbml0eU1vdmVPcHRpb246IGJvb2xlYW47XG4gICAgQElucHV0KCkgcHJldmlld09wdGlvbjogYm9vbGVhbjtcbiAgICBASW5wdXQoKSBhcnJvd1ByZXZJY29uT3B0aW9uOiBzdHJpbmc7XG4gICAgQElucHV0KCkgYXJyb3dOZXh0SWNvbk9wdGlvbjogc3RyaW5nO1xuICAgIEBJbnB1dCgpIHByZXZpZXdQcmV2SWNvbk9wdGlvbjogc3RyaW5nO1xuICAgIEBJbnB1dCgpIHByZXZpZXdOZXh0SWNvbk9wdGlvbjogc3RyaW5nO1xuICAgIEBJbnB1dCgpIHRodW1ibmFpbHNPcHRpb246IGJvb2xlYW47XG5cbiAgc21hbGxJbWFnZXM6IHN0cmluZ1tdIHwgU2FmZVJlc291cmNlVXJsW107XG4gICAgbWVkaXVtSW1hZ2VzOiBOZ3hHYWxsZXJ5T3JkZXJlZEltYWdlW107XG4gICAgYmlnSW1hZ2VzOiBzdHJpbmdbXSB8IFNhZmVSZXNvdXJjZVVybFtdO1xuICAgIGRlc2NyaXB0aW9uczogc3RyaW5nW107XG4gICAgbGlua3M6IHN0cmluZ1tdO1xuICAgIGxhYmVsczogc3RyaW5nW107XG5cbiAgICBvbGRJbWFnZXM6IE5neEdhbGxlcnlJbWFnZVtdO1xuICAgIG9sZEltYWdlc0xlbmd0aCA9IDA7XG5cbiAgICBzZWxlY3RlZEluZGV4ID0gMDtcbiAgICBwcmV2aWV3RW5hYmxlZDogYm9vbGVhbjtcblxuICAgIGN1cnJlbnRPcHRpb25zOiBOZ3hHYWxsZXJ5T3B0aW9ucztcblxuICAgIHByaXZhdGUgYnJlYWtwb2ludDogbnVtYmVyIHwgdW5kZWZpbmVkID0gdW5kZWZpbmVkO1xuICAgIHByaXZhdGUgcHJldkJyZWFrcG9pbnQ6IG51bWJlciB8IHVuZGVmaW5lZCA9IHVuZGVmaW5lZDtcbiAgICBwcml2YXRlIGZ1bGxXaWR0aFRpbWVvdXQ6IGFueTtcblxuICAgIC8vIEB0cy1pZ25vcmVcbiAgICBAVmlld0NoaWxkKE5neEdhbGxlcnlQcmV2aWV3Q29tcG9uZW50KSBwcmV2aWV3OiBOZ3hHYWxsZXJ5UHJldmlld0NvbXBvbmVudDtcbiAgICAvLyBAdHMtaWdub3JlXG4gICAgQFZpZXdDaGlsZChOZ3hHYWxsZXJ5SW1hZ2VDb21wb25lbnQpIGltYWdlOiBOZ3hHYWxsZXJ5SW1hZ2VDb21wb25lbnQ7XG4gICAgLy8gQHRzLWlnbm9yZVxuICAgIEBWaWV3Q2hpbGQoTmd4R2FsbGVyeVRodW1ibmFpbHNDb21wb25lbnQpIHRodWJtbmFpbHM6IE5neEdhbGxlcnlUaHVtYm5haWxzQ29tcG9uZW50O1xuXG4gICAgQEhvc3RCaW5kaW5nKCdzdHlsZS53aWR0aCcpIHdpZHRoOiBzdHJpbmc7XG4gICAgQEhvc3RCaW5kaW5nKCdzdHlsZS5oZWlnaHQnKSBoZWlnaHQ6IHN0cmluZztcbiAgICBASG9zdEJpbmRpbmcoJ3N0eWxlLmxlZnQnKSBsZWZ0OiBzdHJpbmc7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIG15RWxlbWVudDogRWxlbWVudFJlZikge31cblxuICAgIG5nT25Jbml0KCkge1xuICAgICAgY29uc3QgdGVtcE9wdGlvbnMgPSBbe1xuICAgICAgICB3aWR0aDogdGhpcy53aWR0aE9wdGlvbixcbiAgICAgICAgaGVpZ2h0OiB0aGlzLmhlaWdodE9wdGlvbixcbiAgICAgICAgdGh1bWJuYWlsczogdGhpcy50aHVtYm5haWxzT3B0aW9uLFxuICAgICAgICB0aHVtYm5haWxzQ29sdW1uczogdGhpcy50aHVtYm5haWxzQ29sdW1uc09wdGlvbixcbiAgICAgICAgc3RhcnRJbmRleDogdGhpcy5zdGFydEluZGV4T3B0aW9uLFxuICAgICAgICBpbWFnZURlc2NyaXB0aW9uOiB0aGlzLmltYWdlRGVzY3JpcHRpb25PcHRpb24sXG4gICAgICAgIGltYWdlQXJyb3dzOiB0aGlzLmltYWdlQXJyb3dzT3B0aW9uLFxuICAgICAgICB0aHVtYm5haWxzQXJyb3dzOiB0aGlzLnRodW1ibmFpbHNBcnJvd3NPcHRpb24sXG4gICAgICAgIHByZXZpZXdBcnJvd3M6IHRoaXMucHJldmlld0Fycm93c09wdGlvbixcbiAgICAgICAgaW1hZ2VTd2lwZTogdGhpcy5pbWFnZVN3aXBlT3B0aW9uLFxuICAgICAgICB0aHVtYm5haWxzU3dpcGU6IHRoaXMudGh1bWJuYWlsc1N3aXBlT3B0aW9uLFxuICAgICAgICBwcmV2aWV3U3dpcGU6IHRoaXMucHJldmlld1N3aXBlT3B0aW9uLFxuICAgICAgICBpbWFnZUF1dG9QbGF5OiB0aGlzLmltYWdlQXV0b1BsYXlPcHRpb24sXG4gICAgICAgIGltYWdlQXV0b1BsYXlJbnRlcnZhbDogdGhpcy5pbWFnZUF1dG9QbGF5SW50ZXJ2YWxPcHRpb24sXG4gICAgICAgIGltYWdlQXV0b1BsYXlQYXVzZU9uSG92ZXI6IHRoaXMuaW1hZ2VBdXRvUGxheVBhdXNlT25Ib3Zlck9wdGlvbixcbiAgICAgICAgaW1hZ2VJbmZpbml0eU1vdmU6IHRoaXMuaW1hZ2VJbmZpbml0eU1vdmVPcHRpb24sXG4gICAgICAgIHByZXZpZXc6IHRoaXMucHJldmlld09wdGlvbixcbiAgICAgICAgYXJyb3dQcmV2SWNvbjogdGhpcy5hcnJvd1ByZXZJY29uT3B0aW9uLFxuICAgICAgICBhcnJvd05leHRJY29uOiB0aGlzLmFycm93TmV4dEljb25PcHRpb24sXG4gICAgICAgIHByZXZpZXdQcmV2SWNvbk9wdGlvbjogdGhpcy5wcmV2aWV3UHJldkljb25PcHRpb24sXG4gICAgICAgIHByZXZpZXdOZXh0SWNvbk9wdGlvbjogdGhpcy5wcmV2aWV3TmV4dEljb25PcHRpb25cbiAgICAgIH1dO1xuXG4gICAgICAgIC8vIHRoaXMub3B0aW9ucyA9IHRoaXMub3B0aW9ucy5tYXAoKG9wdCkgPT4gbmV3IE5neEdhbGxlcnlPcHRpb25zKG9wdCkpO1xuICAgICAgICB0aGlzLm9wdGlvbnMgPSB0ZW1wT3B0aW9ucy5tYXAoKG9wdCkgPT4gbmV3IE5neEdhbGxlcnlPcHRpb25zKG9wdCkpO1xuXG4gICAgICAgIHRoaXMuc29ydE9wdGlvbnMoKTtcbiAgICAgICAgdGhpcy5zZXRCcmVha3BvaW50KCk7XG4gICAgICAgIHRoaXMuc2V0T3B0aW9ucygpO1xuICAgICAgICB0aGlzLmNoZWNrRnVsbFdpZHRoKCk7XG4gICAgICAgIGlmICh0aGlzLmN1cnJlbnRPcHRpb25zKSB7XG4gICAgICAgICAgICB0aGlzLnNlbGVjdGVkSW5kZXggPSA8bnVtYmVyPnRoaXMuY3VycmVudE9wdGlvbnMuc3RhcnRJbmRleDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG5nRG9DaGVjaygpOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMuaW1hZ2VzICE9PSB1bmRlZmluZWQgJiYgKHRoaXMuaW1hZ2VzLmxlbmd0aCAhPT0gdGhpcy5vbGRJbWFnZXNMZW5ndGgpXG4gICAgICAgICAgICB8fCAodGhpcy5pbWFnZXMgIT09IHRoaXMub2xkSW1hZ2VzKSkge1xuICAgICAgICAgICAgdGhpcy5vbGRJbWFnZXNMZW5ndGggPSB0aGlzLmltYWdlcy5sZW5ndGg7XG4gICAgICAgICAgICB0aGlzLm9sZEltYWdlcyA9IHRoaXMuaW1hZ2VzO1xuICAgICAgICAgICAgdGhpcy5zZXRPcHRpb25zKCk7XG4gICAgICAgICAgICB0aGlzLnNldEltYWdlcygpO1xuXG4gICAgICAgICAgICBpZiAodGhpcy5pbWFnZXMgJiYgdGhpcy5pbWFnZXMubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5pbWFnZXNSZWFkeS5lbWl0KCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICh0aGlzLmltYWdlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5pbWFnZS5yZXNldCg8bnVtYmVyPnRoaXMuY3VycmVudE9wdGlvbnMuc3RhcnRJbmRleCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICh0aGlzLmN1cnJlbnRPcHRpb25zLnRodW1ibmFpbHNBdXRvSGlkZSAmJiB0aGlzLmN1cnJlbnRPcHRpb25zLnRodW1ibmFpbHNcbiAgICAgICAgICAgICAgICAmJiB0aGlzLmltYWdlcy5sZW5ndGggPD0gMSkge1xuICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudE9wdGlvbnMudGh1bWJuYWlscyA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudE9wdGlvbnMuaW1hZ2VBcnJvd3MgPSBmYWxzZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpcy5yZXNldFRodW1ibmFpbHMoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5jaGVja0Z1bGxXaWR0aCgpO1xuICAgIH1cblxuICAgIEBIb3N0TGlzdGVuZXIoJ3dpbmRvdzpyZXNpemUnKSBvblJlc2l6ZSgpIHtcbiAgICAgICAgdGhpcy5zZXRCcmVha3BvaW50KCk7XG5cbiAgICAgICAgaWYgKHRoaXMucHJldkJyZWFrcG9pbnQgIT09IHRoaXMuYnJlYWtwb2ludCkge1xuICAgICAgICAgICAgdGhpcy5zZXRPcHRpb25zKCk7XG4gICAgICAgICAgICB0aGlzLnJlc2V0VGh1bWJuYWlscygpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuY3VycmVudE9wdGlvbnMgJiYgdGhpcy5jdXJyZW50T3B0aW9ucy5mdWxsV2lkdGgpIHtcblxuICAgICAgICAgICAgaWYgKHRoaXMuZnVsbFdpZHRoVGltZW91dCkge1xuICAgICAgICAgICAgICAgIGNsZWFyVGltZW91dCh0aGlzLmZ1bGxXaWR0aFRpbWVvdXQpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGlzLmZ1bGxXaWR0aFRpbWVvdXQgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmNoZWNrRnVsbFdpZHRoKCk7XG4gICAgICAgICAgICB9LCAyMDApO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZ2V0SW1hZ2VIZWlnaHQoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuICh0aGlzLmN1cnJlbnRPcHRpb25zICYmIHRoaXMuY3VycmVudE9wdGlvbnMudGh1bWJuYWlscykgP1xuICAgICAgICAgICAgdGhpcy5jdXJyZW50T3B0aW9ucy5pbWFnZVBlcmNlbnQgKyAnJScgOiAnMTAwJSc7XG4gICAgfVxuXG4gICAgZ2V0VGh1bWJuYWlsc0hlaWdodCgpOiBzdHJpbmcge1xuICAgICAgICBpZiAodGhpcy5jdXJyZW50T3B0aW9ucyAmJiB0aGlzLmN1cnJlbnRPcHRpb25zLmltYWdlKSB7XG4gICAgICAgICAgICByZXR1cm4gJ2NhbGMoJyArIHRoaXMuY3VycmVudE9wdGlvbnMudGh1bWJuYWlsc1BlcmNlbnQgKyAnJSAtICdcbiAgICAgICAgICAgICsgdGhpcy5jdXJyZW50T3B0aW9ucy50aHVtYm5haWxzTWFyZ2luICsgJ3B4KSc7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gJzEwMCUnO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZ2V0VGh1bWJuYWlsc01hcmdpblRvcCgpOiBzdHJpbmcge1xuICAgICAgICBpZiAodGhpcy5jdXJyZW50T3B0aW9ucyAmJiB0aGlzLmN1cnJlbnRPcHRpb25zLmxheW91dCA9PT0gTmd4R2FsbGVyeUxheW91dC5UaHVtYm5haWxzQm90dG9tKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5jdXJyZW50T3B0aW9ucy50aHVtYm5haWxzTWFyZ2luICsgJ3B4JztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiAnMHB4JztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGdldFRodW1ibmFpbHNNYXJnaW5Cb3R0b20oKTogc3RyaW5nIHtcbiAgICAgICAgaWYgKHRoaXMuY3VycmVudE9wdGlvbnMgJiYgdGhpcy5jdXJyZW50T3B0aW9ucy5sYXlvdXQgPT09IE5neEdhbGxlcnlMYXlvdXQuVGh1bWJuYWlsc1RvcCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuY3VycmVudE9wdGlvbnMudGh1bWJuYWlsc01hcmdpbiArICdweCc7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gJzBweCc7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBvcGVuUHJldmlldyhpbmRleDogbnVtYmVyKTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLmN1cnJlbnRPcHRpb25zLnByZXZpZXdDdXN0b20pIHtcbiAgICAgICAgICAgIHRoaXMuY3VycmVudE9wdGlvbnMucHJldmlld0N1c3RvbShpbmRleCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnByZXZpZXdFbmFibGVkID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMucHJldmlldy5vcGVuKGluZGV4KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG9uUHJldmlld09wZW4oKTogdm9pZCB7XG4gICAgICAgIHRoaXMucHJldmlld09wZW4uZW1pdCgpO1xuXG4gICAgICAgIGlmICh0aGlzLmltYWdlICYmIHRoaXMuaW1hZ2UuYXV0b1BsYXkpIHtcbiAgICAgICAgICAgIHRoaXMuaW1hZ2Uuc3RvcEF1dG9QbGF5KCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBvblByZXZpZXdDbG9zZSgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5wcmV2aWV3RW5hYmxlZCA9IGZhbHNlO1xuICAgICAgICB0aGlzLnByZXZpZXdDbG9zZS5lbWl0KCk7XG5cbiAgICAgICAgaWYgKHRoaXMuaW1hZ2UgJiYgdGhpcy5pbWFnZS5hdXRvUGxheSkge1xuICAgICAgICAgICAgdGhpcy5pbWFnZS5zdGFydEF1dG9QbGF5KCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzZWxlY3RGcm9tSW1hZ2UoaW5kZXg6IG51bWJlcikge1xuICAgICAgICB0aGlzLnNlbGVjdChpbmRleCk7XG4gICAgfVxuXG4gICAgc2VsZWN0RnJvbVRodW1ibmFpbHMoaW5kZXg6IG51bWJlcikge1xuICAgICAgICB0aGlzLnNlbGVjdChpbmRleCk7XG5cbiAgICAgICAgaWYgKHRoaXMuY3VycmVudE9wdGlvbnMgJiYgdGhpcy5jdXJyZW50T3B0aW9ucy50aHVtYm5haWxzICYmIHRoaXMuY3VycmVudE9wdGlvbnMucHJldmlld1xuICAgICAgICAgICAgJiYgKCF0aGlzLmN1cnJlbnRPcHRpb25zLmltYWdlIHx8IHRoaXMuY3VycmVudE9wdGlvbnMudGh1bWJuYWlsc1JlbWFpbmluZ0NvdW50KSkge1xuICAgICAgICAgICAgdGhpcy5vcGVuUHJldmlldyh0aGlzLnNlbGVjdGVkSW5kZXgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgc2hvdyhpbmRleDogbnVtYmVyKTogdm9pZCB7XG4gICAgICAgIHRoaXMuc2VsZWN0KGluZGV4KTtcbiAgICB9XG5cbiAgICBzaG93TmV4dCgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5pbWFnZS5zaG93TmV4dCgpO1xuICAgIH1cblxuICAgIHNob3dQcmV2KCk6IHZvaWQge1xuICAgICAgICB0aGlzLmltYWdlLnNob3dQcmV2KCk7XG4gICAgfVxuXG4gICAgY2FuU2hvd05leHQoKTogYm9vbGVhbiB7XG4gICAgICAgIGlmICh0aGlzLmltYWdlcyAmJiB0aGlzLmN1cnJlbnRPcHRpb25zKSB7XG4gICAgICAgICAgICByZXR1cm4gKHRoaXMuY3VycmVudE9wdGlvbnMuaW1hZ2VJbmZpbml0eU1vdmUgfHwgdGhpcy5zZWxlY3RlZEluZGV4IDwgdGhpcy5pbWFnZXMubGVuZ3RoIC0gMSlcbiAgICAgICAgICAgICAgICA/IHRydWUgOiBmYWxzZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNhblNob3dQcmV2KCk6IGJvb2xlYW4ge1xuICAgICAgICBpZiAodGhpcy5pbWFnZXMgJiYgdGhpcy5jdXJyZW50T3B0aW9ucykge1xuICAgICAgICAgICAgcmV0dXJuICh0aGlzLmN1cnJlbnRPcHRpb25zLmltYWdlSW5maW5pdHlNb3ZlIHx8IHRoaXMuc2VsZWN0ZWRJbmRleCA+IDApID8gdHJ1ZSA6IGZhbHNlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJldmlld1NlbGVjdChpbmRleDogbnVtYmVyKSB7XG4gICAgICAgIHRoaXMucHJldmlld0NoYW5nZS5lbWl0KHtpbmRleCwgaW1hZ2U6IHRoaXMuaW1hZ2VzW2luZGV4XX0pO1xuICAgIH1cblxuICAgIG1vdmVUaHVtYm5haWxzUmlnaHQoKSB7XG4gICAgICAgIHRoaXMudGh1Ym1uYWlscy5tb3ZlUmlnaHQoKTtcbiAgICB9XG5cbiAgICBtb3ZlVGh1bWJuYWlsc0xlZnQoKSB7XG4gICAgICAgIHRoaXMudGh1Ym1uYWlscy5tb3ZlTGVmdCgpO1xuICAgIH1cblxuICAgIGNhbk1vdmVUaHVtYm5haWxzUmlnaHQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnRodWJtbmFpbHMuY2FuTW92ZVJpZ2h0KCk7XG4gICAgfVxuXG4gICAgY2FuTW92ZVRodW1ibmFpbHNMZWZ0KCkge1xuICAgICAgICByZXR1cm4gdGhpcy50aHVibW5haWxzLmNhbk1vdmVMZWZ0KCk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSByZXNldFRodW1ibmFpbHMoKSB7XG4gICAgICAgIGlmICh0aGlzLnRodWJtbmFpbHMpIHtcbiAgICAgICAgICAgIHRoaXMudGh1Ym1uYWlscy5yZXNldCg8bnVtYmVyPnRoaXMuY3VycmVudE9wdGlvbnMuc3RhcnRJbmRleCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIHNlbGVjdChpbmRleDogbnVtYmVyKSB7XG4gICAgICAgIHRoaXMuc2VsZWN0ZWRJbmRleCA9IGluZGV4O1xuXG4gICAgICAgIHRoaXMuY2hhbmdlLmVtaXQoe1xuICAgICAgICAgICAgaW5kZXgsXG4gICAgICAgICAgICBpbWFnZTogdGhpcy5pbWFnZXNbaW5kZXhdXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHByaXZhdGUgY2hlY2tGdWxsV2lkdGgoKTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLmN1cnJlbnRPcHRpb25zICYmIHRoaXMuY3VycmVudE9wdGlvbnMuZnVsbFdpZHRoKSB7XG4gICAgICAgICAgICB0aGlzLndpZHRoID0gZG9jdW1lbnQuYm9keS5jbGllbnRXaWR0aCArICdweCc7XG4gICAgICAgICAgICB0aGlzLmxlZnQgPSAoLShkb2N1bWVudC5ib2R5LmNsaWVudFdpZHRoIC1cbiAgICAgICAgICAgICAgICB0aGlzLm15RWxlbWVudC5uYXRpdmVFbGVtZW50LnBhcmVudE5vZGUuaW5uZXJXaWR0aCkgLyAyKSArICdweCc7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIHNldEltYWdlcygpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5zbWFsbEltYWdlcyA9IHRoaXMuaW1hZ2VzLm1hcCgoaW1nKSA9PiA8c3RyaW5nPmltZy5zbWFsbCk7XG4gICAgICAgIHRoaXMubWVkaXVtSW1hZ2VzID0gdGhpcy5pbWFnZXMubWFwKChpbWcsIGkpID0+IG5ldyBOZ3hHYWxsZXJ5T3JkZXJlZEltYWdlKHtcbiAgICAgICAgICAgIHNyYzogaW1nLm1lZGl1bSxcbiAgICAgICAgICAgIGluZGV4OiBpXG4gICAgICAgIH0pKTtcbiAgICAgICAgdGhpcy5iaWdJbWFnZXMgPSB0aGlzLmltYWdlcy5tYXAoKGltZykgPT4gPHN0cmluZz5pbWcuYmlnKTtcbiAgICAgICAgdGhpcy5kZXNjcmlwdGlvbnMgPSB0aGlzLmltYWdlcy5tYXAoKGltZykgPT4gPHN0cmluZz5pbWcuZGVzY3JpcHRpb24pO1xuICAgICAgICB0aGlzLmxpbmtzID0gdGhpcy5pbWFnZXMubWFwKChpbWcpID0+IDxzdHJpbmc+aW1nLnVybCk7XG4gICAgICAgIHRoaXMubGFiZWxzID0gdGhpcy5pbWFnZXMubWFwKChpbWcpID0+IDxzdHJpbmc+aW1nLmxhYmVsKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIHNldEJyZWFrcG9pbnQoKTogdm9pZCB7XG4gICAgICAgIHRoaXMucHJldkJyZWFrcG9pbnQgPSB0aGlzLmJyZWFrcG9pbnQ7XG4gICAgICAgIGxldCBicmVha3BvaW50cztcblxuICAgICAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgIGJyZWFrcG9pbnRzID0gdGhpcy5vcHRpb25zLmZpbHRlcigob3B0KSA9PiBvcHQuYnJlYWtwb2ludCA+PSB3aW5kb3cuaW5uZXJXaWR0aClcbiAgICAgICAgICAgICAgICAubWFwKChvcHQpID0+IG9wdC5icmVha3BvaW50KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChicmVha3BvaW50cyAmJiBicmVha3BvaW50cy5sZW5ndGgpIHtcbiAgICAgICAgICAgIHRoaXMuYnJlYWtwb2ludCA9IGJyZWFrcG9pbnRzLnBvcCgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5icmVha3BvaW50ID0gdW5kZWZpbmVkO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBzb3J0T3B0aW9ucygpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5vcHRpb25zID0gW1xuICAgICAgICAgICAgLi4udGhpcy5vcHRpb25zLmZpbHRlcigoYSkgPT4gYS5icmVha3BvaW50ID09PSB1bmRlZmluZWQpLFxuICAgICAgICAgICAgLi4udGhpcy5vcHRpb25zXG4gICAgICAgICAgICAgICAgLmZpbHRlcigoYSkgPT4gYS5icmVha3BvaW50ICE9PSB1bmRlZmluZWQpXG4gICAgICAgICAgICAgICAgLnNvcnQoKGEsIGIpID0+IGIuYnJlYWtwb2ludCAtIGEuYnJlYWtwb2ludClcbiAgICAgICAgXTtcbiAgICB9XG5cbiAgICBwcml2YXRlIHNldE9wdGlvbnMoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuY3VycmVudE9wdGlvbnMgPSBuZXcgTmd4R2FsbGVyeU9wdGlvbnMoe30pO1xuXG4gICAgICAgIHRoaXMub3B0aW9uc1xuICAgICAgICAgICAgLmZpbHRlcigob3B0KSA9PiBvcHQuYnJlYWtwb2ludCA9PT0gdW5kZWZpbmVkIHx8IG9wdC5icmVha3BvaW50ID49IHRoaXMuYnJlYWtwb2ludClcbiAgICAgICAgICAgIC5tYXAoKG9wdCkgPT4gdGhpcy5jb21iaW5lT3B0aW9ucyh0aGlzLmN1cnJlbnRPcHRpb25zLCBvcHQpKTtcblxuICAgICAgICB0aGlzLndpZHRoID0gPHN0cmluZz50aGlzLmN1cnJlbnRPcHRpb25zLndpZHRoO1xuICAgICAgICB0aGlzLmhlaWdodCA9IDxzdHJpbmc+dGhpcy5jdXJyZW50T3B0aW9ucy5oZWlnaHQ7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBjb21iaW5lT3B0aW9ucyhmaXJzdDogTmd4R2FsbGVyeU9wdGlvbnMsIHNlY29uZDogTmd4R2FsbGVyeU9wdGlvbnMpIHtcbiAgICAgICAgT2JqZWN0LmtleXMoc2Vjb25kKS5tYXAoKHZhbCkgPT4gZmlyc3RbdmFsXSA9IHNlY29uZFt2YWxdICE9PSB1bmRlZmluZWQgPyBzZWNvbmRbdmFsXSA6IGZpcnN0W3ZhbF0pO1xuICAgIH1cbn1cblxuIl19