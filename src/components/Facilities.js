import React, { Component } from 'react'
import boat from './assets/alone_at_sea.png'
import unicorn from './assets/unicorn.jpg'
import sunbed from './assets/sunbed.jpg'

export default class RoomContent extends Component {
    render() {
        return (
        <div>
            <div content>
            <img src={boat}/>
                <h1>Blue room</h1>
                <p>Our largerst room, like Tom hanks you will be completely alone...(until people finally turn up)
                <br/> So, scream your ideas! we swear the room isn't bugged *cough*.</p>
            </div>
            <div content>
            <img src={unicorn}/>
                <h1>Pink room</h1>
                <p>Pink! the colour of warriors! This is where devs get it done!<br/>
                It's magical! it's like being in a Unicorns fart. However this is a zomie unicorn<br/>
                we're in, and we're out. We don't want pink eye</p>
                </div>
            <div content>
            <img src={sunbed}/>
                <h1>Orange room</h1>
                <p>Our two person room.<br/> 
                It's small, but nothing will make you get shit done like being in a two person sunbed...face to face<br/>
                It's awkward, but we love you.
                </p>
                </div>
            </div>
                    )
                }
            }

        