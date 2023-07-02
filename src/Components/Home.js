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
              I am an assistant professor at&nbsp;
               <Link href="https://www.iitdh.ac.in/" color="inherit" target="_blank" rel="noreferrer noopener">IIT, Dharwad</Link>&nbsp;
               in the <Link href="https://www.iitdh.ac.in/cse.php" color="inherit" target="_blank" rel="noreferrer noopener"> Department of Computer Science and Engineering</Link>.
              I am broadly interested in understanding the role of mathematical logic in computer science.
            </p>
          <p>
            I was a Post Doctoral researcher at the &nbsp;
            <Link href="https://team.inria.fr/valda/" color="inherit"
                  target="_blank" rel="noreferrer noopener">VALDA</Link> team at &nbsp;
            <Link href="https://www.ens.psl.eu/"
                  color="inherit" target="_blank" rel="noreferrer noopener">Ecole Normale Superieure</Link>, Paris (from Jaunary 2022 to June 2023) and
            at the <Link href="https://www.irif.fr/en/index" color="inherit"
                         target="_blank" rel="noreferrer noopener">Institut de Recherche en Informatique Fondamentale</Link>, Paris
              (from Jaunary 2020 to December 2021).
            I did my PhD at the <Link color="inherit" href="https://www.imsc.res.in/" target="_blank" rel="noreferrer noopener">Institute of Mathematical Sciences</Link>, Chennai.
            I was also a part-time faculty at the <Link href="https://www.nyu.edu/paris.html" color="inherit" target="_blank" rel="noreferrer noopener">New York University (Paris campus)</Link>&nbsp; (from January 2022 to May 2023).
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
          Office 2A7, Indian Institute of Technology, Dharwad 580011
         <br></br>
          Email : <br></br>
            ananthap(at)iitdh(dot)ac(dot)in<br></br>
            anantha(dot)5491(at)gmail(dot)com
          </Typography>
        </CardContent>
      
     
    </Card>

    </Box>
  );
}
