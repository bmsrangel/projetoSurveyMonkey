const baseURL = 'https://api.surveymonkey.com/';
const token = 'eaP1DmlrVqcdtnhOS8cse2zJAOtJvs0VAuXxoduo5Oq7Do7L0N2n6-.TcfRybkyIYn5dY82g.MYMiniJ8Vgj8dyMPUcP-.E-DBRCzKBy1tm29boii.U4toRJX0-yu887';

function getListaPesquisas() {
    let url = baseURL + 'v3/surveys'
    let req = {
        method: 'GET',
        headers: {
            'Authorization': 'Bearer ' + token,
        },
        mode: 'cors',
    };
    return $.ajax(url, req)
}

// async function getListaPesquisas() {
//     let url = baseURL + 'v3/surveys'
//     let req = new Request(url, {
//         method: 'GET',
//         headers: h,
//         mode: 'cors'
//     });
//     var resp;
//     await fetch(req)
//         .then((response) => {
//             if (response.ok) {
//                 return response.json();
//             }
//             else {
//                 throw new Error('BAD HTTP STUFF');
//             }
//         })
//         .then((jsonData) => {
//             // console.log(jsonData)
//             resp = jsonData;
//             return jsonData;
//         })
//         .catch((err) => {
//             console.log('ERROR: ', err.message);
//         });
//     return resp;
// }
function getRespostas(id_pesquisa) {
    let url = baseURL + 'v3/surveys/' + String(170936208) + '/responses';
    let req = new Request(url, {
        method: 'GET',
        headers: h,
        mode: 'cors'
    });
    fetch(req)
        .then((response) => {
            if (response.ok) {
                return response.json();
            }
            else {
                throw new Error('BAD HTTP STUFF');
            }
        })
        .then((jsonData) => {
            console.log(jsonData)
        })
        .catch((err) => {
            console.log('ERROR: ', err.message);
        });

}
function getDetalhesResposta(id_pesquisa, id_resposta) {
    let url = baseURL + 'v3/surveys/' + String(id_pesquisa) + '/responses/' + String(id_resposta) + '/details';
    let req = new Request(url, {
        method: 'GET',
        headers: h,
        mode: 'cors'
    });
    fetch(req)
        .then((response) => {
            if (response.ok) {
                return response.json();
            }
            else {
                throw new Error('BAD HTTP STUFF');
            }
        })
        .then((jsonData) => {
            console.log(jsonData)
        })
        .catch((err) => {
            console.log('ERROR: ', err.message);
        });

}