
const btn = document.querySelector(".btn-search");
btn.addEventListener('click', async (event) => {
    const searchName = document.querySelector(".rapper_search").value;
    if (searchName) {
        const rapperName = await getRapper(searchName)
        displayBName(rapperName)
    }
    else
        alert('please enter a name')
})

async function getRapper(name) {
    try {
        const resp = await fetch(`https://rap-names-9n76.onrender.com/api/${name}`)
        const data = await resp.json();
        console.log(data);
        return data.birthName;
    }
    catch (err) {
        console.error(`Error getting name: `, err.message);
    }
}

function displayBName(name) {
    document.querySelector(".birth_Name").innerHTML = `Birth Name: ${name}`;
}

function resetBName() {
    document.querySelector(".birth_Name").innerHTML = 'Birth Name:';

}


