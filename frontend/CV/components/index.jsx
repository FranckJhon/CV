import React from 'react'
import styles from "../styles/CV.scss"

const index = () => {
    return (
        <div className={styles.Main}>
            <div className={styles.Encabezado}>
                <div className={styles.Imagen}>
                    <img className={styles.Imagen1} src="/imagenes/ri_1.png"/>
                </div>
                <div className={styles.Personal}>
                    <span className={styles.span_Personal}>
                        <p>Francisco Javier</p>
                        <p>Perez Galindo</p>
                        <p>Ingenieria en Telematica</p>
                        <p>Universidad de Colima</p>
                    </span> 
                </div>    
                <div className={styles.Contacto}>
                    <span className={styles.span_Contacto}>
                        <p>Soberania #1535</p>
                        <p>Unidad Antorchista</p>
                        <p>3121534311 | 3121239405</p>
                        <p>fperez7@ucol.mx</p>  
                    </span>
                </div>
            </div>
            <div className={styles.Cuerpo}>
                <table>
                    <td>
                        <div className={styles.Apt1}>
                        <h3>Lenaguajes de programación</h3>
                        <table>
                            <td>
                                <p>
                                    ֍ HTML(Básico) <br/>
                                    ֍SCSS (Básico) <br/>
                                    ֍JS (Básico) <br/>
                                    ֍React (Básico) <br/>
                                </p> 
                            </td>
                            <td>
                                <p>
                                    ֍ MySQL (Básico) <br/>
                                    ֍ C# (Básico) <br/>
                                    ֍ C++ (Básico) <br/>
                                </p>
                                
                            </td>
                        </table>
                        </div>
                        <div className={styles.Apt2}>
                            <h3>Frameworks & Tools</h3>
                            <p>
                                ֍ Visual Estudio <br/>
                                ֍ Git <br/>
                                ֍ Construc 2 <br/>
                                ֍ Office Tools <br/>
                                ֍ Code::Blocks <br/>
                                ֍ Sublime Text <br/>
                            </p> 
                        </div>
                        <div className={styles.Apt3}>
                            <h3>Idiomas</h3>
                            <p>
                                ֍ Español Nativo <br/>
                                ֍ Ingles Básico <br/>
                            </p>
                            
                        </div>
                    </td>
                    <td>
                        <div className={styles.Info}>
                            <h3>Presentación</h3>
                            <p>Pasante de Ingeniero en Telemática con gusto por las tecnologías de información, proactivo, con habilidad para el trabajo bajo
                                presión, buena actitud para el trabajo en equipo e ingenioso para
                                la resolución de problemas.</p>
                            <hr/>
                            <h3>Experiencia</h3>
                            <p>
                                ֍ AT&T COMUNICACIONES DIGITALES S.A. DE C.V. —
                                Ingeniero de servicios (17 de Octubre 2019 al 20 de
                                Enero 2020) <br/>
                                Jefe Directo: Carlos Omar Padilla Sandoval <br/>
                                Av. Constitución 1452 jardines de Vista Hermosa <br/>
                                Tel: 3121653788 | cp7870@att.com <br/> <br/>
                                ֍ Dirección de Desarrollo Telemático, Instituto Colimense
                                para la Sociedad de la Información y el Conocimiento
                                I.C.S.I.C. — <br/> ( 11 de Enero 2019 a 11 de Junio 2019) <br/>
                                Jefe Directo: ING. Carlos Rodríguez Díaz <br/>
                                3er. Anillo Periférico esq. Ejercito Mexicano, Col. El Diezmo <br/>
                                Tel: 3121550435 <br/> <br/>
                                ֍ Instalación de azulejos y trabajos de Albañilería Galindo
                                —Ayudante (Enero 2015 a Diciembre 2018) <br/>
                                Jefe Directo: Raúl Galindo <br/>
                                Tel: 3121227936 <br/> <br/>
                                ֍ Vivero — Bodega (Enero 2014 a Diciembre 2014) <br/>
                                Jefe Directo: Jackie Patton Inukai <br/>
                                Tel: 6671320561</p>
                        </div>
                    </td>
                </table>
            </div>
        </div>
    )
}

export default index
