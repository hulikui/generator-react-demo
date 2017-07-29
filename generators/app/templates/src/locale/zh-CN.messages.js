import enMessage from './en-US.messages';
export default Object.keys(enMessage).reduce(function(o, v, i) {
    o[v] = v;
    return o;
}, {})
