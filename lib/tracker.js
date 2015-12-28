var Promise = require('bluebird');
var util = require('util');
var tracker = Promise.promisifyAll(require('pivotaltracker'));
var client = new tracker.Client();

console.log('------------------------------------------');
// console.log(util.inspect(client.project(1492890).epics, {showHidden: true, depth: null}));
console.log(client.project(1492890).epics.inspect());
console.log('------------------------------------------');

function getEpicsAsync(project) {
    return new Promise(function(resolve, reject) {
        client.project(project).epics.all(function(err, epics) {
            if (err) {
                reject(err);
            } else
                resolve(epics);
        });
    });
}
var asyncEpic = getEpicsAsync(1492890).then(function(result) {
    console.log(result);
}).catch(function(damnit) {
    console.log(damnit);
});


// var gripen_epics = asyncEpic.then(function(content) {
//     console.log(content);
// });

module.exports = {
    getEpicsAsync: getEpicsAsync
};
