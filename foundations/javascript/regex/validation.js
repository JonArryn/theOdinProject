// validation script here
// notes I took during the tutorial are below the script

const inputs = document.querySelectorAll("input");

const patterns = {
  username: /^[a-z\d]{5,12}$/i,
  email: /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,10})(\.[a-z]{2,10})?$/,
  password: /^[\w@-]{8,20}$/,
  telephone: /^\d{11}$/,
  slug: /^[a-z\d-]{8,20}$/,
};

// validation function

function validate(field, regEx) {
  if (regEx.test(field.value)) {
    field.className = "valid";
    console.log(regEx.test(field.value));
  } else {
    field.className = "invalid";
    console.log(regEx.test(field.value));
  }
}

inputs.forEach((input) => {
  input.addEventListener("keyup", (event) => {
    // console.log(event.target.attributes.name.value)
    validate(event.target, patterns[event.target.attributes.name.value]);
  });
});

// ----------- NOTES -------------------------------//
// *** practice from https://www.youtube.com/playlist?list=PL4cUxeGkcC9g6m_6Sld9Q4jzqdqHd2HiD

// ** using https://regex101.com/ - to test patterns and practice

// a regular expression is surrounded by / /
// options after the / / are available to indicate how matches are found
// for example / /g (global) finds all matches
// / /i (insensitive) matches are case insensitive

// // Character Sets
// a way to match different characters in a single position

// surround character set in square brackets []
// [n] will look for the letter 'n' in that particular position in the expression
//[abc123] will look for any one of the characters in brackets in that particular position of the expression

// - Character exclusions
// use a carat in the brackets to instead negate matches
// [^p] will allow any character in that particular position except the letter 'p'

// * Character Ranges

// provide a range of characters in brackets [] to allow for a range of characters in that single position of the expression

// for example [a-z] would allow any letter of the alphabet to be used in that position of the expression

// [0-9] will allow any number 0 to 9 to be used in that position of the expression

// - Case sensitivity

// in regard to letters, you can make a particular position case insensitive instead of forcing the entire expression to be case insensitive by this [a-zA-z]

// - Repeating Characters

// for example if you want to validate a phone number with a minimum amount of characters

// [0-9]+ will look for at least one of the caracters in that position but allow unlimited characters that match the required character set after that

// but we don't want unlimited, we want a specific number of characters let's say 10 characters, we use the {} and specify the quantity

// ex: [0-9]{10}
// This will return a match if a string of charcters between 0-9 that is 10 digits long

// this can also be done with letters

// ex: [a-z]{10}
// this will require a word using letters a - z that is 10 characters long

// if you want a range of expression length, use a comma in the curly braces

// ex: [a-z]{5,8}
// this will return a match when the expression contains at least 5 but no more than 8 characters using letter a-z

// if you want to match an expression that is at least a certin number of characters but not set a limit, leave out the second argument of the curly braces

//ex: [a-z]{5,}
// this will return a match if the expression contains only letters a-z and is at least 5 characters long

// * Metacharacters

// \d - match any digit character (same as 0-9)

// \w - match any word character (a-z, A-Z, 0-9, _)

// \s - match a whitespace character (space or tab)

// \t - match a tab character only

// the backslash\ escapes the normal function of the character and turns it into a metacharacter looking for a match for that metacharacter instead of the character itself

// ex: \d\s\w
// this will require the first character to be 0-9, the second character to be some sort of whitespace, then a word character ie: '9 a'

// ex: \d{3}\s\w{5}
// this will require 3 digits 0-9, followed by one whitespace character, then 5 letter word character for match - ie: '123 ninja'

// * Special Characters

// '+' The on-or-more quantifier
// '\' The escape character
// '[]' The character set
// '[^]' The negate symbol in a character set
// '?' The zero-or-one quantifier (makes a preceding character optional)
// '.' Any character whatsoever (except the new line character)
// '*' zero-or-more quantifier (a bit like '+' however the character is optional)

// '?'
// example: hello? would find a match if the expression was 'hello' or 'hell'
// the ? made the 'o' optional meaning it will accept an 'o' or nothing at all

// - optional charset range

// a[a-z]?
// this will accept the letter 'a' followed by any letter a-z or 'a' and nothing at all

// '.'

// the '.' will accept any character accept new line
// car. will accept the expression 'car' followed by ANY character accept a new line

// '.+' will match as long as there as one character of any type except new line and unlimited characters of any type

// '*'
// character is optional but can appear unlimited times

// ex: a[a-z]*
// will match if expression contains 'a' followed by any number of letters between a-z or will match with 'a' followed by nothing at all

// to check for a character that is normally a metacharacter, you need to escape it by preceeding it with a slash
// ex: abc\* will look for a match of abc*

// * Starting and Ending Patterns

// let's say we need a user to type in a word or phrase that is exactly 5 characters, no more no less

// [a-z]{5} won't work because if the user types more than 5 characters, the initial 5 will return a match
// ex: [a-z]{5}
// ninjaabc234 - will return a match because there are at least 5  characters a-z in the position

// first a carat must be inserted in front of the expression
// ^[a-z]{5}
// this states that the expression that follows the carat must be in that exact position in the expression

// ex: ^ninja
// ninjaabcs234 = will return a match
//abcninjaabc = will not return a match because it's not at the beginning of the expression

// now to declare the end of the position or limit the expression, or otherwise not return a match if the expression goes beyond the position, use $ at the end.

// ie: ^[a-z]{5}$

// the $ indicates that the expression must also be at the end of the form field
// so with the expression  [a-z]{5} surrounded by ^ and $ we are saying that 5 letters between a-z must be at the beginning and the end of the field to return a match

// * Alternate Characters

// '|'
// a single pipe in regular expressions means or

// ex: p|t will match if the caracter is either p or t

// let's say we want a match if the field contains 'pyre' or 'tyre'
// we could do pyre|tyre
// but a shorter way would be to do this
// (p|t)yre
// the above would return a match on pyre or tyre because it's looking for either 'p' or 't' followed by 'yre'
// the parenthesis tells regex match to treat the expression in the parenths as a separate entity

// you can chain multiple 'or' | if you'd like

// ex: (pet|toy|crazy) rabbit
// will return a match on
// pet rabbit, toy rabbit, or crazy rabbit

// * Creating Regular Expressions in JS

// let reg = /[a-z]/gi;

// let reg2 = new RegExp(/[a-z]/,"gi")
