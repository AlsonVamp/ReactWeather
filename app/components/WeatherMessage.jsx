var React = require('react');

var WeatherMessage = (props) => {
    return (
        <div>
            <h3>It's {props.temp} in {props.location}.</h3>
        </div>
    )
};

module.exports = WeatherMessage;