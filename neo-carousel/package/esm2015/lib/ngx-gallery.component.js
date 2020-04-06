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

        <ngx-gallery-preview 
        [images]="bigImages" 
        [descriptions]="descriptions" 
        [arrowPrevIcon]="currentOptions?.previewPrevIconOption" 
        [arrowNextIcon]="currentOptions?.previewNextIconOption" 
        [closeIcon]="currentOptions?.closeIcon" 
        [fullscreenIcon]="currentOptions?.fullscreenIcon" 
        [spinnerIcon]="currentOptions?.spinnerIcon" 
        [arrows]="currentOptions?.previewArrows" 
        [arrowsAutoHide]="currentOptions?.previewArrowsAutoHide" 
        [swipe]="currentOptions?.previewSwipe" 
        [fullscreen]="currentOptions?.previewFullscreen" 
        [forceFullscreen]="currentOptions?.previewForceFullscreen" 
        [closeOnClick]="currentOptions?.previewCloseOnClick" 
        [closeOnEsc]="currentOptions?.previewCloseOnEsc" 
        [keyboardNavigation]="currentOptions?.previewKeyboardNavigation" 
        [animation]="currentOptions?.previewAnimation" 
        [autoPlay]="currentOptions?.previewAutoPlay" 
        [autoPlayInterval]="currentOptions?.previewAutoPlayInterval" 
        [autoPlayPauseOnHover]="currentOptions?.previewAutoPlayPauseOnHover" 
        [infinityMove]="currentOptions?.imageInfinityMove" 
        [zoom]="currentOptions?.previewZoom" 
        [zoomStep]="currentOptions?.previewZoomStep" 
        [zoomMax]="currentOptions?.previewZoomMax" 
        [zoomMin]="currentOptions?.previewZoomMin" 
        [zoomInIcon]="currentOptions?.zoomInIcon" 
        [zoomOutIcon]="currentOptions?.zoomOutIcon" 
        [actions]="currentOptions?.actions" 
        [rotate]="currentOptions?.previewRotate" 
        [rotateLeftIcon]="currentOptions?.rotateLeftIcon" 
        [rotateRightIcon]="currentOptions?.rotateRightIcon" 
        [download]="currentOptions?.previewDownload" 
        [downloadIcon]="currentOptions?.downloadIcon" 
        [bullets]="currentOptions?.previewBullets" 
        (onClose)="onPreviewClose()" 
        (onOpen)="onPreviewOpen()" 
        (onActiveChange)="previewSelect($event)" 
        [class.ngx-gallery-active]="previewEnabled" 
        [showDescription]="currentOptions?.imageDescription">
        </ngx-gallery-preview>
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWdhbGxlcnkuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmVvLWNhcm91c2VsLyIsInNvdXJjZXMiOlsibGliL25neC1nYWxsZXJ5LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsWUFBWSxFQUFFLFNBQVMsRUFDOUMsV0FBVyxFQUFXLFVBQVUsRUFBaUIsTUFBTSxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUdqRyxPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQUM3RSxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUN6RSxPQUFPLEVBQUUsNkJBQTZCLEVBQUUsTUFBTSxvQ0FBb0MsQ0FBQztBQUNuRixPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUV2RSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUVoRSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUM5RCxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQXVEM0UsTUFBTSxPQUFPLG1CQUFtQjs7OztJQThENUIsWUFBb0IsU0FBcUI7UUFBckIsY0FBUyxHQUFULFNBQVMsQ0FBWTtRQTFEL0IsZ0JBQVcsR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBQ2pDLFdBQU0sR0FBRyxJQUFJLFlBQVksRUFBOEMsQ0FBQztRQUN4RSxnQkFBVyxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFDakMsaUJBQVksR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBQ2xDLGtCQUFhLEdBQUcsSUFBSSxZQUFZLEVBQThDLENBQUM7UUFnQ3pGLG9CQUFlLEdBQUcsQ0FBQyxDQUFDO1FBRXBCLGtCQUFhLEdBQUcsQ0FBQyxDQUFDO1FBS1YsZUFB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Q3RDLHFDQUFtQzs7SUFFbkMsMENBQTJDOztJQUMzQyxxQ0FBa0Y7O0lBQ2xGLDBDQUEyQzs7SUFDM0MsMkNBQTRDOztJQUM1Qyw0Q0FBeUY7O0lBRXpGLDBDQUE2Qjs7SUFDN0IsMkNBQThCOztJQUM5QixzREFBeUM7O0lBQ3pDLCtDQUFrQzs7SUFDbEMscURBQXlDOztJQUN6QyxnREFBb0M7O0lBQ3BDLHFEQUF5Qzs7SUFDekMsa0RBQXNDOztJQUN0QywrQ0FBbUM7O0lBQ25DLG9EQUF3Qzs7SUFDeEMsaURBQXFDOztJQUNyQyxrREFBc0M7O0lBQ3RDLDBEQUE2Qzs7SUFDN0MsOERBQWtEOztJQUNsRCxzREFBMEM7O0lBQzFDLDRDQUFnQzs7SUFDaEMsa0RBQXFDOztJQUNyQyxrREFBcUM7O0lBQ3JDLG9EQUF1Qzs7SUFDdkMsb0RBQXVDOztJQUN2QywrQ0FBbUM7O0lBRXJDLDBDQUEwQzs7SUFDeEMsMkNBQXVDOztJQUN2Qyx3Q0FBd0M7O0lBQ3hDLDJDQUF1Qjs7SUFDdkIsb0NBQWdCOztJQUNoQixxQ0FBaUI7O0lBRWpCLHdDQUE2Qjs7SUFDN0IsOENBQW9COztJQUVwQiw0Q0FBa0I7O0lBQ2xCLDZDQUF3Qjs7SUFFeEIsNkNBQWtDOzs7OztJQUVsQyx5Q0FBbUQ7Ozs7O0lBQ25ELDZDQUF1RDs7Ozs7SUFDdkQsK0NBQThCOztJQUc5QixzQ0FBMkU7O0lBRTNFLG9DQUFxRTs7SUFFckUseUNBQW9GOztJQUVwRixvQ0FBMEM7O0lBQzFDLHFDQUE0Qzs7SUFDNUMsbUNBQXdDOzs7OztJQUU1Qix3Q0FBNkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBIb3N0TGlzdGVuZXIsIFZpZXdDaGlsZCwgT25Jbml0LFxuICAgIEhvc3RCaW5kaW5nLCBEb0NoZWNrLCBFbGVtZW50UmVmLCBBZnRlclZpZXdJbml0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU2FmZVJlc291cmNlVXJsIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XG5cbmltcG9ydCB7IE5neEdhbGxlcnlQcmV2aWV3Q29tcG9uZW50IH0gZnJvbSAnLi9uZ3gtZ2FsbGVyeS1wcmV2aWV3LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBOZ3hHYWxsZXJ5SW1hZ2VDb21wb25lbnQgfSBmcm9tICcuL25neC1nYWxsZXJ5LWltYWdlLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBOZ3hHYWxsZXJ5VGh1bWJuYWlsc0NvbXBvbmVudCB9IGZyb20gJy4vbmd4LWdhbGxlcnktdGh1bWJuYWlscy5jb21wb25lbnQnO1xuaW1wb3J0IHsgTmd4R2FsbGVyeUhlbHBlclNlcnZpY2UgfSBmcm9tICcuL25neC1nYWxsZXJ5LWhlbHBlci5zZXJ2aWNlJztcblxuaW1wb3J0IHsgTmd4R2FsbGVyeU9wdGlvbnMgfSBmcm9tICcuL25neC1nYWxsZXJ5LW9wdGlvbnMubW9kZWwnO1xuaW1wb3J0IHsgTmd4R2FsbGVyeUltYWdlIH0gZnJvbSAnLi9uZ3gtZ2FsbGVyeS1pbWFnZS5tb2RlbCc7XG5pbXBvcnQgeyBOZ3hHYWxsZXJ5TGF5b3V0IH0gZnJvbSAnLi9uZ3gtZ2FsbGVyeS1sYXlvdXQubW9kZWwnO1xuaW1wb3J0IHsgTmd4R2FsbGVyeU9yZGVyZWRJbWFnZSB9IGZyb20gJy4vbmd4LWdhbGxlcnktb3JkZXJlZC1pbWFnZS5tb2RlbCc7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnbmd4LWdhbGxlcnknLFxuICAgIHRlbXBsYXRlOiBgXG4gICAgPGRpdiBjbGFzcz1cIm5neC1nYWxsZXJ5LWxheW91dCB7e2N1cnJlbnRPcHRpb25zPy5sYXlvdXR9fVwiPlxuICAgICAgICA8bmd4LWdhbGxlcnktaW1hZ2UgKm5nSWY9XCJjdXJyZW50T3B0aW9ucz8uaW1hZ2VcIiBbc3R5bGUuaGVpZ2h0XT1cImdldEltYWdlSGVpZ2h0KClcIiBbaW1hZ2VzXT1cIm1lZGl1bUltYWdlc1wiIFtjbGlja2FibGVdPVwiY3VycmVudE9wdGlvbnM/LnByZXZpZXdcIiBbc2VsZWN0ZWRJbmRleF09XCJzZWxlY3RlZEluZGV4XCIgW2Fycm93c109XCJjdXJyZW50T3B0aW9ucz8uaW1hZ2VBcnJvd3NcIiBbYXJyb3dzQXV0b0hpZGVdPVwiY3VycmVudE9wdGlvbnM/LmltYWdlQXJyb3dzQXV0b0hpZGVcIiBbYXJyb3dQcmV2SWNvbl09XCJjdXJyZW50T3B0aW9ucz8uYXJyb3dQcmV2SWNvblwiIFthcnJvd05leHRJY29uXT1cImN1cnJlbnRPcHRpb25zPy5hcnJvd05leHRJY29uXCIgW3N3aXBlXT1cImN1cnJlbnRPcHRpb25zPy5pbWFnZVN3aXBlXCIgW2FuaW1hdGlvbl09XCJjdXJyZW50T3B0aW9ucz8uaW1hZ2VBbmltYXRpb25cIiBbc2l6ZV09XCJjdXJyZW50T3B0aW9ucz8uaW1hZ2VTaXplXCIgW2F1dG9QbGF5XT1cImN1cnJlbnRPcHRpb25zPy5pbWFnZUF1dG9QbGF5XCIgW2F1dG9QbGF5SW50ZXJ2YWxdPVwiY3VycmVudE9wdGlvbnM/LmltYWdlQXV0b1BsYXlJbnRlcnZhbFwiIFthdXRvUGxheVBhdXNlT25Ib3Zlcl09XCJjdXJyZW50T3B0aW9ucz8uaW1hZ2VBdXRvUGxheVBhdXNlT25Ib3ZlclwiIFtpbmZpbml0eU1vdmVdPVwiY3VycmVudE9wdGlvbnM/LmltYWdlSW5maW5pdHlNb3ZlXCIgIFtsYXp5TG9hZGluZ109XCJjdXJyZW50T3B0aW9ucz8ubGF6eUxvYWRpbmdcIiBbYWN0aW9uc109XCJjdXJyZW50T3B0aW9ucz8uaW1hZ2VBY3Rpb25zXCIgW2Rlc2NyaXB0aW9uc109XCJkZXNjcmlwdGlvbnNcIiBbc2hvd0Rlc2NyaXB0aW9uXT1cImN1cnJlbnRPcHRpb25zPy5pbWFnZURlc2NyaXB0aW9uXCIgW2J1bGxldHNdPVwiY3VycmVudE9wdGlvbnM/LmltYWdlQnVsbGV0c1wiIChvbkNsaWNrKT1cIm9wZW5QcmV2aWV3KCRldmVudClcIiAob25BY3RpdmVDaGFuZ2UpPVwic2VsZWN0RnJvbUltYWdlKCRldmVudClcIj48L25neC1nYWxsZXJ5LWltYWdlPlxuXG4gICAgICAgIDxuZ3gtZ2FsbGVyeS10aHVtYm5haWxzICpuZ0lmPVwiY3VycmVudE9wdGlvbnM/LnRodW1ibmFpbHNcIiBbc3R5bGUubWFyZ2luVG9wXT1cImdldFRodW1ibmFpbHNNYXJnaW5Ub3AoKVwiIFtzdHlsZS5tYXJnaW5Cb3R0b21dPVwiZ2V0VGh1bWJuYWlsc01hcmdpbkJvdHRvbSgpXCIgW3N0eWxlLmhlaWdodF09XCJnZXRUaHVtYm5haWxzSGVpZ2h0KClcIiBbaW1hZ2VzXT1cInNtYWxsSW1hZ2VzXCIgW2xpbmtzXT1cImN1cnJlbnRPcHRpb25zPy50aHVtYm5haWxzQXNMaW5rcyA/IGxpbmtzIDogW11cIiBbbGFiZWxzXT1cImxhYmVsc1wiIFtsaW5rVGFyZ2V0XT1cImN1cnJlbnRPcHRpb25zPy5saW5rVGFyZ2V0XCIgW3NlbGVjdGVkSW5kZXhdPVwic2VsZWN0ZWRJbmRleFwiIFtjb2x1bW5zXT1cImN1cnJlbnRPcHRpb25zPy50aHVtYm5haWxzQ29sdW1uc1wiIFtyb3dzXT1cImN1cnJlbnRPcHRpb25zPy50aHVtYm5haWxzUm93c1wiIFttYXJnaW5dPVwiY3VycmVudE9wdGlvbnM/LnRodW1ibmFpbE1hcmdpblwiIFthcnJvd3NdPVwiY3VycmVudE9wdGlvbnM/LnRodW1ibmFpbHNBcnJvd3NcIiBbYXJyb3dzQXV0b0hpZGVdPVwiY3VycmVudE9wdGlvbnM/LnRodW1ibmFpbHNBcnJvd3NBdXRvSGlkZVwiIFthcnJvd1ByZXZJY29uXT1cImN1cnJlbnRPcHRpb25zPy5hcnJvd1ByZXZJY29uXCIgW2Fycm93TmV4dEljb25dPVwiY3VycmVudE9wdGlvbnM/LmFycm93TmV4dEljb25cIiBbY2xpY2thYmxlXT1cImN1cnJlbnRPcHRpb25zPy5pbWFnZSB8fCBjdXJyZW50T3B0aW9ucz8ucHJldmlld1wiIFtzd2lwZV09XCJjdXJyZW50T3B0aW9ucz8udGh1bWJuYWlsc1N3aXBlXCIgW3NpemVdPVwiY3VycmVudE9wdGlvbnM/LnRodW1ibmFpbFNpemVcIiBbbW92ZVNpemVdPVwiY3VycmVudE9wdGlvbnM/LnRodW1ibmFpbHNNb3ZlU2l6ZVwiIFtvcmRlcl09XCJjdXJyZW50T3B0aW9ucz8udGh1bWJuYWlsc09yZGVyXCIgW3JlbWFpbmluZ0NvdW50XT1cImN1cnJlbnRPcHRpb25zPy50aHVtYm5haWxzUmVtYWluaW5nQ291bnRcIiBbbGF6eUxvYWRpbmddPVwiY3VycmVudE9wdGlvbnM/LmxhenlMb2FkaW5nXCIgW2FjdGlvbnNdPVwiY3VycmVudE9wdGlvbnM/LnRodW1ibmFpbEFjdGlvbnNcIiAgKG9uQWN0aXZlQ2hhbmdlKT1cInNlbGVjdEZyb21UaHVtYm5haWxzKCRldmVudClcIj48L25neC1nYWxsZXJ5LXRodW1ibmFpbHM+XG5cbiAgICAgICAgPG5neC1nYWxsZXJ5LXByZXZpZXcgXG4gICAgICAgIFtpbWFnZXNdPVwiYmlnSW1hZ2VzXCIgXG4gICAgICAgIFtkZXNjcmlwdGlvbnNdPVwiZGVzY3JpcHRpb25zXCIgXG4gICAgICAgIFthcnJvd1ByZXZJY29uXT1cImN1cnJlbnRPcHRpb25zPy5wcmV2aWV3UHJldkljb25PcHRpb25cIiBcbiAgICAgICAgW2Fycm93TmV4dEljb25dPVwiY3VycmVudE9wdGlvbnM/LnByZXZpZXdOZXh0SWNvbk9wdGlvblwiIFxuICAgICAgICBbY2xvc2VJY29uXT1cImN1cnJlbnRPcHRpb25zPy5jbG9zZUljb25cIiBcbiAgICAgICAgW2Z1bGxzY3JlZW5JY29uXT1cImN1cnJlbnRPcHRpb25zPy5mdWxsc2NyZWVuSWNvblwiIFxuICAgICAgICBbc3Bpbm5lckljb25dPVwiY3VycmVudE9wdGlvbnM/LnNwaW5uZXJJY29uXCIgXG4gICAgICAgIFthcnJvd3NdPVwiY3VycmVudE9wdGlvbnM/LnByZXZpZXdBcnJvd3NcIiBcbiAgICAgICAgW2Fycm93c0F1dG9IaWRlXT1cImN1cnJlbnRPcHRpb25zPy5wcmV2aWV3QXJyb3dzQXV0b0hpZGVcIiBcbiAgICAgICAgW3N3aXBlXT1cImN1cnJlbnRPcHRpb25zPy5wcmV2aWV3U3dpcGVcIiBcbiAgICAgICAgW2Z1bGxzY3JlZW5dPVwiY3VycmVudE9wdGlvbnM/LnByZXZpZXdGdWxsc2NyZWVuXCIgXG4gICAgICAgIFtmb3JjZUZ1bGxzY3JlZW5dPVwiY3VycmVudE9wdGlvbnM/LnByZXZpZXdGb3JjZUZ1bGxzY3JlZW5cIiBcbiAgICAgICAgW2Nsb3NlT25DbGlja109XCJjdXJyZW50T3B0aW9ucz8ucHJldmlld0Nsb3NlT25DbGlja1wiIFxuICAgICAgICBbY2xvc2VPbkVzY109XCJjdXJyZW50T3B0aW9ucz8ucHJldmlld0Nsb3NlT25Fc2NcIiBcbiAgICAgICAgW2tleWJvYXJkTmF2aWdhdGlvbl09XCJjdXJyZW50T3B0aW9ucz8ucHJldmlld0tleWJvYXJkTmF2aWdhdGlvblwiIFxuICAgICAgICBbYW5pbWF0aW9uXT1cImN1cnJlbnRPcHRpb25zPy5wcmV2aWV3QW5pbWF0aW9uXCIgXG4gICAgICAgIFthdXRvUGxheV09XCJjdXJyZW50T3B0aW9ucz8ucHJldmlld0F1dG9QbGF5XCIgXG4gICAgICAgIFthdXRvUGxheUludGVydmFsXT1cImN1cnJlbnRPcHRpb25zPy5wcmV2aWV3QXV0b1BsYXlJbnRlcnZhbFwiIFxuICAgICAgICBbYXV0b1BsYXlQYXVzZU9uSG92ZXJdPVwiY3VycmVudE9wdGlvbnM/LnByZXZpZXdBdXRvUGxheVBhdXNlT25Ib3ZlclwiIFxuICAgICAgICBbaW5maW5pdHlNb3ZlXT1cImN1cnJlbnRPcHRpb25zPy5pbWFnZUluZmluaXR5TW92ZVwiIFxuICAgICAgICBbem9vbV09XCJjdXJyZW50T3B0aW9ucz8ucHJldmlld1pvb21cIiBcbiAgICAgICAgW3pvb21TdGVwXT1cImN1cnJlbnRPcHRpb25zPy5wcmV2aWV3Wm9vbVN0ZXBcIiBcbiAgICAgICAgW3pvb21NYXhdPVwiY3VycmVudE9wdGlvbnM/LnByZXZpZXdab29tTWF4XCIgXG4gICAgICAgIFt6b29tTWluXT1cImN1cnJlbnRPcHRpb25zPy5wcmV2aWV3Wm9vbU1pblwiIFxuICAgICAgICBbem9vbUluSWNvbl09XCJjdXJyZW50T3B0aW9ucz8uem9vbUluSWNvblwiIFxuICAgICAgICBbem9vbU91dEljb25dPVwiY3VycmVudE9wdGlvbnM/Lnpvb21PdXRJY29uXCIgXG4gICAgICAgIFthY3Rpb25zXT1cImN1cnJlbnRPcHRpb25zPy5hY3Rpb25zXCIgXG4gICAgICAgIFtyb3RhdGVdPVwiY3VycmVudE9wdGlvbnM/LnByZXZpZXdSb3RhdGVcIiBcbiAgICAgICAgW3JvdGF0ZUxlZnRJY29uXT1cImN1cnJlbnRPcHRpb25zPy5yb3RhdGVMZWZ0SWNvblwiIFxuICAgICAgICBbcm90YXRlUmlnaHRJY29uXT1cImN1cnJlbnRPcHRpb25zPy5yb3RhdGVSaWdodEljb25cIiBcbiAgICAgICAgW2Rvd25sb2FkXT1cImN1cnJlbnRPcHRpb25zPy5wcmV2aWV3RG93bmxvYWRcIiBcbiAgICAgICAgW2Rvd25sb2FkSWNvbl09XCJjdXJyZW50T3B0aW9ucz8uZG93bmxvYWRJY29uXCIgXG4gICAgICAgIFtidWxsZXRzXT1cImN1cnJlbnRPcHRpb25zPy5wcmV2aWV3QnVsbGV0c1wiIFxuICAgICAgICAob25DbG9zZSk9XCJvblByZXZpZXdDbG9zZSgpXCIgXG4gICAgICAgIChvbk9wZW4pPVwib25QcmV2aWV3T3BlbigpXCIgXG4gICAgICAgIChvbkFjdGl2ZUNoYW5nZSk9XCJwcmV2aWV3U2VsZWN0KCRldmVudClcIiBcbiAgICAgICAgW2NsYXNzLm5neC1nYWxsZXJ5LWFjdGl2ZV09XCJwcmV2aWV3RW5hYmxlZFwiIFxuICAgICAgICBbc2hvd0Rlc2NyaXB0aW9uXT1cImN1cnJlbnRPcHRpb25zPy5pbWFnZURlc2NyaXB0aW9uXCI+XG4gICAgICAgIDwvbmd4LWdhbGxlcnktcHJldmlldz5cbiAgICA8L2Rpdj5cbiAgICBgLFxuICAgIHN0eWxlVXJsczogWycuL25neC1nYWxsZXJ5LmNvbXBvbmVudC5zY3NzJ10sXG4gICAgcHJvdmlkZXJzOiBbTmd4R2FsbGVyeUhlbHBlclNlcnZpY2VdXG59KVxuZXhwb3J0IGNsYXNzIE5neEdhbGxlcnlDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIERvQ2hlY2ssIEFmdGVyVmlld0luaXQgICB7XG4gICAgQElucHV0KCkgb3B0aW9uczogTmd4R2FsbGVyeU9wdGlvbnNbXTtcbiAgICBASW5wdXQoKSBpbWFnZXM6IE5neEdhbGxlcnlJbWFnZVtdO1xuXG4gICAgQE91dHB1dCgpIGltYWdlc1JlYWR5ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICAgIEBPdXRwdXQoKSBjaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPHsgaW5kZXg6IG51bWJlcjsgaW1hZ2U6IE5neEdhbGxlcnlJbWFnZTsgfT4oKTtcbiAgICBAT3V0cHV0KCkgcHJldmlld09wZW4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gICAgQE91dHB1dCgpIHByZXZpZXdDbG9zZSA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgICBAT3V0cHV0KCkgcHJldmlld0NoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8eyBpbmRleDogbnVtYmVyOyBpbWFnZTogTmd4R2FsbGVyeUltYWdlOyB9PigpO1xuXG4gICAgQElucHV0KCkgd2lkdGhPcHRpb246IHN0cmluZztcbiAgICBASW5wdXQoKSBoZWlnaHRPcHRpb246IHN0cmluZztcbiAgICBASW5wdXQoKSB0aHVtYm5haWxzQ29sdW1uc09wdGlvbjogbnVtYmVyO1xuICAgIEBJbnB1dCgpIHN0YXJ0SW5kZXhPcHRpb246IG51bWJlcjtcbiAgICBASW5wdXQoKSBpbWFnZURlc2NyaXB0aW9uT3B0aW9uOiBib29sZWFuO1xuICAgIEBJbnB1dCgpIGltYWdlQXJyb3dzT3B0aW9uOiBib29sZWFuO1xuICAgIEBJbnB1dCgpIHRodW1ibmFpbHNBcnJvd3NPcHRpb246IGJvb2xlYW47XG4gICAgQElucHV0KCkgcHJldmlld0Fycm93c09wdGlvbjogYm9vbGVhbjtcbiAgICBASW5wdXQoKSBpbWFnZVN3aXBlT3B0aW9uOiBib29sZWFuO1xuICAgIEBJbnB1dCgpIHRodW1ibmFpbHNTd2lwZU9wdGlvbjogYm9vbGVhbjtcbiAgICBASW5wdXQoKSBwcmV2aWV3U3dpcGVPcHRpb246IGJvb2xlYW47XG4gICAgQElucHV0KCkgaW1hZ2VBdXRvUGxheU9wdGlvbjogYm9vbGVhbjtcbiAgICBASW5wdXQoKSBpbWFnZUF1dG9QbGF5SW50ZXJ2YWxPcHRpb246IG51bWJlcjtcbiAgICBASW5wdXQoKSBpbWFnZUF1dG9QbGF5UGF1c2VPbkhvdmVyT3B0aW9uOiBib29sZWFuO1xuICAgIEBJbnB1dCgpIGltYWdlSW5maW5pdHlNb3ZlT3B0aW9uOiBib29sZWFuO1xuICAgIEBJbnB1dCgpIHByZXZpZXdPcHRpb246IGJvb2xlYW47XG4gICAgQElucHV0KCkgYXJyb3dQcmV2SWNvbk9wdGlvbjogc3RyaW5nO1xuICAgIEBJbnB1dCgpIGFycm93TmV4dEljb25PcHRpb246IHN0cmluZztcbiAgICBASW5wdXQoKSBwcmV2aWV3UHJldkljb25PcHRpb246IHN0cmluZztcbiAgICBASW5wdXQoKSBwcmV2aWV3TmV4dEljb25PcHRpb246IHN0cmluZztcbiAgICBASW5wdXQoKSB0aHVtYm5haWxzT3B0aW9uOiBib29sZWFuO1xuXG4gIHNtYWxsSW1hZ2VzOiBzdHJpbmdbXSB8IFNhZmVSZXNvdXJjZVVybFtdO1xuICAgIG1lZGl1bUltYWdlczogTmd4R2FsbGVyeU9yZGVyZWRJbWFnZVtdO1xuICAgIGJpZ0ltYWdlczogc3RyaW5nW10gfCBTYWZlUmVzb3VyY2VVcmxbXTtcbiAgICBkZXNjcmlwdGlvbnM6IHN0cmluZ1tdO1xuICAgIGxpbmtzOiBzdHJpbmdbXTtcbiAgICBsYWJlbHM6IHN0cmluZ1tdO1xuXG4gICAgb2xkSW1hZ2VzOiBOZ3hHYWxsZXJ5SW1hZ2VbXTtcbiAgICBvbGRJbWFnZXNMZW5ndGggPSAwO1xuXG4gICAgc2VsZWN0ZWRJbmRleCA9IDA7XG4gICAgcHJldmlld0VuYWJsZWQ6IGJvb2xlYW47XG5cbiAgICBjdXJyZW50T3B0aW9uczogTmd4R2FsbGVyeU9wdGlvbnM7XG5cbiAgICBwcml2YXRlIGJyZWFrcG9pbnQ6IG51bWJlciB8IHVuZGVmaW5lZCA9IHVuZGVmaW5lZDtcbiAgICBwcml2YXRlIHByZXZCcmVha3BvaW50OiBudW1iZXIgfCB1bmRlZmluZWQgPSB1bmRlZmluZWQ7XG4gICAgcHJpdmF0ZSBmdWxsV2lkdGhUaW1lb3V0OiBhbnk7XG5cbiAgICAvLyBAdHMtaWdub3JlXG4gICAgQFZpZXdDaGlsZChOZ3hHYWxsZXJ5UHJldmlld0NvbXBvbmVudCkgcHJldmlldzogTmd4R2FsbGVyeVByZXZpZXdDb21wb25lbnQ7XG4gICAgLy8gQHRzLWlnbm9yZVxuICAgIEBWaWV3Q2hpbGQoTmd4R2FsbGVyeUltYWdlQ29tcG9uZW50KSBpbWFnZTogTmd4R2FsbGVyeUltYWdlQ29tcG9uZW50O1xuICAgIC8vIEB0cy1pZ25vcmVcbiAgICBAVmlld0NoaWxkKE5neEdhbGxlcnlUaHVtYm5haWxzQ29tcG9uZW50KSB0aHVibW5haWxzOiBOZ3hHYWxsZXJ5VGh1bWJuYWlsc0NvbXBvbmVudDtcblxuICAgIEBIb3N0QmluZGluZygnc3R5bGUud2lkdGgnKSB3aWR0aDogc3RyaW5nO1xuICAgIEBIb3N0QmluZGluZygnc3R5bGUuaGVpZ2h0JykgaGVpZ2h0OiBzdHJpbmc7XG4gICAgQEhvc3RCaW5kaW5nKCdzdHlsZS5sZWZ0JykgbGVmdDogc3RyaW5nO1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBteUVsZW1lbnQ6IEVsZW1lbnRSZWYpIHt9XG5cbiAgICBuZ09uSW5pdCgpIHtcbiAgICAgIGNvbnN0IHRlbXBPcHRpb25zID0gW3tcbiAgICAgICAgd2lkdGg6IHRoaXMud2lkdGhPcHRpb24sXG4gICAgICAgIGhlaWdodDogdGhpcy5oZWlnaHRPcHRpb24sXG4gICAgICAgIHRodW1ibmFpbHM6IHRoaXMudGh1bWJuYWlsc09wdGlvbixcbiAgICAgICAgdGh1bWJuYWlsc0NvbHVtbnM6IHRoaXMudGh1bWJuYWlsc0NvbHVtbnNPcHRpb24sXG4gICAgICAgIHN0YXJ0SW5kZXg6IHRoaXMuc3RhcnRJbmRleE9wdGlvbixcbiAgICAgICAgaW1hZ2VEZXNjcmlwdGlvbjogdGhpcy5pbWFnZURlc2NyaXB0aW9uT3B0aW9uLFxuICAgICAgICBpbWFnZUFycm93czogdGhpcy5pbWFnZUFycm93c09wdGlvbixcbiAgICAgICAgdGh1bWJuYWlsc0Fycm93czogdGhpcy50aHVtYm5haWxzQXJyb3dzT3B0aW9uLFxuICAgICAgICBwcmV2aWV3QXJyb3dzOiB0aGlzLnByZXZpZXdBcnJvd3NPcHRpb24sXG4gICAgICAgIGltYWdlU3dpcGU6IHRoaXMuaW1hZ2VTd2lwZU9wdGlvbixcbiAgICAgICAgdGh1bWJuYWlsc1N3aXBlOiB0aGlzLnRodW1ibmFpbHNTd2lwZU9wdGlvbixcbiAgICAgICAgcHJldmlld1N3aXBlOiB0aGlzLnByZXZpZXdTd2lwZU9wdGlvbixcbiAgICAgICAgaW1hZ2VBdXRvUGxheTogdGhpcy5pbWFnZUF1dG9QbGF5T3B0aW9uLFxuICAgICAgICBpbWFnZUF1dG9QbGF5SW50ZXJ2YWw6IHRoaXMuaW1hZ2VBdXRvUGxheUludGVydmFsT3B0aW9uLFxuICAgICAgICBpbWFnZUF1dG9QbGF5UGF1c2VPbkhvdmVyOiB0aGlzLmltYWdlQXV0b1BsYXlQYXVzZU9uSG92ZXJPcHRpb24sXG4gICAgICAgIGltYWdlSW5maW5pdHlNb3ZlOiB0aGlzLmltYWdlSW5maW5pdHlNb3ZlT3B0aW9uLFxuICAgICAgICBwcmV2aWV3OiB0aGlzLnByZXZpZXdPcHRpb24sXG4gICAgICAgIGFycm93UHJldkljb246IHRoaXMuYXJyb3dQcmV2SWNvbk9wdGlvbixcbiAgICAgICAgYXJyb3dOZXh0SWNvbjogdGhpcy5hcnJvd05leHRJY29uT3B0aW9uLFxuICAgICAgICBwcmV2aWV3UHJldkljb25PcHRpb246IHRoaXMucHJldmlld1ByZXZJY29uT3B0aW9uLFxuICAgICAgICBwcmV2aWV3TmV4dEljb25PcHRpb246IHRoaXMucHJldmlld05leHRJY29uT3B0aW9uXG4gICAgICB9XTtcblxuICAgICAgICAvLyB0aGlzLm9wdGlvbnMgPSB0aGlzLm9wdGlvbnMubWFwKChvcHQpID0+IG5ldyBOZ3hHYWxsZXJ5T3B0aW9ucyhvcHQpKTtcbiAgICAgICAgdGhpcy5vcHRpb25zID0gdGVtcE9wdGlvbnMubWFwKChvcHQpID0+IG5ldyBOZ3hHYWxsZXJ5T3B0aW9ucyhvcHQpKTtcblxuICAgICAgICB0aGlzLnNvcnRPcHRpb25zKCk7XG4gICAgICAgIHRoaXMuc2V0QnJlYWtwb2ludCgpO1xuICAgICAgICB0aGlzLnNldE9wdGlvbnMoKTtcbiAgICAgICAgdGhpcy5jaGVja0Z1bGxXaWR0aCgpO1xuICAgICAgICBpZiAodGhpcy5jdXJyZW50T3B0aW9ucykge1xuICAgICAgICAgICAgdGhpcy5zZWxlY3RlZEluZGV4ID0gPG51bWJlcj50aGlzLmN1cnJlbnRPcHRpb25zLnN0YXJ0SW5kZXg7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBuZ0RvQ2hlY2soKTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLmltYWdlcyAhPT0gdW5kZWZpbmVkICYmICh0aGlzLmltYWdlcy5sZW5ndGggIT09IHRoaXMub2xkSW1hZ2VzTGVuZ3RoKVxuICAgICAgICAgICAgfHwgKHRoaXMuaW1hZ2VzICE9PSB0aGlzLm9sZEltYWdlcykpIHtcbiAgICAgICAgICAgIHRoaXMub2xkSW1hZ2VzTGVuZ3RoID0gdGhpcy5pbWFnZXMubGVuZ3RoO1xuICAgICAgICAgICAgdGhpcy5vbGRJbWFnZXMgPSB0aGlzLmltYWdlcztcbiAgICAgICAgICAgIHRoaXMuc2V0T3B0aW9ucygpO1xuICAgICAgICAgICAgdGhpcy5zZXRJbWFnZXMoKTtcblxuICAgICAgICAgICAgaWYgKHRoaXMuaW1hZ2VzICYmIHRoaXMuaW1hZ2VzLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIHRoaXMuaW1hZ2VzUmVhZHkuZW1pdCgpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAodGhpcy5pbWFnZSkge1xuICAgICAgICAgICAgICAgIHRoaXMuaW1hZ2UucmVzZXQoPG51bWJlcj50aGlzLmN1cnJlbnRPcHRpb25zLnN0YXJ0SW5kZXgpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAodGhpcy5jdXJyZW50T3B0aW9ucy50aHVtYm5haWxzQXV0b0hpZGUgJiYgdGhpcy5jdXJyZW50T3B0aW9ucy50aHVtYm5haWxzXG4gICAgICAgICAgICAgICAgJiYgdGhpcy5pbWFnZXMubGVuZ3RoIDw9IDEpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRPcHRpb25zLnRodW1ibmFpbHMgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRPcHRpb25zLmltYWdlQXJyb3dzID0gZmFsc2U7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMucmVzZXRUaHVtYm5haWxzKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBuZ0FmdGVyVmlld0luaXQoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuY2hlY2tGdWxsV2lkdGgoKTtcbiAgICB9XG5cbiAgICBASG9zdExpc3RlbmVyKCd3aW5kb3c6cmVzaXplJykgb25SZXNpemUoKSB7XG4gICAgICAgIHRoaXMuc2V0QnJlYWtwb2ludCgpO1xuXG4gICAgICAgIGlmICh0aGlzLnByZXZCcmVha3BvaW50ICE9PSB0aGlzLmJyZWFrcG9pbnQpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0T3B0aW9ucygpO1xuICAgICAgICAgICAgdGhpcy5yZXNldFRodW1ibmFpbHMoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLmN1cnJlbnRPcHRpb25zICYmIHRoaXMuY3VycmVudE9wdGlvbnMuZnVsbFdpZHRoKSB7XG5cbiAgICAgICAgICAgIGlmICh0aGlzLmZ1bGxXaWR0aFRpbWVvdXQpIHtcbiAgICAgICAgICAgICAgICBjbGVhclRpbWVvdXQodGhpcy5mdWxsV2lkdGhUaW1lb3V0KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpcy5mdWxsV2lkdGhUaW1lb3V0ID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5jaGVja0Z1bGxXaWR0aCgpO1xuICAgICAgICAgICAgfSwgMjAwKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGdldEltYWdlSGVpZ2h0KCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiAodGhpcy5jdXJyZW50T3B0aW9ucyAmJiB0aGlzLmN1cnJlbnRPcHRpb25zLnRodW1ibmFpbHMpID9cbiAgICAgICAgICAgIHRoaXMuY3VycmVudE9wdGlvbnMuaW1hZ2VQZXJjZW50ICsgJyUnIDogJzEwMCUnO1xuICAgIH1cblxuICAgIGdldFRodW1ibmFpbHNIZWlnaHQoKTogc3RyaW5nIHtcbiAgICAgICAgaWYgKHRoaXMuY3VycmVudE9wdGlvbnMgJiYgdGhpcy5jdXJyZW50T3B0aW9ucy5pbWFnZSkge1xuICAgICAgICAgICAgcmV0dXJuICdjYWxjKCcgKyB0aGlzLmN1cnJlbnRPcHRpb25zLnRodW1ibmFpbHNQZXJjZW50ICsgJyUgLSAnXG4gICAgICAgICAgICArIHRoaXMuY3VycmVudE9wdGlvbnMudGh1bWJuYWlsc01hcmdpbiArICdweCknO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuICcxMDAlJztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGdldFRodW1ibmFpbHNNYXJnaW5Ub3AoKTogc3RyaW5nIHtcbiAgICAgICAgaWYgKHRoaXMuY3VycmVudE9wdGlvbnMgJiYgdGhpcy5jdXJyZW50T3B0aW9ucy5sYXlvdXQgPT09IE5neEdhbGxlcnlMYXlvdXQuVGh1bWJuYWlsc0JvdHRvbSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuY3VycmVudE9wdGlvbnMudGh1bWJuYWlsc01hcmdpbiArICdweCc7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gJzBweCc7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBnZXRUaHVtYm5haWxzTWFyZ2luQm90dG9tKCk6IHN0cmluZyB7XG4gICAgICAgIGlmICh0aGlzLmN1cnJlbnRPcHRpb25zICYmIHRoaXMuY3VycmVudE9wdGlvbnMubGF5b3V0ID09PSBOZ3hHYWxsZXJ5TGF5b3V0LlRodW1ibmFpbHNUb3ApIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmN1cnJlbnRPcHRpb25zLnRodW1ibmFpbHNNYXJnaW4gKyAncHgnO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuICcwcHgnO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgb3BlblByZXZpZXcoaW5kZXg6IG51bWJlcik6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5jdXJyZW50T3B0aW9ucy5wcmV2aWV3Q3VzdG9tKSB7XG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRPcHRpb25zLnByZXZpZXdDdXN0b20oaW5kZXgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5wcmV2aWV3RW5hYmxlZCA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLnByZXZpZXcub3BlbihpbmRleCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBvblByZXZpZXdPcGVuKCk6IHZvaWQge1xuICAgICAgICB0aGlzLnByZXZpZXdPcGVuLmVtaXQoKTtcblxuICAgICAgICBpZiAodGhpcy5pbWFnZSAmJiB0aGlzLmltYWdlLmF1dG9QbGF5KSB7XG4gICAgICAgICAgICB0aGlzLmltYWdlLnN0b3BBdXRvUGxheSgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgb25QcmV2aWV3Q2xvc2UoKTogdm9pZCB7XG4gICAgICAgIHRoaXMucHJldmlld0VuYWJsZWQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5wcmV2aWV3Q2xvc2UuZW1pdCgpO1xuXG4gICAgICAgIGlmICh0aGlzLmltYWdlICYmIHRoaXMuaW1hZ2UuYXV0b1BsYXkpIHtcbiAgICAgICAgICAgIHRoaXMuaW1hZ2Uuc3RhcnRBdXRvUGxheSgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgc2VsZWN0RnJvbUltYWdlKGluZGV4OiBudW1iZXIpIHtcbiAgICAgICAgdGhpcy5zZWxlY3QoaW5kZXgpO1xuICAgIH1cblxuICAgIHNlbGVjdEZyb21UaHVtYm5haWxzKGluZGV4OiBudW1iZXIpIHtcbiAgICAgICAgdGhpcy5zZWxlY3QoaW5kZXgpO1xuXG4gICAgICAgIGlmICh0aGlzLmN1cnJlbnRPcHRpb25zICYmIHRoaXMuY3VycmVudE9wdGlvbnMudGh1bWJuYWlscyAmJiB0aGlzLmN1cnJlbnRPcHRpb25zLnByZXZpZXdcbiAgICAgICAgICAgICYmICghdGhpcy5jdXJyZW50T3B0aW9ucy5pbWFnZSB8fCB0aGlzLmN1cnJlbnRPcHRpb25zLnRodW1ibmFpbHNSZW1haW5pbmdDb3VudCkpIHtcbiAgICAgICAgICAgIHRoaXMub3BlblByZXZpZXcodGhpcy5zZWxlY3RlZEluZGV4KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHNob3coaW5kZXg6IG51bWJlcik6IHZvaWQge1xuICAgICAgICB0aGlzLnNlbGVjdChpbmRleCk7XG4gICAgfVxuXG4gICAgc2hvd05leHQoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuaW1hZ2Uuc2hvd05leHQoKTtcbiAgICB9XG5cbiAgICBzaG93UHJldigpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5pbWFnZS5zaG93UHJldigpO1xuICAgIH1cblxuICAgIGNhblNob3dOZXh0KCk6IGJvb2xlYW4ge1xuICAgICAgICBpZiAodGhpcy5pbWFnZXMgJiYgdGhpcy5jdXJyZW50T3B0aW9ucykge1xuICAgICAgICAgICAgcmV0dXJuICh0aGlzLmN1cnJlbnRPcHRpb25zLmltYWdlSW5maW5pdHlNb3ZlIHx8IHRoaXMuc2VsZWN0ZWRJbmRleCA8IHRoaXMuaW1hZ2VzLmxlbmd0aCAtIDEpXG4gICAgICAgICAgICAgICAgPyB0cnVlIDogZmFsc2U7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjYW5TaG93UHJldigpOiBib29sZWFuIHtcbiAgICAgICAgaWYgKHRoaXMuaW1hZ2VzICYmIHRoaXMuY3VycmVudE9wdGlvbnMpIHtcbiAgICAgICAgICAgIHJldHVybiAodGhpcy5jdXJyZW50T3B0aW9ucy5pbWFnZUluZmluaXR5TW92ZSB8fCB0aGlzLnNlbGVjdGVkSW5kZXggPiAwKSA/IHRydWUgOiBmYWxzZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByZXZpZXdTZWxlY3QoaW5kZXg6IG51bWJlcikge1xuICAgICAgICB0aGlzLnByZXZpZXdDaGFuZ2UuZW1pdCh7aW5kZXgsIGltYWdlOiB0aGlzLmltYWdlc1tpbmRleF19KTtcbiAgICB9XG5cbiAgICBtb3ZlVGh1bWJuYWlsc1JpZ2h0KCkge1xuICAgICAgICB0aGlzLnRodWJtbmFpbHMubW92ZVJpZ2h0KCk7XG4gICAgfVxuXG4gICAgbW92ZVRodW1ibmFpbHNMZWZ0KCkge1xuICAgICAgICB0aGlzLnRodWJtbmFpbHMubW92ZUxlZnQoKTtcbiAgICB9XG5cbiAgICBjYW5Nb3ZlVGh1bWJuYWlsc1JpZ2h0KCkge1xuICAgICAgICByZXR1cm4gdGhpcy50aHVibW5haWxzLmNhbk1vdmVSaWdodCgpO1xuICAgIH1cblxuICAgIGNhbk1vdmVUaHVtYm5haWxzTGVmdCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudGh1Ym1uYWlscy5jYW5Nb3ZlTGVmdCgpO1xuICAgIH1cblxuICAgIHByaXZhdGUgcmVzZXRUaHVtYm5haWxzKCkge1xuICAgICAgICBpZiAodGhpcy50aHVibW5haWxzKSB7XG4gICAgICAgICAgICB0aGlzLnRodWJtbmFpbHMucmVzZXQoPG51bWJlcj50aGlzLmN1cnJlbnRPcHRpb25zLnN0YXJ0SW5kZXgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBzZWxlY3QoaW5kZXg6IG51bWJlcikge1xuICAgICAgICB0aGlzLnNlbGVjdGVkSW5kZXggPSBpbmRleDtcblxuICAgICAgICB0aGlzLmNoYW5nZS5lbWl0KHtcbiAgICAgICAgICAgIGluZGV4LFxuICAgICAgICAgICAgaW1hZ2U6IHRoaXMuaW1hZ2VzW2luZGV4XVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGNoZWNrRnVsbFdpZHRoKCk6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5jdXJyZW50T3B0aW9ucyAmJiB0aGlzLmN1cnJlbnRPcHRpb25zLmZ1bGxXaWR0aCkge1xuICAgICAgICAgICAgdGhpcy53aWR0aCA9IGRvY3VtZW50LmJvZHkuY2xpZW50V2lkdGggKyAncHgnO1xuICAgICAgICAgICAgdGhpcy5sZWZ0ID0gKC0oZG9jdW1lbnQuYm9keS5jbGllbnRXaWR0aCAtXG4gICAgICAgICAgICAgICAgdGhpcy5teUVsZW1lbnQubmF0aXZlRWxlbWVudC5wYXJlbnROb2RlLmlubmVyV2lkdGgpIC8gMikgKyAncHgnO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBzZXRJbWFnZXMoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuc21hbGxJbWFnZXMgPSB0aGlzLmltYWdlcy5tYXAoKGltZykgPT4gPHN0cmluZz5pbWcuc21hbGwpO1xuICAgICAgICB0aGlzLm1lZGl1bUltYWdlcyA9IHRoaXMuaW1hZ2VzLm1hcCgoaW1nLCBpKSA9PiBuZXcgTmd4R2FsbGVyeU9yZGVyZWRJbWFnZSh7XG4gICAgICAgICAgICBzcmM6IGltZy5tZWRpdW0sXG4gICAgICAgICAgICBpbmRleDogaVxuICAgICAgICB9KSk7XG4gICAgICAgIHRoaXMuYmlnSW1hZ2VzID0gdGhpcy5pbWFnZXMubWFwKChpbWcpID0+IDxzdHJpbmc+aW1nLmJpZyk7XG4gICAgICAgIHRoaXMuZGVzY3JpcHRpb25zID0gdGhpcy5pbWFnZXMubWFwKChpbWcpID0+IDxzdHJpbmc+aW1nLmRlc2NyaXB0aW9uKTtcbiAgICAgICAgdGhpcy5saW5rcyA9IHRoaXMuaW1hZ2VzLm1hcCgoaW1nKSA9PiA8c3RyaW5nPmltZy51cmwpO1xuICAgICAgICB0aGlzLmxhYmVscyA9IHRoaXMuaW1hZ2VzLm1hcCgoaW1nKSA9PiA8c3RyaW5nPmltZy5sYWJlbCk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBzZXRCcmVha3BvaW50KCk6IHZvaWQge1xuICAgICAgICB0aGlzLnByZXZCcmVha3BvaW50ID0gdGhpcy5icmVha3BvaW50O1xuICAgICAgICBsZXQgYnJlYWtwb2ludHM7XG5cbiAgICAgICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICBicmVha3BvaW50cyA9IHRoaXMub3B0aW9ucy5maWx0ZXIoKG9wdCkgPT4gb3B0LmJyZWFrcG9pbnQgPj0gd2luZG93LmlubmVyV2lkdGgpXG4gICAgICAgICAgICAgICAgLm1hcCgob3B0KSA9PiBvcHQuYnJlYWtwb2ludCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoYnJlYWtwb2ludHMgJiYgYnJlYWtwb2ludHMubGVuZ3RoKSB7XG4gICAgICAgICAgICB0aGlzLmJyZWFrcG9pbnQgPSBicmVha3BvaW50cy5wb3AoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuYnJlYWtwb2ludCA9IHVuZGVmaW5lZDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgc29ydE9wdGlvbnMoKTogdm9pZCB7XG4gICAgICAgIHRoaXMub3B0aW9ucyA9IFtcbiAgICAgICAgICAgIC4uLnRoaXMub3B0aW9ucy5maWx0ZXIoKGEpID0+IGEuYnJlYWtwb2ludCA9PT0gdW5kZWZpbmVkKSxcbiAgICAgICAgICAgIC4uLnRoaXMub3B0aW9uc1xuICAgICAgICAgICAgICAgIC5maWx0ZXIoKGEpID0+IGEuYnJlYWtwb2ludCAhPT0gdW5kZWZpbmVkKVxuICAgICAgICAgICAgICAgIC5zb3J0KChhLCBiKSA9PiBiLmJyZWFrcG9pbnQgLSBhLmJyZWFrcG9pbnQpXG4gICAgICAgIF07XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBzZXRPcHRpb25zKCk6IHZvaWQge1xuICAgICAgICB0aGlzLmN1cnJlbnRPcHRpb25zID0gbmV3IE5neEdhbGxlcnlPcHRpb25zKHt9KTtcblxuICAgICAgICB0aGlzLm9wdGlvbnNcbiAgICAgICAgICAgIC5maWx0ZXIoKG9wdCkgPT4gb3B0LmJyZWFrcG9pbnQgPT09IHVuZGVmaW5lZCB8fCBvcHQuYnJlYWtwb2ludCA+PSB0aGlzLmJyZWFrcG9pbnQpXG4gICAgICAgICAgICAubWFwKChvcHQpID0+IHRoaXMuY29tYmluZU9wdGlvbnModGhpcy5jdXJyZW50T3B0aW9ucywgb3B0KSk7XG5cbiAgICAgICAgdGhpcy53aWR0aCA9IDxzdHJpbmc+dGhpcy5jdXJyZW50T3B0aW9ucy53aWR0aDtcbiAgICAgICAgdGhpcy5oZWlnaHQgPSA8c3RyaW5nPnRoaXMuY3VycmVudE9wdGlvbnMuaGVpZ2h0O1xuICAgIH1cblxuICAgIHByaXZhdGUgY29tYmluZU9wdGlvbnMoZmlyc3Q6IE5neEdhbGxlcnlPcHRpb25zLCBzZWNvbmQ6IE5neEdhbGxlcnlPcHRpb25zKSB7XG4gICAgICAgIE9iamVjdC5rZXlzKHNlY29uZCkubWFwKCh2YWwpID0+IGZpcnN0W3ZhbF0gPSBzZWNvbmRbdmFsXSAhPT0gdW5kZWZpbmVkID8gc2Vjb25kW3ZhbF0gOiBmaXJzdFt2YWxdKTtcbiAgICB9XG59XG5cbiJdfQ==