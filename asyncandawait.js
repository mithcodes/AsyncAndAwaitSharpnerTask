console.log('person1: show ticket');
console.log('person2: show ticket');

const preMovie = async () => {
    const promiseWifeBringTickets = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('ticket');
        }, 3000);
    });

    const getPopcorn = new Promise((resolve, reject) => {
        resolve('popcorn');
    });

    const addButter = new Promise((resolve, reject) => {
        resolve('butter');
    });

    try {
        let ticket = await promiseWifeBringTickets;
        console.log(`wife: I have ${ticket}`);
        console.log('husband: We should go in');
        console.log('wife: No, I am hungry');

        let popcorn = await getPopcorn;
        console.log(`husband: I got some ${popcorn}`);

        let butter = await addButter;
        console.log(`wife: I need ${butter} on my popcorn`);

        // Add the getColdDrinks promise here if needed
        const getColdDrinks = new Promise((resolve, reject) => {
            resolve('cold drinks');
        });

        let drinks = await getColdDrinks;
        console.log(`husband: I got ${drinks} too`);

        console.log('husband: Let\'s go in now');
    } catch (error) {
        console.error(`Error: ${error}`);
    }
};

preMovie();
