

const dramaBookName = ["Streetcar Named Desire", "Hamlet","Crucible"]
const dramaBookyear = ["1947","1601","1953"]
const dramaBookBref=["After the loss of her family home to creditors, Blanche DuBois travels from the small town of Laurel, Mississippi, to the New Orleans French Quarter to live with her younger married sister, Stella, and Stella's husband, Stanley Kowalski. Blanche is in her thirties and, with no money, has nowhere else to go."
,"The protagonist of Hamlet is Prince Hamlet of Denmark, son of the recently deceased King Hamlet, and nephew of King Claudius, his father's brother and successor. Claudius hastily married King Hamlet's widow, Gertrude, Hamlet's mother, and took the throne for himself. Denmark has a long-standing feud with neighbouring Norway, in which King Hamlet slew King Fortinbras of Norway in a battle some years ago. Although Denmark defeated Norway and the Norwegian throne fell to King Fortinbras's infirm brother, Denmark fears that an invasion led by the dead Norwegian king's son, Prince Fortinbras, is imminent.",
"The opening narration explains the context of Salem and the Puritan colonists of Massachusetts, which the narrator depicts as an isolated theocratic society in constant conflict with Native Americans. The narrator speculates that the lack of civil liberties, isolation from civilization, and lack of stability in the colony caused latent internal tensions which would contribute to the events depicted in the play."]
const dramaBookImj =["photo/logo.png.png","photo/logo.png.png","photo/logo.png.png"]
const dramaBookRating = ["5","4","4.5"]
const dramaBookWrittenBy = ["Elia Kazan","William Shakespeare","Tennessee Williams"]
const dramaBookPrice = ["10.00 JD ","12.50 JD","6.00 JD"]


const bkdrama = ()=>{
    $(".type11").show()
    $(".type11").html("")

    
    for (let i=0; i<dramaBookName.length;i++){
    $(".type11").append(`<div class="dramaDiv" id='dramabook${i}' ></div>`)
    $(".type11").append(`<div class="dramaDivCH1" ><img src='${dramaBookImj[i]}' alt='${dramaBookName[i]} photo'></div>`)
    $(".type11").append(`<div class="dramaDivCH2 "id='actionCH${i}' ></div>`)
    $(".type11").append(`<h2 class="h111"> bookname : ${dramaBookName[i]}</h2>`)
    $(".type11").append(`<h2>book year : ${dramaBookyear[i]}</h2>`)
    $(".type11").append(`<h3>book rating : ${dramaBookRating[i]}</h3>`)
    $(".type11").append(`<h3>book price : ${dramaBookPrice[i]}</h3>`)
    $(".type11").append(`<h4>written by : ${dramaBookWrittenBy[i]}</h4>`)
    $(".type11").append(`<p id='breafDrama${i}'> ${dramaBookBref[i]}</p>`)
    


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
const revolutionBookPrice = ["9.00 JD ","12.50 JD","3.00 JD"]

const bkrevolution = ()=>{
    $(".type12").show()
    $(".type12").html("")

    
    for (let i=0; i<revolutionBookName.length;i++){
    $(".type12").append(`<div class="revolutionDiv" id='revolutionbook${i}' ></div>`)
    $(".type12").append(`<div class="revolutionDivCH1" ><img src='${revolutionBookImj[i]}' alt='${revolutionBookName[i]} photo'></div>`)
    $(".type12").append(`<div class="revolutionDivCH2" id='revolutionCH${i}' ></div>`)
    $(".type12").append(`<h2 class="h111"> book name : ${revolutionBookName[i]}</h2>`)
    $(".type12").append(`<h2> book year : ${revolutionBookyear[i]}</h2>`)
    $(".type12").append(`<h3> rating : ${revolutionBookRating[i]}</h3>`)
    $(".type12").append(`<h3> Book price : ${revolutionBookPrice[i]}</h3>`)
    $(".type12").append(`<h4> written by : ${revolutionBookWrittenBy[i]}</h4>`)
    $(".type12").append(`<p id='breafrevolution${i}'>${revolutionBookBref[i]}</p>`)
    


    }
}


const warBookName = ["The campaign of 1812 in Russia", "On War","A Rumor of War"]
const warBookyear = ["1979 ","1980","2000"]
const warBookBref=["On June 23, 1812, Napoleon's Grande Armée, over 500,000 men strong, poured over the Russian border. An equally massive Russian army faced them. The ensuing campaign was a catastrophe for Napoleon. Although the battle of Borodino, which resulted in heavy losses on both sides, allowed Napoleon to enter Moscow, his stay in that empty and decimated city was disastrous. "
,"Clausewitz was among those intrigued by the manner in which the leaders of the French Revolution, especially Napoleon, changed the conduct of war through their ability to motivate the populace and gain access to the full resources of the state, thus unleashing war on a greater scale than had previously been seen in Europe.",
"In the foreword, Caputo makes clear that this is not a history book, nor is it a historical accusation; it is a story about war, based on his experience."]
const warBookImj =["https://images-na.ssl-images-amazon.com/images/I/51mgJ2d4zfL._AC_UL600_SR381,600_.jpg","photo/logo.png.png","photo/logo.png.png"]
const warBookRating = ["5","4","4.5"]
const warBookWrittenBy = [" General Carl Von Clausewitz","Vom Kriege"," Philip Caputo"]
const warBookPrice = ["15.00 JD ","17.50 JD","8.00 JD"]

const bkwar = ()=>{
    $(".type13").show()
    $(".type13").html("")

    
    for (let i=0; i<warBookName.length;i++){
    $(".type13").append(`<div class="warDiv" id='warbook${i}' ></div>`)
    $(".type13").append(`<div class="warnDivCH1" ><img src='${revolutionBookImj[i]}' alt='${warBookName[i]} photo'></div>`)
    $(".type13").append(`<div class="warDivCH2" id='warCH"${i}' ></div>`)
    $(".type13").append(`<h2 class="h111">book name : ${warBookName[i]}</h2>`)
    $(".type13").append(`<h2> book year : ${warBookyear[i]}</h2>`)
    $(".type13").append(`<h3> book rating : ${warBookRating[i]}</h3>`)
    $(".type13").append(`<h3> book price : ${warBookPrice[i]}</h3>`)
    $(".type13").append(`<h4> written by : ${warBookWrittenBy[i]}</h4>`)
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
    $(".header").hide()
    $(".type11").show()
    $("#11").show()
    $("#A22").hide()
    $("#A33").hide()

    bkdrama()

});


$("#type2b").on("click", () => {


    $(".img11").hide()
    $(".img22").hide()
    $(".img33").hide()
    $(".title2").hide()
    $(".type11").hide()
    $(".type13").hide()
    $(".header").hide()
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
    $(".header").hide()
    $(".type13").show()
    $("#A11").hide()
    $("#22").hide()
    $("#A33").show()

    bkwar()

});


$("#pge").on("click", () => {

    $(".header").show()
    $(".categories").show()
    $(".img11").show()
    $(".img22").show()
    $(".img33").show()
    $(".title2").show()
    $(".type12").hide()
    $(".type13").hide()
    $(".type11").hide()
    $("#11").hide()
    $("#A22").hide()
    $("#A33").hide()


});