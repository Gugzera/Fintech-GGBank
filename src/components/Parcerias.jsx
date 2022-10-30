import styles from '../css/Parcerias.module.css'
import logoPedro from '../img/logoPedro.svg'
import logoLeandro from '../img/logoLeandro.svg'
import steamLogo from '../img/steamLogo.png'
import Dell from '../img/Dell.png'
import dumativa from '../img/dumativa.png'
import fluxo from '../img/fluxo.png'
import furia from '../img/furia.png'
import INTZ from '../img/INTZ.png'
import riot from '../img/riot.png'
import eGiftsBazaar from '../img/logo_eGiftsBazaar.png'
import mastercard from '../img/mastercard.png'

const openInNewTab = url => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

function Parcerias(){
    return (
    <>
       
       <section className={styles.corpo_parceiros}>
                <h2>Atuais Parceiros</h2>
            <section className={styles.parceirosAtuais}>            
                <div className={styles.parceiros_img}>
                    <img onClick={() => openInNewTab('#')} src={logoPedro} alt="logo HA" />
                </div>
                <div className={styles.parceiros_img}>
                    <img onClick={() => openInNewTab('#')} src={logoLeandro} alt="logo HA" />
                </div>
                
            </section>
            <h3>No futuro, buscamos ser parceiros de diversas organizações e lojas, como:</h3>
            <section className={styles.parceiros_logos}>
                    <article className={styles.logosCima}>
                        <div className={styles.parceirosLogosMarcas}>
                            <img onClick={() => openInNewTab('https://intz.com.br')} src={INTZ} alt="logo time intz" />
                        </div>
                        <div className={styles.parceirosLogosMarcas}>
                            <img onClick={() => openInNewTab('https://furia.gg')} src={furia} alt="logo time furia" />
                        </div>
                        <div className={styles.parceirosLogosMarcas}>
                            <img onClick={() => openInNewTab('https://www.riotgames.com/pt-br')} src={riot} alt="logo empresa riot games" />
                        </div>
                        <div className={styles.parceirosLogosMarcas}>
                            <img onClick={() => openInNewTab('https://www.egiftsbazaar.com/home/index.html')} src={eGiftsBazaar} alt="logo loga e gifts bazaar" />
                        </div>
                        <div className={styles.parceirosLogosMarcas}>
                            <img onClick={() => openInNewTab('https://dumativa.com.br/')} src={dumativa} alt="logo empresa de games brasileira dumtativa" />
                        </div>
                    </article>
                    <article className={styles.logosBaixo}>

                        <div className={styles.parceirosLogosMarcas}>
                            <img onClick={() => openInNewTab('https://loja.fluxo.gg/')} src={fluxo} alt="logo time fluxo" />
                        </div>
                        <div className={styles.parceirosLogosMarcas}>
                            <img onClick={() => openInNewTab('https://www.dell.com/pt-br')} src={Dell} alt="logo empresa Dell" />
                        </div>
                        <div className={styles.parceirosLogosMarcas}>
                            <img onClick={() => openInNewTab('https://www.mastercard.com.br/pt-br.html')} src={mastercard} alt="logo empresa de cartões mastercard" />
                        </div>
                        <div className={styles.parceirosLogosMarcas}>                          
                          <img onClick={() => openInNewTab('https://store.steampowered.com/?l=portuguese')} className={styles.Steam} src={steamLogo} alt="logo loja de jogos online steam" /> 
                        </div>
                    </article>
            </section>
       </section>
       </>
    );
}
export default Parcerias;