import React from "react";

const NewsItem = (props) =>{
  
    let { title, description, imageUrl, url, author, date } = props;
    return (
      <div>
        <div className="card">
          <img src={imageUrl} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}...</h5>
            <p className="card-text">{description}...</p>
            <p className="card-text"><small className="text-muted">By {!author? "Unknown": author} on {date}</small></p>
            <a href={url} target="blank" className="btn btn-dark">
              Read More
            </a>
          </div>
        </div>
        
      </div>
    );

}

export default NewsItem;
