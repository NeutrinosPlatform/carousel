/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, Input, HostListener, ViewChild, HostBinding, ElementRef, Output, EventEmitter } from '@angular/core';
import { NgxGalleryPreviewComponent } from './ngx-gallery-preview.component';
import { NgxGalleryImageComponent } from './ngx-gallery-image.component';
import { NgxGalleryThumbnailsComponent } from './ngx-gallery-thumbnails.component';
import { NgxGalleryHelperService } from './ngx-gallery-helper.service';
import { NgxGalleryOptions } from './ngx-gallery-options.model';
import { NgxGalleryLayout } from './ngx-gallery-layout.model';
import { NgxGalleryOrderedImage } from './ngx-gallery-ordered-image.model';
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
        this.options = tslib_1.__spread(this.options.filter((/**
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
                    template: "\n    <div class=\"ngx-gallery-layout {{currentOptions?.layout}}\">\n        <ngx-gallery-image *ngIf=\"currentOptions?.image\" [style.height]=\"getImageHeight()\" [images]=\"mediumImages\" [clickable]=\"currentOptions?.preview\" [selectedIndex]=\"selectedIndex\" [arrows]=\"currentOptions?.imageArrows\" [arrowsAutoHide]=\"currentOptions?.imageArrowsAutoHide\" [arrowPrevIcon]=\"currentOptions?.arrowPrevIcon\" [arrowNextIcon]=\"currentOptions?.arrowNextIcon\" [swipe]=\"currentOptions?.imageSwipe\" [animation]=\"currentOptions?.imageAnimation\" [size]=\"currentOptions?.imageSize\" [autoPlay]=\"currentOptions?.imageAutoPlay\" [autoPlayInterval]=\"currentOptions?.imageAutoPlayInterval\" [autoPlayPauseOnHover]=\"currentOptions?.imageAutoPlayPauseOnHover\" [infinityMove]=\"currentOptions?.imageInfinityMove\"  [lazyLoading]=\"currentOptions?.lazyLoading\" [actions]=\"currentOptions?.imageActions\" [descriptions]=\"descriptions\" [showDescription]=\"currentOptions?.imageDescription\" [bullets]=\"currentOptions?.imageBullets\" (onClick)=\"openPreview($event)\" (onActiveChange)=\"selectFromImage($event)\"></ngx-gallery-image>\n\n        <ngx-gallery-thumbnails *ngIf=\"currentOptions?.thumbnails\" [style.marginTop]=\"getThumbnailsMarginTop()\" [style.marginBottom]=\"getThumbnailsMarginBottom()\" [style.height]=\"getThumbnailsHeight()\" [images]=\"smallImages\" [links]=\"currentOptions?.thumbnailsAsLinks ? links : []\" [labels]=\"labels\" [linkTarget]=\"currentOptions?.linkTarget\" [selectedIndex]=\"selectedIndex\" [columns]=\"currentOptions?.thumbnailsColumns\" [rows]=\"currentOptions?.thumbnailsRows\" [margin]=\"currentOptions?.thumbnailMargin\" [arrows]=\"currentOptions?.thumbnailsArrows\" [arrowsAutoHide]=\"currentOptions?.thumbnailsArrowsAutoHide\" [arrowPrevIcon]=\"currentOptions?.arrowPrevIcon\" [arrowNextIcon]=\"currentOptions?.arrowNextIcon\" [clickable]=\"currentOptions?.image || currentOptions?.preview\" [swipe]=\"currentOptions?.thumbnailsSwipe\" [size]=\"currentOptions?.thumbnailSize\" [moveSize]=\"currentOptions?.thumbnailsMoveSize\" [order]=\"currentOptions?.thumbnailsOrder\" [remainingCount]=\"currentOptions?.thumbnailsRemainingCount\" [lazyLoading]=\"currentOptions?.lazyLoading\" [actions]=\"currentOptions?.thumbnailActions\"  (onActiveChange)=\"selectFromThumbnails($event)\"></ngx-gallery-thumbnails>\n\n        <ngx-gallery-preview \n        [images]=\"bigImages\" \n        [descriptions]=\"descriptions\" \n        [arrowPrevIcon]=\"currentOptions?.previewPrevIconOption\" \n        [arrowNextIcon]=\"currentOptions?.previewNextIconOption\" \n        [closeIcon]=\"currentOptions?.closeIcon\" \n        [fullscreenIcon]=\"currentOptions?.fullscreenIcon\" \n        [spinnerIcon]=\"currentOptions?.spinnerIcon\" \n        [arrows]=\"currentOptions?.previewArrows\" \n        [arrowsAutoHide]=\"currentOptions?.previewArrowsAutoHide\" \n        [swipe]=\"currentOptions?.previewSwipe\" \n        [fullscreen]=\"currentOptions?.previewFullscreen\" \n        [forceFullscreen]=\"currentOptions?.previewForceFullscreen\" \n        [closeOnClick]=\"currentOptions?.previewCloseOnClick\" \n        [closeOnEsc]=\"currentOptions?.previewCloseOnEsc\" \n        [keyboardNavigation]=\"currentOptions?.previewKeyboardNavigation\" \n        [animation]=\"currentOptions?.previewAnimation\" \n        [autoPlay]=\"currentOptions?.previewAutoPlay\" \n        [autoPlayInterval]=\"currentOptions?.previewAutoPlayInterval\" \n        [autoPlayPauseOnHover]=\"currentOptions?.previewAutoPlayPauseOnHover\" \n        [infinityMove]=\"currentOptions?.imageInfinityMove\" \n        [zoom]=\"currentOptions?.previewZoom\" \n        [zoomStep]=\"currentOptions?.previewZoomStep\" \n        [zoomMax]=\"currentOptions?.previewZoomMax\" \n        [zoomMin]=\"currentOptions?.previewZoomMin\" \n        [zoomInIcon]=\"currentOptions?.zoomInIcon\" \n        [zoomOutIcon]=\"currentOptions?.zoomOutIcon\" \n        [actions]=\"currentOptions?.actions\" \n        [rotate]=\"currentOptions?.previewRotate\" \n        [rotateLeftIcon]=\"currentOptions?.rotateLeftIcon\" \n        [rotateRightIcon]=\"currentOptions?.rotateRightIcon\" \n        [download]=\"currentOptions?.previewDownload\" \n        [downloadIcon]=\"currentOptions?.downloadIcon\" \n        [bullets]=\"currentOptions?.previewBullets\" \n        (onClose)=\"onPreviewClose()\" \n        (onOpen)=\"onPreviewOpen()\" \n        (onActiveChange)=\"previewSelect($event)\" \n        [class.ngx-gallery-active]=\"previewEnabled\" \n        [showDescription]=\"currentOptions?.imageDescription\">\n        </ngx-gallery-preview>\n    </div>\n    ",
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
export { NgxGalleryComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWdhbGxlcnkuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmVvLWNhcm91c2VsLyIsInNvdXJjZXMiOlsibGliL25neC1nYWxsZXJ5LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLFlBQVksRUFBRSxTQUFTLEVBQzlDLFdBQVcsRUFBVyxVQUFVLEVBQWlCLE1BQU0sRUFBRSxZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFHakcsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFDN0UsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFDekUsT0FBTyxFQUFFLDZCQUE2QixFQUFFLE1BQU0sb0NBQW9DLENBQUM7QUFDbkYsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFFdkUsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFFaEUsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFDOUQsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFFM0U7SUFtSEksNkJBQW9CLFNBQXFCO1FBQXJCLGNBQVMsR0FBVCxTQUFTLENBQVk7UUExRC9CLGdCQUFXLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUNqQyxXQUFNLEdBQUcsSUFBSSxZQUFZLEVBQThDLENBQUM7UUFDeEUsZ0JBQVcsR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBQ2pDLGlCQUFZLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUNsQyxrQkFBYSxHQUFHLElBQUksWUFBWSxFQUE4QyxDQUFDO1FBZ0N6RixvQkFBZSxHQUFHLENBQUMsQ0FBQztRQUVwQixrQkFBYSxHQUFHLENBQUMsQ0FBQztRQUtWLGVBQVUsR0FBdUIsU0FBUyxDQUFDO1FBQzNDLG1CQUFjLEdBQXVCLFNBQVMsQ0FBQztJQWNYLENBQUM7Ozs7SUFFN0Msc0NBQVE7OztJQUFSOztZQUNRLFdBQVcsR0FBRyxDQUFDO2dCQUNuQixLQUFLLEVBQUUsSUFBSSxDQUFDLFdBQVc7Z0JBQ3ZCLE1BQU0sRUFBRSxJQUFJLENBQUMsWUFBWTtnQkFDekIsVUFBVSxFQUFFLElBQUksQ0FBQyxnQkFBZ0I7Z0JBQ2pDLGlCQUFpQixFQUFFLElBQUksQ0FBQyx1QkFBdUI7Z0JBQy9DLFVBQVUsRUFBRSxJQUFJLENBQUMsZ0JBQWdCO2dCQUNqQyxnQkFBZ0IsRUFBRSxJQUFJLENBQUMsc0JBQXNCO2dCQUM3QyxXQUFXLEVBQUUsSUFBSSxDQUFDLGlCQUFpQjtnQkFDbkMsZ0JBQWdCLEVBQUUsSUFBSSxDQUFDLHNCQUFzQjtnQkFDN0MsYUFBYSxFQUFFLElBQUksQ0FBQyxtQkFBbUI7Z0JBQ3ZDLFVBQVUsRUFBRSxJQUFJLENBQUMsZ0JBQWdCO2dCQUNqQyxlQUFlLEVBQUUsSUFBSSxDQUFDLHFCQUFxQjtnQkFDM0MsWUFBWSxFQUFFLElBQUksQ0FBQyxrQkFBa0I7Z0JBQ3JDLGFBQWEsRUFBRSxJQUFJLENBQUMsbUJBQW1CO2dCQUN2QyxxQkFBcUIsRUFBRSxJQUFJLENBQUMsMkJBQTJCO2dCQUN2RCx5QkFBeUIsRUFBRSxJQUFJLENBQUMsK0JBQStCO2dCQUMvRCxpQkFBaUIsRUFBRSxJQUFJLENBQUMsdUJBQXVCO2dCQUMvQyxPQUFPLEVBQUUsSUFBSSxDQUFDLGFBQWE7Z0JBQzNCLGFBQWEsRUFBRSxJQUFJLENBQUMsbUJBQW1CO2dCQUN2QyxhQUFhLEVBQUUsSUFBSSxDQUFDLG1CQUFtQjtnQkFDdkMscUJBQXFCLEVBQUUsSUFBSSxDQUFDLHFCQUFxQjtnQkFDakQscUJBQXFCLEVBQUUsSUFBSSxDQUFDLHFCQUFxQjthQUNsRCxDQUFDO1FBRUEsd0VBQXdFO1FBQ3hFLElBQUksQ0FBQyxPQUFPLEdBQUcsV0FBVyxDQUFDLEdBQUc7Ozs7UUFBQyxVQUFDLEdBQUcsSUFBSyxPQUFBLElBQUksaUJBQWlCLENBQUMsR0FBRyxDQUFDLEVBQTFCLENBQTBCLEVBQUMsQ0FBQztRQUVwRSxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDbkIsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztRQUNsQixJQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7UUFDdEIsSUFBSSxJQUFJLENBQUMsY0FBYyxFQUFFO1lBQ3JCLElBQUksQ0FBQyxhQUFhLEdBQUcsbUJBQVEsSUFBSSxDQUFDLGNBQWMsQ0FBQyxVQUFVLEVBQUEsQ0FBQztTQUMvRDtJQUNMLENBQUM7Ozs7SUFFRCx1Q0FBUzs7O0lBQVQ7UUFDSSxJQUFJLElBQUksQ0FBQyxNQUFNLEtBQUssU0FBUyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEtBQUssSUFBSSxDQUFDLGVBQWUsQ0FBQztlQUN2RSxDQUFDLElBQUksQ0FBQyxNQUFNLEtBQUssSUFBSSxDQUFDLFNBQVMsQ0FBQyxFQUFFO1lBQ3JDLElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUM7WUFDMUMsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDO1lBQzdCLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztZQUNsQixJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7WUFFakIsSUFBSSxJQUFJLENBQUMsTUFBTSxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxFQUFFO2dCQUNuQyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksRUFBRSxDQUFDO2FBQzNCO1lBRUQsSUFBSSxJQUFJLENBQUMsS0FBSyxFQUFFO2dCQUNaLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLG1CQUFRLElBQUksQ0FBQyxjQUFjLENBQUMsVUFBVSxFQUFBLENBQUMsQ0FBQzthQUM1RDtZQUVELElBQUksSUFBSSxDQUFDLGNBQWMsQ0FBQyxrQkFBa0IsSUFBSSxJQUFJLENBQUMsY0FBYyxDQUFDLFVBQVU7bUJBQ3JFLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxJQUFJLENBQUMsRUFBRTtnQkFDNUIsSUFBSSxDQUFDLGNBQWMsQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDO2dCQUN2QyxJQUFJLENBQUMsY0FBYyxDQUFDLFdBQVcsR0FBRyxLQUFLLENBQUM7YUFDM0M7WUFFRCxJQUFJLENBQUMsZUFBZSxFQUFFLENBQUM7U0FDMUI7SUFDTCxDQUFDOzs7O0lBRUQsNkNBQWU7OztJQUFmO1FBQ0ksSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO0lBQzFCLENBQUM7Ozs7SUFFOEIsc0NBQVE7OztJQUF2QztRQUFBLGlCQWtCQztRQWpCRyxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7UUFFckIsSUFBSSxJQUFJLENBQUMsY0FBYyxLQUFLLElBQUksQ0FBQyxVQUFVLEVBQUU7WUFDekMsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO1lBQ2xCLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQztTQUMxQjtRQUVELElBQUksSUFBSSxDQUFDLGNBQWMsSUFBSSxJQUFJLENBQUMsY0FBYyxDQUFDLFNBQVMsRUFBRTtZQUV0RCxJQUFJLElBQUksQ0FBQyxnQkFBZ0IsRUFBRTtnQkFDdkIsWUFBWSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO2FBQ3ZDO1lBRUQsSUFBSSxDQUFDLGdCQUFnQixHQUFHLFVBQVU7OztZQUFDO2dCQUMvQixLQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7WUFDMUIsQ0FBQyxHQUFFLEdBQUcsQ0FBQyxDQUFDO1NBQ1g7SUFDTCxDQUFDOzs7O0lBRUQsNENBQWM7OztJQUFkO1FBQ0ksT0FBTyxDQUFDLElBQUksQ0FBQyxjQUFjLElBQUksSUFBSSxDQUFDLGNBQWMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDO1lBQzVELElBQUksQ0FBQyxjQUFjLENBQUMsWUFBWSxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDO0lBQ3hELENBQUM7Ozs7SUFFRCxpREFBbUI7OztJQUFuQjtRQUNJLElBQUksSUFBSSxDQUFDLGNBQWMsSUFBSSxJQUFJLENBQUMsY0FBYyxDQUFDLEtBQUssRUFBRTtZQUNsRCxPQUFPLE9BQU8sR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLGlCQUFpQixHQUFHLE1BQU07a0JBQzdELElBQUksQ0FBQyxjQUFjLENBQUMsZ0JBQWdCLEdBQUcsS0FBSyxDQUFDO1NBQ2xEO2FBQU07WUFDSCxPQUFPLE1BQU0sQ0FBQztTQUNqQjtJQUNMLENBQUM7Ozs7SUFFRCxvREFBc0I7OztJQUF0QjtRQUNJLElBQUksSUFBSSxDQUFDLGNBQWMsSUFBSSxJQUFJLENBQUMsY0FBYyxDQUFDLE1BQU0sS0FBSyxnQkFBZ0IsQ0FBQyxnQkFBZ0IsRUFBRTtZQUN6RixPQUFPLElBQUksQ0FBQyxjQUFjLENBQUMsZ0JBQWdCLEdBQUcsSUFBSSxDQUFDO1NBQ3REO2FBQU07WUFDSCxPQUFPLEtBQUssQ0FBQztTQUNoQjtJQUNMLENBQUM7Ozs7SUFFRCx1REFBeUI7OztJQUF6QjtRQUNJLElBQUksSUFBSSxDQUFDLGNBQWMsSUFBSSxJQUFJLENBQUMsY0FBYyxDQUFDLE1BQU0sS0FBSyxnQkFBZ0IsQ0FBQyxhQUFhLEVBQUU7WUFDdEYsT0FBTyxJQUFJLENBQUMsY0FBYyxDQUFDLGdCQUFnQixHQUFHLElBQUksQ0FBQztTQUN0RDthQUFNO1lBQ0gsT0FBTyxLQUFLLENBQUM7U0FDaEI7SUFDTCxDQUFDOzs7OztJQUVELHlDQUFXOzs7O0lBQVgsVUFBWSxLQUFhO1FBQ3JCLElBQUksSUFBSSxDQUFDLGNBQWMsQ0FBQyxhQUFhLEVBQUU7WUFDbkMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDNUM7YUFBTTtZQUNILElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDO1lBQzNCLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQzVCO0lBQ0wsQ0FBQzs7OztJQUVELDJDQUFhOzs7SUFBYjtRQUNJLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxFQUFFLENBQUM7UUFFeEIsSUFBSSxJQUFJLENBQUMsS0FBSyxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxFQUFFO1lBQ25DLElBQUksQ0FBQyxLQUFLLENBQUMsWUFBWSxFQUFFLENBQUM7U0FDN0I7SUFDTCxDQUFDOzs7O0lBRUQsNENBQWM7OztJQUFkO1FBQ0ksSUFBSSxDQUFDLGNBQWMsR0FBRyxLQUFLLENBQUM7UUFDNUIsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUV6QixJQUFJLElBQUksQ0FBQyxLQUFLLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLEVBQUU7WUFDbkMsSUFBSSxDQUFDLEtBQUssQ0FBQyxhQUFhLEVBQUUsQ0FBQztTQUM5QjtJQUNMLENBQUM7Ozs7O0lBRUQsNkNBQWU7Ozs7SUFBZixVQUFnQixLQUFhO1FBQ3pCLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDdkIsQ0FBQzs7Ozs7SUFFRCxrREFBb0I7Ozs7SUFBcEIsVUFBcUIsS0FBYTtRQUM5QixJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBRW5CLElBQUksSUFBSSxDQUFDLGNBQWMsSUFBSSxJQUFJLENBQUMsY0FBYyxDQUFDLFVBQVUsSUFBSSxJQUFJLENBQUMsY0FBYyxDQUFDLE9BQU87ZUFDakYsQ0FBQyxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsS0FBSyxJQUFJLElBQUksQ0FBQyxjQUFjLENBQUMsd0JBQXdCLENBQUMsRUFBRTtZQUNqRixJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztTQUN4QztJQUNMLENBQUM7Ozs7O0lBRUQsa0NBQUk7Ozs7SUFBSixVQUFLLEtBQWE7UUFDZCxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3ZCLENBQUM7Ozs7SUFFRCxzQ0FBUTs7O0lBQVI7UUFDSSxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQzFCLENBQUM7Ozs7SUFFRCxzQ0FBUTs7O0lBQVI7UUFDSSxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQzFCLENBQUM7Ozs7SUFFRCx5Q0FBVzs7O0lBQVg7UUFDSSxJQUFJLElBQUksQ0FBQyxNQUFNLElBQUksSUFBSSxDQUFDLGNBQWMsRUFBRTtZQUNwQyxPQUFPLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxpQkFBaUIsSUFBSSxJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztnQkFDekYsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDO1NBQ3RCO2FBQU07WUFDSCxPQUFPLEtBQUssQ0FBQztTQUNoQjtJQUNMLENBQUM7Ozs7SUFFRCx5Q0FBVzs7O0lBQVg7UUFDSSxJQUFJLElBQUksQ0FBQyxNQUFNLElBQUksSUFBSSxDQUFDLGNBQWMsRUFBRTtZQUNwQyxPQUFPLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxpQkFBaUIsSUFBSSxJQUFJLENBQUMsYUFBYSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQztTQUMzRjthQUFNO1lBQ0gsT0FBTyxLQUFLLENBQUM7U0FDaEI7SUFDTCxDQUFDOzs7OztJQUVELDJDQUFhOzs7O0lBQWIsVUFBYyxLQUFhO1FBQ3ZCLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLEVBQUMsS0FBSyxPQUFBLEVBQUUsS0FBSyxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLEVBQUMsQ0FBQyxDQUFDO0lBQ2hFLENBQUM7Ozs7SUFFRCxpREFBbUI7OztJQUFuQjtRQUNJLElBQUksQ0FBQyxVQUFVLENBQUMsU0FBUyxFQUFFLENBQUM7SUFDaEMsQ0FBQzs7OztJQUVELGdEQUFrQjs7O0lBQWxCO1FBQ0ksSUFBSSxDQUFDLFVBQVUsQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUMvQixDQUFDOzs7O0lBRUQsb0RBQXNCOzs7SUFBdEI7UUFDSSxPQUFPLElBQUksQ0FBQyxVQUFVLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDMUMsQ0FBQzs7OztJQUVELG1EQUFxQjs7O0lBQXJCO1FBQ0ksT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQ3pDLENBQUM7Ozs7O0lBRU8sNkNBQWU7Ozs7SUFBdkI7UUFDSSxJQUFJLElBQUksQ0FBQyxVQUFVLEVBQUU7WUFDakIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsbUJBQVEsSUFBSSxDQUFDLGNBQWMsQ0FBQyxVQUFVLEVBQUEsQ0FBQyxDQUFDO1NBQ2pFO0lBQ0wsQ0FBQzs7Ozs7O0lBRU8sb0NBQU07Ozs7O0lBQWQsVUFBZSxLQUFhO1FBQ3hCLElBQUksQ0FBQyxhQUFhLEdBQUcsS0FBSyxDQUFDO1FBRTNCLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDO1lBQ2IsS0FBSyxPQUFBO1lBQ0wsS0FBSyxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDO1NBQzVCLENBQUMsQ0FBQztJQUNQLENBQUM7Ozs7O0lBRU8sNENBQWM7Ozs7SUFBdEI7UUFDSSxJQUFJLElBQUksQ0FBQyxjQUFjLElBQUksSUFBSSxDQUFDLGNBQWMsQ0FBQyxTQUFTLEVBQUU7WUFDdEQsSUFBSSxDQUFDLEtBQUssR0FBRyxRQUFRLENBQUMsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUM7WUFDOUMsSUFBSSxDQUFDLElBQUksR0FBRyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFdBQVc7Z0JBQ3BDLElBQUksQ0FBQyxTQUFTLENBQUMsYUFBYSxDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUM7U0FDdkU7SUFDTCxDQUFDOzs7OztJQUVPLHVDQUFTOzs7O0lBQWpCO1FBQ0ksSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUc7Ozs7UUFBQyxVQUFDLEdBQUcsV0FBSyxtQkFBUSxHQUFHLENBQUMsS0FBSyxFQUFBLEdBQUEsRUFBQyxDQUFDO1FBQy9ELElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHOzs7OztRQUFDLFVBQUMsR0FBRyxFQUFFLENBQUMsSUFBSyxPQUFBLElBQUksc0JBQXNCLENBQUM7WUFDdkUsR0FBRyxFQUFFLEdBQUcsQ0FBQyxNQUFNO1lBQ2YsS0FBSyxFQUFFLENBQUM7U0FDWCxDQUFDLEVBSDhDLENBRzlDLEVBQUMsQ0FBQztRQUNKLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHOzs7O1FBQUMsVUFBQyxHQUFHLFdBQUssbUJBQVEsR0FBRyxDQUFDLEdBQUcsRUFBQSxHQUFBLEVBQUMsQ0FBQztRQUMzRCxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRzs7OztRQUFDLFVBQUMsR0FBRyxXQUFLLG1CQUFRLEdBQUcsQ0FBQyxXQUFXLEVBQUEsR0FBQSxFQUFDLENBQUM7UUFDdEUsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUc7Ozs7UUFBQyxVQUFDLEdBQUcsV0FBSyxtQkFBUSxHQUFHLENBQUMsR0FBRyxFQUFBLEdBQUEsRUFBQyxDQUFDO1FBQ3ZELElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHOzs7O1FBQUMsVUFBQyxHQUFHLFdBQUssbUJBQVEsR0FBRyxDQUFDLEtBQUssRUFBQSxHQUFBLEVBQUMsQ0FBQztJQUM5RCxDQUFDOzs7OztJQUVPLDJDQUFhOzs7O0lBQXJCO1FBQ0ksSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDOztZQUNsQyxXQUFXO1FBRWYsSUFBSSxPQUFPLE1BQU0sS0FBSyxXQUFXLEVBQUU7WUFDL0IsV0FBVyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTTs7OztZQUFDLFVBQUMsR0FBRyxJQUFLLE9BQUEsR0FBRyxDQUFDLFVBQVUsSUFBSSxNQUFNLENBQUMsVUFBVSxFQUFuQyxDQUFtQyxFQUFDO2lCQUMxRSxHQUFHOzs7O1lBQUMsVUFBQyxHQUFHLElBQUssT0FBQSxHQUFHLENBQUMsVUFBVSxFQUFkLENBQWMsRUFBQyxDQUFDO1NBQ3JDO1FBRUQsSUFBSSxXQUFXLElBQUksV0FBVyxDQUFDLE1BQU0sRUFBRTtZQUNuQyxJQUFJLENBQUMsVUFBVSxHQUFHLFdBQVcsQ0FBQyxHQUFHLEVBQUUsQ0FBQztTQUN2QzthQUFNO1lBQ0gsSUFBSSxDQUFDLFVBQVUsR0FBRyxTQUFTLENBQUM7U0FDL0I7SUFDTCxDQUFDOzs7OztJQUVPLHlDQUFXOzs7O0lBQW5CO1FBQ0ksSUFBSSxDQUFDLE9BQU8sb0JBQ0wsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNOzs7O1FBQUMsVUFBQyxDQUFDLElBQUssT0FBQSxDQUFDLENBQUMsVUFBVSxLQUFLLFNBQVMsRUFBMUIsQ0FBMEIsRUFBQyxFQUN0RCxJQUFJLENBQUMsT0FBTzthQUNWLE1BQU07Ozs7UUFBQyxVQUFDLENBQUMsSUFBSyxPQUFBLENBQUMsQ0FBQyxVQUFVLEtBQUssU0FBUyxFQUExQixDQUEwQixFQUFDO2FBQ3pDLElBQUk7Ozs7O1FBQUMsVUFBQyxDQUFDLEVBQUUsQ0FBQyxJQUFLLE9BQUEsQ0FBQyxDQUFDLFVBQVUsR0FBRyxDQUFDLENBQUMsVUFBVSxFQUEzQixDQUEyQixFQUFDLENBQ25ELENBQUM7SUFDTixDQUFDOzs7OztJQUVPLHdDQUFVOzs7O0lBQWxCO1FBQUEsaUJBU0M7UUFSRyxJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksaUJBQWlCLENBQUMsRUFBRSxDQUFDLENBQUM7UUFFaEQsSUFBSSxDQUFDLE9BQU87YUFDUCxNQUFNOzs7O1FBQUMsVUFBQyxHQUFHLElBQUssT0FBQSxHQUFHLENBQUMsVUFBVSxLQUFLLFNBQVMsSUFBSSxHQUFHLENBQUMsVUFBVSxJQUFJLEtBQUksQ0FBQyxVQUFVLEVBQWpFLENBQWlFLEVBQUM7YUFDbEYsR0FBRzs7OztRQUFDLFVBQUMsR0FBRyxJQUFLLE9BQUEsS0FBSSxDQUFDLGNBQWMsQ0FBQyxLQUFJLENBQUMsY0FBYyxFQUFFLEdBQUcsQ0FBQyxFQUE3QyxDQUE2QyxFQUFDLENBQUM7UUFFakUsSUFBSSxDQUFDLEtBQUssR0FBRyxtQkFBUSxJQUFJLENBQUMsY0FBYyxDQUFDLEtBQUssRUFBQSxDQUFDO1FBQy9DLElBQUksQ0FBQyxNQUFNLEdBQUcsbUJBQVEsSUFBSSxDQUFDLGNBQWMsQ0FBQyxNQUFNLEVBQUEsQ0FBQztJQUNyRCxDQUFDOzs7Ozs7O0lBRU8sNENBQWM7Ozs7OztJQUF0QixVQUF1QixLQUF3QixFQUFFLE1BQXlCO1FBQ3RFLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsR0FBRzs7OztRQUFDLFVBQUMsR0FBRyxJQUFLLE9BQUEsS0FBSyxDQUFDLEdBQUcsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxHQUFHLENBQUMsS0FBSyxTQUFTLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxFQUFqRSxDQUFpRSxFQUFDLENBQUM7SUFDeEcsQ0FBQzs7Z0JBM1lKLFNBQVMsU0FBQztvQkFDUCxRQUFRLEVBQUUsYUFBYTtvQkFDdkIsUUFBUSxFQUFFLHNoSkErQ1Q7b0JBRUQsU0FBUyxFQUFFLENBQUMsdUJBQXVCLENBQUM7O2lCQUN2Qzs7OztnQkFqRXlCLFVBQVU7OzswQkFtRS9CLEtBQUs7eUJBQ0wsS0FBSzs4QkFFTCxNQUFNO3lCQUNOLE1BQU07OEJBQ04sTUFBTTsrQkFDTixNQUFNO2dDQUNOLE1BQU07OEJBRU4sS0FBSzsrQkFDTCxLQUFLOzBDQUNMLEtBQUs7bUNBQ0wsS0FBSzt5Q0FDTCxLQUFLO29DQUNMLEtBQUs7eUNBQ0wsS0FBSztzQ0FDTCxLQUFLO21DQUNMLEtBQUs7d0NBQ0wsS0FBSztxQ0FDTCxLQUFLO3NDQUNMLEtBQUs7OENBQ0wsS0FBSztrREFDTCxLQUFLOzBDQUNMLEtBQUs7Z0NBQ0wsS0FBSztzQ0FDTCxLQUFLO3NDQUNMLEtBQUs7d0NBQ0wsS0FBSzt3Q0FDTCxLQUFLO21DQUNMLEtBQUs7MEJBc0JMLFNBQVMsU0FBQywwQkFBMEI7d0JBRXBDLFNBQVMsU0FBQyx3QkFBd0I7NkJBRWxDLFNBQVMsU0FBQyw2QkFBNkI7d0JBRXZDLFdBQVcsU0FBQyxhQUFhO3lCQUN6QixXQUFXLFNBQUMsY0FBYzt1QkFDMUIsV0FBVyxTQUFDLFlBQVk7MkJBdUV4QixZQUFZLFNBQUMsZUFBZTs7SUFvTmpDLDBCQUFDO0NBQUEsQUE1WUQsSUE0WUM7U0F2VlksbUJBQW1COzs7SUFDNUIsc0NBQXNDOztJQUN0QyxxQ0FBbUM7O0lBRW5DLDBDQUEyQzs7SUFDM0MscUNBQWtGOztJQUNsRiwwQ0FBMkM7O0lBQzNDLDJDQUE0Qzs7SUFDNUMsNENBQXlGOztJQUV6RiwwQ0FBNkI7O0lBQzdCLDJDQUE4Qjs7SUFDOUIsc0RBQXlDOztJQUN6QywrQ0FBa0M7O0lBQ2xDLHFEQUF5Qzs7SUFDekMsZ0RBQW9DOztJQUNwQyxxREFBeUM7O0lBQ3pDLGtEQUFzQzs7SUFDdEMsK0NBQW1DOztJQUNuQyxvREFBd0M7O0lBQ3hDLGlEQUFxQzs7SUFDckMsa0RBQXNDOztJQUN0QywwREFBNkM7O0lBQzdDLDhEQUFrRDs7SUFDbEQsc0RBQTBDOztJQUMxQyw0Q0FBZ0M7O0lBQ2hDLGtEQUFxQzs7SUFDckMsa0RBQXFDOztJQUNyQyxvREFBdUM7O0lBQ3ZDLG9EQUF1Qzs7SUFDdkMsK0NBQW1DOztJQUVyQywwQ0FBMEM7O0lBQ3hDLDJDQUF1Qzs7SUFDdkMsd0NBQXdDOztJQUN4QywyQ0FBdUI7O0lBQ3ZCLG9DQUFnQjs7SUFDaEIscUNBQWlCOztJQUVqQix3Q0FBNkI7O0lBQzdCLDhDQUFvQjs7SUFFcEIsNENBQWtCOztJQUNsQiw2Q0FBd0I7O0lBRXhCLDZDQUFrQzs7Ozs7SUFFbEMseUNBQW1EOzs7OztJQUNuRCw2Q0FBdUQ7Ozs7O0lBQ3ZELCtDQUE4Qjs7SUFHOUIsc0NBQTJFOztJQUUzRSxvQ0FBcUU7O0lBRXJFLHlDQUFvRjs7SUFFcEYsb0NBQTBDOztJQUMxQyxxQ0FBNEM7O0lBQzVDLG1DQUF3Qzs7Ozs7SUFFNUIsd0NBQTZCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgSG9zdExpc3RlbmVyLCBWaWV3Q2hpbGQsIE9uSW5pdCxcbiAgICBIb3N0QmluZGluZywgRG9DaGVjaywgRWxlbWVudFJlZiwgQWZ0ZXJWaWV3SW5pdCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFNhZmVSZXNvdXJjZVVybCB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xuXG5pbXBvcnQgeyBOZ3hHYWxsZXJ5UHJldmlld0NvbXBvbmVudCB9IGZyb20gJy4vbmd4LWdhbGxlcnktcHJldmlldy5jb21wb25lbnQnO1xuaW1wb3J0IHsgTmd4R2FsbGVyeUltYWdlQ29tcG9uZW50IH0gZnJvbSAnLi9uZ3gtZ2FsbGVyeS1pbWFnZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgTmd4R2FsbGVyeVRodW1ibmFpbHNDb21wb25lbnQgfSBmcm9tICcuL25neC1nYWxsZXJ5LXRodW1ibmFpbHMuY29tcG9uZW50JztcbmltcG9ydCB7IE5neEdhbGxlcnlIZWxwZXJTZXJ2aWNlIH0gZnJvbSAnLi9uZ3gtZ2FsbGVyeS1oZWxwZXIuc2VydmljZSc7XG5cbmltcG9ydCB7IE5neEdhbGxlcnlPcHRpb25zIH0gZnJvbSAnLi9uZ3gtZ2FsbGVyeS1vcHRpb25zLm1vZGVsJztcbmltcG9ydCB7IE5neEdhbGxlcnlJbWFnZSB9IGZyb20gJy4vbmd4LWdhbGxlcnktaW1hZ2UubW9kZWwnO1xuaW1wb3J0IHsgTmd4R2FsbGVyeUxheW91dCB9IGZyb20gJy4vbmd4LWdhbGxlcnktbGF5b3V0Lm1vZGVsJztcbmltcG9ydCB7IE5neEdhbGxlcnlPcmRlcmVkSW1hZ2UgfSBmcm9tICcuL25neC1nYWxsZXJ5LW9yZGVyZWQtaW1hZ2UubW9kZWwnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ25neC1nYWxsZXJ5JyxcbiAgICB0ZW1wbGF0ZTogYFxuICAgIDxkaXYgY2xhc3M9XCJuZ3gtZ2FsbGVyeS1sYXlvdXQge3tjdXJyZW50T3B0aW9ucz8ubGF5b3V0fX1cIj5cbiAgICAgICAgPG5neC1nYWxsZXJ5LWltYWdlICpuZ0lmPVwiY3VycmVudE9wdGlvbnM/LmltYWdlXCIgW3N0eWxlLmhlaWdodF09XCJnZXRJbWFnZUhlaWdodCgpXCIgW2ltYWdlc109XCJtZWRpdW1JbWFnZXNcIiBbY2xpY2thYmxlXT1cImN1cnJlbnRPcHRpb25zPy5wcmV2aWV3XCIgW3NlbGVjdGVkSW5kZXhdPVwic2VsZWN0ZWRJbmRleFwiIFthcnJvd3NdPVwiY3VycmVudE9wdGlvbnM/LmltYWdlQXJyb3dzXCIgW2Fycm93c0F1dG9IaWRlXT1cImN1cnJlbnRPcHRpb25zPy5pbWFnZUFycm93c0F1dG9IaWRlXCIgW2Fycm93UHJldkljb25dPVwiY3VycmVudE9wdGlvbnM/LmFycm93UHJldkljb25cIiBbYXJyb3dOZXh0SWNvbl09XCJjdXJyZW50T3B0aW9ucz8uYXJyb3dOZXh0SWNvblwiIFtzd2lwZV09XCJjdXJyZW50T3B0aW9ucz8uaW1hZ2VTd2lwZVwiIFthbmltYXRpb25dPVwiY3VycmVudE9wdGlvbnM/LmltYWdlQW5pbWF0aW9uXCIgW3NpemVdPVwiY3VycmVudE9wdGlvbnM/LmltYWdlU2l6ZVwiIFthdXRvUGxheV09XCJjdXJyZW50T3B0aW9ucz8uaW1hZ2VBdXRvUGxheVwiIFthdXRvUGxheUludGVydmFsXT1cImN1cnJlbnRPcHRpb25zPy5pbWFnZUF1dG9QbGF5SW50ZXJ2YWxcIiBbYXV0b1BsYXlQYXVzZU9uSG92ZXJdPVwiY3VycmVudE9wdGlvbnM/LmltYWdlQXV0b1BsYXlQYXVzZU9uSG92ZXJcIiBbaW5maW5pdHlNb3ZlXT1cImN1cnJlbnRPcHRpb25zPy5pbWFnZUluZmluaXR5TW92ZVwiICBbbGF6eUxvYWRpbmddPVwiY3VycmVudE9wdGlvbnM/LmxhenlMb2FkaW5nXCIgW2FjdGlvbnNdPVwiY3VycmVudE9wdGlvbnM/LmltYWdlQWN0aW9uc1wiIFtkZXNjcmlwdGlvbnNdPVwiZGVzY3JpcHRpb25zXCIgW3Nob3dEZXNjcmlwdGlvbl09XCJjdXJyZW50T3B0aW9ucz8uaW1hZ2VEZXNjcmlwdGlvblwiIFtidWxsZXRzXT1cImN1cnJlbnRPcHRpb25zPy5pbWFnZUJ1bGxldHNcIiAob25DbGljayk9XCJvcGVuUHJldmlldygkZXZlbnQpXCIgKG9uQWN0aXZlQ2hhbmdlKT1cInNlbGVjdEZyb21JbWFnZSgkZXZlbnQpXCI+PC9uZ3gtZ2FsbGVyeS1pbWFnZT5cblxuICAgICAgICA8bmd4LWdhbGxlcnktdGh1bWJuYWlscyAqbmdJZj1cImN1cnJlbnRPcHRpb25zPy50aHVtYm5haWxzXCIgW3N0eWxlLm1hcmdpblRvcF09XCJnZXRUaHVtYm5haWxzTWFyZ2luVG9wKClcIiBbc3R5bGUubWFyZ2luQm90dG9tXT1cImdldFRodW1ibmFpbHNNYXJnaW5Cb3R0b20oKVwiIFtzdHlsZS5oZWlnaHRdPVwiZ2V0VGh1bWJuYWlsc0hlaWdodCgpXCIgW2ltYWdlc109XCJzbWFsbEltYWdlc1wiIFtsaW5rc109XCJjdXJyZW50T3B0aW9ucz8udGh1bWJuYWlsc0FzTGlua3MgPyBsaW5rcyA6IFtdXCIgW2xhYmVsc109XCJsYWJlbHNcIiBbbGlua1RhcmdldF09XCJjdXJyZW50T3B0aW9ucz8ubGlua1RhcmdldFwiIFtzZWxlY3RlZEluZGV4XT1cInNlbGVjdGVkSW5kZXhcIiBbY29sdW1uc109XCJjdXJyZW50T3B0aW9ucz8udGh1bWJuYWlsc0NvbHVtbnNcIiBbcm93c109XCJjdXJyZW50T3B0aW9ucz8udGh1bWJuYWlsc1Jvd3NcIiBbbWFyZ2luXT1cImN1cnJlbnRPcHRpb25zPy50aHVtYm5haWxNYXJnaW5cIiBbYXJyb3dzXT1cImN1cnJlbnRPcHRpb25zPy50aHVtYm5haWxzQXJyb3dzXCIgW2Fycm93c0F1dG9IaWRlXT1cImN1cnJlbnRPcHRpb25zPy50aHVtYm5haWxzQXJyb3dzQXV0b0hpZGVcIiBbYXJyb3dQcmV2SWNvbl09XCJjdXJyZW50T3B0aW9ucz8uYXJyb3dQcmV2SWNvblwiIFthcnJvd05leHRJY29uXT1cImN1cnJlbnRPcHRpb25zPy5hcnJvd05leHRJY29uXCIgW2NsaWNrYWJsZV09XCJjdXJyZW50T3B0aW9ucz8uaW1hZ2UgfHwgY3VycmVudE9wdGlvbnM/LnByZXZpZXdcIiBbc3dpcGVdPVwiY3VycmVudE9wdGlvbnM/LnRodW1ibmFpbHNTd2lwZVwiIFtzaXplXT1cImN1cnJlbnRPcHRpb25zPy50aHVtYm5haWxTaXplXCIgW21vdmVTaXplXT1cImN1cnJlbnRPcHRpb25zPy50aHVtYm5haWxzTW92ZVNpemVcIiBbb3JkZXJdPVwiY3VycmVudE9wdGlvbnM/LnRodW1ibmFpbHNPcmRlclwiIFtyZW1haW5pbmdDb3VudF09XCJjdXJyZW50T3B0aW9ucz8udGh1bWJuYWlsc1JlbWFpbmluZ0NvdW50XCIgW2xhenlMb2FkaW5nXT1cImN1cnJlbnRPcHRpb25zPy5sYXp5TG9hZGluZ1wiIFthY3Rpb25zXT1cImN1cnJlbnRPcHRpb25zPy50aHVtYm5haWxBY3Rpb25zXCIgIChvbkFjdGl2ZUNoYW5nZSk9XCJzZWxlY3RGcm9tVGh1bWJuYWlscygkZXZlbnQpXCI+PC9uZ3gtZ2FsbGVyeS10aHVtYm5haWxzPlxuXG4gICAgICAgIDxuZ3gtZ2FsbGVyeS1wcmV2aWV3IFxuICAgICAgICBbaW1hZ2VzXT1cImJpZ0ltYWdlc1wiIFxuICAgICAgICBbZGVzY3JpcHRpb25zXT1cImRlc2NyaXB0aW9uc1wiIFxuICAgICAgICBbYXJyb3dQcmV2SWNvbl09XCJjdXJyZW50T3B0aW9ucz8ucHJldmlld1ByZXZJY29uT3B0aW9uXCIgXG4gICAgICAgIFthcnJvd05leHRJY29uXT1cImN1cnJlbnRPcHRpb25zPy5wcmV2aWV3TmV4dEljb25PcHRpb25cIiBcbiAgICAgICAgW2Nsb3NlSWNvbl09XCJjdXJyZW50T3B0aW9ucz8uY2xvc2VJY29uXCIgXG4gICAgICAgIFtmdWxsc2NyZWVuSWNvbl09XCJjdXJyZW50T3B0aW9ucz8uZnVsbHNjcmVlbkljb25cIiBcbiAgICAgICAgW3NwaW5uZXJJY29uXT1cImN1cnJlbnRPcHRpb25zPy5zcGlubmVySWNvblwiIFxuICAgICAgICBbYXJyb3dzXT1cImN1cnJlbnRPcHRpb25zPy5wcmV2aWV3QXJyb3dzXCIgXG4gICAgICAgIFthcnJvd3NBdXRvSGlkZV09XCJjdXJyZW50T3B0aW9ucz8ucHJldmlld0Fycm93c0F1dG9IaWRlXCIgXG4gICAgICAgIFtzd2lwZV09XCJjdXJyZW50T3B0aW9ucz8ucHJldmlld1N3aXBlXCIgXG4gICAgICAgIFtmdWxsc2NyZWVuXT1cImN1cnJlbnRPcHRpb25zPy5wcmV2aWV3RnVsbHNjcmVlblwiIFxuICAgICAgICBbZm9yY2VGdWxsc2NyZWVuXT1cImN1cnJlbnRPcHRpb25zPy5wcmV2aWV3Rm9yY2VGdWxsc2NyZWVuXCIgXG4gICAgICAgIFtjbG9zZU9uQ2xpY2tdPVwiY3VycmVudE9wdGlvbnM/LnByZXZpZXdDbG9zZU9uQ2xpY2tcIiBcbiAgICAgICAgW2Nsb3NlT25Fc2NdPVwiY3VycmVudE9wdGlvbnM/LnByZXZpZXdDbG9zZU9uRXNjXCIgXG4gICAgICAgIFtrZXlib2FyZE5hdmlnYXRpb25dPVwiY3VycmVudE9wdGlvbnM/LnByZXZpZXdLZXlib2FyZE5hdmlnYXRpb25cIiBcbiAgICAgICAgW2FuaW1hdGlvbl09XCJjdXJyZW50T3B0aW9ucz8ucHJldmlld0FuaW1hdGlvblwiIFxuICAgICAgICBbYXV0b1BsYXldPVwiY3VycmVudE9wdGlvbnM/LnByZXZpZXdBdXRvUGxheVwiIFxuICAgICAgICBbYXV0b1BsYXlJbnRlcnZhbF09XCJjdXJyZW50T3B0aW9ucz8ucHJldmlld0F1dG9QbGF5SW50ZXJ2YWxcIiBcbiAgICAgICAgW2F1dG9QbGF5UGF1c2VPbkhvdmVyXT1cImN1cnJlbnRPcHRpb25zPy5wcmV2aWV3QXV0b1BsYXlQYXVzZU9uSG92ZXJcIiBcbiAgICAgICAgW2luZmluaXR5TW92ZV09XCJjdXJyZW50T3B0aW9ucz8uaW1hZ2VJbmZpbml0eU1vdmVcIiBcbiAgICAgICAgW3pvb21dPVwiY3VycmVudE9wdGlvbnM/LnByZXZpZXdab29tXCIgXG4gICAgICAgIFt6b29tU3RlcF09XCJjdXJyZW50T3B0aW9ucz8ucHJldmlld1pvb21TdGVwXCIgXG4gICAgICAgIFt6b29tTWF4XT1cImN1cnJlbnRPcHRpb25zPy5wcmV2aWV3Wm9vbU1heFwiIFxuICAgICAgICBbem9vbU1pbl09XCJjdXJyZW50T3B0aW9ucz8ucHJldmlld1pvb21NaW5cIiBcbiAgICAgICAgW3pvb21Jbkljb25dPVwiY3VycmVudE9wdGlvbnM/Lnpvb21Jbkljb25cIiBcbiAgICAgICAgW3pvb21PdXRJY29uXT1cImN1cnJlbnRPcHRpb25zPy56b29tT3V0SWNvblwiIFxuICAgICAgICBbYWN0aW9uc109XCJjdXJyZW50T3B0aW9ucz8uYWN0aW9uc1wiIFxuICAgICAgICBbcm90YXRlXT1cImN1cnJlbnRPcHRpb25zPy5wcmV2aWV3Um90YXRlXCIgXG4gICAgICAgIFtyb3RhdGVMZWZ0SWNvbl09XCJjdXJyZW50T3B0aW9ucz8ucm90YXRlTGVmdEljb25cIiBcbiAgICAgICAgW3JvdGF0ZVJpZ2h0SWNvbl09XCJjdXJyZW50T3B0aW9ucz8ucm90YXRlUmlnaHRJY29uXCIgXG4gICAgICAgIFtkb3dubG9hZF09XCJjdXJyZW50T3B0aW9ucz8ucHJldmlld0Rvd25sb2FkXCIgXG4gICAgICAgIFtkb3dubG9hZEljb25dPVwiY3VycmVudE9wdGlvbnM/LmRvd25sb2FkSWNvblwiIFxuICAgICAgICBbYnVsbGV0c109XCJjdXJyZW50T3B0aW9ucz8ucHJldmlld0J1bGxldHNcIiBcbiAgICAgICAgKG9uQ2xvc2UpPVwib25QcmV2aWV3Q2xvc2UoKVwiIFxuICAgICAgICAob25PcGVuKT1cIm9uUHJldmlld09wZW4oKVwiIFxuICAgICAgICAob25BY3RpdmVDaGFuZ2UpPVwicHJldmlld1NlbGVjdCgkZXZlbnQpXCIgXG4gICAgICAgIFtjbGFzcy5uZ3gtZ2FsbGVyeS1hY3RpdmVdPVwicHJldmlld0VuYWJsZWRcIiBcbiAgICAgICAgW3Nob3dEZXNjcmlwdGlvbl09XCJjdXJyZW50T3B0aW9ucz8uaW1hZ2VEZXNjcmlwdGlvblwiPlxuICAgICAgICA8L25neC1nYWxsZXJ5LXByZXZpZXc+XG4gICAgPC9kaXY+XG4gICAgYCxcbiAgICBzdHlsZVVybHM6IFsnLi9uZ3gtZ2FsbGVyeS5jb21wb25lbnQuc2NzcyddLFxuICAgIHByb3ZpZGVyczogW05neEdhbGxlcnlIZWxwZXJTZXJ2aWNlXVxufSlcbmV4cG9ydCBjbGFzcyBOZ3hHYWxsZXJ5Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBEb0NoZWNrLCBBZnRlclZpZXdJbml0ICAge1xuICAgIEBJbnB1dCgpIG9wdGlvbnM6IE5neEdhbGxlcnlPcHRpb25zW107XG4gICAgQElucHV0KCkgaW1hZ2VzOiBOZ3hHYWxsZXJ5SW1hZ2VbXTtcblxuICAgIEBPdXRwdXQoKSBpbWFnZXNSZWFkeSA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgICBAT3V0cHV0KCkgY2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjx7IGluZGV4OiBudW1iZXI7IGltYWdlOiBOZ3hHYWxsZXJ5SW1hZ2U7IH0+KCk7XG4gICAgQE91dHB1dCgpIHByZXZpZXdPcGVuID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICAgIEBPdXRwdXQoKSBwcmV2aWV3Q2xvc2UgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gICAgQE91dHB1dCgpIHByZXZpZXdDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPHsgaW5kZXg6IG51bWJlcjsgaW1hZ2U6IE5neEdhbGxlcnlJbWFnZTsgfT4oKTtcblxuICAgIEBJbnB1dCgpIHdpZHRoT3B0aW9uOiBzdHJpbmc7XG4gICAgQElucHV0KCkgaGVpZ2h0T3B0aW9uOiBzdHJpbmc7XG4gICAgQElucHV0KCkgdGh1bWJuYWlsc0NvbHVtbnNPcHRpb246IG51bWJlcjtcbiAgICBASW5wdXQoKSBzdGFydEluZGV4T3B0aW9uOiBudW1iZXI7XG4gICAgQElucHV0KCkgaW1hZ2VEZXNjcmlwdGlvbk9wdGlvbjogYm9vbGVhbjtcbiAgICBASW5wdXQoKSBpbWFnZUFycm93c09wdGlvbjogYm9vbGVhbjtcbiAgICBASW5wdXQoKSB0aHVtYm5haWxzQXJyb3dzT3B0aW9uOiBib29sZWFuO1xuICAgIEBJbnB1dCgpIHByZXZpZXdBcnJvd3NPcHRpb246IGJvb2xlYW47XG4gICAgQElucHV0KCkgaW1hZ2VTd2lwZU9wdGlvbjogYm9vbGVhbjtcbiAgICBASW5wdXQoKSB0aHVtYm5haWxzU3dpcGVPcHRpb246IGJvb2xlYW47XG4gICAgQElucHV0KCkgcHJldmlld1N3aXBlT3B0aW9uOiBib29sZWFuO1xuICAgIEBJbnB1dCgpIGltYWdlQXV0b1BsYXlPcHRpb246IGJvb2xlYW47XG4gICAgQElucHV0KCkgaW1hZ2VBdXRvUGxheUludGVydmFsT3B0aW9uOiBudW1iZXI7XG4gICAgQElucHV0KCkgaW1hZ2VBdXRvUGxheVBhdXNlT25Ib3Zlck9wdGlvbjogYm9vbGVhbjtcbiAgICBASW5wdXQoKSBpbWFnZUluZmluaXR5TW92ZU9wdGlvbjogYm9vbGVhbjtcbiAgICBASW5wdXQoKSBwcmV2aWV3T3B0aW9uOiBib29sZWFuO1xuICAgIEBJbnB1dCgpIGFycm93UHJldkljb25PcHRpb246IHN0cmluZztcbiAgICBASW5wdXQoKSBhcnJvd05leHRJY29uT3B0aW9uOiBzdHJpbmc7XG4gICAgQElucHV0KCkgcHJldmlld1ByZXZJY29uT3B0aW9uOiBzdHJpbmc7XG4gICAgQElucHV0KCkgcHJldmlld05leHRJY29uT3B0aW9uOiBzdHJpbmc7XG4gICAgQElucHV0KCkgdGh1bWJuYWlsc09wdGlvbjogYm9vbGVhbjtcblxuICBzbWFsbEltYWdlczogc3RyaW5nW10gfCBTYWZlUmVzb3VyY2VVcmxbXTtcbiAgICBtZWRpdW1JbWFnZXM6IE5neEdhbGxlcnlPcmRlcmVkSW1hZ2VbXTtcbiAgICBiaWdJbWFnZXM6IHN0cmluZ1tdIHwgU2FmZVJlc291cmNlVXJsW107XG4gICAgZGVzY3JpcHRpb25zOiBzdHJpbmdbXTtcbiAgICBsaW5rczogc3RyaW5nW107XG4gICAgbGFiZWxzOiBzdHJpbmdbXTtcblxuICAgIG9sZEltYWdlczogTmd4R2FsbGVyeUltYWdlW107XG4gICAgb2xkSW1hZ2VzTGVuZ3RoID0gMDtcblxuICAgIHNlbGVjdGVkSW5kZXggPSAwO1xuICAgIHByZXZpZXdFbmFibGVkOiBib29sZWFuO1xuXG4gICAgY3VycmVudE9wdGlvbnM6IE5neEdhbGxlcnlPcHRpb25zO1xuXG4gICAgcHJpdmF0ZSBicmVha3BvaW50OiBudW1iZXIgfCB1bmRlZmluZWQgPSB1bmRlZmluZWQ7XG4gICAgcHJpdmF0ZSBwcmV2QnJlYWtwb2ludDogbnVtYmVyIHwgdW5kZWZpbmVkID0gdW5kZWZpbmVkO1xuICAgIHByaXZhdGUgZnVsbFdpZHRoVGltZW91dDogYW55O1xuXG4gICAgLy8gQHRzLWlnbm9yZVxuICAgIEBWaWV3Q2hpbGQoTmd4R2FsbGVyeVByZXZpZXdDb21wb25lbnQpIHByZXZpZXc6IE5neEdhbGxlcnlQcmV2aWV3Q29tcG9uZW50O1xuICAgIC8vIEB0cy1pZ25vcmVcbiAgICBAVmlld0NoaWxkKE5neEdhbGxlcnlJbWFnZUNvbXBvbmVudCkgaW1hZ2U6IE5neEdhbGxlcnlJbWFnZUNvbXBvbmVudDtcbiAgICAvLyBAdHMtaWdub3JlXG4gICAgQFZpZXdDaGlsZChOZ3hHYWxsZXJ5VGh1bWJuYWlsc0NvbXBvbmVudCkgdGh1Ym1uYWlsczogTmd4R2FsbGVyeVRodW1ibmFpbHNDb21wb25lbnQ7XG5cbiAgICBASG9zdEJpbmRpbmcoJ3N0eWxlLndpZHRoJykgd2lkdGg6IHN0cmluZztcbiAgICBASG9zdEJpbmRpbmcoJ3N0eWxlLmhlaWdodCcpIGhlaWdodDogc3RyaW5nO1xuICAgIEBIb3N0QmluZGluZygnc3R5bGUubGVmdCcpIGxlZnQ6IHN0cmluZztcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgbXlFbGVtZW50OiBFbGVtZW50UmVmKSB7fVxuXG4gICAgbmdPbkluaXQoKSB7XG4gICAgICBjb25zdCB0ZW1wT3B0aW9ucyA9IFt7XG4gICAgICAgIHdpZHRoOiB0aGlzLndpZHRoT3B0aW9uLFxuICAgICAgICBoZWlnaHQ6IHRoaXMuaGVpZ2h0T3B0aW9uLFxuICAgICAgICB0aHVtYm5haWxzOiB0aGlzLnRodW1ibmFpbHNPcHRpb24sXG4gICAgICAgIHRodW1ibmFpbHNDb2x1bW5zOiB0aGlzLnRodW1ibmFpbHNDb2x1bW5zT3B0aW9uLFxuICAgICAgICBzdGFydEluZGV4OiB0aGlzLnN0YXJ0SW5kZXhPcHRpb24sXG4gICAgICAgIGltYWdlRGVzY3JpcHRpb246IHRoaXMuaW1hZ2VEZXNjcmlwdGlvbk9wdGlvbixcbiAgICAgICAgaW1hZ2VBcnJvd3M6IHRoaXMuaW1hZ2VBcnJvd3NPcHRpb24sXG4gICAgICAgIHRodW1ibmFpbHNBcnJvd3M6IHRoaXMudGh1bWJuYWlsc0Fycm93c09wdGlvbixcbiAgICAgICAgcHJldmlld0Fycm93czogdGhpcy5wcmV2aWV3QXJyb3dzT3B0aW9uLFxuICAgICAgICBpbWFnZVN3aXBlOiB0aGlzLmltYWdlU3dpcGVPcHRpb24sXG4gICAgICAgIHRodW1ibmFpbHNTd2lwZTogdGhpcy50aHVtYm5haWxzU3dpcGVPcHRpb24sXG4gICAgICAgIHByZXZpZXdTd2lwZTogdGhpcy5wcmV2aWV3U3dpcGVPcHRpb24sXG4gICAgICAgIGltYWdlQXV0b1BsYXk6IHRoaXMuaW1hZ2VBdXRvUGxheU9wdGlvbixcbiAgICAgICAgaW1hZ2VBdXRvUGxheUludGVydmFsOiB0aGlzLmltYWdlQXV0b1BsYXlJbnRlcnZhbE9wdGlvbixcbiAgICAgICAgaW1hZ2VBdXRvUGxheVBhdXNlT25Ib3ZlcjogdGhpcy5pbWFnZUF1dG9QbGF5UGF1c2VPbkhvdmVyT3B0aW9uLFxuICAgICAgICBpbWFnZUluZmluaXR5TW92ZTogdGhpcy5pbWFnZUluZmluaXR5TW92ZU9wdGlvbixcbiAgICAgICAgcHJldmlldzogdGhpcy5wcmV2aWV3T3B0aW9uLFxuICAgICAgICBhcnJvd1ByZXZJY29uOiB0aGlzLmFycm93UHJldkljb25PcHRpb24sXG4gICAgICAgIGFycm93TmV4dEljb246IHRoaXMuYXJyb3dOZXh0SWNvbk9wdGlvbixcbiAgICAgICAgcHJldmlld1ByZXZJY29uT3B0aW9uOiB0aGlzLnByZXZpZXdQcmV2SWNvbk9wdGlvbixcbiAgICAgICAgcHJldmlld05leHRJY29uT3B0aW9uOiB0aGlzLnByZXZpZXdOZXh0SWNvbk9wdGlvblxuICAgICAgfV07XG5cbiAgICAgICAgLy8gdGhpcy5vcHRpb25zID0gdGhpcy5vcHRpb25zLm1hcCgob3B0KSA9PiBuZXcgTmd4R2FsbGVyeU9wdGlvbnMob3B0KSk7XG4gICAgICAgIHRoaXMub3B0aW9ucyA9IHRlbXBPcHRpb25zLm1hcCgob3B0KSA9PiBuZXcgTmd4R2FsbGVyeU9wdGlvbnMob3B0KSk7XG5cbiAgICAgICAgdGhpcy5zb3J0T3B0aW9ucygpO1xuICAgICAgICB0aGlzLnNldEJyZWFrcG9pbnQoKTtcbiAgICAgICAgdGhpcy5zZXRPcHRpb25zKCk7XG4gICAgICAgIHRoaXMuY2hlY2tGdWxsV2lkdGgoKTtcbiAgICAgICAgaWYgKHRoaXMuY3VycmVudE9wdGlvbnMpIHtcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWRJbmRleCA9IDxudW1iZXI+dGhpcy5jdXJyZW50T3B0aW9ucy5zdGFydEluZGV4O1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgbmdEb0NoZWNrKCk6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5pbWFnZXMgIT09IHVuZGVmaW5lZCAmJiAodGhpcy5pbWFnZXMubGVuZ3RoICE9PSB0aGlzLm9sZEltYWdlc0xlbmd0aClcbiAgICAgICAgICAgIHx8ICh0aGlzLmltYWdlcyAhPT0gdGhpcy5vbGRJbWFnZXMpKSB7XG4gICAgICAgICAgICB0aGlzLm9sZEltYWdlc0xlbmd0aCA9IHRoaXMuaW1hZ2VzLmxlbmd0aDtcbiAgICAgICAgICAgIHRoaXMub2xkSW1hZ2VzID0gdGhpcy5pbWFnZXM7XG4gICAgICAgICAgICB0aGlzLnNldE9wdGlvbnMoKTtcbiAgICAgICAgICAgIHRoaXMuc2V0SW1hZ2VzKCk7XG5cbiAgICAgICAgICAgIGlmICh0aGlzLmltYWdlcyAmJiB0aGlzLmltYWdlcy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmltYWdlc1JlYWR5LmVtaXQoKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHRoaXMuaW1hZ2UpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmltYWdlLnJlc2V0KDxudW1iZXI+dGhpcy5jdXJyZW50T3B0aW9ucy5zdGFydEluZGV4KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHRoaXMuY3VycmVudE9wdGlvbnMudGh1bWJuYWlsc0F1dG9IaWRlICYmIHRoaXMuY3VycmVudE9wdGlvbnMudGh1bWJuYWlsc1xuICAgICAgICAgICAgICAgICYmIHRoaXMuaW1hZ2VzLmxlbmd0aCA8PSAxKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50T3B0aW9ucy50aHVtYm5haWxzID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50T3B0aW9ucy5pbWFnZUFycm93cyA9IGZhbHNlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGlzLnJlc2V0VGh1bWJuYWlscygpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xuICAgICAgICB0aGlzLmNoZWNrRnVsbFdpZHRoKCk7XG4gICAgfVxuXG4gICAgQEhvc3RMaXN0ZW5lcignd2luZG93OnJlc2l6ZScpIG9uUmVzaXplKCkge1xuICAgICAgICB0aGlzLnNldEJyZWFrcG9pbnQoKTtcblxuICAgICAgICBpZiAodGhpcy5wcmV2QnJlYWtwb2ludCAhPT0gdGhpcy5icmVha3BvaW50KSB7XG4gICAgICAgICAgICB0aGlzLnNldE9wdGlvbnMoKTtcbiAgICAgICAgICAgIHRoaXMucmVzZXRUaHVtYm5haWxzKCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5jdXJyZW50T3B0aW9ucyAmJiB0aGlzLmN1cnJlbnRPcHRpb25zLmZ1bGxXaWR0aCkge1xuXG4gICAgICAgICAgICBpZiAodGhpcy5mdWxsV2lkdGhUaW1lb3V0KSB7XG4gICAgICAgICAgICAgICAgY2xlYXJUaW1lb3V0KHRoaXMuZnVsbFdpZHRoVGltZW91dCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMuZnVsbFdpZHRoVGltZW91dCA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuY2hlY2tGdWxsV2lkdGgoKTtcbiAgICAgICAgICAgIH0sIDIwMCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBnZXRJbWFnZUhlaWdodCgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gKHRoaXMuY3VycmVudE9wdGlvbnMgJiYgdGhpcy5jdXJyZW50T3B0aW9ucy50aHVtYm5haWxzKSA/XG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRPcHRpb25zLmltYWdlUGVyY2VudCArICclJyA6ICcxMDAlJztcbiAgICB9XG5cbiAgICBnZXRUaHVtYm5haWxzSGVpZ2h0KCk6IHN0cmluZyB7XG4gICAgICAgIGlmICh0aGlzLmN1cnJlbnRPcHRpb25zICYmIHRoaXMuY3VycmVudE9wdGlvbnMuaW1hZ2UpIHtcbiAgICAgICAgICAgIHJldHVybiAnY2FsYygnICsgdGhpcy5jdXJyZW50T3B0aW9ucy50aHVtYm5haWxzUGVyY2VudCArICclIC0gJ1xuICAgICAgICAgICAgKyB0aGlzLmN1cnJlbnRPcHRpb25zLnRodW1ibmFpbHNNYXJnaW4gKyAncHgpJztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiAnMTAwJSc7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBnZXRUaHVtYm5haWxzTWFyZ2luVG9wKCk6IHN0cmluZyB7XG4gICAgICAgIGlmICh0aGlzLmN1cnJlbnRPcHRpb25zICYmIHRoaXMuY3VycmVudE9wdGlvbnMubGF5b3V0ID09PSBOZ3hHYWxsZXJ5TGF5b3V0LlRodW1ibmFpbHNCb3R0b20pIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmN1cnJlbnRPcHRpb25zLnRodW1ibmFpbHNNYXJnaW4gKyAncHgnO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuICcwcHgnO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZ2V0VGh1bWJuYWlsc01hcmdpbkJvdHRvbSgpOiBzdHJpbmcge1xuICAgICAgICBpZiAodGhpcy5jdXJyZW50T3B0aW9ucyAmJiB0aGlzLmN1cnJlbnRPcHRpb25zLmxheW91dCA9PT0gTmd4R2FsbGVyeUxheW91dC5UaHVtYm5haWxzVG9wKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5jdXJyZW50T3B0aW9ucy50aHVtYm5haWxzTWFyZ2luICsgJ3B4JztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiAnMHB4JztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG9wZW5QcmV2aWV3KGluZGV4OiBudW1iZXIpOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMuY3VycmVudE9wdGlvbnMucHJldmlld0N1c3RvbSkge1xuICAgICAgICAgICAgdGhpcy5jdXJyZW50T3B0aW9ucy5wcmV2aWV3Q3VzdG9tKGluZGV4KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMucHJldmlld0VuYWJsZWQgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5wcmV2aWV3Lm9wZW4oaW5kZXgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgb25QcmV2aWV3T3BlbigpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5wcmV2aWV3T3Blbi5lbWl0KCk7XG5cbiAgICAgICAgaWYgKHRoaXMuaW1hZ2UgJiYgdGhpcy5pbWFnZS5hdXRvUGxheSkge1xuICAgICAgICAgICAgdGhpcy5pbWFnZS5zdG9wQXV0b1BsYXkoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG9uUHJldmlld0Nsb3NlKCk6IHZvaWQge1xuICAgICAgICB0aGlzLnByZXZpZXdFbmFibGVkID0gZmFsc2U7XG4gICAgICAgIHRoaXMucHJldmlld0Nsb3NlLmVtaXQoKTtcblxuICAgICAgICBpZiAodGhpcy5pbWFnZSAmJiB0aGlzLmltYWdlLmF1dG9QbGF5KSB7XG4gICAgICAgICAgICB0aGlzLmltYWdlLnN0YXJ0QXV0b1BsYXkoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHNlbGVjdEZyb21JbWFnZShpbmRleDogbnVtYmVyKSB7XG4gICAgICAgIHRoaXMuc2VsZWN0KGluZGV4KTtcbiAgICB9XG5cbiAgICBzZWxlY3RGcm9tVGh1bWJuYWlscyhpbmRleDogbnVtYmVyKSB7XG4gICAgICAgIHRoaXMuc2VsZWN0KGluZGV4KTtcblxuICAgICAgICBpZiAodGhpcy5jdXJyZW50T3B0aW9ucyAmJiB0aGlzLmN1cnJlbnRPcHRpb25zLnRodW1ibmFpbHMgJiYgdGhpcy5jdXJyZW50T3B0aW9ucy5wcmV2aWV3XG4gICAgICAgICAgICAmJiAoIXRoaXMuY3VycmVudE9wdGlvbnMuaW1hZ2UgfHwgdGhpcy5jdXJyZW50T3B0aW9ucy50aHVtYm5haWxzUmVtYWluaW5nQ291bnQpKSB7XG4gICAgICAgICAgICB0aGlzLm9wZW5QcmV2aWV3KHRoaXMuc2VsZWN0ZWRJbmRleCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzaG93KGluZGV4OiBudW1iZXIpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5zZWxlY3QoaW5kZXgpO1xuICAgIH1cblxuICAgIHNob3dOZXh0KCk6IHZvaWQge1xuICAgICAgICB0aGlzLmltYWdlLnNob3dOZXh0KCk7XG4gICAgfVxuXG4gICAgc2hvd1ByZXYoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuaW1hZ2Uuc2hvd1ByZXYoKTtcbiAgICB9XG5cbiAgICBjYW5TaG93TmV4dCgpOiBib29sZWFuIHtcbiAgICAgICAgaWYgKHRoaXMuaW1hZ2VzICYmIHRoaXMuY3VycmVudE9wdGlvbnMpIHtcbiAgICAgICAgICAgIHJldHVybiAodGhpcy5jdXJyZW50T3B0aW9ucy5pbWFnZUluZmluaXR5TW92ZSB8fCB0aGlzLnNlbGVjdGVkSW5kZXggPCB0aGlzLmltYWdlcy5sZW5ndGggLSAxKVxuICAgICAgICAgICAgICAgID8gdHJ1ZSA6IGZhbHNlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY2FuU2hvd1ByZXYoKTogYm9vbGVhbiB7XG4gICAgICAgIGlmICh0aGlzLmltYWdlcyAmJiB0aGlzLmN1cnJlbnRPcHRpb25zKSB7XG4gICAgICAgICAgICByZXR1cm4gKHRoaXMuY3VycmVudE9wdGlvbnMuaW1hZ2VJbmZpbml0eU1vdmUgfHwgdGhpcy5zZWxlY3RlZEluZGV4ID4gMCkgPyB0cnVlIDogZmFsc2U7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcmV2aWV3U2VsZWN0KGluZGV4OiBudW1iZXIpIHtcbiAgICAgICAgdGhpcy5wcmV2aWV3Q2hhbmdlLmVtaXQoe2luZGV4LCBpbWFnZTogdGhpcy5pbWFnZXNbaW5kZXhdfSk7XG4gICAgfVxuXG4gICAgbW92ZVRodW1ibmFpbHNSaWdodCgpIHtcbiAgICAgICAgdGhpcy50aHVibW5haWxzLm1vdmVSaWdodCgpO1xuICAgIH1cblxuICAgIG1vdmVUaHVtYm5haWxzTGVmdCgpIHtcbiAgICAgICAgdGhpcy50aHVibW5haWxzLm1vdmVMZWZ0KCk7XG4gICAgfVxuXG4gICAgY2FuTW92ZVRodW1ibmFpbHNSaWdodCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudGh1Ym1uYWlscy5jYW5Nb3ZlUmlnaHQoKTtcbiAgICB9XG5cbiAgICBjYW5Nb3ZlVGh1bWJuYWlsc0xlZnQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnRodWJtbmFpbHMuY2FuTW92ZUxlZnQoKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIHJlc2V0VGh1bWJuYWlscygpIHtcbiAgICAgICAgaWYgKHRoaXMudGh1Ym1uYWlscykge1xuICAgICAgICAgICAgdGhpcy50aHVibW5haWxzLnJlc2V0KDxudW1iZXI+dGhpcy5jdXJyZW50T3B0aW9ucy5zdGFydEluZGV4KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgc2VsZWN0KGluZGV4OiBudW1iZXIpIHtcbiAgICAgICAgdGhpcy5zZWxlY3RlZEluZGV4ID0gaW5kZXg7XG5cbiAgICAgICAgdGhpcy5jaGFuZ2UuZW1pdCh7XG4gICAgICAgICAgICBpbmRleCxcbiAgICAgICAgICAgIGltYWdlOiB0aGlzLmltYWdlc1tpbmRleF1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBjaGVja0Z1bGxXaWR0aCgpOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMuY3VycmVudE9wdGlvbnMgJiYgdGhpcy5jdXJyZW50T3B0aW9ucy5mdWxsV2lkdGgpIHtcbiAgICAgICAgICAgIHRoaXMud2lkdGggPSBkb2N1bWVudC5ib2R5LmNsaWVudFdpZHRoICsgJ3B4JztcbiAgICAgICAgICAgIHRoaXMubGVmdCA9ICgtKGRvY3VtZW50LmJvZHkuY2xpZW50V2lkdGggLVxuICAgICAgICAgICAgICAgIHRoaXMubXlFbGVtZW50Lm5hdGl2ZUVsZW1lbnQucGFyZW50Tm9kZS5pbm5lcldpZHRoKSAvIDIpICsgJ3B4JztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgc2V0SW1hZ2VzKCk6IHZvaWQge1xuICAgICAgICB0aGlzLnNtYWxsSW1hZ2VzID0gdGhpcy5pbWFnZXMubWFwKChpbWcpID0+IDxzdHJpbmc+aW1nLnNtYWxsKTtcbiAgICAgICAgdGhpcy5tZWRpdW1JbWFnZXMgPSB0aGlzLmltYWdlcy5tYXAoKGltZywgaSkgPT4gbmV3IE5neEdhbGxlcnlPcmRlcmVkSW1hZ2Uoe1xuICAgICAgICAgICAgc3JjOiBpbWcubWVkaXVtLFxuICAgICAgICAgICAgaW5kZXg6IGlcbiAgICAgICAgfSkpO1xuICAgICAgICB0aGlzLmJpZ0ltYWdlcyA9IHRoaXMuaW1hZ2VzLm1hcCgoaW1nKSA9PiA8c3RyaW5nPmltZy5iaWcpO1xuICAgICAgICB0aGlzLmRlc2NyaXB0aW9ucyA9IHRoaXMuaW1hZ2VzLm1hcCgoaW1nKSA9PiA8c3RyaW5nPmltZy5kZXNjcmlwdGlvbik7XG4gICAgICAgIHRoaXMubGlua3MgPSB0aGlzLmltYWdlcy5tYXAoKGltZykgPT4gPHN0cmluZz5pbWcudXJsKTtcbiAgICAgICAgdGhpcy5sYWJlbHMgPSB0aGlzLmltYWdlcy5tYXAoKGltZykgPT4gPHN0cmluZz5pbWcubGFiZWwpO1xuICAgIH1cblxuICAgIHByaXZhdGUgc2V0QnJlYWtwb2ludCgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5wcmV2QnJlYWtwb2ludCA9IHRoaXMuYnJlYWtwb2ludDtcbiAgICAgICAgbGV0IGJyZWFrcG9pbnRzO1xuXG4gICAgICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgYnJlYWtwb2ludHMgPSB0aGlzLm9wdGlvbnMuZmlsdGVyKChvcHQpID0+IG9wdC5icmVha3BvaW50ID49IHdpbmRvdy5pbm5lcldpZHRoKVxuICAgICAgICAgICAgICAgIC5tYXAoKG9wdCkgPT4gb3B0LmJyZWFrcG9pbnQpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGJyZWFrcG9pbnRzICYmIGJyZWFrcG9pbnRzLmxlbmd0aCkge1xuICAgICAgICAgICAgdGhpcy5icmVha3BvaW50ID0gYnJlYWtwb2ludHMucG9wKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmJyZWFrcG9pbnQgPSB1bmRlZmluZWQ7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIHNvcnRPcHRpb25zKCk6IHZvaWQge1xuICAgICAgICB0aGlzLm9wdGlvbnMgPSBbXG4gICAgICAgICAgICAuLi50aGlzLm9wdGlvbnMuZmlsdGVyKChhKSA9PiBhLmJyZWFrcG9pbnQgPT09IHVuZGVmaW5lZCksXG4gICAgICAgICAgICAuLi50aGlzLm9wdGlvbnNcbiAgICAgICAgICAgICAgICAuZmlsdGVyKChhKSA9PiBhLmJyZWFrcG9pbnQgIT09IHVuZGVmaW5lZClcbiAgICAgICAgICAgICAgICAuc29ydCgoYSwgYikgPT4gYi5icmVha3BvaW50IC0gYS5icmVha3BvaW50KVxuICAgICAgICBdO1xuICAgIH1cblxuICAgIHByaXZhdGUgc2V0T3B0aW9ucygpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5jdXJyZW50T3B0aW9ucyA9IG5ldyBOZ3hHYWxsZXJ5T3B0aW9ucyh7fSk7XG5cbiAgICAgICAgdGhpcy5vcHRpb25zXG4gICAgICAgICAgICAuZmlsdGVyKChvcHQpID0+IG9wdC5icmVha3BvaW50ID09PSB1bmRlZmluZWQgfHwgb3B0LmJyZWFrcG9pbnQgPj0gdGhpcy5icmVha3BvaW50KVxuICAgICAgICAgICAgLm1hcCgob3B0KSA9PiB0aGlzLmNvbWJpbmVPcHRpb25zKHRoaXMuY3VycmVudE9wdGlvbnMsIG9wdCkpO1xuXG4gICAgICAgIHRoaXMud2lkdGggPSA8c3RyaW5nPnRoaXMuY3VycmVudE9wdGlvbnMud2lkdGg7XG4gICAgICAgIHRoaXMuaGVpZ2h0ID0gPHN0cmluZz50aGlzLmN1cnJlbnRPcHRpb25zLmhlaWdodDtcbiAgICB9XG5cbiAgICBwcml2YXRlIGNvbWJpbmVPcHRpb25zKGZpcnN0OiBOZ3hHYWxsZXJ5T3B0aW9ucywgc2Vjb25kOiBOZ3hHYWxsZXJ5T3B0aW9ucykge1xuICAgICAgICBPYmplY3Qua2V5cyhzZWNvbmQpLm1hcCgodmFsKSA9PiBmaXJzdFt2YWxdID0gc2Vjb25kW3ZhbF0gIT09IHVuZGVmaW5lZCA/IHNlY29uZFt2YWxdIDogZmlyc3RbdmFsXSk7XG4gICAgfVxufVxuXG4iXX0=