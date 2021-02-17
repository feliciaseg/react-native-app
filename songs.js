const songs = [
    {
      lyric1:
        "I wonder how, I wonder why, yesterday you told me 'bout the blue blue sky",
      lyric2: "And all that I can see is just a yellow lemon tree",
      title: "LEMON TREE",
      artist: "Fools Garden",
    },
    {
      lyric1: "I'm so excited, and I just can't hide it ",
      lyric2: "I'm about to lose control and I think I like it",
      title: "I'M SO EXCITED",
      artist: "The Pointer Sisters",
    },
    {
      lyric1: "One night to be confused",
      lyric2: "One night to speed up truth",
      title: "HEARTBEATS",
      artist: "The Knife",
    },
    {
      lyric1:
        "I don't care if Monday's blue Tuesday's grey and Wednesday too",
      lyric2: "Thursday I don't care about you \n It's Friday, I'm in love",
      title: "FRIDAY I'M IN LOVE",
      artist: "The Cure",
    },
    {
      lyric1:
        "Do you come from a land down under",
      lyric2: "Where women glow and men plunder",
      title: "DOWN UNDER",
      artist: "Men At Work",
    },
    {
      lyric1:
        "Are we human or are we dancer? \n My sign is vital, my hands are cold",
      lyric2: "And I'm on my knees Looking for the answer",
      title: "HUMAN",
      artist: "The Killers",
    },
    {
      lyric1:
        "Cause all of me \n Loves all of you",
      lyric2: "Love your curves \n and all your edges \n All your perfect imperfections",
      title: "ALL OF ME",
      artist: "John Legend",
    },
    {
      lyric1:
        "Somliga går med trasiga skor \n Säg vad beror det på?",
      lyric2: "Gud fader som i himmelen bor \n Kanske vill ha det så",
      title: "SOMLIGA GÅR MED \n TRASIGA SKOR",
      artist: "Cornelis Vreeswijk",
    },
    {
      lyric1:
        "Yesterday \n Love was such an easy game to play",
      lyric2: "Now I need a place to hide away \n Oh, I believe in yesterday",
      title: "YESTERDAY",
      artist: "The Beatles",
    },
    {
      lyric1:
        "I can feel it coming in the air tonight, oh Lord",
      lyric2: "I've been waiting for this moment for all my life, oh Lord",
      title: "IN THE AIR TONIGHT",
      artist: "Phil Collins",
    },
    {
      lyric1:
        "I see the bad moon a-rising",
      lyric2: "I see trouble on the way",
      title: "BAD MOON RISING",
      artist: "Creedence Clearwater Revival",
    },
    {
      lyric1:
        "Ohh, we're halfway there",
      lyric2: "Ooh ooh, livin' on a prayer",
      title: "LIVIN' ON A PRAYER",
      artist: "Bon Jovi",
    },
    {
      lyric1:
        "I am the passenger \n And I ride and I ride",
      lyric2: "I ride through the city's back sides \n I see the stars come out of the sky",
      title: "THE PASSENGER",
      artist: "Iggy Pop",
    },
    {
      lyric1:
        "I'm an alien \n I'm a legal alien",
      lyric2: "I'm an Englishman in New York",
      title: "ENGLISHMAN IN \n NEW YORK",
      artist: "Sting",
    },
    {
      lyric1:
        "But did you know that when it snows",
      lyric2: "My eye become large and the light that you shine can be seen?",
      title: "KISS FROM A ROSE",
      artist: "Seal",
    },
    {
      lyric1:
        "No, I can't forget this evening Or your face as you were leaving",
      lyric2: "But I guess that's just the way the story goes",
      title: "WITHOUT YOU",
      artist: "Harry Nilsson",
    },
    {
      lyric1:
        "You don't have to be rich to be my girl",
      lyric2: "You don't have to be cool to rule my world",
      title: "KISS",
      artist: "Prince",
    },
    {
      lyric1:
        "It's more than a feeling (more than a feeling)",
      lyric2: "When I hear that old song they used to play",
      title: "MORE THAN A FEELING",
      artist: "Boston",
    },
    {
      lyric1:
        "Thunder only happens when it's raining",
      lyric2: "Players only love you when they're playing",
      title: "DREAMS",
      artist: "Fleetwood Mac",
    },
    {
      lyric1:
        "You may say I'm a dreamer",
      lyric2: "But I'm not the only one",
      title: "IMAGINE",
      artist: "John Lennon",
    },
    {
      lyric1:
        "When you call my name It's like a little prayer",
      lyric2: "I'm down on my knees I want to take you there",
      title: "LIKE A PRAYER",
      artist: "Madonna",
    },
    {
      lyric1:
        "We're leaving together \n But still it's farewell",
      lyric2: "And maybe we'll \n come back \n To Earth, who can tell?",
      title: "THE FINAL COUNTDOWN",
      artist: "Europe",
    },
    {
      lyric1:
        "I'm like a bird I'll only fly away",
      lyric2: "I dont know where my soul is, I dont know where my home is",
      title: "IM LIKE A BIRD",
      artist: "Nelly Furtado",
    },
    {
      lyric1:
        "And it's hard to dance with a devil on your back",
      lyric2: "So shake him off, oh whoa",
      title: "SHAKE IT OUT",
      artist: "Florence & The Machine",
    },
    {
      lyric1:
        "I'm bringing sexy back (yeah)",
      lyric2: "Them other fuckers dont know how to act (yeah)",
      title: "SEXYBACK",
      artist: "Justin Timberlake",
    },
    {
      lyric1:
        "Acting on your best behaviour \n Turn your back on mother nature",
      lyric2: "Everybody wants to rule the world",
      title: "EVERYBODY WANTS TO \n RULE THE WORLD",
      artist: "Tears For Fears",
    },
    {
      lyric1:
        "Then love, love will tear us apart again",
      lyric2: "Love, love will tear us apart again",
      title: "LOVE WILL \n TEAR US APART",
      artist: "Joy Division",
    },
    {
      lyric1:
        "Don't show up, don't come out, don't start caring about me now",
      lyric2: "Walk away, you know how, don't start caring about me now",
      title: "DON'T START NOW",
      artist: "Dua Lipa",
    },
    {
      lyric1:
        "So you're a tough guy, like it really rough guy",
      lyric2: "Just can't get enough guy, chest always so puffed guy",
      title: "BAD GUY",
      artist: "Billie Eilish",
    },
    {
      lyric1:
        "Varje gång jag ser dig är det som om allting stannar till",
      lyric2: "Och jag vet inte varför",
      title: "VARJE GÅNG\nJAG SER DIG ",
      artist: "Lisa Nilsson",
    },
    {
      lyric1:
        "And I said, ooh, I'm blinded by the lights\nNo, I can't sleep until I feel your touch",
      lyric2: "I said, ooh, I'm drowning in the night\nOh, when I'm like this, you're the one I trust",
      title: "BLINDING LIGHTS",
      artist: "The Weeknd",
    },
    {
      lyric1:
        "Se dig omkring\nVar det det här vi drömde, drömde",
      lyric2: "Är det någonting\nNågonting vi glömde, glömde",
      title: "SÄG MIG\nVAR DU STÅR",
      artist: "Carola",
    },
    {
      lyric1:
        "If there's something strange\nIn your neighborhood",
      lyric2: "Who you gonna call? Ghostbusters!",
      title: "GHOSTBUSTERS",
      artist: "Ray Parker, Jr.",
    },
    {
      lyric1:
        "Darling, you got to let me know",
      lyric2: "Should I stay or should I go?",
      title: "SHOULD I STAY\nOR SHOULD I GO?",
      artist: "The Clash",
    },
    {
      lyric1:
        "My name is Luka",
      lyric2: "I live on the second floor",
      title: "LUKA",
      artist: "Suzanne Vega",
    },
    {
      lyric1:
        "And then a hero comes along, with the strength to carry on",
      lyric2: "And you cast your fears aside, and you know you can survive",
      title: "HERO",
      artist: "Mariah Carey",
    },
    {
      lyric1:
        "Video killed the radio star, video killed the radio star",
      lyric2: "In my mind and in my car, we can't rewind we've gone too far",
      title: "VIDEO KILLED THE\nRADIO STAR",
      artist: "The Buggles",
    },
    {
      lyric1:
        "I just called to say\nI love you",
      lyric2: "I just called to say\n how much I care",
      title: "I JUST CALLED TO\nSAY I LOVE YOU",
      artist: "Stevie Wonder",
    },
    {
      lyric1:
        "Love me, love me, say that you love me",
      lyric2: "Fool me, fool me, go on and fool me",
      title: "LOVEFOOL",
      artist: "The Cardigans",
    },
    {
      lyric1:
        "Don't wanna be a fool for you\nJust another player in your game for two",
      lyric2: "You may hate me but it ain't no lie\nBaby, bye, bye, bye",
      title: "BYE BYE BYE",
      artist: "Nsync",
    },
    {
      lyric1:
        "I'm sorry, Ms. Jackson\nI am for real",
      lyric2: "Never meant to make your daughter cry, I apologize a trillion times",
      title: "MS. JACKSON",
      artist: "Outkast",
    },
    {
      lyric1:
        "Jag vill känna mej fri-fri-fri, det är min filosofi-fi-i",
      lyric2: "Kolla kolla att, jag är en reko kille",
      title: "KOLLA KOLLA",
      artist: "Nationalteatern",
    },
    {
      lyric1:
        "I want to know what love is",
      lyric2: "I want you to show me",
      title: "I WANT TO KNOW\nWHAT LOVE IS",
      artist: "Foreigner",
    },
    {
      lyric1:
        "Tell it to my heart, tell me I'm the only one",
      lyric2: "Is this really love or just a game",
      title: "TELL IT TO MY HEART",
      artist: "Taylor Dayne",
    },
    {
      lyric1:
        "Take on me",
      lyric2: "Take me on",
      title: "TAKE ON ME",
      artist: "a-ha",
    },
    {
      lyric1:
        "Hello\nIs it me you're looking for?",
      lyric2: "Cause I wonder where you are and I wonder what you do",
      title: "HELLO",
      artist: "Lionel Richie",
    },
    {
      lyric1:
        "Karma karma karma karma karma chameleon",
      lyric2: "You come and go, you come and go",
      title: "KARMA CHAMELEON",
      artist: "Culture Club",
    },
    {
      lyric1:
        "We could have hade it all, rolling in the deep",
      lyric2: "You had my heart inside of your hand, and you played it to the beat",
      title: "ROLLING IN THE DEEP",
      artist: "Adele",
    },
    {
      lyric1:
        "This love has taken it's toll on me",
      lyric2: "She said goodbye\n too many times before",
      title: "THIS LOVE",
      artist: "Maroon 5",
    },
    {
      lyric1:
        "I say, dont you know? You say you dont know",
      lyric2: "I say, take me out",
      title: "TAKE ME OUT",
      artist: "Franz Ferdinand",
    },
    {
      lyric1:
        "That's me in the corner\nThat's me in the spotlight ",
      lyric2: "Losing my religion",
      title: "LOSING MY RELIGION",
      artist: "R.E.M.",
    },
    {
      lyric1:
        "Sol, vind och vatten",
      lyric2: "Höga berg och djupa hav",
      title: "SOL, VIND OCH VATTEN",
      artist: "Ted Gärdestad",
    },
    {
      lyric1:
        "I'm a survivor\nI'm not gonna give up ",
      lyric2: "I'm not gonna stop\nI'm gonna work harder",
      title: "SURVIVOR",
      artist: "Destiny's Child",
    },
    {
      lyric1:
        "Biggie, Biggie, Biggie, can't you see?",
      lyric2: "Sometimes your words just hypnotize me",
      title: "HYPNOTIZE",
      artist: "The Notorious B.I.G.",
    },
    {
      lyric1:
        "Save tonight, and fight the break of dawn",
      lyric2: "Come tomorrow\n Tomorrow I'll be gone",
      title: "SAVE TONIGHT",
      artist: "Eagle Cherry",
    },
    {
      lyric1:
        "Never gonna give you up, never gonna let you down",
      lyric2: "Never gonna run around and desert you",
      title: "NEVER GONNA\nGIVE YOU UP",
      artist: "Rick Astley",
    },
    {
      lyric1:
        "Forever young, I want to be forever young",
      lyric2: "Do you really want to live forever?",
      title: "FOREVER YOUNG",
      artist: "Alphaville",
    },
    {
      lyric1:
        "Hold the line",
      lyric2: "Love isn't always on time",
      title: "HOLD THE LINE",
      artist: "Toto",
    },
    {
      lyric1:
        "If you wanna be my lover, you gotta get with my friends",
      lyric2: "Make it last forever, friendship never ends",
      title: "WANNABE",
      artist: "Spice Girls",
    },
    {
      lyric1:
        "Ever since I was eight or nine",
      lyric2: "I've been standing on the shoreline",
      title: "SHORELINE",
      artist: "Broder Daniel",
    },
    {
      lyric1:
        "Voulez-vous coucher avec moi ce soir?",
      lyric2: "Voulez-vous coucher avec moi?",
      title: "LADY MARMALADE",
      artist: "Patti LaBelle",
    },
    {
      lyric1:
        "I was made for loving you baby",
      lyric2: "You were made for loving me",
      title: "I WAS MADE FOR\nLOVIN' YOU",
      artist: "KISS",
    },
    {
      lyric1:
        "Look at the stars, look how they shine for you",
      lyric2: "And everything you do\nYeah, they were all yellow ",
      title: "YELLOW",
      artist: "Coldplay",
    },
    {
      lyric1:
        "Ooh, baby, do you know what that's worth?",
      lyric2: "Ooh, heaven is a place on earth",
      title: "HEAVEN IS A\nPLACE ON EARTH",
      artist: "Belinda Carlisle",
    },
    {
      lyric1:
        "Från och med nu\nFrån och med du",
      lyric2: "Jag blir aldrig samma, från och med du",
      title: "FRÅN OCH MED DU",
      artist: "Oskar Linnros",
    },
    {
      lyric1:
        "What a feeling\nBeing's believing",
      lyric2: "I can have it all\nNow I'm dancing for my life",
      title: "WHAT A FEELING",
      artist: "Irene Cara",
    },
    {
      lyric1:
        "Control yourself, take only what you need from it",
      lyric2: "A family of trees wanting, to be haunted",
      title: "KIDS",
      artist: "MGMT",
    },
    {
      lyric1:
        "One way, or another, I'm gonna find ya",
      lyric2: "I'm gonna get ya, get ya, get ya, get ya",
      title: "ONE WAY OR ANOTHER",
      artist: "Blondie",
    },
    {
      lyric1:
        "I'm gonna fight 'em off",
      lyric2: "A seven nation army couldn't hold me back",
      title: "SEVEN NATION ARMY",
      artist: "The White Stripes",
    },
    {
      lyric1:
        "Goodbye my lover, goodbye my friend",
      lyric2: "You have been the one, you have been the one for me",
      title: "GOODBYE MY LOVER",
      artist: "James Blunt",
    },
    {
      lyric1:
        "I believe in miracles",
      lyric2: "Where you from, you sexy thing?",
      title: "YOU SEXY THING",
      artist: "Hot Chocolate",
    },
    {
      lyric1:
        "I shot the sheriff",
      lyric2: "But I didn't shoot the deputy",
      title: "I SHOT THE SHERIFF",
      artist: "Bob Marley & the Wailers",
    },
     {
      lyric1:
        "It must have been love, but it's over now",
      lyric2: "It must have been good\n But I lost it somehow",
      title: "IT MUST HAVE\nBEEN LOVE",
      artist: "Roxette",
    },
    {
      lyric1:
        "Sommaren i city 1990, kommer du ihåg mig?",
      lyric2: "Minns du vad som hände? Minns du vad du sa när du träffade mig?",
      title: "SOMMAREN I CITY",
      artist: "Angel",
    },
    {
      lyric1:
        "Country roads, take me home, to the place I belong",
      lyric2: "West Virginia, mountain mama\nTake me home, country roads",
      title: "TAKE ME HOME,\n COUNTRY ROADS",
      artist: "John Denver",
    },
    {
      lyric1:
        "Sometimes I feel\n I've got to\n Run away",
      lyric2: "I've got to\nGet away ",
      title: "TAINTED LOVE",
      artist: "Soft Cell",
    },
    {
      lyric1:
        "And I find kinda funny\nI find it kinda sad",
      lyric2: "The dreams in which I'm dying are the best I've ever had",
      title: "MAD WORLD",
      artist: "Gary Jules ft. Michael Andrews",
    },
    {
      lyric1:
        "Roxanne!",
      lyric2: "You don't have to put on the red light",
      title: "ROXANNE",
      artist: "The Police",
    },
    {
      lyric1:
        "I always feel like\nsomebody's watching me",
      lyric2: "And I have no privacy",
      title: "SOMEBODY'S \nWATCHING ME",
      artist: "Rockwell",
    },
    {
      lyric1:
        "They tried to make me go to rehab",
      lyric2: "But I said no no no",
      title: "REHAB",
      artist: "Amy Winehouse",
    },
    {
      lyric1:
        "All the leaves are brown, and the sky is gray",
      lyric2: "I've been for a walk, on a winter's day ",
      title: "CALIFORNIA DREAMIN'",
      artist: "The Mamas & The Papas",
    },
    {
      lyric1:
        "Look into my eyes, can't you see their open wide?",
      lyric2: "Would I lie to you, baby, would I lie to you?",
      title: "WOULD I LIE TO YOU?",
      artist: "Charles & Eddie",
    },
    {
      lyric1:
        "'Cause tonight for the first time, just about half-past ten",
      lyric2: "It's gonna start raining men",
      title: "IT'S RAINING MEN",
      artist: "The Weather Girls",
    },
    {
      lyric1:
        "Sommaren är kort",
      lyric2: "Det mesta regnar bort",
      title: "SOMMAREN ÄR KORT",
      artist: "Tomas Ledin",
    },
    {
      lyric1:
        "Jag gjorde upp en eld för dig, och nu brinner hela skogen",
      lyric2: "Nu vet jag vad du kommer att säg, och det känns som första gången",
      title: "DET SNURRAR I\nMIN SKALLE",
      artist: "Familjen",
    },
    {
      lyric1:
        "Åh Sarah, kom ut ikväll, jag väntar i hörnet vid 7-eleven",
      lyric2: "Sarah, du är mer än jag förstår, ta på dig jackan så går vi ut o går",
      title: "SARAH",
      artist: "Mauro Scocco",
    },
    {
      lyric1:
        "För Piccadilly Circus, är stället för mig",
      lyric2: "Piccadilly Circus, där mötte jag dig",
      title: "PICCADILLY CIRCUS",
      artist: "Pernilla Wahlgren",
    },
    {
      lyric1:
        "Mama, just killed a man, put a gun against his head",
      lyric2: "Pulled my trigger\n Now he's dead",
      title: "BOHEMIAN RHAPSODY",
      artist: "Queen",
    },
    {
      lyric1:
        "It goes like this, the fourth, the fifth\n the minor fall, the major lift",
      lyric2: "The baffled king composing 'Hallelujah'",
      title: "HALLELUJAH",
      artist: "Leonard Cohen",
    },
    {
      lyric1:
        "I can't stop this feeling\n Deep inside of me",
      lyric2: "Girl, you just don't realise, what you do to me",
      title: "HOOKED ON A FEELING",
      artist: "Blue Swede",
    },
    {
      lyric1:
        "Jag kommer, jag kommer, jag kommer, jag kommer",
      lyric2: "Jag är nästan där",
      title: "JAG KOMMER",
      artist: "Veronica Maggio",
    },
    {
      lyric1:
        "I've had the time of my life, no, I've never felt like this before ",
      lyric2: "Yes, I swear, its the truth and I owe it all to you",
      title: "(I'VE HAD) THE\nTIME OF MY LIFE",
      artist: "Bill Medley & Jennifer Warnes",
    },
    {
      lyric1:
        "I fly like paper, get high like planes",
      lyric2: "If you catch me at the border, I got visas in my name",
      title: "PAPER PLANES",
      artist: "M.I.A.",
    },
    {
      lyric1:
        "Wise men say\nOnly fools rush in",
      lyric2: "But I can't help\nfalling in love with you",
      title: "CAN'T HELP\nFALLING IN LOVE",
      artist: "Elvis Presley",
    },
    {
      lyric1:
        "I'm a joker\nI'm a smoker",
      lyric2: "I'm a midnight toker",
      title: "THE JOKER",
      artist: "Steve Miller Band",
    },
    {
      lyric1:
        "Alla vill till himmelen men få vill ju dö",
      lyric2: "Man vill kamma in vinningen, men sår inga frön",
      title: "ALLA VILL TILL HIMMELEN",
      artist: "Timbuktu",
    },
    {
      lyric1:
        "You're simply the best, better than all the rest",
      lyric2: "Better than anyone, anyone I've ever met",
      title: "THE BEST",
      artist: "Tina Turner",
    },
  ];

  module.exports = {data: songs}