class App extends React.Component {
  render() {
    return (
      <div className="container">
        <Dashboard />
        <Reviews />
        <AverageRating />
        <SentimentAnalysis />
        <WebsiteVisitors />
      </div>
    );
  }
}
class Dashboard extends React.Component {
  render() {
    return (
      <div className="dashboard">
        <h3>Dashboard</h3>
        <h3>Widget</h3>
        <h3>Reviews</h3>
        <h3>Customers</h3>
        <h3>Online Analysis</h3>
        <h3>Settings</h3>
      </div>
    );
  }
}
class Reviews extends React.Component {
  render() {
    return (
      <div className="reviews">
        <h3>Reviews</h3>
        <h4>1,281</h4>
      </div>
    );
  }
}
class WebsiteVisitors extends React.Component {
  render() {
    return (
      <div className="visitors">
        <h3>Website Visitors</h3>
        <h4>821</h4>
        <div className="innerDiv"></div>
      </div>
    );
  }
}
class AverageRating extends React.Component {
  render() {
    return (
      <div className="rating">
        <h3>AverageRating</h3>
        <h4>4.6</h4>
      </div>
    );
  }
}
class SentimentAnalysis extends React.Component {
  render() {
    return (
      <div className="analysis">
        <h3>SentimentAnalysis</h3>
        <ul>
          <li>960</li>
          <li>122</li>
          <li>321</li>
        </ul>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("main"));
