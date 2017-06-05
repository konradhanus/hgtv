class PGTV_SUMMARY extends Component{

  constructor(props){
    super(props);
      this.state = this.props.stan;

      jQuery('.edgtf-page-header').hide();
      jQuery('.edgtf-title').hide();
      jQuery('.logoPGTV').show();


  }

 onChangeReCAPTCHA(value){
   
   this.setState({
     keyGoogle: value
   })
    //console.log(value);
  }


  clickButton(){
    this.setState({
      strona: 1
    });
  }

clickZgodaMarketingowa(){
    this.setState({
      zgodaMarketingowa: !this.state.zgodaMarketingowa
    });
}

  imie(e){
  
    this.setState({
      imie: e.target.value 
    })
  }

  nazwisko(e){
    this.setState({
      nazwisko: e.target.value 
    })
  }

  telefon(e){
    this.setState({
      telefon: e.target.value 
    })
  }

  miejscowosc(e){
    this.setState({
      miejscowosc: e.target.value 
    })
  }

  ulica(e){
    this.setState({
      ulica: e.target.value 
    })
  }

  email(e){
    this.setState({
      email: e.target.value 
    })
  }

  numerDomuMieszkania(e){
    this.setState({
      numerDomuMieszkania: e.target.value 
    })
  }
  

  sendButton(){
  

    if((this.state.imie !== "") && (this.state.naziwsko !== "") && (this.state.telefon !== ""))
    {
      var wszystko = this.state;

      

      if(this.state.keyGoogle)
      {
        jQuery.ajax({
            type: 'POST',
            url: 'http://pgtv.pl/wyslij_formularz_zgloszeniowy.php',
            data: wszystko,
            success: function(result){

              console.log(result.status);
              if(result.status !== "")
              {
                window.location.href="http://pgtv.pl/zgloszenie-zostalo-wyslane/";
            
              }
            }
          })
      }

      this.setState({
        keyGoogle: false
      });
      
    }
  }


  render(){

 

    if(this.state.strona === 2)
    {
        scroll(0,0);

    return(
      <div>
        <div className="container">
          <div className="row">
            <div className="col-md-12 tytulGrey">
              <div className="pull-left">Uzupełnij dane osobowe</div>
              <div className="pull-right">[2/2]</div>
              <div className="clear"></div>
              <hr className="wybierzOdpowiedniPakiet" />

            </div>
          </div>
          <div className="row">
            <div className="col-md-9">
              <div className="col-md-12 paddingZero">
                  <h3 className="podsumowanie" style={{fontSize: "20px"}}><b>Dane kontaktowe</b></h3>
              </div>
              <div className="col-md-6 paddingZero">
                <label className="labelForm"><div className="inputPadding">Imię*</div>
                  <input type="text" name="imie" className="inputForm" onChange={this.imie.bind(this)} value={this.state.imie} />
                </label>
                <label className="labelForm"><div className="inputPadding">Nazwisko*</div>
                  <input type="text" name="nazwisko" className="inputForm" onChange={this.nazwisko.bind(this)} value={this.state.nazwisko}/>
                </label>
                <label className="labelForm"><div className="inputPadding">Telefon*</div>
                  <input type="text" name="telefon" className="inputForm" onChange={this.telefon.bind(this)} value={this.state.telefon}/>
                </label>
                <label className="labelForm"><div className="inputPadding">E-mail</div>
                  <input type="text" name="email" className="inputForm" onChange={this.email.bind(this)} value={this.state.email}/>
                </label>
              </div>
              <div className="col-md-6 paddingZero">
                <label className="labelForm"><div className="inputPadding">Miejscowość</div>
                  <input type="text" name="miejscowosc" className="inputForm" onChange={this.miejscowosc.bind(this)} value={this.miejscowosc.imie}/>
                </label>
                <label className="labelForm"><div className="inputPadding">Ulica</div>
                  <input type="text" name="ulica" className="inputForm" onChange={this.ulica.bind(this)} value={this.state.ulica} />
                </label>
                <label className="labelForm"><div className="inputPadding">Numer domu / mieszkania</div>
                  <input type="text" name="numerDomuMieszkania" className="inputForm" onChange={this.numerDomuMieszkania.bind(this)} value={this.state.numerDomuMieszkania}/>
                </label>
              </div>
               <div className="col-md-6 paddingZero poleObowiazkowe">
                {" "} <b style={{ paddingLeft: "10px", fontWeight: "bolder"}}> *</b> Pole obowiązkowe
              </div>
             
              <div className="marginBottom4 col-md-12 backgroundTextArea">
                Jestem zainteresowany / zainteresowana zamówieniem usług PGTV Sp. z o.o. w przedstawionej obok konfiguracji i podanej lokalizacji. Proszę o kontakt z Państwa przedstawicielem.
              </div>
              <div className="col-md-6 paddingZero">
              
              </div>
              <div className="marginBottom4 col-md-12 backgroundTextArea">
                
                  <div class="wpb_column vc_column_container vc_col-sm-4">
                    <div class="vc_column-inner colorGradient height100">
                      <div class="innerGradient">
                          <img src={this.state.zgodaMarketingowa ? "http://pgtv.pl/wp-content/plugins/wp-pgtv-kalkulator/assets/img/checkbox_checked.png" : "http://pgtv.pl/wp-content/plugins/wp-pgtv-kalkulator/assets/img/checkbox_unchecked.png"} className="button30px zgoda" onClick={this.clickZgodaMarketingowa.bind(this)}/>
                            
                              Wyrażam zgodę na przetwarzanie moich danych osobowych dla potrzeb niezbędnych do realizacji procesu rejestracji zgłoszenia przez firmę PGTV sp. z o.o. we Wrocławiu (zgodnie z Ustawą z dnia 29.08.1997 roku o Ochronie Danych Osobowych; tekst jednolity: Dz. U. 2016 r. poz. 922)
                            
                      </div>
                  </div>
                </div>
              </div>
               <div className="col-md-6 paddingZero">
               
              </div>
              <div className="col-md-12 paddingZero marginTop5">
               <ReCAPTCHA ref="recaptcha" sitekey="6LexUx4UAAAAAGrGDKtVeKqSHkIydT0-0iAAt0OJ" onChange={this.onChangeReCAPTCHA.bind(this)}  />
              </div>
             
             
              <div className="col-md-6 paddingZero">

              </div>
             
             
              <div className="col-md-4 paddingZero">

              </div>
              <div className="col-md-4 paddingZero">

              </div>
              <div className="col-md-4 paddingZero">

              </div>
              
              

               <div className="col-md-12">
               <br /><br />
                <br />
              </div>
             
              
         


            </div>
              <div className="col-md-3 paddingZero">
                <input type="button" value="< Cofnij" className="wpcf7-form-control wpcf7-submit padding15" onClick={this.clickButton.bind(this)} />
            <h3 className="podsumowanie"><b>Podsumowanie</b></h3>
            <div className="podsumowanieBox">
              <h4 className="h4podsumowanie"><span className="colorGrey">Umowa:</span> <b>{this.state.wybranyPakiet_miesiace} {this.state.wybranyPakiet_miesiace==12 ? "miesięcy" : "miesiące"}</b></h4>

              <h4 className="h4podsumowanie"><span className="colorGrey">Pakiet: </span> <b>{this.state.wybranyPakiet_name} </b>  <b style={{paddingLeft: "7px"}}> łącznie {this.state.wybranyPakiet_liczbaKanalow+this.state.canalPlusKanaly}  kanałów</b></h4>
              <h4 className="h4podsumowanie"><span className="colorGrey">Internet: </span> <b>{this.state.wybranyPakiet_internet} Mb/s</b></h4>
              <h4 className="h4podsumowanie"><span className="colorGrey">Pakiety tematyczne: </span>
                <b>{this.state.wybranyPakiet_kids ? "Kids": null}</b>
                <b>{this.state.wybranyPakiet_muzyka ? ((this.state.wybranyPakiet_kids ? ", ":  "") + "Muzyka"): null} </b>
                <b>{this.state.wybranyPakiet_sport ? ((this.state.wybranyPakiet_kids || this.state.wybranyPakiet_muzyka  ? ", ":  "") + "Super Sport"): null} </b>
                <b>{this.state.wybranyPakiet_kids || this.state.wybranyPakiet_muzyka || this.state.wybranyPakiet_kids ? null: "Nie"} </b>
              </h4>
              <h4 className="h4podsumowanie"><span className="colorGrey">Pakiety Premium: </span>
                <b>
                {this.state.canalPlus == 0 ? "Nie": null }
                {this.state.canalPlus == 1 ? "Canal + Select ": null }
                {this.state.canalPlus == 2 ? "Canal + Prestige ": null }
               </b></h4>
              <h4 className="h4podsumowanie"><span className="colorGrey">Multiroom:</span> <b>
                {
                  this.state.multiroomLiczba != 0 ?
                   this.state.multiroomLiczba == 1 ? ("+"+(parseInt(this.state.multiroomLiczba))+" Telewizor") : ("+"+(parseInt(this.state.multiroomLiczba))+" Telewizory")
                    :
                    "Nie"} </b></h4>
              <h4 className="h4podsumowanie"><span className="colorGrey">E-faktura: </span> <b>{this.state.wybranyPakiet_faktura ===  false ? "Nie (5 zł/mc)" : "Tak (bezpłatnie)"}</b></h4>
              <h4 className="h4podsumowanie"><span className="colorGrey">Dekoder:</span> <b>{this.state.dekoderCena} zł/mc</b></h4>
              <h4 className="h4podsumowanie"><span className="colorGrey">Opłata instalacyjna:</span> <b>{this.state.oplataInstalacyjna[this.state.wybranyPakiet_miesiace]} zł</b></h4>
              { /*}<h4 className="h4podsumowanie"><span className="colorGrey">Kominikat:</span><br />

              <div className="komunikat">{this.state.wybranyPakiet_komunikat}</div></h4>
              <div className="sprzedawca"></div>
              <div className="clear paddingTop200"></div> */ }

            </div>

            <div className={ this.state.wybranyPakiet_miesiace == "12" ? "hidden" : "podsumowanieBox marginTop"}>

              <div className="malaCena">Przez pierwsze 3 miesiące:</div>  
              <h2 className="cenaKolor">
                 {this.state.wybranyPakiet_faktura ===  false ?
                  (parseFloat(this.state.wybranyPakiet_cena2)+parseFloat(5)+parseFloat(this.state.dekoderCena)+parseFloat(this.state.canalPlusCena0)+(parseFloat(this.state.multiroomCena)*parseFloat(this.state.multiroomLiczba))).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, '$1,') :
                  (parseFloat(this.state.wybranyPakiet_cena2)+parseFloat(this.state.dekoderCena)+parseFloat(this.state.canalPlusCena0)+(parseFloat(this.state.multiroomCena)*parseFloat(this.state.multiroomLiczba))).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, '$1,')} zł/mc</h2>
                 </div>
            <div className="podsumowanieBox2">
              <div className="malaCena ">
                  <div className={ this.state.wybranyPakiet_miesiace == "24" ? "hidden" : null}></div>
                  <div className={ this.state.wybranyPakiet_miesiace == "12" ? "hidden" : null}>Potem:</div>
                </div>
                <h2 className={ this.state.wybranyPakiet_miesiace == "12" ? "cenaKolor" : "cenaWielkoscPo "} >
                  {this.state.wybranyPakiet_faktura ===  false ?
                (parseFloat(this.state.wybranyPakiet_cena)+parseFloat(5)+parseFloat(this.state.dekoderCena)+parseFloat(this.state.canalPlusCena)+(parseFloat(this.state.multiroomCena)*parseFloat(this.state.multiroomLiczba))).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, '$1,') :
                (this.state.wybranyPakiet_cena+this.state.canalPlusCena+parseFloat(this.state.dekoderCena)+(this.state.multiroomCena*this.state.multiroomLiczba)).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, '$1,')} zł/mc</h2>
            </div>
            

            <input readOnly="readOnly" value="Wyślij Zgłoszenie" className={((this.state.zgodaMarketingowa) && (this.state.keyGoogle != false)) ?  "wpcf7-form-control wpcf7-submit padding15": "wpcf7-form-control wpcf7-submit padding15 disabledWyslij"} 
            type="submit" disabled={this.state.zgodaMarketingowa?  null: "disabled"} onClick={this.sendButton.bind(this)}  />

          </div>

          </div>
        </div>
        <div ></div>
    </div>

    )
  }else {
   return( <div>
     <PGTV_CALCULATOR stan={this.state} ></PGTV_CALCULATOR>
   </div>)
  }
  }
}