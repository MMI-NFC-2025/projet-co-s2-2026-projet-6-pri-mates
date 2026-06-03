import PocketBase from 'pocketbase';
export const pb = new PocketBase('https://tacita-pb.charlottemettetal.fr:443');

export async function getImageUrl(record, recordImage) {
    return pb.files.getURL(record, recordImage);
}

export async function getUtilisateur() {
    const utilisateur = await pb.collection('utilisateur').getOne('h2q4fjfbfazkgle');
    console.table(utilisateur);
    return utilisateur;
}


export function getProgressionUtilisateur(utilisateur) {
    return {
        jour: utilisateur.Jour,
        niveau: utilisateur.Niveau
    };
}

export async function getNomUtilisateur() {
    const utilisateur = await pb.collection('utilisateur').getOne('h2q4fjfbfazkgle');
    return {
        nom_utilisateur: utilisateur.nom_utilisateur,
        prenom_utilisateur: utilisateur.prenom_utilisateur,
    };
}

export async function getdefis() {
    const Defis = await pb.collection('defis').getFullList();
    return Defis;
}

export async function getQuestions() {
    const Questions = await pb.collection('Questions').getFullList();
    return Questions;
}

export async function getImages() {
    const Images = await pb.collection('Images').getFullList();
    return await Promise.all(Images.map(async (image) => {
        const recordImage = Array.isArray(image.image)
            ? image.image[0]
            : image.image || null;
        return {
            id: image.id,
            nom: image.nom,
            description: image.description_image,
            record: image,
            recordImage,
            url: recordImage ? await getImageUrl(image, recordImage) : null,
        };
    }));
}

export async function getjeux(){
    const Jeux = await pb.collection('Jeux').getFullList();
    return Jeux;
}