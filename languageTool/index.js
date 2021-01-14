const franc = require('franc');
const colors = require('colors');
const langs = require('langs');

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
})

function translate(input) {
    const code = franc(input);
    if (code === 'und' || code === 'undefined') {
        console.log('');
        console.log(colors.red.bgBrightYellow('####################'))
        console.log(colors.red.bgBrightYellow('####################'))
        console.log(colors.red.bgBrightYellow('DETECTION FAILED'))
        console.log(colors.red.bgBrightYellow('TRY DIFFERENT'))
        console.log(colors.red.bgBrightYellow('OR LONGER'))
        console.log(colors.red.bgBrightYellow('SENTENCE!'))
        console.log(colors.red.bgBrightYellow('####################'))
        console.log(colors.red.bgBrightYellow('####################'))
        console.log('');
    } else {
        const codeTrans = langs.where('3', code);
        if (codeTrans.name === '') {
            console.log('');
            console.log(color.red('Missing Informations In Database!'));
            console.log('');
        } else {
            console.log('');
            console.log(colors.green('-----------------------------------'));
            console.log('');
            console.log(colors.green('The language you are searching is:'));
            console.log(colors.green(codeTrans.name));
            console.log('');
            console.log(colors.green('Localy spoken it is:'));
            console.log(colors.green(codeTrans.local));
            console.log('');
            console.log(colors.green('-----------------------------------'));
            console.log('');
        }
    }
}

readline.question(colors.bgWhite.black(`Write down what you want to have detected -> `), (input) => {
    try {
        translate(input);
    } catch (e) {
        console.log(colors.red('Detection ERROR!'));
        console.log(e)
    }
    readline.close();
})