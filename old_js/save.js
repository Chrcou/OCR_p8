Store.prototype.save = function(updateData, callback, id) {
    var data = JSON.parse(localStorage[this._dbName]);
    var todos = data.todos;

    callback = callback || function() {};

    // Generate an ID
    var newId = "";
    var charset = "0123456789";

    for (var i = 0; i < 6; i++) {
        newId += charset.charAt(Math.floor(Math.random() * charset.length));
    }

    // If an ID was actually given, find the item and update each property
    if (id) {
        for (var i = 0; i < todos.length; i++) {
            if (todos[i].id === id) {
                for (var key in updateData) {
                    todos[i][key] = updateData[key];
                }
                break;
            }
        }

        localStorage[this._dbName] = JSON.stringify(data);
        callback.call(this, todos);
    } else {

        // Assign an ID
        updateData.id = parseInt(newId);


        todos.push(updateData);
        localStorage[this._dbName] = JSON.stringify(data);
        callback.call(this, [updateData]);
    }
};