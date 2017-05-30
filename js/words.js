
var stage = new Kinetic.Stage({
    container: "container",
    width: window.innerWidth,
    height: window.innerHeight
});

var layer = new Kinetic.Layer();

var displayWidth = window.innerWidth /4;
var displayHeight = window.innerHeight /4;

var clearSet = [ '!', '"', '"', '.', '?', 'I', 'I', 'a', 'a', 'am', 'accomplish', 'achieve', 'admire', 'am', 'am', 'an', 'and', 'and', 'any', 'are', 'are', 'be', 'beautiful', 'boy', 'but', 'care', 'chance', 'clear', 'cloud', 'could', 'dance', 'dance', 'darkness', 'day', 'do', 'dream', 'es', 'everything', 'feel', 'for', 'free', 'fresh', 'fun', 'girl', 'grace', 'happy', 'harmony', 'he', 'hello', 'her', 'here', 'hi', 'him', 'how', 'hug', 'imagine', 'is', 'is', 'is', 'is', 'it', 'it', 'joy', 'jubilant', 'jump', 'kiss', 'laugh', 'life', 'light', 'like', 'linger', 'lips', 'love', 'make', 'maybe', 'me', 'me', 'mind', 'my', 'mystery', 'name', 'nap', 'nearby', 'next', 'night', 'no', 'on', 'or', 'peace', 'peaceful', 'possibility', 'possible', 'potential', 'rhythm', 'run', 's', 'safe', 'secure', 'she', 'should', 'simple', 'simply', 'sing', 'sing', 'skip', 'sleep', 'smile', 'so', 'soul', 'spiritual', 'stay', 'sun', 'sunny', 'the', 'the', 'the', 'there', 'think', 'this', 'this', 'thrive', 'through', 'to', 'to', 'today', 'together', 'tomorrow', 'try', 'was', 'was', 'we', 'week', 'were', 'were', 'whisper', 'will', 'will', 'wish', 'with', 'wonder', 'world', 'worthy', 'would', 'would', 'wow', 'wrap', 'year', 'yes', 'yesterday', 'you', 'you', 'your' ]
var rainSet = [ '!', '"', '"', '.', '?', 'I', 'I', 'a', 'a', 'a', 'am', 'am', 'an', 'and', 'and', 'apology', 'april', 'are', 'are', 'away', 'be', 'believe', 'book', 'boy', 'bring', 'but', 'but', 'but', 'can', 'can', 'care', 'chance', 'chance', 'clean', 'cloud', 'clouds', 'cloudy', 'cold', 'come', 'cry', 'damaged', 'dance', 'dark', 'dark', 'darkness', 'day', 'desire', 'drip', 'drop', 'drown', 'es', 'feel', 'flowers', 'for', 'forever', 'get', 'girl', 'give', 'he', 'her', 'him', 'home', 'how', 'in', 'in', 'ing', 'is', 'is', 'is', 'it', 'just', 'kiss', 'last', 'life', 'life', 'light', 'like', 'linger', 'love', 'make', 'may', 'me', 'me', 'melancholy', 'mine', 'my', 'mystery', 'nest', 'never', 'next', 'night', 'no', 'on', 'or', 'pitter-patter', 'pour', 'rain', 'read', 'rhythm', 's', 'safe', 'said', 'serene', 'shall', 'share', 'she', 'shower', 'showers', 'sing', 'singing', 'so', 'sometimes', 'sorrow', 'sorry', 'splash', 'sprinkle', 'stand', 'stay', 'storm', 'sun', 'the', 'the', 'the', 'this', 'through', 'to', 'to', 'to', 'today', 'together', 'tomorrow', 'umbrella', 'under', 'us', 'want', 'was', 'was', 'wash', 'water', 'we', 'were', 'were', 'will', 'will', 'will', 'with', 'worthy', 'would', 'would', 'yes', 'yesterday', 'you', 'you', 'your' ]
var stormSet = [ '!', '.', '?', 'I', 'I', 'a', 'a', 'a', 'a', 'am', 'am', 'an', 'and', 'and', 'any', 'are', 'are', 'be', 'boy', 'but', 'chance', 'cloud', 'could', 'darkness', 'day', 'do', 'everything', 'feel', 'for', 'he', 'her', 'here', 'him', 'how', 'is', 'is', 'is', 'it', 'it', 'like', 'maybe', 'me', 'me', 'my', 'mystery', 'name', 'nap', 'nearby', 'next', 'night', 'no', 'on', 'or', 'she', 'so', 'the', 'the', 'the', 'there', 'think', 'this', 'this', 'thrive', 'through', 'to', 'to', 'today', 'together', 'tomorrow', 'try', 'was', 'was', 'we', 'week', 'were', 'were', 'whisper', 'will', 'will', 'wish', 'with', 'wonder', 'world', 'worthy', 'would', 'would', 'wrap', 'year', 'yes', 'yesterday', 'you', 'you', 'your', 'miss', 'storm', 'turbulent', 'unsettling', 'dark', 'black', 'pitch', 'thunder', 'lightning', 'crowd', 'seek', 'solace', 'serenity', 'chaos', 'peace', 'troubled', 'stormy', 'burden', '"', '"', 'said', 'loud', 'soft', 's', 'es', 'mind', 'demons', 'hurricane', 'tornado', 'spiral', 'anger', 'violent', 'crash', 'fall', 'destroy' 'my', 'life', 'is', 'a', 'mess', 'shambles', 'broken', 'ed', 'break', 'crash', 'rough', 'time', 'this', 'tomorrow', 'will', 'be', 'better', 'eye', 'of', 'calm', 'before' ]
var snowSet = ['!', '.', '?', 'I', 'I', 'a', 'a', 'a', 'a', 'am', 'am', 'an', 'and', 'and', 'any', 'are', 'are', 'be', 'brightness', 'dazzling', 'death', 'he', 'her', 'here', 'him', 'how', 'is', 'is', 'soft', 'milk', 'crisp', 'breath', 'evaporate', 'settle', 'damp', 'love', 'cozy', 'fire', 'whoosh', 'snowman', 'mittens', 'red', 'bitten', 'bright', 'smile', 'glazed', 'stomp', 'heavy', 'tired', 'stoop', 'old', 'wistful', 'stories', 'said', 'fall', 'forever', 'get', 'girl', 'give', 'he', 'her', 'him', 'home', 'how', 'in', 'in', 'ing', 'is', 'is', 'is', 'it', 'just', 'mystery', 'silence', 'night', 'glow', 'orange', 'cheeks', 'fingers', 'lips', 'toes']

//w being the number of words in a given set
for(w in words) {
    // for each magnet, create a draggable group (text, rectangle)
    var group = new Kinetic.Group({
        draggable: true
    });

    var simpleText = new Kinetic.Text({
        x: 15,
        y: 75,
        text: 'may',
        fontSize: 15,
        fontFamily: 'Times New Roman',
        fill: 'black'
    });

    var rect = new Kinetic.Rect({
        x: 5,
        y: 70,
         width: simpleText.getWidth() + 20,
        height: simpleText.getHeight() + 13,
        stroke: 'black',
        strokeWidth: 2
    });

    group.add(simpleText);
    group.add(rect);
    layer.add(group);

}

stage.add(layer);

