const express = require('express');
const app = express();
const cors = require('cors')
const PORT = 8000;

app.use(cors())

const celebrities = {
    'alexandre levy':{
        'birthDate': 'November 10, 1864' ,
        'deathDate': 'January 17, 1892' ,
        'ageAtDeath': '27 years, 68 days' ,
    },
    'louis chauvin':{
        'birthDate': 'March 13, 1881' ,
        'deathDate': 'March 26, 1908' ,
        'ageAtDeath': '27 years, 13 days'
    },
    'rupert brooke':{
        'birthDate': 'August 3, 1887' ,
        'deathDate': 'April 23, 1915' ,
        'ageAtDeath': '27 years, 263 days'
    },
    'robert johnson':{
        'birthDate': 'May 8, 1911' ,
        'deathDate': 'August 16, 1938' ,
        'ageAtDeath': '27 years, 100 days'
    },
    'nat jaffe':{
        'birthDate': 'January 1, 1918' ,
        'deathDate': 'August 5, 1945' ,
        'ageAtDeath': '27 years, 216 days'
    },
    'jesse belvin':{
        'birthDate': 'December 15, 1932' ,
        'deathDate': 'February 6, 1960' ,
        'ageAtDeath': '27 years, 53 days'
    },
    'rudy lewis':{
        'birthDate': 'August 23, 1936' ,
        'deathDate': 'May 20, 1964' ,
        'age atDeath': '27 years, 271 days'
    },
    'joe henderson':{
        'birthDate': 'April 24, 1937' ,
        'deathDate': 'October 24, 1964' ,
        'ageAtDeath': '27 years, 183 days'
    },
    'malcolm hale':{
        'birthDate': 'May 17, 1941' ,
        'deathDate': 'October 30, 1968' ,
        'ageAtDeath': '27 years, 166 days'
    },
    'dickie pride':{
        'birthDate': 'October 21, 1941' ,
        'deathDate': 'March 26, 1969' ,
        'ageAtDeath': '27 years, 156 days'
    },
    'brian jones':{
        'birthDate': 'February 28, 1942' ,
        'deathDate': 'July 3, 1969' ,
        'ageAtDeath': '27 years, 125 days'
    },
    'alan wilson':{
        'birthDate': 'July 4, 1943' ,
        'deathDate': 'September 3, 1970' ,
        'ageAtDeath': '27 years, 61 days'
    },
    'jimi hendrix':{
        'birthDate': 'November 27, 1942' ,
        'deathDate': 'September 18, 1970' ,
        'ageAtDeath': '27 years, 295 days'
    },
    'janis joplin':{
        'birthDate': 'January 19, 1943' ,
        'deathDate': 'October 4, 1970' ,
        'ageAtDeath': '27 years, 258 days'
    },
    'arlester christian':{
        'birthDate': 'June 13, 1943' ,
        'deathDate': 'March 13, 1971' ,
        'ageAtDeath': '27 years, 273 days'
    },
    'jim morrison':{
        'birthDate': 'December 8, 1943' ,
        'deathDate': 'July 3, 1971' ,
        'ageAtDeath': '27 years, 207 days'
    },
    'linda jones':{
        'birth date': 'December 14, 1944' ,
        'deathDate': 'March 14, 1972' ,
        'ageAtDeath': '27 years, 91 days'
    },
    'ron mckernan':{
        'birthDate' : 'September 8, 1945' ,
        'deathDate' : 'March 8, 1973' ,
        'ageAtDeath': '27 years, 181 days'
    },
    'roger lee durham':{
        'birthDate' : 'February 14, 1946' ,
        'deathDate' : 'July 27, 1973' ,
        'ageAtDeath': '27 years, 163 days'
    },
    'wallace yohn':{
        'birthDate' : 'January 12, 1947' ,
        'deathDate' : 'August 12, 1974' ,
        'ageAtDeath': '27 years, 212 days'
    },
    'dave alexander':{
        'birthDate' : 'June 3, 1947' ,
        'deathDate' : 'February 10, 1975' ,
        'ageAtDeath': '27 years, 252 days'
    },
    'pete ham':{
        'birthDate' : 'April 27, 1947' ,
        'deathDate' : 'April 24, 1975' ,
        'ageAtDeath': '27 years, 362 days'
    },
    'gary thain':{
        'birthDate' : 'May 15, 1948' ,
        'deathDate' : 'December 8, 1975' ,
        'ageAtDeath': '27 years, 205 days'
    },
    'cecilia':{
        'birthDate' : 'October 11, 1948' ,
        'deathDate' : 'August 2, 1976' ,
        'ageAtDeath': '27 years, 296 days'
    },
    'helmut köllen':{
        'birthDate' : 'March 2, 1950' ,
        'deathDate' : 'May 3, 1977' ,
        'ageAtDeath': '27 years, 62 days'
    },
    'chris bell':{
        'birthDate' : 'January 12, 1951' ,
        'deathDate' : 'December 27, 1978' ,
        'ageAtDeath': '27 years, 349 days'
    },
    'zenon de fleur':{
        'birthDate' : 'September 9, 1951' ,
        'deathDate' : 'March 17, 1979' ,
        'ageAtDeath': '27 years, 189 days'
    },
    'd. boon':{
        'birthDate' : 'April 1, 1958' ,
        'deathDate' : 'December 22, 1985' ,
        'ageAtDeath': '27 years, 266 days'
    },
    'alexander bashlachev':{
        'birthDate' : 'May 27, 1960' ,
        'deathDate' : 'February 17, 1988' ,
        'ageAtDeath': '27 years, 266 days'
    },
    'amar singh chamkila':{
        'birthDate' : 'July 21, 1960' ,
        'deathDate' : 'March 8, 1988' ,
        'ageAtDeath': '27 years, 231 days'
    },
    'jean-michel basquiat':{
        'birthDate' : 'December 22, 1960' ,
        'deathDate' : 'August 12, 1988' ,
        'ageAtDeath': '27 years, 234 days'
    },
    'pete de freitas':{
        'birthDate' : 'August 2, 1961' ,
        'deathDate' : 'June 14, 1989' ,
        'ageAtDeath': '27 years, 316 days'
    },
    'finbarr donnelly':{
        'birthDate' : 'April 25, 1962' ,
        'deathDate' : 'June 18, 1989' ,
        'ageAtDeath': '27 years, 50 days'
    },
    'chris austin':{
        'birthDate' : 'February 24, 1964' ,
        'deathDate' : 'March 16, 1991' ,
        'ageAtDeath': '27 years, 20 days'
    },
    'dimitar voev':{
        'birthDate' : 'May 21, 1965' ,
        'deathDate' : 'September 5, 1992' ,
        'ageAtDeath': '27 years, 107 days'
    },
    'mia zapata':{
        'birthDate' : 'August 25, 1965' ,
        'deathDate' : 'July 7, 1993' ,
        'ageAtDeath': '27 years, 316 days'
    },
    'kurt cobain':{
        'birthDate' : 'February 20, 1967' ,
        'deathDate' : 'April 5, 1994' ,
        'ageAtDeath': '27 years, 44 days'
    },
    'kristen pfaff':{
        'birthDate' : 'May 26, 1967' ,
        'deathDate' : 'june 16, 1994' ,
        'ageAtDeath': '27 years, 21 days'
    },
    'richey edwards':{
        'birthDate' : 'December 22, 1967' ,
        'deathDate' : 'February 1, 1995' ,
        'ageAtDeath': '27 years, 41 days'
    },
    'stretch':{
        'birthDate' : 'April 8, 1968' ,
        'deathDate' : 'November 30, 1995' ,
        'ageAtDeath': '27 years, 236 days'
    },
    'fat pat':{
        'birthDate' : 'December 4, 1970' ,
        'deathDate' : 'February 3, 1998' ,
        'ageAtDeath': '27 years, 61 days'
    },
    'freaky tah':{
        'birthDate' : 'May 14, 1971' ,
        'deathDate' : 'March 28, 1999' ,
        'ageAtDeath': '27 years, 318 days'
    },
    'kami':{
        'birthDate' : 'February 1, 1972' ,
        'deathDate' : 'June 21, 1999' ,
        'ageAtDeath': '27 years, 140 days'
    },
    'rodrigo bueno':{
        'birthDate' : 'May 24, 1973' ,
        'deathDate' : 'June 24, 2000' ,
        'ageAtDeath': '27 years, 31 days'
    },
    'sean patrick mccabe':{
        'birthDate' : 'November 13, 1972' ,
        'deathDate' : 'August 28, 2000' ,
        'ageAtDeath': '27 years, 289 days'
    },
    'maria serrano serrano':{
        'birthDate' : 'November 26, 1973' ,
        'deathDate' : 'November 24, 2001' ,
        'ageAtDeath': '27 years, 363 days	'
    },
    'rico yan':{
        'birthDate' : 'March 14, 1975' ,
        'deathDate' : 'March 29, 2002' ,
        'ageAtDeath': '27 years, 15 days'
    },
    'jonathan brandis':{
        'birthDate' : 'April 13, 1976' ,
        'deathDate' : 'November 12, 2003' ,
        'ageAtDeath': '27 years, 213 days'
    },
    'jeremy ward':{
        'birthDate' : 'May 5, 1976' ,
        'deathDate' : 'May 25, 2003' ,
        'ageAtDeath': '27 years, 20 days'
    },
    'bryan ottoson':{
        'birthDate' : 'March 18, 1978' ,
        'deathDate' : 'April 19, 2005' ,
        'ageAtDeath': '27 years, 32 days'
    },
    'valentín elizalde':{
        'birthDate' : 'February 1, 1979' ,
        'deathDate' : 'November 25, 2006' ,
        'ageAtDeath': '27 years, 297 days'
    },
    'damien morris':{
        'birthDate' : 'May 22, 1980' ,
        'deathDate' : 'December 19, 2007' ,
        'ageAtDeath': '27 years, 211 days'
    },
    'orish grinstead':{
        'birthDate' : 'June 2, 1980' ,
        'deathDate' : 'April 20, 2008' ,
        'ageAtDeath': '27 years, 323 days'
    },
    'jade goody':{
        'birthDate' : 'June 5, 1981' ,
        'deathDate' : 'March 22, 2009' ,
        'ageAtDeath': '27 years, 290 days'
    },
    'dash snow':{
        'birthDate' : 'July 27, 1981' ,
        'deathDate' : 'July 13, 2009' ,
        'ageAtDeath': '27 years, 351 days'
    },
    'amy winehouse':{
        'birthDate' : 'September 14, 1983' ,
        'deathDate' : 'July 23, 2011' ,
        'ageAtDeath': '27 years, 312 days'
    },
    'richard turner':{
        'birthDate' : 'July 30, 1984' ,
        'deathDate' : 'August 11, 2011' ,
        'ageAtDeath': '27 years, 12 days'
    },
    'anton yelchin':{
        'birthDate' : 'March 11, 1989' ,
        'deathDate' : 'June 19, 2016' ,
        'ageAtDeath': '27 years, 100 days'
    },
    'thomas fekete':{
        'birthDate' : 'July 1, 1988' ,
        'deathDate' : 'May 31, 2016' ,
        'ageAtDeath': '27 years, 335 days'
    },
    'kim jong-hyun':{
        'birthDate' : 'April 8, 1990' ,
        'deathDate' : 'December 18, 2017' ,
        'ageAtDeath': '27 years, 254 days'
    },
    'fredo santana':{
        'birthDate' : 'July 4, 1990' ,
        'deathDate' : 'January 19, 2018' ,
        'ageAtDeath': '	27 years, 199 days'
    },
    'benjamin keough':{
        'birthDate' : 'October 21, 1992' ,
        'deathDate' : 'July 12, 2020' ,
        'ageAtDeath': '27 years, 265 days'
    },
    'unknown':{
        'birthDate' : '' ,
        'deathDate' : '' ,
        'ageAtDeath': ''
    }
}

app.get('/', (req, res) =>{
    //send the index file, __dirname tells it where to start looking - the main directory
    res.sendFile( __dirname + '/index.html');
})

app.get('/api/:name',(req,res) =>{
    const celebName = req.params.name.toLowerCase();
    console.log(celebrities[celebName])
    if (celebrities[celebName]){
        res.json(celebrities[celebName]);
    }else{
        res.json(celebrities['unknown']);
    }
    // if the passed in parameter exists in the database, will return details
})

app.listen(PORT, ()=>{
    console.log(`The server is now running on port ${PORT}! Better go catch it!`);
})