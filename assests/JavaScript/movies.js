let movieDataBase= [
    {"title": "Love Story",
        "line": "Love means never having to say you're sorry.",
        "speaker": "Ryan O'Neal",
        "picture": "assests/images/love_story.jpg"
    },

    {"title": "Gone With the Wind",
        "line": "Frankly, my dear, I don't give a damn.",
        "speaker": "Clark Gable",
        "picture": "assests/images/gone_wind.jpg"
    },

    {"title": "The Godfather",
        "line": "I'm going to make him an offer he can't refuse.",
        "speaker": "Marlon Brando",
        "picture": "assests/images/godfather.jpg"
    },

    {"title": "Casablanca",
        "line": "Here's looking at you, kid.",
        "speaker": "Humphrey Bogart",
        "picture": "assests/images/Casablanca.jpg"
    },

    {"title": "Sudden Impact",
        "line": "Go ahead, make my day",
        "speaker": "Clint Eastwood",
        "picture": "assests/images/sudden_impact.jpg"
    },

    {"title": "All About Eve",
        "line": "Fasten your seatbelts, it's going to be a bumpy night.",
        "speaker": "Bette Davis",
        "picture": "assests/images/Eve.jpg"
    },

    {"title": "Taxi Driver",
        "line": "You talkin' to me?",
        "speaker": "Robert DeNiro",
        "picture": "assests/images/taxi_driver.jpg"
    },

    {"title": "Cool Hand Luke",
        "line": "What we've got here is a failure to communicate",
        "speaker": "Strother Martin",
        "picture": "assests/images/Luke.jpg"
    },

    {"title": "Apocalypse Now",
        "line": "I love the smell of napalm in the morning",
        "speaker": "Robert Duvall",
        "picture": "assests/images/apocalypse.jpg"
    },

    {"title": "The Maltese Falcon",
        "line": "The stuff that dreams are made of.",
        "speaker": "Humphrey Bogart",
        "picture": "assests/images/maltese.jpg"
    },

    {"title": "In the Heat of the Night",
        "line": "They call me Mister Tibbs!",
        "speaker": "Sidney Poitier",
        "picture": "assests/images/heat_night.jpg"
    },

    {"title": "White Heat",
        "line": "Made it, Ma! Top of the world!",
        "speaker": "James Cagney",
        "picture": "assests/images/white_heat.jpg"
    },

    {"title": "Network",
        "line": "I'm mad as hell, and I'm not gonig ot take this anymore!",
        "speaker": "Peter Finch",
        "picture": "assests/images/network.jpg"
    },

    {"title": "Casablanca",
        "line": "Louis, I think this is the beginning of a beautfil friendship.",
        "speaker": "Humphrey Bogart",
        "picture": "assests/images/Casablanca.jpg"
    },

    {"title": "Wizard of Oz",
        "line": "There's no place like home.",
        "speaker": "Judy Garland",
        "picture": "assests/images/wizard.jpg"
    },

    {"title": "Jerry Maguire",
        "line": "Show me the money!",
        "speaker": "Cuba Gooding, Jr",
        "picture": "assests/images/Maguire.jpg"
    },

    {"title": "A Few Good Men",
        "line": "You can't handle the truth!",
        "speaker": "Jack Nicholson",
        "picture": "assests/images/few_good_men.jpg"
    },

    {"title": "Gone With the Wind",
        "line": "After all, tomorrow is another day.",
        "speaker": "Vivien Leigh",
        "picture": "assests/images/gone_wind.jpg"
    },

    {"title": "When Harry Met Sally",
        "line": "I'll have what she's having.",
        "speaker": "Estelle Reiner",
        "picture": "assests/images/harry_sally.jpg"
    },

    {"title": "Jaws",
        "line": "You're gonna need a bigger boat.",
        "speaker": "Roy Scheider",
        "picture": "assests/images/jaws.jpg"
    },

    {"title": "The Terminator",
        "line": "I'll be back",
        "speaker": "Arnold Schwarzenegger",
        "picture": "assests/images/terminator.jpg"
    },

    {"title": "The Pride of the Yankees",
        "line": "Today, I consider myyself the luckiest man on the face of the earth.",
        "speaker": "Gary Cooper",
        "picture": "assests/images/yankees.jpg"
    },

    {"title": "Field of Dreams",
        "line": "If you build it, they will come.",
        "speaker": "Ray Liotta",
        "picture": "assests/images/field_dreams.jpg"
    },

    {"title": "Forrest Gump",
        "line": "My mama always said, 'Life is like a box of chocolates.  You nevear know what you're gonna get.",
        "speaker": "Tom Hanks",
        "picture": "assests/images/forrest_gump.jpg"
    },

    {"title": "The Sixth Sense",
        "line": "I see dead people.",
        "speaker": "Haley Joel Osment",
        "picture": "assests/images/sixth_sense.jpg"
    },

    {"title": "A Streetcar Named Desire",
        "line": "Stella! Hey, Stella!",
        "speaker": "Marlon Brando",
        "picture": "assests/images/streetcar.jpg"
    },

    {"title": "Frankenstein",
        "line": "It's alive! It's alive!",
        "speaker": "Colin Clive",
        "picture": "assests/images/frankenstein.jpg"
    },

    {"title": "Apollo 13",
        "line": "Houston, we have a problem.",
        "speaker": "Tom Hanks",
        "picture": "assests/images/apollo_13.jpg"
    },

    {"title": "Dirty Harry",
        "line": "You've got to ask yourself one question: 'Do I feel lucky? Well, do ya, punk?",
        "speaker": "Clint Eastwood",
        "picture": "assests/images/dirty_harry.jpg"
    },

    {"title": "Jerry Maguire",
        "line": "You had me at hello.",
        "speaker": "Renee Zellweger",
        "picture": "assests/images/maguire.jpg"
    },

    {"title": "A League of Their Own",
        "line": "There's no crying in baseball.",
        "speaker": "Tom Hanks",
        "picture": "assests/images/league_own.jpg"
    },

    {"title": "Psycho",
        "line": "A boy's best friend is his mother.",
        "speaker": "Anthony Perkins",
        "picture": "assests/images/psycho.jpg"
    },

    {"title": "The Godfather: Part II",
        "line": "Keep your friends close, but your enemies closer.",
        "speaker": "Al Pacino",
        "picture": "assests/images/godfather.jpg"
    },

    {"title": "Sons of the Desert",
        "line": "Well, here's another nice mess you've gotten me into!",
        "speaker": "Oliver Hardy",
        "picture": "assests/images/godfather2.jpg"
    },

    {"title": "Scarface",
        "line": "Say 'hello' to my little friend.",
        "speaker": "Al Pacino",
        "picture": "assests/images/scarface.jpg"
    },

    {"title": "The Shining",
        "line": "Here's Johnny!",
        "speaker": "Jack Nicholson",
        "picture": "assests/images/shining.jpg"
    },

    {"title": "Poltergeist",
        "line": "They're here!",
        "speaker": "Heather O'Rourke",
        "picture": "assests/images/poltergeist.jpg"
    },

    {"title": "Rocky",
        "line": "Yo, Adrian",
        "speaker": "Sylvester Stallone",
        "picture": "assests/images/rocky.jpg"
    },

    {"title": "Funny Girl",
        "line": "Hello, gorgeous.",
        "speaker": "Barbara Streisand",
        "picture": "assests/images/funny_girl.jpg"
    },

    {"title": "The Lord of the Rings: The Two Towers",
        "line": "My precious",
        "speaker": "Andy Serkis",
        "picture": "assests/images/lord_rings2.jpg"
    },

    {"title": "Moonstruck",
        "line": "Snap out of it!",
        "speaker": "Cher",
        "picture": "assests/images/moonstruck.jpg"
    },

    {"title": "Dirty Dancing",
        "line": "Nobody puts Baby in the corner.",
        "speaker": "Patrick Swayze",
        "picture": "assests/images/dirty_dancing.jpg"
    },

    {"title": "Titanic",
        "line": "I'm kind of the world!",
        "speaker": "Leonardo DiCaprio",
        "picture": "assests/images/titanic.jpg"
    },
    
]
