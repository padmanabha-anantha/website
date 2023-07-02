import React, {useState} from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemIcon from '@mui/material/ListItemIcon';

import {InlineTex} from 'react-tex';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import {Box} from '@mui/system';
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Card,
  CardContent,
  CardHeader,
  ListSubheader
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import {Link} from '@mui/material';
import cqaICDT from '../resources/CQA.pdf'

{/* import RS from '../resources/research.pdf'
import CircleIcon from '@mui/icons-material/Circle'; */
}

function TabPanel(props) {
  const {children, value, index, ...other} = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{p: 3}}>
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

export function Research() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };


  return (
    <Box sx={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
      <Card sx={{maxWidth: 700, width: {xs: 285, md: 700}}}>


        <CardContent>

          <Typography fontSize="19px" textAlign="justify">
            <p>
              I am currently working on the foundations of databases and modal logics.
              In the former, we are working on the problem of evaluating queries over databases that violate
              integrity constraints and also on some fundamental problems that arise in the context of graph databases.
              In the latter, I am working on identifying new decidable fragments of First Order Modal Logic and other
              related
              problems.
              Strategy logic for games is another area that I have explored where I am worked on logics to specify
              player strategies

            </p>

            <p>
              My <Link href="http://www.hbni.ac.in/phdthesis/math/MATH10201305001.pdf" target="_blank"
                       rel="noreferrer noopener">PhD thesis</Link> (defended in December 2019) under the supervision
              of <Link href="https://www.imsc.res.in/r_ramanujam" target="_blank" rel="noreferrer noopener">R.
              Ramanujam </Link>) is on a model theoretic
              study of Term Modal Logic. In particular, we study the satisfiability problem and bisimulation for various
              fragments of the logic.
            </p>

            <p>

              Here are the links to my <Link href="https://dblp.org/pid/217/2949.html" target="_blank"
                                             rel="noreferrer noopener">DBLP</Link> and <Link
              href="https://scholar.google.com/citations?user=10ihAiIAAAAJ" target="_blank" rel="noreferrer noopener">Google
              scholar</Link> profiles.

            </p>
            {/*
            <p>
            <Link href={RS} target="_blank" rel="noreferrer noopener">Here</Link> is a link  to a brief summary of my research. 
            </p> */}


          </Typography>

        </CardContent>
      </Card>
      <Box sx={{width: '100%'}}>
        <Box sx={{borderBottom: 1, borderColor: 'divider'}}>
          <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
            <Tab label={<Typography variant="h6" textAlign="center">Publications</Typography>} {...a11yProps(0)} />

            <Tab
              label={<Typography variant="h6" textAlign="center">Academic activities</Typography>} {...a11yProps(1)} />

          </Tabs>
        </Box>
        <TabPanel value={value} index={0}>


          <List sx={{maxWidth: 700, width: {xs: 285, md: 700}, bgcolor: 'background.paper'}}>

            <ListItem alignItems="flex-start">
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon/>}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <ListItemText
                    primary={<Typography variant="h6"> Are bundles good deals for First-Order Modal Logic? </Typography>}
                    secondary={
                      <Typography
                        variant="subtitle1"
                      >
                        Mo Liu, Anantha Padmanabha, R. Ramanujam and Yanjing Wang &ensp;&ensp;&ensp; <br></br>
                        (Information and Computation, 2023)
                      </Typography>
                    }
                  />
                </AccordionSummary>
                <AccordionDetails>
                  <Typography variant="subtitle1"
                              textAlign="justify">
                    <p>
                      Bundled products are often offered as good deals to customers. In first-order modal logic
                      (FOML), when we bundle quantifiers and modalities together (as in ∃x􏰀, ♢∀x etc.),
                      we get new logical operators whose combinations produce interesting fragments of FOML
                      without any restriction on the arity of predicates, the number of variables, or the
                      modal scope. It is well-known that finding decidable fragments of FOML is hard, so we
                      may ask: do bundled fragments that exploit the distinct expressivity of FOML constitute
                      good deals in balancing the expressivity and complexity? There are a few positive earlier
                      results on some particular fragments. In this paper, we try to fully map the terrain of
                      bundled fragments of FOML in (un)decidability, and in the cases without a definite
                      answer yet, we show that they lack the finite model property. Moreover,
                      whether the class of models considered has constant domains (across states/worlds)
                      or increasing domains presents another layer of complexity. We also present the loosely
                      bundled fragment, which generalizes the bundles and yet retains decidability
                      (over increasing domain models).
                    </p>

                    <Link href="  https://dl.acm.org/doi/abs/10.1145/3593584" target="_blank"
                          rel="noreferrer noopener">Here</Link> is a link to the paper.
                  </Typography>
                </AccordionDetails>
              </Accordion>

            </ListItem>

            <ListItem alignItems="flex-start">
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon/>}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <ListItemText
                    primary={<Typography variant="h6"> Implicit quantification for modal reasoning in large games </Typography>}
                    secondary={
                      <Typography
                        variant="subtitle1"
                      >
                        Ramit Das, Anantha Padmanabha and R. Ramanujam&ensp;&ensp;&ensp;
                        <br></br>(Synthese, 2023)
                      </Typography>
                    }
                  />
                </AccordionSummary>
                <AccordionDetails>
                  <Typography variant="subtitle1"
                              textAlign="justify">
                    <p> Reasoning about equilibria in normal form games involves the study of
                      players’ incentives to deviate unilaterally from any profile.
                      In the case of large anonymous games, the pattern of reasoning is
                      different. Payoffs are determined by strategy distributions rather than
                      strategy profiles. In such a game each player would strategise based on
                      expectations of what fraction of the population makes some choice,
                      rather than respond to individual choices by other players. A player
                      may not even know how many players there are in the game.
                      Logicising such strategisation involves many challenges as the set of
                      players is potentially unbounded. This suggests a logic of quantification
                      over player variables and modalities for player deviation, but such a
                      logic is easily seen to be undecidable. Instead, we propose a
                      propositional modal logic using player types as names and implicit
                      quantification over players. With modalities for player deviation and
                      transitive closure, the logic can be used to specify game equilibrium
                      and interesting patterns of reasoning in large games. We show that the
                      logic is decidable and present a complete axiomatisation of the
                      valid formulas.
                    </p>
                    <Link href="https://link.springer.com/article/10.1007/s11229-023-04156-9" target="_blank"
                          rel="noreferrer noopener">Here</Link> is a link to the paper.
                  </Typography>
                </AccordionDetails>
              </Accordion>

            </ListItem>

            <ListItem alignItems="flex-start">
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon/>}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <ListItemText
                    primary={<Typography variant="h6"> A Simple Algorithm for Consistent Query Answering under Primary
                      Keys </Typography>}
                    secondary={
                      <Typography
                        variant="subtitle1"
                      >
                        Diego Figueira, Anantha Padmanabha, Luc Segoufin and Cristina Sirangelo&ensp;&ensp;&ensp;
                        <br></br>(ICDT, 2023)
                      </Typography>
                    }
                  />
                </AccordionSummary>
                <AccordionDetails>
                  <Typography variant="subtitle1"
                              textAlign="justify">
                    <p> We consider the dichotomy conjecture for consistent query answering under primary key con-
                      straints.
                      It states that, for every fixed Boolean conjunctive query q, testing whether q is certain
                      (i.e. whether it evaluates to true over all repairs of a given inconsistent database) is either
                      polynomial time or coNP-complete. This conjecture has been verified for self-join-free and path
                      queries.
                    </p>
                    <p>
                      We propose a simple inflationary fixpoint algorithm for consistent query answering which,
                      for a given database, naively computes a set ∆ of subsets of database repairs with at most k
                      facts,
                      where k is the size of the query q. The algorithm runs in polynomial time and can be formally
                      defined as: <br></br>
                      1. Initialize ∆ with all sets S of at most k facts such that S |= q.<br></br>
                      2. Add any set S of at most k facts to ∆ if there exists a block B (i.e., a maximal set of facts
                      sharing the same key) such that for every fact a ∈ B there is a set S′∈ ∆ contained in S ∪ {`{a}`}.

                    </p>
                    <p>
                      The algorithm answers “q is certain” iff ∆ eventually contains the empty set.
                      The algorithm correctly computes certainty when the query q falls in the polynomial time cases of
                      the
                      known dichotomies for self-join-free queries and path queries. For arbitrary queries,
                      the algorithm is an under-approximation: The query is guaranteed to be certain if the algorithm
                      claims so.
                      However, there are polynomial time certain queries (with self-joins) which are not identified as
                      such
                      by the algorithm.
                    </p>
                    <Link href="https://drops.dagstuhl.de/opus/frontdoor.php?source_opus=17766" target="_blank"
                          rel="noreferrer noopener">Here</Link> is a link to the paper.
                  </Typography>
                </AccordionDetails>
              </Accordion>

            </ListItem>

            <ListItem alignItems="flex-start">
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon/>}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <ListItemText
                    primary={<Typography variant="h6"> A decidable fragment of first order modal logic: two variable
                      term modal logic </Typography>}
                    secondary={
                      <Typography
                        variant="subtitle1"
                      >
                        Anantha Padmanabha and R. Ramanujam &ensp;&ensp;&ensp; <br></br>
                        (Transactions on Computational Logic, 2023)
                      </Typography>
                    }
                  />
                </AccordionSummary>
                <AccordionDetails>
                  <Typography variant="subtitle1"
                              textAlign="justify">
                    <p>
                      First order modal logic (FOML) is built by extending First Order Logic (FO) with modal operators.
                      A typical
                      formula is of the form ∀x∃y□P(x,y). Not only is FOML undecidable, even simple fragments like that
                      of
                      restriction to unary predicate symbols, guarded fragment and two variable fragment, which are all
                      decidable for
                      FO become undecidable for FOML. In this paper we study Term Modal logic (TML) which allows modal
                      operators to be indexed by terms. A typical formula in TML is of the form
                      ∀x∃y□<sub>x</sub> P(x,y). There is a close correspondence
                      between TML and FOML and we explore this relationship in detail in the paper.
                    </p>
                    <p>
                      In contrast to FOML, we show that the two variable fragment (without constants, equality) of TML
                      is
                      decidable. Further, we prove that adding a single constant makes the two variable fragment of TML
                      undecidable.
                      On the other hand, when equality is added to the logic, it looses the finite model property.
                    </p>

                    <Link href="  https://dl.acm.org/doi/abs/10.1145/3593584" target="_blank"
                          rel="noreferrer noopener">Here</Link> is a link to the paper.
                  </Typography>
                </AccordionDetails>
              </Accordion>

            </ListItem>

            <ListItem alignItems="flex-start">
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon/>}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <ListItemText
                    primary={<Typography variant="h6"> Generalized Bundled Fragments of First-order Modal
                      Logic </Typography>}
                    secondary={
                      <Typography
                        variant="subtitle1"
                      >
                        Mo Liu, Anantha Padmanabha, R. Ramanujam and Yanjing Wang&ensp;&ensp;&ensp; (MFCS, 2022)
                      </Typography>
                    }
                  />
                </AccordionSummary>
                <AccordionDetails>
                  <Typography variant="subtitle1"
                              textAlign="justify">
                    <p> Bundled products are often offered as good deals to customers.
                      When we bundle quantifiers and modalities together (as in ∃x□, ∀x◇ etc.) in first-order modal
                      logic (FOML),
                      we get new logical operators whose combinations produce interesting fragments of FOML without any
                      restriction
                      on the arity of predicates, the number of variables, or the modal scope. It is well-known that
                      finding
                      decidable fragments of FOML is hard, so we may ask: do bundled fragments that exploit the distinct
                      expressivity of FOML constitute good deals in balancing the expressivity and complexity?
                      There are a few positive earlier results on some particular fragments.
                      In this paper, we try to fully map the terrain of bundled fragments of FOML in (un)decidability,
                      and in the cases without a definite answer yet, we show that they lack the finite model property.
                      Moreover, whether the logics are interpreted over constant domains (across states/worlds) or
                      increasing
                      domains presents another layer of complexity. We also present the loosely bundled fragment, which
                      generalizes the bundles and yet retain decidability (over increasing domain models).
                    </p>
                    <Link href="https://arxiv.org/pdf/2202.01581.pdf" target="_blank"
                          rel="noreferrer noopener">Here</Link> is a link to the paper.
                  </Typography>
                </AccordionDetails>
              </Accordion>

            </ListItem>


            <ListItem alignItems="flex-start">
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon/>}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <ListItemText
                    primary={<Typography variant="h6"> Reasoning in Large Games with Unboundedly Many
                      Players </Typography>}
                    secondary={
                      <Typography
                        variant="subtitle1"
                      >
                        Ramit Das, Anantha Padmanabha and R. Ramanujam &ensp;&ensp;&ensp; (LORI, 2021)
                      </Typography>
                    }
                  />
                </AccordionSummary>
                <AccordionDetails>
                  <Typography variant="subtitle1"
                              textAlign="justify">
                    <p> In large anonymous games, payoffs are determined by strategy distributions
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
                    <Link href="https://link.springer.com/chapter/10.1007/978-3-030-88708-7_4" target="_blank"
                          rel="noreferrer noopener">Here</Link> is a link to the paper.
                  </Typography>
                </AccordionDetails>
              </Accordion>

            </ListItem>
            <Divider variant="inset" component="li"/>

            <ListItem alignItems="flex-start">
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon/>}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <ListItemText
                    primary={<Typography variant="h6">Relative Expressive Powers of First Order Modal Logic and Term
                      Modal Logic </Typography>}
                    secondary={
                      <Typography
                        variant="subtitle1"
                      >
                        Anantha Padmanabha &ensp;&ensp;&ensp; (ICLA, 2021)
                      </Typography>
                    }
                  />
                </AccordionSummary>
                <AccordionDetails>
                  <Typography variant="subtitle1"
                              textAlign="justify">
                    <p> First Order Modal logic(FOML) is a natural language to reason about modal properties of
                      predicates.
                      In FOML, an example formula would be ∀x∃y 􏰁 Q(x, y);.
                      Term modal logic(TML) was introduced to reason about unboundedly many agents and a typical formula
                      in TML looks like ∀x∃y 􏰁<sub>x</sub>Q(x,y). Considering the close similarities between the two
                      logics, in this paper,
                      we explore their relative expressive powers over K-frames. </p>
                    <p>
                      We prove that every k-variable TML formula can be expressed as a k-variable FOML formula.
                      Conversely, every k-variable FOML formula can be expressed as a k + 1-variable formula in TML.
                      This proves that both the logics have the same expressive power over unboundedly many variables.
                      On the other hand, for every k we show
                      that the k-variable fragment of FOML is strictly more expressive
                      than k-variable fragment of TML.
                    </p>
                    <Link href="https://www.isichennai.res.in/~sujata/icla2021/proceedings.pdf#page=97" target="_blank"
                          rel="noreferrer noopener">Here</Link> is a link to the paper..
                  </Typography>
                </AccordionDetails>
              </Accordion>

            </ListItem>

            <Divider variant="inset" component="li"/>

            <ListItem alignItems="flex-start">
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon/>}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <ListItemText
                    primary={<Typography variant="h6"> Verifying Implicitly Quantified Modal Logic over Dynamic Networks
                      of Processes</Typography>}
                    secondary={
                      <Typography
                        variant="subtitle1"
                        textAlign="justify"
                      >
                        Anantha Padmanabha and R. Ramanujam&ensp;&ensp;&ensp; (ICDCIT, 2020)
                      </Typography>
                    }
                  />
                </AccordionSummary>
                <AccordionDetails>
                  <Typography variant="subtitle1"
                              textAlign="justify">
                    <p> When we consider systems with process creation and exit, we have potentially
                      infinite state systems where the number of processes alive at any state is unbounded.
                      Properties of such systems are naturally specified using modal logics with quantification,
                      but they are hard to verify even over finite state systems. In [Padmanabha and Ramanujam, 2019] we
                      proposed 𝖨𝖰𝖬𝖫, an implicitly
                      quantified modal logic where we can have assertions of the form every live agent has an
                      𝛼-successor, and presented a complete axiomatization of valid formulas.
                      Here we show that model checking for 𝖨𝖰𝖬L is efficient even when we consider systems
                      with infinitely many processes, provided we can efficiently present such collections of processes,
                      and check non-emptiness of intersection efficiently. As a case study, we present a model checking
                      algorithm over systems in which at any state, the collection of live processes is regular.
                    </p>
                    <Link href="https://link.springer.com/chapter/10.1007/978-3-030-36987-3_10" target="_blank"
                          rel="noreferrer noopener">Here</Link> is a link to the paper.
                  </Typography>
                </AccordionDetails>
              </Accordion>

            </ListItem>

            <Divider variant="inset" component="li"/>

            <ListItem alignItems="flex-start">
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon/>}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <ListItemText
                    primary={<Typography variant="h6"> Two variable fragment of Term Modal Logic </Typography>}
                    secondary={
                      <Typography
                        variant="subtitle1"

                        textAlign="justify"
                      >
                        Anantha Padmanabha and R. Ramanujam &ensp;&ensp;&ensp; (MFCS, 2019)
                      </Typography>
                    }
                  />
                </AccordionSummary>
                <AccordionDetails>
                  <Typography variant="subtitle1"
                              textAlign="justify">
                    <p>Term modal logics (TML) are modal logics with unboundedly many modalities,
                      with quantification over modal indices, so that we can have formulas of the form
                      ∀x∃y 􏰁<sub>x</sub>Q(x,y).
                      Like First order modal logic, TML is also "notoriously" undecidable,
                      in the sense that even very simple fragments are undecidable.
                      In this paper, we show the decidability of one interesting fragment,
                      that of two variable TML. This is in contrast to two-variable First order modal logic, which is
                      undecidable.
                    </p>
                    <Link href="https://drops.dagstuhl.de/opus/volltexte/2019/10974/pdf/LIPIcs-MFCS-2019-30.pdf"
                          target="_blank" rel="noreferrer noopener">Here</Link> is a link to the paper.
                  </Typography>
                </AccordionDetails>
              </Accordion>

            </ListItem>
            <Divider variant="inset" component="li"/>

            <ListItem alignItems="flex-start">
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon/>}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <ListItemText
                    primary={<Typography variant="h6"> The Monodic Fragment of Propositional Term Modal
                      Logic </Typography>}
                    secondary={
                      <Typography
                        variant="subtitle1"
                        textAlign="justify"
                      >
                        Anantha Padmanabha and R. Ramanujam &ensp;&ensp;&ensp; (Studia Logica, 2019)
                      </Typography>
                    }
                  />
                </AccordionSummary>
                <AccordionDetails>
                  <Typography variant="subtitle1"
                              textAlign="justify">
                    <p>We study term modal logics, where modalities can be indexed by
                      variables that can be quantified over. We suggest that these logics are
                      appropriate for reasoning about systems of unboundedly many reasoners and
                      define a notion of bisimulation which preserves propositional fragment of term modal logics.
                      Also we show that the propositional fragment is already undecidable but that its monodic fragment
                      (formulas using only one free variable in the scope of a modality) is decidable, and expressive
                      enough to include interesting assertions
                    </p>

                    <Link href="https://link.springer.com/article/10.1007%2Fs11225-018-9784-x" target="_blank"
                          rel="noreferrer noopener">Here</Link> is a link to the paper.
                  </Typography>
                </AccordionDetails>
              </Accordion>

            </ListItem>

            <Divider variant="inset" component="li"/>

            <ListItem alignItems="flex-start">
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon/>}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <ListItemText
                    primary={<Typography variant="h6">Propositional Modal Logic with Implicit Modal
                      Quantification </Typography>}
                    secondary={
                      <Typography
                        variant="subtitle1"
                        textAlign="justify"
                      >
                        Anantha Padmanabha and R. Ramanujam &ensp;&ensp;&ensp; (ICLA, 2019)
                      </Typography>
                    }
                  />
                </AccordionSummary>
                <AccordionDetails>
                  <Typography variant="subtitle1"
                              textAlign="justify">
                    <p> Propositional term modal logic is interpreted over Kripke structures with
                      unboundedly many accessibility relations and hence the syntax admits variables indexing
                      modalities and quantification over them. This logic is undecidable, and we consider a
                      variable-free propositional bi-modal logic with implicit quantification.
                      Thus [∀]𝛼 asserts necessity over all accessibility relations and
                      [∃]𝛼 is classical necessity over some accessibility relation.
                      The logic is associated with a natural bisimulation relation over models and we show
                      that the logic is exactly the bisimulation invariant fragment of a two sorted first order logic.
                      The logic is easily seen to be decidable and admits a complete axiomatization of valid formulas.
                      Moreover the decision procedure extends naturally to the ‘bundled fragment’ of full term modal
                      logic.
                    </p>
                    <Link href="https://link.springer.com/chapter/10.1007/978-3-662-58771-3_2" target="_blank"
                          rel="noreferrer noopener">Here</Link> is a link to the paper.
                  </Typography>
                </AccordionDetails>
              </Accordion>

            </ListItem>

            <Divider variant="inset" component="li"/>

            <ListItem alignItems="flex-start">
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon/>}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <ListItemText
                    primary={<Typography variant="h6">Bundled Fragments of First-Order Modal Logic:
                      (Un)Decidability</Typography>}
                    secondary={
                      <Typography
                        variant="subtitle1"
                        textAlign="justify"
                      >
                        Anantha Padmanabha, R. Ramanujam and Yanjing Wang&ensp;&ensp;&ensp; (FSTTCS, 2018)
                      </Typography>
                    }
                  />
                </AccordionSummary>
                <AccordionDetails>
                  <Typography variant="subtitle1"
                              textAlign="justify">
                    <p> Quantified modal logic is notorious for being undecidable, with very few known decidable
                      fragments
                      such as the monodic ones. For instance, even the two-variable fragment over unary predicates is
                      undecidable.
                      In this paper, we study a particular fragment, namely the bundled fragment, where a first-order
                      quantifier is
                      always followed by a modality when occurring in the formula, inspired by the proposal of [Yanjing
                      Wang, 2017]
                      in the context of non-standard epistemic logics of know-what, know-how, know-why, and so on. As
                      always with
                      quantified modal logics, it makes a significant difference whether the domain stays the same
                      across possible
                      worlds. In particular, we show that the predicate logic with the bundle "forall Box" alone is
                      undecidable over
                      constant domain interpretations, even with only monadic predicates, whereas having the "exists
                      Box" bundle instead
                      gives us a decidable logic. On the other hand, over increasing domain interpretations, we get
                      decidability with
                      both "forall Box" and "exists Box" bundles with unrestricted predicates, where we obtain tableau
                      based procedures
                      that run in PSPACE. We further show that the "exists Box" bundle cannot distinguish between
                      constant domain and
                      variable domain interpretations.

                    </p>
                    <Link href="https://drops.dagstuhl.de/opus/volltexte/2018/9942/pdf/LIPIcs-FSTTCS-2018-43.pdf"
                          target="_blank" rel="noreferrer noopener">Here</Link> is a link to the paper.
                  </Typography>
                </AccordionDetails>
              </Accordion>

            </ListItem>

            <Divider variant="inset" component="li"/>

            <ListItem alignItems="flex-start">
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon/>}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <ListItemText
                    primary={<Typography variant="h6">Revisiting games in dynamic-epistemic logic</Typography>}
                    secondary={
                      <Typography
                        variant="subtitle1"
                        textAlign="justify"
                      >
                        Anantha Padmanabha and Sujata Ghosh&ensp;&ensp;&ensp; (LOFT, 2018)
                      </Typography>
                    }
                  />
                </AccordionSummary>
                <AccordionDetails>
                  <Typography variant="subtitle1"
                              textAlign="justify">
                    <p> We revisit the discussion on reasoning about games in dynamic-epistemic logic
                      and present a language for describing reasoning in possibly infinite games from the perspective
                      of the players. We argue that even though a plethora of sophisticated logics of strategic
                      reasoning
                      in games are available, it is still worthwhile to consider the game structures themselves from the
                      perspective of logic. In the process, we provide complete axiom systems for these games satisfying
                      characteristic properties from the game- theoretic literature. Decidability of the satisfiability
                      problem
                      is also taken up to consider the existence of games following certain rules that can be expressed
                      in the
                      logical language.

                    </p>
                    <Link href="https://www.isichennai.res.in/~sujata/papers/2018-loft.pdf" target="_blank"
                          rel="noreferrer noopener">Here</Link> is a link to the paper.
                  </Typography>
                </AccordionDetails>
              </Accordion>

            </ListItem>

            <Divider variant="inset" component="li"/>

            <ListItem alignItems="flex-start">
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon/>}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <ListItemText
                    primary={<Typography variant="h6">Model checking a logic over systems with regular sets of
                      processes</Typography>}
                    secondary={
                      <Typography
                        variant="subtitle1"
                        textAlign="justify"
                      >
                        Anantha Padmanabha and R. Ramanujam&ensp;&ensp;&ensp; (CEUR, 2017)
                      </Typography>
                    }
                  />
                </AccordionSummary>
                <AccordionDetails>
                  <Typography variant="subtitle1"
                              textAlign="justify">
                    <p> Though systems with process creation give rise to unboundedly many processes,
                      their names are systematically generated and typi- cally form a regular set.
                      When we consider modal logics to specify properties of such systems, it is natural to
                      consider quantification over such regular sets. These are in the realm of term modal logics,
                      which are usually undecidable. We consider the monodic variant, in which there is only one free
                      variable in the scope of any modality, and present a model checking algorithm for this logic.

                    </p>
                    <Link href="http://ceur-ws.org/Vol-1819/dias2017-paper5.pdf" target="_blank"
                          rel="noreferrer noopener">Here</Link> is a link to the paper.
                  </Typography>
                </AccordionDetails>
              </Accordion>

            </ListItem>

          </List>

        </TabPanel>
        <TabPanel value={value} index={1}>
          <List sx={{maxWidth: 700, width: {xs: 285, md: 700}, bgcolor: 'background.paper'}}>
            <ListSubheader><Typography variant="h6">Reviewer for Journals</Typography></ListSubheader>

            <ListItem sx={{mt: '10px', ml: '20px'}}> <Link href="https://dl.acm.org/journal/tocl" target="_blank"
                                                           rel="noreferrer noopener">ACM Transactions on Computational
              Logic (3 papers)</Link> </ListItem>
            <ListItem sx={{mt: '10px', ml: '20px'}}> <Link href="https://www.springer.com/journal/11229" target="_blank"
                                                           rel="noreferrer noopener">Synthese (1 paper)</Link>
            </ListItem>
            <ListItem sx={{mt: '10px', ml: '20px'}}> <Link href="https://www.springer.com/journal/11225" target="_blank"
                                                           rel="noreferrer noopener">Studia Logica (1 paper)</Link>
            </ListItem>


          </List>
          <List sx={{maxWidth: 700, width: {xs: 285, md: 700}, bgcolor: 'background.paper'}}>
            <ListSubheader><Typography variant="h6"> Reviewer for Conferences</Typography></ListSubheader>

            <ListItem sx={{mt: '10px', ml: '20px'}}> <Link href="https://sites.google.com/view/tark-2023"
                                                           target="_blank" rel="noreferrer noopener">Theoretical Aspects
              of Rationality & Knowledge (TARK) 2023</Link> </ListItem>
            <ListItem sx={{mt: '10px', ml: '20px'}}> <Link href="https://lics.siglog.org/lics23/" target="_blank"
                                                           rel="noreferrer noopener">Logic in Computer Science (LICS)
              2023</Link> </ListItem>
            <ListItem sx={{mt: '10px', ml: '20px'}}> <Link href="http://edbticdt2023.cs.uoi.gr" target="_blank"
                                                           rel="noreferrer noopener">International Conference on
              Database Theory (ICDT) 2023</Link> </ListItem>
            <ListItem sx={{mt: '10px', ml: '20px'}}> <Link href="https://lfcs.ws.gc.cuny.edu" target="_blank"
                                                           rel="noreferrer noopener">Logical Foundations Of Computer
              Science (LFCS) 2022</Link> </ListItem>
            <ListItem sx={{mt: '10px', ml: '20px'}}><Link href="http://golori.org/lori2021/" target="_blank"
                                                          rel="noreferrer noopener">Logic, Rationality and Interaction
              (LORI) 2021</Link> </ListItem>
            <ListItem sx={{mt: '10px', ml: '20px'}}> <Link href="https://www.iitrpr.ac.in/caldam2021/" target="_blank"
                                                           rel="noreferrer noopener">Conference on Algorithms and
              Discrete Applied Mathematics (CALDAM) 2021</Link> </ListItem>
            <ListItem sx={{mt: '10px', ml: '20px'}}> <Link href="https://gandalf2021.math.unipd.it" target="_blank"
                                                           rel="noreferrer noopener">International Symposium on Games,
              Automata, Logics, and Formal Verification (GandALF) 2021</Link> </ListItem>


          </List>
        </TabPanel>

      </Box>

    </Box>
  );
}