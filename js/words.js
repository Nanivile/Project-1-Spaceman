const wordList = [
    {
        word: "banana",
        hint: "A yellow fruit.",
    },
    {
        word: "apple",
        hint: "A red fruit.",
    }, 
    {
        word: "past",
        hint: "An event that already happened.",
    },
    {
        word: "bone",
        hint: "Part of our body that protect vital organs.",
    }, 
    {
        word: "delirious",
        hint: "Unable to think or speak clearly due to a disturbed state of mind.",
    },
    {
        word: "moon",
        hint: "Light in the night sky.",
    }, 
    {
        word: "guard",
        hint: "Protect or defend.",
    },
    {
        word: "curvy",
        hint: "Having a body with rounded parts, more defined on women.",
    }, 
    {
        word: "humor",
        hint: "Being able to find things funny.",
    },
    {
        word: "irritating",
        hint: "Something causing displeasure, anger, or annoyance.",
    }, 
    {
        word: "cave",
        hint: "A dark place where bat-man lives.",
    },
    {
        word: "crayon",
        hint: "Sticks kids use to color.",
    }, 
    {
        word: "acute",
        hint: "An angle less than 90 degrees.",
    },
    {
        word: "songs",
        hint: "Music with an 's' at the end.",
    }, 
    {
        word: "activity",
        hint: "Things that a person or group does or has done.",
    },
    {
        word: "precede",
        hint: "Go ahead or in front of something.",
    }, 
    {
        word: "versed",
        hint: "Being experienced on something.",
    },
    {
        word: "futuristic",
        hint: "Intended or seeming to come from some imagined time in the future.",
    }, 
    {
        word: "equal",
        hint: "Being the same.",
    },
    {
        word: "wetly",
        hint: "In a way that is wet or unpleasant.",
    }, 
    {
        word: "bicycle",
        hint: "A human-powered vehicle with two wheels",
    },
    {
        word: "chocolate",
        hint: "A sweet treat made from cocoa beans.",
    },
    {
        word: "butterfly",
        hint: "An insect with colorful wings and a slender body.",
    },
    {
        word: "history",
        hint: "The study of past events and human civilization.",
    },
    {
        word: "pizza",
        hint: "A savory dish consisting of a round, flattened base with toppings.",
    },
    {
        word: "jazz",
        hint: "A genre of music characterized by improvisation and syncopation.",
    },
    {
        word: "camera",
        hint: "A device used to capture and record images or videos.",
    },
    {
        word: "diamond",
        hint: "A precious gemstone known for its brilliance and hardness.",
    },
    {
        word: "sunset",
        hint: "The daily disappearance of the sun below the horizon.",
    },
    {
        word: "coffee",
        hint: "A popular caffeinated beverage made from roasted coffee beans.",
    },
    {
        word: "dance",
        hint: "A rhythmic movement of the body often performed to music.",
    },
    {
        word: "galaxy",
        hint: "A vast system of stars, gas, and dust held together by gravity.",
    },
    {
        word: "orchestra",
        hint: "A large ensemble of musicians playing various instruments.",
    },
    {
        word: "volcano",
        hint: "A mountain or hill with a vent through which lava, rock fragments, hot vapor, and gas are ejected.",
    },
    {
        word: "novel",
        hint: "A long work of fiction, typically with a complex plot and characters.",
    },
    {
        word: "sculpture",
        hint: "A three-dimensional art form created by shaping or combining materials.",
    },
    {
        word: "symphony",
        hint: "A long musical composition for a full orchestra, typically in multiple movements.",
    },
    {
        word: "architecture",
        hint: "The art and science of designing and constructing buildings.",
    },
    {
        word: "ballet",
        hint: "A classical dance form characterized by precise and graceful movements.",
    },
    {
        word: "astronaut",
        hint: "A person trained to travel and work in space.",
    },
    {
        word: "waterfall",
        hint: "A cascade of water falling from a height.",
    },
    {
        word: "technology",
        hint: "The application of scientific knowledge for practical purposes.",
    },
    {
        word: "rainbow",
        hint: "A meteorological phenomenon that is caused by reflection, refraction, and dispersion of light.",
    },
    {
        word: "universe",
        hint: "All existing matter, space, and time as a whole.",
    },
    {
        word: "piano",
        hint: "A musical instrument played by pressing keys that cause hammers to strike strings.",
    },
    {
        word: "vacation",
        hint: "A period of time devoted to pleasure, rest, or relaxation.",
    },
    {
        word: "rainforest",
        hint: "A dense forest characterized by high rainfall and biodiversity.",
    },
    {
        word: "theater",
        hint: "A building or outdoor area in which plays, movies, or other performances are staged.",
    },
    {
        word: "telephone",
        hint: "A device used to transmit sound over long distances.",
    },
    {
        word: "language",
        hint: "A system of communication consisting of words, gestures, and syntax.",
    },
    {
        word: "desert",
        hint: "A barren or arid land with little or no precipitation.",
    },
    {
        word: "sunflower",
        hint: "A tall plant with a large yellow flower head.",
    },
    {
        word: "fantasy",
        hint: "A genre of imaginative fiction involving magic and supernatural elements.",
    },
    {
        word: "telescope",
        hint: "An optical instrument used to view distant objects in space.",
    },
    {
        word: "breeze",
        hint: "A gentle wind.",
    },
    {
        word: "oasis",
        hint: "A fertile spot in a desert where water is found.",
    },
    {
        word: "photography",
        hint: "The art, process, or practice of creating images by recording light or other electromagnetic radiation.",
    },
    {
        word: "safari",
        hint: "An expedition or journey, typically to observe wildlife in their natural habitat.",
    },
    {
        word: "planet",
        hint: "A celestial body that orbits a star and does not produce light of its own.",
    },
    {
        word: "river",
        hint: "A large natural stream of water flowing in a channel to the sea, a lake, or another such stream.",
    },
    {
        word: "tropical",
        hint: "Relating to or situated in the region between the Tropic of Cancer and the Tropic of Capricorn.",
    },
    {
        word: "mysterious",
        hint: "Difficult or impossible to understand, explain, or identify.",
    },
    {
        word: "enigma",
        hint: "Something that is mysterious, puzzling, or difficult to understand.",
    },
    {
        word: "paradox",
        hint: "A statement or situation that contradicts itself or defies intuition.",
    },
    {
        word: "puzzle",
        hint: "A game, toy, or problem designed to test ingenuity or knowledge.",
    },
    {
        word: "whisper",
        hint: "To speak very softly or quietly, often in a secretive manner.",
    },
    {
        word: "shadow",
        hint: "A dark area or shape produced by an object blocking the light.",
    },
    {
        word: "secret",
        hint: "Something kept hidden or unknown to others.",
    },
    {
        word: "curiosity",
        hint: "A strong desire to know or learn something.",
    },
    {
        word: "unpredictable",
        hint: "Not able to be foreseen or known beforehand; uncertain.",
    },
    {
        word: "obfuscate",
        hint: "To confuse or bewilder someone; to make something unclear or difficult to understand.",
    },
    {
        word: "unveil",
        hint: "To make known or reveal something previously secret or unknown.",
    },
    {
        word: "illusion",
        hint: "A false perception or belief; a deceptive appearance or impression.",
    },
    {
        word: "moonlight",
        hint: "The light from the moon.",
    },
    {
        word: "vibrant",
        hint: "Full of energy, brightness, and life.",
    },
    {
        word: "nostalgia",
        hint: "A sentimental longing or wistful affection for the past.",
    },
    {
        word: "brilliant",
        hint: "Exceptionally clever, talented, or impressive.",
    },
    {
        word: "volcano",
        hint: "An erupting mountain"
    },
    {
        word: "economist",
        hint: "An expert in economics"
    },
    {
        word: "courtship",
        hint: "A time where couples develope a romantic relationship"
    },
    {
        word: "yeani",
        hint: "the coolest person in the world"
    },
];


