var Chain = function () {
  // Values
  var chain  = {};
  var weights = {};
  var double = false;
  // Increase the token value within our chain
  // Key = Previous Letter, Token = Following Letter, Prior = Letter before our key
  function increment (key, token, prior) {
    if (double) {
      if (chain[prior]) {
        if (chain[prior][key]) {
          if (chain[prior][key][token]) {
            chain[prior][key][token]++;
          } else {
            chain[prior][key][token] = 1;
          }
        } else {
          chain[prior][key] = {};
          chain[prior][key][token] = 1;
        }
      } else {
        chain[prior] = {};
        chain[prior][key] = {};
        chain[prior][key][token] = 1;
      }
      scale(key, prior);
    } else {
      if (chain[key]) {
        if (chain[key][token]) {
          chain[key][token]++;
        } else {
          chain[key][token] = 1;
        }
      } else {
        chain[key] = {};
        chain[key][token] = 1;
      }
      scale(key);
    }
  }
  // Scale our chain probabilities and saves to our weights
  function scale (key, prior) {
    if (double) {
      if (chain[prior]) {
        if (chain[prior][key]) {
          if (!weights[prior]) {
            weights[prior] = {};
          }
          weights[prior][key] = 0;
          for (var token in chain[prior][key]) {
            weights[prior][key] += chain[prior][key][token];
          }
        }
      }
    } else {
      if (chain[key]) {
        weights[key] = 0;
        for (var token in chain[key]) {
          weights[key] += chain[key][token];
        }
      }
    }
  }
  // Select a link based on the weights
  function select (key, prior) {
    try {
      if (double) {
        if (weights[prior] && chain[prior]) {
          if (weights[prior][key] && chain[prior][key]) {
            var len = weights[prior][key];
            var idx = Math.floor(Math.random() * len);
            var t = 0;
            for (var token in chain[prior][key]) {
              t += chain[prior][key][token];
              if (idx <= t) {
                return token;
              }
            }
          }
        }
      } else {
        if (weights[key] && chain[key]) {
          var len = weights[key];
          var idx = Math.floor(Math.random() * len);
          var t = 0;
          for (var token in chain[key]) {
            t += chain[key][token];
            if (idx <= t) {
              return token;
            }
          }
        }
      }
    }catch(e){
      console.error("templates/names.js : " + e);
    }
    return '';
  }
  // Our start object
  function start () {
    var startObject = {"prior": "", "key": ""};
    try {
      if (double) {
        // Some values to store
        var array = [];
        // Grab an array of our prior tokens
        for (var token in chain) {
          array.push(token);
        }
        // Our selection index
        var idx = Math.floor(Math.random() * array.length);
        // Find our pre letter
        for (var i in array) {
          if (idx <= i) {
            startObject.prior = array[i];
            break;
          }
        }
        // Reset our array
        array = [];
        // Grab an array of our key tokens
        for (var token in chain[startObject.prior]) {
          array.push(token);
        }
        // Our selection index
        var idx = Math.floor(Math.random() * array.length);
        // Find our pre letter
        for (var i in array) {
          if (idx <= i) {
            startObject.key = array[i];
            break;
          }
        }
      } else {
        // Some values to store
        var array = [];
        // Grab an array of our prior tokens
        for (var token in chain) {
          array.push(token);
        }
        // Our selection index
        var idx = Math.floor(Math.random() * array.length);
        // Find our pre letter
        for (var i in array) {
          if (idx <= i) {
            startObject.key = array[i];
            break;
          }
        }
      }
    }catch(e){
      console.error("templates/names.js : " + e);
    }
    return startObject;
  }
  // Process a text string into our chain
  function process (text) {
    if (typeof text === "string") {
      if (double) {
        var last = text.charAt(0);
        var pre = text.charAt(1);
        for (var i = 2; i < (text.length); i++) {
          increment(pre,text.charAt(i),last);
          last = pre;
          pre = text.charAt(i);
        }
      } else {
        var pre = text.charAt(0);
        for (var i = 1; i < (text.length); i++) {
          increment(pre,text.charAt(i));
          pre = text.charAt(i);
        }
      }
    }
  }
  // Generate text from our chain
  function generate (length, key, prior) {
    length = parseInt(length, 10);
    var text = "";
    if (double) {
      // Generate our own start values if they have not already been given
      if (!key && !prior) {
        var obj = start();
        key = obj.key;
        prior = obj.prior;
      }
      text = prior+key;
      for (var i = 2; i <= length; i++) {
        var token = select(key, prior);
        text += token;
        prior = key;
        key = token;
      }
    } else {
      // Generate our own start values if they have not already been given
      if (!key) {
        var obj = start();
        key = obj.key;
      }
      text = key;
      for (var i = 1; i <= length; i++) {
        var token = select(key);
        text += token;
        key = token;
      }
    }
    return text;
  }
  return {
    // Reset the chain values
    reset: (function () {chain = {}; weights = {};}),
    // Set the chain to be double or single chained (resets the chain)
    setType: (function (type) {
      double = (type) ? true : false;
      this.reset();
    }),
    // Add tokens
    addToken: (function (key, token, prior) { increment(key, token, prior); }),
    getToken: (function (key, prior) { return select(key, prior); }),
    getStart: (function () { return start(); }),
    processText: (function(text) { process(text); }),
    generateText: (function(length) { return generate(length); }),
    // Get our values
    getWeight: (function () {return weights;}),
    getChain: (function () {return chain;}),
    getType: (function () {return (double) ? 'double' : 'single';})
  };
};
export default {
  // Chains to handle different parts of words
  start_c: new Chain(),
  word_c: new Chain(),
  end_c: new Chain(),
  // List of names are stored here
  list: [],
  // Our list statistics
  num_of_chars: 0,
  word_count: 0,
  average_length: 0,
  // Description
  description: "Default description",
  // Reset the chains
  reset () {
    this.num_of_chars = 0;
    this.word_count = 0;
    this.average_length = 0;
    this.start_c = new Chain();
    this.word_c = new Chain();
    this.end_c = new Chain();
  },
  // Add a name to our chains
  add(name) {
    if (typeof name === 'string') {
      name = name.toLowerCase();
      this.word_count += 1;
      this.num_of_chars += name.length;
      this.average_length = Math.round(this.num_of_chars / this.word_count);
      this.start_c.addToken(name.charAt(0),name.charAt(1));
      this.end_c.addToken(name.charAt(name.length-2),name.charAt(name.length-1),name.charAt(name.length-3));
      for (var j = 1; j < (name.length-2); j++) {
        this.word_c.addToken(name.charAt(j),name.charAt(j+1),name.charAt(j-1));
      };
    }
  },
  // Create our chain from a list of names
  construct(names) {
    // Re-init our chains
    this.list = names;
    this.reset();
    // Set our chain types
    this.start_c.setType(false);
    this.word_c.setType(true);
    this.end_c.setType(true);
    // Loop through out input array and build the chains
    for (var i = 0; i < names.length; i++) {
      this.add(names[i]);
    };
  },
  // Construct from Markov Chain
  name() {
    // Get  an array of all the possible starting letters
    var startObj = this.start_c.getStart();
    var prior = startObj.key;
    var key = this.start_c.getToken(prior);
    var loopBreaker = 0;
    var token = '';
    var endToken = '';
    // Initialise our name value
    var name = prior + key;
    // Loop until our name reaches the minimum length (unless we break the loop early)
    while ((name.length < this.average_length) && (loopBreaker <= 10)) {
      // Select a letter from the word chain
      token = this.word_c.getToken(key, prior);
      endToken = this.end_c.getToken(token, key);
      // Make sure we have a valid letter to continue traversing the chain
      if ((endToken !== '') && (name.length > (parseInt(this.average_length)*0.5))) {
        name += (token + endToken);
        return name[0].toUpperCase() + name.slice(1);
      } else if (token !== '') {
        name += token;
        // Shift our values
        prior = key;
        key = token;
      } else {
        loopBreaker++;
      }
    }
    // Search for our terminal letter
    loopBreaker = 0;
    while (((endToken = this.end_c.getToken(key, prior)) === '') && (loopBreaker <= 10)) {
      // Select a letter from the word chain
      token = this.word_c.getToken(key, prior);
      // Make sure we have a valid letter to continue traversing the chain
      if (token !== '') {
        name += token;
        // Shift our values
        prior = key;
        key = token;
      } else {
        loopBreaker++;
      }
    }
    name += endToken;
    return name.replace(/\w\S*/g, function(txt){
      return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    })
  },
  fromList() {
    let selected = Math.floor(Math.random() * this.list.length )
    return this.list[selected].replace(/\w\S*/g, function(txt){
      return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    })
  }
}