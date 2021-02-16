// secret

const {nerdvision} = require('@nerdvision/agent');

nerdvision.init({
 apiKey : '81a554bc915bfa33ab821d01aad72fe70b0c86bdd6495ec7fedd0424ef54ae41b7c6de6f0b0f44f5c7c78a0e7206cdfa9d47e42733a679008232fc6b8bd4b1e5',
 apiUrl : 'api.bbn.nerd.vision',
 debug: true
}).then( (dks) => {


    console.log('one');

    console.log('two');

    const t = {

    }


    setInterval( () => {
        console.log(t.thing.undef);
    },2000);
    

});
