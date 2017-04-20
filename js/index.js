
import cube, {otherCube} from './imports/cube';
import { square } from './imports/square';


const squaredCubed = (input) => {
  return cube(square(input));
}

console.log("This should be 64: ", squaredCubed(2));

let root = document.getElementById('root');

root.innerHTML = "<span>" + squaredCubed(2) + "</span>";
