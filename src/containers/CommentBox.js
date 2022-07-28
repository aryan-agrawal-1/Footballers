import React, {useState} from "react";
import CommentForm from "../components/CommentForm";
import CommentList from "../components/CommentList";

const CommentBox = () => {

    const [comments, setComments] = useState(
        [
            {
                id: 1,
                author: "Aryan",
                text: "Messi"
            },
            {
                id: 2,
                author: "James",
                text: "Ronaldo"
            }
        ]
    )

    const addComment = (submittedComment) => {
        submittedComment.id = Date.now()
        const updatedComments = [...comments, submittedComment]
        setComments(updatedComments)
    }

    return (
        <>
            <h1>Footballer Players</h1>
            <h2>Add a footballer</h2>
            <div id='comment-box'>
                <span id='comment-list'><CommentList comments={comments}/></span>
                <CommentForm addComment={addComment}/>
            </div>
        </>
    )
}

export default CommentBox