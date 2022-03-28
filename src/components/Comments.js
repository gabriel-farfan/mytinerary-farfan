import { useEffect, useState } from "react"
import { connect } from 'react-redux'
import { useParams } from "react-router-dom";
import Card from "@mui/material/Card";
import CardHeader from '@mui/material/CardHeader';
import IconButton from '@mui/material/IconButton';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import CardMedia from "@mui/material/CardMedia";
import TextField from '@material-ui/core/TextField';
import itinerariesActions from '../redux/actions/itinerariesActions'


function Comment(props) {
    const { id } = useParams();
    const [commentData, setCommentData] = useState([props.allComments.filter(comment => comment.itineraryId === props.itinerary)])


    useEffect(() => {
        if (props.allComments < 1) {
            props.addCommentPerItinerary()
                .then(response => setCommentData(response))
        }
    }, []);

    props.allComments.map(comment => {
    })


    return (
        <>
            <div className="comment-container">
                <TextField id="outlined-basic" label="Outlined" variant="outlined" />
                {console.log(props)}
                {commentData ? (commentData[0].map((comment) => (

                    <Card key={comment._id}>
                        {console.log(comment)}
                        <CardHeader
                            title={comment.name}
                        />
                        <CardMedia
                            component="img"
                            height="200"
                            image=""
                            alt="img"
                        />
                    </Card>
                ))
                ) : (
                    <h1> Comment </h1>
                )}
            </div>
        </>
    )
}


const mapDispatchToProps = {
    addComment: itinerariesActions.addComment,
    modifiComment: itinerariesActions.modifyComment,
    deleteComment: itinerariesActions.deleteComment,
}

const mapStateToProps = (state) => {
    return {
        allComments: state.itinerariesReducer.activities,
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Comment)