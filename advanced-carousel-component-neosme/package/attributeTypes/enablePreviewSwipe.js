let enablePreviewSwipeLabelInstance = null;
module.exports = class enablePreviewSwipe {

    constructor() {
        if (!enablePreviewSwipeLabelInstance) {
            enablePreviewSwipeLabelInstance = this;
            //set all other default values

            this.displayAs = 'EnablePreviewSwipe';
            this.value = '[enablePreviewSwipe]'
            this.type = 'TOGGLE';
            this.values = {'true-value':'true', 'false-value': 'false'}
        }
        return enablePreviewSwipeLabelInstance;
    }
}