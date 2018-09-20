class InvalidControllerFormat extends Error{
    constructor(message, fileName,lineNumber){
        super(message, fileName,lineNumber);
        this.name = "InvalidControllerFormat";
    }
}
module.exports = InvalidControllerFormat;