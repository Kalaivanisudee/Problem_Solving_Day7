function isBalanced(str){
    const obj={
        "}":"{",
        "]":"[",
        ")":"("
    }
let stack = []
for(let value of str.split("")){
    if(value=="{" || value == "[" || value == "("){
        stack.push(value)
    }else if(value== "}" || value == "]" || value == ")"){
       if(stack.pop() != obj[value]) return false;
    }
}
if(stack.length !==0) return false;
return true;
}
console.log(isBalanced("{}{}{][()}"))