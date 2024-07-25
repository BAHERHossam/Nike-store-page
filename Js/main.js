document.addEventListener('DOMContentLoaded', function() {
    document.body.style.zoom = `125%`;
});

const models = [
    "./assets/1.glb",
    "./assets/2.glb",
    "./assets/3.glb",
    "./assets/4.glb",
    "./assets/5.glb",
    "./assets/6.glb"
];

function changeModel(modelNumber) {


    let x = 1;
    for (x > 0; x < 7; x++) {
        const modelElementVisible = document.getElementById(`m${x}`);
        modelElementVisible.style.visibility = "hidden";
        modelElementVisible.style.left = "700px";
        modelElementVisible.style.width = "0px";
        document.getElementById(`btn${x}`).style.backgroundColor = "#D9D9D9"

    }

    const modelElementVisible = document.getElementById(`m${modelNumber}`);

    modelElementVisible.style.visibility = "visible";
    modelElementVisible.style.left = "10px";
    modelElementVisible.style.width = "50%";


    switch (modelNumber) {
        case 1:
            document.getElementById(`bgCircle`).style.background = "-webkit-radial-gradient(circle, #3B556B 0%, rgba(255,255,255,0) 35%)";
            document.getElementById(`h2`).style.color = "#D17E65"
            document.getElementById(`navColor`).style.background = "linear-gradient(to right, #f7947c,#a0beeb)"
            document.getElementById(`h1`).innerHTML = `NIKE SB Dunk`
            document.getElementById(`h2`).innerHTML = `High Pro QS <br>'Hawaii Maui Wowie'`
            document.getElementById(`price`).innerHTML = `299.99 $`
            document.getElementById(`description`).innerHTML = `The Nike SB Dunk High Pro QS 'Hawaii Maui Wowie'embodies tropical flair withits vibrant floral print and hidden stash pocket.Designed for skaters, itfeatures a durable canvas upper, padded collar, andZoom Air cushioning foroptimal support and comfort. A standout choice forboth skating and streetstyle.`
            document.getElementById(`btn`).style.backgroundColor = "#D17E65"
            document.getElementById(`btn1`).style.backgroundColor = "#D17E65"
            document.getElementById(`btn1`).style.backgroundColor = "#D17E65"

            break;



        case 2:
            document.getElementById(`bgCircle`).style.background = "-webkit-radial-gradient(circle, #71D68F 0%, rgba(255,255,255,0) 35%)";
            document.getElementById(`h2`).style.color = "#A0A0A0"
            document.getElementById(`price`).innerHTML = `179.99 $`

            document.getElementById(`navColor`).style.background = "linear-gradient(to right, #A0A0A0,#71D68F)"

            document.getElementById(`h1`).innerHTML = `NIKE Air Force 1`
            document.getElementById(`h2`).innerHTML = `'07 LX <br>'Light Smoke Grey'`
            document.getElementById(`description`).innerHTML = `The Nike Air Force 1 '07 LX 'Light Smoke Grey' offers a fresh take on a classic. With its premium leather upper and light smoke grey colorway, this sneaker exudes sophistication. Perforations on the toe box enhance breathability, while the encapsulated Air-Sole unit delivers iconic comfort and impact protection.`
            document.getElementById(`btn`).style.backgroundColor = "#A0A0A0"
            document.getElementById(`btn2`).style.backgroundColor = "#A0A0A0"
            break;




        case 3:
            document.getElementById(`bgCircle`).style.background = "-webkit-radial-gradient(circle, #5C484F 0%, rgba(255,255,255,0) 35%)";
            document.getElementById(`h2`).style.color = "#BBE99E"
            document.getElementById(`price`).innerHTML = `249.99 $`


            document.getElementById(`navColor`).style.background = "linear-gradient(to right, #BBE99E,#5C484F)"

            document.getElementById(`h1`).innerHTML = `NIKE SB Dunk`
            document.getElementById(`h2`).innerHTML = `LOW<BR>'De La Soul'`
            document.getElementById(`description`).innerHTML = `The DUNK LOW SB DE LA SOUL pays homage to the legendary hip-hop group with vibrant graphics. Crafted with durable leather and suede, this skate shoe features a padded tongue and Zoom Air cushioning for superior comfort and impact protection. A collector’s gem that’s perfect for everyday wear.`
            document.getElementById(`btn`).style.backgroundColor = "#BBE99E"
            document.getElementById(`btn3`).style.backgroundColor = "#BBE99E"
            break;




        case 4:
            document.getElementById(`bgCircle`).style.background = "-webkit-radial-gradient(circle, #857D73 0%, rgba(255,255,255,0) 35%)";
            document.getElementById(`h2`).style.color = "#FFBC2C"
            document.getElementById(`price`).innerHTML = `199.99 $`


            document.getElementById(`navColor`).style.background = "linear-gradient(to right, #FFBC2C,#857D73)"

            document.getElementById(`h1`).innerHTML = `NIKE SB Dunk`
            document.getElementById(`h2`).innerHTML = `LOW<BR>'Dusty Olive'`
            document.getElementById(`description`).innerHTML = `The Nike Dunk Low Dusty Olive brings retro vibes with a modern twist. Featuring a rich suede upper in earthy tones, this sneaker combines durability and style. A cushioned midsole and rubber outsole provide excellent comfort and traction, making it perfect for both streetwear enthusiasts and sneaker collectors.`
            document.getElementById(`btn`).style.backgroundColor = "#FFBC2C"
            document.getElementById(`btn4`).style.backgroundColor = "#FFBC2C"
            break;



        case 5:
            document.getElementById(`bgCircle`).style.background = "-webkit-radial-gradient(circle, #8B8FC9 0%, rgba(255,255,255,0) 35%)";
            document.getElementById(`h2`).style.color = "#ECBB86"

            document.getElementById(`price`).innerHTML = `119.99 $`


            document.getElementById(`navColor`).style.background = "linear-gradient(to right, #ECBB86,#8B8FC9)"

            document.getElementById(`h1`).innerHTML = `NIKE Air Jordan 1`
            document.getElementById(`h2`).innerHTML = `Retro OG High<br>'Skyline Multicolor'`
            document.getElementById(`description`).innerHTML = `Elevate your sneaker game with the Air Jordan 1 Retro High OG 'Skyline'. This iconic silhouette boasts a stunning gradient upper inspired by city skylines, paired with premium leather overlays. Its high-top design offers superior ankle support, while the Air-Sole unit ensures unmatched comfort and performance.`
            document.getElementById(`btn`).style.backgroundColor = "#ECBB86"
            document.getElementById(`btn5`).style.backgroundColor = "#ECBB86"
            break;



        case 6:
            document.getElementById(`bgCircle`).style.background = "-webkit-radial-gradient(circle, #D89898 0%, rgba(255,255,255,0) 35%)";
            document.getElementById(`h2`).style.color = "#BD6262"
            document.getElementById(`price`).innerHTML = `99.99 $`


            document.getElementById(`navColor`).style.background = "linear-gradient(to right, #BD6262,#D89898)"

            document.getElementById(`h1`).innerHTML = `NIKE Revolution`
            document.getElementById(`h2`).innerHTML = `6 NN<br>'PRM'`
            document.getElementById(`description`).innerHTML = `Experience ultimate comfort and style with the NIKE REVOLUTION 6 NN PRM. Featuring a breathable mesh upper and plush foam midsole, this versatile sneaker delivers all-day cushioning and support. Perfect for running or casual wear, its sleek design and premium materials ensure you look great with every step.`
            document.getElementById(`btn`).style.backgroundColor = "#BD6262"
            document.getElementById(`btn6`).style.backgroundColor = "#BD6262"
            break;
    }


}
