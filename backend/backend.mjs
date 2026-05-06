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