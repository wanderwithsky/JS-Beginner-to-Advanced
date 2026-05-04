// fetch api -> data ko mangana internet pe kahi se

fetch("https://randomuser.me/api?results=5")
    // .then((rawdata) => {
    //     return rawdata.json()
    // })
    // .catch((err) => {
    //     console.log(err);
    // })

    .then((raw) => raw.json())
    .then((data) => console.log(data.results))