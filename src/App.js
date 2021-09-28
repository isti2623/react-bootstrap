
import { useEffect, useState } from 'react';
import { Row, Spinner } from 'react-bootstrap';
import './App.css';
import News from './components/News/News';
import 'bootstrap/dist/css/bootstrap.min.css';



function App() {
  const [news, setNews] = useState([]);
  useEffect(() => {
    fetch('https://newsapi.org/v2/everything?q=tesla&from=2021-08-28&sortBy=publishedAt&apiKey=b27cce2ddced445fb2b35924222423f6')
      .then(res => res.json())
      .then(data => setNews(data.articles))
  }, [])
  return (
    <div>
      {news.length === 0 ?
        <Spinner animation="border" variant="danger" className="text-center" />
        :
        <Row>
          {
            news.map(nw => <News nw={nw}></News>)
          }
        </Row>
      }
    </div>
  );
}

export default App;
