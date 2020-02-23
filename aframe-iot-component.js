AFRAME.registerComponent('iot', {
  previousTickTime: 0,
  inFlightRequest: false,
  schema: {
    device: {type: 'string', default: ''}
  },
  init: function() {
    var data = this.data;
    console.log('Init IOT component for device ' +  data.device);

    var el = this.el;
    var defaultColor = el.getAttribute('material').color;

    el.addEventListener('on', function() {
      el.setAttribute('color', 'yellow');
    });

    el.addEventListener('off', function() {
      el.setAttribute('color', defaultColor);
    });
  },

  tick: function(time, timeDelta) {
    var data = this.data;
    var el = this.el;
    var self = this;

    if (time > this.previousTickTime + 2000 && this.inFlightRequest === false) {
      this.inFlightRequest = true;

      var xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function() {
        if (this.readyState === 4 && this.status === 200) {
          console.log('IOT device status ' + this.responseText);
          el.emit(this.responseText.replace(/\"/g, ''));
        }
        self.inFlightRequest = false;
      };
      xhttp.open("GET", "https://keyvalue.immanuel.co/api/KeyVal/GetValue/" + data.device + "/status", true); // async
      xhttp.send();

      console.log('Tick ' + time + ' ' + timeDelta);
      this.previousTickTime = time;
    }
  }
});
