var lowerchars = "abcdefghiklmnopqrstuvwxyz"
  , upperchars = "ABCDEFGHIJKLMNOPQRSTUVWXTZ"
  , nums = "1234567890";

/**
 * Generates a random string with or without numbers
 *
 * @param length Total length of random string
 * @param numbers do you want numbers in your string optional
 * @return {String}
 */
exports.generate = function(length, numbers, uppers) {
    var seeds = numbers ? lowerchars+nums : lowerchars;

    if(uppers) {
        seeds += upperchars;
    }
    length = length ? length : 32;

    var string = "";
    
    for (var i=0; i<length; i++) {
        var randomNumber = Math.floor(Math.random() * seeds.length);
        string += seeds.substring(randomNumber, randomNumber + 1);
    }
    
    return string;
}