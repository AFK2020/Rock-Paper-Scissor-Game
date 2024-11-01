
async function fetchData()
{

    try{
        
        const PokemonName= document.getElementById("name").value.toLowerCase();
        const response=await fetch(`https://pokeapi.co/api/v2/pokemon/${PokemonName}`);
        if(!response.ok)
        {
            throw new Error("Pokemon not found");
        }
        else{
            const data= await response.json();
            const Pokemon_image= data.sprites.front_default;
            const Image=document.getElementById("Poke_img");
            Image.src=Pokemon_image;
            Image.style.display="block";
        }
    }
    catch(error)
    {
        console.error(error);
    }
}