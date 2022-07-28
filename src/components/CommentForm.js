import React, {useState} from "react";

const CommentForm = ({addComment}) => {

    const [author, setAuthor] = useState("")
    const [text, setText] = useState("")

    const handleAuthorChange = (event) => {
        setAuthor(event.target.value)
    }

    const handleTextChange = (event) => {
        setText(event.target.value)
    }

    const handleFormSubmit = (event) => {
        event.preventDefault()
        const authorToSubmit = author.trim()
        const textToSubmit = text.trim()

        if (!authorToSubmit || !textToSubmit){
            return
        }

        addComment({
            author: authorToSubmit,
            text: textToSubmit
        })
        setAuthor("")
        setText("")
    }



    return (
        <form onSubmit={handleFormSubmit}>
            <input
                onChange={handleAuthorChange}
                type="text" 
                placeholder="Enter your name..."
                value={author}
            />

            <input 
                onChange={handleTextChange}
                type="text"
                placeholder="Enter your comment"
                value={text}
            />

            <input
                type="submit"
                value="Post"
            />
        </form>
    )
}

export default CommentForm