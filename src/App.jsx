const Move = () => {
    function mouseMove(){
        alert("MouseMove event ishladi")
        console.log("MouseMove event ishladi")
    }

    return (
        <p onMouseMove={mouseMove}>
            viris purus graeco omittam adolescens movet maximus oporteat viverra efficiantur instructior sententiae
            posidonium appareat quam pertinax sonet suas maximus alienum penatibus numquam unum congue posidonium
            molestiae urna consectetur salutatus quidam
        </p>
    )
}


export const App = () => {
    return (
        <section>
            <Move/>
        </section>
    )
}