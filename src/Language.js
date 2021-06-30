
    import React, { useEffect } from 'react'
    import { useTranslation } from 'react-i18next'
    import i18next from 'i18next'
    import cookies from 'js-cookie'
    import { Dropdown } from 'semantic-ui-react'





    const English = () => <div onClick={() => {i18next.changeLanguage("en")}}>
    English
    </div>

    // const Franch = () => <div onClick={() => {i18next.changeLanguage("fr")}}>
    //   Français
    // </div>

    const Russian = () => <div onClick={() => {i18next.changeLanguage("ru")}}>
    русский
    </div>


    const Chinese = () => <div onClick={() => {i18next.changeLanguage("cn")}}>
      中國人
    </div>

   

    const languages = [
      {key: '222',
        code: 'en',
        text: English,
        value: 'English',
        name: 'English',
        country_code: 'gb',
        image: {  src: 'https://www.countryflags.io/us/flat/32.png' },
      },
      {
        key: '111',
        code: 'ru',
        text: Russian,
        value: 'русский',
        country_code: 'ru',
        name: 'русский',
        image: { src: 'https://www.countryflags.io/ru/flat/32.png' },
      },
      {key: '333',
        code: 'cn',
        text: Chinese,
        value: '中國人',
        // dir: 'rtl',
        country_code: 'cn',
        name: '中國人',
        image: { src: 'https://www.countryflags.io/cn/flat/32.png' },
      },
    ]
    

   

    export default function Language() {
      let darkMode = localStorage.getItem('theme')=== 'theme-dark';
      const currentLanguageCode = cookies.get('i18next') || 'en'
      const currentLanguage = languages.find((l) => l.code === currentLanguageCode)
      const { t } = useTranslation()
    
      useEffect(() => {
        console.log('Setting page stuff')
        document.body.dir = currentLanguage.dir || 'ltr'
        document.title = t('app_title')
      }, [currentLanguage, t])
    

      return (
        <div className="">
          <div className="language-select">
            <div className="d-flex justify-content-end align-items-center language-select-root">
              <div className="dropdown">

                  {/* <span>
                  <Dropdown
                    inline
                    options={languages}
                    defaultValue={currentLanguageCode==="en" && languages[1].value
                                 || currentLanguageCode==="ar" && languages[2].value
                                 ||currentLanguageCode==="fr" && languages[0].value}
                  />
                  </span> */}
                



                  <Dropdown
                    style={{color: darkMode?"#fff":"#5A6AF0", marginTop:"19px", backgroundColor: darkMode ? "#22262A" :"#F7F8FD", padding:"5px 12px 5px 12px", borderRadius:"15px", fontWeight:"100"}}
                    // button
                    inline
                    className='icon'
                    floating
                    labeled
                    icon='world'
                    // icon={currentLanguageCode==="en" && <img src="https://www.countryflags.io/us/flat/32.png" alt="" />
                    // || currentLanguageCode==="ar" && <img src="https://www.countryflags.io/us/flat/32.png" alt=""/>
                    // ||currentLanguageCode==="fr" && <img src="https://www.countryflags.io/us/flat/32.png" alt=""/>
                    //  }
                    options={languages}
                    search
                    text={currentLanguageCode==="en" && languages[0].value
                    || currentLanguageCode==="ru" && languages[1].value
                    ||currentLanguageCode==="cn" && languages[2].value}
                  />






                <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                </ul>
              </div>
            </div>
          </div>
        </div>
      )
    }
    
