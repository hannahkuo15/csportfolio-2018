//takes information of each image and places it into a variable so it's easier to use
var blackSwan = document.getElementById("blackSwan"); 
var neverseen = document.getElementById("neverseen");
var display = document.getElementById("display");
var sophie = document.getElementById("sophie");
var keefe = document.getElementById("keefe");
var tam = document.getElementById("tam");
var linh = document.getElementById("linh");
var dex = document.getElementById("dex");
var fitz = document.getElementById("fitz");
var biana = document.getElementById("biana");


//program listens for an event, runs code block and applies it on the image when event occurs
blackSwan.addEventListener("click", function(){
    display.innerHTML = "The Black Swan is a secret organization in the Lost Cities, that had once been thought to be terrorists. Instead, they are set on changing their world for the better, which would involve acts of crime, but in the end, the world proves to be better than it had been before. They created their 'Moonlark', Sophie Foster, to have many abilities and a valuable asset to the Lost Cities. The Black Swan is led by a group of 5, called the Collective, and they make decisions for the Black Swan. The main leader, Mr. Forkle, hopes Sophie and her friends would eventually take their places as the next generation's Collective."
});
neverseen.addEventListener("click", function(){
    display.innerHTML = "The Neverseen is another secret organization in the Lost Cities. However, they are rivals with the Black Swan, even though their end goals are similar. The Neverseen want a better world without their Council making the executive decisions, and their acts of crime are always meant to terrorize and spread fear among the elvin people. The Neverseen hate Sophie, and seek to exterminate her, because she has the power to stop their plans. The Neverseen are clever, however, and are usually one step ahead of the Black Swan, making them even more dangerous and threatening than they had first been believed to be."
});
sophie.addEventListener("click", function(){
    display.innerHTML = "Sophie Foster is known as the Moonlark by the Black Swan. She was raised by humans her whole life until one of the elves, Fitz Vacker, revealed that she was an elf when she was twelve. She realizes the faults in the elvin world and fights for peace for her people. She is a Telepath, which allows her to read people's mind, and has many other abilities - more than anyone had had before. Sophie is really close with her friends, and trusts them with her life. Most elves have blue eyes, but due to her DNA alterations by the Black Swan, she has brown eyes, making her stand out among the elves. She has a crush on Fitz, the boy who brought her to her new home, but has implied feelings for another friend, Keefe Sencen, as well." 
});
keefe.addEventListener("click", function(){
   display.innerHTML = "Keefe Sencen is one of Sophie's closest friends. He is playful and is always in detention for his pranks. However, he is very clever and is a very strong Empath (ability to read people's emotions), which makes him a valuable member of the team as well. He struggles with identity after finding out his mother and his role model were leaders of the Neverseen. He has a strong attraction to Sophie, and understands that she might not feel the same way back towards her, but is willing to remain as her friend 'until she's ready for more'. His best friend is Fitz, and he loves to spend time with Fitz's family, since his own parents rarely show affection towards their son." 
});
tam.addEventListener("click", function(){
   display.innerHTML = "Tam Song is a powerful Shade: he can control shadows. He first meets Sophie after she rescues his twin sister Linh from drowning. He struggles with trust, especially since he is very protective of Linh and that his parents don't like the fact that they have twin children. Tam and his sister were exiled and met Sophie while attending their own exiled school. Tam is very well-known for his platinunm-tipped bangs, a sign of rebellion for his parents. Tam has a strong dislike towards Keefe, maybe because they are so similar to each other. He becomes a member of the Black Swan and joins Sophie in trying to stop the Neverseen from destroying their world. He also has a crush on Biana." 
});
linh.addEventListener("click", function(){
   display.innerHTML = "Linh Song is Tam's twin sister. She is a Hydrokinetic and has the power to control water. However, her ability is so strong, it's hard for her to control. She was exiled for accidentally flooding Atlantis, their underwater city. She and her brother are exceptionally smart, and are inseparable. She trusted Sophie almost immediately and often makes up for Tam's caution and hesitation. She also dipped the ends of her long black hair in platinum as a reminder for herself what happens when she loses control. She was very eager to join the Black Swan, despite her brother's hesitation, and remains a very powerful Hydrokinetic, especially after she receives training from the Collective." 
});
dex.addEventListener("click", function(){
    display.innerHTML = "Dex Dizznee was Sophie's first friend in the Lost Cities. He is Sophie's best friend, even though he is often left behind on her missions accidentally. He is a brilliant Technopath, ability to tamper with electronics. His family was often looked down upon because his dad is Talentless (he doesn't have a special ability), and his younger siblings are triplets. Multiple births are looked down upon in elvin society, as you could see with Tam and Linh. Dex is kind, and gives off an air of youth, and is kind of like a little brother to everyone on the team."
});
fitz.addEventListener("click", function(){
    display.innerHTML = "Fitz Vacker was the first person to bring Sophie to the Lost Cities. He also likes Sophie, and it can be seen with his growing closeness with her. He is a Telepath, like Sophie, and is known to be the youngest child to ever manifest an ability besides Sophie. His older brother and Keefe's role model, Alvar, was revealed to be part of the Neverseen, throwing the whole Vacker family into chaos, since they were known to be very prestigous. He is very popular at school, and is Cognates with Sophie, and is proud of it." 
});
biana.addEventListener("click", function(){
    display.innerHTML = "Biana Vacker has always been known as 'the princess', due to her family name and girliness. She is very beautiful, and used to harbor a hate for Sophie, thinking that Sophie wanted to use her to get close to her brother, Fitz Vacker. She is a Vanisher, and has proven her talent multiple times, even willing to go into the field and risk her life like Sophie does. She always looks out for Dex as well, so he wouldn't be the only person left behind. She had a crush on Keefe, but after she realized Keefe liked Sophie, she didn't pursue him anymore. She doesn't seem to notice Tam's crush on her, though." 
});