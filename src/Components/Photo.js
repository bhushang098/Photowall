import React,{Component} from "react";
import PropTypes from "prop-types"
import {Link} from "react-router-dom"

class Photo extends Component
{
    render()
    {
        const post = this.props.post
        return <figure className="figure">
            <Link to={`/Single/${post.id}`}>
            <img className="photo" src={post.imageUrl} alt={post.title}/>
            </Link>
            <p>{post.title}</p>
            <div className="button-contaioner">
            <button className="delete-button" onClick={() => {
                this.props.startRemovingPost(post.key,post.id)
                this.props.navigate("/")
            }}> Remove </button>
            <Link className="delete-button" to={`/Single/${post.id}`}>
                
                <div className="comment-count" >
                <div className="speech-bubble"></div>
                    {this.props.comments[post.id] ? this.props.comments[post.id].length:0}
                </div>
            </Link>
            </div>
            
        </figure>
    }
}

Photo.propTypes = {
    post : PropTypes.object.isRequired
    
}

export default Photo