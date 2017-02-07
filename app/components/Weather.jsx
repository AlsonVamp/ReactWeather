var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');
var openWeatherMap = require('openWeatherMap');

var Weather = React.createClass({
    getInitialState: function () {
        return {
            isLoading: false
        }
    },
    handleSearch: function (location) {
        this.setState({ isLoading: true })
        var that = this;
        openWeatherMap.getTemp(location)
            .then(
            function (temp) {
                that.setState({
                    location: location,
                    temp: temp,
                    isLoading: false
                });
            },
            function (err) {
                that.setState({
                    isLoading: false
                })
                console.log(err);
            })

    },
    render: function () {
        var {temp, location, isLoading} = this.state;
        function renderMessage() {
            if (isLoading) {
                return <h3 className="text-center">Fetching weather...</h3>
            } else if (temp && location) {
                return <WeatherMessage temp={temp} location={location} />;
            }
        }

        return (
            <div>
                <h1 className="text-center">Get Weather</h1>
                <WeatherForm onSearch={this.handleSearch} />
                {renderMessage()}
            </div>
        )
    }
})

module.exports = Weather;