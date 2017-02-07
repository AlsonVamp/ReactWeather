var React = require('react');

var WeatherMessage = (props) => {
    return (
        <div>
            <h3 className="text-center">It's {props.temp} in {props.location}.</h3>
        </div>
    )
};

module.exports = WeatherMessage;