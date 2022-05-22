import React, { useState } from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/system';
import { Accordion, AccordionDetails, AccordionSummary, Card, CardContent, CardHeader } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export function Research() {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(0);

  return (
    <Box sx={{ display: 'flex' , flexDirection: 'column', alignItems:'center'}}>
      <Card sx={{ maxWidth:700 , width: {xs:285, md:700}}}>
        
        
      <CardContent>
         
          <Typography variant="body1" color="text.secondary" textAlign="justify">
          <p> I am broadly interested in the connections between logic and computer science.</p>
          <p> My PhD thesis is on a model theoretic
            exploration of Term Modal Logic 
            (Links to <a href="https://www.imsc.res.in/xmlui/bitstream/handle/123456789/452/HBNI%20Th164.pdf?sequence=1&isAllowed=y" target="_blank" rel="noreferrer noopener" >thesis</a>, <b>synopsis</b>  and PhD defense <b>slides</b>). 
            </p>
            <p> I have worked on a 
            new syntactic paradigm of First Order Modal Logic called the Bundled fragment and the decidable fragments arising from it
            (<b>this</b>  paper provides an overview).
          </p>
          <p>
            In my current Post Doctoral research I am working on evaluating queries on inconsistent databases
            (<b>here</b> is a brief description of the problem). I have also worked on strategy logic for games 
            (Related papers can be found <a href="https://link.springer.com/chapter/10.1007/978-3-030-88708-7_4" target="_blank" rel="noreferrer noopener">here</a> and <a href="https://www.isichennai.res.in/~sujata/papers/2018-loft.pdf" target="_blank" rel="noreferrer noopener">here</a>).
          </p>
          <p>
            Here are the links to my <a href="https://dblp.org/pid/217/2949.html" target="_blank" rel="noreferrer noopener">DBLP</a> and <a href="https://scholar.google.com/citations?user=10ihAiIAAAAJ" target="_blank" rel="noreferrer noopener">Google scholar</a> profiles.
          </p>

          </Typography>
          
                  </CardContent>
        </Card>
        <Card sx={{ maxWidth:700 , width: {xs:285, md:700}}}>
        <CardHeader title='List of Publications'/>
      <CardContent>
   <List sx={{ maxWidth:700 , width: {xs:285, md:700}, bgcolor: 'background.paper'}}>
   <ListItem alignItems="flex-start">
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <ListItemText
          primary="Reasoning in Large Games with Unboundedly Many Players "
          secondary={
              <Typography
                variant="body1"
                color="text.secondary"
              > 
               Ramit Das, Anantha Padmanabha and R. Ramanujam &ensp;&ensp;&ensp; (LORI, 2021)
              </Typography>
          }
        />
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant="body1"
                color="text.secondary" textAlign="justify">
          <p>Abstract. In large anonymous games, payoffs are determined by strategy distributions
             rather than strategy profiles. If half the players choose a strategy <i>a</i>, all of them get
              a certain payoff, whereas if only one-third of the players choose that strategy, 
              the players choosing may get a different payoff. Strategizing in such a game by a player 
              involves reasoning about not who does what but what fraction of the population makes the
               same choice as that player.</p>
               <p>
                  We present a simple modal logic to reason about such strategization in large games. 
                  Since actual numbers are irrelevant, a player need not even know how many others are
                  in the game, thus leading to the consideration of games with unboundedly many players.
                  The logic we consider is the propositional modal fragment of a first order modal logic.
                  We show that it has a bounded agent property, giving us a decision procedure for satisfiability.
                  We also present a complete axiomatization of the valid formulas. The logic admits a natural
                   model checking algorithm and bisimulation characterization.
                    The logic with quantification over players is more appropriate, but is undecidable.
             </p>
             <a href="https://link.springer.com/chapter/10.1007/978-3-030-88708-7_4" target="_blank" rel="noreferrer noopener">Click here</a> for the paper.
          </Typography>
        </AccordionDetails>
      </Accordion>
      
      </ListItem>
      <Divider variant="inset" component="li" />

      <ListItem alignItems="flex-start">
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <ListItemText
          primary="Relative Expressive Powers of First Order Modal Logic and Term Modal Logic "
          secondary={
              <Typography
                variant="body1"
                color="text.secondary"
              >
                Anantha Padmanabha &ensp;&ensp;&ensp; (ICLA, 2021)
              </Typography>
          }
        />
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant="body1"
                color="text.secondary" textAlign="justify">
          <p>Abstract. First Order Modal logic(FOML) is a natural language to reason about modal properties of predicates.
          In FOML, an example formula would be ∀x∃y 􏰁 Q(x, y);. 
          Term modal logic(TML) was introduced to reason about unboundedly many agents and a typical formula
           in TML looks like ∀x∃y 􏰁<sub>x</sub>Q(x,y). Considering the close similarities between the two logics, in this paper, 
           we explore their relative expressive powers over K-frames. </p>
           <p>
            We prove that every k-variable TML formula can be expressed as a k-variable FOML formula. 
            Conversely, every k-variable FOML formula can be expressed as a k + 1-variable formula in TML. 
            This proves that both the logics have the same expressive power over unboundedly many variables. 
            On the other hand, for every k we show 
            that the k-variable fragment of FOML is strictly more expressive
             than k-variable fragment of TML.
             </p>
             <a href="https://www.isichennai.res.in/~sujata/icla2021/proceedings.pdf#page=97" target="_blank" rel="noreferrer noopener">Click here</a> for the paper.
          </Typography>
        </AccordionDetails>
      </Accordion>
      
      </ListItem>

      <Divider variant="inset" component="li" />

      <ListItem alignItems="flex-start">
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <ListItemText
          primary="Verifying Implicitly Quantified Modal Logic over Dynamic Networks of Processes"
          secondary={
              <Typography
                variant="body1"
                color="text.secondary"
                textAlign="justify"
              >
                Anantha Padmanabha and R. Ramanujam&ensp;&ensp;&ensp; (ICDCIT, 2020)
              </Typography>
          }
        />
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant="body1"
                color="text.secondary" textAlign="justify">
          <p>Abstract. When we consider systems with process creation and exit, we have potentially 
            infinite state systems where the number of processes alive at any state is unbounded. 
            Properties of such systems are naturally specified using modal logics with quantification, 
            but they are hard to verify even over finite state systems. In [Padmanabha and Ramanujam, 2019] we proposed 𝖨𝖰𝖬𝖫, an implicitly
            quantified modal logic where we can have assertions of the form every live agent has an  
            𝛼-successor, and presented a complete axiomatization of valid formulas. 
            Here we show that model checking for 𝖨𝖰𝖬L  is efficient even when we consider systems
            with infinitely many processes, provided we can efficiently present such collections of processes, 
            and check non-emptiness of intersection efficiently. As a case study, we present a model checking 
            algorithm over systems in which at any state, the collection of live processes is regular.
             </p>
             <a href="https://link.springer.com/chapter/10.1007/978-3-030-36987-3_10" target="_blank" rel="noreferrer noopener">Click here</a> for the paper.
          </Typography>
        </AccordionDetails>
      </Accordion>
      
      </ListItem>

      <Divider variant="inset" component="li" />
      
      <ListItem alignItems="flex-start">
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <ListItemText
          primary="Two variable fragment of Term Modal Logic "
          secondary={
              <Typography
                variant="body1"
                color="text.secondary"
                textAlign="justify"
              >
                Anantha Padmanabha and R. Ramanujam &ensp;&ensp;&ensp; (MFCS, 2019)
              </Typography>
          }
        />
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant="body1"
                color="text.secondary" textAlign="justify">
          <p>Abstract. Term modal logics (TML) are modal logics with unboundedly many modalities, 
            with quantification over modal indices, so that we can have formulas of the form 
            ∀x∃y 􏰁<sub>x</sub>Q(x,y). 
            Like First order modal logic, TML is also "notoriously" undecidable, 
            in the sense that even very simple fragments are undecidable. 
            In this paper, we show the decidability of one interesting fragment, 
            that of two variable TML. This is in contrast to two-variable First order modal logic, which is undecidable.
             </p>
             <a href="https://drops.dagstuhl.de/opus/volltexte/2019/10974/pdf/LIPIcs-MFCS-2019-30.pdf" target="_blank" rel="noreferrer noopener">Click here</a> for the paper.
          </Typography>
        </AccordionDetails>
      </Accordion>
      
      </ListItem>
      <Divider variant="inset" component="li" />

      <ListItem alignItems="flex-start">
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <ListItemText
          primary="The Monodic Fragment of Propositional Term Modal Logic "
          secondary={
              <Typography
                variant="body1"
                color="text.secondary"
                textAlign="justify"
              >
                Anantha Padmanabha and R. Ramanujam &ensp;&ensp;&ensp; (Studia Logica, 2019)
              </Typography>
          }
        />
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant="body1"
                color="text.secondary" textAlign="justify">
          <p>Abstract. We study term modal logics, where modalities can be indexed by
             variables that can be quantified over. We suggest that these logics are 
             appropriate for reasoning about systems of unboundedly many reasoners and
             define a notion of bisimulation which preserves propositional fragment of term modal logics. 
             Also we show that the propositional fragment is already undecidable but that its monodic fragment
            (formulas using only one free variable in the scope of a modality) is decidable, and expressive
             enough to include interesting assertions.
             </p>
             <a href="https://link.springer.com/article/10.1007%2Fs11225-018-9784-x" target="_blank" rel="noreferrer noopener">Click here</a> for the paper.
          </Typography>
        </AccordionDetails>
      </Accordion>
      
      </ListItem>

      <Divider variant="inset" component="li" />

      <ListItem alignItems="flex-start">
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <ListItemText
          primary="Propositional Modal Logic with Implicit Modal Quantification "
          secondary={
              <Typography
              variant="body1"
              color="text.secondary" textAlign="justify"
              >
                Anantha Padmanabha and R. Ramanujam &ensp;&ensp;&ensp; (ICLA, 2019)
              </Typography>
          }
        />
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant="body1"
                color="text.secondary" textAlign="justify">
          <p>Abstract. Propositional term modal logic is interpreted over Kripke structures with
             unboundedly many accessibility relations and hence the syntax admits variables indexing
             modalities and quantification over them. This logic is undecidable, and we consider a
             variable-free propositional bi-modal logic with implicit quantification. 
             Thus  [∀]𝛼 asserts necessity over all accessibility relations and 
             [∃]𝛼 is classical necessity over some accessibility relation. 
             The logic is associated with a natural bisimulation relation over models and we show 
             that the logic is exactly the bisimulation invariant fragment of a two sorted first order logic. 
             The logic is easily seen to be decidable and admits a complete axiomatization of valid formulas.
              Moreover the decision procedure extends naturally to the ‘bundled fragment’ of full term modal logic.
             </p>
             <a href="https://link.springer.com/chapter/10.1007/978-3-662-58771-3_2" target="_blank" rel="noreferrer noopener">Click here</a> for the paper.
          </Typography>
        </AccordionDetails>
      </Accordion>
      
      </ListItem>

      <Divider variant="inset" component="li" />

      <ListItem alignItems="flex-start">
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <ListItemText
          primary="Bundled Fragments of First-Order Modal Logic: (Un)Decidability"
          secondary={
              <Typography
              variant="body1"
              color="text.secondary" textAlign="justify"
              >
                Anantha Padmanabha, R. Ramanujam and Yanjing Wang&ensp;&ensp;&ensp; (FSTTCS, 2018)
              </Typography>
          }
        />
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant="body1"
                color="text.secondary" textAlign="justify">
          <p>Abstract. Quantified modal logic is notorious for being undecidable, with very few known decidable fragments
             such as the monodic ones. For instance, even the two-variable fragment over unary predicates is undecidable. 
             In this paper, we study a particular fragment, namely the bundled fragment, where a first-order quantifier is
             always followed by a modality when occurring in the formula, inspired by the proposal of [Yanjing Wang, 2017] 
             in the context of non-standard epistemic logics of know-what, know-how, know-why, and so on. As always with 
             quantified modal logics, it makes a significant difference whether the domain stays the same across possible
             worlds. In particular, we show that the predicate logic with the bundle "forall Box" alone is undecidable over
             constant domain interpretations, even with only monadic predicates, whereas having the "exists Box" bundle instead
             gives us a decidable logic. On the other hand, over increasing domain interpretations, we get decidability with
             both "forall Box" and "exists Box" bundles with unrestricted predicates, where we obtain tableau based procedures
             that run in PSPACE. We further show that the "exists Box" bundle cannot distinguish between constant domain and
             variable domain interpretations.
                         
          </p>
             <a href="https://drops.dagstuhl.de/opus/volltexte/2018/9942/pdf/LIPIcs-FSTTCS-2018-43.pdf" target="_blank" rel="noreferrer noopener">Click here</a> for the paper.
          </Typography>
        </AccordionDetails>
      </Accordion>
      
      </ListItem>

      <Divider variant="inset" component="li" />

      <ListItem alignItems="flex-start">
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <ListItemText
          primary="Revisiting games in dynamic-epistemic logic"
          secondary={
              <Typography
              variant="body1"
              color="text.secondary" textAlign="justify"
              >
                Anantha Padmanabha and Sujata Ghosh&ensp;&ensp;&ensp; (LOFT, 2018)
              </Typography>
          }
        />
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant="body1"
                color="text.secondary" textAlign="justify">
          <p>Abstract. We revisit the discussion on reasoning about games in dynamic-epistemic logic
             and present a language for describing reasoning in possibly infinite games from the perspective
             of the players. We argue that even though a plethora of sophisticated logics of strategic reasoning 
             in games are available, it is still worthwhile to consider the game structures themselves from the 
             perspective of logic. In the process, we provide complete axiom systems for these games satisfying 
             characteristic properties from the game- theoretic literature. Decidability of the satisfiability problem 
             is also taken up to consider the existence of games following certain rules that can be expressed in the 
             logical language.
                         
          </p>
             <a href="https://www.isichennai.res.in/~sujata/papers/2018-loft.pdf" target="_blank" rel="noreferrer noopener">Click here</a> for the paper.
          </Typography>
        </AccordionDetails>
      </Accordion>
      
      </ListItem>

      <Divider variant="inset" component="li" />

      <ListItem alignItems="flex-start">
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <ListItemText
          primary="Model checking a logic over systems with regular sets of processes"
          secondary={
              <Typography
              variant="body1"
              color="text.secondary" textAlign="justify"
              >
                Anantha Padmanabha and R. Ramanujam&ensp;&ensp;&ensp; (CEUR, 2017)
              </Typography>
          }
        />
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant="body1"
                color="text.secondary" textAlign="justify">
          <p>Abstract. Though systems with process creation give rise to unboundedly many processes, 
            their names are systematically generated and typi- cally form a regular set. 
            When we consider modal logics to specify properties of such systems, it is natural to 
            consider quantification over such regular sets. These are in the realm of term modal logics, 
            which are usually undecidable. We consider the monodic variant, in which there is only one free 
            variable in the scope of any modality, and present a model checking algorithm for this logic.
                         
          </p>
             <a href="http://ceur-ws.org/Vol-1819/dias2017-paper5.pdf" target="_blank" rel="noreferrer noopener">Click here</a> for the paper.
          </Typography>
        </AccordionDetails>
      </Accordion>
      
      </ListItem>
      
    </List>
    </CardContent>
        </Card>
    </Box>
  );
}