import React,{Component} from "react"
import Photo from "./Photo"
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";

class PhotoWall extends Component 
{
    render()
    {
        return <div>
            <Link className="addIcon" to="/AddPhoto"></Link>
                <div className="photogrid">
                    {this.props.posts.
                    sort((x,y) => y.id-x.id).
                    map((post,index) => <Photo post={post} key={index} {...this.props} index={index} />)}
                </div>
            </div> 
    }
}

PhotoWall.propTypes = {
    posts : PropTypes.array.isRequired
    
  };

export default PhotoWall
