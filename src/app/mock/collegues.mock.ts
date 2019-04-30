import {Collegue} from '../models/Collegue';

//export d'une variable contenant un collegue
export const collegueMock = new Collegue(
    'Sir', 
    'Sissinissi', 
    new Date(1970,3,3), 
    'sissinissi@hat.fr', 
    'https://bridoz.com/wp-content/uploads/2015/11/138.jpg', 
    's01'
);

export const collegueMock2 = new Collegue(
    'Coco',
    'L\'Asticot',
    new Date(1219,1,1),
    'cocolasticot@merlin.com',
    'http://www.mypokecard.com/my/galery/fnumJ08vPgDQ.jpg',
    'enchanteur01'
);

