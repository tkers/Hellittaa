import { receiveMessage, receiveChannel } from '../actions/index';

// listens for incoming ioevents and dispatches them to redux
const dispatchEvents = (io, dispatch) => {

    io.on('message', data => {
        console.log('message', data);
        dispatch(receiveMessage(data));
    });

    io.on('channel', data => {
        dispatch(receiveChannel(data))
    });
};

export default dispatchEvents;