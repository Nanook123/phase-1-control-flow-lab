function scuberGreetingForFeet(_someNumber) {
  let feet = _someNumber;

  if (feet <= 400) {
    return `This one is on me!`;

  } else if (feet >= 2000 && feet < 2500) {
    return `I will gladly take your thirty bucks.`;

  } else (feet >= 2500)
  return `No can do.`;



}
scuberGreetingForFeet()

function ternaryCheckCity(city) {



  const cityMessage = city === 'NYC' ? "Ok, sounds good." : 'No go.';
  return cityMessage
}

ternaryCheckCity()

let tip1 = 'generous';
let tip2 = 'not as generous';
let tip3 = 'thanks for everything'

function switchOnCharmFromTip(tips) {


  switch (tips) {

    case 'generous':
      return "Thank you so much.";
      break;
    case 'not as generous':
      return "Thank you.";
      break;
    case 'thanks for everything':
      return "Bye."
      break;
  }
}

switchOnCharmFromTip()
