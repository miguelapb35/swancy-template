import React from 'react';
//import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
{/*       <header className="App-header">
      </header> */}

      <section className="block " id="home-1">
        <div>
          <h2>fashion for<br/>anyone,<br/>supplied by<br/>everyone.</h2>
        </div>
      </section>  
      
    <section class="block" id="home-2">
      <div><h2>renew your wardrobe guilt free</h2></div>
      <aside>
        <p>
          Swancy is the online swapping app that allows you to renew your
          wardrobe sustainably and inexpensively.<br/>
          Have you got any clothes that you no longer wear? Upload them to our
          second-hand marketplace and use them as a currency to get pre-loved
          gems from people near you. Experimenting with fashion is fun,
          eco-friendly and affordable on Swancy.
        </p>
        <div class="store-badges">
          <a class="for-ios" href="https://itunes.apple.com/us/app/swancy/id1321064395?ls=1&amp;mt=8" onclick="gtag('event', 'download', {'method': 'iOS'});">
            <img class="badge" src="/templates/swancy/images/badge-ios.svg"/>
          </a>
          <a class="for-android" href="https://play.google.com/store/apps/details?id=com.swancy.swancy" onclick="gtag('event', 'download', {'method': 'Android'});">
            <img class="badge" src="/templates/swancy/images/badge-android.svg"/>
          </a>
        </div>
      </aside>
    </section>      
    
    <section class="block" id="home-3">
      <div>
        <h2>why swap?</h2>
        <h3>It’s ethical and sustainable</h3>
        <p>
          Clothes production has a big impact on the environment. By swapping
          you can experience the thrill of a new outfit while giving
          recognition to the resources that went into manufacturing the
          garments and the people who made them.
        </p>
        <h3>It’s cost free</h3>
        <p>
          Renewing your wardrobe doesn’t cost you any money on Swancy.
          Swapping allows you to make the most of the investment you already
          put into your style. Once your items no longer serve a purpose in
          your closet, you can use them as currency to get something
          new-to-you.
        </p>
      </div>
      <aside></aside>
      </section> 

    <section class="block" id="home-5">
      <div>
        <h2>join the community</h2>
        <p>
          Swancy is free and is currently available in Norway and in the UK.
          You can find it on both the app store and google play. Are you ready
          to drive the fashion revolution forward? Join the growing community
          of swappers and indulge in fashion without wasting resources and
          money.
        </p>
        <h3 class="highlight">Download Swancy now!</h3>
        <div class="store-badges">
          <a class="for-ios" href="https://itunes.apple.com/us/app/swancy/id1321064395?ls=1&amp;mt=8" onclick="gtag('event', 'download', {'method': 'iOS'});">
            <img class="badge" src="/templates/swancy/images/badge-ios.svg"/>
          </a>
          <a class="for-android" href="https://play.google.com/store/apps/details?id=com.swancy.swancy" onclick="gtag('event', 'download', {'method': 'Android'});">
            <img class="badge" src="/templates/swancy/images/badge-android.svg"/>
          </a>
        </div>
      </div>
      <aside></aside>
    </section>    

    <section class="strip">
    <span>Featured in and on:</span>
    <div class="row">
      <a href="https://www.bt.no/nyheter/okonomi/i/g7RaWq/kristin-vil-erobre-moteverda-med-tinder-for-klede" target="_blank">
        <img src="/images/pubs/bergens-tidende.svg"/>
      </a>
      <a href="https://shifter.no/bto-kristin-grostad-swancy/kristin-27-kaster-seg-pa-gjenbruks-trenden-lanserer-ny-mote-app-med-klaer-som-valuta/112971" target="_blank">
        <img src="/templates/swancy/images/pubs/shifter.svg"/>
      </a>
      <a href="https://www.countryliving.com/uk/news/g29015986/clothes-swap-apps/" target="_blank">
        <img src="/templates/swancy/images/pubs/country-living.svg"/>
      </a>
      <a href="https://www.itv.com/news/2019-06-14/is-swapping-clothes-a-sustainable-way-to-renew-your-style/" target="_blank">
        <img src="/templates/swancy/images/pubs/itv-news.svg"/>
      </a>
      <a href="https://www.telegraph.co.uk/fashion/style/sell-swap-donate-best-ways-give-unwanted-clothes-second-life/" target="_blank">
        <img src="/templates/swancy/images/pubs/telegraph.png"/>
      </a>
      <a href="https://www.visinnovasjon.no/2018/06/whats-a-nuclear-security-major-doing-in-a-fashion-start-up/" target="_blank">
        <img src="/templates/swancy/images/pubs/vis.svg"/>
      </a>
      <a href="https://costume.no/mote/dette-er-de-mest-populare-loppis-appene" target="_blank">
        <img src="/templates/swancy/images/pubs/costume.png"/>
      </a>
      <a href="https://www.q-meieriene.no/Innovatoerer/Artikler/Kristin-Swancy" target="_blank">
        <img src="/templates/swancy/images/pubs/q-meierene.png"/>
      </a>
      <a href="https://www.ulaest.dk/swancy-invites-you-to-a-swap-party-every-day/" target="_blank">
        <img src="/templates/swancy/images/pubs/ulaest.png"/>
      </a>
    </div>
  </section>
      
      <Footer />
    </div>
  );
}

export default App;
