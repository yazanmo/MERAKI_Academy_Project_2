$(".slaider").show()
$(".page2").show()
$(".ooo").hide()
$(".select").hide()



$("#type1b").on("click", () => {
    $(".revolution").hide()
    $(".war").hide()
    $(".drama").show()
    
    bkdrama()

});


$("#type2b").on("click", () => {
    $(".revolution").show()
    $(".war").hide()
    $(".drama").hide()
    bkrevolution()

});

$("#type3b").on("click", () => {
    $(".revolution").hide()
    $(".war").show()
    $(".drama").hide()
    bkwar()

});

const dramaBookName = ["A Streetcar Named Desire", "Hamlet","The Crucible"]
const dramaBookyear = ["1947","1601","1953"]
const dramaBookBref=["After the loss of her family home to creditors, Blanche DuBois travels from the small town of Laurel, Mississippi, to the New Orleans French Quarter to live with her younger married sister, Stella, and Stella's husband, Stanley Kowalski. Blanche is in her thirties and, with no money, has nowhere else to go."
,"The protagonist of Hamlet is Prince Hamlet of Denmark, son of the recently deceased King Hamlet, and nephew of King Claudius, his father's brother and successor. Claudius hastily married King Hamlet's widow, Gertrude, Hamlet's mother, and took the throne for himself. Denmark has a long-standing feud with neighbouring Norway, in which King Hamlet slew King Fortinbras of Norway in a battle some years ago. Although Denmark defeated Norway and the Norwegian throne fell to King Fortinbras's infirm brother, Denmark fears that an invasion led by the dead Norwegian king's son, Prince Fortinbras, is imminent.",
"The opening narration explains the context of Salem and the Puritan colonists of Massachusetts, which the narrator depicts as an isolated theocratic society in constant conflict with Native Americans. The narrator speculates that the lack of civil liberties, isolation from civilization, and lack of stability in the colony caused latent internal tensions which would contribute to the events depicted in the play."]
const dramaBookImj =["photo/logo.png.png","photo/logo.png.png","photo/logo.png.png"]
const dramaBookRating = ["5","4","4.5"]
const dramaBookWrittenBy = ["Elia Kazan","William Shakespeare","Tennessee Williams"]


const bkdrama = ()=>{
    $(".drama").show()
    $(".drama").html("")

    
    for (let i=0; i<dramaBookName.length;i++){
    $(".drama").append(`<div class=dramaDiv id='dramaMovie${i}' ></div>`)
    $("#drama"+i).append(`<div class=dramaDivCH1 ><img src='${dramaBookImj[i]}' alt='${dramaBookName[i]} photo'></div>`)
    $("#drama"+i).append(`<div class=movieDivCH2 id='actionCH${i}' ></div>`)
    $("#drama"+i).append(`<h1>${dramaBookName[i]}</h1>`)
    $("#drama"+i).append(`<h2>${dramaBookyear[i]}</h2>`)
    $("#drama"+i).append(`<h3>${dramaBookRating[i]}</h3>`)
    $("#drama"+i).append(`<h4>${dramaBookWrittenBy[i]}</h4>`)
    $("#drama"+i).append(`<p id='breafDrama${i}'>${dramaBookBref[i]}</p>`)
    


    }
}


const revolutionBookName = ["The Anatomy of Revolution", "The Age of Revolution","Ten Days That Shook the World"]
const revolutionBookyear = ["1938 ","1962","1919"]
const revolutionBookBref=["In contrast to the moderates, the radicals are aided by a fanatical devotion to their cause, discipline and (in recent revolutions) a study of technique of revolutionary action, obedience to their leadership, ability to ignore contradictions between their rhetoric and action, and drive boldly ahead. Even their small numbers are an advantage, giving them the ability to move swiftly, to make clear and final decisions, to push through to a goal without regard for injured human dispositions."
,"Hobsbawm analysed the early 19th century, and indeed the whole process of modernisation thereafter, using what he calls the twin revolution thesis. This thesis recognised the dual importance of the French Revolution and the Industrial Revolution as midwives of modern European history, and – through the connections of colonialism and imperialism – world history.",
"John Reed was on an assignment for The Masses, a magazine of socialist politics, when he was reporting on the Russian Revolution. Although Reed stated that he had tried to see events with the eye of a conscientious reporter, interested in setting down the truth"]
const revolutionBookImj =["photo/logo.png.png","photo/logo.png.png","photo/logo.png.png"]
const revolutionBookRating = ["5","4","4.5"]
const revolutionBookWrittenBy = [" Crane Brinton","Eric Hobsbawm","socialist John Reed"]

const bkrevolution = ()=>{
    $(".revolution").show()
    $(".revolution").html("")

    
    for (let i=0; i<revolutionBookName.length;i++){
    $(".revolution").append(`<div class=revolutionDiv id='revolutionMovie${i}' ></div>`)
    $("#revolution"+i).append(`<div class=revolutionDivCH1 ><img src='${revolutionBookImj[i]}' alt='${revolutionBookName[i]} photo'></div>`)
    $("#revolution"+i).append(`<div class=revolutionDivCH2 id='revolutionCH${i}' ></div>`)
    $("#revolution"+i).append(`<h1>${revolutionBookName[i]}</h1>`)
    $("#revolution"+i).append(`<h2>${revolutionBookyear[i]}</h2>`)
    $("#revolution"+i).append(`<h3>${revolutionBookRating[i]}</h3>`)
    $("#revolution"+i).append(`<h4>${revolutionBookWrittenBy[i]}</h4>`)
    $("#revolution"+i).append(`<p id='breafrevolution${i}'>${revolutionBookBref[i]}</p>`)
    


    }
}


const warBookName = ["The campaign of 1812 in Russia", "On War","A Rumor of War"]
const warBookyear = ["1979 ","1980","2000"]
const warBookBref=["On June 23, 1812, Napoleon's Grande Armée, over 500,000 men strong, poured over the Russian border. An equally massive Russian army faced them. The ensuing campaign was a catastrophe for Napoleon. Although the battle of Borodino, which resulted in heavy losses on both sides, allowed Napoleon to enter Moscow, his stay in that empty and decimated city was disastrous. "
,"Clausewitz was among those intrigued by the manner in which the leaders of the French Revolution, especially Napoleon, changed the conduct of war through their ability to motivate the populace and gain access to the full resources of the state, thus unleashing war on a greater scale than had previously been seen in Europe.",
"In the foreword, Caputo makes clear that this is not a history book, nor is it a historical accusation; it is a story about war, based on his experience."]
const warBookImj =["","photo/logo.png.png","photo/logo.png.png"]
const warBookRating = ["5","4","4.5"]
const warBookWrittenBy = [" General Carl Von Clausewitz","Vom Kriege"," Philip Caputo"]

const bkrevolution = ()=>{
    $(".war").show()
    $(".war").html("")

    
    for (let i=0; i<warBookName.length;i++){
    $(".war").append(`<div class=warDiv id='warbook${i}' ></div>`)
    $("#war"+i).append(`<div class=warnDivCH1 ><img src='${revolutionBookImj[i]}' alt='${warBookName[i]} photo'></div>`)
    $("#war"+i).append(`<div class=warDivCH2 id='warCH${i}' ></div>`)
    $("#war"+i).append(`<h1>${warBookName[i]}</h1>`)
    $("#war"+i).append(`<h2>${warBookyear[i]}</h2>`)
    $("#war"+i).append(`<h3>${warBookRating[i]}</h3>`)
    $("#war"+i).append(`<h4>${warBookWrittenBy[i]}</h4>`)
    $("#war"+i).append(`<p id='breafwar${i}'>${warBookBref[i]}</p>`)
    


    }
}

