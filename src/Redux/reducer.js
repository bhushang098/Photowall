import postes from "../Data/posts"
import { combineReducers } from "redux";

function comments(state= {}, action)
{
    switch(action.type)
    {
        case "ADD_COMMENT" :
            if(!state[action.postId])
            {
                return {[action.postId]:[action.comment]}
            }else{
                const comary = [...state[action.postId]]
               
                return {[action.postId]:comary}
            }
            
        case "LOAD_COMMENTS":
            return action.comments
            
        default :
            return state

    }
    
}

function posts(state = postes,action)
{
 
   switch(action.type)
   {
        case "REMOVE_POST" :
            return state.filter((photo) => photo.id!=action.id)
        
        case "ADD_POST" :
            return [...action.post]
        
        case "LOAD_POSTS" :
            return [...action.posts]
        default :
            return state
   }

}

const rootReducer = combineReducers({comments,posts})

export default rootReducer;