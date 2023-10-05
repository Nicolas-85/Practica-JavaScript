// fetch('https://jsonplaceholder.typicode.com/todos')
//     .then((response)=> response.json())
//         .then((json)=>{
//             tareas = json;
//             console.log(tareas);
//         })
//     .catch((error)=>{console.log(error)})

const getTask = async ()=>{
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos');
        const json = response.json();
        console.log(json);
        tareas = json;
    } catch (error) {
        console.log(error);        
    }
}
getTask();