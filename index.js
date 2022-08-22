

  const farmAnimals = 'cow horse sheep pig chicken';

  const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
  
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
        song3: 'Never Before',
        song4: 'I Hope That Something Better Comes Along',
      },
    },
    nestedJob: 'Host of The Muppet Show',
    nestedPartner: 'Miss Piggy'
  };
  
  // 7. Use destructuring to assign all variables using the keys as the variable names
  
  // 8. Use destructuring to assign songs 2 and 4, and Kermit's job and partner 
  // 8. Use destructuring to assign songs 2 and 4, and Kermit's job and partner
  
  const [moo,neigh,baa,oink,cluck]=farmAnimals.split(' ')
  const [bessie,sheep,dolly,babe,little]=farmAnimals.split(' ')
  const [blackAndWhite,black,pink,] =["cow","sheep","pig"]
  const [red,orange,yellow,green,blue,indigo,violet]=colors;
  const colour=['red', 'orange', 'yellow', 'green', 'blue', 'violet'];
  const [r,o,y,g,b,v]=colour;
  const [indg]=["indigo"];
  const {muppetName,color,song,job,partner}=muppet;
  const {song2,song4}=nestedMuppet.album.theMuppetMovie
  const {nestedJob,nestedPartner}=nestedMuppet;

  