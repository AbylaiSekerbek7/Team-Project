class Card {
    ID;
    Text;
    variants = [];

    constructor(id, text, variants = []) {
        this.ID = id;
        this.Text = text;
        this.variants = variants;
    }
}