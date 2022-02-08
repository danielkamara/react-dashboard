class App extends React.Component {
  render() {
    return (
      <div class="container">
        <Dashboard />,
        <Reviews />,
        <AverageRating />,
        <SentimentAnalysis />
        <WebsiteVisitors />,
      </div>
    );
  }
}
class Dashboard extends React.Component {
  render() {
    return (
      <div class="dashboard">
        <li>
          <ul>Dashboard</ul>
          <ul>Widgets</ul>
          <ul>Reviews</ul>
          <ul>Customers</ul>
          <ul>Online Analysis</ul>
          <ul>Settings</ul>
        </li>
      </div>
    );
  }
}
class Reviews extends React.Component {
  render() {
    return (
      <div class="reviews">
        <h3>Reviews</h3>
        <p>1,281</p>
      </div>
    );
  }
}
class WebsiteVisitors extends React.Component {
  render() {
    return (
      <div class="visitors">
        <h3>Website Visitors</h3>
        <p>821</p>
        <div class="inner-box"></div>
      </div>
    );
  }
}
class AverageRating extends React.Component {
  render() {
    return (
      <div class="rating">
        <h3>AverageRating</h3>
        <p>4.6</p>
      </div>
    );
  }
}
class SentimentAnalysis extends React.Component {
  render() {
    return (
      <div class="analysis">
        <h3>SentimentAnalysis</h3>
        <li>
          <ul>960</ul>
          <ul>122</ul>
          <ul>321</ul>
        </li>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("main"));
