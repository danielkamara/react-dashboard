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
      </div>
    );
  }
}
class Reviews extends React.Component {
  render() {
    return (
      <div className="reviews">
        <h3>Reviews</h3>
      </div>
    );
  }
}
class WebsiteVisitors extends React.Component {
  render() {
    return (
      <div className="visitors">
        <h3>Website Visitors</h3>
      </div>
    );
  }
}
class AverageRating extends React.Component {
  render() {
    return (
      <div className="rating">
        <h3>AverageRating</h3>
      </div>
    );
  }
}
class SentimentAnalysis extends React.Component {
  render() {
    return (
      <div className="analysis">
        <h3>SentimentAnalysis</h3>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("main"));
