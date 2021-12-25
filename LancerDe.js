import De from "./De";
import { useState } from 'react';
import de1 from './images/1.png';
import de2 from './images/2.png';
import de3 from './images/3.png';
import de4 from './images/4.png';
import de5 from './images/5.png';
import de6 from './images/6.png';


const LancerDe = () => {

    const handleLancer= () =>{
        setNbr(nbr+1);
        console.log('jouer');
        const randomOne = Math.floor(Math.random() * 6) + 1;
        setDe1(des[randomOne]);
        const randomTwo = Math.floor(Math.random() * 6) + 1;
        setDe2(des[randomTwo]);
        if(randomOne===randomTwo){ 
            setIdentique(true);
            setWins(wins+1);
        }
        else{
            setIdentique(false);
            setWins(wins-1);
        }
       
    }

    const handleReset = ()=>{
        setWins(0);
        setIdentique(false);
        setDe1(des[1]);
        setDe1(des[5]);
        setNbr(0);
    }

    const des =[
        null,
        {img:de1},
        {img:de2},
        {img:de3},
        {img:de4},
        {img:de5},
        {img:de6}
    ];
    const[nbr,setNbr]=useState(0); 
    const[wins,setWins]=useState(0);
    const[identique,setIdentique]=useState('');
    const[deOne,setDe1]=useState(des[1]); // valeur par defaults 
    const[deTwo,setDe2]=useState(des[5]);;

    return (  
        <div>
            <De de= {deOne} />
            <De de= {deTwo}  />            
            <button onClick={handleLancer} disabled={nbr===10} >Lancer</button>
            <button onClick={handleReset}>Reset</button>
            <h1>Score : {wins} </h1>
            {identique &&<h1>You Win !!!</h1>}
            {!identique && (nbr >0) &&<h1>Try Again :( </h1> }
            {(nbr ===10)&& <h1>You are out of dices !! </h1>}
    
        </div>
    );
}
 
export default LancerDe;