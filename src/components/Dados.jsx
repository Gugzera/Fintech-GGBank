import styles from '../css/Dados.module.css'
import informacoes from '../img/estatisticas.png'
import cartoesConjunto from '../img/cartoesConjunto.png'
import gamerGirl from '../img/gamerGirl.png'
function dados(){
    return (
    <>
       
       <section className={styles.corpo_dados}>
            <section className={styles.dados_cima}>
                <p className={styles.info_dados}>Atualmente, as marcas mais escolhidas pelos gamers no quesito banco, não tem um segmenteo específico para esse público. E isso nos diferencia dos demais bancos.</p>

                <div>
                    <img src={informacoes} alt="grafico em barras horizontais com informacoes de bancos que os gamers utilizam" />
                </div>
            </section>
            <h2>O que nos diferencia dos demais?</h2>

            <section className={styles.dados_baixo}>

                <div className={styles.cartao}>
                    <div className={styles.cartaoImg}><img src={cartoesConjunto} alt="cartoes ggbank" /></div>
                    <div className={styles.cartaoTxt}><p>Oferecemos cartões personalizados, basta apenas fazer sua escolha, e seu cartão chegará em sua casa, com a imagem que desejar; <br /><br />Temos um aplicativo gameficado, cartões sem anuidade, e descontos em diversos segmentos dos mundos dos games, como na compra de gifts cards, jogos online, etc.</p></div>
                </div>
                <div className={styles.gamerGirl}>
                    <img src={gamerGirl} alt="garota jogando um game" />
                </div>

            </section>
       </section>
       </>
    );
}
export default dados;