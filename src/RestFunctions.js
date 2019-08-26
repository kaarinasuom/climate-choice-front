const url = 'https://climate-choice.herokuapp.com/';
const proxyurl = "https://cors-anywhere.herokuapp.com/";

export function fetchall(callback) {
    fetch(proxyurl + url + "tasks", {accept: 'application/json'})
        .then(function(response) {
            response.json().then(function(json) {
                if (response.status >= 500)
                    callback(json, response.status);
                else
                    callback(json);
            });
        });
}

export function fetchallchoices(callback) {
    fetch(proxyurl + url + "relations", {accept: 'application/json'})
        .then(function(response) {
            response.json().then(function(json) {
                if (response.status >= 500)
                    callback(json, response.status);
                else
                    callback(json);
            });
        });
}


export function createUser(id) {
    var user = '{"uid": "' + id + '"}';
    fetch(proxyurl + url + "users",  {
        method: 'POST',
        headers: {'Content-Type': 'application/json' },
        body: user}
    );
}


export function createRelation(data) {
    var relation = '{"choice": "' + data.choice + '", "user": {"uid": "' + data.user_id + '"}, "task": {"id": ' + data.task_id + '}}';
    fetch(proxyurl + url + "relations",  {
        method: 'POST',
        headers: {'Content-Type': 'application/json' },
        body: relation}
    );
}


export function fetchAllRelations(callback) {
    fetch(proxyurl + url + "relations", {accept: 'application/json'})
        .then(function(response) {
            response.json().then(function(json) {
                if (response.status >= 500)
                    callback(json, response.status);
                else
                    callback(json);
            });
        });
}

export function fetchTask(id, callback) {
    fetch(proxyurl + url + "tasks/" + id, {accept: 'application/json'})
        .then(function(response) {
            response.json().then(function(json) {
                if (response.status >= 500)
                    callback(json, response.status);
                else
                    callback(json);
            });
        });
}

export function fetchTasksIds(callback) {
    fetch(proxyurl + url + "tasks/allids" , {accept: 'application/json'})
        .then(function(response) {
            response.json().then(function(json) {
                if (response.status >= 500)
                    callback(json, response.status);
                else
                    callback(json);
            });
        });
}

export function changeChoice(id, data) {
    return fetch(proxyurl + url + 'relations/' + id, {
        method: 'PUT',
        body: JSON.stringify(data),
        headers: {'Content-Type': 'application/json'}
    }).then(res => {
        return res;
    }).catch(err => err);
}

export function deleteFromRelations(id) {
    return fetch(proxyurl + url + 'relations/' + id, {
        method: 'DELETE'
    }).catch(err => err);
}
//
// export function createTask(task, callback) {
//     fetch(apiurli+'tasks/',  {
//         method: 'POST',
//         headers: {'Content-Type': 'application/json' },
//         body: JSON.stringify(task)
//     })
//         .then((function(response) {
//             callback();
//         }));
// }
//
// export function updateTask(task, callback) {
//     fetch(apiurli+'tasks/'+task.id,  {
//         method: 'PUT',
//         headers: {'Content-Type': 'application/json' },
//         body: JSON.stringify(quote)
//     })
//         .then((function(response) {
//             callback();
//         }));
// }