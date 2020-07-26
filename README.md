## Classes

<dl>
<dt><a href="#Controller">Controller</a></dt>
<dd></dd>
<dt><a href="#Model">Model</a></dt>
<dd></dd>
<dt><a href="#Store">Store</a></dt>
<dd></dd>
<dt><a href="#Template">Template</a></dt>
<dd></dd>
<dt><a href="#View">View</a></dt>
<dd></dd>
</dl>

## Functions

<dl>
<dt><a href="#Todo">Todo(name)</a></dt>
<dd><p>Sets up a brand new Todo list.</p>
</dd>
<dt><a href="#setView">setView()</a></dt>
<dd><p>Shortcut to controller.setView with document.location.hash as argument.
This function will load and initialise the view</p>
</dd>
</dl>

<a name="Controller"></a>

## Controller
**Kind**: global class  

* [Controller](#Controller)
    * [new Controller(model, view)](#new_Controller_new)
    * [.setView(&#x27;&#x27;)](#Controller+setView)
    * [.showAll()](#Controller+showAll)
    * [.showActive()](#Controller+showActive)
    * [.showCompleted()](#Controller+showCompleted)
    * [.addItem()](#Controller+addItem)
    * [.removeItem(id)](#Controller+removeItem)
    * [.removeCompletedItems()](#Controller+removeCompletedItems)
    * [.toggleComplete(id, checkbox, silent)](#Controller+toggleComplete)
    * [.toggleAll()](#Controller+toggleAll)
    * [._updateCount()](#Controller+_updateCount)
    * [._filter(force)](#Controller+_filter)
    * [._updateFilterState()](#Controller+_updateFilterState)

<a name="new_Controller_new"></a>

### new Controller(model, view)
Takes a model and view and acts as the controller between them


| Param | Type | Description |
| --- | --- | --- |
| model | <code>object</code> | The model instance |
| view | <code>object</code> | The view instance |

<a name="Controller+setView"></a>

### controller.setView(&#x27;&#x27;)
Loads and initialises the view

**Kind**: instance method of [<code>Controller</code>](#Controller)  

| Param | Type | Description |
| --- | --- | --- |
| '' | <code>string</code> | | 'active' | 'completed' |

<a name="Controller+showAll"></a>

### controller.showAll()
An event to fire on load. Will get all items and display them in the
todo-list

**Kind**: instance method of [<code>Controller</code>](#Controller)  
<a name="Controller+showActive"></a>

### controller.showActive()
Renders all active tasks

**Kind**: instance method of [<code>Controller</code>](#Controller)  
<a name="Controller+showCompleted"></a>

### controller.showCompleted()
Renders all completed tasks

**Kind**: instance method of [<code>Controller</code>](#Controller)  
<a name="Controller+addItem"></a>

### controller.addItem()
An event to fire whenever you want to add an item. Simply pass in the event
object and it'll handle the DOM insertion and saving of the new item.

**Kind**: instance method of [<code>Controller</code>](#Controller)  
<a name="Controller+removeItem"></a>

### controller.removeItem(id)
By giving it an ID it'll find the DOM element matching that ID,
remove it from the DOM and also remove it from storage.

**Kind**: instance method of [<code>Controller</code>](#Controller)  

| Param | Type | Description |
| --- | --- | --- |
| id | <code>number</code> | The ID of the item to remove from the DOM and storage |

<a name="Controller+removeCompletedItems"></a>

### controller.removeCompletedItems()
Will remove all completed items from the DOM and storage.

**Kind**: instance method of [<code>Controller</code>](#Controller)  
<a name="Controller+toggleComplete"></a>

### controller.toggleComplete(id, checkbox, silent)
Give it an ID of a model and a checkbox and it will update the item
in storage based on the checkbox's state.

**Kind**: instance method of [<code>Controller</code>](#Controller)  

| Param | Type | Description |
| --- | --- | --- |
| id | <code>number</code> | The ID of the element to complete or uncomplete |
| checkbox | <code>object</code> | The checkbox to check the state of complete                          or not |
| silent | <code>boolean</code> \| <code>undefined</code> | Prevent re-filtering the todo items |

<a name="Controller+toggleAll"></a>

### controller.toggleAll()
Will toggle ALL checkboxes' on/off state and completeness of models.
Just pass in the event object.

**Kind**: instance method of [<code>Controller</code>](#Controller)  
<a name="Controller+_updateCount"></a>

### controller.\_updateCount()
Updates the pieces of the page which change depending on the remaining
number of todos.

**Kind**: instance method of [<code>Controller</code>](#Controller)  
<a name="Controller+_filter"></a>

### controller.\_filter(force)
Re-filters the todo items, based on the active route.

**Kind**: instance method of [<code>Controller</code>](#Controller)  

| Param | Type | Description |
| --- | --- | --- |
| force | <code>boolean</code> \| <code>undefined</code> | forces a re-painting of todo items. |

<a name="Controller+_updateFilterState"></a>

### controller.\_updateFilterState()
Simply updates the filter nav's selected states

**Kind**: instance method of [<code>Controller</code>](#Controller)  
<a name="Model"></a>

## Model
**Kind**: global class  

* [Model](#Model)
    * [new Model(storage)](#new_Model_new)
    * [.create([title], [callback])](#Model+create)
    * [.read([query], [callback])](#Model+read)
    * [.update(id, data, callback)](#Model+update)
    * [.remove(id, callback)](#Model+remove)
    * [.removeAll(callback)](#Model+removeAll)
    * [.getCount()](#Model+getCount)

<a name="new_Model_new"></a>

### new Model(storage)
Creates a new Model instance and hooks up the storage.


| Param | Type | Description |
| --- | --- | --- |
| storage | <code>object</code> | A reference to the client side storage class |

<a name="Model+create"></a>

### model.create([title], [callback])
Creates a new todo model

**Kind**: instance method of [<code>Model</code>](#Model)  

| Param | Type | Description |
| --- | --- | --- |
| [title] | <code>string</code> | The title of the task |
| [callback] | <code>function</code> | The callback to fire after the model is created |

<a name="Model+read"></a>

### model.read([query], [callback])
Finds and returns a model in storage. If no query is given it'll simply
return everything. If you pass in a string or number it'll look that up as
the ID of the model to find. Lastly, you can pass it an object to match
against.

**Kind**: instance method of [<code>Model</code>](#Model)  

| Param | Type | Description |
| --- | --- | --- |
| [query] | <code>string</code> \| <code>number</code> \| <code>object</code> | A query to match models against |
| [callback] | <code>function</code> | The callback to fire after the model is found |

**Example**  
```js
model.read(1, func); // Will find the model with an ID of 1
model.read('1'); // Same as above
//Below will find a model with foo equalling bar and hello equalling world.
model.read({ foo: 'bar', hello: 'world' });
```
<a name="Model+update"></a>

### model.update(id, data, callback)
Updates a model by giving it an ID, data to update, and a callback to fire when
the update is complete.

**Kind**: instance method of [<code>Model</code>](#Model)  

| Param | Type | Description |
| --- | --- | --- |
| id | <code>number</code> | The id of the model to update |
| data | <code>object</code> | The properties to update and their new value |
| callback | <code>function</code> | The callback to fire when the update is complete. |

<a name="Model+remove"></a>

### model.remove(id, callback)
Removes a model from storage

**Kind**: instance method of [<code>Model</code>](#Model)  

| Param | Type | Description |
| --- | --- | --- |
| id | <code>number</code> | The ID of the model to remove |
| callback | <code>function</code> | The callback to fire when the removal is complete. |

<a name="Model+removeAll"></a>

### model.removeAll(callback)
WARNING: Will remove ALL data from storage.

**Kind**: instance method of [<code>Model</code>](#Model)  

| Param | Type | Description |
| --- | --- | --- |
| callback | <code>function</code> | The callback to fire when the storage is wiped. |

<a name="Model+getCount"></a>

### model.getCount()
Returns a count of all todos

**Kind**: instance method of [<code>Model</code>](#Model)  
<a name="Store"></a>

## Store
**Kind**: global class  

* [Store](#Store)
    * [new Store(name, callback)](#new_Store_new)
    * [.find(query, callback)](#Store+find)
    * [.findAll(callback)](#Store+findAll)
    * [.save(updateData, callback, id)](#Store+save)
    * [.getNewID(data)](#Store+getNewID)
    * [.remove(id, callback)](#Store+remove)
    * [.drop(callback)](#Store+drop)

<a name="new_Store_new"></a>

### new Store(name, callback)
Creates a new client side storage object and will create an empty
collection if no collection already exists.


| Param | Type | Description |
| --- | --- | --- |
| name | <code>string</code> | The name of our DB we want to use |
| callback | <code>function</code> | Our fake DB uses callbacks because in real life you probably would be making AJAX calls |

<a name="Store+find"></a>

### store.find(query, callback)
Finds items based on a query given as a JS object

**Kind**: instance method of [<code>Store</code>](#Store)  

| Param | Type | Description |
| --- | --- | --- |
| query | <code>object</code> | The query to match against (i.e. {foo: 'bar'}) |
| callback | <code>function</code> | The callback to fire when the query has completed running |

**Example**  
```js
db.find({foo: 'bar', hello: 'world'}, function (data) {
	 // data will return any items that have foo: bar and
	 // hello: world in their properties
});
```
<a name="Store+findAll"></a>

### store.findAll(callback)
Will retrieve all data from the collection

**Kind**: instance method of [<code>Store</code>](#Store)  

| Param | Type | Description |
| --- | --- | --- |
| callback | <code>function</code> | The callback to fire upon retrieving data |

<a name="Store+save"></a>

### store.save(updateData, callback, id)
Will save the given data to the DB. If no item exists it will create a new
item, otherwise it'll simply update an existing item's properties

**Kind**: instance method of [<code>Store</code>](#Store)  

| Param | Type | Description |
| --- | --- | --- |
| updateData | <code>object</code> | The data to save back into the DB |
| callback | <code>function</code> | The callback to fire after saving |
| id | <code>number</code> | An optional param to enter an ID of an item to update |

<a name="Store+getNewID"></a>

### store.getNewID(data)
Will give an ID. This function will also compare a proposition of ID 
with the todos list, if the purposed ID already exists, another ID will 
be emited.

**Kind**: instance method of [<code>Store</code>](#Store)  

| Param | Type | Description |
| --- | --- | --- |
| data | <code>Array</code> | An array of already created object. All object must contained an id like this : {...., id: , ...}. |

<a name="Store+remove"></a>

### store.remove(id, callback)
Will remove an item from the Store based on its ID

**Kind**: instance method of [<code>Store</code>](#Store)  

| Param | Type | Description |
| --- | --- | --- |
| id | <code>number</code> | The ID of the item you want to remove |
| callback | <code>function</code> | The callback to fire after saving |

<a name="Store+drop"></a>

### store.drop(callback)
Will drop all storage and start fresh

**Kind**: instance method of [<code>Store</code>](#Store)  

| Param | Type | Description |
| --- | --- | --- |
| callback | <code>function</code> | The callback to fire after dropping the data |

<a name="Template"></a>

## Template
**Kind**: global class  

* [Template](#Template)
    * [new Template()](#new_Template_new)
    * [.show(data)](#Template+show) ⇒ <code>string</code>
    * [.itemCounter(activeTodos)](#Template+itemCounter) ⇒ <code>string</code>
    * [.clearCompletedButton(completedTodos)](#Template+clearCompletedButton) ⇒ <code>string</code>

<a name="new_Template_new"></a>

### new Template()
Sets up defaults for all the Template methods such as a default template

<a name="Template+show"></a>

### template.show(data) ⇒ <code>string</code>
Creates an <li> HTML string and returns it for placement in your app.

NOTE: In real life you should be using a templating engine such as Mustache
or Handlebars, however, this is a vanilla JS example.

**Kind**: instance method of [<code>Template</code>](#Template)  
**Returns**: <code>string</code> - HTML String of an <li> element  

| Param | Type | Description |
| --- | --- | --- |
| data | <code>object</code> | The object containing keys you want to find in the                      template to replace. |

**Example**  
```js
view.show({
	id: 1,
	title: "Hello World",
	completed: 0,
});
```
<a name="Template+itemCounter"></a>

### template.itemCounter(activeTodos) ⇒ <code>string</code>
Displays a counter of how many to dos are left to complete

**Kind**: instance method of [<code>Template</code>](#Template)  
**Returns**: <code>string</code> - String containing the count  

| Param | Type | Description |
| --- | --- | --- |
| activeTodos | <code>number</code> | The number of active todos. |

<a name="Template+clearCompletedButton"></a>

### template.clearCompletedButton(completedTodos) ⇒ <code>string</code>
Updates the text within the "Clear completed" button

**Kind**: instance method of [<code>Template</code>](#Template)  
**Returns**: <code>string</code> - String containing the count  

| Param | Type | Description |
| --- | --- | --- |
| completedTodos | <code>number</code> | The number of completed todos. |

<a name="View"></a>

## View
**Kind**: global class  

* [View](#View)
    * [new View(template)](#new_View_new)
    * [._removeItem(id)](#View+_removeItem)
    * [._clearCompletedButton(completedCount, visible)](#View+_clearCompletedButton)
    * [._setFilter(currentPage)](#View+_setFilter)
    * [._elementComplete(id, completed)](#View+_elementComplete)
    * [._editItem(id, title)](#View+_editItem)
    * [._editItemDone(id, title)](#View+_editItemDone)
    * [.render(viewCmd, parameter)](#View+render)
    * [._itemId(element)](#View+_itemId)
    * [._bindItemEditDone(handler)](#View+_bindItemEditDone)
    * [._bindItemEditCancel(handler)](#View+_bindItemEditCancel)
    * [.bind(event, handler)](#View+bind)

<a name="new_View_new"></a>

### new View(template)
View that abstracts away the browser's DOM completely.
It has two simple entry points:

  - bind(eventName, handler)
    Takes a todo application event and registers the handler
  - render(command, parameterObject)
    Renders the given command with the options


| Param | Type | Description |
| --- | --- | --- |
| template | [<code>Template</code>](#Template) | the template of the todos list |

<a name="View+_removeItem"></a>

### view.\_removeItem(id)
Removes a todo based on its ID

**Kind**: instance method of [<code>View</code>](#View)  

| Param | Type |
| --- | --- |
| id | <code>Number</code> | 

<a name="View+_clearCompletedButton"></a>

### view.\_clearCompletedButton(completedCount, visible)
This function will hide or show the button "clear completed"

**Kind**: instance method of [<code>View</code>](#View)  

| Param | Type |
| --- | --- |
| completedCount | <code>number</code> | 
| visible | <code>boolean</code> | 

<a name="View+_setFilter"></a>

### view.\_setFilter(currentPage)
Toggle a button between the "selected" and "unselected" state

**Kind**: instance method of [<code>View</code>](#View)  

| Param | Type | Description |
| --- | --- | --- |
| currentPage | <code>String</code> | the target of the selected button |

<a name="View+_elementComplete"></a>

### view.\_elementComplete(id, completed)
Checks(or unchecks) a todo

**Kind**: instance method of [<code>View</code>](#View)  

| Param | Type |
| --- | --- |
| id | <code>number</code> | 
| completed | <code>boolean</code> | 

<a name="View+_editItem"></a>

### view.\_editItem(id, title)
When a todo is selected for edition, this function will put the actual value of the todo in the input field.

**Kind**: instance method of [<code>View</code>](#View)  

| Param | Type | Description |
| --- | --- | --- |
| id | <code>number</code> |  |
| title | <code>string</code> | the text of the todo before editing |

<a name="View+_editItemDone"></a>

### view.\_editItemDone(id, title)
Once the todo is edited, this function restores the standard display

**Kind**: instance method of [<code>View</code>](#View)  

| Param | Type |
| --- | --- |
| id | <code>Number</code> | 
| title | <code>String</code> | 

<a name="View+render"></a>

### view.render(viewCmd, parameter)
Based on the viewCmd argument, will launch one of the following functions <br>
 showEntries : shows the todos <br>
 removeItem : removes a todo (in the DOM) <br>
 updateElementCount : updates the number of completed todos <br>
 clearCompletedButton : hides or shows the "clear completed" button <br>
 contentBlockVisibility : hides or shows the footer of the page <br>
 toggleAll : toggle all the todos between uncompleted and completed state <br>
 setFilter : Toggle a button between the "selected" and "unselected" state <br>
 clearNewTodo : will clear the new todo input field <br>
 elementComplete : shows an element as completed <br>
 editItem : sets up the display in editing mode <br>
 editItemDone : exits the editing mode and updates the title of the todo <br>

**Kind**: instance method of [<code>View</code>](#View)  

| Param | Type | Description |
| --- | --- | --- |
| viewCmd | <code>String</code> | the key of the function to launch in the viewCommands object. \n |
| parameter | <code>\*</code> |  |

<a name="View+_itemId"></a>

### view.\_itemId(element)
Based on a DOM element, will return a todo's id

**Kind**: instance method of [<code>View</code>](#View)  

| Param | Type |
| --- | --- |
| element | <code>HTMLElement</code> | 

<a name="View+_bindItemEditDone"></a>

### view.\_bindItemEditDone(handler)
When the edition of a todo is finished, this function will handles the exiting of edition mode

**Kind**: instance method of [<code>View</code>](#View)  

| Param | Type | Description |
| --- | --- | --- |
| handler | <code>\*</code> | What to do with the id and the title of a todo |

<a name="View+_bindItemEditCancel"></a>

### view.\_bindItemEditCancel(handler)
When the edition of a todo is canceled, this function will handles the exiting of edition mode

**Kind**: instance method of [<code>View</code>](#View)  

| Param | Type | Description |
| --- | --- | --- |
| handler | <code>function</code> | what to do with the item id |

<a name="View+bind"></a>

### view.bind(event, handler)
Add a listener to an event

**Kind**: instance method of [<code>View</code>](#View)  

| Param | Type | Description |
| --- | --- | --- |
| event |  |  |
| handler | <code>function</code> | What to do with the event |

<a name="Todo"></a>

## Todo(name)
Sets up a brand new Todo list.

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| name | <code>string</code> | The name of your new to do list. |

<a name="setView"></a>

## setView()
Shortcut to controller.setView with document.location.hash as argument.
This function will load and initialise the view

**Kind**: global function  
