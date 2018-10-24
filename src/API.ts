import { API_URL } from './config';

const API = {
    GetMonsters: () => GetMonsters(),

    GetMonster: (id: string) => GetMonster(id)
}

async function GetMonsters() {
    const webPath = 'monsters';
    return fetchs('get', webPath);
}

function GetMonster(id: string) {
    const webPath = 'monsters/' + id;
    return fetchs('get', webPath);
}

async function fetchs(type: string, path: string) {
    return await fetch(API_URL + path, {
        method: type,
    }).then(function (response) {
        return response.json();
    }).then(function (data) {
        return data;
    });
}

export default API;