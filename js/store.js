/*jshint eqeqeq:false */
// (function(window) {
// 'use strict';

/**
 * Creates a new client side storage object and will create an empty
 * collection if no collection already exists.
 * @constructor
 * @param {string} name The name of our DB we want to use
 * @param {function} callback Our fake DB uses callbacks because in
 * real life you probably would be making AJAX calls
 */
function Store(name, callback) {
    callback = callback || function () { };

    this._dbName = name;

    if (!localStorage[name]) {
        var data = {
            todos: []
        };

        localStorage[name] = JSON.stringify(data);
    }

    callback.call(this, JSON.parse(localStorage[name]));
}

/**
 * Finds items based on a query given as a JS object
 *
 * @param {object} query The query to match against (i.e. {foo: 'bar'})
 * @param {function} callback	 The callback to fire when the query has
 * completed running
 *
 * @example
 * db.find({foo: 'bar', hello: 'world'}, function (data) {
 *	 // data will return any items that have foo: bar and
 *	 // hello: world in their properties
 * });
 */
Store.prototype.find = function (query, callback) {
    if (!callback) {
        return;
    }

    var todos = JSON.parse(localStorage[this._dbName]).todos;

    callback.call(this, todos.filter(function (todo) {
        for (var q in query) {
            if (query[q] !== todo[q]) {
                return false;
            }
        }
        return true;
    }));
};

/**
 * Will retrieve all data from the collection
 *
 * @param {function} callback The callback to fire upon retrieving data
 */
Store.prototype.findAll = function (callback) {
    callback = callback || function () { };
    callback.call(this, JSON.parse(localStorage[this._dbName]).todos);
};

/**
 * Will save the given data to the DB. If no item exists it will create a new
 * item, otherwise it'll simply update an existing item's properties
 *
 * @param {object} updateData The data to save back into the DB
 * @param {function} callback The callback to fire after saving
 * @param {number} id An optional param to enter an ID of an item to update
 */
Store.prototype.save = function (updateData, callback, id) {
    var data = JSON.parse(localStorage[this._dbName]);
    var todos = data.todos;

    callback = callback || function () { };



    // If an ID was actually given, find the item and update each property
    if (id) {
        //TODO : si ok, supprimer les anciens bouts de code
        //C2 : Deleting "double for" and using find instead.
        // old code :
        // for (var i = 0; i < todos.length; i++) {
        //     if (todos[i].id === id) {
        //         for (var key in updateData) {
        //             todos[i][key] = updateData[key];
        //         }
        //         break;
        //     }
        // }
        todos.find(
            (todo) => {
                if (todo.id === id) {
                    for (var key in updateData) {
                        todo[key] = updateData[key];
                    }

                }
            }


        );

        localStorage[this._dbName] = JSON.stringify(data);
        callback.call(this, todos);
    } else {
        // Generates an ID
        // The generation fo the id is now in the "else" to avoid creating useless id.
        //A getNewID function is now used to generating a todo.
        var newId = this.getNewID(data.todos);

        // Assign an ID
        updateData.id = parseInt(newId);


        todos.push(updateData);
        localStorage[this._dbName] = JSON.stringify(data);
        callback.call(this, [updateData]);
    };
};

/**
 * Will give an ID. This function will also compare a proposition of ID 
 * with the todos list, if the purposed ID already exists, another ID will 
 * be emited.
 *
 * @param {Array} data An array of already created object. All object must contained an id like this : {...., id: , ...}.
 */
Store.prototype.getNewID = function (data) {
    //C2 replacing this "for" by a simple multiplication
    // let newId = "";
    // for (var i = 0; i < 6; i++) {
    //     newId += charset.charAt(Math.floor(Math.random() * charset.length));
    // }
    let newId = Math.floor(Math.random() * 999999);
    const searchedID = data.find(
        (t) => {
            return t.id === newId;
        }
    );
    if (typeof searchedID === "undefined") {
        return newId;

    } else {
        return this.getNewID(data);
    }


};


/**
 * Will remove an item from the Store based on its ID
 *
 * @param {number} id The ID of the item you want to remove
 * @param {function} callback The callback to fire after saving
 */
Store.prototype.remove = function (id, callback) {
    var data = JSON.parse(localStorage[this._dbName]);
    var todos = data.todos;
    // var todoId;
    //TODO : si ok, supprimer ancien code
    //ligne 155 : simplification de la boucle for, si l'id est trouvé, suppresion.
    for (var i = 0; i < todos.length; i++) {
        if (todos[i].id == id) {
            // todoId = todos[i].id;
            todos.splice(i, 1);
        }
        break;
    }

    // for (var i = 0; i < todos.length; i++) {
    //     if (todos[i].id == todoId) {
    //         todos.splice(i, 1);
    //     }
    // }

    localStorage[this._dbName] = JSON.stringify(data);
    callback.call(this, todos);
};

/**
 * Will drop all storage and start fresh
 *
 * @param {function} callback The callback to fire after dropping the data
 */
Store.prototype.drop = function (callback) {
    var data = { todos: [] };
    localStorage[this._dbName] = JSON.stringify(data);
    callback.call(this, data.todos);
};

// Export to window
window.app = window.app || {};
window.app.Store = Store;
// }) (window);