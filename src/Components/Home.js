import { ExpandMore } from '@mui/icons-material';
import { Card, CardActionArea, CardActions, CardContent, CardMedia, Collapse, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export function Home() {
  // Declare a new state variable, which we'll call "count"
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Box sx={{ display: 'flex' , justifyContent: 'center'}}>
    <Card sx={{ maxWidth:700 , width: {xs:350, md:700}}}>
      <CardActionArea sx={{ alignItems: 'center'}}>
        <CardMedia
          component="img"
          height="400"
          image={require("../images/Anantha.jpg")}
          
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Anantha Padmanabha
          </Typography>
          <Typography variant="body1" color="text.secondary">
          <p>
            I am a Post Doctoral researcher at the  <a href="https://team.inria.fr/valda/" target="_blank" rel="noreferrer noopener">VALDA</a> team at <a href="https://www.ens.psl.eu/" target="_blank" rel="noreferrer noopener">ENS</a>, Paris 
           with <a href="https://who.rocq.inria.fr/Luc.Segoufin/" target="_blank" rel="noreferrer noopener">Luc Segoufin</a>.
          </p>
          <p>
          Before this, I was a Post Doctoral researcher at <a href="https://www.irif.fr/en/index" target="_blank" rel="noreferrer noopener"> IRIF</a>, Paris 
          with <a href="https://www.irif.fr/~cristina/" target="_blank" rel="noreferrer noopener">Cristina Sirangelo</a>.
          </p>
          <p>
            I did my PhD at <a href="https://www.imsc.res.in/" target="_blank" rel="noreferrer noopener">IMSc</a>, Chennai under the supervision of <a href="https://www.imsc.res.in/r_ramanujam" target="_blank" rel="noreferrer noopener" > R. Ramanujam</a>.

          </p>
          </Typography>
          
          
        </CardContent>
      </CardActionArea>
      <CardActions disableSpacing>
       Contact
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
          <p>DI, ENS Ulm, 45 rue d'Ulm, 75005 Paris, FRANCE </p>
          <p>Escalier A, last floor</p>
          <p> Tel : (33-1) ????</p>
          <p>Email : ??? </p>

          </Typography>
         
         
        </CardContent>
      </Collapse>
    </Card>

    </Box>
  );
}
