# JSON API

[jsonapi.org](http://jsonapi.org/)

> ... a specification for how a client should request that resources be fetched or modified, and
> how a server should respond to those requests.

_TL;DR: Specification and method of communication._


--


# /api

```json
{
  "data": [],
  "links": {
    ...
    "articles": "http://api.responsivevr.docksal/api/articles",
    "pages": "http://api.responsivevr.docksal/api/pages",
    "recipes": "http://api.responsivevr.docksal/api/recipes",
```


--


# /api/recipes

```json
{
  "data": [
    {
      "type": "recipes",
      "id": "9b024bb4-b47a-4606-9f66-7320e862a89b",
      "attributes": {
        ...
        "title": "Agnello in agrodolce (sweet and sour lamb",
        ...
      },
      "relationships": {
        ...
        "image": {
          "data": {
            "type": "images",
            "id": "9a5fecc4-982b-453c-bcef-6eea06fb3405"
```


--


# Documentation

https://www.drupal.org/project/jsonapi

**Pagingation:**
```html
page[offset]=0
page[limit]=10
```

**Fields:**
```html
fields[recipe]=title,image
```

**Includes:**
```html
include=image
```


