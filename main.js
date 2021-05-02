

const dramaBookName = ["Streetcar Named Desire", "Hamlet","Crucible","Macbeth"]
const dramaBookyear = ["1947","1601","1953","1995"]
const dramaBookBref=["After the loss of her family home to creditors, Blanche DuBois travels from the small town of Laurel, Mississippi, to the New Orleans French Quarter to live with her younger married sister, Stella, and Stella's husband, Stanley Kowalski. Blanche is in her thirties and, with no money, has nowhere else to go."
,"The protagonist of Hamlet is Prince Hamlet of Denmark, son of the recently deceased King Hamlet, and nephew of King Claudius, his father's brother and successor. Claudius hastily married King Hamlet's widow, Gertrude, Hamlet's mother, and took the throne for himself. Denmark has a long-standing feud with neighbouring Norway, in which King Hamlet slew King Fortinbras of Norway in a battle some years ago. Although Denmark defeated Norway and the Norwegian throne fell to King Fortinbras's infirm brother, Denmark fears that an invasion led by the dead Norwegian king's son, Prince Fortinbras, is imminent.",
"The opening narration explains the context of Salem and the Puritan colonists of Massachusetts, which the narrator depicts as an isolated theocratic society in constant conflict with Native Americans. The narrator speculates that the lack of civil liberties, isolation from civilization, and lack of stability in the colony caused latent internal tensions which would contribute to the events depicted in the play.",
"Macbeth is one of Shakespeare's four great tragedies, encompassing witchcraft, bloody murder, ghostly apparitions as well as high poetry, blended in such a way as to demonstrate the assured dramatic touch of Shakespeare's maturity. Macbeth's tragedy is that of a good, brave, and honorable man turned into the personification of evil by the workings of unreasonable ambition. It was a lesson lost on King James I & VI, for whom the play was written."]
const dramaBookImj =["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs532GBHNAfogsBv4ChyHqevjLmp6Nvc9ELw&usqp=CAU",
"https://www.ustarnovels.co.uk/media/1000x1000/cover_hamlet.jpg",
"https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/lrg/9780/1404/9780140481389.jpg"
,"https://cdn.shopify.com/s/files/1/0385/8490/9956/products/9781853260353_1_644x644.jpg?v=1618545699"]
const dramaBookRating = ["5","4","4.5","5"]
const dramaBookWrittenBy = ["Elia Kazan","William Shakespeare","Arthur Miller","WILLIAM SHAKESPEARE"]
const dramaBookPrice = ["10.00 JD ","12.50 JD","6.00 JD","3.00 JD"]


const bkdrama = ()=>{
    $(".type11").show()
    $(".type11").html("")

    
    for (let i=0; i<dramaBookName.length;i++){
    $(".type11").append(`<div  ><img src='${dramaBookImj[i]}' alt='${dramaBookName[i]} photo'></div>`)
    $(".type11").append(`<h2 class="h111"> bookname : ${dramaBookName[i]}</h2>`)
    $(".type11").append(`<h2>Publishing Year : ${dramaBookyear[i]}</h2>`)
    $(".type11").append(`<h3>book rating : ${dramaBookRating[i]}</h3>`)
    $(".type11").append(`<h3>book price : ${dramaBookPrice[i]}</h3>`)
    $(".type11").append(`<h4> author : ${dramaBookWrittenBy[i]}</h4>`)
    $(".type11").append(`<p id='breafDrama${i}'> ${dramaBookBref[i]}</p>`)
    $(".type11").append(` <div class="add"><button id="add1">add to chart</button></div>`)
    


    }

}


const revolutionBookName = ["The Anatomy of Revolution", "The Age of Revolution","Ten Days That Shook the World","The Cultural Revolution"]
const revolutionBookyear = ["1938 ","1962","1919","2002"]
const revolutionBookBref=["In contrast to the moderates, the radicals are aided by a fanatical devotion to their cause, discipline and (in recent revolutions) a study of technique of revolutionary action, obedience to their leadership, ability to ignore contradictions between their rhetoric and action, and drive boldly ahead. Even their small numbers are an advantage, giving them the ability to move swiftly, to make clear and final decisions, to push through to a goal without regard for injured human dispositions."
,"Hobsbawm analysed the early 19th century, and indeed the whole process of modernisation thereafter, using what he calls the twin revolution thesis. This thesis recognised the dual importance of the French Revolution and the Industrial Revolution as midwives of modern European history, and – through the connections of colonialism and imperialism – world history.",
"John Reed was on an assignment for The Masses, a magazine of socialist politics, when he was reporting on the Russian Revolution. Although Reed stated that he had tried to see events with the eye of a conscientious reporter, interested in setting down the truth",
"After the economic disaster of the Great Leap Forward that claimed tens of millions of lives from 1958–1962, an aging Mao Zedong launched an ambitious scheme to shore up his reputation and eliminate those he viewed as a threat to his legacy. The Cultural Revolution's goal was to purge the country of bourgeois, capitalistic elements he claimed were threatening genuine communist ideology. Young students formed the Red Guards, vowing to defend the Chairman to the death"]
const revolutionBookImj =["https://images-na.ssl-images-amazon.com/images/I/41sn-NWXR6L._SX289_BO1,204,203,200_.jpg",
"https://kbimages1-a.akamaihd.net/e65d70c5-8437-4910-b2e9-358503e19d5f/353/569/90/False/age-of-revolution-1789-1848-1.jpg",
"https://www.marxists.org/archive/reed/1919/10days/10days/cover.jpg",
"https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1447080800l/26073079.jpg"]
const revolutionBookRating = ["5","4","4.5","3.5"]
const revolutionBookWrittenBy = [" Crane Brinton","Eric Hobsbawm","socialist John Reed","Frank Dikötter"]
const revolutionBookPrice = ["9.00 JD ","12.50 JD","3.00 JD","6.00 JD"]

const bkrevolution = ()=>{
    $(".type12").show()
    $(".type12").html("")

    
    for (let i=0; i<revolutionBookName.length;i++){
    $(".type12").append(`<div class="revoimg" ><img src='${revolutionBookImj[i]}' alt='${revolutionBookName[i]} photo'></div>`)
    $(".type12").append(`<h2 class="h111"> book name : ${revolutionBookName[i]}</h2>`)
    $(".type12").append(`<h2> Publishing Year : ${revolutionBookyear[i]}</h2>`)
    $(".type12").append(`<h3> rating : ${revolutionBookRating[i]}</h3>`)
    $(".type12").append(`<h3> Book price : ${revolutionBookPrice[i]}</h3>`)
    $(".type12").append(`<h4> author : ${revolutionBookWrittenBy[i]}</h4>`)
    $(".type12").append(`<p id='breafrevolution${i}'>${revolutionBookBref[i]}</p>`)
    


    }
}


const warBookName = ["The campaign of 1812 in Russia", "On War","A Rumor of War","WAR junger"]
const warBookyear = ["1979 ","1980","2000", "2005"]
const warBookBref=["On June 23, 1812, Napoleon's Grande Armée, over 500,000 men strong, poured over the Russian border. An equally massive Russian army faced them. The ensuing campaign was a catastrophe for Napoleon. Although the battle of Borodino, which resulted in heavy losses on both sides, allowed Napoleon to enter Moscow, his stay in that empty and decimated city was disastrous. "
,"Clausewitz was among those intrigued by the manner in which the leaders of the French Revolution, especially Napoleon, changed the conduct of war through their ability to motivate the populace and gain access to the full resources of the state, thus unleashing war on a greater scale than had previously been seen in Europe.",
"In the foreword, Caputo makes clear that this is not a history book, nor is it a historical accusation; it is a story about war, based on his experience.",
"Now, Junger turns his brilliant and empathetic eye to the reality of combat--the fear, the honor, and the trust among men in an extreme situation whose survival depends on their absolute commitment to one another. His on-the-ground account follows a single platoon through a 15-month tour of duty in the most dangerous outpost in Afghanistan's Korengal Valley. Through the experiences of these young men at war, he shows what it means to fight, to serve, and to face down mortal danger on a daily basis."]
const warBookImj =["https://i.pinimg.com/originals/ad/d2/ac/add2acd0628a481bfdef08604246f163.jpg","photo/logo.png.png","photo/logo.png.png","photo/logo.png.png"]
const warBookRating = ["5","4","4.5","5"]
const warBookWrittenBy = [" General Carl Von Clausewitz","Vom Kriege"," Philip Caputo","sebastian jnger"]
const warBookPrice = ["15.00 JD ","17.50 JD","8.00 JD","7.50 JD"]

const bkwar = ()=>{
    $(".type13").show()
    $(".type13").html("")

    
    for (let i=0; i<warBookName.length;i++){
    $(".type13").append(`<div class="warimg" ><img src='${revolutionBookImj[i]}' alt='${warBookName[i]} photo'></div>`)
    $(".type13").append(`<h2 class="h111">book name : ${warBookName[i]}</h2>`)
    $(".type13").append(`<h2> Publishing Year : ${warBookyear[i]}</h2>`)
    $(".type13").append(`<h3> book rating : ${warBookRating[i]}</h3>`)
    $(".type13").append(`<h3> book price : ${warBookPrice[i]}</h3>`)
    $(".type13").append(`<h4> author : ${warBookWrittenBy[i]}</h4>`)
    $(".type13").append(`<p id='breafwar${i}'>${warBookBref[i]}</p>`)
    
      
    


    }
}


$("#type1b").on("click", () => {

    $(".img11").hide()
    $(".img22").hide()
    $(".img33").hide()
    $(".title2").hide()
    $(".type12").hide()
    $(".type13").hide()
    $(".type11").show()
    $("#A11").show()
    $("#A22").hide()
    $("#A33").hide()
    $(".navbar").show()

    bkdrama()

});


$("#type2b").on("click", () => {


    $(".img11").hide()
    $(".img22").hide()
    $(".img33").hide()
    $(".title2").hide()
    $(".type11").hide()
    $(".type13").hide()
    $(".type12").show()
    $("#A11").hide()
    $("#A33").hide()
    $("#A22").show()
    

    bkrevolution()

});

$("#type3b").on("click", () => {
    
    $(".img11").hide()
    $(".img22").hide()
    $(".img33").hide()
    $(".title2").hide()
    $(".type11").hide()
    $(".type12").hide()
    $(".type13").show()
    $("#A11").hide()
    $("#22").hide()
    $("#A33").show()
   
    bkwar()

});

