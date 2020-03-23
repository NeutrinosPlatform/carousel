let imageSwipeLabelInstance = null;
module.exports = class showImageSwipe {

    constructor() {
        if (!imageSwipeLabelInstance) {
            imageSwipeLabelInstance = this;
            //set all other default values

            this.displayAs = 'ImageSwipe';
            this.value = '[showImageSwipe]'
            this.type = 'TOGGLE';
            this.values = {'true-value':'true', 'false-value': 'false'}
        }
        return imageSwipeLabelInstance;
    }
}