## A-Frame

[aframe.io](https://aframe.io/)

> A web framework for building virtual reality experiences.

Note:
- Part 1 - VR, the fun stuff
- A-Frame is a javascript library
- Adds HTML tags for building VR scenes
- Uses Three JS under the hood
- Cross platform: Vive, Rift, Daydream, Cardboard, etc, Desktop and Mobile


--


## A basic VR scene

```html
<html>
  <head>
    <script src="https://aframe.io/releases/0.7.0/aframe.min.js"></script>
  </head>
  <body>
    <a-scene>
      <a-box position="-1 0.5 -3" rotation="0 45 0" color="#4CC3D9"></a-box>
      <a-sphere position="0 1.25 -5" radius="1.25" color="#EF2D5E"></a-sphere>
      <a-cylinder position="1 0.75 -3" radius="0.5" height="1.5" color="#FFC65D"></a-cylinder>
      <a-plane position="0 0 -4" rotation="-90 0 0" width="4" height="4" color="#7BC8A4"></a-plane>
      <a-sky color="#ECECEC"></a-sky>
    </a-scene>
  </body>
</html>
```

[aframe.io/docs](https://aframe.io/docs)


--


<iframe class="stretch" data-src="aframe/basic.html"></iframe>


---


## A-Frame tutorial

### Build a scene per distinct breakpoint:

* Mobile
* Desktop
* VR


--


## Mobile - Demo

<iframe class="stretch" data-src="aframe/mobile.html"></iframe>


--


## Mobile - Source

```html
<a-entity position="0 1.75 -10">

  <!-- Front face -->
  <a-entity rotation="0 0 0">
    <a-box width="4" height="3" depth="0.1" color="red" position="0 1.75 3.5" />
    <a-box width="4" height="3" depth="0.1" color="green" position="0 -1.75 3.5" />
  </a-entity>

  <!-- Top face -->
  <a-entity rotation="90 0 0">
    <a-box width="4" height="3" depth="0.1" color="blue" position="0 1.75 3.5" />
    <a-box width="4" height="3" depth="0.1" color="black" position="0 -1.75 3.5" />
  </a-entity>

  <!-- Rear face -->
  <a-entity rotation="180 0 0">
    <a-box width="4" height="3" depth="0.1" color="orange" position="0 1.75 3.5" />
    <a-box width="4" height="3" depth="0.1" color="lime" position="0 -1.75 3.5" />
  </a-entity>

  <!-- Bottom face -->
  <a-entity rotation="270 0 0">
    <a-box width="4" height="3" depth="0.1" color="cyan" position="0 1.75 3.5" />
    <a-box width="4" height="3" depth="0.1" color="grey" position="0 -1.75 3.5" />
  </a-entity>

</a-entity>
```


--


## Desktop - Demo

<iframe class="stretch" data-src="aframe/desktop.html"></iframe>


--


## Desktop - Source

```html
<!-- Top row -->
<a-box width="4" height="3" depth="0.1" color="red" position="-6.75 1.75 -10" />
<a-box width="4" height="3" depth="0.1" color="green" position="-2.25 1.75 -10" />
<a-box width="4" height="3" depth="0.1" color="blue" position="2.25 1.75 -10" />
<a-box width="4" height="3" depth="0.1" color="black" position="6.75 1.75 -10" />

<!-- Bottom row -->
<a-box width="4" height="3" depth="0.1" color="orange" position="-6.75 -1.75 -10" />
<a-box width="4" height="3" depth="0.1" color="lime" position="-2.25 -1.75 -10" />
<a-box width="4" height="3" depth="0.1" color="cyan" position="2.25 -1.75 -10" />
<a-box width="4" height="3" depth="0.1" color="grey" position="6.75 -1.75 -10" />
```


--


## VR - Demo

<iframe class="stretch" data-src="aframe/vr.html"></iframe>


--


## VR - Source

```html
<a-entity position="0 1.75 0">

  <a-entity rotation="0 0 0">
    <a-box width="4" height="3" depth="0.1" color="red" position="0 0 -10"/>
  </a-entity>
  <a-entity rotation="0 45 0">
    <a-box width="4" height="3" depth="0.1" color="green" position="0 0 -10"/>
  </a-entity>
  <a-entity rotation="0 90 0">
    <a-box width="4" height="3" depth="0.1" color="blue" position="0 0 -10"/>
  </a-entity>
  <a-entity rotation="0 135 0">
    <a-box width="4" height="3" depth="0.1" color="black" position="0 0 -10"/>
  </a-entity>
  <a-entity rotation="0 180 0">
    <a-box width="4" height="3" depth="0.1" color="orange" position="0 0 -10"/>
  </a-entity>
  <a-entity rotation="0 225 0">
    <a-box width="4" height="3" depth="0.1" color="lime" position="0 0 -10"/>
  </a-entity>
  <a-entity rotation="0 270 0">
    <a-box width="4" height="3" depth="0.1" color="cyan" position="0 0 -10"/>
  </a-entity>
  <a-entity rotation="0 315 0">
    <a-box width="4" height="3" depth="0.1" color="grey" position="0 0 -10"/>
  </a-entity>

</a-entity>
```
