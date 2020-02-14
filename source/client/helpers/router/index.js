class Route {
  constructor(name, htmlName, defaultRoute) {
    this.name = name;
    this.htmlName = htmlName;
    this.default = defaultRoute;
  }

  isActiveRoute(hashedPath) {
    return hashedPath.replace('#', '') === this.name;
  }
}

export default class Router {
  constructor({ routes }) {
    this.routes = [];

    for(let route in routes) {
      this.routes.push(new Route(route.name, route.path, route.default));
    }

    this.rootElem = document.getElementById('app');
  }

  init() {
    var r = this.routes;
    (function(scope, r) {
      window.addEventListener('hashchange', function (e) {
        scope.hasChanged(scope, r);
      });
    })(this, r);
    this.hasChanged(this, r);
  }

  hasChanged(scope, r){
    if (window.location.hash.length > 0) {
      for (var i = 0, length = r.length; i < length; i++) {
        var route = r[i];
        if(route.isActiveRoute(window.location.hash.substr(1))) {
          scope.goToRoute(route.htmlName);
        }
      }
    } else {
      for (var i = 0, length = r.length; i < length; i++) {
        var route = r[i];
        if(route.default) {
          scope.goToRoute(route.htmlName);
        }
      }
    }
  }

  goToRoute(htmlName) {
    (function(scope) {
      var url = 'views/' + htmlName,
          xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
          scope.rootElem.innerHTML = this.responseText;
        }
      };
      xhttp.open('GET', url, true);
      xhttp.send();
    })(this);
  }
}
