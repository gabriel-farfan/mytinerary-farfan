import { useEffect, useState } from "react"
import { connect } from 'react-redux'
import { useParams } from "react-router-dom";
import Card from "@mui/material/Card";
import CardHeader from '@mui/material/CardHeader';
// import IconButton from '@mui/material/IconButton';
// import MoreVertIcon from '@mui/icons-material/MoreVert';
import CardMedia from "@mui/material/CardMedia";
import itinerariesActions from '../redux/actions/itinerariesActions'



function Activity(props) {
    const { id } = useParams();
    const [activityData, setActivityData] = useState(props.allActivities.filter(activity => activity.itineraryId === props.itinerary))


    useEffect(() => {
        if (props.allActivities < 1) {
            props.getAllActivities()
                .then(response => setActivityData(response))
        }
        // props.getActivitiesPerItinerary(id)
            // .then(response => activityData(response))
    }, []);

    // props.allActivities.map(activity => {
    //     console.table(activity)
    // })


    return (
        <>
            <div className="activity-container">
                {console.log(props)}
                {activityData ? ( activityData.map((activity) => (
                        <Card sx={{ width: '75%' }} key={activity._id}>
                            {console.log(activity)}
                            <CardHeader
                                title={activity.name}
                            />
                            <CardMedia
                                component="img"
                                height="200"
                                image={process.env.PUBLIC_URL + `/images/${activity.photo}`}
                                alt="img"
                            />
                        </Card>
                    ))
                ) : (
                    <h1> There's no Activities now! Come back soon! </h1>
                )}
            </div>

        </>
    )

}


const mapDispatchToProps = {
    getAllActivities: itinerariesActions.getAllActivities,
}

const mapStateToProps = (state) => {
    return {
        allActivities: state.itinerariesReducer.activities,
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Activity)