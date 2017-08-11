export default class ClassList {
    public static classList:Array<ClassRecord> = [];

    //public static addClass(className:string, packagePath:string):void{
    public static addClass(classRecord:ClassRecord):void{
        if (ClassList.classList.indexOf(classRecord) < 0)		{
            ClassList.classList.push(classRecord);
        }
    }

    public static getLastPathToRoot():string{
       let classRecord:ClassRecord = ClassList.classList[ClassList.classList.length - 1];

       let packages = classRecord.packageName.split(".");
       let packageLevel:number = 0
       if (packages.length < 2) {
           if (packages[0].length > 0) {
               packageLevel = 1;
           } else {
               packageLevel = 0;
           }
       } else	{
           packageLevel = packages.length;
       }
       let path = packageLevel == 0 ? "./" : "" ;
       for (var i = 0; i < packageLevel; i++) {
           path += "../";

       }
       return path
    }

}

export interface ClassRecord {
    packageName:string;
    className:string;
}


export function getUsedClasses():string {
    //let importsCont = ClassList.classList.join(";\n");
    let result:string = ""
    let importsCont = "";
    let valueCont = "";
    let classes = ClassList.classList;
    const VARIABLE_DELIM = ".";

    for (var i = 0; i < classes.length; i++) {

        let classRecord:ClassRecord = <ClassRecord>classes[i];
        let packageStrSlashes:string = classRecord.packageName.split(".").join("/");
        let packageStrDelims:string = classRecord.packageName.split(".").join(VARIABLE_DELIM);
        let classPath:string = classRecord.packageName && classRecord.packageName != "" ? packageStrSlashes + "/" + classRecord.className : classRecord.className;
        let importStr:string = `import { ${classRecord.className} } from "./${classPath}";\n`;
        let classPathKey = classRecord.packageName && classRecord.packageName != "" ? packageStrDelims + VARIABLE_DELIM + classRecord.className : classRecord.className;
        //let varsStr:string = `\tpublic static ${variableStr}:any = ${classRecord.className};\n`;
        let varsStr:string = `Library.classList["${classPathKey}"] = ${classRecord.className};\n`;
        importsCont += importStr;
        valueCont += varsStr;
    }
    result = importsCont;
    result += "\nexport default class Library {\n";
    result += "\tpublic static classList:Array<any> = [];\n}\n";
    result += valueCont;


    return result;
}
