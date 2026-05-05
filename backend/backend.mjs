import PocketBase from 'pocketbase';
export const pb = new PocketBase('https://tacita-pb.charlottemettetal.fr/_/');

export async function getImageUrl(record, recordImage) {
    return pb.files.getURL(record, recordImage);
}