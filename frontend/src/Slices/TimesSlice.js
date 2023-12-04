const initialTimes = [{nome: 'Pro 1', sigla: 'P1'},
{nome: 'Pro 2', sigla: 'P2'}];

export default function timesReducer(times = initialTimes /*state*/, action){
switch(action.type){
case 'add_time': /*payload time */
let proxId = 1 + times.map(p => p.id).reduce((x, y) => Math.max(x,y));
return times.concat([{...action.payload, id: proxId}]); 
case 'update_time' : /* payload: time*/
  let index = times.map(p => p.id).indexOf(action.payload.id);
  let timesUpdated = times.slice();
  timesUpdated.splice(index, 1, action.payload);
  return timesUpdated;
case 'delete_time': /* payload: id*/
return times.filter((p) => p.id !== action.payload);
default:
  throw times;
}
}
