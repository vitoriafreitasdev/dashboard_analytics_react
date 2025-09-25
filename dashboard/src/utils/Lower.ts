
export function Lower(data: number[]){

    let lower = data[0]
    
    for(let i = 0; i < data.length; i++){
        if (data[i] < lower){
            lower = data[i]
        }
    }
    return lower
}



