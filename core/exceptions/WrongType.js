class WrongType extends Error{
    constructor(message, fileName,lineNumber){
        super(message, fileName,lineNumber);
        this.name = "WrongType";
    }
}
module.exports = WrongType;