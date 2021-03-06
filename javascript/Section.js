export class Section {
    constructor({items, renderer}, containerSelector) {
        this._items = items;
        this._renderer = renderer;
        this._container = document.querySelector(containerSelector);
    }

    addItem(card) {
        this._container.prepend(card);
    }

    _clear() {
        this._container.innerHTML = ''
    }

    setItems(items){
        this._items = items;
    }

    renderItems () {
        this._clear();

        this._items.forEach((item) => {
            this._renderer(item);
        });

    }


}