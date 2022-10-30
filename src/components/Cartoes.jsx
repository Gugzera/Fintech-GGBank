import styles from '../css/Cartoes.module.css'
import ConjutoCartoesGrande from '../img/ConjutoCartoesGrande.png'
function cartoes(){
    return (
    <>
       
       <section className={styles.corpo_cartoes}>
            <section className={styles.cartoes_img}>
                <div>
                    <img src={ConjutoCartoesGrande} alt="alguns dos nossos cartões personalizados" />
                </div>
            </section>

            <section className={styles.cartoes_texto}>

                <div className={styles.cartao}>
                    <div className={styles.cartaoTxt}><p>Oferecemos <i className={styles.vermelho}> cartões personalizados</i>, basta apenas fazer sua escolha, e seu cartão chegará em sua casa, com a imagem que desejar, <i className={styles.vermelho}> cartões sem anuidade</i>, e descontos em diversos segmentos dos mundos dos games, como na compra de <i className={styles.vermelho}>gifts cards</i>, jogos online e muito mais</p></div>
                </div> 
            </section>
       </section>
       </>
    );
}
export default cartoes;