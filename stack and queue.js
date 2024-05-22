//Stack=> Last In First Out... LIFO
//Queue=> First In First Out... FIFO
//Stack 

function recursive(value){
    console.log("Values:", value,"started");
    if(value > 0){
        recursive(value-1);
        console.log("Values", value,"Ended");
    }

}
recursive(5);
//Output
/*
Values: 5 started
Values: 4 started
Values: 3 started
Values: 2 started
Values: 1 started
Values: 0 started
Values 1 Ended
Values 2 Ended
Values 3 Ended
Values 4 Ended
Values 5 Ended
*/