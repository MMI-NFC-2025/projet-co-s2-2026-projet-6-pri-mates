import { getNomUtilisateur, getdefis} from './backend.mjs';

try{
    const Utilisateurs = await getNomUtilisateur();
    console.table(Utilisateurs);
} catch (e) {
    console.error(e);
}

try {
    const Defis = await getdefis();
    console.table(Defis);
} catch (e) {
    console.error(e);
}