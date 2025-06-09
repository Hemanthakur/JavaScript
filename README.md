# JavaScript

// Display Information from an Object

function displayInformation() {
     // var library is defined, use it to print the information
       for(var i in library){
        if(library[i].readingStatus === true){
        console.log("Already read '"+ library[i].title+"' by "+ library[i].author+".");
        }else{
        console.log("You still need to read '"+library[i].title+"' by "+library[i].author+".");
        }
    }

    
} 

var library = [ 
    {
        title: 'Bill Gates',
        author: 'The Road Ahead',
        readingStatus: true
    },
    {
        title: 'Steve Jobs',
        author: 'Walter Isaacson',
        readingStatus: true
    },
    {
        title: 'Mockingjay: The Final Book of The Hunger Games',
        author: 'Suzanne Collins',
        readingStatus: false
    }
];

displayInformation();




// Objects with dynamic inputs to show output as per input
function printObjectProperty(myObject) {
    console.log(myObject);
}

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
    var obj = _input.split(' ');
    var myObject = new Object;  
    myObject.type = obj[0];
    myObject.model = obj[1];
    myObject.color = obj[2];
    printObjectProperty(myObject);
});
