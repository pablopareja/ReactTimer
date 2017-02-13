var React = require('react');
var Navigation = require('Navigation');

var Main = (props) => {
  return (
    <div>
      <div>
        <Navigation/>
        <div>
          Main.jsx rendered
          {props.children}
        </div>
      </div>
    </div>
  );
}

module.exports = Main;
