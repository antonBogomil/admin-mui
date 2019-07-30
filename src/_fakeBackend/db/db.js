function MyDB(name) {
    this.models = {};
    this.collections = {};
    this.name = name;
    localStorage.setItem(name, JSON.stringify({db: 'hello'}));
    this.info = {
        currentSize: localStorage[this.name].length,
        max: 5200000,
        left: null
    };
    this.info.left = this.info.max - this.info.currentSize;
}

MyDB.prototype.calcInfo = function () {
    this.info.left = this.info.max - this.info.currentSize;
};
MyDB.prototype.get = function () {
    const ls = localStorage[this.name];
    return JSON.parse(ls);
};
MyDB.prototype.set = function (json) {
    localStorage.setItem(this.name, JSON.stringify(json));
};
MyDB.prototype.update = function () {
    const current = this.get();
    let next = {};
    for (let key in this.collections) {
        next[key] = this.collections[key].documents
    }
    this.set(next);
};
MyDB.prototype.createModel = function (name, scheme) {
    this.models[name] = scheme;
    const db = this;
    const collection = new Collection(name);
    this.collections[name] = collection;
    Document.prototype.save = function (success, error) {
        const newDoc = {
            id: this.collection.index++,
            ...this.data
        };
        try {
            this.collection.documents.push(newDoc);
            this.data = null;
            db.update();
            success && success(newDoc);
        } catch (e) {
            error && error(e)
        }
    };

    function Document(data) {
        this.data = data;
        this.collection = collection;
    }

    return Document
};

function Collection(name) {
    this.name = name;
    this.index = 0;
    this.documents = [];
}
export const TYPE = {
    STRING : "string",
    BOOL : "boolean",
    NUM : "number",
    DATE : "date"
};
export const myDB = new MyDB('myDB');
