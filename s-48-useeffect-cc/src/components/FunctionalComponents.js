import React, { useEffect, useState } from 'react'

function FunctionalComponents() {
    let [score,setScore]=useState(0);
    let[overs,setOvers]=useState(0);
    let[dots,setDots]=useState(0);
    let[singles,setsingles]=useState(0);
    let[doubles,setDoubles]=useState(0);
    let[tripes,SetTriples]=useState(0);
    let[fours,setFours]=useState(0);
    let[sixs,setSixs]=useState(0);
    let[wides,setWides]=useState(0);
    let[wikets,setWiket]=useState(0);
    let [noBall,setNoBall]=useState(0)

    useEffect(()=>{alert("onComponent load.......")},[])
    useEffect(()=>{
        return(()=>{
            alert("onComponent unload.......")
        })
    },[]);
    useEffect(()=>{
        console.log("overs state is changeing......")
    },[overs,score])
    useEffect(()=>{
        console.log("without boundries state is changeing......")
    },[dots,singles,doubles,tripes])
    useEffect(()=>{
        console.log("boundries state is changeing......")
    },[fours,sixs])
    useEffect(()=>{
        console.log("extras state......")
    },[wides,noBall])
   
    


  return (
    <>
            <h1>Functional Components</h1>
            <h2>overs:{parseInt(overs/6)}.{overs%6}</h2> 
            <h2>Score:{score}-</h2>
             <h2 className='wiket'>{wikets}</h2>
             <br></br>
             <h3>Singles:{singles}</h3>
             <h3>Dots:{dots}</h3>
             <h3>Doubles:{doubles}</h3>
             <h3>Tridi:{tripes}</h3>
             <h3>Four:{fours}</h3>
             <h3>Six:{sixs}</h3>
             <h3>Wide:{wides}</h3>
             <h3>No Ball:{noBall}</h3>
             


            
            
    <div>

          <button type='button' onClick={()=>{
            
            setOvers(overs+1)
            setDots(dots+1)
        }}>Dot</button>       
         <button type='button' onClick={()=>{
            setScore(score+1)
            setOvers(overs+1)
            setsingles(singles+1)
        }}>Single</button>
        <button type='button' onClick={()=>{
            setScore(score+2)
            setOvers(overs+1)
            setDoubles(doubles+1)
        }}>Double</button>
        <button type='button' onClick={()=>{
            setScore(score+3)
            setOvers(overs+1)
            SetTriples(tripes+1)
        }}>Thridi</button>
        <button type='button' onClick={()=>{
            setScore(score+4)
            setOvers(overs+1)
            setFours(fours+1)
        }}>Four</button>
        <button type='button' onClick={()=>{
            setScore(score+6)
            setOvers(overs+1)
            setSixs(sixs+1)
        }}>Six</button>
        <button type='button' onClick={()=>{
            setScore(score+1)
            setWides(wides+1)
          
        }}>Wide</button>
        <button type='button' onClick={()=>{
            setScore(score+1)
            
        }}>No Ball</button>
        <button type='button' onClick={()=>{
            setWiket(wikets+1)
            setWiket(wikets+1)
            setOvers(overs+1)
        }}>Wikets</button>
       
   
    </div>
    </>
  )
}

export default FunctionalComponents

