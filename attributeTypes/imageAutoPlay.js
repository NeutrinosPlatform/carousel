let imageAutoPlayLabelInstance = null;
module.exports = class imageAutoPlay {

    constructor() {
        if (!imageAutoPlayLabelInstance) {
            imageAutoPlayLabelInstance = this;
            //set all other default values

            this.displayAs = 'ImageAutoPlay';
            this.value = '[imageAutoPlay]'
            this.type = 'TOGGLE';
            this.values = {'true-value':'true', 'false-value': 'false'}
        }
        return imageAutoPlayLabelInstance;
    }
}