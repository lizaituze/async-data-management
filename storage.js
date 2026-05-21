async function saveToLocal(data){

try{

localStorage.setItem(
"userPosts",
JSON.stringify(data)
);

console.log(
"Saved to Local Storage"
);
}

catch(err){

console.error(err);

}

}

export default saveToLocal;
