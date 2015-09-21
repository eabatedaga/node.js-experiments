var fs = require ('fs');
  lazy = require('lazy');


  var myLookup = new DNTransform();
  myLookup.init();

new lazy (fs.createReadStream('VTK.COSMA.COM_2015-08-18 13%3A13%3A56Z.txt'))
  .lines
  .forEach(function(line){
    console.log("Line:" + myLookup.getPrettyName(line));
  }
);


function DNTransform() {

  this.init = function() {

    //load rules in text files
    //whatever
  }

  this,getPrettyName = function (thisLine){
    //lookup the name using things cached in init
    return "whatever";
  }

}
