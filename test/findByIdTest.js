// IMPORT MODULES under test here:
// import { example } from '../example.js';

import { findById } from '../utils.js';

const test = QUnit.test;

test('time to test a function', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = {
        id: 'Sword Fern',
        name: 'Polystichum munitum',
        image: 'http://wherewaterfalls.com/wp-content/uploads/2015/04/Sword+fern.JPGimgmax=1024.jpg',
        description: 'The sword fern plant is a lush, evergreen ground cover known for its bright green, sword-shaped fronds. You’ll find the young fronds, or fiddleheads, appearing in early spring from their underground rhizomes with most plants eventually reaching 4 to 6 feet (1 to 2 m.) long. In addition to spreading through rhizomes, sword ferns will also reproduce via spores that are found along the backside of the fronds. These spores appear as brown spots, which are clustered together in groups.',
        category: 'Dryopteridacea',
        price: '$35',
    };

    //Act 
    // Call the function you're testing and set the result to a const
    const actual = findById('Sword Fern', [

        {
            id: 'Sword Fern',
            name: 'Polystichum munitum',
            image: 'http://wherewaterfalls.com/wp-content/uploads/2015/04/Sword+fern.JPGimgmax=1024.jpg',
            description: 'The sword fern plant is a lush, evergreen ground cover known for its bright green, sword-shaped fronds. You’ll find the young fronds, or fiddleheads, appearing in early spring from their underground rhizomes with most plants eventually reaching 4 to 6 feet (1 to 2 m.) long. In addition to spreading through rhizomes, sword ferns will also reproduce via spores that are found along the backside of the fronds. These spores appear as brown spots, which are clustered together in groups.',
            category: 'Dryopteridacea',
            price: '$35',
        },

        {
            id: 'Brachen Fern',
            name: 'Pteridium aquilinum',
            image: 'http://minnesotaseasons.com/Plants/Large/W/western_bracken_fern_07.jpg',
            description: 'Brackens are noted for their large, highly divided leaves. They are found on all continents except Antarctica and in all environments except deserts, though their typical habitat is moorland. The genus probably has the widest distribution of any fern in the world.',
            category: 'Dennstaedtiaceae',
            price: '$20',
        },

        {
            id: 'Oak Fern',
            name: 'Gymnocarpium dryopteris',
            image: 'https://upload.wikimedia.org/wikipedia/commons/0/01/Gymnocarpium_dryopteris_0318.JPG',
            description: 'Gymnocarpium dryopteris has small, delicate fronds up to 40 cm (16 inches) long, with ternately-compound pinnae (leaves). Fronds occur singly. On the underside of matured pinnae the naked sori can be found (the Latin generic name gymnocarpium means "with naked fruit"). The species grows in coniferous woodlands and on shale talus slopes. Gymnocarpium dryopteris, a forest understory plant, is not found in association with Quercus (oak).',
            category: 'Cystopteridaceae',
            price: '$5',
        },

        {
            id: 'Christmas Fern',
            name: 'Polystichum acrostichoides',
            image: 'https://1.bp.blogspot.com/_mBWypOKRJSg/S-9eKqqZi9I/AAAAAAAAAeg/tFoAd14IMoI/s1600/christmas_fern.jpg',
            description: 'Christmas fern has a tufted, clumping habit, with its fronds arising from a central growth point. It can form colonies, but frequently grows singly or in twos or threes. In winter, the fertile fronds die; the sterile fronds remain through the winter, and are often flattened to the ground by low temperatures and snow cover. The frond is supported by a dark brown- to black-colored stipe, or stem, which is typically a quarter to a third of the overall frond length. Coarse, light-brown-to-tan scales cover the stipe, and are typically about 5 mm long and translucent. The coiled, developing fronds ("crosiers") are scaly, greyish and prominent in early spring.',
            category: 'Dryopteridaceae',
            price: '$100',
        },

        {
            id: 'Holy Fern',
            name: 'Cyrtomium falcatum',
            image: 'http://www.scgardenguru.com/uploads/1/1/8/1/11813386/5591495_orig.jpg?107',
            description: 'Great choice for coastal planting.  Evergreen fern that grows 2\' to 3\' high in all areas of SC.  Low maintenance, prefers consistently moist soil.',
            category: 'Dryopteridaceae',
            price: '$2',
        },
    ]);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.deepEqual(actual, expected);
});
