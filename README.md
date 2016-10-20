# jQuery-sidePanel
Side panel component usable for jQuery including a base theme css.

This is actually a reusable componnent, usefull if you want to include side panels to your website. 
It's designed to allow a side panel each side of the screen.

# Usage

In my CSS I used 2 classes (.item_menu and .item_sommaire) because, in my project my panels where used to manage a menu and a summary. Feel free to modify this for your needs.

## HTML

The side panel can be put in an HTML element, typically a `div` or a `span`.
The most important things are to give it a `class` **panel** and an unique attribute `myid`.
The script needs the `myid` to formally identify the panel and the `class` **panel** is needed for CSS.

For example :

```
<div id="menu" class="panel" title="my panel title" myid="menu">
  Some content<br/>
  <div class="item_menu">Item 1</div>
  <div class="item_menu">Item 2</div>
  <div class="item_menu">Item 3</div>
  Some other content<br/>
</div>
<div id="summary" class="panel" title="my other panel title" myid="summary">
  <div class="item_menu">Title 1</div>
  <div class="item_menu">&nbsp;&nbsp;Title 1.1</div>
  <div class="item_menu">&nbsp;&nbsp;Title 1.2</div>
  <div class="item_menu">Title 2</div>
  Some other content<br/>
</div>
```

## JavaScript

This part is quite easy. 
The method needs two parameters : 
* the side you want to attach the panel (*left* or *right*)
* wether if you want the panel to appear at creation or not.

```
$("#menu").mySidePanel("left", true);
$("#summary").mySidePanel("right", false);
```

# Known bugs

* The script doesn't control if you create two panels on the same side whitch would generate bugs.
