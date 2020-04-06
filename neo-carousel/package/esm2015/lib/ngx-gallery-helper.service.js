/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable, Renderer2 } from '@angular/core';
import * as i0 from "@angular/core";
export class NgxGalleryHelperService {
    /**
     * @param {?} renderer
     */
    constructor(renderer) {
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
    manageSwipe(status, element, id, nextHandler, prevHandler) {
        /** @type {?} */
        const handlers = this.getSwipeHandlers(id);
        // swipeleft and swiperight are available only if hammerjs is included
        try {
            if (status && !handlers) {
                this.swipeHandlers.set(id, [
                    this.renderer.listen(element.nativeElement, 'swipeleft', (/**
                     * @return {?}
                     */
                    () => nextHandler())),
                    this.renderer.listen(element.nativeElement, 'swiperight', (/**
                     * @return {?}
                     */
                    () => prevHandler()))
                ]);
            }
            else if (!status && handlers) {
                handlers.map((/**
                 * @param {?} handler
                 * @return {?}
                 */
                (handler) => handler()));
                this.removeSwipeHandlers(id);
            }
        }
        catch (e) { }
    }
    /**
     * @param {?} url
     * @return {?}
     */
    validateUrl(url) {
        if (url.replace) {
            return url.replace(new RegExp(' ', 'g'), '%20')
                .replace(new RegExp('\'', 'g'), '%27');
        }
        else {
            return url;
        }
    }
    /**
     * @param {?} image
     * @return {?}
     */
    getBackgroundUrl(image) {
        return 'url(\'' + this.validateUrl(image) + '\')';
    }
    /**
     * @private
     * @param {?} id
     * @return {?}
     */
    getSwipeHandlers(id) {
        return this.swipeHandlers.get(id);
    }
    /**
     * @private
     * @param {?} id
     * @return {?}
     */
    removeSwipeHandlers(id) {
        this.swipeHandlers.delete(id);
    }
}
NgxGalleryHelperService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
NgxGalleryHelperService.ctorParameters = () => [
    { type: Renderer2 }
];
/** @nocollapse */ NgxGalleryHelperService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function NgxGalleryHelperService_Factory() { return new NgxGalleryHelperService(i0.ɵɵinject(i0.Renderer2)); }, token: NgxGalleryHelperService, providedIn: "root" });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWdhbGxlcnktaGVscGVyLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZW8tY2Fyb3VzZWwvIiwic291cmNlcyI6WyJsaWIvbmd4LWdhbGxlcnktaGVscGVyLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQWMsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDOztBQUtsRSxNQUFNLE9BQU8sdUJBQXVCOzs7O0lBSWhDLFlBQW9CLFFBQW1CO1FBQW5CLGFBQVEsR0FBUixRQUFRLENBQVc7UUFGL0Isa0JBQWEsR0FBNEIsSUFBSSxHQUFHLEVBQXNCLENBQUM7SUFFckMsQ0FBQzs7Ozs7Ozs7O0lBRTNDLFdBQVcsQ0FBQyxNQUFlLEVBQUUsT0FBbUIsRUFBRSxFQUFVLEVBQUUsV0FBcUIsRUFBRSxXQUFxQjs7Y0FFaEcsUUFBUSxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxFQUFFLENBQUM7UUFFMUMsc0VBQXNFO1FBQ3RFLElBQUk7WUFDQSxJQUFJLE1BQU0sSUFBSSxDQUFDLFFBQVEsRUFBRTtnQkFDckIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUMsRUFBRSxFQUFFO29CQUN2QixJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsYUFBYSxFQUFFLFdBQVc7OztvQkFBRSxHQUFHLEVBQUUsQ0FBQyxXQUFXLEVBQUUsRUFBQztvQkFDN0UsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLGFBQWEsRUFBRSxZQUFZOzs7b0JBQUUsR0FBRyxFQUFFLENBQUMsV0FBVyxFQUFFLEVBQUM7aUJBQ2pGLENBQUMsQ0FBQzthQUNOO2lCQUFNLElBQUksQ0FBQyxNQUFNLElBQUksUUFBUSxFQUFFO2dCQUM1QixRQUFRLENBQUMsR0FBRzs7OztnQkFBQyxDQUFDLE9BQU8sRUFBRSxFQUFFLENBQUMsT0FBTyxFQUFFLEVBQUMsQ0FBQztnQkFDckMsSUFBSSxDQUFDLG1CQUFtQixDQUFDLEVBQUUsQ0FBQyxDQUFDO2FBQ2hDO1NBQ0o7UUFBQyxPQUFPLENBQUMsRUFBRSxHQUFFO0lBQ2xCLENBQUM7Ozs7O0lBRUQsV0FBVyxDQUFDLEdBQVc7UUFDbkIsSUFBSSxHQUFHLENBQUMsT0FBTyxFQUFFO1lBQ2IsT0FBTyxHQUFHLENBQUMsT0FBTyxDQUFDLElBQUksTUFBTSxDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUMsRUFBRSxLQUFLLENBQUM7aUJBQzFDLE9BQU8sQ0FBQyxJQUFJLE1BQU0sQ0FBQyxJQUFJLEVBQUUsR0FBRyxDQUFDLEVBQUUsS0FBSyxDQUFDLENBQUM7U0FDOUM7YUFBTTtZQUNILE9BQU8sR0FBRyxDQUFDO1NBQ2Q7SUFDTCxDQUFDOzs7OztJQUVELGdCQUFnQixDQUFDLEtBQWE7UUFDMUIsT0FBTyxRQUFRLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsR0FBRyxLQUFLLENBQUM7SUFDdEQsQ0FBQzs7Ozs7O0lBRU8sZ0JBQWdCLENBQUMsRUFBVTtRQUMvQixPQUFPLElBQUksQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQ3RDLENBQUM7Ozs7OztJQUVPLG1CQUFtQixDQUFDLEVBQVU7UUFDbEMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDbEMsQ0FBQzs7O1lBOUNKLFVBQVUsU0FBQztnQkFDVixVQUFVLEVBQUUsTUFBTTthQUNuQjs7OztZQUpnQyxTQUFTOzs7Ozs7OztJQU90QyxnREFBK0U7Ozs7O0lBRW5FLDJDQUEyQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUsIEVsZW1lbnRSZWYsIFJlbmRlcmVyMiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBOZ3hHYWxsZXJ5SGVscGVyU2VydmljZSB7XG5cbiAgICBwcml2YXRlIHN3aXBlSGFuZGxlcnM6IE1hcDxzdHJpbmcsIEZ1bmN0aW9uW10+ID0gbmV3IE1hcDxzdHJpbmcsIEZ1bmN0aW9uW10+KCk7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIpIHt9XG5cbiAgICBtYW5hZ2VTd2lwZShzdGF0dXM6IGJvb2xlYW4sIGVsZW1lbnQ6IEVsZW1lbnRSZWYsIGlkOiBzdHJpbmcsIG5leHRIYW5kbGVyOiBGdW5jdGlvbiwgcHJldkhhbmRsZXI6IEZ1bmN0aW9uKTogdm9pZCB7XG5cbiAgICAgICAgY29uc3QgaGFuZGxlcnMgPSB0aGlzLmdldFN3aXBlSGFuZGxlcnMoaWQpO1xuXG4gICAgICAgIC8vIHN3aXBlbGVmdCBhbmQgc3dpcGVyaWdodCBhcmUgYXZhaWxhYmxlIG9ubHkgaWYgaGFtbWVyanMgaXMgaW5jbHVkZWRcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGlmIChzdGF0dXMgJiYgIWhhbmRsZXJzKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zd2lwZUhhbmRsZXJzLnNldChpZCwgW1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnJlbmRlcmVyLmxpc3RlbihlbGVtZW50Lm5hdGl2ZUVsZW1lbnQsICdzd2lwZWxlZnQnLCAoKSA9PiBuZXh0SGFuZGxlcigpKSxcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yZW5kZXJlci5saXN0ZW4oZWxlbWVudC5uYXRpdmVFbGVtZW50LCAnc3dpcGVyaWdodCcsICgpID0+IHByZXZIYW5kbGVyKCkpXG4gICAgICAgICAgICAgICAgXSk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKCFzdGF0dXMgJiYgaGFuZGxlcnMpIHtcbiAgICAgICAgICAgICAgICBoYW5kbGVycy5tYXAoKGhhbmRsZXIpID0+IGhhbmRsZXIoKSk7XG4gICAgICAgICAgICAgICAgdGhpcy5yZW1vdmVTd2lwZUhhbmRsZXJzKGlkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBjYXRjaCAoZSkge31cbiAgICB9XG5cbiAgICB2YWxpZGF0ZVVybCh1cmw6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgICAgIGlmICh1cmwucmVwbGFjZSkge1xuICAgICAgICAgICAgcmV0dXJuIHVybC5yZXBsYWNlKG5ldyBSZWdFeHAoJyAnLCAnZycpLCAnJTIwJylcbiAgICAgICAgICAgICAgICAucmVwbGFjZShuZXcgUmVnRXhwKCdcXCcnLCAnZycpLCAnJTI3Jyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gdXJsO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZ2V0QmFja2dyb3VuZFVybChpbWFnZTogc3RyaW5nKSB7XG4gICAgICAgIHJldHVybiAndXJsKFxcJycgKyB0aGlzLnZhbGlkYXRlVXJsKGltYWdlKSArICdcXCcpJztcbiAgICB9XG5cbiAgICBwcml2YXRlIGdldFN3aXBlSGFuZGxlcnMoaWQ6IHN0cmluZyk6IEZ1bmN0aW9uW10gfCB1bmRlZmluZWQge1xuICAgICAgICByZXR1cm4gdGhpcy5zd2lwZUhhbmRsZXJzLmdldChpZCk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSByZW1vdmVTd2lwZUhhbmRsZXJzKGlkOiBzdHJpbmcpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5zd2lwZUhhbmRsZXJzLmRlbGV0ZShpZCk7XG4gICAgfVxufVxuIl19