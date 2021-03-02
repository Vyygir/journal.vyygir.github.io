import random from './MersenneTwister';

const options = [
    'Trying is the first step towards failure.',
    'Success is just failure that hasn\'t happened yet.',
    'Not everything is a lesson. Sometimes you just fail.',
    'If at first you don\'t success, try, try again. Then quit. No use being a damn fool about it.',
    'I\'m sure the universe is full of intelligentl ife. It\'s just been too intelligent to come here.',
    'Two things are infinite: the universe and human stupidity; and I\'m not sure about the universe.',
    'Always remember that you are absolutely unique. Just like everyone else.',
    'I am free of all prejudice. I hate everyone equally.',
    'Light travels faster than sound. This is why some people appear bright until you hear them speak.',
    'Hope is the first step on the road to disappointment.',
    'The story so far: in the beginning the Universe was created. This has made a lot of people very angry and been widely regarded as a bad move.',
    'Everything happens for a reason. Sometimes the reason is you\'re stupid and make bad decisions.',
];

const getRandomQuote = () => options[Math.floor(random() * options.length)];

export {
    getRandomQuote,
};
