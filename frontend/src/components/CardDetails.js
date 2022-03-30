import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Button, CardActionArea, CardActions } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { connect } from 'react-redux'
import { styled } from '@mui/material/styles';
import CardHeader from '@mui/material/CardHeader';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import citiesActions from '../redux/actions/citiesActions'
import itinerariesActions from '../redux/actions/itinerariesActions'
import Activity from "../components/Activity";
import "../styles/App.css";
import "../styles/CardDetails.css"


const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

function Details(props) {
  const { id } = useParams();
  const [detailData, setDetailData] = useState(props.allCities.filter(city => city._id === id));
  const [dataItinerary, setDataItinerary] = useState([])
  const [expanded, setExpanded] = React.useState(false);
  const [inputText, setInputText] = useState("");
  const [ modify, setModify ] = useState(false);
  const [ reload, setReload ] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };


  useEffect(() => {
    if (props.allCities < 1) {
      props.getOneCity(id)
        .then(response => setDetailData(response))
    }

    props.getItinerariesPerCity(id)
      .then(response => setDataItinerary(response))

    props.getAllActivities()


  }, []);

  function LikeButton(idItinerary) {
    if (props.user) {
    props.likeItinerary(idItinerary)
      .then(response => setDataItinerary(response))
  } else {
    alert("You must be logged in to like an itinerary")
  }
}

  function addComment(id) {
    console.log(id, inputText)
    // setReload(!reload)
    const commentData = {
      itineraryId: id,
      comment: inputText
    }
    props.addComment(commentData)
      .then(response => setDataItinerary(response))
  }

  function modifyComment(event) {
    console.log(event.target.id)
    console.log(modify)
    const commentData = {
      itineraryId: event.target.id,
      comment: modify,
    }
    props.modifyComment(commentData)
    .then(response => setDataItinerary(response))
    }
    
    function deleteComment(id) { 
      props.deleteComment(dataItinerary.target.id)
      .then(response => console.log(response))
  }

  // async function modifyComment(id) {
  //   const commentData = {
  //     itineraryId: id,
  //     comment: modify,
  //   }
  //   await props.modifyComment(commentData)
  //   setReload(!reload)

  // }
  // async function deleteComment(id) {
  //   await props.deleteComment(id)
  //   setReload(!reload)
  // }


  if (!detailData) {
    return (<h1> Loading... Please Wait </h1>)
  }



  {/* CITY ------------------------------------ */ }
  

  return (
    <div className="card-detail-main">
    
      {/* <div className="titleDetails" >{detailData.map((city) => city.name)}</div> */}
      {/* {console.log(props)} */}
      <div className="details-container" >
        {detailData?.map((city) => (
          <Card key={city._id2}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="200"
                image={process.env.PUBLIC_URL + `/images/${city.image}`}
                alt=""
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  <p>{city.name}</p>
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        ))}
      </div>

      {/* <div className="titleDetails">{detailData.map((city) => city.name)}</div> */}
      <h2>Here you can see the recommended itineraries for this city. Enjoy!</h2>


      {/* ITINERARY ------------------------------------ */}



      <div className="details-container-itinerary">
        {/* {console.log(dataItinerary)} */}
        {dataItinerary.length ? (
          dataItinerary.map((itinerary) => (
            <Card sx={{ width: '75%' }} key={itinerary._id}>
              <CardHeader
                avatar={
                  <Avatar >

                  </Avatar>
                }
                action={
                  <IconButton aria-label="settings">
                    <MoreVertIcon />
                  </IconButton>
                }
                title={itinerary.title}
              />
              <CardMedia
                component="img"
                height="200"
                image={process.env.PUBLIC_URL + `/images/${itinerary.src}`}
                alt="img"
              />
              <CardContent>
                <Typography variant="body2" color="text.secondary">

                </Typography>
              </CardContent>
              <CardActions disableSpacing>

                <IconButton aria-label="add to favorites" onClick={() => {
                  LikeButton(itinerary._id)
                }}>
                  <FavoriteIcon /> <span>{itinerary.likes.length}</span>
                </IconButton>

                <IconButton aria-label="share">
                  <ShareIcon />
                </IconButton>
                <ExpandMore
                  expand={expanded}
                  onClick={handleExpandClick}
                  aria-expanded={expanded}
                  aria-label="show more"
                >
                  <ExpandMoreIcon />
                </ExpandMore>
              </CardActions>
              <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent>
                  <Typography paragraph>
                    <h4>{itinerary.description}</h4>
                  </Typography>
                  <Typography paragraph>
                    <div className="price-duration">
                      <h4 className="price">Price: {"💵".repeat(itinerary.price)}</h4>
                    </div>
                  </Typography>
                  <Typography paragraph>
                    <h4 className="duration">Duration: {itinerary.time} hs 🕑</h4>
                  </Typography>
                  <Typography paragraph>
                    <h4>Hashtags #:{itinerary.hashtags}</h4>
                    <h4>Likes: {itinerary.likes}</h4>
                  </Typography>
                </CardContent>

                {/* ACTIVITY CALL */}
              <Activity itinerary = {itinerary._id}/>
              </Collapse>

              {itinerary?.comments.map(comment =>
                  <>
                  {console.log(comment.userId)}
                    {comment.userId?._id !== props.user?.id ?
                      <div class="card cardComments " key={comment._id}>
                        <div class="card-header">
                          {comment.userId?.fullName}
                        </div>
                        <div class="card-body-comments">
                          <p class="card-text-comment">{comment.comment}</p>
                        </div>
                      </div> :

                      <div class="card cardComments">
                        <div class="card-header">
                          {comment.userId?.fullName}
                        </div>
                        <div class="card-body-comments">
                          <textarea type="text" className="card-text textComments" onChange={(event) => setModify(event.target.value)} defaultValue={comment.comment} />
                          <button id={comment._id} onClick={modifyComment} class="btn btn-primary">Edit</button>
                          <button id={comment._id} onClick={deleteComment} class="btn btn-primary">Delete</button>
                        </div>
                      </div>

                    }
                  </>
                )}


                {props.user ?
                  <div class="card cardComments">
                    <div class="card-header">
                    LEAVE US YOUR COMMENT! 
                    </div>
                    <div class="card-body-addcomment ">
                      <textarea onChange={(event) => setInputText(event.target.value)} className="card-text textComments" value={inputText} />
                      <button onClick={() => { addComment(itinerary._id) }} class="btn btn-primary"> OK! </button>
                    </div>
                  </div> :
                  <h1>Do Sign In to make a Comment! Thank You!</h1>
                }


            </Card>
          ))
        ) : (
          <h1> There's no itineraries for this city yet. Come back soon! </h1>
        )}
      </div>


    </div >
  );
}

const mapStateToProps = (state) => {
  return {
    allCities: state.citiesReducer.allCities,
    itineraries: state.itinerariesReducer.allCities,
    auxiliar: state.itinerariesReducer.allCities,
    user: state.userReducer.user,
    activities: state.itinerariesReducer.activities,
  }
}

const mapDispatchToProps = {
  getCities: citiesActions.getCities,
  getOneCity: citiesActions.getOneCity,
  getItinerariesPerCity: itinerariesActions.getItinerariesPerCity,
  getAllItineraries: itinerariesActions.getAllItineraries,
  likeItinerary: itinerariesActions.likeItinerary,
  getAllActivities: itinerariesActions.getAllActivities,
  getActivitiesPerItinerary: itinerariesActions.getActivitiesPerItinerary,
  addComment: itinerariesActions.addComment,
  modifyComment: itinerariesActions.modifyComment,
  deleteComment: itinerariesActions.deleteComment,

}


export default connect(mapStateToProps, mapDispatchToProps)(Details)