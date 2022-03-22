export class CustomModalPopUpModel {

    id: string;
    title: string;
    noButtons = false;
    large = true;
    upperCross = true;
    isrestricted = false;

    constructor(title: string, noBUttons = true, upperCross = true, large = true, isrestricted = false) {
        this.title = title;
        this.noButtons = noBUttons;
        this.upperCross = upperCross;
        this.large = large;
        this.isrestricted = isrestricted;
    }
}

