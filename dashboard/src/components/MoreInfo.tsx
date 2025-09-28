
type propsTypes = {
    title: string, totalNumber: string, media: string, lower: number, down_grade: string, months: string[], position: number

}
const MoreInfo = ({title, totalNumber, media, lower, down_grade, months, position}: propsTypes) => {
  return (
    <div className="data-container">
                    <h2>{title}</h2>
                    <p>Mês com maior número: {totalNumber}</p>
                    <p>Média: {media}</p>
                    <p>Mais baixo: {lower}</p>
                    <p>Maior queda: {down_grade} no mês: {months[position]} para o mês: {months[position + 1]}</p>
                </div>
  )
}

export default MoreInfo