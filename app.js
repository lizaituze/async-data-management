import { fetchPosts }
from "./api.js";

import saveToLocal
from "./storage.js";

async function initApp(){

let posts =
await fetchPosts();

let topFive =
posts.slice(0,5);

topFive.forEach(
(post,index)=>{

console.log(
`${index+1}.`
);

console.log(
`Title: ${post.title}`
);

console.log(
`Body: ${post.body}`
);

console.log(
"----------------"
);

}
);

await saveToLocal(
topFive
);

}

initApp();
