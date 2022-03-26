import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Button, CardActionArea, CardActions } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
// import { getAllCities } from "../apiCalls";
import { connect } from 'react-redux'
import { styled } from '@mui/material/styles';
import CardHeader from '@mui/material/CardHeader';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import { FaHeart, FaRegHeart } from 'react-icons/fa'
// import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import citiesActions from '../redux/actions/citiesActions'
import itinerariesActions from '../redux/actions/itinerariesActions'
import Activity from "../components/Activity";
import "../styles/App.css";
import "../styles/CardDetails.css"
import "../styles/card.css"


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
  const [dataPrueba, setDataPrueba] = useState([])


  const [expanded, setExpanded] = React.useState(false);
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  useEffect(() => {
    if (props.allCities < 1) {
      props.getOneCity(id)
        .then(response => setDetailData(response))
    }

    props.getItinerariesPerCity(id)
      .then(response => setDataPrueba(response))

    props.getAllActivities()

  }, []);

  function LikeButton(idItinerary) {
    props.likeItinerary(idItinerary)
      .then(response => setDataPrueba(response))
  }



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
        {console.log(dataPrueba)}
        {dataPrueba.length ? (
          dataPrueba.map((itinerary) => (
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
              <Activity itinerary = {itinerary._id}/>
              </Collapse>
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
  }
}

const mapDispatchToProps = {
  getCities: citiesActions.getCities,
  getOneCity: citiesActions.getOneCity,
  getItinerariesPerCity: itinerariesActions.getItinerariesPerCity,
  getAllItineraries: itinerariesActions.getAllItineraries,
  likeItinerary: itinerariesActions.likeItinerary,
  getAllActivities: itinerariesActions.getAllActivities,

}


export default connect(mapStateToProps, mapDispatchToProps)(Details)