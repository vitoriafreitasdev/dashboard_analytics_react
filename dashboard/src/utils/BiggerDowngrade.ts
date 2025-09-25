


export function downgrade(data: number[]){
    let position = 0
    let downgrade = data[0] - data[1]

    for(let i = 0; i < data.length; i++){
        const current = data[i] - data[i + 1]

        if (current > downgrade){
            downgrade = current
            position = i 
        }
    }
    const down_grade = downgrade.toFixed(2)
    return {down_grade, position}

}


