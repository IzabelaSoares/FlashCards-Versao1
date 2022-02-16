import { useState } from 'react';
import Button from '../components/Button';
import FlashCard from '../components/FlashCard';
import FlashCardContainer from '../components/FlashCardContainer';
import Header from '../components/Header'
import Main from '../components/Main'
import Radio from '../components/Radio';
import { all } from '../data/flashcards';
import { randomCards } from '../helpers/randomCards';

export default function PageCards() {

    const [allFlashCards, setAllFlashCards] = useState(all)
    const [showAllTitles, setShowAllTitles] = useState(true)

    function handleButtonClick() {
        const newArray = randomCards(allFlashCards);
        setAllFlashCards(newArray);
    }

    function handleShowTitle(){
        setShowAllTitles(true)
    } 

    function handleShowDescription(){
        setShowAllTitles(false)
    } 

    return (
        <div>
            <Header>Flash Card</Header>
            <Main>
                <div className="text-center mb-4">
                    <Button onButtonClick={handleButtonClick} />
                </div>
                <div className='flex flex-row  justify-center' >
                    <Radio radioClick={handleShowTitle} radioChecked={showAllTitles} description='Mostrar Titulo' id='title' name='card_radio'/>
                    <Radio radioClick={handleShowDescription} radioChecked={!showAllTitles} description='Mostrar Descrição' id='description' name='card_radio'/>
                </div>
                <FlashCardContainer>
                    {allFlashCards.map(({ id, title, description }) => {
                        return <FlashCard showAllTitles={showAllTitles} key={id} title={title} description={description} />
                    })}
                </FlashCardContainer>
            </Main>
        </div>
    );
}