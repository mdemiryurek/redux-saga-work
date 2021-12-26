import  { useEffect } from 'react';
import { connect } from 'react-redux';
import { getNews } from './actions';

import './App.css';

let App = ({getNews, articles}) => {

  useEffect(() =>{
    getNews();

  }, [getNews])
  return (
    <div className="App">
      <header className="App-header">
        redux-saga-work
      </header>
      <main>
      <h1>News feed</h1>
        <article className='article-container'>
          {articles && articles.map((article, index) => (
            <article className='article' key={index}>
              <h2>{article.title}</h2>
              {article.urlToImage && (
                <img src={article.urlToImage}
                  alt={article.title}
                  className='image'></img>
              )}
              <p>{article.description}</p>
              <div className='source'>
              <small>
                {article.source.name}
              </small>
              </div>
            </article>
          ))}
        </article>
        
      </main>
    </div>
  );
}

const mapDispatchToProps = {
  getNews: getNews
}

const mapStateToProsps = (state) => ({
  articles: state.news
});

App = connect(mapStateToProsps, mapDispatchToProps)(App);

export default App;
