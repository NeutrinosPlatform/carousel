let imageInfinityMoveLabelInstance = null;
module.exports = class imageInfinityMove {

    constructor() {
        if (!imageInfinityMoveLabelInstance) {
            imageInfinityMoveLabelInstance = this;
            //set all other default values

            this.displayAs = 'ImageInfinityMove';
            this.value = '[imageInfinityMove]'
            this.type = 'TOGGLE';
            this.values = {'true-value':'true', 'false-value': 'false'}
        }
        return imageInfinityMoveLabelInstance;
    }
}