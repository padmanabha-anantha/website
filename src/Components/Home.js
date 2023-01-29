import { ExpandMore } from '@mui/icons-material';
import { Card, CardActionArea, CardActions, CardContent, CardMedia, Collapse, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Link from '@mui/material/Link';
{/*import CV from '../resources/CV-Anantha.pdf' */}


export function Home() {
  // Declare a new state variable, which we'll call "count"
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Box sx={{ display: 'flex' , justifyContent: 'center' }}>
    <Card sx={{ maxWidth:700 , width: {xs:350, md:700}, alignItems: 'center'}}>
     
        <CardMedia
          component="img"
          height="500"
          image={require("../images/Anantha.png")}
          
        />
        <CardContent>
          
          <Typography variant="h6" >
          <p>
            I am a Post Doctoral researcher at the <Link href="https://team.inria.fr/valda/" color="inherit" target="_blank" rel="noreferrer noopener">VALDA</Link> team at  <Link href="https://www.ens.psl.eu/" color="inherit" target="_blank" rel="noreferrer noopener">ENS, Paris</Link>. I am also a part-time faculty at <Link href="https://www.nyu.edu/paris.html" color="inherit" target="_blank" rel="noreferrer noopener">NYU (Paris campus) </Link>.
            I did my PhD at <Link color="inherit" href="https://www.imsc.res.in/" target="_blank" rel="noreferrer noopener">IMSc, Chennai</Link>.
            I am broadly interested in the connections between logic and computer science. 
              
            </p>
            <p>

            I am also passionate about teaching and learning new things. 
            Apart from research I like to  solve puzzles.  
            {/* <Link href={CV} target="_blank" rel="noreferrer noopener">Here</Link> is a link to my CV. */}
          
          </p>
            
          </Typography>
          <Typography gutterBottom variant="h5" component="div" >
            Contact
          </Typography>
          <Typography paragraph variant="h6">
          DI, ENS Ulm, 45 rue d'Ulm, 75005 Paris, FRANCE 
          Escalier A, last floor
         <br></br>
          Email : anantha(dot)padmanabha(at)inria(dot)fr

          </Typography>
        </CardContent>
      
     
    </Card>

    </Box>
  );
}
