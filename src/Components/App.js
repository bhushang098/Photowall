import Main from "./Main";
import {connect} from "react-redux"
import {bindActionCreators} from "redux"
import * as actions from "../Redux/actions"

function mapStateToProp(state)
{
    return{
        posts: state.posts,
        comments: state.comments
    }
}

function mapDispatchToProps(dispatch)
{
    return bindActionCreators(actions ,dispatch)
}

const App = connect(mapStateToProp,mapDispatchToProps)(Main)

export default App