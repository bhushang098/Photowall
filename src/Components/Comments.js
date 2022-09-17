import React,{Component} from "react";


class Comments extends Component 
{
    constructor()
    {
        super()
        this.handleSubmit = this.handleSubmit.bind(this)
        
    }

    handleSubmit(event)
    {
        event.preventDefault()
        const comment = event.target.elements.comment.value
        event.target.elements.comment.value = ""
        this.props.startAddingComment(this.props.postId,comment)
    }

    render(){
        console.log(this.props.comments)
        return <div className="comment">
            {
                this.props.comments.map((comm,index) => <p key={index}>{comm}</p>)
            }
            <form className="comment-form" onSubmit={this.handleSubmit}>
                <input type="text" placeholder="Comment" name="comment"></input>
                <input type="submit" hidden></input>
            </form>
        </div>
    }
}

export default Comments