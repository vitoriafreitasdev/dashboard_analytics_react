
export function calc(data: number[]){
    
    const totalNumber = data.reduce((t, c) => c + t, 0)
    const media = (totalNumber / data.length).toFixed(2)

    return {media, totalNumber}
}