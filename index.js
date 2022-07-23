const express = require('express')
const app = express()
const PORT = 3031
const server = app.listen(PORT, function () { console.log(`server started at ${PORT}`)})

app.get('/api/resume/:name', function (req, res) {
  const data = {
    andrei: {
      name: 'Andrei',
      role: "React DEV",
      phone: "+40743 536 495",
      email: "andrei@god.com",
      about: {
        title: 'ABOUT ME',
        details: `<i>“The minute you choose to do what you 
      really want to do, it's a different kind of life.”</i><br /> 
      The above quote of B. Fuller is describing the main 
      reason for which  I usually open the laptop lid early 
      in the morning.`
      },
      work: {
        title: 'WORK EXPERIENCE',
        details: `I have started intense programming ~8 years ago, extremely curious to find out the meaning of “angular, node and couchdb” words. Those are the three words that were part of the daily incantation of one of my good friend (later my trainer). Since then I have "learned" more similar words like Vue.js, React.js, npm, yarn, etc. Since my background is in DTP (I used to have a small printing shop),  was quite easy to understand the true frontend requirements, and to easily accomplish pixel-perfect specifications. I have worked on multiple projects since, most of them being FE and some full-stack. I love Vue.js the most, out of all frameworks out there. Later I have switched to being also a tech trainer, and I am currently teaching students at the University of Technology and Information in Bucharest (Romania).`
      },
      soft_skills: {
        title: 'SOFT SKILLS',
        details: `Leading<br />
Teamwork<br />
Active listening <br />
Optimism <br />
Self-confidence <br />
Self discipline`
      },
      special_skills: {
        title: 'SPECIAL SKILLS',
        details: `Teaching and mentorship. I have a youtube channel of tutorials in my native language.
      <br /><br />
      I have an optional class of web development overview at University of Computer Science Bucharest along with private classes.`
      },
      skills: [
        {
          name: 'HTML',
          rate: 8
        },
        {
          name: 'CSS',
          rate: 6
        },
        {
          name: 'BULMA + BUEFY',
          rate: 5
        },
        {
          name: 'JS  (ES6)',
          rate: 8
        },
        {
          name: 'VUE.JS',
          rate: 7
        },
        {
          name: 'NUXT.JS',
          rate: 5
        },
        {
          name: 'QUASAR.JS',
          rate: 2
        },
        {
          name: 'REACT.JS',
          rate: 8
        }
      ],
      educations: {
        title: 'EDUCATION',
        details: `TEAM TREE HOUSE courses
2014 - 2016
Study program: Frontend Dev.
<br><br />
ACADEMY OF MUSIC
2010 - 2013
Study program: Classical Guitar
<br><br />
AUTOMOTIVE HIGHSCHOOL 
1994 - 1998
Study program: Electrical circuits in cars
`
      },
      current_projects: {
        title: 'CURRENT PROJECTS',
        details: `<b>BMJ (British Medical Journal) (UK)</b> <br>
Public learning platform
role: Frontend lead
<br /><br />
PORTAIL AUTOENTREPRENEUR.FR
Accounting manager platform
role: Frontend Lead
<br /><br />
GIVVABLE (AUS)
Companies database
role: Frontend Lead`
      },
      personal_projects: {
        title: 'PERSONAL PROJECTS',
        details: `BAND ON DEMAND
Web app to allow musicians
<br /><br />
MY ONLINE BRAIN
Web app to manage online learning and information management and storage
<br /><br />
AUTOSERVICEPRO.RO
Web app to trade automotive parts.`
      }
    },
    iulian: {
      name: 'Iulian',
      surname: 'Negrila',
      role: "FE DEV",
      phone: "+40743 536 495",
      email: "electronrecord@gmail.com",
      about: {
        title: 'ABOUT ME',
        details: `<i>“The minute you choose to do what you 
      really want to do, it's a different kind of life.”</i><br /> 
      The above quote of B. Fuller is describing the main 
      reason for which  I usually open the laptop lid early 
      in the morning.`
      },
      work: {
        title: 'WORK EXPERIENCE',
        details: `I have started intense programming ~8 years ago, extremely curious to find out the meaning of “angular, node and couchdb” words. Those are the three words that were part of the daily incantation of one of my good friend (later my trainer). Since then I have "learned" more similar words like Vue.js, React.js, npm, yarn, etc. Since my background is in DTP (I used to have a small printing shop),  was quite easy to understand the true frontend requirements, and to easily accomplish pixel-perfect specifications. I have worked on multiple projects since, most of them being FE and some full-stack. I love Vue.js the most, out of all frameworks out there. Later I have switched to being also a tech trainer, and I am currently teaching students at the University of Technology and Information in Bucharest (Romania).`
      },
      soft_skills: {
        title: 'SOFT SKILLS',
        details: `Leading<br />
Teamwork<br />
Active listening <br />
Optimism <br />
Self-confidence <br />
Self discipline`
      },
      special_skills: {
        title: 'SPECIAL SKILLS',
        details: `Teaching and mentorship. I have a youtube channel of tutorials in my native language.
      <br /><br />
      I have an optional class of web development overview at University of Computer Science Bucharest along with private classes.`
      },
      skills: [
        {
          name: 'HTML',
          rate: 8
        },
        {
          name: 'CSS',
          rate: 6
        },
        {
          name: 'BULMA + BUEFY',
          rate: 5
        },
        {
          name: 'JS  (ES6)',
          rate: 8
        },
        {
          name: 'VUE.JS',
          rate: 7
        },
        {
          name: 'NUXT.JS',
          rate: 5
        },
        {
          name: 'QUASAR.JS',
          rate: 2
        },
        {
          name: 'REACT.JS',
          rate: 8
        }
      ],
      educations: {
        title: 'EDUCATION',
        details: `TEAM TREE HOUSE courses
2014 - 2016
Study program: Frontend Dev.
<br><br />
ACADEMY OF MUSIC
2010 - 2013
Study program: Classical Guitar
<br><br />
AUTOMOTIVE HIGHSCHOOL 
1994 - 1998
Study program: Electrical circuits in cars
`
      },
      current_projects: {
        title: 'CURRENT PROJECTS',
        details: `<b>BMJ (British Medical Journal) (UK)</b> <br>
Public learning platform
role: Frontend lead
<br /><br />
PORTAIL AUTOENTREPRENEUR.FR
Accounting manager platform
role: Frontend Lead
<br /><br />
GIVVABLE (AUS)
Companies database
role: Frontend Lead`
      },
      personal_projects: {
        title: 'PERSONAL PROJECTS',
        details: `BAND ON DEMAND
Web app to allow musicians
<br /><br />
MY ONLINE BRAIN
Web app to manage online learning and information management and storage
<br /><br />
AUTOSERVICEPRO.RO
Web app to trade automotive parts.`
      }
    }
  }
  const name = req.params.name
  res.send(data[name])
})
