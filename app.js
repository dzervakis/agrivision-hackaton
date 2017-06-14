var _utils = {
    hideElement: function (selector) {
        var element = document.querySelector(selector);
        if (element) {
            element.classList.add('hidden');
        }
    },
    showElement: function(selector) {
        var element = document.querySelector(selector);
        if (element) {
            element.classList.remove('hidden');
        }
    },
    disableElement: function(selector) {
        var element = document.querySelector(selector);
        if (element) {
            element.setAttribute('disabled', '');
            // componentHandler.upgradeElement(element);
        }
    },
    enableElement: function(selector) {
        var element = document.querySelector(selector);
        if (element) {
            element.removeAttribute('disabled');
            // componentHandler.upgradeElement(element);
        }
    },
    // calculate world distance in km between two world points (lat/lon)
    calculateDistance: function(pos1, pos2) {
        var R = 6371; // km
        var dLon = (pos2[0] - pos1[0]).toRad();
        var dLat = (pos2[1] - pos1[1]).toRad();
        var a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
            Math.cos(pos1[1].toRad()) * Math.cos(pos2[1].toRad()) *
            Math.sin(dLon / 2) * Math.sin(dLon / 2);
        var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
        return R * c;
    },
    escapeHTML: function(str) {
     str = str + '';
     var out = '';
     for(var i=0; i<str.length; i++) {
         if(str[i] === '<') {
             out += '&lt;';
         } else if(str[i] === '>') {
             out += '&gt;';
         } else if(str[i] === "'") {
             out += '&#39;';
         } else if(str[i] === '"') {
             out += '&quot;';
         } else {
             out += str[i];
         }
     }
     return out;
   }
};

var cardFunctions = {
  generateCard: function(data) {
    var cardString = `
    <div class="col-xs-3 option-wrapper">
      <div class="col-xs-12 option">
        <div class="col-xs-12 rating">
    `;
    cardString += cardFunctions.vizRating(data.rating);
    cardString += `
        </div>
          <div class="col-xs-12 title">`  + data.name     + `</div>
          <div class="col-xs-4 stats">`   + data.costs    + `</div>
          <div class="col-xs-4 stats">`   + data.distance + `</div>
          <div class="col-xs-4 stats">`    + data.time     + `</div>
        </div>
      </div>`;
      return cardString;
  },
  generateCards: function(data) {

  },
  vizRating: function(rating) {
    var ratingString = "";
    for (var i = 0; i < rating; i++) {
      ratingString += '<span class="glyphicon glyphicon-star" aria-hidden="true"></span>';
    }
    return ratingString;
  }
}

var App = function () {
  var _app = this;

  /* TEST GEOJSON OBJECT */
  var data = {
    geometry: {},
    properties: {
      name: 'Slachter',
      distance: 10,
      costs: 20,
      time: 15,
      rating: 3
    }
  }
  console.log(cardFunctions.generateCard(data.properties));
  
};

window.onload = init;

function init() {
  var app = new App;
};
