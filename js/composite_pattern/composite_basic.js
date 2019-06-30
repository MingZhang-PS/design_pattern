var File = function(fileName) {
    this.name = fileName;
    this.parent = null;
};

File.prototype.add = function(file) {
    throw new error('can\'t add file to a file');
};
File.prototype.scan = function()  {
    console.log(`scan ${this.name}`);
};

File.prototype.remove = function() {
    if (this.parent && this.parent.files) {
        for (var i =this.parent.files.length; i >= 0; i--) {
            if(this.parent.files[i] === this) {
                this.parent.files.splice(i, 1);
            }
        }
    }
};

var Folder = function(folderName) {
    this.name = folderName;
    this.files = [];
    this.parent = null;
};

Folder.prototype.add = function(file) {
    file.parent = this;
    this.files.push(file);
    return this;
};
Folder.prototype.scan = function()  {
    console.log(`scan ${this.name}`);
    this.files.forEach(function(value, index, arr) {
        value.scan();
    });
};

Folder.prototype.remove = function() {
    if (this.parent && this.parent.files) {
        for (var i =this.parent.files.length; i >= 0; i--) {
            if(this.parent.files[i] === this) {
                this.parent.files.splice(i, 1);
            }
        }
    }
};

var myFolder = new Folder('c disk');
var file1 = new File('file1.txt');
var file2 = new File('file2.txt');
myFolder.add(file1).add(file2);
myFolder.scan();

file1.remove();
myFolder.scan();