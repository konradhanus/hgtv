import React, {Component} from 'react';
class Form extends Component {

render() {
    return (

 <div className="col-md-9">
              <div className="col-md-12 paddingZero">
                <h3
                  className="podsumowanie"
                  style={{
                  fontSize: "20px"
                }}>
                  <b>Dane kontaktowe</b>
                </h3>
              </div>
              <div className="col-md-6 paddingZero">
                <label className="labelForm">
                  <div className="inputPadding">Imię*</div>
                   <input
                    type="text"
                    name="imie"
                    className="inputForm"
                   /> 
                </label>
                <label className="labelForm">
                  <div className="inputPadding">Nazwisko*</div>
               <input
                    type="text"
                    name="nazwisko"
                    className="inputForm"
                  />
                </label>
                <label className="labelForm">
                  <div className="inputPadding">Telefon*</div>
                <input
                    type="text"
                    name="telefon"
                    className="inputForm"
                  />
                </label>
                <label className="labelForm">
                  <div className="inputPadding">E-mail</div>
                <input
                    type="text"
                    name="email"
                    className="inputForm"
                 />
                </label>
              </div>
              <div className="col-md-6 paddingZero">
                <label className="labelForm">
                  <div className="inputPadding">Miejscowość</div>
              <input
                    type="text"
                    name="miejscowosc"
                    className="inputForm"
                />
                </label>
                <label className="labelForm">
                  <div className="inputPadding">Ulica</div>
                <input
                    type="text"
                    name="ulica"
                    className="inputForm"
             />
                </label>
                <label className="labelForm">
                  <div className="inputPadding">Numer domu / mieszkania</div>
                <input
                    type="text"
                    name="numerDomuMieszkania"
                    className="inputForm"
               />
                </label>
              </div>
              <div className="col-md-6 paddingZero poleObowiazkowe">
                {" "}
                <b
                  style={{
                  paddingLeft: "10px",
                  fontWeight: "bolder"
                }}>
                  *</b>
                Pole obowiązkowe
              </div>

              <div className="marginBottom4 col-md-12 backgroundTextArea">
                Jestem zainteresowany / zainteresowana zamówieniem usług PGTV Sp. z o.o. w
                przedstawionej obok konfiguracji i podanej lokalizacji. Proszę o kontakt z
                Państwa przedstawicielem.
              </div>
              <div className="col-md-6 paddingZero"></div>
              <div className="marginBottom4 col-md-12 backgroundTextArea">

                <div class="wpb_column vc_column_container vc_col-sm-4">
                  <div class="vc_column-inner colorGradient height100">
                    <div class="innerGradient">
                     {/* <img
                        src={this.state.zgodaMarketingowa
                        ? "http://pgtv.pl/wp-content/plugins/wp-pgtv-kalkulator/assets/img/checkbox_checked" +
                          ".png"
                        : "http://pgtv.pl/wp-content/plugins/wp-pgtv-kalkulator/assets/img/checkbox_uncheck" +
                          "ed.png"}
                        className="button30px zgoda"
                        onClick={this
                        .clickZgodaMarketingowa
                        .bind(this)}/>*/}

                      Wyrażam zgodę na przetwarzanie moich danych osobowych dla potrzeb niezbędnych do
                      realizacji procesu rejestracji zgłoszenia przez firmę PGTV sp. z o.o. we
                      Wrocławiu (zgodnie z Ustawą z dnia 29.08.1997 roku o Ochronie Danych Osobowych;
                      tekst jednolity: Dz. U. 2016 r. poz. 922)

                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6 paddingZero"></div>
              <div className="col-md-12 paddingZero marginTop5">
              {/* <ReCAPTCHA
                  ref="recaptcha"
                  sitekey="6LexUx4UAAAAAGrGDKtVeKqSHkIydT0-0iAAt0OJ"
                  onChange={this
                  .onChangeReCAPTCHA
                  .bind(this)}/> */}
              </div>

              <div className="col-md-6 paddingZero"></div>

              <div className="col-md-4 paddingZero"></div>
              <div className="col-md-4 paddingZero"></div>
              <div className="col-md-4 paddingZero"></div>

              <div className="col-md-12">
                <br/><br/>
                <br/>
              </div>

            </div>)}}

            export default Form;