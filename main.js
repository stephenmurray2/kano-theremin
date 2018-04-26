const path = require('path');
const url = require('url');
const virtualMidi = require('./virtual-midi');

const lineariseProximity = (n) => {
    return Math.max(0, Math.min(((Math.log10(Math.max(1, n)) * 100) - 70) * 1.5, 255));
}

virtualMidi.openMidiPorts();

virtualMidi.onMotionData((data) => {
    
    if (data.detail) {
        
        let proximity = lineariseProximity(data.detail.proximity);        
            let t = parseInt( (255 - proximity )/ 2 );
            var m = [224,0,t];
            output.sendMessage(m);  
    }
    
});

virtualMidi.onMidiData((deltaTime, message) => {
    
    console.log(message);
    // If an input note is initiated, then initiate a note in the virtual instrument
    if (message[0] == 144) {
        // 50 corresponds to the pitch bend midi message
        var m = [144, 50, message[2]];
        output.sendMessage(m);
    }
    
    if (message[0] == 128) {
        // similarly if an input note is terminated, then terminate a note in the virtual insturment
        var n = [128, 50, message[2]];
        output.sendMessage(n);
    }
});
