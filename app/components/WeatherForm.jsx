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
          <input type="search" ref="location" placeholder="Search weather by city"/>
          <button className="button expanded hollow">Get Weather</button>
        </form>
      </div>
    );
  }
});

module.exports = WeatherForm;