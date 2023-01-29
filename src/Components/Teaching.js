import React, { useState } from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/system';
import { Accordion, AccordionDetails, AccordionSummary } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { Link } from '@mui/material';
import { Card, CardContent, CardHeader } from '@mui/material';


function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export function Teaching() {
  // Declare a new state variable, which we'll call "count"
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <Card sx={{ maxWidth: 700, width: { xs: 285, md: 700 } }}>


        <CardContent>

          <Typography fontSize="19px" textAlign="justify">
            <p>  I am a part-time faculty at <Link href="https://www.nyu.edu/paris.html" color="inherit" target="_blank" rel="noreferrer noopener">NYU (Paris campus) </Link>
              where I typically  offer a course each semester on Database Management for undergraduate students.
            </p>

            <p>
              I was involved in organizing summer schools at the Institute of Mathematical Sciences, Chennai
              aimed at undergraduate and graduate students where I have taught various topics in
              theoretical computer science.
            </p>
            <p>
              I have also designed and taught a short course at Indian Institute of Science,
              Bangalore on ‘Proofs in First Order Logic’ under the <Link href="https://siddhartha-gadgil.github.io/TrainLogic/index.html#" color="inherit" target="_blank" rel="noreferrer noopener">TrainLogic</Link> program.

            </p>
            <p>

              I was a co-organizer of the 2nd conference on  <Link href="https://www.imsc.res.in/~cmsc2014/" color="inherit" target="_blank" rel="noreferrer noopener">Creative Mathematical Sciences Communication </Link>.
            </p>

            <p>
               We have translated the English version of a short article
              on <Link href="https://www.imsc.res.in/~kamal/sci/ecl20.pdf" color="inherit" target="_blank" rel="noreferrer noopener">Annular Solar Eclipse </Link>
              into Kannada.

            </p>
          </Typography>

        </CardContent>
      </Card>
      <Box sx={{ width: '100%' }}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
            <Tab label={<Typography variant="h6" textAlign="center">Courses</Typography>} {...a11yProps(0)} />


          </Tabs>
        </Box>
        <TabPanel value={value} index={0}>

          <List sx={{ maxWidth: 700, width: { xs: 285, md: 700 }, bgcolor: 'background.paper' }}>
            <ListItem alignItems="flex-start">

              <ListItemText
                primary={<Typography variant="h6">Data Management and Analysis (Ongoing)</Typography>}
                secondary={
                  <Typography
                    variant="subtitle1"
                  >
                    Spring, 2023&ensp;&ensp;&ensp; (NYU, Paris)
                  </Typography>
                }
              />
            </ListItem>
            <Divider variant="inset" component="li" />
            <ListItem alignItems="flex-start">

              <ListItemText
                primary={<Typography variant="h6">Data Management and Analysis</Typography>}
                secondary={
                  <Typography
                    variant="subtitle1"
                  >
                    Fall, 2022&ensp;&ensp;&ensp; (NYU, Paris)
                  </Typography>
                }
              />
            </ListItem>
            <Divider variant="inset" component="li" />

            <ListItem alignItems="flex-start">
              <ListItemText
                primary={<Typography variant="h6">Data Management and Analysis </Typography>}
                secondary={
                  <Typography
                    variant="subtitle1"
                  >
                    Spring, 2022&ensp;&ensp;&ensp; (NYU, Paris)
                  </Typography>
                }
              />
            </ListItem>
          <Divider variant="inset" component="li" />
        </List>

      </TabPanel>


    </Box>
       
    </Box >
  );
}