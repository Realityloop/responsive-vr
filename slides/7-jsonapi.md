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


---


# JSON API Tutorial

* Filter data
* Store data
* Display data


--


# Filter data

* Items: 8
* Fields:
  * Title: `title`
  * Image: `field > media > file`

```javascript
let url = buildUrl('http://api.responsivevr.docksal', {
  path: 'api/recipes',
  queryParams: {
    'page[limit]': 8,
    'include': ['image', 'image.thumbnail'],
    'fields[recipes]': ['title', 'image'],
    'fields[images]': 'thumbnail',
    'fields[files]': 'meta',
    '_consumer_id': '0eecd0b9-b149-418f-b5ef-266b9aeeddab'
  }
})
```
<!-- .element: class="fragment" -->

```html
http://api.responsivevr.docksal/api/recipes?page[limit]=8&include=image,image.thumbnail&fields[recipes]=title,image&fields[images]=thumbnail&fields[files]=meta&_consumer_id=0eecd0b9-b149-418f-b5ef-266b9aeeddab
```
<!-- .element: class="fragment" -->


--


# Store data

```javascript
export default {
  // Items placeholder.
  data () {
    return {
      items: []
    }
  },

  // On load...
  mounted () {
    // Build URL.
    let url = ...

    // Get data.
    this.$axios.$get(url)

      // Deserialize data.
      .then(res => new Deserializer({}))
        .deserialize(res, (err, data)) => {

          // Store data.
          if (!err) {
            this.items = data
          }
        }
  }
}
```


--


# Display data

```html
<template>
  <a-entity v-if="items" >
    <teaser
      v-for="(item, delta) in items"

      :delta="delta"
      :image="item.image.thumbnail.meta.derivatives['recipe-list-350-300']"
      :key="delta"
      :title="item.title" />
  </a-entity>
</template>
```
