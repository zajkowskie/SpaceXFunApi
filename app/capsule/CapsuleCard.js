import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
// import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
// import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Image, StyleSheet, View } from 'react-native'
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

export default function CapsuleCard({ capsule }) {
    const [expanded, setExpanded] = React.useState(false);
    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    return (
        <View styles={styles.cardWrapper} >
            <Card sx={{ maxWidth: 345 }} >
                <CardHeader
                    avatar={
                        <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                            <Image source={require("../assets/rocket.png")} />
                        </Avatar>
                    }
                    title={capsule.name}
                    subheader={capsule.first_flight}
                />
                <CardMedia
                    component="img"
                    height="194"
                    image={capsule.flickr_images[0]}
                    alt={capsule.name}
                />
                <CardContent>
                    <Typography variant="body2" color="text.secondary">
                        {capsule.description}
                    </Typography>
                </CardContent>
                <CardActions disableSpacing>

                    <ExpandMore
                        expand={expanded}
                        onClick={handleExpandClick}
                        aria-expanded={expanded}
                        aria-label="show more"
                    >
                        \/
                    </ExpandMore>
                </CardActions>
                <Collapse in={expanded} timeout="auto" unmountOnExit>
                    <CardContent>
                        <Typography paragraph>
                            Height : {capsule.height.meters}
                        </Typography>
                        <Typography paragraph>
                            Mass : {capsule.mass.kg}
                        </Typography>
                        <Typography paragraph>
                            Diameter : {capsule.diameter.meters}
                        </Typography>

                    </CardContent>
                </Collapse>
            </Card>
        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        margin: '10px'
    },
    cardWrapper: {
        margin: 10
    },
})