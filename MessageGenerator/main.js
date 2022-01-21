const  isSoArray = ['so hot', 'so finger lickin good', 'so fine', 'so sweet'];

const thatArray = ['she\'s banned from National parks', 'she should sell hotdogs', 'she doesn\'t need any sugar in her coffee',
 'last name must be pepper'];

const whyArray = ['because she\'s the leading cause of wildfires.','because she already knows how to make a weiner stand.', 
'cause she\'s got a pretty sweet but.','cause she\'s SMOKIN!.'];

function randomIndex(array) {
   return Math.floor(Math.random() * array.length);
 }

function message () {

    return `Yo mama ${isSoArray[randomIndex(isSoArray)]} ${thatArray[randomIndex(thatArray)]} ${whyArray[randomIndex(whyArray)]}`;

};

let mixMessage = message();
$(document).ready(() => {
  $('.btn').on('click',() => {
        $('.preview').html(mixMessage);
 });
  $('.refresh').on('click',() => {
    location.reload();
  })
});
