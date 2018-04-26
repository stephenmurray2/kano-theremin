# Kano Theremin

Turns a Kano ultrasonic sensor in a midi controller, which varies the pitch of a virtual midi instrument in manner that is (for all practical purposes) continuous.
This is a modified version of [virtual-motion-midi](https://github.com/murilopolese/virtual-motion-midi); credit to Murilo Polese.

## Instructions

1. Install dependencies

`>> npm install`

2. Start the application

`>> node main.js`

3. In your DAW, create a software instrument track, and set the instrument to an external instrument (in Logic Pro X, this is listed under
Utility > External Instrument - it might be different for other DAWs). Select as a destination "Virtual Output". In this track, add some notes.

4. In a separate track, select a software instrument. Ensure that this instrument will respond to the pitch bend event.

5. Hit play - the midi events in the first track should trigger the second instrument, and it should vary in pitch according to the reading from Kano sensor.
