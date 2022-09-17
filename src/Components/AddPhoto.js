import { number } from "prop-types";
import React, {Component} from "react";


class AddPhoto extends Component
{

    constructor()
    {
        super()
        this.handleSubmit = this.handleSubmit.bind(this)

    }

    handleSubmit(event)
    {
        event.preventDefault()
        const link = event.target.elements.link.value;
        const descr = event.target.elements.desc.value;
       
        if(link && descr)
        {
            const photo = {
                id: Number(new Date()),
                imageUrl : link,
                title :descr

            }
            this.props.startAddingPost(photo)
            this.props.navigate("/")
            
        }
    }

    render()
    {
        return (
                    <div>
                            <h1> Add photo here</h1>
                            <form className="addForm" onSubmit={this.handleSubmit}>
                                <input type="text" placeholder="Link" name="link"/>
                                <input type="text" placeholder="Description" name="desc"/>
                                <button>Post</button>
                            </form>
                    </div>
                )
    }
}

// Wrap and export
export default AddPhoto