const GetsessiontoId = new Map();

function setsession(id,user){
 GetsessiontoId.set(id,user)
}
function getsession(id){
 return GetsessiontoId.get(id)
}
 module.exports={
    setsession,
    getsession
 }