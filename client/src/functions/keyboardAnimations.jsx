export default function keyboardAnimations(){
    let i = 0;
    let j=0;
    let k=17;
    let f=17;

    const interval1 = setInterval(() => {
      i = (i + 1) % 17;
      if (i === 0) i++;
      
      try{document
        .querySelector(`#toPress >path:nth-of-type(${i})`)
        .classList.add("current");}
        catch(error){}
      setTimeout(function () {
        try{document
          .querySelector(`#toPress >path:nth-of-type(${i})`)
          .classList.remove("current");}
          catch(error){}
      }, 150);
    }, 300);

    const interval2 = setInterval(() => {
      j = (j + 1) % 17;
      if (j === 0) j++;
      try{
      document
        .querySelector(`#toPress >path:nth-of-type(${j})`)
        .classList.add("current");}
        catch(error){}
      setTimeout(function () {
        try{document
          .querySelector(`#toPress >path:nth-of-type(${j})`)
          .classList.remove("current");}
          catch(error){}
      }, 200);
    }, 400);

    const interval3 = setInterval(() => {
      k = k-1;
      if (k === 0) k=16;
      try{document
        .querySelector(`#toPress >path:nth-of-type(${k})`)
        .classList.add("current");}
        catch(err){}
      setTimeout(function () {
        try{document
          .querySelector(`#toPress >path:nth-of-type(${k})`)
          .classList.remove("current");}
          catch(err){}
      }, 300);
    }, 600);

    const interval4= setInterval(() => {
      f = f-1;
      if (f === 0) f=16;
      try{document
        .querySelector(`#toPress >path:nth-of-type(${f})`)
        .classList.add("current");}
        catch(err){}
      setTimeout(function () {
        try{document
          .querySelector(`#toPress >path:nth-of-type(${f})`)
          .classList.remove("current");}
          catch(err){
            
          }
      }, 150);
    }, 300);

    
    const interval5  = setInterval(()=>{
      try{document.querySelector("path#space").classList.add('current')}catch(err){}
      setTimeout(()=>{
        try{document.querySelector("path#space").classList.remove('current')}catch(err){}
      },300)
    },2000)

    return [interval1, interval2, interval3, interval4, interval5]
}