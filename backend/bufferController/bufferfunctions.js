const teamHouses = require("../assests/data");

updateBuffer= (data, batch,score)=>{
    let count=0;
    let tempScore = {
        'Gunners': 0,
        'Culers': 0,
        'Red Devils': 0,
        'Galacticos': 0
    };

    for (let team of data) {
        //temp condition for top 16 only
        if(count>=16) break;
        count++

        const house= teamHouses[batch][team.teamName];
        tempScore[house]+=Number(team.score);
    }

    for(let key in tempScore )
        score[key][batch]= tempScore[key];

    return {data, score};
};

module.exports= updateBuffer;