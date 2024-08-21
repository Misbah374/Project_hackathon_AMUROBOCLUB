
console.log('Hello World!');
const  start = () => {
  // Tab to edit
  var e = parseInt(document.getElementById("Easy").value);
  var m = parseInt(document.getElementById("Medium").value);
  var h = parseInt(document.getElementById("Hard").value);
  
  const eq1 = {
    id: 1,
    ques: "Gravitational force keeps the planets in orbit around the sun",
    ans: "true",
  }
  
  const eq2 = {
    id:2,
    ques:"Saturn have largest rings in our solar system",
    ans: "true",
  }
  
  const eq3 = {
    id: 3,
    ques: "Milky way galaxy is spiral shaped galaxy",
    ans: "true",
  }
  
  const eq4 = {
    id: 4,
    ques: "Jupiter has great red spot",
    ans: "true",
  }
  
  const eq5 = {
    id: 5,
    ques: "chromosphere is in moon",
    ans: "false",
    // chromosphere is in sun
  }
  
  const eq6 = {
    id: 6,
    ques: "Titan is the smallest moon of saturn",
    ans: "false",
    // Titan is the largest moon of saturn
  }
  
  const eq7 = {
    id: 7,
    ques: "William Halley discover uranus",
    ans: "false",
    //William Herschel discovered Uranus
  }
  
  const eq8 = {
    id: 8,
    ques: "Titan is term used for natural satellite",
    ans: "false",
    //Moon is term used for natural satellite 
  }
  
  // easy questions framed ...
  
  const mq1 = {
    id: 1,
    ques: "Venus is covered by clouds of sulphuric acid",
    ans: "true",
  }
  
  const mq2 = {
    id: 2,
    ques: "Mars planet is named on roman god of war",
    ans: "true",
  }
  
  const mq3 = {
    id: 3,
    ques: "The most distant planet from uranus in our solar system is mercury",
    ans: "true",
  }
  
  const mq4 = {
    id: 4,
    ques: "Venus has a day which lasts for 8 months",
    ans: "true",
  }
  
  const mq5 = {
    id: 5,
    ques: "Mercury and Venus take more time than earth to orbit the sun",
    ans: "false",
    //Mercury and Venus take less time than earth to orbit the sun
  }
  
  const mq6 = {
    id: 6,
    ques: "Niel Armstrong was first man in space",
    ans: "false",
    //Yuri gagarin was first man in space
  }
  
  const mq7 = {
    id: 7,
    ques: "The invisible material thought to occupy all space of universe is named as nomatter",
    ans: "false",
    //The invisible material thought to occupy all space of universe is named as ether
  }
  
  const mq8 = {
    id: 8,
    ques: "Saturn is largest planet of the solar system",
    ans: "false",
    //Jupiter  is largest planet of the solar system
  }
  
// Medium questions framed ...

  const hq1 = {
    id: 1,
    ques: "Pioneer 10 was first space probe to leave the solar system",
    ans: "true",
  }
  
  const hq2 = {
    id: 2,
    ques: "Gravitational force bend light rays traveling through universe",
    ans: "true",
  }
  
  const hq3 = {
    id: 3,
    ques: "Martin Ryle was first Cambridge professor of radio astronomy",
    ans: "true",
  }
  
  const hq4 = {
    id: 4,
    ques: "Halley's comet is brightest comet in the solar system",
    ans: "true",
  }
  
  const hq5 = {
    id: 5,
    ques: "Neptune was named after the Roman godess of love",
    ans: "false",
    //Venus was named after the Roman godess of love
  }
  
  const hq6 = {
    id: 6,
    ques: "In 16th century a kind of extraterrestrial object has been named after Michel comet",
    ans: "false",
    //In 17th century a kind of extraterrestrial object has been named after Edmond Halley
  }
  
  const hq7 = {
    id: 7,
    ques: "The first artificial satellite is spereo 1",
    ans: "false",
    //The first artificial satellite is Sputnik 1
  }
  
  const hq8 = {
    id: 8,
    ques: "Steady state theory says that total entropy of universe is increasing everytime",
    ans: "false",
    //Steady state theory says that universe appears the same wherever and whenever viewed
  }
  
  //hard questions framed
  
  console.log(typeof(e));
  
  if(e+m+h == 8){
    for(let i=1;i<=e;i++){
      
      if(i == 1){
        document.getElementById('q1').innerHTML = eq1.ques;
      }
      
      if (i == 2) {
        document.getElementById('q2').innerText = eq2.ques;
      }
      
      if (i == 3) {
        document.getElementById('q3').innerText = eq3.ques;
      }
      
      if (i == 4) {
        document.getElementById('q4').innerText = eq4.ques;
      }
      
      if (i == 5) {
        document.getElementById('q5').innerText = eq5.ques;
      }
      
      if (i == 6) {
        document.getElementById('q6').innerText = eq6.ques;
      }
      
      if (i == 7) {
        document.getElementById('q7').innerText = eq7.ques;
      }
      
      if (i == 8) {
        document.getElementById('q8').innerText = eq8.ques;
      }
    }
    
    // easy done
    
    for (let j = e+1; j <= e+m; j++) {

      if (j == 1) {
        document.getElementById('q1').innerHTML = mq1.ques;
      }

      if (j == 2) {
        document.getElementById('q2').innerText = mq2.ques;
      }

      if (j == 3) {
        document.getElementById('q3').innerText = mq3.ques;
      }

      if (j == 4) {
        document.getElementById('q4').innerText = mq4.ques;
      }

      if (j == 5) {
        document.getElementById('q5').innerText = mq5.ques;
      }

      if (j == 6) {
        document.getElementById('q6').innerText = mq6.ques;
      }

      if (j == 7) {
        document.getElementById('q7').innerText = mq7.ques;
      }

      if (j == 8) {
        document.getElementById('q8').innerText = mq8.ques;
      }
    }
    
    //medium done
    
    for (let k = 1+e+m; k <= e+m+h; k++) {

      if (k == 1) {
        document.getElementById('q1').innerHTML = hq1.ques;
      }

      if (k == 2) {
        document.getElementById('q2').innerText = hq2.ques;
      }

      if (k == 3) {
        document.getElementById('q3').innerText = hq3.ques;
      }

      if (k == 4) {
        document.getElementById('q4').innerText = hq4.ques;
      }

      if (k == 5) {
        document.getElementById('q5').innerText = hq5.ques;
      }

      if (k == 6) {
        document.getElementById('q6').innerText = hq6.ques;
      }

      if (k == 7) {
        document.getElementById('q7').innerText = hq7.ques;
      }

      if (k == 8) {
        document.getElementById('q8').innerText = hq8.ques;
      }
    }
    //hard done
  }
  
  else {
    alert('Total number of questions must be 8');
    console.log(e+m+h);
  }

//sub is function to calculate result

  const sub = () => {
    
    let a = document.getElementById('o1').value;
    let b = document.getElementById('o2').value;
    let c = document.getElementById('o3').value;
    let d = document.getElementById('o4').value;
    let e = document.getElementById('o5').value;
    let f = document.getElementById('o6').value;
    let g = document.getElementById('o7').value;
    let h = document.getElementById('o8').value;
    
    let marks = 0;
    
    if(a=="True"){
      marks=marks+1;
    }
    if(b=='True'){
      marks=marks+1;
    }
    if(c=='True'){
      marks=marks+1;
    }
    if(d=='True'){
      marks=marks+1;
    }
    if(e=='False'){
      marks=marks+1;
    }
    if(f=='False'){
      marks=marks+1;
    }
    if(g=='False'){
      marks=marks+1;
    }
    if(h=='False'){
      marks=marks+1;
    }
    console.log(marks);
    document.getElementById('result').style.visibility = "visible";
    document.getElementById('score').innerHTML = 'Your score is '+marks;
    document.getElementById('colour').style.width = marks*40+'px';
  }
  
  document.getElementById('sub').addEventListener("click",sub);
}
