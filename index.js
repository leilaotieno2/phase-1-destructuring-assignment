const farmAnimals = 'cow horse sheep pig chicken';

const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];

// Objects
const muppet = {
  muppetName: 'Miss Piggy',
  color: 'pink',
  song: 'Never Before, Never Again',
  job: 'Cast member of The Muppet Show',
  partner: 'Kermit'
};

const nestedMuppet = {
  nestedName: 'Kermit',
  nestedColor: 'green',
  album: {
    theMuppetMovie: {
      song1: 'Rainbow Connection',
      song2: 'Moving Right Along',
      song3: 'Never Before, Never Again',
      song4: 'I Hope That Something Better Comes Along',
    },
  },
  nestedJob: 'Host of The Muppet Show',
  nestedPartner: 'Miss Piggy'
};

// Strings

// 1. Use destructuring to declare `red`, `blue`, `green`. 
const [red, blue, green] = ['cow', 'sheep', 'duck'];

// 2. Use destructuring to declare `firstName`, `lastName` and `gender` with default value `unknown`.
const [firstName = 'unknown', lastName = 'unknown', gender = 'unknown'] = ['Miss', 'Piggy'];

// 3. Use destructuring to assign `animal`, `song` and `profession` from the given object.
const {animal, song, profession} = {
  animal: 'bear',
  song: 'Rainbow Connection',
  profession: 'host of The Muppet Show'
};

// 4. Use destructuring to assign `fruit` and `vegetable` from the given array.
const [fruit, vegetable] = ['apple', 'broccoli', 'carrot'];

// 5. Use destructuring to swap `a` and `b`.
let a = 5;
let b = 7;
[a, b] = [b, a];

// 6. Use destructuring with rest to assign the first value to `first`, the second value to `second` and the rest of the values to `otherColors`.
const [first, second, ...otherColors] = ['purple', 'yellow', 'red', 'green', 'orange'];

// 7. Use destructuring with rest to assign the first value to `name` and the rest of the values to `titles`.
const [name, ...titles] = ['Kermit', 'host of The Muppet Show', 'star of The Muppet Movie'];

// 8. Use destructuring to assign songs 2 and 4, and Kermit's job and partner.
const {album: {theMuppetMovie: {song2, song4}}, job: {nestedJob: job2}, partner: {nestedPartner: partner2}} = nestedMuppet;

