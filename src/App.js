import logo from './logo.svg';
import './App.css';
import variantIllustration1 from './assets/variant_illustration_1.svg';
import variantIllustration2 from './assets/variant_illustration_2.svg';
import variantIllustration3 from './assets/variant_illustration_3.svg';
import variantIllustration4 from './assets/variant_illustration_4.svg';
import variantIllustration5 from './assets/variant_illustration_5.svg';
import variantIllustration6 from './assets/variant_illustration_6.svg';
import variantIllustration7 from './assets/variant_illustration_7.svg';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="intro">
          <h1 style={{ fontFamily: 'Whyte', fontWeight: 700, fontSize: '72px', lineHeight: '1em', color: 'rgba(0, 0, 0, 0.8)',margin:'0px',padding:'0px' }}>
            Welcome 
            <br />
            to Variants
          </h1>
          <h2 style={{ fontFamily: 'Whyte', fontWeight: 500, fontSize: '24px', lineHeight: '1.3333333333333333em', color: 'rgba(0, 0, 0, 0.8)' }}>
            Get up to speed with all things Variants
          </h2>
          <div style={{ display: 'flex', flexDirection: 'row', gap: '10px', padding: '12px 0px 0px 16px', borderRadius: '8px', backgroundColor: 'rgba(0, 0, 0, 0.8)' }}>
            <p style={{ fontFamily: 'Whyte', fontWeight: 400, fontSize: '16px', lineHeight: '1.5em', color: '#FFFFFF', textAlign: 'center' }}>
            </p>
          </div>
        </div>
        <div className="variants-illustration" >
          <div>
            <img src={variantIllustration1} alt="variant illustration 1" />
          </div>
          <div>
            <img src={variantIllustration1} alt="variant illustration 1" />
          </div>
          <div>
            <img src={variantIllustration1} alt="variant illustration 1" />
          </div>
          <div>
            <img src={variantIllustration1} alt="variant illustration 1" />
          </div>
          <div>
            <img src={variantIllustration1} alt="variant illustration 1" />
          </div>
        </div>
        
      </header>
    </div>
  );
}

export default App;
