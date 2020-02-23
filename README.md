# aframe-iot-component
[A-Frame](https://aframe.io) IOT component (for testing purposes only)

## Usage example

```html
<html>

<head>
  <script src="https://aframe.io/releases/1.0.3/aframe.min.js"></script>
  <script src="https://unpkg.com/aframe-iot-component@1.0.0/aframe-iot-component.js"></script>
</head>

<body>
  <a-scene>
    <a-sphere
      position="-1 0 -3"
      color="lightgray"
      iot="device: 123">
    </a-sphere>
  </a-scene>
</body>

</html>
```

Remember to replace the device with your unique device identifier.

## Demo

You can find a [demo](https://palmerabollo.github.io/aframe-iot-component/).
Try to light the ball up with:

```bash
curl -X POST https://keyvalue.immanuel.co/api/KeyVal/UpdateValue/123/status/on -H "Content-Length: 0"
```

Turn it off with:
```bash
curl -X POST https://keyvalue.immanuel.co/api/KeyVal/UpdateValue/123/status/off -H "Content-Length: 0"
```
