import React, { useEffect, useState } from 'react';
import '../styles/GamePage.css';
import consommations from '../data/consommation';

function GamePage() {

    // hook qui permet de choisir aleatoirement une typologie de consommation
    const [typeConsommation, setTypeConsommation] = useState(null)
    // state that keeps track of the current step of the game 
    const [currentStep, setCurrentStep] = useState(1);
    // keep track of the already choosen types of consommation 
    let alreadyChoosen = JSON.parse(localStorage.getItem("alreadyChoosen")) || []

    // hook that will be executed each time the component loads, and runs a function to choose an arbitraty type of consommation 


    useEffect(() => {
        while(currentStep <= 9){
            getArbitraryConsoType();
            console.log(typeConsommation);
        }
    }, [currentStep]);

    const getArbitraryConsoType = () => {
        // Choose arbitrarily between 1 and 9
        let arbitraryId = Math.floor(Math.random() * 9) + 1;

        // Check if this id does not already exist in the already chosen array
        if (alreadyChoosen.some(elt => elt === arbitraryId)) {
            getArbitraryConsoType();
        } else {
            let conso = consommations.find(elt => elt.id === arbitraryId);

            if (conso) {
                // Ensure that conso is not null or undefined
                localStorage.setItem("alreadyChoosen", JSON.stringify([...alreadyChoosen, conso.id]));
                setTypeConsommation(conso);
            } else {
                console.error(`Consommation with id ${arbitraryId} not found.`);
            }
        }
    };



  return (
    <div>
        {typeConsommation !== null && typeConsommation.name }
    </div>
  )
}

export default GamePage