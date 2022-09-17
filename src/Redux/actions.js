import { getDatabase,ref,set,push,onValue} from "firebase/database";

export function startAddingPost(post)
{
    return (dispatch) => {

        const db = getDatabase();
        const postListRef = ref(db, 'posts');
        const newPostRef = push(postListRef)
        set(newPostRef,{...post}).then(() =>
        {
            dispatch(addPost(post))
        })    
    }
}

export function startRemovingPost(key,id)
{
    return(dispatch) => {
        const db = getDatabase();
        const postListRef = ref(db, `posts/${key}`);
        set(postListRef,{}).then(() => dispatch(removePost(id)))
    }
}

export function startLoadingPosts()
{
    return (dispatch) => {

        const db = getDatabase();
        const starCountRef = ref(db, 'posts');
        onValue(starCountRef, (snapshot) => {
        const data = snapshot.val();
        const keys = Object.keys(data)
        const postes = []
        keys.map((key) => {
            const postn = data[key]
            postn.key = key
            postes.push(postn)
        })
        dispatch(loadPost(postes))
        })
    }
}


export function startAddingComment(postid,comment)
{
  
    return (dispatch) => {
        const db = getDatabase();
        const commListRef = ref(db, 'comments/'+postid);
        const newcommRef = push(commListRef)
        set(newcommRef,comment).then(() =>
        {
            dispatch(addComment(comment,postid))
        })    
    }
}

export function startLoadingComments()
{
    return (dispatch) => {
        const db = getDatabase();
        const commentRef = ref(db, 'comments');
        onValue(commentRef, (snapshot) => {
        const data = snapshot.val();
        const comments = {}
        const keys = Object.keys(data)
        
        keys.map((key)=> {
            comments[key] = Object.values(data[key])
        })
            dispatch(loadComments(comments))
        });
        
    }
}

export function loadComments(comments)
{
    return {
        type : "LOAD_COMMENTS",
        comments
    }
}

export function removePost(id)
{
    return {
        type:"REMOVE_POST",
        id
    }
}

// Adding Post Action 

export function addPost(post)
{
    return {
        type :"ADD_POST",
        post
    }
}

// Add Comment Action 

export function addComment(comment,postId)
{
    return {
        type:"ADD_COMMENT",
        comment,
        postId
    }
}


export function loadPost(posts)
{
    return {
        type : "LOAD_POSTS",
        posts
    }
}