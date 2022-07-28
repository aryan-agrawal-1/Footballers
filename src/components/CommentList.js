import React from "react";
import Comment from "./Comment";

const CommentList = ({comments}) => {

    const commentsToBeDisplayed = comments.map((comment) => {
        return (
            <Comment author={comment.author} key = {comment.id}>{comment.text}</Comment>
        )
    })

    return (
        <>
        <h3>Favourite Players</h3>
        <hr></hr>
        {commentsToBeDisplayed}
        
        </>
    )
}

export default CommentList