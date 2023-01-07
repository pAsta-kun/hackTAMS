let backgroundColors = ["#47A639", "#4398cd", "#d82d17", "#edcb1f"];
let allTiles = document.querySelectorAll('.tile');
let tileAmount;

const wrapper = document.getElementById("tiles");
let columns = Math.floor(document.body.clientWidth / 50),
    rows = Math.floor(document.body.clientHeight / 50);

    wrapper.style.setProperty("--columns", columns);
    wrapper.style.setProperty("--rows", rows);

const createTile = index => {
    const tile = document.createElement("div");
    tile.classList.add("tile");
    return tile;
}

const createTiles = quantity => {
    Array.from(Array(quantity)).map((tile, index) => {
        wrapper.appendChild(createTile(index));
    })
}

createTiles(columns * rows);

const createGrid = () => {
    wrapper.innerHTML = "";

    columns = Math.floor(document.body.clientWidth / 50);
    rows = Math.floor(document.body.clientHeight / 50);
    allTiles = document.querySelectorAll('.tile');

    createTiles(columns * rows);
    colorChange();
}

window.onresize = () => createGrid();

function backgroundChange()
{
    
    let allTiles = document.querySelectorAll('.tile');
    tileAmount = allTiles.length;
    let colorAmount = backgroundColors.length;
    let randomTile = Math.floor(Math.random()* tileAmount - 1) + 1;
    let randomColor = Math.floor(Math.random()* colorAmount-1 ) + 1;

    for(let i = 0; i < 2; i++)
    {
        allTiles[randomTile].style.background = backgroundColors[randomColor];
        allTiles[randomTile].setAttribute("class", "changed");
    }
}
function removeColor() {
    let changed = document.querySelectorAll('.changed');
    let changedAmount = changed.length;
    let randomChanged = Math.floor(Math.random()* changedAmount - 1) + 1;
    changed[randomChanged].style.background = '#141414';
}
function colorChange(display)
{
    if(display == "off")
    {
        console.log('test');
        return;
    }
    else 
    {
        console.log('test2');
        let backgroundChangeTimer = setInterval(function() {
            backgroundChange()
        }, 1500);

        let removeColorTimer = setInterval(function() {
            removeColor()
        }, 1000);
    }


}


let callback = (entries, observer) => {
    entries.forEach((entry) => {
        //console.log(entry);
        if (entry.isIntersecting) {
            entry.target.classList.remove('hidden');
            entry.target.classList.add('show');
            colorChange();
        }
        else 
        {
            //entry.target.removeAttribute('id', 'tiles');
        
        }
        

    });
};
let observer = new IntersectionObserver(callback);
let target = document.getElementById('sectionOne');
let targetTwo = document.getElementById('sectionTwo');
let targetThree = document.getElementById('sectionThree');
observer.observe(target);
observer.observe(targetTwo);
observer.observe(targetThree);
