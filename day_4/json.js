// JSON (JavaScript Object Notation) is a lightweight data-interchange format.
// It is easy for humans to read and write and for machines to parse and generate.

// JSON is a text format that is completely language independent but uses
// conventions that are familiar to programmers of the C-family of languages,
// including C, C++, C#, Java, JavaScript, Perl, Python, and many others.
// These properties make JSON an ideal data-interchange language.

// JSON is built on two structures:

// 1. A collection of name/value pairs. In various languages, this is
// realized as an object, record, struct, dictionary, hash table, keyed list,
// or associative array.
// 2. An ordered list of values. In most languages, this is realized as an
// array, vector, list, or sequence.

// An example of a JSON object:

const jsonObject = {
  name: "John Doe",
  age: 30,
  city: "New York",
};

// Accessing data in a JSON object:

console.log(jsonObject.name); // Output: John Doe
console.log(jsonObject.age); // Output: 30
console.log(jsonObject.city); // Output: New York

// An example of a JSON array:

const jsonArray = ["apple", "banana", "orange"];

// Accessing data in a JSON array:

console.log(jsonArray[0]); // Output: apple
console.log(jsonArray[1]); // Output: banana
console.log(jsonArray[2]); // Output: orange

// JSON is commonly used for:

// 1. Storing and exchanging data between a server and a web application.
// 2. Configuring applications.
// 3. Serializing and deserializing objects.
