var React = require('react');

var WeatherForm = React.createClass({

  onFormSubmit(e) {
    e.preventDefault();
    var location = this.refs.location.value;

    if (typeof location === 'string' && location.trim().length > 0) {
      this.refs.location.value = '';
      this.props.onSearch(location);
    }
  },

  render() {
    return (
      <div>
        <form onSubmit={this.onFormSubmit}>
          <div>
            <input type="text" ref="location" placeholder="Enter city name"/>
          </div>
          <div>
            <button>Get Weather</button>
          </div>
        </form>
      </div>
    );
  }
});

module.exports = WeatherForm;