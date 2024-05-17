/* Q/17: Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, 
and you have space for only two guests.

• Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite
 only two people for dinner.

• Remove guests from your list one at a time until only two names remain in your list. Each time you pop a
 name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.

• Print a message to each of the two people still on your list, letting them know they’re still invited.

• Remove the last two names from your list, so you have an empty list. Print your list to make sure you 
actually have an empty list at the end of your program. */


let Guest_List : string[] = ["Faizan", "Adnan", "Zeeshan"];

console.log("Good news! we've found a bigger dinner table, so more space is available. so our new guest are :\n")

Guest_List.unshift("zaheer");
Guest_List.splice(2, 0, "zakir");

Guest_List.push("zubair");


for (let i=0; i < Guest_List.length; i++){
    console.log(`Dear ${Guest_List[i]} : \n you are invited to dinner! \n`);
}

console.log("unfortunately, the new dinner table won't arrive in time, so we can only invite to people for dinner. \n")
while (Guest_List.length>2){
    let notinvited = Guest_List.pop()
    console.log(`Sorry due to limited space we can't invite you to dinner Mr, ${notinvited} \n`);
}
console.log(Guest_List);

for (let i=0; i < Guest_List.length; i++){
    console.log(`Dear ${Guest_List[i]} : \n you are still invited to dinner! \n`);
}

Guest_List.pop()
Guest_List.pop()

console.log(Guest_List);






