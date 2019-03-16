import React from 'react'
import PropTypes from 'prop-types'

const QuoteBox = (props) => {
  return (
    <div id="quote-box">
      <p id="text">"{props.text}"</p>
      <p id="author">{props.author}</p>
      <div id="buttonDiv">
        <button id="new-quote" onClick={props.onClick}>New Quote</button>
        <a id="tweet-quote" href={'https://twitter.com/intent/tweet?hashtags=quotes&text=' + encodeURIComponent(props.text + " " + " -" + props.author)} target="_blank" title="Tweet this quote"><i class="fab fa-twitter-square"></i></a>
      </div>
    </div>
  )
}

export default QuoteBox;
