import PocketBase from 'pocketbase';
export const pb = new PocketBase('https://tacita-pb.charlottemettetal.fr:443');

export async function getImageUrl(record, recordImage) {
    return pb.files.getURL(record, recordImage);
}

export async function getPseudo() {
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



export async function getUtilisateur() {
    if (!pb.authStore.isValid || !pb.authStore.model?.id) {
        return await pb.collection('utilisateur').getOne('h2q4fjfbfazkgle');
    }

    try {
        return await pb
            .collection('utilisateur')
            .getFirstListItem(`compte_id="${pb.authStore.model.id}"`);
    } catch (error) {
        console.error('Profil public introuvable :', error);
        return await pb.collection('utilisateur').getOne('h2q4fjfbfazkgle');
    }
}

export async function getdefis() {
    return await pb.collection('defis').getFullList();
}

export async function updateProfil(id, dataToUpdate) {
    const formData = new FormData();

    if (dataToUpdate.pseudo) {
        formData.append('pseudo', dataToUpdate.pseudo);
    }
    if (dataToUpdate.photo_profil) {
        formData.append('photo_profil', dataToUpdate.photo_profil);
    }
    if (dataToUpdate.banniere) {
        formData.append('banniere', dataToUpdate.banniere);
    }

    return await pb.collection('utilisateur').update(id, formData);
}