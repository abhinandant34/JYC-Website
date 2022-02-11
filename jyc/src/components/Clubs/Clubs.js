import React from 'react';
import './Clubs.css'    //imported Clubs.css the css file for this file
import clublogo1 from './images/club-1.png'     //imported clubs logos to be shown in the clubs portion
import Card from './Card/Card';     //imported cards made that were to be added in clubs portion

export default function Clubs() {       //made Clubs function
  return(
    <div className='clubs'>        {/*made a div for the clubs portion */}
        <div className='clubs-heading'>     {/*made a div for "Clubs" heading */}
            <h2 className='clubs-head-text'>Clubs</h2>  {/*added heading */}
            <div className='club-heading-underline'></div>    {/*created an underline using a div */}
        </div>
        <div className='clubs-all'>     {/*created a div for the whole portion of clubs */}
            <div className='clubs-left-side'>       {/*made another div for left side of the page in clubs portion */}
                <div className='clubs-card top-club-card'>      {/*added same class in the clubs for the alignment and also used another class for the top card */}
                    <Card                   //added first card imported from Card and passed values and required to it
                    img={clublogo1}
                    heading='LITERARY AND DEBATING CLUB'
                    about='Literary & Dramatics Club is home to all the literature enthusiasts, theater lovers and street play artists.'/>
                </div>
                <div className='clubs-card'>
                    <Card
                    img={clublogo1}
                    heading='THEATRE AND MUSIC CLUB'
                    about='The Theatre and Music Club of JUIT provides a platform to theatre lovers, nukkad enthusiasts and music admirers.'/>
                </div>
                <div className='clubs-card'>
                    <Card
                    img={clublogo1}
                    heading='CULTURAL AND DANCE CLUB'
                    about='As the name suggests, one of the primary aims of the Cultural Club is to help students keep in touch with the rich cultural values, customs and traditions of our country.'/>
                </div>
            </div>
            <div className='clubs-right-side'>    {/* made another div for right side of the main clubs portion below the heading*/}
                <div className='clubs-card top-club-card'>      {/* added the same css for all the cards and also added another for special css for the top card */}
                    <Card
                    img={clublogo1}
                    heading='ENVIRONMENT, ECOLOGY AND HEALTH CLUB'
                    about='The clubs aim at providing a overall development of the members for the future.'/>
                </div>
                <div className='clubs-card'>    {/*added just the same css for all the cards */}
                    <Card
                    img={clublogo1}
                    heading='TECHNICALA AND PHOTOGRAPHY CLUB'
                    about='Composition of Movie, Photography and Createch the Technical Club of JUIT provides personal growth,leadership and learning opportunities.'/>
                </div>
                <div className='clubs-card'>
                    <Card
                    img={clublogo1}
                    heading='SPORTS CLUB'
                    about='Sports Club is one of the distinguishable bodies in the JYC which revolves around the organisation and implementation of Sports Tournaments and events in coordination with other clubs and committees.'/>
                </div>
            </div>
        </div>
    </div>
  );
}
