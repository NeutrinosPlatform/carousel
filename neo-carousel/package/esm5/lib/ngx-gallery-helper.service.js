/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable, Renderer2 } from '@angular/core';
import * as i0 from "@angular/core";
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
    /** @nocollapse */ NgxGalleryHelperService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function NgxGalleryHelperService_Factory() { return new NgxGalleryHelperService(i0.ɵɵinject(i0.Renderer2)); }, token: NgxGalleryHelperService, providedIn: "root" });
    return NgxGalleryHelperService;
}());
export { NgxGalleryHelperService };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWdhbGxlcnktaGVscGVyLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZW8tY2Fyb3VzZWwvIiwic291cmNlcyI6WyJsaWIvbmd4LWdhbGxlcnktaGVscGVyLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQWMsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDOztBQUVsRTtJQU9JLGlDQUFvQixRQUFtQjtRQUFuQixhQUFRLEdBQVIsUUFBUSxDQUFXO1FBRi9CLGtCQUFhLEdBQTRCLElBQUksR0FBRyxFQUFzQixDQUFDO0lBRXJDLENBQUM7Ozs7Ozs7OztJQUUzQyw2Q0FBVzs7Ozs7Ozs7SUFBWCxVQUFZLE1BQWUsRUFBRSxPQUFtQixFQUFFLEVBQVUsRUFBRSxXQUFxQixFQUFFLFdBQXFCOztZQUVoRyxRQUFRLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixDQUFDLEVBQUUsQ0FBQztRQUUxQyxzRUFBc0U7UUFDdEUsSUFBSTtZQUNBLElBQUksTUFBTSxJQUFJLENBQUMsUUFBUSxFQUFFO2dCQUNyQixJQUFJLENBQUMsYUFBYSxDQUFDLEdBQUcsQ0FBQyxFQUFFLEVBQUU7b0JBQ3ZCLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxhQUFhLEVBQUUsV0FBVzs7O29CQUFFLGNBQU0sT0FBQSxXQUFXLEVBQUUsRUFBYixDQUFhLEVBQUM7b0JBQzdFLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxhQUFhLEVBQUUsWUFBWTs7O29CQUFFLGNBQU0sT0FBQSxXQUFXLEVBQUUsRUFBYixDQUFhLEVBQUM7aUJBQ2pGLENBQUMsQ0FBQzthQUNOO2lCQUFNLElBQUksQ0FBQyxNQUFNLElBQUksUUFBUSxFQUFFO2dCQUM1QixRQUFRLENBQUMsR0FBRzs7OztnQkFBQyxVQUFDLE9BQU8sSUFBSyxPQUFBLE9BQU8sRUFBRSxFQUFULENBQVMsRUFBQyxDQUFDO2dCQUNyQyxJQUFJLENBQUMsbUJBQW1CLENBQUMsRUFBRSxDQUFDLENBQUM7YUFDaEM7U0FDSjtRQUFDLE9BQU8sQ0FBQyxFQUFFLEdBQUU7SUFDbEIsQ0FBQzs7Ozs7SUFFRCw2Q0FBVzs7OztJQUFYLFVBQVksR0FBVztRQUNuQixJQUFJLEdBQUcsQ0FBQyxPQUFPLEVBQUU7WUFDYixPQUFPLEdBQUcsQ0FBQyxPQUFPLENBQUMsSUFBSSxNQUFNLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQyxFQUFFLEtBQUssQ0FBQztpQkFDMUMsT0FBTyxDQUFDLElBQUksTUFBTSxDQUFDLElBQUksRUFBRSxHQUFHLENBQUMsRUFBRSxLQUFLLENBQUMsQ0FBQztTQUM5QzthQUFNO1lBQ0gsT0FBTyxHQUFHLENBQUM7U0FDZDtJQUNMLENBQUM7Ozs7O0lBRUQsa0RBQWdCOzs7O0lBQWhCLFVBQWlCLEtBQWE7UUFDMUIsT0FBTyxRQUFRLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsR0FBRyxLQUFLLENBQUM7SUFDdEQsQ0FBQzs7Ozs7O0lBRU8sa0RBQWdCOzs7OztJQUF4QixVQUF5QixFQUFVO1FBQy9CLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDdEMsQ0FBQzs7Ozs7O0lBRU8scURBQW1COzs7OztJQUEzQixVQUE0QixFQUFVO1FBQ2xDLElBQUksQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQ2xDLENBQUM7O2dCQTlDSixVQUFVLFNBQUM7b0JBQ1YsVUFBVSxFQUFFLE1BQU07aUJBQ25COzs7O2dCQUpnQyxTQUFTOzs7a0NBQTFDO0NBaURDLEFBL0NELElBK0NDO1NBNUNZLHVCQUF1Qjs7Ozs7O0lBRWhDLGdEQUErRTs7Ozs7SUFFbkUsMkNBQTJCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSwgRWxlbWVudFJlZiwgUmVuZGVyZXIyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIE5neEdhbGxlcnlIZWxwZXJTZXJ2aWNlIHtcblxuICAgIHByaXZhdGUgc3dpcGVIYW5kbGVyczogTWFwPHN0cmluZywgRnVuY3Rpb25bXT4gPSBuZXcgTWFwPHN0cmluZywgRnVuY3Rpb25bXT4oKTtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMikge31cblxuICAgIG1hbmFnZVN3aXBlKHN0YXR1czogYm9vbGVhbiwgZWxlbWVudDogRWxlbWVudFJlZiwgaWQ6IHN0cmluZywgbmV4dEhhbmRsZXI6IEZ1bmN0aW9uLCBwcmV2SGFuZGxlcjogRnVuY3Rpb24pOiB2b2lkIHtcblxuICAgICAgICBjb25zdCBoYW5kbGVycyA9IHRoaXMuZ2V0U3dpcGVIYW5kbGVycyhpZCk7XG5cbiAgICAgICAgLy8gc3dpcGVsZWZ0IGFuZCBzd2lwZXJpZ2h0IGFyZSBhdmFpbGFibGUgb25seSBpZiBoYW1tZXJqcyBpcyBpbmNsdWRlZFxuICAgICAgICB0cnkge1xuICAgICAgICAgICAgaWYgKHN0YXR1cyAmJiAhaGFuZGxlcnMpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnN3aXBlSGFuZGxlcnMuc2V0KGlkLCBbXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucmVuZGVyZXIubGlzdGVuKGVsZW1lbnQubmF0aXZlRWxlbWVudCwgJ3N3aXBlbGVmdCcsICgpID0+IG5leHRIYW5kbGVyKCkpLFxuICAgICAgICAgICAgICAgICAgICB0aGlzLnJlbmRlcmVyLmxpc3RlbihlbGVtZW50Lm5hdGl2ZUVsZW1lbnQsICdzd2lwZXJpZ2h0JywgKCkgPT4gcHJldkhhbmRsZXIoKSlcbiAgICAgICAgICAgICAgICBdKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoIXN0YXR1cyAmJiBoYW5kbGVycykge1xuICAgICAgICAgICAgICAgIGhhbmRsZXJzLm1hcCgoaGFuZGxlcikgPT4gaGFuZGxlcigpKTtcbiAgICAgICAgICAgICAgICB0aGlzLnJlbW92ZVN3aXBlSGFuZGxlcnMoaWQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGNhdGNoIChlKSB7fVxuICAgIH1cblxuICAgIHZhbGlkYXRlVXJsKHVybDogc3RyaW5nKTogc3RyaW5nIHtcbiAgICAgICAgaWYgKHVybC5yZXBsYWNlKSB7XG4gICAgICAgICAgICByZXR1cm4gdXJsLnJlcGxhY2UobmV3IFJlZ0V4cCgnICcsICdnJyksICclMjAnKVxuICAgICAgICAgICAgICAgIC5yZXBsYWNlKG5ldyBSZWdFeHAoJ1xcJycsICdnJyksICclMjcnKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiB1cmw7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBnZXRCYWNrZ3JvdW5kVXJsKGltYWdlOiBzdHJpbmcpIHtcbiAgICAgICAgcmV0dXJuICd1cmwoXFwnJyArIHRoaXMudmFsaWRhdGVVcmwoaW1hZ2UpICsgJ1xcJyknO1xuICAgIH1cblxuICAgIHByaXZhdGUgZ2V0U3dpcGVIYW5kbGVycyhpZDogc3RyaW5nKTogRnVuY3Rpb25bXSB8IHVuZGVmaW5lZCB7XG4gICAgICAgIHJldHVybiB0aGlzLnN3aXBlSGFuZGxlcnMuZ2V0KGlkKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIHJlbW92ZVN3aXBlSGFuZGxlcnMoaWQ6IHN0cmluZyk6IHZvaWQge1xuICAgICAgICB0aGlzLnN3aXBlSGFuZGxlcnMuZGVsZXRlKGlkKTtcbiAgICB9XG59XG4iXX0=