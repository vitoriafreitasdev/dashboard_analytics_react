
type propsTypes = {
    totalNumber: number, media: number, lower: number, down_grade: number, months: number[], position: number

}
const MoreInfo = ({totalNumber, media, lower, down_grade, months, position}: propsTypes) => {
  return (
    <div className="data-container">
                    <h2>Usuários ativos</h2>
                    <p>Mês com mais usuário: {totalNumber}</p>
                    <p>Média: {media}</p>
                    <p>Mais baixo: {lower}</p>
                    <p>Maior queda de seguidores: {down_grade} no mês: {months[position]} para o mês: {months[position + 1]}</p>
                </div>
  )
}

export default MoreInfo