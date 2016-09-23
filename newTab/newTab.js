var opQuoteList = ["Don't try to find a reason for somebody's love!!" , 
"Man or Child, Strong or Weak, None of those matter once you are out at sea!" , 
"If you lose credibility by just admitting fault, then you didn't have any in the first place." , 
"Only those who have suffered long, can see the light within the shadows" , 
"Fools who don't respect the past are likely to repeat it." , 
"There is a difference in the look of the ordinary vagabond and that of a determined man." , 
"'Loneliness' is no longer part of my vocabulary." , 
"Death is never an apology." , 
"If you hurt somebody or if someone hurts you, - the same red blood will be shed." , 
"There are things you can't see unless you change your standing." , 
"It is a sad truth that greater the authority a person possesses, the more he tends to fear change." , 
"Neither God nor the Devil can give aid to those without the will to fight"


];

var opQuoteByList = ['Sengoku the Buddha' , 
'Usopp' , 
'Fujitora' , 
'Roronoa Zoro' , 
'Nico Robin' , 
'Donquixote Doflamingo' , 
'Brook' , 
'Brook' , 
'One Piece' , 
'Trafalgar Law' , 
'Jimbei' , 
'Brook'

];

var suitsQuoteList = ["I Don't play the odds.I Play the man." , 
"That is the difference between you and me, you wanna lose small, I wanna win big." , 
"Just because a pretty girl gives you a story, doesn't mean it is true." , 
"The only time success comes before work is in the dictionary." , 
"I refuse to answer that on the grounds that I don't want to." , 
"When you're backed against the wall, break the god damn thing down ", 
"I don't pave the way for people, people pave the way for me." , 
"Sometimes good guys gotta do bad things to make the bad guys pay." , 
"You don't send a puppy to clean up its own mess." , 
"It's not bragging if it's true." , 
"Winners don't make excuses when the other side plays the game" , 
"I don't have dreams. I have goals." , 
"I don't get lucky. I make my own luck." , 
"According to me is the only According to that matters." ,
"I Don't take meetings. I set them, and my respect isn't demanded. It is earned. " , 
"Loyalty is a two way street. If I am asking for it from you, then you are getting it from me. " , 
"I am against having emotions. Not against using them. ",  
"Sorry. I can't hear you over the sound of how awesome I am."


];

var suitsQuoteByList = ["Harvey Specter"];
//Got
var gotQuoteList = ["Let me give you some advice, bastard. Never forget what you are. The rest of the world will not. Wear it like armour, and it can never be used to hurt you." ,
"The man who passes the sentence should swing the sword." , 
"When you play the game of thrones, you win or you die. There is no middle ground." , 
"There is only one god, and his name is Death. And there is only one thing we say to Death: 'Not today.'" , 
"I'm not questioning your honour, Lord Janos. I'm denying its existence." , 
"We've had vicious kings and we've had idiot kings, but I don't know if we've ever been cursed with a vicious idiot boy king." , 
"All men must die, but we are not men." , 
"There's a beast in every man, and it stirs when you put a sword in his hand."  , 
"By what right does the wolf judge the lion?" , 
"If you think this has a happy ending, you haven't been paying attention." , 
"Nothing isn't better or worse than anything. Nothing is just nothing."
];

var gotQuoteByList = ["Tyrion Lannister" , 
"Ned Stark" , 
" Cersei Lannister" , 
"Syrio Forel" , 
"Tyrion Lannister" , 
"Tyrion Lannister" , 
"Daenerys Targaryen" , 
"Jorah Mormont" , 
"Jaime Lannister" , 
"Ramsay Bolton" , 
"Arya Stark"
];

var completeQuoteList = [
	opQuoteList , suitsQuoteList , gotQuoteList
];

var completeQuoteByList = [opQuoteByList , suitsQuoteByList , gotQuoteByList];

var imagepaths = ["op.jpg" , "suits1.jpg" , "got5.jpg"];


$(document).ready(function(){
	var allListSize = completeQuoteList.length;
	var list_num = Math.floor(Math.random()*allListSize);
	//generate a random number for selecting a category
	var listSize = completeQuoteList[list_num].length;
	//generate a random number to select a quote from that category
	var rand_num = Math.floor(Math.random()*listSize);
	//console.log(rand_num + "\n" + listSize);
	var quote = completeQuoteList[list_num][rand_num].replace(/[^a-zA-Z,.' ]/g, ""); //remove any special characters except ,.'
	var byListSize = completeQuoteByList[list_num].length;
	var quoteBy = completeQuoteByList[list_num][rand_num%byListSize]; // To handle the case when there is only one person for all the quotes
	var str = "<i> '" + quote + "'</i></br></br><span>-->By "  + quoteBy +  "</span>" ; 
	console.log(rand_num + "\n" + str);
	$("#quote").append(str);
	$("#mainDiv").css("background-image"  , "url('images/" + imagepaths[list_num] + "')");	
});
		