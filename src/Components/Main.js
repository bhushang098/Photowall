import React, { Component } from "react"
import Title from "./Title"
import PhotoWall from "./Photowall"
import AddPhoto from "./AddPhoto"
import { Route, Routes,useNavigate} from "react-router-dom"
import Single from "./Single"



class Main extends Component{

    state = {
        isLoading : true
    }

    constructor()
    {
        super()
    }

    componentDidMount()
    {
        this.props.startLoadingPosts()
        
        this.props.startLoadingComments();
    }

    render()
    {
        return(
            <div>
                <Routes>
                <Route path="/" element={ <div>
                <Title text="PhotoWall"></Title>
                <PhotoWall {...this.props}/>
                </div>} />
                    <Route path="/AddPhoto" element={<AddPhoto {...this.props}></AddPhoto>}/>
                    <Route path="/Single/:id" element={<Single {...this.props}></Single>}/>
                </Routes>
            </div>
        )
            
       
    }

}

export default function(props)
{
    const navigate = useNavigate();
    return <Main {...props} navigate={navigate}></Main>
}