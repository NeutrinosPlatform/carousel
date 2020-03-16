let imageArrowLabelInstance = null;
module.exports = class showImageArrows {

    constructor() {
        if (!imageArrowLabelInstance) {
            imageArrowLabelInstance = this;
            //set all other default values

            this.displayAs = 'ImageArrows';
            this.value = '[showImageArrows]'
            this.type = 'TOGGLE';
            this.values = {'true-value':'true', 'false-value': 'false'}
        }
        return imageArrowLabelInstance;
    }
}