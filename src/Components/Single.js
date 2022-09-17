import React, {Component} from "react";
import {useParams} from "react-router-dom"
import Comments from "./Comments";
import Photo from "./Photo";


class Single extends Component {
    render()
    {
        const id = Number(this.props.params.id) // id of the image clicked

        const post = this.props.posts.find((post) => post.id === id)
        const comments = this.props.comments[id] || []

        if(post == undefined)
        {
            return <div className="loader">...Loading</div>

        }else{
            return <div className="single-photo">
            <Photo post={post} {...this.props}/>
            <Comments {...this.props} comments={comments} postId = {post.id} />
        </div>
        }

       
    }
}

export default function(props){
    const params = useParams()
    return <Single {...props} params={params}/>
}